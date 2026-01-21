import React from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const PLANS = [
    {
        name: "Starter",
        price: "$299",
        description: "Perfect for small schools or pilot programs.",
        features: ["Up to 200 Students", "AI Tutor Basics", "Core Management", "Email Support"],
    },
    {
        name: "Growth",
        price: "$899",
        description: "Advanced intelligence for growing institutions.",
        features: ["Up to 1000 Students", "Full AI Tutor & Assistant", "Parent Insight Dashboard", "Priority Support", "Basic Custom Branding"],
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Unlimited potential for large organizations.",
        features: ["Unlimited Students", "Custom AI Training", "Full White-Labeling", "Personal Account Manager", "Security & Compliance Suite"],
    },
];

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-20 px-6">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h1 className="text-5xl font-black text-slate-900 tracking-tight text-center">Simple, <span className="text-blue-600">Transparent</span> Pricing</h1>
                    <p className="text-slate-500 font-medium text-lg leading-relaxed text-center max-w-2xl mx-auto">Choose the plan that fits your school's needs. All plans include our core AI-first infrastructure.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PLANS.map((plan, idx) => (
                        <div key={idx} className={cn(
                            "relative p-10 rounded-[3rem] bg-white border-2 flex flex-col transition-all duration-300 hover:scale-105",
                            plan.popular ? "border-blue-600 shadow-2xl shadow-blue-100" : "border-slate-100 shadow-xl shadow-slate-100"
                        )}>
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2">
                                    <Sparkles size={14} />
                                    Most Popular
                                </div>
                            )}
                            <div className="space-y-4 mb-10">
                                <h3 className="text-2xl font-black text-slate-800">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-black text-slate-900">{plan.price}</span>
                                    {plan.price !== "Custom" && <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">/month</span>}
                                </div>
                                <p className="text-slate-500 font-medium text-sm leading-relaxed">{plan.description}</p>
                            </div>

                            <div className="space-y-4 mb-10 flex-1">
                                {plan.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-center gap-3">
                                        <div className="h-5 w-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        <span className="text-sm font-bold text-slate-600">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button className={cn(
                                "w-full h-14 rounded-2xl font-black text-lg transition-all",
                                plan.popular ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-100" : "bg-slate-900 hover:bg-slate-800 text-white"
                            )}>
                                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function cn(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}
