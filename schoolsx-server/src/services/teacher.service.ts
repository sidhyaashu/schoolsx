import { db } from '../config/db.js';
import { subjects, users } from '../db/schema.js';
import { eq } from 'drizzle-orm';

export class TeacherService {
    async getClasses(teacherId: number) {
        // Fetch subjects assigned to this teacher
        return await db.select().from(subjects).where(eq(subjects.teacherId, teacherId));
    }

    async getStudents(teacherId: number) {
        // This would be a complex join to find students enrolled in teacher's subjects
        // Simplified for now
        return [];
    }
}

export const teacherService = new TeacherService();
