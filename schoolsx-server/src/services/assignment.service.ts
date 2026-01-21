import { db } from '../config/db.js';
import { assignments, submissions } from '../db/schema.js';
import { eq, and } from 'drizzle-orm';

export class AssignmentService {
    async getStudentAssignments(studentId: number) {
        // This is a simplification. Ideally, we filter by subjects the student is enrolled in.
        // For now, we return all assignments (or we should join with student_subjects)
        return await db.select().from(assignments);
    }

    async getAssignmentById(id: number) {
        const result = await db.select().from(assignments).where(eq(assignments.id, id));
        return result[0];
    }

    async submitAssignment(data: { assignmentId: number; studentId: number; fileUrl: string }) {
        const [submission] = await db.insert(submissions).values({
            assignmentId: data.assignmentId,
            studentId: data.studentId,
            fileUrl: data.fileUrl,
        }).returning();
        return submission;
    }

    async getStudentSubmissions(studentId: number) {
        return await db.select().from(submissions).where(eq(submissions.studentId, studentId));
    }
}

export const assignmentService = new AssignmentService();
