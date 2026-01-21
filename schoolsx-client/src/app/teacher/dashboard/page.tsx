"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Calendar, CheckCircle2, FlaskConical, MessageCircle, MoreVertical, PenTool, PlayCircle, Plus, Sparkles, User, Video } from "lucide-react";


import { useAppSelector } from "@/store/hooks";

export default function TeacherDashboard() {
  const { user } = useAppSelector((state) => state.auth);
  const teacherName = user?.name || "Mr. Sharma";
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Good Morning, {teacherName} 👋</h1>
          <p className="text-muted-foreground">
            You have 3 classes and 12 assignments to review today.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline"><Calendar className="mr-2 h-4 w-4" /> Schedule</Button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <Button className="shrink-0 bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" /> Create Quiz
        </Button>
        <Button variant="outline" className="shrink-0">
          <Video className="mr-2 h-4 w-4" /> Start Live Class
        </Button>
        <Button variant="outline" className="shrink-0">
          <PenTool className="mr-2 h-4 w-4" /> Create Assignment
        </Button>
        <Button variant="outline" className="shrink-0">
          <Sparkles className="mr-2 h-4 w-4 text-purple-500" /> AI Lesson Plan
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Left Column: Schedule & Tasks */}
        <div className="col-span-5 space-y-6">

          {/* AI Insight */}
          <div className="bg-gradient-to-r from-purple-50 to-white dark:from-purple-950/20 dark:to-background border border-purple-100 dark:border-purple-900 rounded-lg p-4 flex items-start gap-4">
            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-full shrink-0">
              <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-300" />
            </div>
            <div>
              <h3 className="font-semibold text-purple-900 dark:text-purple-300">AI Teaching Insight</h3>
              <p className="text-sm text-purple-800 dark:text-purple-400 mt-1">
                Class 7B struggled with "Photosynthesis" in the last quiz.
                I've prepared a revision plan and a simplified explainer video script for you.
              </p>
              <Button variant="link" className="px-0 text-purple-700">View Recommendations →</Button>
            </div>
          </div>

          {/* Today's Schedule */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
            </CardHeader>
            <CardContent className="space-y-0">
              {[
                { time: "09:00 AM", class: "Grade 7A", subject: "Science", topic: "Nutrition in Plants", status: "Completed" },
                { time: "10:30 AM", class: "Grade 8B", subject: "Physics", topic: "Force & Pressure", status: "Live Now", active: true },
                { time: "02:00 PM", class: "Grade 6A", subject: "Biology", topic: "The Living Organisms", status: "Upcoming" },
              ].map((session, i) => (
                <div key={i} className={`flex items-center p-4 border-b last:border-0 ${session.active ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''}`}>
                  <div className="w-24 font-mono text-sm text-muted-foreground">{session.time}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{session.class} • {session.subject}</h4>
                      {session.active && <Badge variant="default" className="bg-red-500 animate-pulse">LIVE</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground">{session.topic}</p>
                  </div>
                  <Button variant={session.active ? "default" : "secondary"} size="sm">
                    {session.active ? "Join Class" : "View"}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Pending Overview */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Assignments to Evaluate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12</div>
                <p className="text-sm text-muted-foreground">4 overdue from last week</p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Grade 7 - Science</span>
                    <span className="font-medium">8 pending</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
                <Button className="w-full mt-4" variant="outline" size="sm">Start Grading</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Student Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">82%</div>
                <p className="text-sm text-muted-foreground">Class Average this week</p>
                <div className="mt-4 h-[60px] flex items-end gap-1">
                  {[40, 60, 55, 70, 82, 90, 85].map((h, i) => (
                    <div key={i} className="flex-1 bg-green-100 rounded-t" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <Button className="w-full mt-4" variant="outline" size="sm">View Analytics</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Column: Doubts & Activity */}
        <div className="col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Student Doubts
                <Badge variant="secondary">5 New</Badge>
              </CardTitle>
              <CardDescription>Priority questions from students</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Rohan K.", question: "Sir, I didn't understand the 3rd law of motion example.", time: "10m ago" },
                { name: "Aditi S.", question: "Is the project deadline extended?", time: "32m ago" },
                { name: "Vikram R.", question: "Can you explain valency again?", time: "1h ago" },
              ].map((doubt, i) => (
                <div key={i} className="flex gap-3 items-start border-b pb-3 last:border-0 last:pb-0">
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarFallback className="text-xs">{doubt.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium">{doubt.name}</p>
                      <span className="text-[10px] text-muted-foreground">{doubt.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">{doubt.question}</p>
                    <div className="flex gap-2 pt-1">
                      <Button size="icon" variant="ghost" className="h-6 w-6"><MessageCircle className="h-3 w-3" /></Button>
                      <Button size="icon" variant="ghost" className="h-6 w-6"><CheckCircle2 className="h-3 w-3" /></Button>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="ghost" size="sm" className="w-full text-xs">View All Doubts</Button>
            </CardContent>
          </Card>

          <Card className="bg-blue-950 text-white border-0">
            <CardHeader>
              <CardTitle className="text-white">Upcoming Exam</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-blue-200">Unit Test 2</p>
                <p className="text-2xl font-bold">Physics • Grade 8</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-200">
                <Calendar className="h-4 w-4" /> Nov 24, 2024
              </div>
              <Button size="sm" className="w-full bg-white text-blue-950 hover:bg-blue-100">View Syllabus</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
