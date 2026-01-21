import { NextResponse } from "next/server";
import { LiveSession } from "@/domain/types";

export async function GET() {
    const activeSessions: LiveSession[] = [
        {
            id: 1,
            class: "Grade 7A",
            subject: "Science",
            topic: "Nutrition in Plants",
            teacher: "Ms. Riya",
            students: "38/42",
            duration: "14:20",
            status: "Healthy",
            engagement: "High"
        },
        {
            id: 2,
            class: "Grade 8B",
            subject: "Physics",
            topic: "Force & Pressure",
            teacher: "Mr. Rajesh",
            students: "35/40",
            duration: "45:10",
            status: "Healthy",
            engagement: "Medium"
        },
        {
            id: 3,
            class: "Grade 9C",
            subject: "Math",
            topic: "Triangles",
            teacher: "Mrs. Kapoor",
            students: "28/40",
            duration: "05:00",
            status: "Lag Detected",
            engagement: "Low"
        },
    ];

    return NextResponse.json({ data: activeSessions });
}
