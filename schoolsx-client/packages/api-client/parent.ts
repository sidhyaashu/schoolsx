import { api as client } from "./client";
import { StudentPerformance, AIInsight } from "../../src/domain/types";

export class ParentApi {
    async getPerformance(studentId: string): Promise<StudentPerformance> {
        return client.get<StudentPerformance>(`/api/parent/performance?studentId=${studentId}`);
    }

    async getAIInsights(studentId: string): Promise<AIInsight> {
        return client.get<AIInsight>(`/api/parent/ai-insights?studentId=${studentId}`);
    }
}
