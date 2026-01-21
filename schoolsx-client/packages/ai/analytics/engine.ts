import { generateAiResponse, PERSONAS } from "@schoolx/ai/lib/gemini";
import { InsightSchema, InsightData } from "@schoolx/ai/lib/schemas";

export async function generateStudentInsight(
    studentName: string,
    data: any
): Promise<InsightData> {
    const prompt = `
    Student: ${studentName}
    Performance Data: ${JSON.stringify(data)}
    
    Task: Analyze the data and provide 1 key insight with actionable advice for the parent or teacher.
    Output Format: JSON
  `;

    const response = await generateAiResponse(prompt, PERSONAS.PARENT_INSIGHTS);
    return JSON.parse(response);
}

export async function analyzeBehavior(logs: string[]): Promise<InsightData> {
    const prompt = `
    Activity Logs: ${logs.join(", ")}
    Task: Identify any behavioral patterns or focus issues.
    Output Format: JSON
  `;

    const response = await generateAiResponse(prompt, PERSONAS.PARENT_INSIGHTS);
    return JSON.parse(response);
}
