"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsSent(true);
        }, 1500);
    };

    return (
        <>
            <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">Forgot Password</h1>
                <p className="text-sm text-muted-foreground">
                    Enter your email address and we'll send you a link to reset your password.
                </p>
            </div>

            {isSent ? (
                <div className="bg-green-50 text-green-900 p-4 rounded-lg text-sm text-center">
                    If an account exists for that email, we have sent password reset instructions.
                </div>
            ) : (
                <div className="grid gap-6">
                    <form onSubmit={onSubmit}>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="name@example.com" type="email" disabled={isLoading} />
                            </div>
                            <Button disabled={isLoading}>
                                {isLoading && (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                Send Reset Link
                            </Button>
                        </div>
                    </form>
                </div>
            )}

            <p className="px-8 text-center text-sm text-muted-foreground">
                <Link
                    href="/login"
                    className="flex items-center justify-center gap-2 hover:text-primary"
                >
                    <ArrowLeft className="h-4 w-4" /> Back to Login
                </Link>
            </p>
        </>
    );
}
