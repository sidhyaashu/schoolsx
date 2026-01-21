"use client";

import { useAppSelector } from "@/store/hooks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Download, Edit, Plus, Users } from "lucide-react";

export default function TimetablePage() {
  const schedule = [
    { time: "08:30 - 09:30", mon: "Math (9A)", tue: "Physics (9A)", wed: "Math (9A)", thu: "Chemistry (9A)", fri: "PE" },
    { time: "09:30 - 10:30", mon: "English (9A)", tue: "Chemistry (9A)", wed: "English (9A)", thu: "Physics (9A)", fri: "Math (9A)" },
    { time: "10:30 - 11:00", mon: "Break", tue: "Break", wed: "Break", thu: "Break", fri: "Break" },
    { time: "11:00 - 12:00", mon: "History (9A)", tue: "Bio (9A)", wed: "History (9A)", thu: "English (9A)", fri: "Computer (9A)" },
    { time: "12:00 - 01:00", mon: "Physics (Lab)", tue: "Math (9A)", wed: "Chemistry (Lab)", thu: "Math (9A)", fri: "Library" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Timetable Management</h1>
          <p className="text-muted-foreground">
            Manage class schedules, assign teachers, and view room allocation.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export PDF
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Create Schedule
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-lg border">
        <div className="w-1/4">
          <label className="text-xs font-medium text-muted-foreground mb-1 block">Academic Year</label>
          <Select defaultValue="2024">
            <SelectTrigger className="bg-white"><SelectValue /></SelectTrigger>
            <SelectContent><SelectItem value="2024">2024-2025</SelectItem></SelectContent>
          </Select>
        </div>
        <div className="w-1/4">
          <label className="text-xs font-medium text-muted-foreground mb-1 block">Class</label>
          <Select defaultValue="9a">
            <SelectTrigger className="bg-white"><SelectValue placeholder="Select Class" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="9a">Class 9-A</SelectItem>
              <SelectItem value="9b">Class 9-B</SelectItem>
              <SelectItem value="10a">Class 10-A</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-1/4">
          <label className="text-xs font-medium text-muted-foreground mb-1 block">Teacher (Optional)</label>
          <Select defaultValue="all">
            <SelectTrigger className="bg-white"><SelectValue placeholder="Filter by Teacher" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Teachers</SelectItem>
              <SelectItem value="sharma">Mrs. Sharma</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="view" className="w-full">
        <TabsList>
          <TabsTrigger value="view">View Schedule</TabsTrigger>
          <TabsTrigger value="conflicts">Conflicts & Issues <Badge variant="destructive" className="ml-2 h-5 w-5 p-0 flex items-center justify-center rounded-full text-[10px]">2</Badge></TabsTrigger>
        </TabsList>

        <TabsContent value="view" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Class 9-A Schedule</CardTitle>
                <CardDescription>Effective from Nov 1, 2024</CardDescription>
              </div>
              <Button variant="outline" size="sm"><Edit className="mr-2 h-4 w-4" /> Edit Grid</Button>
            </CardHeader>
            <CardContent>
              <Table className="border">
                <TableHeader>
                  <TableRow className="bg-slate-50 dark:bg-slate-900">
                    <TableHead className="w-[150px] font-bold"><Clock className="inline h-4 w-4 mr-2" /> Time</TableHead>
                    <TableHead>Monday</TableHead>
                    <TableHead>Tuesday</TableHead>
                    <TableHead>Wednesday</TableHead>
                    <TableHead>Thursday</TableHead>
                    <TableHead>Friday</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {schedule.map((slot, i) => (
                    <TableRow key={i} className={slot.mon === 'Break' ? "bg-slate-50/50 hover:bg-slate-100/50" : ""}>
                      <TableCell className="font-medium text-muted-foreground border-r">{slot.time}</TableCell>
                      <TableCell className="border-r">
                        {slot.mon === 'Break' ? <span className="text-muted-foreground italic text-xs uppercase tracking-widest pl-10">Break</span> : slot.mon}
                      </TableCell>
                      <TableCell className="border-r">{slot.mon === 'Break' ? '' : slot.tue}</TableCell>
                      <TableCell className="border-r">{slot.mon === 'Break' ? '' : slot.wed}</TableCell>
                      <TableCell className="border-r">{slot.mon === 'Break' ? '' : slot.thu}</TableCell>
                      <TableCell>{slot.mon === 'Break' ? '' : slot.fri}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
