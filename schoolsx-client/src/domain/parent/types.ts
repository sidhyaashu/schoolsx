import { BaseEntity, UserId, SchoolId, UserId as StudentUserId } from "../common/models";

export interface Parent extends BaseEntity {
    userId: UserId;
    schoolId: SchoolId;
    children: StudentUserId[];
    personalInfo: {
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        avatarUrl?: string;
    };
}

export interface ParentInsight {
    id: string;
    childId: StudentUserId;
    type: "academic" | "behavioral" | "attendance";
    severity: "info" | "success" | "warning" | "error";
    title: string;
    description: string;
    suggestedAction?: string;
    createdAt: Date;
}
