"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Check, Filter, Plus, Search, Sparkles } from "lucide-react";

import { api } from "@schoolx/api";
import { Question } from "@/domain/types";
import { useState, useEffect } from "react";

export default function QuestionBankPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await api.teacher.getQuestions();
        setQuestions(data);
      } catch (error) {
        console.error("Failed to fetch questions", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Question Bank</h1>
          <p className="text-muted-foreground">A repository of assessments questions.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Sparkles className="mr-2 h-4 w-4 text-purple-500" /> AI Generate
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Question
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search questions..." className="pl-8" />
        </div>
        <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filters</Button>
      </div>

      <div className="space-y-4">
        {questions.map((q) => (
          <Card key={q.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
            <CardContent className="p-4 flex items-start gap-4">
              <div className="pt-1">
                <Button variant="outline" size="icon" className="h-6 w-6 rounded-full shrink-0">
                  <Check className="h-3 w-3" />
                </Button>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{q.type}</Badge>
                  <Badge variant="secondary" className={
                    q.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                      q.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                  }>{q.difficulty}</Badge>
                  <span className="text-xs text-muted-foreground ml-auto">Marks: {q.marks}</span>
                </div>
                <p className="font-medium text-lg">{q.text}</p>
                <p className="text-xs text-muted-foreground">Used in 3 quizzes • Last edited 2 days ago</p>
              </div>
              <Button variant="ghost" size="sm">Edit</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
