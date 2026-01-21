"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
            <div className="max-w-md w-full space-y-8 animate-in fade-in zoom-in duration-700">
                {/* Visual Element */}
                <div className="relative mx-auto w-48 h-48 flex items-center justify-center">
                    <div className="absolute inset-0 bg-blue-100 rounded-full animate-pulse opacity-50" />
                    <div className="absolute inset-4 bg-blue-50 rounded-full" />
                    <h1 className="relative text-8xl font-black text-blue-600 drop-shadow-sm">404</h1>
                </div>

                {/* Text Content */}
                <div className="space-y-3">
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">Lost in the Matrix?</h2>
                    <p className="text-slate-500 font-medium text-lg leading-relaxed">
                        The page you're looking for was either moved, deleted, or never existed. Let's get you back on track.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Button asChild className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl h-12 px-8 shadow-lg shadow-blue-100">
                        <Link href="/">
                            <Home className="mr-2 h-5 w-5" />
                            Back to Home
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full sm:w-auto border-slate-200 text-slate-600 font-bold rounded-xl h-12 px-8 hover:bg-slate-100">
                        <button onClick={() => window.history.back()}>
                            <ArrowLeft className="mr-2 h-5 w-5" />
                            Go Back
                        </button>
                    </Button>
                </div>

                {/* Decorative AI Help */}
                <div className="pt-10 flex items-center justify-center gap-2 text-slate-400 group cursor-default">
                    <Search size={16} className="group-hover:text-blue-500 transition-colors" />
                    <span className="text-sm font-bold uppercase tracking-widest group-hover:text-slate-600 transition-colors">SchoolX Smart Redirect</span>
                </div>
            </div>
        </div>
    );
}
