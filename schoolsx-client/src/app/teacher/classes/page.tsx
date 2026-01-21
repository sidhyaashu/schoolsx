"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, BarChart2, BookOpen, MoreHorizontal, Users } from "lucide-react";

export default function TeacherClassesPage() {
  const classes = [
    {
      id: "7a-sci",
      name: "Grade 7A",
      subject: "Science",
      students: 38,
      attendance: 92,
      avgScore: 78,
      image: "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?auto=format&fit=crop&q=80&w=600&h=300",
      theme: "blue",
      nextClass: "Mon, 10:00 AM"
    },
    {
      id: "8b-phy",
      name: "Grade 8B",
      subject: "Physics",
      students: 42,
      attendance: 88,
      avgScore: 65,
      image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=600&h=300",
      theme: "indigo",
      nextClass: "Today, 11:30 AM"
    },
    {
      id: "6a-bio",
      name: "Grade 6A",
      subject: "Biology",
      students: 35,
      attendance: 95,
      avgScore: 82,
      image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=600&h=300",
      theme: "green",
      nextClass: "Tue, 09:00 AM"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">My Classes</h1>
        <p className="text-muted-foreground">
          Manage your assigned classes, view performance, and track attendance.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((cls) => (
          <Card key={cls.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-slate-200 dark:border-slate-800">
            {/* Class Banner Image */}
            <div className="h-32 w-full relative bg-slate-100">
              <img src={cls.image} alt={cls.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <div className="text-white">
                  <h3 className="text-xl font-bold">{cls.subject}</h3>
                  <p className="text-sm font-medium opacity-90">{cls.name}</p>
                </div>
              </div>
            </div>

            <CardContent className="p-5 space-y-4">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4" />
                  <span>{cls.students} Students</span>
                </div>
                <Badge variant="secondary" className="font-normal">
                  Next: {cls.nextClass}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Attendance</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold">{cls.attendance}%</span>
                  </div>
                  <Progress value={cls.attendance} className={`h-1.5 ${cls.attendance > 90 ? 'bg-green-100 text-green-600' : 'bg-yellow-100'}`} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Avg Score</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold">{cls.avgScore}%</span>
                  </div>
                  <Progress value={cls.avgScore} className="h-1.5" />
                </div>
              </div>
            </CardContent>

            <CardFooter className="p-4 bg-slate-50 dark:bg-slate-900/50 border-t flex justify-between items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <Avatar key={i} className="h-8 w-8 border-2 border-white dark:border-slate-900">
                    <AvatarImage src={`/avatars/0${i}.png`} />
                    <AvatarFallback className="text-[10px]">S{i}</AvatarFallback>
                  </Avatar>
                ))}
                <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold border-2 border-white dark:border-slate-900">
                  +35
                </div>
              </div>
              <Button size="sm" className="gap-2">
                Open Class <ArrowRight className="h-3 w-3" />
              </Button>
            </CardFooter>
          </Card>
        ))}

        {/* Add Class Placeholder */}
        <button className="h-full min-h-[300px] rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all flex flex-col items-center justify-center gap-3 text-muted-foreground hover:text-foreground">
          <div className="h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            <Users className="h-6 w-6" />
          </div>
          <p className="font-medium">Contact Admin to Add Class</p>
        </button>
      </div>
    </div>
  );
}
