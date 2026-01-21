"use client";

import { useAppSelector } from "@/store/hooks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, BarChart3, ChevronDown, Download, FileText, TrendingUp } from "lucide-react";

export default function ExamsPage() {
  const { user } = useAppSelector((state) => state.auth);
  // Mock child data based on parent login
  const childName = "Aditi Sharma";

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Exams & Results</h1>
          <p className="text-muted-foreground">
            View report cards and performance analytics for {childName}.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Download Report Card
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* GPA Card */}
        <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-none">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg opacity-90">Cumulative GPA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">3.8</div>
            <p className="text-indigo-100 text-sm mt-1">Grade 6-A • Top 10%</p>
          </CardContent>
        </Card>
        {/* Recent Exam */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Recent Result</CardTitle>
            <CardDescription>Term 1 Finals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-green-600">92%</div>
            <p className="text-muted-foreground text-sm mt-1">Pass with Distinction</p>
          </CardContent>
        </Card>
        {/* Next Exam */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Next Exam</CardTitle>
            <CardDescription>Starts in 2 weeks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Unit Test 2</div>
            <p className="text-muted-foreground text-sm mt-1">Nov 24, 2024</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="term1" className="w-full">
        <TabsList>
          <TabsTrigger value="term1">Term 1 (Finals)</TabsTrigger>
          <TabsTrigger value="midterm">Mid-Term</TabsTrigger>
          <TabsTrigger value="unitts">Unit Tests</TabsTrigger>
        </TabsList>

        <TabsContent value="term1" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Subject Performance</CardTitle>
              <CardDescription>Detailed breakdown of Term 1 results.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { subject: "Mathematics", score: 95, grade: "A+", feedback: "Excellent performance in Algebra." },
                  { subject: "Science", score: 88, grade: "A", feedback: "Good grasp of concepts. Needs work on diagrams." },
                  { subject: "English", score: 92, grade: "A+", feedback: "Creative writing skills are commendable." },
                  { subject: "History", score: 78, grade: "B+", feedback: "Needs to focus more on dates and events." },
                  { subject: "Computer Science", score: 98, grade: "O", feedback: "Outstanding programming skills." },
                ].map((sub, i) => (
                  <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 py-4 border-b last:border-0 last:pb-0">
                    <div className="md:w-1/4">
                      <h3 className="font-semibold">{sub.subject}</h3>
                      <p className="text-xs text-muted-foreground hidden md:block">{sub.feedback}</p>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Score: {sub.score}/100</span>
                        <span className="font-bold">{sub.grade}</span>
                      </div>
                      <Progress value={sub.score} className={`h-2 ${sub.score >= 90 ? 'bg-green-100 text-green-600' : sub.score >= 75 ? 'bg-blue-100 text-blue-600' : 'bg-yellow-100'}`} />
                      <p className="text-xs text-muted-foreground md:hidden">{sub.feedback}</p>
                    </div>
                    <div className="md:w-24 text-right">
                      <Badge variant="outline">{sub.score >= 40 ? 'Pass' : 'Fail'}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-500" /> Improvement Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm">
                    <div className="h-2 w-2 rounded-full bg-red-400 mt-2" />
                    <span>History: Ancient Civilizations timeline retention.</span>
                  </li>
                  <li className="flex gap-3 text-sm">
                    <div className="h-2 w-2 rounded-full bg-orange-400 mt-2" />
                    <span>Science: Lab record maintenance.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-500" /> Teacher Remarks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="border-l-4 border-indigo-200 pl-4 italic text-muted-foreground text-sm">
                  "Aditi is a very bright student. She participates actively in class discussions. With a little more focus on History, she can achieve a perfect score across all subjects."
                </blockquote>
                <p className="text-right text-xs font-semibold mt-2">- Mrs. Class Teacher</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
