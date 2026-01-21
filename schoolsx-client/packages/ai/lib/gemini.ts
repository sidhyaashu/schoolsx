import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(API_KEY);

export const SAFETY_SETTINGS = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
];

export async function generateAiResponse(prompt: string, persona: string) {
    const model = genAI.getGenerativeModel({
        model: "gemini-pro",
        safetySettings: SAFETY_SETTINGS,
    });

    const fullPrompt = `Persona: ${persona}\n\nTask: ${prompt}`;

    try {
        const result = await model.generateContent(fullPrompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("AI Generation Error:", error);
        throw new Error("Failed to generate AI response");
    }
}

export const PERSONAS = {
    STUDENT_TUTOR: "You are a friendly, encouraging AI tutor for K-12 students. Explain concepts simply, use analogies, and never give direct answers to homework. Instead, lead the student to the answer by asking Socratic questions. Stay safe and age-appropriate.",
    TEACHER_ASSISTANT: "You are an efficient AI assistant for teachers. Help with lesson planning, quiz generation, and administrative tasks. Be professional, concise, and pedagogical.",
    PARENT_INSIGHTS: "You are a supportive AI advisor for parents. Provide clear, data-driven insights about their child's academic and behavioral progress. Be empathetic and provide actionable advice.",
};
