"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, BookOpen, Clock, Heart, MapPin, Smile, Star, Trophy, User } from "lucide-react";

export default function ChildrenProfilePage() {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="border-none shadow-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white overflow-hidden">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <Avatar className="h-28 w-28 border-4 border-white shadow-xl">
                <AvatarImage src="/avatars/01.png" />
                <AvatarFallback className="text-2xl text-black">AS</AvatarFallback>
              </Avatar>
              <Badge className="absolute -bottom-2 -right-2 bg-yellow-400 text-black hover:bg-yellow-500 px-3 py-1">
                <Star className="h-3 w-3 mr-1 fill-black" /> Star Student
              </Badge>
            </div>
            <div className="flex-1 text-center md:text-left space-y-2">
              <h1 className="text-3xl font-bold">Aditi Sharma</h1>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-blue-100">
                <span className="flex items-center gap-1"><User className="h-4 w-4" /> Class 6-A</span>
                <span className="flex items-center gap-1"><Trophy className="h-4 w-4" /> Roll No: 24</span>
                <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> House: Red Dragons</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="text-2xl font-bold">92%</div>
                <div className="text-xs text-blue-100 uppercase tracking-wider">Attendance</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="text-2xl font-bold">78%</div>
                <div className="text-xs text-blue-100 uppercase tracking-wider">Avg Score</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Main Details */}
        <div className="md:col-span-2 space-y-6">
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="behavior">Behavior</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 mt-6">

              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Activity className="h-5 w-5 text-green-500" /> Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { icon: Trophy, color: "text-yellow-500", text: "Scored 18/20 in Maths Quiz", time: "2 hours ago" },
                    { icon: Clock, color: "text-blue-500", text: "Attended Science Live Class", time: "Yesterday, 10 AM" },
                    { icon: BookOpen, color: "text-purple-500", text: "Submitted English Essay", time: "2 days ago" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 border-b border-dashed last:border-0 pb-3 last:pb-0">
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.text}</p>
                        <p className="text-xs text-muted-foreground">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Strengths</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Badge variant="outline" className="mr-2 bg-green-50 text-green-700 border-green-200">Mathematics</Badge>
                    <Badge variant="outline" className="mr-2 bg-green-50 text-green-700 border-green-200">English Grammar</Badge>
                    <Badge variant="outline" className="mr-2 bg-green-50 text-green-700 border-green-200">Visual Arts</Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Focus Areas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Badge variant="outline" className="mr-2 bg-red-50 text-red-700 border-red-200">History Dates</Badge>
                    <Badge variant="outline" className="mr-2 bg-red-50 text-red-700 border-red-200">Physics Formulas</Badge>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="behavior" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Behavior Insights (AI)</CardTitle>
                  <CardDescription>Based on classroom interaction and teacher logs.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <Smile className="h-8 w-8 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-green-700 dark:text-green-500">Positive Engagement</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        "Aditi has been very active in Science discussions. She asks insightful questions."
                      </p>
                      <p className="text-xs text-muted-foreground mt-2 font-medium">- Mrs. Riya (Science Teacher), 2 days ago</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm font-medium">
                        <span>Classroom Focus</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm font-medium">
                        <span>Peer Interaction</span>
                        <span>High</span>
                      </div>
                      <Progress value={90} className="h-2 bg-purple-100 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Contact Teachers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Mr. Raj (Class)", subject: "Maths" },
                { name: "Mrs. Riya", subject: "Science" },
                { name: "Ms. Anita", subject: "English" },
              ].map((t, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs">{t.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.subject}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">Message</Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">DOB</span>
                <span>12 May, 2012</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Blood Group</span>
                <span>O+</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Parent</span>
                <span>Amit Sharma</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Contact</span>
                <span>+91 98765 43210</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
