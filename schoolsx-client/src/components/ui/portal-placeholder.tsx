import React from "react";
import { Construction } from "lucide-react";
import { cn } from "@/lib/utils";

interface PortalPlaceholderProps {
    title: string;
    description: string;
    type?: "student" | "teacher" | "parent" | "admin";
}

export default function PortalPlaceholder({ title, description, type = "student" }: PortalPlaceholderProps) {
    const themes = {
        student: "bg-blue-50 text-blue-600 border-blue-100",
        teacher: "bg-emerald-50 text-emerald-600 border-emerald-100",
        parent: "bg-purple-50 text-purple-600 border-purple-100",
        admin: "bg-slate-50 text-slate-600 border-slate-100",
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="space-y-2">
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">{title}</h1>
                <p className="text-slate-500 font-medium">{description}</p>
            </div>

            <div className={cn(
                "border-2 border-dashed rounded-[2.5rem] p-24 text-center space-y-4",
                themes[type]
            )}>
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg mb-4">
                    <Construction className="h-8 w-8" />
                </div>
                <h2 className="text-xl font-bold">Module Under Construction</h2>
                <p className="max-w-xs mx-auto text-sm opacity-80">
                    Our AI is currently working on this module. Check back soon for the full feature-rich experience.
                </p>
            </div>
        </div>
    );
}
