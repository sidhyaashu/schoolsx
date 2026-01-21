"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Eye, MoreVertical, Search, Upload, Video } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function RecordedClassesPage() {
  const recordings = [
    {
      id: 1,
      title: "Science: Nutrition in Plants",
      grade: "Grade 7A",
      date: "Oct 24, 2024",
      duration: "45 mins",
      views: 32,
      status: "Published",
    },
    {
      id: 2,
      title: "Physics: Force & Pressure Exp",
      grade: "Grade 8B",
      date: "Oct 22, 2024",
      duration: "38 mins",
      views: 28,
      status: "Published",
    },
    {
      id: 3,
      title: "Biology: Cell Structure",
      grade: "Grade 9A",
      date: "Oct 20, 2024",
      duration: "52 mins",
      views: 45,
      status: "Processing",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Recorded Classes</h1>
          <p className="text-muted-foreground">Manage your lecture recordings and visibility.</p>
        </div>
        <Button>
          <Upload className="mr-2 h-4 w-4" /> Upload Recording
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search recordings..." className="pl-8" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recordings.map((rec) => (
          <Card key={rec.id}>
            <div className="aspect-video bg-slate-100 dark:bg-slate-800 relative group cursor-pointer overflow-hidden rounded-t-lg">
              <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all">
                  <Video className="h-5 w-5 text-black" />
                </div>
              </div>
              <Badge className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 border-0">
                {rec.duration}
              </Badge>
            </div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <Badge variant="outline" className="mb-2">{rec.grade}</Badge>
                  <CardTitle className="text-base line-clamp-1">{rec.title}</CardTitle>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Edit Details</DropdownMenuItem>
                    <DropdownMenuItem>View Analytics</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {rec.date}</span>
                  <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> {rec.views}</span>
                </div>
                <Badge variant={rec.status === 'Published' ? 'default' : 'secondary'} className={rec.status === 'Published' ? 'bg-green-600' : ''}>
                  {rec.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
