"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PlayCircle, Clock, BookOpen } from "lucide-react";
import Link from "next/link";

interface ContinueLearningWidgetProps {
    subject: string;
    chapter: string;
    progress: number;
    lastActivity: string;
    href: string;
}

export default function ContinueLearningWidget({
    subject,
    chapter,
    progress,
    lastActivity,
    href,
}: ContinueLearningWidgetProps) {
    return (
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl shadow-blue-200 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <BookOpen size={160} />
            </div>

            <div className="relative z-10 space-y-6">
                <div>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                        Resume Learning
                    </span>
                    <h2 className="text-3xl font-black mt-4 leading-tight">{subject}: {chapter}</h2>
                    <p className="text-blue-100 text-sm mt-2 opacity-90">Last active: {lastActivity}</p>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold">
                        <span>Overall Progress</span>
                        <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2 bg-white/20" indicatorClassName="bg-white" />
                </div>

                <div className="pt-4">
                    <Button asChild className="bg-white text-blue-600 hover:bg-blue-50 font-bold rounded-xl px-8 h-12 shadow-lg group-hover:px-10 transition-all">
                        <Link href={href as any} className="flex items-center gap-2">
                            <PlayCircle className="h-5 w-5" />
                            Continue Lesson
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
