"use client";

import React from "react";
import SubjectCard from "@/components/student/subjects/subject-card";
import {
    Calculator,
    Atom,
    Globe,
    BookOpen,
    FlaskConical,
    Music,
    Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ENROLLED_SUBJECTS = [
    {
        id: "math-101",
        name: "Mathematics",
        progress: 75,
        totalChapters: 12,
        completedChapters: 9,
        icon: Calculator,
        color: "blue",
    },
    {
        id: "physics-201",
        name: "Physics",
        progress: 45,
        totalChapters: 10,
        completedChapters: 4,
        icon: Atom,
        color: "rose",
    },
    {
        id: "bio-301",
        name: "Biology",
        progress: 90,
        totalChapters: 8,
        completedChapters: 7,
        icon: FlaskConical,
        color: "green",
    },
    {
        id: "geo-101",
        name: "Geography",
        progress: 30,
        totalChapters: 15,
        completedChapters: 4,
        icon: Globe,
        color: "amber",
    },
    {
        id: "eng-201",
        name: "English Literature",
        progress: 60,
        totalChapters: 10,
        completedChapters: 6,
        icon: BookOpen,
        color: "purple",
    },
    {
        id: "music-101",
        name: "Music Theory",
        progress: 15,
        totalChapters: 6,
        completedChapters: 1,
        icon: Music,
        color: "slate",
    },
];

export default function StudentSubjectsPage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header Section */}
            <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <div className="space-y-2">
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">My Subjects</h1>
                    <p className="text-slate-500 font-medium">You are currently enrolled in 6 active subjects.</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-6 h-12 shadow-lg shadow-blue-100 flex items-center gap-2">
                    <Plus className="h-5 w-5" />
                    Explore New Modules
                </Button>
            </section>

            {/* Subjects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {ENROLLED_SUBJECTS.map((subject) => (
                    <SubjectCard
                        key={subject.id}
                        {...subject}
                    />
                ))}
            </div>

            {/* Placeholder for Learning Statistics */}
            <section className="bg-slate-50 rounded-3xl p-10 border-2 border-dashed border-slate-200 text-center space-y-4">
                <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                    <Calculator className="h-8 w-8 text-slate-300" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900">Learning Analytics</h3>
                    <p className="text-slate-500 max-w-md mx-auto">Detailed subject-wise breakdown and AI-driven performance reports will appear here after your first quiz.</p>
                </div>
            </section>
        </div>
    );
}
