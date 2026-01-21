"use client";

import { useAppSelector } from "@/store/hooks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, Filter, PlayCircle, Search, ThumbsUp } from "lucide-react";

export default function RecordedClassesPage() {
  const videos = [
    {
      title: "Physics: Introduction to Force",
      subject: "Science",
      teacher: "Mrs. Riya",
      duration: "45:30",
      date: "2 days ago",
      thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=600&h=300",
      views: 124
    },
    {
      title: "Algebra: Solving Linear Eq",
      subject: "Mathematics",
      teacher: "Mr. Raj",
      duration: "52:10",
      date: "3 days ago",
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600&h=300",
      views: 89
    },
    {
      title: "History: The Mughal Empire Pt 1",
      subject: "History",
      teacher: "Ms. Anita",
      duration: "38:45",
      date: "Last week",
      thumbnail: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=600&h=300",
      views: 210
    },
    {
      title: "English: Grammar Basics",
      subject: "English",
      teacher: "Ms. Anita",
      duration: "40:00",
      date: "2 weeks ago",
      thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600&h=300",
      views: 156
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Recorded Library</h1>
          <p className="text-muted-foreground">
            Watch past classes and revision sessions at your own pace.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center bg-white dark:bg-slate-900 p-4 rounded-xl border shadow-sm">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search by topic or teacher..." className="pl-9 bg-slate-50 border-0" />
          </div>
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <Select defaultValue="all">
              <SelectTrigger className="w-[140px] bg-slate-50"><SelectValue placeholder="Subject" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                <SelectItem value="math">Mathematics</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="english">English</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="week">
              <SelectTrigger className="w-[140px] bg-slate-50"><SelectValue placeholder="Date" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="year">All Time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, i) => (
          <Card key={i} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
            <div className="relative h-48 w-full bg-slate-200">
              <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-all">
                  <PlayCircle className="h-6 w-6 text-indigo-600 fill-indigo-100" />
                </div>
              </div>
              <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded">
                {video.duration}
              </div>
            </div>
            <CardContent className="p-4 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <Badge variant="outline" className="mb-2 text-[10px]">{video.subject}</Badge>
                  <h3 className="font-semibold line-clamp-1 leading-tight group-hover:text-indigo-600 transition-colors">{video.title}</h3>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Avatar className="h-5 w-5">
                    <AvatarFallback className="text-[9px] bg-indigo-100 text-indigo-700">{video.teacher[0]}</AvatarFallback>
                  </Avatar>
                  <span>{video.teacher}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>{video.views} views</span>
                  <span>•</span>
                  <span>{video.date}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
