"use client";

import { useAppSelector } from "@/store/hooks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle, CheckCircle2, Clock, XCircle } from "lucide-react";
import React from "react";

export default function AttendancePage() {
  const { user } = useAppSelector((state) => state.auth);
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  // Mock attendance data
  const summary = {
    present: 85,
    absent: 3,
    late: 2,
    total_days: 90,
    percentage: 94.4
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Attendance</h1>
          <p className="text-muted-foreground">
            Track daily attendance and punctuality records.
          </p>
        </div>
        <Select defaultValue="term1">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Term" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="term1">Term 1 (Current)</SelectItem>
            <SelectItem value="term2">Term 2</SelectItem>
            <SelectItem value="year">Full Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800">
          <CardContent className="p-6 flex flex-col items-center justify-center text-center">
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-green-900 dark:text-green-100">{summary.present}</div>
            <p className="text-xs text-green-800 dark:text-green-300">Days Present</p>
          </CardContent>
        </Card>
        <Card className="bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800">
          <CardContent className="p-6 flex flex-col items-center justify-center text-center">
            <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mb-2">
              <XCircle className="h-6 w-6 text-red-600" />
            </div>
            <div className="text-2xl font-bold text-red-900 dark:text-red-100">{summary.absent}</div>
            <p className="text-xs text-red-800 dark:text-red-300">Days Absent</p>
          </CardContent>
        </Card>
        <Card className="bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800">
          <CardContent className="p-6 flex flex-col items-center justify-center text-center">
            <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mb-2">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">{summary.late}</div>
            <p className="text-xs text-orange-800 dark:text-orange-300">Late Arrivals</p>
          </CardContent>
        </Card>
        <Card className="bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800">
          <CardContent className="p-6 flex flex-col items-center justify-center text-center">
            <div className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-1">{summary.percentage}%</div>
            <p className="text-xs text-blue-600 dark:text-blue-400">Total Attendance</p>
            <Badge className="mt-2 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0">Good</Badge>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        {/* Calendar View */}
        <Card className="md:col-span-4 lg:col-span-5">
          <CardHeader>
            <CardTitle>Calendar View</CardTitle>
            <CardDescription>View monthly attendance history.</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border p-4"
            />
            {/* Note: Ideally we'd pass detailed modifiers to highlight absent days on the calendar component */}
          </CardContent>
        </Card>

        {/* Absent History List */}
        <Card className="md:col-span-3 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Absence History</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { date: "Oct 12, 2024", reason: "Fever", status: "Excused" },
              { date: "Sep 05, 2024", reason: "Family Event", status: "Unexcused" },
              { date: "Aug 18, 2024", reason: "Medical", status: "Excused" },
            ].map((rec, i) => (
              <div key={i} className="flex items-start gap-3 border-b pb-3 last:border-0 last:pb-0">
                <div className="h-8 w-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-red-600">{(rec.date || "").split(' ')[0].substring(0, 3)}</span>
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">{rec.date}</p>
                  <p className="text-xs text-muted-foreground">{rec.reason}</p>
                </div>
                <Badge variant="outline" className="text-[10px]">{rec.status}</Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full text-xs box-border">Request Leave</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
