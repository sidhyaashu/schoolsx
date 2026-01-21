import { NextResponse } from "next/server";
import { Application } from "@/domain/types";

export async function GET() {
    const applications: Application[] = [
        { id: 101, name: "Aarav Singh", grade: "Grade 7", status: "Under Review", documents: "Pending", score: "85%" },
        { id: 102, name: "Vivaan Kumar", grade: "Grade 5", status: "Interview Scheduled", documents: "Verified", score: "92%" },
        { id: 103, name: "Diya Patel", grade: "Grade 6", status: "Accepted", documents: "Verified", score: "88%" },
    ];

    return NextResponse.json({ data: applications });
}
