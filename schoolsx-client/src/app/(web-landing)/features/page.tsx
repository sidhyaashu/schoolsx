import React from "react";
import { Bot, Zap, Shield, BarChart3, Users, Globe } from "lucide-react";

const FEATURES = [
    {
        title: "AI Personal Tutor",
        description: "Personalized learning paths that adapt to each student's pace and style using Socratic methodology.",
        icon: Bot,
        color: "blue",
    },
    {
        title: "Teacher Assistant",
        description: "Automated lesson planning, quiz generation, and grading assistance to reclaim precious time.",
        icon: Zap,
        color: "emerald",
    },
    {
        title: "Parent Intelligence",
        description: "Deep insights into academic progress and behavior, moving beyond simple report cards.",
        icon: BarChart3,
        color: "purple",
    },
    {
        title: "School Ops Control",
        description: "Comprehensive management for hierarchies, schedules, and resources in one AI-powered hub.",
        icon: Shield,
        color: "slate",
    },
    {
        title: "Global Collaboration",
        description: "Connect with educators and students worldwide in a secure, audited environment.",
        icon: Users,
        color: "rose",
    },
    {
        title: "Cloud Infrastructure",
        description: "Secure, scalable, and blazingly fast access from any device, anywhere in the world.",
        icon: Globe,
        color: "amber",
    },
];

export default function FeaturesPage() {
    return (
        <div className="min-h-screen bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto space-y-20">
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <h1 className="text-5xl font-black text-slate-900 tracking-tight">Powerful <span className="text-blue-600 font-serif italic">Features</span> for Modern Schools</h1>
                    <p className="text-slate-500 font-medium text-lg leading-relaxed">Built from the ground up to leverage the latest in AI and educational science, SchoolX provides a complete toolkit for success.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FEATURES.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <div key={idx} className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-300 relative overflow-hidden">
                                <div className={cn(
                                    "h-14 w-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-300",
                                    feature.color === "blue" && "bg-blue-50 text-blue-600",
                                    feature.color === "emerald" && "bg-emerald-50 text-emerald-600",
                                    feature.color === "purple" && "bg-purple-50 text-purple-600",
                                    feature.color === "slate" && "bg-slate-50 text-slate-600",
                                    feature.color === "rose" && "bg-rose-50 text-rose-600",
                                    feature.color === "amber" && "bg-amber-50 text-amber-600"
                                )}>
                                    <Icon size={28} />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">{feature.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{feature.description}</p>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 -mr-16 -mt-16 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

// Helper to avoid import error if cn is not available in landing
function cn(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}
