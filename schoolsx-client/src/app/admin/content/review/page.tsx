"use client";

import { useAppSelector } from "@/store/hooks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlertCircle, CheckCircle2, Eye, FileText, XCircle } from "lucide-react";

export default function ContentReviewPage() {
  const pendingContent = [
    { title: "Grade 10 Physics: Quantum Mechanics Intro", author: "Dr. Rajesh Koothrappali", type: "Video Lesson", date: "2 hours ago", status: "Pending" },
    { title: "History: The Renaissance Period", author: "Ms. Penny Hofstadter", type: "Article", date: "5 hours ago", status: "Pending" },
    { title: "Math Quiz: Trigonometry Advanced", author: "Mrs. Wolowitz", type: "Quiz", date: "Yesterday", status: "Flagged" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Content Review</h1>
        <p className="text-muted-foreground">
          Verify and approve educational content before it goes live.
        </p>
      </div>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList>
          <TabsTrigger value="pending">Pending Review <Badge className="ml-2 bg-yellow-100 text-yellow-800 hover:bg-yellow-100">3</Badge></TabsTrigger>
          <TabsTrigger value="flagged">Flagged</TabsTrigger>
          <TabsTrigger value="approved">Recently Approved</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="mt-6 space-y-4">
          {pendingContent.map((item, i) => (
            <Card key={i}>
              <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                  <FileText className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <Badge variant="outline">{item.type}</Badge>
                    {item.status === 'Flagged' && <Badge variant="destructive">Flagged</Badge>}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Avatar className="h-4 w-4">
                        <AvatarFallback>RK</AvatarFallback>
                      </Avatar>
                      {item.author}
                    </span>
                    <span>•</span>
                    <span>Submitted {item.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto">
                  <Button variant="outline" size="sm" className="flex-1 md:flex-none">
                    <Eye className="mr-2 h-4 w-4" /> Preview
                  </Button>
                  <Button size="sm" variant="default" className="bg-green-600 hover:bg-green-700 flex-1 md:flex-none">
                    <CheckCircle2 className="mr-2 h-4 w-4" /> Approve
                  </Button>
                  <Button size="sm" variant="destructive" className="flex-1 md:flex-none">
                    <XCircle className="mr-2 h-4 w-4" /> Reject
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="flagged">
          <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
            <AlertCircle className="h-12 w-12 mb-4 opacity-20" />
            <p>No flagged content at the moment.</p>
          </div>
        </TabsContent>

        <TabsContent value="approved">
          <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
            <CheckCircle2 className="h-12 w-12 mb-4 opacity-20" />
            <p>All approved content has been published.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
