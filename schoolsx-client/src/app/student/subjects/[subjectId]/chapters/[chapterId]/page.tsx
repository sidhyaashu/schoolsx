"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, PlayCircle, Trophy, MessageCircle, Sparkles } from "lucide-react";

export default function ChapterDetailsPage({ params }: { params: { subjectId: string; chapterId: string } }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="outline">Maths</Badge>
            <Badge variant="secondary">Chapter 2</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Fractions & Decimals</h1>
          <p className="text-muted-foreground">
            Master the basics of parts and wholes.
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-sm font-medium">Chapter Mastery</span>
          <div className="flex items-center gap-3 w-40">
            <Progress value={40} className="h-2" />
            <span className="text-sm font-bold">40%</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">AI Suggestion: Watch the intro video again.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          {/* Main Content Tabs */}
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="learn">Learn</TabsTrigger>
              <TabsTrigger value="practice">Practice</TabsTrigger>
              <TabsTrigger value="doubt">Doubts</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4 mt-4">
              <Card className="bg-gradient-to-br from-indigo-50 to-white dark:from-slate-950 dark:to-slate-900 border-indigo-100 dark:border-indigo-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400">
                    <Sparkles className="h-5 w-5" />
                    AI Study Plan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs">✓</div>
                      <span className="line-through text-muted-foreground">Watch Introduction Video</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">2</div>
                      <span>Read "Types of Fractions" Notes</span>
                      <Button size="sm" variant="link" className="h-auto p-0 ml-auto">Start</Button>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs">3</div>
                      <span className="text-muted-foreground">Take Quick Quiz (10 Questions)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <h3 className="text-lg font-semibold mt-6">Overview & Goals</h3>
              <p className="text-muted-foreground">
                In this chapter, you will learn how to identify, write, and compare fractions. You will also understand the relationship between fractions and decimals.
              </p>
            </TabsContent>

            <TabsContent value="learn" className="space-y-4 mt-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="cursor-pointer hover:border-primary transition-colors">
                  <CardHeader className="p-4">
                    <CardTitle className="text-base flex items-center gap-2">
                      <PlayCircle className="h-4 w-4 text-red-500" /> Video-1: Intro
                    </CardTitle>
                    <CardDescription>10:24 • Basics of Fractions</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="cursor-pointer hover:border-primary transition-colors">
                  <CardHeader className="p-4">
                    <CardTitle className="text-base flex items-center gap-2">
                      <FileText className="h-4 w-4 text-blue-500" /> Notes: Cheat Sheet
                    </CardTitle>
                    <CardDescription>PDF • 2 Pages</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-4">
          {/* Sidebar Tools */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">AI Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" /> Summarize Notes
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Trophy className="mr-2 h-4 w-4" /> Generate Quiz
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <MessageCircle className="mr-2 h-4 w-4" /> Ask AI Tutor
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
