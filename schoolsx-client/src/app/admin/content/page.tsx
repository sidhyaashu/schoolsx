"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, XCircle, Eye, FileText, Video, AlertCircle } from "lucide-react";

export default function AdminContentPage() {
  const pendingContent = [
    { id: 1, title: "Grade 6 Math Syllabus Update", type: "PDF", author: "Mr. Verma", date: "today", items: "1 file" },
    { id: 2, title: "Biology Chapter 3 Video", type: "Video", author: "Ms. Riya", date: "yesterday", items: "1 video" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Management</h1>
          <p className="text-muted-foreground">Review, approve, or reject teacher-uploaded content.</p>
        </div>
      </div>

      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pending" className="relative">
            Pending Approval
            <span className="ml-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">2</span>
          </TabsTrigger>
          <TabsTrigger value="approved">Published</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          <div className="grid gap-4">
            {pendingContent.map((item) => (
              <Card key={item.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        {item.type === 'Video' ? <Video className="h-5 w-5 text-blue-500" /> : <FileText className="h-5 w-5 text-orange-500" />}
                      </div>
                      <div>
                        <CardTitle className="text-base">{item.title}</CardTitle>
                        <CardDescription>Submitted by {item.author} • {item.date}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Needs Review</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded text-sm text-muted-foreground border">
                    Preview not available. Please verify the actual file.
                  </div>
                </CardContent>
                <CardFooter className="bg-slate-50 dark:bg-slate-900/50 border-t p-2 flex justify-end gap-2">
                  <Button variant="ghost" size="sm"><Eye className="mr-2 h-4 w-4" /> Review</Button>
                  <Button variant="destructive" size="sm" className="h-8"><XCircle className="mr-2 h-4 w-4" /> Reject</Button>
                  <Button size="sm" className="h-8 bg-green-600 hover:bg-green-700"><CheckCircle className="mr-2 h-4 w-4" /> Approve & Publish</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="approved" className="h-32 flex flex-col items-center justify-center text-muted-foreground border rounded-lg border-dashed">
          <CheckCircle className="h-8 w-8 mb-2 opacity-50" />
          <p>No recently approved items shown in this demo view.</p>
        </TabsContent>
        <TabsContent value="rejected" className="h-32 flex flex-col items-center justify-center text-muted-foreground border rounded-lg border-dashed">
          <AlertCircle className="h-8 w-8 mb-2 opacity-50" />
          <p>No recently rejected items.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
