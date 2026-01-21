"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, BarChart3, Calendar, Trophy, User } from "lucide-react";

import { api } from "@schoolx/api";
import { StudentPerformance, SubjectPerformance } from "@/domain/types";
import { useState, useEffect } from "react";

export default function PerformancePage() {
  const [performance, setPerformance] = useState<StudentPerformance | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPerformance = async () => {
      try {
        const data = await api.parent.getPerformance("student_1");
        setPerformance(data);
      } catch (error) {
        console.error("Failed to fetch performance data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPerformance();
  }, []);

  if (isLoading) return <div className="p-8 text-center">Loading performance data...</div>;
  if (!performance) return <div className="p-8 text-center text-red-500">Failed to load performance data.</div>;
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Performance & Progress</h1>
          <p className="text-muted-foreground">Detailed academic analysis for Aditi Sharma (Grade 6A).</p>
        </div>
        <Button variant="outline">Download Report Card</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall GPA</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{performance.gpa}</div>
            <p className="text-xs text-muted-foreground">Top 5% in class</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{performance.attendance}</div>
            <p className="text-xs text-muted-foreground">4 absences this term</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Assignments</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{performance.assignments}</div>
            <p className="text-xs text-muted-foreground">Completed on time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Class Participation</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{performance.participation}</div>
            <p className="text-xs text-muted-foreground">Active contributor</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="academics" className="space-y-4">
        <TabsList>
          <TabsTrigger value="academics">Academic Scores</TabsTrigger>
          <TabsTrigger value="skills">Soft Skills</TabsTrigger>
          <TabsTrigger value="health">Health & Fitness</TabsTrigger>
        </TabsList>

        <TabsContent value="academics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Subject-wise Performance</CardTitle>
              <CardDescription>Performance in recent Unit Tests and Mid-Terms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {performance.subjectWise.map((item: SubjectPerformance, i: number) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="font-medium">{item.subject}</div>
                    <div className="flex items-center gap-4">
                      <span className="text-muted-foreground">{item.score}/100</span>
                      <span className="font-bold w-6 text-right">{item.grade}</span>
                    </div>
                  </div>
                  <Progress value={item.score} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="h-32 flex items-center justify-center text-muted-foreground border rounded-lg border-dashed">
          Soft skills evaluation data...
        </TabsContent>

        <TabsContent value="health" className="h-32 flex items-center justify-center text-muted-foreground border rounded-lg border-dashed">
          Health records and BMI stats...
        </TabsContent>
      </Tabs>
    </div>
  );
}
