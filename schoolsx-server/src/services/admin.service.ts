import { db } from '../config/db.js';
import { schools, grades, sections, classrooms, subjects, users } from '../db/schema.js';
import { eq } from 'drizzle-orm';

export class AdminService {
    // School Management
    async createSchool(data: { name: string; address?: string; phone?: string; email?: string }) {
        const [school] = await db.insert(schools).values(data).returning();
        return school;
    }

    async getSchools() {
        return await db.select().from(schools);
    }

    // Grade Management
    async createGrade(data: { schoolId: number; name: string; level: number }) {
        const [grade] = await db.insert(grades).values(data).returning();
        return grade;
    }

    async getGradesBySchool(schoolId: number) {
        return await db.select().from(grades).where(eq(grades.schoolId, schoolId));
    }

    // Section Management
    async createSection(data: { gradeId: number; name: string; capacity?: number }) {
        const [section] = await db.insert(sections).values(data).returning();
        return section;
    }

    async getSectionsByGrade(gradeId: number) {
        return await db.select().from(sections).where(eq(sections.gradeId, gradeId));
    }

    // Classroom Management (Subject-Section-Teacher association)
    async createClassroom(data: {
        sectionId: number;
        subjectId: number;
        teacherId: number;
        academicYearId: number;
        roomNumber?: string;
    }) {
        const [classroom] = await db.insert(classrooms).values(data).returning();
        return classroom;
    }

    async getClassroomsBySection(sectionId: number) {
        return await db
            .select()
            .from(classrooms)
            .innerJoin(subjects, eq(classrooms.subjectId, subjects.id))
            .innerJoin(users, eq(classrooms.teacherId, users.id))
            .where(eq(classrooms.sectionId, sectionId));
    }
}

export const adminService = new AdminService();
