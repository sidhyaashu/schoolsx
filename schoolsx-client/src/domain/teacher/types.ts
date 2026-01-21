import { BaseEntity, UserId, SchoolId, SubjectId, ClassId } from "../common/models";

export interface Teacher extends BaseEntity {
    userId: UserId;
    schoolId: SchoolId;
    subjects: SubjectId[];
    classes: ClassId[];
    personalInfo: {
        firstName: string;
        lastName: string;
        expertise: string[];
        avatarUrl?: string;
    };
    teachingStats: {
        totalStudents: number;
        activeClasses: number;
        assignmentsChecked: number;
        pointsEarned: number;
    };
}

export interface TeacherTask {
    id: string;
    title: string;
    dueDate: Date;
    priority: "low" | "medium" | "high";
    status: "pending" | "completed";
    type: "grading" | "lesson-plan" | "meeting" | "other";
}
