"use client";

import { useAppSelector } from "@/store/hooks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BrainCircuit, Clock, Edit, Eye, Filter, MoreHorizontal, Play, Plus, Search, Trash2, Users } from "lucide-react";

export default function QuizzesPage() {
  const quizzes = [
    { title: "Weekly Science Review", topic: "Physics: Motion", questions: 15, duration: "30m", completions: 24, status: "Published" },
    { title: "Pop Quiz: Algebra", topic: "Math: Equations", questions: 10, duration: "15m", completions: 0, status: "Draft" },
    { title: "History: The Mugal Empire", topic: "History: Medieval India", questions: 25, duration: "45m", completions: 40, status: "Closed" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Quizzes</h1>
          <p className="text-muted-foreground">
            Manage your question banks and scheduled quizzes.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <BrainCircuit className="mr-2 h-4 w-4" /> AI Generator
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Create Quiz
          </Button>
        </div>
      </div>

      <Tabs defaultValue="quizzes" className="w-full">
        <TabsList>
          <TabsTrigger value="quizzes">My Quizzes</TabsTrigger>
          <TabsTrigger value="reports">Results & Analysis</TabsTrigger>
          <TabsTrigger value="bank">Question Bank</TabsTrigger>
        </TabsList>

        <TabsContent value="quizzes" className="space-y-4 mt-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search quizzes..." className="pl-8" />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {quizzes.map((quiz, i) => (
              <Card key={i} className="group hover:border-indigo-300 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <Badge variant={quiz.status === 'Published' ? 'default' : 'outline'} className="mb-2">
                      {quiz.status}
                    </Badge>
                    <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2"><MoreHorizontal className="h-4 w-4" /></Button>
                  </div>
                  <CardTitle className="leading-tight">{quiz.title}</CardTitle>
                  <CardDescription>{quiz.topic}</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-3">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" /> {quiz.duration}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BrainCircuit className="h-4 w-4" /> {quiz.questions} Qs
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="h-4 w-4" /> {quiz.completions}
                    </div>
                  </div>
                </CardContent>
                <CardHeader className="pt-0 flex flex-row gap-2">
                  <Button size="sm" variant="outline" className="flex-1"><Edit className="mr-2 h-3 w-3" /> Edit</Button>
                  <Button size="sm" variant="secondary" className="flex-1"><Eye className="mr-2 h-3 w-3" /> Preview</Button>
                </CardHeader>
              </Card>
            ))}

            {/* Create New Placeholder */}
            <button className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-8 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors gap-3 text-muted-foreground hover:text-foreground">
              <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">
                <Plus className="h-6 w-6" />
              </div>
              <p className="font-medium">Create New Quiz</p>
            </button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
