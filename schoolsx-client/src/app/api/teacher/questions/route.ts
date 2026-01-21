import { NextResponse } from "next/server";
import { Question } from "@/domain/types";

export async function GET() {
    const questions: Question[] = [
        { id: 1, text: "What is the powerhouse of the cell?", type: "MCQ", difficulty: "Easy", class: "Grade 7", marks: 1 },
        { id: 2, text: "Explain the process of photosynthesis.", type: "Long Answer", difficulty: "Medium", class: "Grade 7", marks: 5 },
        { id: 3, text: "Define Newton's First Law of Motion.", type: "Short Answer", difficulty: "Easy", class: "Grade 8", marks: 2 },
        { id: 4, text: "Calculate the force if mass is 10kg and acceleration is 5m/s².", type: "Numerical", difficulty: "Hard", class: "Grade 8", marks: 3 },
        { id: 5, text: "Who was the first Mughal Emperor?", type: "MCQ", difficulty: "Easy", class: "Grade 7", marks: 1 },
    ];

    return NextResponse.json({ data: questions });
}
