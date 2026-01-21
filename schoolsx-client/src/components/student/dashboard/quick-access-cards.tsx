"use client";

import { Card } from "@/components/ui/card";
import { Radio, PenTool, Sparkles, Trophy } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ACTIONS = [
    {
        title: "Live Classes",
        description: "Join your ongoing classes",
        icon: Radio,
        href: "/student/live-classes",
        color: "bg-red-50 text-red-600 border-red-100",
        badge: "2 Live",
    },
    {
        title: "AI Help",
        description: "Your 24/7 personal tutor",
        icon: Sparkles,
        href: "/student/ai-tutor",
        color: "bg-purple-50 text-purple-600 border-purple-100",
    },
    {
        title: "Assignments",
        description: "Check pending homework",
        icon: PenTool,
        href: "/student/assignments",
        color: "bg-blue-50 text-blue-600 border-blue-100",
        badge: "5 Pending",
    },
    {
        title: "Daily Quiz",
        description: "Earn XP and unlock badges",
        icon: Trophy,
        href: "/student/practice",
        color: "bg-amber-50 text-amber-600 border-amber-100",
    },
];

export default function QuickAccessCards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ACTIONS.map((action) => {
                const Icon = action.icon;
                return (
                    <Link key={action.title} href={action.href as any} className="group">
                        <Card className={cn("p-5 border transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 relative overflow-hidden", action.color)}>
                            {action.badge && (
                                <span className="absolute top-3 right-3 text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-white/80 backdrop-blur-sm border shadow-sm">
                                    {action.badge}
                                </span>
                            )}
                            <div className="space-y-4">
                                <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{action.title}</h4>
                                    <p className="text-xs font-medium text-slate-500 opacity-80 mt-1">{action.description}</p>
                                </div>
                            </div>
                        </Card>
                    </Link>
                );
            })}
        </div>
    );
}
