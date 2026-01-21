import { generateAiResponse, PERSONAS } from "@schoolx/ai/lib/gemini";
import { QuizSchema, NoteSchema, QuizData, NoteData } from "@schoolx/ai/lib/schemas";

export async function askTutor(question: string, context?: string) {
    const prompt = `
    Context: ${context || "No additional context provided."}
    Question: ${question}
    
    Instruction: Answer the student's question according to the persona.
  `;

    return generateAiResponse(prompt, PERSONAS.STUDENT_TUTOR);
}

export async function generateQuiz(topic: string, grade: string): Promise<QuizData> {
    const prompt = `
    Topic: ${topic}
    Grade Level: ${grade}
    Task: Generate a 5-question quiz in JSON format.
    Requirement: Each question must have a clear explanation.
    Schema Requirement: Follow this structure exactly: { "title": "...", "questions": [...] }
  `;

    const response = await generateAiResponse(prompt, PERSONAS.TEACHER_ASSISTANT);
    // In a real implementation, we would use Zod to parse the JSON string from the AI response
    // and handle potential parsing errors or retry logic.
    return JSON.parse(response);
}

export async function generateLearningNotes(topic: string): Promise<NoteData> {
    const prompt = `
    Topic: ${topic}
    Task: Generate comprehensive learning notes in JSON format.
    Included: Key takeaways and 3 flashcards.
  `;

    const response = await generateAiResponse(prompt, PERSONAS.STUDENT_TUTOR);
    return JSON.parse(response);
}
