"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Home, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-rose-50/30 flex flex-col items-center justify-center p-6 text-center">
            <div className="max-w-md w-full space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
                {/* Error Icon */}
                <div className="h-24 w-24 bg-rose-100 rounded-3xl flex items-center justify-center mx-auto shadow-xl shadow-rose-100/50">
                    <AlertTriangle className="h-12 w-12 text-rose-600" />
                </div>

                {/* Text Content */}
                <div className="space-y-3">
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">Something went wrong!</h2>
                    <p className="text-slate-500 font-medium">
                        An unexpected error occurred in the system. Our AI has been notified and we're looking into it.
                    </p>
                    {error.digest && (
                        <div className="bg-white border px-3 py-1 rounded-full inline-block text-[10px] font-mono text-slate-400">
                            Error ID: {error.digest}
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Button onClick={() => reset()} className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl h-12 px-8 flex items-center gap-2 shadow-lg">
                        <RefreshCcw className="h-5 w-5" />
                        Try Again
                    </Button>
                    <Button asChild variant="outline" className="w-full sm:w-auto border-slate-200 text-slate-600 font-bold rounded-xl h-12 px-8 hover:bg-slate-100">
                        <Link href="/">
                            <Home className="h-5 w-5 mr-2" />
                            Go to Home
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
