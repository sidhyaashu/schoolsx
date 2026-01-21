import { NextRequest, NextResponse } from "next/server";
import { User, Role } from "@/domain/types";

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        // Mock successful login based on email simple heuristic
        let role: Role = "student";
        let name = "Aditi Sharma";

        if (email.toLowerCase().includes("teacher")) {
            role = "teacher";
            name = "Rajesh Kumar";
        } else if (email.toLowerCase().includes("parent")) {
            role = "parent";
            name = "Amit Sharma";
        } else if (email.toLowerCase().includes("admin")) {
            role = "admin";
            name = "Administrator";
        }

        const user: User = {
            id: "1",
            name: name,
            email: email,
            role: role,
            schoolId: "school_1",
            avatar: "/avatars/01.png"
        };

        const response = NextResponse.json({ data: user });

        // Set cookie for middleware
        response.cookies.set("session", JSON.stringify(user), {
            httpOnly: false, // Set to false so client-side can read if needed, though better kept true in production
            path: "/",
            maxAge: 86400,
            sameSite: "lax",
        });

        return response;
    } catch (error) {
        return NextResponse.json(
            { error: { code: "LOGIN_FAILED", message: "Invalid credentials" } },
            { status: 401 }
        );
    }
}
