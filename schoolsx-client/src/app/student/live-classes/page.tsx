"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Video, Users, BookOpen, AlertCircle } from "lucide-react";

export default function LiveClassesPage() {
  const liveSessions = [
    {
      id: 1,
      subject: "Math",
      topic: "Introduction to Quadratic Equations",
      teacher: "Mr. Sharma",
      time: "10:00 AM - 11:00 AM",
      status: "Live Now",
      attendees: 34,
    },
    {
      id: 2,
      subject: "Science",
      topic: "Periodic Table Trends",
      teacher: "Ms. Riya",
      time: "12:00 PM - 01:00 PM",
      status: "Upcoming",
      attendees: 0,
    },
    {
      id: 3,
      subject: "English",
      topic: "Creative Writing Workshop",
      teacher: "Mrs. Gupta",
      time: "02:30 PM - 03:30 PM",
      status: "Upcoming",
      attendees: 0,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Live Classes</h1>
          <p className="text-muted-foreground">Join interactive sessions with your teachers.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><Calendar className="mr-2 h-4 w-4" /> Schedule</Button>
          <Button variant="outline"><BookOpen className="mr-2 h-4 w-4" /> Past Recordings</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {liveSessions.map((session) => (
          <Card key={session.id} className={`border-l-4 ${session.status === 'Live Now' ? 'border-l-red-500 shadow-md ring-1 ring-red-100 dark:ring-red-900' : 'border-l-blue-500'}`}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <Badge variant={session.status === 'Live Now' ? "destructive" : "secondary"} className="mb-2">
                    {session.status === 'Live Now' ? (
                      <span className="flex items-center gap-1"><span className="relative flex h-2 w-2 mr-1"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span></span> LIVE</span>
                    ) : session.status}
                  </Badge>
                  <CardTitle className="text-xl">{session.topic}</CardTitle>
                  <CardDescription className="font-medium text-foreground mt-1">{session.subject} • {session.teacher}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{session.time}</span>
                </div>
                {session.status === 'Live Now' && (
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{session.attendees} students watching</span>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button className={`w-full ${session.status === 'Live Now' ? 'bg-red-600 hover:bg-red-700' : ''}`} disabled={session.status !== 'Live Now'}>
                <Video className="mr-2 h-4 w-4" />
                {session.status === 'Live Now' ? "Join Class Now" : "Notify Me"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
            <AlertCircle className="h-6 w-6 text-blue-600 dark:text-blue-300" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Class Etiquette</h3>
            <p className="text-muted-foreground text-sm">Please join 5 minutes early. Keep your microphone muted unless asked to speak. Use the "Raise Hand" feature for questions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
