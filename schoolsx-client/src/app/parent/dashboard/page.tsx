"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, BookOpen, Calendar, CheckCircle2, ChevronRight, Clock, FileText, Star, Trophy } from "lucide-react";


import { useAppSelector } from "@/store/hooks";

export default function ParentDashboard() {
  const { user } = useAppSelector((state) => state.auth);
  // Default to first child name if available, or just 'Parent'
  const parentName = user?.role === 'parent' ? user.name : "Mr. Sharma";
  return (
    <div className="space-y-6">
      {/* Header with Child Switcher */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Parent Portal</h1>
          <p className="text-muted-foreground">
            Monitor your child's progress and school activities.
          </p>
        </div>
        <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
          <Button variant="ghost" size="sm" className="bg-white dark:bg-slate-700 shadow-sm text-foreground">
            <Avatar className="h-5 w-5 mr-2">
              <AvatarImage src="/avatars/01.png" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            {parentName}'s Child (6A)
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <Avatar className="h-5 w-5 mr-2">
              <AvatarImage src="/avatars/02.png" />
              <AvatarFallback>RS</AvatarFallback>
            </Avatar>
            Rohan (2B)
          </Button>
        </div>
      </div>

      {/* AI Weekly Summary (Hero) */}
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2 opacity-90">
            <Star className="h-5 w-5 text-yellow-300 fill-current" />
            <span className="font-semibold tracking-wide uppercase text-xs">AI Weekly Insight</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">Great week for Aditi! 🌟</h2>
          <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed">
            She has shown <span className="font-bold text-white">15% improvement</span> in Mathematics, specifically in Fractions.
            However, she missed one History assignment.
          </p>
          <div className="flex gap-3 mt-6">
            <Button size="sm" variant="secondary" className="bg-white text-indigo-600 hover:bg-indigo-50 border-0">
              View Full Report
            </Button>
            <Button size="sm" variant="outline" className="text-white border-white/30 hover:bg-white/10">
              Check Assignment
            </Button>
          </div>
        </div>
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-20 h-32 w-32 rounded-full bg-black/10 blur-2xl" />
      </div>

      {/* Quick Status Cards */}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        <Card>
          <CardContent className="p-4 flex flex-col items-center justify-center text-center space-y-2">
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">Present</div>
              <p className="text-xs text-muted-foreground">Attendance Today</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex flex-col items-center justify-center text-center space-y-2">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Homework Due</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex flex-col items-center justify-center text-center space-y-2">
            <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">Pending Task</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex flex-col items-center justify-center text-center space-y-2">
            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
              <Trophy className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">Top 10%</div>
              <p className="text-xs text-muted-foreground">Class Rank</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Homework List */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Homework & Assignments</CardTitle>
            <CardDescription>Tasks due this week</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { subject: "Maths", title: "Exercise 4.2: Algebra", due: "Today", status: "Pending", urgent: true },
              { subject: "Science", title: "Draw Lab Diagram", due: "Tomorrow", status: "Pending", urgent: false },
              { subject: "English", title: "Read Chapter 5", due: "Wed", status: "Done", urgent: false },
            ].map((hw, i) => (
              <div key={i} className="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`h-2 w-2 rounded-full ${hw.status === 'Done' ? 'bg-green-500' : 'bg-amber-500'}`} />
                  <div>
                    <p className="font-medium text-sm">{hw.title}</p>
                    <p className="text-xs text-muted-foreground">{hw.subject} • Due {hw.due}</p>
                  </div>
                </div>
                {hw.urgent && <Badge variant="destructive" className="text-[10px] h-5">Due Soon</Badge>}
                {hw.status === "Done" && <Badge variant="outline" className="text-[10px] h-5 bg-green-50 text-green-700 border-green-200">Submitted</Badge>}
              </div>
            ))}
            <Button variant="outline" className="w-full text-xs">View All Assignments</Button>
          </CardContent>
        </Card>

        {/* Notifications & Events */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Notice Board</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                  <Calendar className="h-4 w-4 text-blue-600" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Parent-Teacher Meeting</p>
                  <p className="text-xs text-muted-foreground">Friday, 10:00 AM. Room 204.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Exam Schedule Out</p>
                  <p className="text-xs text-muted-foreground">Mid-term exams start from Nov 20.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Performance Snapshot</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Maths</span>
                    <span>82%</span>
                  </div>
                  <Progress value={82} className="h-1.5" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Science</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-1.5" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>English</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} className="h-1.5" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
