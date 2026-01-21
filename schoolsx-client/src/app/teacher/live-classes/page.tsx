"use client";

import { useAppSelector } from "@/store/hooks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Clock, Filter, MoreHorizontal, Plus, Search, Users, Video } from "lucide-react";

export default function LiveClassesPage() {
  const { user } = useAppSelector((state) => state.auth);

  const classes = [
    { title: "Physics: Introduction to Motion", grade: "Grade 9-A", time: "10:30 AM", duration: "45 min", status: "Live", attendees: 38 },
    { title: "Chemistry: Acid and Bases", grade: "Grade 8-B", time: "01:00 PM", duration: "60 min", status: "Scheduled", attendees: 0 },
    { title: "Biology: Cells Structure", grade: "Grade 7-C", time: "Yesterday", duration: "45 min", status: "Completed", attendees: 42 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Live Classes</h1>
          <p className="text-muted-foreground">
            Schedule and manage your live sessions for {user?.name || "Teacher"}.
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" /> Schedule New Class
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300">Total Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">124</div>
            <p className="text-xs text-blue-600 dark:text-blue-400">This academic year</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-green-700 dark:text-green-300">Avg. Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900 dark:text-green-100">92%</div>
            <p className="text-xs text-green-600 dark:text-green-400">+5% vs last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Classes today</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Session History</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search classes..." className="pl-8 w-[250px]" />
              </div>
              <Button variant="outline" size="icon"><Filter className="h-4 w-4" /></Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Topic / Class</TableHead>
                <TableHead>Schedule</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Attendees</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {classes.map((cls, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                        <Video className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">{cls.title}</div>
                        <div className="text-xs text-muted-foreground">{cls.grade}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm">{cls.time}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm">{cls.duration}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={cls.status === 'Live' ? 'destructive' : cls.status === 'Completed' ? 'secondary' : 'default'} className={cls.status === 'Live' ? 'animate-pulse' : ''}>
                      {cls.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1.5">
                      <Users className="h-3 w-3 text-muted-foreground" />
                      <span>{cls.attendees > 0 ? cls.attendees : '-'}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    {cls.status === 'Live' ? (
                      <Button size="sm" variant="destructive">Join Now</Button>
                    ) : (
                      <Button size="sm" variant="ghost"><MoreHorizontal className="h-4 w-4" /></Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
