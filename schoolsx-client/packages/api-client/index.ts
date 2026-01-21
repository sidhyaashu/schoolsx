import { AdminApi } from "./admin";
import { AuthApi } from "./auth";
import { ParentApi } from "./parent";
import { TeacherApi } from "./teacher";
import { StudentApi } from "./student";

export interface ApiResponse<T> {
    data?: T;
    error?: {
        code: string;
        message: string;
        details?: any;
    };
    metadata?: {
        timestamp: string;
        requestId: string;
        pagination?: {
            total: number;
            page: number;
            limit: number;
        };
    };
}

export class ApiError extends Error {
    constructor(public code: string, message: string, public details?: any) {
        super(message);
        this.name = "ApiError";
    }
}

export const API_CONFIG = {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "",
    timeout: 10000,
    key: process.env.NEXT_PUBLIC_API_KEY,
};

export const api = {
    auth: new AuthApi(),
    admin: new AdminApi(),
    parent: new ParentApi(),
    teacher: new TeacherApi(),
    student: new StudentApi(),
};
