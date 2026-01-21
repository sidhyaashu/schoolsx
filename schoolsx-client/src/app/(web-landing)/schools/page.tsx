import React from "react";
import { School, Building2, LayoutGrid, ShieldCheck } from "lucide-react";

export default function SchoolsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="py-24 px-6 bg-slate-900 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-[120px]" />
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500 rounded-full blur-[150px]" />
                </div>
                <div className="max-w-4xl mx-auto relative z-10 space-y-8">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">Empowering <span className="text-blue-400">Districts</span> & Large Scale Institutions</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">SchoolX provides the centralized control, data governance, and AI-scale schools need to thrive in the digital age.</p>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                            <School size={32} />
                        </div>
                        <h2 className="text-4xl font-black text-slate-900 leading-tight">Centralized Academic Oversight</h2>
                        <p className="text-lg text-slate-500 leading-relaxed font-medium">Standardize curriculum across dozens of campuses. Monitor performance at the district level while allowing individual school autonomy.</p>
                    </div>
                    <div className="space-y-6">
                        <div className="h-16 w-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                            <LayoutGrid size={32} />
                        </div>
                        <h2 className="text-4xl font-black text-slate-900 leading-tight">Dynamic Resource Allocation</h2>
                        <p className="text-lg text-slate-500 leading-relaxed font-medium">Use AI to optimize teacher schedules and resource distribution. Reduce waste and ensure every classroom has what it needs.</p>
                    </div>
                    <div className="space-y-6">
                        <div className="h-16 w-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600">
                            <ShieldCheck size={32} />
                        </div>
                        <h2 className="text-4xl font-black text-slate-900 leading-tight">Enterprise-Grade Security</h2>
                        <p className="text-lg text-slate-500 leading-relaxed font-medium">Rest easy with SOC2 compliance and age-appropriate AI filtering that meets the strictest educational safety standards.</p>
                    </div>
                    <div className="space-y-6">
                        <div className="h-16 w-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600">
                            <Building2 size={32} />
                        </div>
                        <h2 className="text-4xl font-black text-slate-900 leading-tight">White-Label Branding</h2>
                        <p className="text-lg text-slate-500 leading-relaxed font-medium">Your brand, our engine. Fully customize the student and parent experience to match your institution's identity.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
