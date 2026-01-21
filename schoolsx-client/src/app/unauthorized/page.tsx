"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";

export default function UnauthorizedPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4">
            <div className="flex max-w-md flex-col items-center text-center space-y-6 bg-white p-8 rounded-2xl shadow-xl">
                <div className="rounded-full bg-red-100 p-4">
                    <ShieldAlert className="h-12 w-12 text-red-600" />
                </div>
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">Access Denied</h1>
                    <p className="text-slate-500 text-sm">
                        You do not have permission to access this page. Please log in with the appropriate account or contact your administrator.
                    </p>
                </div>
                <div className="flex w-full gap-3">
                    <Button variant="outline" className="flex-1" asChild>
                        <Link href="/login">Back to Login</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
