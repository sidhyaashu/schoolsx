"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Video } from "lucide-react";

export default function ParentClassesPage() {
    const schedule = [
        { time: "09:00 AM", subject: "Mathematics", teacher: "Mr. Sharma", room: "Room 302", type: "In-Person" },
        { time: "10:00 AM", subject: "Science (Chem)", teacher: "Ms. Riya", room: "Lab 2", type: "Lab" },
        { time: "11:00 AM", subject: "Break", teacher: "-", room: "Cafeteria", type: "Break" },
        { time: "11:30 AM", subject: "English Literature", teacher: "Mrs. Kapoor", room: "Room 302", type: "In-Person" },
        { time: "12:30 PM", subject: "Computer Science", teacher: "Mr. Verma", room: "Computer Lab", type: "In-Person" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Class Schedule</h1>
                    <p className="text-muted-foreground">Daily timetable and live class access.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline"><Calendar className="mr-2 h-4 w-4" /> Download Timetable</Button>
                </div>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                    <Button key={day} variant={i === 0 ? "default" : "outline"} className="min-w-[80px]">
                        {day}
                    </Button>
                ))}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Monday's Schedule</CardTitle>
                    <CardDescription>October 24, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="relative">
                        <div className="absolute top-0 left-9 h-full w-[1px] bg-slate-200 dark:bg-slate-800"></div>
                        <div className="space-y-6">
                            {schedule.map((slot, index) => (
                                <div key={index} className="flex gap-6 relative">
                                    <div className="w-16 pt-1 text-xs text-muted-foreground font-medium text-right shrink-0 bg-background z-10">
                                        {slot.time}
                                    </div>
                                    <div className="flex-1 p-4 rounded-lg border bg-card hover:shadow-sm transition-shadow">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-semibold text-lg">{slot.subject}</h3>
                                            <Badge variant={slot.type === 'Break' ? 'secondary' : 'outline'}>{slot.type}</Badge>
                                        </div>
                                        {slot.type !== 'Break' && (
                                            <div className="flex gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <UserIcon /> {slot.teacher}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="h-3 w-3" /> {slot.room}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

function UserIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
    )
}
