import { api as client } from "./client";
import { User } from "../../src/domain/types";

export class AuthApi {
    async login(credentials: any): Promise<User> {
        return client.post<User>("/api/auth/login", credentials);
    }

    async logout(): Promise<void> {
        return client.post<void>("/api/auth/logout", {});
    }

    async getCurrentUser(): Promise<User> {
        return client.get<User>("/api/auth/me");
    }
}
