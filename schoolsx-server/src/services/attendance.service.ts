import { db } from '../config/db.js';
import { attendance } from '../db/schema.js';
import { eq, and } from 'drizzle-orm';

export class AttendanceService {
    async markAttendance(data: {
        studentId: number;
        classroomId: number;
        date: Date;
        status: 'present' | 'absent' | 'late' | 'excused';
        markedBy: number;
        remarks?: string;
    }) {
        const [record] = await db.insert(attendance).values(data).returning();
        return record;
    }

    async getStudentAttendance(studentId: number) {
        return await db.select().from(attendance).where(eq(attendance.studentId, studentId));
    }

    async getClassroomAttendance(classroomId: number, date: Date) {
        return await db.select().from(attendance).where(
            and(
                eq(attendance.classroomId, classroomId),
                eq(attendance.date, date)
            )
        );
    }
}

export const attendanceService = new AttendanceService();
