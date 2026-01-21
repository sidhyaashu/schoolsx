"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, CheckCircle2, Clock, FileText, AlertCircle } from "lucide-react";

export default function ParentHomeworkPage() {
  const assignments = [
    {
      id: 1,
      title: "Algebra Worksheet 4.2",
      subject: "Mathematics",
      assignedBy: "Mr. Sharma",
      dueDate: "Tomorrow",
      status: "Pending",
      priority: "High"
    },
    {
      id: 2,
      title: "Science Lab Report: Photosynthesis",
      subject: "Science",
      assignedBy: "Ms. Riya",
      dueDate: "Friday",
      status: "Pending",
      priority: "Medium"
    },
    {
      id: 3,
      title: "History Essay: The Great War",
      subject: "Social Studies",
      assignedBy: "Mrs. Gupta",
      dueDate: "Yesterday",
      status: "Submitted",
      priority: "Low"
    },
    {
      id: 4,
      title: "English Poem Recitation",
      subject: "English",
      assignedBy: "Mrs. Kapoor",
      dueDate: "Oct 20",
      status: "Graded",
      score: "18/20",
      priority: "Low"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Homework Tracker</h1>
          <p className="text-muted-foreground">Stay updated on daily tasks and project deadlines.</p>
        </div>
      </div>

      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pending">Pending (2)</TabsTrigger>
          <TabsTrigger value="completed">Completed (2)</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="grid gap-4 md:grid-cols-2">
          {assignments.filter(a => a.status === 'Pending').map((hw) => (
            <Card key={hw.id} className="border-l-4 border-l-orange-500">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge variant="outline" className="mb-2">{hw.subject}</Badge>
                    <CardTitle className="text-lg">{hw.title}</CardTitle>
                  </div>
                  {hw.priority === 'High' && <Badge variant="destructive">Due Soon</Badge>}
                </div>
                <CardDescription>Assigned by {hw.assignedBy}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm font-medium text-orange-600">
                  <Clock className="h-4 w-4" /> Due: {hw.dueDate}
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button variant="outline" size="sm" className="w-full">View Instructions</Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="completed" className="grid gap-4 md:grid-cols-2">
          {assignments.filter(a => a.status !== 'Pending').map((hw) => (
            <Card key={hw.id} className="border-l-4 border-l-green-500">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge variant="outline" className="mb-2">{hw.subject}</Badge>
                    <CardTitle className="text-lg">{hw.title}</CardTitle>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">Submitted</Badge>
                </div>
                <CardDescription>Assigned by {hw.assignedBy}</CardDescription>
              </CardHeader>
              <CardContent>
                {hw.status === 'Graded' ? (
                  <div className="flex items-center gap-2 text-sm font-bold text-green-700">
                    <CheckCircle2 className="h-4 w-4" /> Score: {hw.score}
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4" /> Submitted on time
                  </div>
                )}
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button variant="ghost" size="sm" className="w-full">View Feedback</Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
