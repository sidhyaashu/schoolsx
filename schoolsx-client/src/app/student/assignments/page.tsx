"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, FileCheck, AlertCircle, FileText, Upload } from "lucide-react";

import { useAssignments } from "@/hooks/api/use-assignments";
import { Loader2 } from "lucide-react";

export default function AssignmentsPage() {
  const { data: assignments, isLoading } = useAssignments();

  if (isLoading) {
    return <div className="flex justify-center p-8"><Loader2 className="animate-spin" /></div>;
  }

  // Fallback if no data
  const list = assignments || [];

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
            {list.filter((a: any) => !a.status || a.status === 'pending').map((assignment: any) => (
              <Card key={assignment.id} className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge variant="outline" className="mb-2">{assignment.subjectId}</Badge>
                      <CardTitle>{assignment.title}</CardTitle>
                      <CardDescription>{assignment.description}</CardDescription>
                    </div>
                    {/* Priority logic would go here */}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Due: <span className="font-medium text-foreground">{new Date(assignment.dueDate).toLocaleDateString()}</span></span>
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
          <div className="text-center py-10 text-muted-foreground">No submissions yet</div>
        </TabsContent>

        <TabsContent value="graded" className="space-y-4">
          <div className="text-center py-10 text-muted-foreground">No graded assignments yet</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
