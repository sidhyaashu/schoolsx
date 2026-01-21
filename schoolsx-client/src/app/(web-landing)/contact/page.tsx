import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-5xl font-black text-slate-900 tracking-tight">Get in <span className="text-blue-600">Touch</span></h1>
                    <p className="text-slate-500 max-w-2xl mx-auto font-medium">Have questions? We're here to help schools, teachers, and parents navigate the future of education.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 overflow-hidden">
                    {/* Contact Info */}
                    <div className="bg-blue-600 rounded-[2.5rem] p-10 text-white space-y-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                        <div className="space-y-4 relative z-10">
                            <h2 className="text-3xl font-black">Contact Information</h2>
                            <p className="text-blue-100">Fill out the form and our team will get back to you within 24 hours.</p>
                        </div>

                        <div className="space-y-8 relative z-10">
                            <div className="flex items-center gap-6 group cursor-pointer">
                                <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <Phone size={24} />
                                </div>
                                <span className="text-lg font-bold">+1 (555) 001-SCHOOL</span>
                            </div>
                            <div className="flex items-center gap-6 group cursor-pointer">
                                <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <Mail size={24} />
                                </div>
                                <span className="text-lg font-bold">hello@schoolx.ai</span>
                            </div>
                            <div className="flex items-center gap-6 group cursor-pointer">
                                <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <MapPin size={24} />
                                </div>
                                <span className="text-lg font-bold">123 AI Boulevard, Silicon Valley, CA</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="space-y-8 py-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">First Name</label>
                                <Input placeholder="John" className="h-12 rounded-xl bg-slate-50 border-none focus-visible:ring-1 focus-visible:ring-blue-500" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Last Name</label>
                                <Input placeholder="Doe" className="h-12 rounded-xl bg-slate-50 border-none focus-visible:ring-1 focus-visible:ring-blue-500" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                            <Input placeholder="john@example.com" className="h-12 rounded-xl bg-slate-50 border-none focus-visible:ring-1 focus-visible:ring-blue-500" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                            <textarea className="w-full min-h-[150px] rounded-2xl bg-slate-50 border-none p-4 text-sm focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Tell us about your school..." />
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl h-14 text-lg shadow-lg shadow-blue-100 flex items-center gap-3">
                            Send Message
                            <Send size={20} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
