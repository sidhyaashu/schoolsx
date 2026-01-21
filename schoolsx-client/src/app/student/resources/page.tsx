"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { BookOpen, Download, FileText, Filter, PlayCircle, Search, Video } from "lucide-react";

export default function ResourcesPage() {
  const resources = [
    {
      id: 1,
      title: "Algebra Fundamentals",
      subject: "Math",
      type: "PDF",
      size: "2.4 MB",
      date: "Oct 12, 2024",
      description: "Comprehensive notes on algebraic expressions and equations.",
    },
    {
      id: 2,
      title: "Photosynthesis Explained",
      subject: "Science",
      type: "Video",
      duration: "14:20",
      date: "Oct 15, 2024",
      description: "Visual explanation of the photosynthesis process in plants.",
    },
    {
      id: 3,
      title: "The Solar System",
      subject: "Science",
      type: "Flashcards",
      count: "24 cards",
      date: "Oct 18, 2024",
      description: "Interactive flashcards for revision.",
    },
    {
      id: 4,
      title: "English Grammar: Tenses",
      subject: "English",
      type: "PDF",
      size: "1.1 MB",
      date: "Oct 20, 2024",
      description: "Rule book and practice exercises for all tenses.",
    },
    {
      id: 5,
      title: "World War II Timeline",
      subject: "History",
      type: "Image",
      size: "3.5 MB",
      date: "Oct 22, 2024",
      description: "High-resolution timeline chart of major events.",
    },
    {
      id: 6,
      title: "Trigonometry Basics",
      subject: "Math",
      type: "Video",
      duration: "22:15",
      date: "Oct 25, 2024",
      description: "Introduction to Sine, Cosine and Tangent.",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "PDF": return <FileText className="h-5 w-5 text-red-500" />;
      case "Video": return <PlayCircle className="h-5 w-5 text-blue-500" />;
      case "Flashcards": return <BookOpen className="h-5 w-5 text-green-500" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notes & Resources</h1>
          <p className="text-muted-foreground">Access your study materials, notes, and recordings.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search resources..." className="pl-8" />
          </div>
          <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filter</Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Resources</TabsTrigger>
          <TabsTrigger value="math">Math</TabsTrigger>
          <TabsTrigger value="science">Science</TabsTrigger>
          <TabsTrigger value="english">English</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <Card key={resource.id} className="group hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                      {getIcon(resource.type)}
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-1">{resource.subject}</Badge>
                      <CardDescription>{resource.type}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg mb-2 group-hover:text-blue-600 transition-colors">{resource.title}</CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {resource.description}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>{resource.size || resource.duration || resource.count}</span>
                  <div className="flex items-center gap-2">
                    <span>{resource.date}</span>
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        {/* Simplified tabs for demo - in real app would filter the list */}
        <TabsContent value="math" className="h-24 flex items-center justify-center text-muted-foreground">Math resources filtered view...</TabsContent>
        <TabsContent value="science" className="h-24 flex items-center justify-center text-muted-foreground">Science resources filtered view...</TabsContent>
        <TabsContent value="english" className="h-24 flex items-center justify-center text-muted-foreground">English resources filtered view...</TabsContent>
      </Tabs>
    </div>
  );
}
