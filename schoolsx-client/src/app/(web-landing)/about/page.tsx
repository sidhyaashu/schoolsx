import React from "react";
import { Sparkles, Target, Users, BookOpen } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 px-6 max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-6 animate-in fade-in slide-in-from-top-4 duration-500">
                    <Sparkles size={16} />
                    <span>The Future of Learning</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-8">
                    We're Redefining <span className="text-blue-600 italic">Education</span>
                </h1>
                <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                    SchoolX is an AI-first K-12 platform dedicated to personalizing the learning journey for every student, empowering teachers with intelligence, and connecting parents to their child's success.
                </p>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div className="space-y-4 p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                        <div className="h-14 w-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto text-blue-600">
                            <Target size={28} />
                        </div>
                        <h3 className="text-xl font-black text-slate-900">Our Mission</h3>
                        <p className="text-slate-500">To make high-quality, personalized education accessible to every student on the planet through AI.</p>
                    </div>
                    <div className="space-y-4 p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                        <div className="h-14 w-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto text-emerald-600">
                            <Users size={28} />
                        </div>
                        <h3 className="text-xl font-black text-slate-900">Our Community</h3>
                        <p className="text-slate-500">Built for forward-thinking schools, dedicated educators, and ambitious students who want more from learning.</p>
                    </div>
                    <div className="space-y-4 p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                        <div className="h-14 w-14 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto text-purple-600">
                            <BookOpen size={28} />
                        </div>
                        <h3 className="text-xl font-black text-slate-900">Our Vision</h3>
                        <p className="text-slate-500">A world where technology serves as a bridge, not a barrier, to human potential and academic excellence.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
