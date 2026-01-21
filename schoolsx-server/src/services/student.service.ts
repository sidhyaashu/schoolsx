import { db } from '../config/db.js';
import { subjects, studentSubjects } from '../db/schema.js';
import { eq } from 'drizzle-orm';

export class StudentService {
    async getEnrolledSubjects(studentId: number) {
        // Fetch subjects linked to the student
        const enrolled = await db.select({
            id: subjects.id,
            name: subjects.name,
            code: subjects.code,
            description: subjects.description,
            progress: studentSubjects.progress,
            teacherId: subjects.teacherId,
        })
            .from(studentSubjects)
            .innerJoin(subjects, eq(studentSubjects.subjectId, subjects.id))
            .where(eq(studentSubjects.studentId, studentId));

        return enrolled;
    }
}

export const studentService = new StudentService();
