"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Loader2 } from "lucide-react";

interface AuthGuardProps {
    children: React.ReactNode;
    allowedRoles: ("student" | "teacher" | "parent" | "admin")[];
}

export default function AuthGuard({ children, allowedRoles }: AuthGuardProps) {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { user, isAuthenticated, isLoading } = useAppSelector((state) => state.auth);
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            // 1. Try to recover session from storage if not in Redux
            if (!isAuthenticated) {
                const sessionStr = localStorage.getItem("session");
                if (sessionStr) {
                    try {
                        const sessionUser = JSON.parse(sessionStr);
                        // Hydrate Redux
                        dispatch({ type: 'auth/loginSuccess', payload: sessionUser });
                        // Let the next render handle the role check
                        return;
                    } catch (e) {
                        console.error("Failed to parse session", e);
                        localStorage.removeItem("session");
                    }
                }
            }

            setIsChecking(false);
        };

        checkAuth();
    }, [isAuthenticated, dispatch]);

    useEffect(() => {
        if (isChecking) return; // Wait for hydration attempt

        // 2. If still not authenticated after check, redirect to login
        if (!isAuthenticated) {
            router.replace("/login");
            return;
        }

        // 3. Check Role Access
        if (user && !allowedRoles.includes(user.role)) {
            router.replace("/unauthorized" as any);
        }

    }, [isChecking, isAuthenticated, user, allowedRoles, router]);

    // Show loading while we are checking localStorage or Redux is loading
    if (isChecking || isLoading) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-slate-50">
                <div className="flex flex-col items-center gap-2">
                    <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
                    <p className="text-sm text-slate-500 font-medium">Verifying access...</p>
                </div>
            </div>
        );
    }

    // If authenticated and role matches (or user user is null but authenticated?? shouldn't happen), render
    // We add a safety check for user presence
    if (isAuthenticated && user && allowedRoles.includes(user.role)) {
        return <>{children}</>;
    }

    return null; // Should have redirected by now
}
