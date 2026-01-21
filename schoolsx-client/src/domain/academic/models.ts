import { BaseEntity, SubjectId, ChapterId, SchoolId } from "../common/models";

export interface Subject extends BaseEntity {
    schoolId: SchoolId;
    name: string;
    code: string;
    description?: string;
    icon: string;
    color: string;
    chapters: ChapterId[];
}

export interface Chapter extends BaseEntity {
    subjectId: SubjectId;
    title: string;
    order: number;
    description?: string;
    learningObjectives: string[];
    topics: Topic[];
}

export interface Topic {
    id: string;
    title: string;
    content: string;
    resources: Resource[];
    aiSummary?: string;
}

export interface Resource {
    id: string;
    title: string;
    type: "pdf" | "video" | "document" | "link";
    url: string;
    isAiGenerated: boolean;
    metadata?: Record<string, any>;
}
