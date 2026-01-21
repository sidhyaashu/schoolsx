"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ChevronRight, Users, GraduationCap } from "lucide-react";

export default function MySubjectsPage() {
    const subjects = [
        {
            id: 1,
            name: "Science",
            grade: "Grade 7",
            students: 42,
            chapters: 12,
            completed: 6,
            progress: 50,
            nextClass: "Today, 10:00 AM",
            image: "bg-blue-100",
            iconColor: "text-blue-600"
        },
        {
            id: 2,
            name: "Physics",
            grade: "Grade 8",
            students: 38,
            chapters: 15,
            completed: 4,
            progress: 26,
            nextClass: "Tomorrow, 11:30 AM",
            image: "bg-purple-100",
            iconColor: "text-purple-600"
        },
        {
            id: 3,
            name: "Chemistry",
            grade: "Grade 9",
            students: 40,
            chapters: 10,
            completed: 8,
            progress: 80,
            nextClass: "Wed, 09:00 AM",
            image: "bg-green-100",
            iconColor: "text-green-600"
        },
        {
            id: 4,
            name: "Biology",
            grade: "Grade 7",
            students: 42,
            chapters: 14,
            completed: 2,
            progress: 14,
            nextClass: "Thu, 02:00 PM",
            image: "bg-orange-100",
            iconColor: "text-orange-600"
        }
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">My Subjects</h1>
                    <p className="text-muted-foreground">Manage your curriculum and track progress.</p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {subjects.map((subject) => (
                    <Card key={subject.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                        <CardHeader className={`${subject.image} dark:bg-opacity-10 rounded-t-lg pb-6`}>
                            <div className="flex justify-between items-start">
                                <div className={`p-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm ${subject.iconColor}`}>
                                    <BookOpen className="h-6 w-6" />
                                </div>
                                <Badge variant="secondary" className="bg-white/80 dark:bg-black/50 backdrop-blur-sm">
                                    {subject.grade}
                                </Badge>
                            </div>
                            <CardTitle className="mt-4 text-xl">{subject.name}</CardTitle>
                            <CardDescription className="flex items-center gap-2 mt-1 text-slate-600 dark:text-slate-400">
                                <Users className="h-4 w-4" /> {subject.students} Students
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Syllabus Completion</span>
                                    <span className="font-medium">{subject.progress}%</span>
                                </div>
                                <Progress value={subject.progress} className="h-2" />

                                <div className="flex justify-between items-center text-sm pt-2">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <GraduationCap className="h-4 w-4" />
                                        <span>{subject.completed}/{subject.chapters} Chapters</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="border-t bg-slate-50 dark:bg-slate-900/50 p-4">
                            <Button className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors" variant="ghost">
                                View Subject Details <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
