import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Bot, Zap, Shield, Users } from "lucide-react";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[120px] animate-pulse" />
                </div>

                <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white font-bold text-xs uppercase tracking-widest animate-in fade-in slide-in-from-top-4 duration-500">
                        <Sparkles size={14} className="text-blue-400" />
                        <span>AI-First K-12 Ecosystem</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Education <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Reimagined</span>
                    </h1>

                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium animate-in fade-in duration-1000">
                        Personalized AI tutoring for students, intelligent assistance for teachers, and deep insights for parents. One platform, infinite possibilities.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in zoom-in duration-1000">
                        <Button asChild size="lg" className="h-14 px-8 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-lg shadow-xl shadow-blue-100 transition-all hover:scale-105">
                            <Link href="/login" className="flex items-center gap-2">
                                Enter Portal <ArrowRight size={20} />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-2xl border-2 border-slate-100 font-black text-lg hover:bg-slate-50 transition-all">
                            <Link href="/features">Explore Features</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Floating Feature Grid */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300">
                        <Bot className="h-10 w-10 text-blue-600 mb-6" />
                        <h3 className="text-xl font-black text-slate-900 mb-2">AI Tutor</h3>
                        <p className="text-slate-500 text-sm font-medium">Socratic learning paths that adapt to every student.</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300">
                        <Zap className="h-10 w-10 text-emerald-600 mb-6" />
                        <h3 className="text-xl font-black text-slate-900 mb-2">Teacher Assist</h3>
                        <p className="text-slate-500 text-sm font-medium">Automated tools to empower classroom instruction.</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300">
                        <Shield className="h-10 w-10 text-purple-600 mb-6" />
                        <h3 className="text-xl font-black text-slate-900 mb-2">School Ops</h3>
                        <p className="text-slate-500 text-sm font-medium">Enterprise-grade control and safety for districts.</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300">
                        <Users className="h-10 w-10 text-rose-600 mb-6" />
                        <h3 className="text-xl font-black text-slate-900 mb-2">Community</h3>
                        <p className="text-slate-500 text-sm font-medium">Connected ecosystem for students, parents and staff.</p>
                    </div>
                </div>
            </section>

            {/* Trust Quote */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-6 space-y-8">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight italic opacity-90">"The best way to predict the future is to create it."</h2>
                    <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Empowering 500+ Schools Worldwide</p>
                </div>
            </section>
        </div>
    );
}
