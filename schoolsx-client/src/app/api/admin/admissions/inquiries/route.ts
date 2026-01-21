import { NextResponse } from "next/server";
import { Inquiry } from "@/domain/types";

export async function GET() {
    const inquiries: Inquiry[] = [
        { id: 1, name: "Rahul Gupta", grade: "Grade 6", parent: "Amit Gupta", phone: "+91 98765 43210", status: "New", date: "Today" },
        { id: 2, name: "Sneha Reddy", grade: "Grade 8", parent: "Priya Reddy", phone: "+91 98765 12345", status: "Contacted", date: "Yesterday" },
        { id: 3, name: "Arjun Mehra", grade: "Grade 10", parent: "Sanjay Mehra", phone: "+91 91234 56789", status: "New", date: "Today" },
    ];

    return NextResponse.json({ data: inquiries });
}
