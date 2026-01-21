import { NextRequest, NextResponse } from "next/server";
import { StudentPerformance } from "@/domain/types";

export async function GET(req: NextRequest) {
    const performance: StudentPerformance = {
        gpa: "3.8/4.0",
        attendance: "96%",
        assignments: "42/45",
        participation: "High",
        subjectWise: [
            { subject: "Mathematics", score: 92, grade: "A+" },
            { subject: "Science", score: 88, grade: "A" },
            { subject: "English Literature", score: 95, grade: "A+" },
            { subject: "Social Studies", score: 84, grade: "B+" },
            { subject: "Computer Science", score: 98, grade: "O" },
        ]
    };

    return NextResponse.json({ data: performance });
}
