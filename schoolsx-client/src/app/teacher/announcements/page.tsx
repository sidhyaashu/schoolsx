"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Megaphone, MessageSquare, Send, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function TeacherAnnouncementsPage() {
  const posts = [
    {
      id: 1,
      content: "Reminder: Science Fair project proposals are due this Friday. Please adhere to the guidelines shared earlier.",
      audience: "Grade 7A, 7B",
      date: "2 hours ago",
      comments: 3,
      likes: 12
    },
    {
      id: 2,
      content: "Math Unit Test Ch 4-5 will be held on Tuesday. Bring your geometry boxes.",
      audience: "Grade 8A",
      date: "Yesterday",
      comments: 0,
      likes: 24
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Announcements</h1>
          <p className="text-muted-foreground">Communicate with your classes and students.</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Create Post */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-900/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Megaphone className="h-5 w-5 text-blue-600" />
                New Announcement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">To:</label>
                <Input placeholder="Select Classes (e.g. Grade 7A)..." />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Message:</label>
                <Textarea placeholder="Type your announcement here..." className="min-h-[120px]" />
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <input type="checkbox" id="urgent" className="rounded border-gray-300" />
                <label htmlFor="urgent">Mark as Important</label>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Send className="mr-2 h-4 w-4" /> Post Now
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* History */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="font-semibold text-lg">Recent Posts</h3>
          {posts.map((post) => (
            <Card key={post.id}>
              <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-4">
                <Avatar>
                  <AvatarImage src="/avatars/03.png" />
                  <AvatarFallback>Me</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base font-semibold">Mr. Sharma</CardTitle>
                      <CardDescription>{post.date} • To: {post.audience}</CardDescription>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{post.content}</p>
              </CardContent>
              <CardFooter className="border-t pt-4 flex gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
                  <Badge variant="secondary" className="rounded-full px-2">{post.likes} Seen</Badge>
                </span>
                <span className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
                  <MessageSquare className="h-3 w-3" /> {post.comments} Replies
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
