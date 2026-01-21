"use client";

import { Progress } from "@/components/ui/progress";
import { Trophy, Flame, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface GamificationBarProps {
    level: number;
    xp: number;
    nextLevelXp: number;
    streak: number;
    className?: string;
}

export default function GamificationBar({
    level,
    xp,
    nextLevelXp,
    streak,
    className,
}: GamificationBarProps) {
    const progress = (xp / nextLevelXp) * 100;

    return (
        <div className={cn("bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-6", className)}>
            <div className="flex items-center gap-4 shrink-0">
                <div className="h-14 w-14 rounded-2xl bg-amber-50 flex items-center justify-center border border-amber-100">
                    <Trophy className="h-8 w-8 text-amber-500" />
                </div>
                <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Current Level</p>
                    <h3 className="text-2xl font-black text-slate-900">Level {level}</h3>
                </div>
            </div>

            <div className="flex-1 w-full space-y-2">
                <div className="flex justify-between items-end">
                    <p className="text-sm font-bold text-slate-700">{xp} / {nextLevelXp} XP</p>
                    <p className="text-xs font-medium text-slate-400">{Math.round(nextLevelXp - xp)} XP to Level {level + 1}</p>
                </div>
                <Progress value={progress} className="h-3 bg-slate-100" indicatorClassName="bg-gradient-to-r from-blue-500 to-indigo-600" />
            </div>

            <div className="flex items-center gap-6 shrink-0 border-l pl-6 hidden md:flex">
                <div className="text-center">
                    <div className="flex items-center gap-1 text-orange-500 justify-center">
                        <Flame className="h-5 w-5 fill-current" />
                        <span className="text-xl font-black">{streak}</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Day Streak</p>
                </div>
                <div className="text-center">
                    <div className="flex items-center gap-1 text-purple-500 justify-center">
                        <Star className="h-5 w-5 fill-current" />
                        <span className="text-xl font-black">12</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Badges</p>
                </div>
            </div>
        </div>
    );
}
