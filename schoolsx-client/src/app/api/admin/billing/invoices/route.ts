import { NextResponse } from "next/server";
import { Invoice } from "@/domain/types";

export async function GET() {
    const invoices: Invoice[] = [
        { id: "INV-2024-001", student: "Aditi Sharma", class: "Grade 6A", amount: "₹ 15,000", date: "Oct 01, 2024", status: "Paid" },
        { id: "INV-2024-002", student: "Rohan Kumar", class: "Grade 8B", amount: "₹ 15,000", date: "Oct 01, 2024", status: "Overdue" },
        { id: "INV-2024-003", student: "Sneha Singh", class: "Grade 7C", amount: "₹ 15,000", date: "Oct 01, 2024", status: "Pending" },
        { id: "INV-2024-004", student: "Arjun Das", class: "Grade 9A", amount: "₹ 20,000", date: "Oct 05, 2024", status: "Paid" },
    ];

    return NextResponse.json({ data: invoices });
}
