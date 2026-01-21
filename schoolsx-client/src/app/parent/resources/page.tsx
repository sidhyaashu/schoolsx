"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Download, FileText, PlayCircle, Search, Video } from "lucide-react";

export default function ParentResourcesPage() {
  const materials = [
    { title: "Math Semester 1 Syllabus", type: "PDF", subject: "Math", date: "Oct 10" },
    { title: "Science: Plant Life Cycle", type: "Video", subject: "Science", date: "Oct 12" },
    { title: "English Grammar Rules", type: "PDF", subject: "English", date: "Oct 15" },
    { title: "History: The Mughal Empire", type: "Presentation", subject: "History", date: "Oct 18" },
    { title: "Holiday Homework List", type: "PDF", subject: "General", date: "Oct 20" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Study Resources</h1>
          <p className="text-muted-foreground">Access curriculum, syllabus, and learning materials.</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search resources..." className="pl-8" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {materials.map((item, i) => (
          <Card key={i} className="group hover:border-blue-500 transition-colors cursor-pointer">
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
              <Badge variant="outline">{item.subject}</Badge>
              <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors">
                {item.type === 'Video' ? <Video className="h-4 w-4 text-blue-600" /> : <FileText className="h-4 w-4 text-orange-600" />}
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-base mb-1 group-hover:text-blue-600 transition-colors">{item.title}</CardTitle>
              <CardDescription>{item.type} • Uploaded {item.date}</CardDescription>
              <Button variant="ghost" size="sm" className="mt-4 w-full justify-start px-0 hover:bg-transparent hover:text-blue-600">
                <Download className="mr-2 h-4 w-4" /> Download
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
