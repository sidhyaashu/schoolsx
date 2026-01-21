"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, FileCheck, AlertCircle, FileText, Upload } from "lucide-react";

export default function AssignmentsPage() {
  const assignments = [
    {
      id: 1,
      title: "Algebra Worksheet 4.2",
      subject: "Math",
      dueDate: "Today, 6:00 PM",
      status: "Pending",
      teacher: "Mr. Sharma",
      priority: "high",
    },
    {
      id: 2,
      title: "Plant Cell Diagram",
      subject: "Science",
      dueDate: "Tomorrow, 10:00 AM",
      status: "Pending",
      teacher: "Ms. Riya",
      priority: "medium",
    },
    {
      id: 3,
      title: "History Essay: Mughal Empire",
      subject: "History",
      dueDate: "Oct 28, 2024",
      status: "Submitted",
      teacher: "Mrs. Gupta",
      priority: "low",
      score: "Pending"
    },
    {
      id: 4,
      title: "English Poem Recitation",
      subject: "English",
      dueDate: "Oct 25, 2024",
      status: "Graded",
      teacher: "Mr. Verma",
      priority: "low",
      score: "18/20"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Assignments</h1>
          <p className="text-muted-foreground">Track your homework, projects, and submissions.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          View Calendar
        </Button>
      </div>

      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="pending">Assigned (2)</TabsTrigger>
          <TabsTrigger value="submitted">Submitted (1)</TabsTrigger>
          <TabsTrigger value="graded">Graded (1)</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          <div className="grid gap-4">
            {assignments.filter(a => a.status === 'Pending').map((assignment) => (
              <Card key={assignment.id} className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge variant="outline" className="mb-2">{assignment.subject}</Badge>
                      <CardTitle>{assignment.title}</CardTitle>
                      <CardDescription>Assigned by {assignment.teacher}</CardDescription>
                    </div>
                    {assignment.priority === 'high' && (
                      <Badge variant="destructive" className="flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> Due Soon
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Due: <span className="font-medium text-foreground">{assignment.dueDate}</span></span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button variant="ghost" size="sm">View Details</Button>
                  <Button size="sm">
                    <Upload className="mr-2 h-4 w-4" /> Submit Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="submitted" className="space-y-4">
          <div className="grid gap-4">
            {assignments.filter(a => a.status === 'Submitted').map((assignment) => (
              <Card key={assignment.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge variant="outline" className="mb-2">{assignment.subject}</Badge>
                      <CardTitle>{assignment.title}</CardTitle>
                      <CardDescription>Assigned by {assignment.teacher}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">
                      <FileCheck className="mr-1 h-3 w-3" /> Submitted
                    </Badge>
                  </div>
                </CardHeader>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button variant="ghost" size="sm">View Submission</Button>
                  <span className="text-sm text-muted-foreground">Awaiting Grade</span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="graded" className="space-y-4">
          <div className="grid gap-4">
            {assignments.filter(a => a.status === 'Graded').map((assignment) => (
              <Card key={assignment.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge variant="outline" className="mb-2">{assignment.subject}</Badge>
                      <CardTitle>{assignment.title}</CardTitle>
                      <CardDescription>Assigned by {assignment.teacher}</CardDescription>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-2xl font-bold text-green-600">{assignment.score}</span>
                      <span className="text-xs text-muted-foreground">Score</span>
                    </div>
                  </div>
                </CardHeader>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button variant="ghost" size="sm">View Feedback</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
