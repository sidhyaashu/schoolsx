"use client";

import { useAppSelector } from "@/store/hooks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Book, Calculator, CheckCircle2, Clock, Globe, Microscope, Play, Star, Trophy } from "lucide-react";

export default function PracticePage() {
  const subjects = [
    { name: "Mathematics", icon: Calculator, color: "text-blue-600 bg-blue-100", progress: 75, active: true },
    { name: "Science", icon: Microscope, color: "text-green-600 bg-green-100", progress: 60, active: false },
    { name: "English", icon: Book, color: "text-purple-600 bg-purple-100", progress: 85, active: false },
    { name: "History", icon: Globe, color: "text-orange-600 bg-orange-100", progress: 40, active: false },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Practice Zone</h1>
        <p className="text-muted-foreground">
          Master your subjects with quizzes, flashcards, and practice tests.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <div className="md:col-span-1 space-y-4">
          <h2 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">Subjects</h2>
          {subjects.map((sub, i) => (
            <div key={i} className={`p-4 rounded-xl border flex items-center gap-4 cursor-pointer transition-all ${sub.active ? 'bg-indigo-50 border-indigo-200 ring-1 ring-indigo-200 dark:bg-indigo-900/20' : 'hover:bg-slate-50 dark:hover:bg-slate-900'}`}>
              <div className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 ${sub.color}`}>
                <sub.icon className="h-5 w-5" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-medium text-sm">{sub.name}</p>
                <Progress value={sub.progress} className="h-1.5" />
              </div>
            </div>
          ))}
        </div>

        <div className="md:col-span-3 space-y-6">
          {/* Hero Banner for Active Subject */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-6 shadow-lg">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0 mb-2">Resume Learning</Badge>
                <h2 className="text-2xl font-bold">Algebra: Linear Equations</h2>
                <p className="text-blue-100 max-w-md">You're making great progress! Continue where you left off to earn the "Math Whiz" badge.</p>
                <Button className="mt-4 bg-white text-blue-600 hover:bg-blue-50 border-0 font-semibold" size="lg">
                  <Play className="mr-2 h-4 w-4 fill-current" /> Continue Practice
                </Button>
              </div>

              {/* Abstract Shape/Illu Placeholder */}
              <div className="hidden md:flex items-center justify-center h-32 w-32 bg-white/10 rounded-full backdrop-blur-sm border-4 border-white/20">
                <Calculator className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>

          <Tabs defaultValue="quizzes">
            <TabsList>
              <TabsTrigger value="quizzes">Quizzes & Tests</TabsTrigger>
              <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
              <TabsTrigger value="mistakes">My Mistakes</TabsTrigger>
            </TabsList>

            <TabsContent value="quizzes" className="mt-6 space-y-4">
              {[
                { title: "Algebra Basics: Variables", level: "Easy", qs: 10, time: "15m", status: "New", stars: 0 },
                { title: "Linear Equations Master Class", level: "Medium", qs: 20, time: "30m", status: "Ongoing", stars: 2 },
                { title: "Polynomials Advanced Test", level: "Hard", qs: 25, time: "45m", status: "Completed", stars: 3 },
              ].map((quiz, i) => (
                <Card key={i} className="flex flex-col md:flex-row items-center p-4 gap-4 hover:shadow-md transition-shadow">
                  <div className={`h-12 w-12 rounded-full flex items-center justify-center shrink-0 ${quiz.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-500'}`}>
                    {quiz.status === 'Completed' ? <CheckCircle2 className="h-6 w-6" /> : <Trophy className="h-6 w-6" />}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-semibold">{quiz.title}</h3>
                    <div className="flex items-center justify-center md:justify-start gap-3 mt-1 text-xs text-muted-foreground">
                      <Badge variant="secondary" className="font-normal">{quiz.level}</Badge>
                      <span className="flex items-center gap-1"><Book className="h-3 w-3" /> {quiz.qs} Qs</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {quiz.time}</span>
                    </div>
                  </div>

                  {quiz.status === 'Completed' ? (
                    <div className="flex gap-1">
                      {[1, 2, 3].map(s => <Star key={s} className={`h-5 w-5 ${s <= quiz.stars ? 'text-yellow-400 fill-current' : 'text-slate-200'}`} />)}
                    </div>
                  ) : (
                    <Button size="sm" className="w-full md:w-auto">Start</Button>
                  )}
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
