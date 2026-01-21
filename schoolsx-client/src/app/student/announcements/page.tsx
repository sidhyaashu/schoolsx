"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, FileText, Megaphone, Pin, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AnnouncementsPage() {
  const announcements = [
    {
      id: 1,
      title: "Science Fair 2024 Registration",
      author: "Principal Desk",
      role: "Admin",
      date: "Oct 24, 2024",
      content: "Registration for the Annual Science Fair is now open! Please submit your project proposals by Nov 1st to your class teacher. Winners get a chance to represent the school at the district level.",
      type: "Event",
      important: true,
    },
    {
      id: 2,
      title: "Math Unit Test Schedule",
      author: "Mr. Sharma",
      role: "Teacher",
      date: "Oct 23, 2024",
      content: "The Unit Test for Algebra (Chapter 4 & 5) is scheduled for next Tuesday, Oct 29th. Please review the attached study guide.",
      type: "Exam",
      attachment: "Study_Guide_Algebra.pdf",
    },
    {
      id: 3,
      title: "Winter Uniform Update",
      author: "School Office",
      role: "Staff",
      date: "Oct 20, 2024",
      content: "Students are required to wear the winter uniform starting from Nov 15th. Uniforms are available at the school store.",
      type: "Notice",
    },
    {
      id: 4,
      title: "Diwali Holiday Notice",
      author: "Principal Desk",
      role: "Admin",
      date: "Oct 18, 2024",
      content: "The school will remain closed from Oct 31st to Nov 4th for Diwali break. Classes resume on Nov 5th.",
      type: "Holiday",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Announcements</h1>
          <p className="text-muted-foreground">Stay updated with school news and classroom updates.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Filter by Date</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Main Feed */}
        <div className="md:col-span-2 space-y-6">
          {announcements.map((post) => (
            <Card key={post.id} className={post.important ? "border-l-4 border-l-yellow-500 bg-yellow-50/30 dark:bg-yellow-900/10" : ""}>
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <Avatar>
                  <AvatarFallback>{post.author.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{post.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <span className="font-medium text-foreground">{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </CardDescription>
                    </div>
                    {post.important && <Pin className="h-4 w-4 text-yellow-600 -rotate-45" />}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pl-[4.5rem]">
                <p className="text-sm leading-relaxed">{post.content}</p>
                {post.attachment && (
                  <div className="flex items-center gap-2 mt-4 p-2 border rounded-md bg-background w-fit">
                    <FileText className="h-4 w-4 text-red-500" />
                    <span className="text-sm font-medium text-blue-600 underline cursor-pointer">{post.attachment}</span>
                  </div>
                )}
              </CardContent>
              <CardFooter className="pl-[4.5rem]">
                <Badge variant="outline">{post.type}</Badge>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Right Sidebar - Upcoming Events */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" /> Upcoming
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <div className="flex flex-col items-center justify-center h-12 w-12 rounded bg-blue-100 text-blue-700 font-bold border border-blue-200">
                  <span className="text-xs uppercase">Oct</span>
                  <span className="text-lg">29</span>
                </div>
                <div>
                  <p className="font-medium">Math Unit Test</p>
                  <p className="text-sm text-muted-foreground">Chapter 4 & 5</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex flex-col items-center justify-center h-12 w-12 rounded bg-red-100 text-red-700 font-bold border border-red-200">
                  <span className="text-xs uppercase">Nov</span>
                  <span className="text-lg">01</span>
                </div>
                <div>
                  <p className="font-medium">Science Fair</p>
                  <p className="text-sm text-muted-foreground">Proposal Submission</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex flex-col items-center justify-center h-12 w-12 rounded bg-green-100 text-green-700 font-bold border border-green-200">
                  <span className="text-xs uppercase">Nov</span>
                  <span className="text-lg">15</span>
                </div>
                <div>
                  <p className="font-medium">Winter Uniform</p>
                  <p className="text-sm text-muted-foreground">Mandatory</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-800">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-2">
                <Megaphone className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                <h3 className="font-semibold text-orange-900 dark:text-orange-200">Have news to share?</h3>
                <p className="text-sm text-orange-800 dark:text-orange-300">Student council members can create posts for review.</p>
                <Button size="sm" variant="outline" className="mt-2 border-orange-300 text-orange-800 hover:bg-orange-200">Create Draft</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
