import { NextResponse } from "next/server";

export async function GET() {
    const resources = [
        { title: "Chapter 1 Notes: Nutrition", type: "PDF", size: "1.2 MB", date: "Oct 24", shared: "Grade 7A" },
        { title: "Cell Structure Diagram", type: "Image", size: "2.4 MB", date: "Oct 22", shared: "Grade 9B" },
        { title: "Force Worksheet", type: "DOCX", size: "0.5 MB", date: "Oct 20", shared: "Grade 8A" },
        { title: "Lab Safety Rules", type: "PDF", size: "1.0 MB", date: "Oct 15", shared: "All Classes" },
    ];

    return NextResponse.json({ data: resources });
}
