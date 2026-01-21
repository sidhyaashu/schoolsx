import { db } from '../config/db.js';
import { periods, classrooms, users } from '../db/schema.js';
import { eq, and } from 'drizzle-orm';

interface ConflictCheckResult {
    hasConflict: boolean;
    conflicts: Array<{ type: string; message: string }>;
}

export class SchedulingService {
    /**
     * Check for conflicts when adding a new period to the timetable
     * Conflicts include:
     * - Teacher teaching two classes at same time
     * - Room being used by two classes at same time
     * - Section having overlapping periods
     */
    async checkConflicts(periodData: {
        timetableId: number;
        classroomId: number;
        dayOfWeek: string;
        startTime: string;
        endTime: string;
    }): Promise<ConflictCheckResult> {
        const conflicts: Array<{ type: string; message: string }> = [];

        // Get the classroom details to find teacher and section
        const classroomDetails = await db.select().from(classrooms).where(eq(classrooms.id, periodData.classroomId));
        if (!classroomDetails.length || !classroomDetails[0]) {
            return { hasConflict: true, conflicts: [{ type: 'INVALID_CLASSROOM', message: 'Classroom not found' }] };
        }

        const teacherId = classroomDetails[0].teacherId;
        const sectionId = classroomDetails[0].sectionId;
        const roomNumber = classroomDetails[0].roomNumber;

        // Check for teacher conflicts (teacher teaching two classes at same time)
        const teacherPeriods = await db
            .select()
            .from(periods)
            .innerJoin(classrooms, eq(periods.classroomId, classrooms.id))
            .where(
                and(
                    eq(periods.timetableId, periodData.timetableId),
                    eq(periods.dayOfWeek, periodData.dayOfWeek as any),
                    eq(classrooms.teacherId, teacherId)
                )
            );

        for (const tp of teacherPeriods) {
            if (this.timesOverlap(periodData.startTime, periodData.endTime, tp.periods.startTime, tp.periods.endTime)) {
                const teacher = await db.select().from(users).where(eq(users.id, teacherId));
                conflicts.push({
                    type: 'TEACHER_CONFLICT',
                    message: `Teacher ${teacher[0]?.name} is already scheduled at this time`
                });
            }
        }

        // Check for room conflicts (now room is part of classroom)
        if (roomNumber) {
            const roomPeriods = await db
                .select()
                .from(periods)
                .innerJoin(classrooms, eq(periods.classroomId, classrooms.id))
                .where(
                    and(
                        eq(periods.timetableId, periodData.timetableId),
                        eq(periods.dayOfWeek, periodData.dayOfWeek as any),
                        eq(classrooms.roomNumber, roomNumber)
                    )
                );

            for (const rp of roomPeriods) {
                if (this.timesOverlap(periodData.startTime, periodData.endTime, rp.periods.startTime, rp.periods.endTime)) {
                    conflicts.push({
                        type: 'ROOM_CONFLICT',
                        message: `Room ${roomNumber} is already occupied at this time`
                    });
                }
            }
        }

        // Check for section conflicts (students can't be in two places at once)
        const sectionPeriods = await db
            .select()
            .from(periods)
            .innerJoin(classrooms, eq(periods.classroomId, classrooms.id))
            .where(
                and(
                    eq(periods.timetableId, periodData.timetableId),
                    eq(periods.dayOfWeek, periodData.dayOfWeek as any),
                    eq(classrooms.sectionId, sectionId)
                )
            );

        for (const sp of sectionPeriods) {
            if (this.timesOverlap(periodData.startTime, periodData.endTime, sp.periods.startTime, sp.periods.endTime)) {
                conflicts.push({
                    type: 'SECTION_CONFLICT',
                    message: `Section already has a class scheduled at this time`
                });
            }
        }

        return {
            hasConflict: conflicts.length > 0,
            conflicts
        };
    }

    /**
     * Helper to check if two time ranges overlap
     */
    private timesOverlap(start1: string, end1: string, start2: string, end2: string): boolean {
        const s1 = this.timeToMinutes(start1);
        const e1 = this.timeToMinutes(end1);
        const s2 = this.timeToMinutes(start2);
        const e2 = this.timeToMinutes(end2);

        return (s1 < e2 && e1 > s2);
    }

    /**
     * Convert HH:MM to minutes since midnight
     */
    private timeToMinutes(time: string): number {
        const parts = time.split(':');
        const hours = parts[0] ? parseInt(parts[0], 10) : 0;
        const minutes = parts[1] ? parseInt(parts[1], 10) : 0;
        return hours * 60 + minutes;
    }

    async createPeriod(periodData: any) {
        const conflictCheck = await this.checkConflicts(periodData);
        if (conflictCheck.hasConflict) {
            throw new Error(`Scheduling conflicts detected: ${JSON.stringify(conflictCheck.conflicts)}`);
        }

        const [period] = await db.insert(periods).values(periodData).returning();
        return period;
    }
}

export const schedulingService = new SchedulingService();
