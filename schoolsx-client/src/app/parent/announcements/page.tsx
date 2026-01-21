"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Megaphone, Pin } from "lucide-react";

export default function ParentAnnouncementsPage() {
    const notices = [
        { title: "Parent-Teacher Meeting", date: "Oct 28, 2024", type: "Event", content: "Mandatory meeting for Grade 6 parents to discuss mid-term performance. Room 204.", important: true },
        { title: "Winter Uniform Policy", date: "Oct 25, 2024", type: "Notice", content: "Students must switch to full winter uniform effective Nov 1st. Blazers are available in the store.", important: false },
        { title: "Diwali Holidays", date: "Oct 20, 2024", type: "Holiday", content: "School will remain closed from Oct 31 to Nov 4.", important: true },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Notice Board</h1>
                <p className="text-muted-foreground">Important updates and circulars from the school.</p>
            </div>

            <div className="space-y-4">
                {notices.map((notice, i) => (
                    <Card key={i} className={notice.important ? "border-l-4 border-l-blue-500 shadow-md" : ""}>
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        {notice.important && <Pin className="h-4 w-4 text-blue-500 rotate-45" />}
                                        {notice.title}
                                    </CardTitle>
                                    <CardDescription className="flex items-center gap-2 mt-1">
                                        <Calendar className="h-3 w-3" /> {notice.date}
                                    </CardDescription>
                                </div>
                                <Badge variant={notice.type === 'Holiday' ? 'secondary' : 'outline'}>{notice.type}</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm leading-relaxed">{notice.content}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
