"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, CheckCircle, Clock, FileText, Plus, Users, AlertCircle } from "lucide-react";

export default function AdminAssessmentsPage() {
  const exams = [
    {
      id: 1,
      title: "Mid-Term Examinations 2024",
      status: "Scheduled",
      dateRange: "Nov 20 - Nov 30",
      classes: "Grades 6-10",
      readiness: "85%",
    },
    {
      id: 2,
      title: "Unit Test: Series 2",
      status: "Ongoing",
      dateRange: "Oct 28 - Oct 30",
      classes: "All Grades",
      readiness: "100%",
    },
    {
      id: 3,
      title: "Science Olympiad Qualifier",
      status: "Draft",
      dateRange: "Dec 15",
      classes: "Volunteer",
      readiness: "20%",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Assessments & Exams</h1>
          <p className="text-muted-foreground">Schedule exams, manage question papers, and publish results.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create New Assessment
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <h3 className="text-lg font-semibold">Active & Upcoming Assessments</h3>
          {exams.map((exam) => (
            <Card key={exam.id} className="relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-1 h-full ${exam.status === 'Ongoing' ? 'bg-green-500' :
                  exam.status === 'Scheduled' ? 'bg-blue-500' : 'bg-slate-300'
                }`} />
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{exam.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Calendar className="h-3 w-3" /> {exam.dateRange}
                      <span>•</span>
                      <Users className="h-3 w-3" /> {exam.classes}
                    </CardDescription>
                  </div>
                  <Badge variant={exam.status === 'Ongoing' ? 'default' : 'secondary'} className={exam.status === 'Ongoing' ? 'bg-green-600' : ''}>
                    {exam.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mt-2">
                  <div className="bg-slate-50 dark:bg-slate-900 rounded p-3 text-center">
                    <div className="text-2xl font-bold text-slate-700 dark:text-slate-200">12</div>
                    <div className="text-xs text-muted-foreground">Subjects</div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900 rounded p-3 text-center">
                    <div className="text-2xl font-bold text-slate-700 dark:text-slate-200">24</div>
                    <div className="text-xs text-muted-foreground">Paper Sets</div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900 rounded p-3 text-center">
                    <div className="text-2xl font-bold text-slate-700 dark:text-slate-200">{exam.readiness}</div>
                    <div className="text-xs text-muted-foreground">Ready</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4 bg-slate-50/50 dark:bg-slate-900/20 flex gap-2">
                <Button variant="outline" size="sm">Edit Schedule</Button>
                <Button variant="outline" size="sm">Manage Papers</Button>
                {exam.status === 'Ongoing' && <Button size="sm" variant="default">Monitor Live</Button>}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base text-red-600 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" /> Action Required
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3 items-start pb-3 border-b last:border-0 last:pb-0">
                <FileText className="h-4 w-4 mt-1 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Math Paper Review</p>
                  <p className="text-xs text-muted-foreground">Grade 9 Mid-Term paper pending approval from HOD.</p>
                  <Button variant="link" className="px-0 h-auto text-xs mt-1">Review Now</Button>
                </div>
              </div>
              <div className="flex gap-3 items-start pb-3 border-b last:border-0 last:pb-0">
                <Clock className="h-4 w-4 mt-1 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Publish Results</p>
                  <p className="text-xs text-muted-foreground">Unit Test 1 results ready for Grade 10.</p>
                  <Button variant="link" className="px-0 h-auto text-xs mt-1">Publish</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-indigo-600 text-white border-0">
            <CardHeader>
              <CardTitle className="text-white">Exam Cell Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-indigo-200 text-sm">Papers Printed</span>
                <span className="font-bold text-xl">1,200</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-indigo-200 text-sm">Room Allocation</span>
                <span className="font-bold text-xl">Completed</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-indigo-200 text-sm">Invigilators</span>
                <span className="font-bold text-xl">42/45</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
