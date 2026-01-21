export type Brand<K, T> = K & { __brand: T };

export type EntityId = Brand<string, "EntityId">;
export type UserId = Brand<string, "UserId">;
export type SchoolId = Brand<string, "SchoolId">;
export type SubjectId = Brand<string, "SubjectId">;
export type ClassId = Brand<string, "ClassId">;
export type ChapterId = Brand<string, "ChapterId">;

export interface BaseEntity {
    id: EntityId;
    createdAt: Date;
    updatedAt: Date;
}

export interface Metadata {
    [key: string]: any;
}

export type Status = "active" | "inactive" | "archived" | "draft";
