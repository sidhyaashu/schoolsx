import { z } from "zod";

export const QuizSchema = z.object({
    title: z.string(),
    description: z.string().optional(),
    questions: z.array(z.object({
        id: z.string(),
        type: z.enum(["mcq", "short_answer", "true_false"]),
        question: z.string(),
        options: z.array(z.string()).optional(),
        correctAnswer: z.string(),
        explanation: z.string(),
    })),
});

export const InsightSchema = z.object({
    title: z.string(),
    summary: z.string(),
    details: z.string(),
    severity: z.enum(["info", "success", "warning", "error"]),
    actionItems: z.array(z.string()).optional(),
});

export const NoteSchema = z.object({
    title: z.string(),
    content: z.string(),
    keyTakeaways: z.array(z.string()),
    flashcards: z.array(z.object({
        front: z.string(),
        back: z.string(),
    })).optional(),
});

export type QuizData = z.infer<typeof QuizSchema>;
export type InsightData = z.infer<typeof InsightSchema>;
export type NoteData = z.infer<typeof NoteSchema>;
