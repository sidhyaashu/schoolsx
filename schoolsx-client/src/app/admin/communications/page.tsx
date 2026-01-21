"use client";

import { useAppSelector } from "@/store/hooks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Plus, Send } from "lucide-react";

export default function CommunicationsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Communications</h1>
                    <p className="text-muted-foreground">
                        Send announcements, alerts, and messages to the school community.
                    </p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> New Message
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Compose Box */}
                <Card className="h-fit">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Send className="h-5 w-5" /> Quick Announcement
                        </CardTitle>
                        <CardDescription>Send a broadcast message to a specific group.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>Recipient Group</Label>
                            <div className="flex gap-2 flex-wrap">
                                <Badge variant="outline" className="cursor-pointer hover:bg-slate-100">All Students</Badge>
                                <Badge variant="outline" className="cursor-pointer hover:bg-slate-100">All Teachers</Badge>
                                <Badge variant="outline" className="cursor-pointer hover:bg-slate-100">All Parents</Badge>
                                <Badge className="bg-indigo-600">Class 9 Only</Badge>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Subject</Label>
                            <Input placeholder="e.g., School Closure Notice" />
                        </div>
                        <div className="space-y-2">
                            <Label>Message</Label>
                            <Textarea placeholder="Type your message here..." className="h-32" />
                        </div>
                        <div className="flex justify-between items-center pt-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <input type="checkbox" id="sms" className="rounded border-gray-300" />
                                <label htmlFor="sms">Send as SMS</label>
                                <input type="checkbox" id="email" className="rounded border-gray-300 ml-4" defaultChecked />
                                <label htmlFor="email">Send as Email</label>
                            </div>
                            <Button>Send Broadcast</Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Recent History */}
                <Card className="h-fit">
                    <CardHeader>
                        <CardTitle>Recent Broadcasts</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {[
                            { title: "Winter Break Schedule", date: "yesterday", to: "All Parents", type: "Email" },
                            { title: "Staff Meeting Reminder", date: "2 days ago", to: "Teachers", type: "SMS + Email" },
                            { title: "Sports Day Registration", date: "Last week", to: "Students", type: "App Notification" },
                        ].map((msg, i) => (
                            <div key={i} className="flex items-start gap-4 p-3 border rounded-lg hover:bg-slate-50 transition-colors">
                                <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                    <Mail className="h-5 w-5 text-blue-600" />
                                </div>
                                <div className="flex-1 space-y-1">
                                    <div className="flex justify-between">
                                        <p className="font-semibold text-sm">{msg.title}</p>
                                        <span className="text-xs text-muted-foreground">{msg.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs">
                                        <Badge variant="secondary" className="text-[10px]">{msg.to}</Badge>
                                        <span className="text-muted-foreground">• {msg.type}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
