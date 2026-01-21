import { api as client } from "./client";
import { Question } from "../../src/domain/types";

export class TeacherApi {
    async getQuestions(): Promise<Question[]> {
        return client.get<Question[]>("/api/teacher/questions");
    }

    async getResources(): Promise<any[]> {
        return client.get<any[]>("/api/teacher/resources");
    }
}
