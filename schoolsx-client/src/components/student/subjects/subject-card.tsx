"use client";

import { Card } from "@/components/ui/card";
import { ProgressRing } from "@/components/ui/progress-ring";
import { Button } from "@/components/ui/button";
import { ChevronRight, Book } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SubjectCardProps {
    id: string;
    name: string;
    progress: number;
    totalChapters: number;
    completedChapters: number;
    icon: React.ElementType;
    className?: string;
    color?: string;
}

export default function SubjectCard({
    id,
    name,
    progress,
    totalChapters,
    completedChapters,
    icon: Icon,
    className,
    color = "blue",
}: SubjectCardProps) {
    const colorMap: Record<string, string> = {
        blue: "text-blue-600 bg-blue-50 border-blue-100",
        green: "text-emerald-600 bg-emerald-50 border-emerald-100",
        purple: "text-purple-600 bg-purple-50 border-purple-100",
        amber: "text-amber-600 bg-amber-50 border-amber-100",
        rose: "text-rose-600 bg-rose-50 border-rose-100",
    };

    return (
        <Card className={cn("p-6 flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-slate-100", className)}>
            <div className={cn("h-16 w-16 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300", colorMap[color])}>
                <Icon className="h-8 w-8" />
            </div>

            <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">{name}</h3>
            <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">{completedChapters} / {totalChapters} Chapters Done</p>

            <div className="my-6">
                <ProgressRing
                    value={progress}
                    size={100}
                    strokeWidth={8}
                    color={color === "blue" ? "#2563eb" : color === "green" ? "#059669" : "#3b82f6"}
                />
            </div>

            <Button asChild className="w-full h-11 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold group">
                <Link href={`/student/subjects/${id}` as any} className="flex items-center justify-center gap-2">
                    Study Now
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </Button>
        </Card>
    );
}
