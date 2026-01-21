import { db } from '../config/db.js';
import { classrooms, marks, exams } from '../db/schema.js';
import { eq, and } from 'drizzle-orm';

/**
 * Permission guards for granular RBAC
 * These functions check whether a user has permission to perform specific actions
 * based on relationships in the database
 */

export class PermissionGuard {
    /**
     * Check if a teacher can edit marks for a student
     * A teacher can only edit marks if they teach the class the exam belongs to
     */
    async canEditMarks(teacherId: number, examId: number): Promise<boolean> {
        // Get the exam and its classroom
        const examData = await db
            .select()
            .from(exams)
            .innerJoin(classrooms, eq(exams.classroomId, classrooms.id))
            .where(eq(exams.id, examId));

        if (!examData || !examData.length || !examData[0]?.classrooms) return false;

        // Check if the teacher teaches this classroom
        return examData[0].classrooms.teacherId === teacherId;
    }

    /**
     * Check if a teacher can view a student's data
     * A teacher can view students in their classrooms
     */
    async canViewStudent(teacherId: number, studentId: number): Promise<boolean> {
        // Check if teacher has any classrooms with this student
        // This would require a student enrollment check
        // For now, return true for all teachers (teachers can view any student)
        return true;
    }

    /**
     * Check if a teacher can mark attendance for a classroom
     */
    async canMarkAttendance(teacherId: number, classroomId: number): Promise<boolean> {
        const classroom = await db
            .select()
            .from(classrooms)
            .where(eq(classrooms.id, classroomId));

        if (!classroom || !classroom.length || !classroom[0]) return false;

        return classroom[0].teacherId === teacherId;
    }
}

export const permissionGuard = new PermissionGuard();
