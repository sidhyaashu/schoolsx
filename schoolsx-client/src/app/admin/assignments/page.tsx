"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, CheckCircle2, Clock, Filter, MoreHorizontal, Search, FileBarChart2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function AdminAssignmentsPage() {
  const assignmentStats = [
    { title: "Total Assigned", value: "1,248", change: "+12% this week" },
    { title: "Submission Rate", value: "86%", change: "+2.4%" },
    { title: "Pending Grading", value: "145", change: "Needs Attention", alert: true },
    { title: "Avg. Turnaround", value: "2 Days", change: "Optimal" },
  ];

  const assignments = [
    {
      id: 1,
      title: "Science Fair Project",
      class: "Grade 7 (All Sections)",
      subject: "Science",
      dueDate: "Nov 01, 2024",
      submitted: 112,
      total: 124,
      status: "Active",
    },
    {
      id: 2,
      title: "Algebra Worksheet 4.2",
      class: "Grade 8A",
      subject: "Math",
      dueDate: "Oct 28, 2024",
      submitted: 38,
      total: 40,
      status: "Grading",
    },
    {
      id: 3,
      title: "History Essay: Mughal Era",
      class: "Grade 7C",
      subject: "History",
      dueDate: "Oct 25, 2024",
      submitted: 41,
      total: 41,
      status: "Completed",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Assignments Oversight</h1>
          <p className="text-muted-foreground">Monitor homework compliance and grading efficiency.</p>
        </div>
        <Button>
          <FileBarChart2 className="mr-2 h-4 w-4" /> Generate Report
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {assignmentStats.map((stat, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs ${stat.alert ? "text-red-500 font-medium" : "text-muted-foreground"}`}>
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search assignments..." className="pl-8" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="grading">Grading</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> More Filters</Button>
      </div>

      <Card>
        <div className="p-0 overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 dark:bg-slate-900 border-b text-muted-foreground font-medium">
              <tr>
                <th className="px-6 py-3">Assignment Name</th>
                <th className="px-6 py-3">Target Class</th>
                <th className="px-6 py-3">Due Date</th>
                <th className="px-6 py-3">Submission Progress</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {assignments.map((assignment) => (
                <tr key={assignment.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                  <td className="px-6 py-4 font-medium">{assignment.title}</td>
                  <td className="px-6 py-4">
                    <div>{assignment.class}</div>
                    <div className="text-xs text-muted-foreground">{assignment.subject}</div>
                  </td>
                  <td className="px-6 py-4 flex items-center gap-2">
                    <Calendar className="h-3 w-3 text-muted-foreground" /> {assignment.dueDate}
                  </td>
                  <td className="px-6 py-4 w-60">
                    <div className="flex justify-between text-xs mb-1">
                      <span>{assignment.submitted}/{assignment.total}</span>
                      <span>{Math.round((assignment.submitted / assignment.total) * 100)}%</span>
                    </div>
                    <Progress value={(assignment.submitted / assignment.total) * 100} className="h-2" />
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={
                      assignment.status === 'Active' ? 'default' :
                        assignment.status === 'Grading' ? 'secondary' : 'outline'
                    } className={
                      assignment.status === 'Active' ? 'bg-blue-600' :
                        assignment.status === 'Grading' ? 'bg-orange-100 text-orange-700 hover:bg-orange-100 dark:bg-orange-900/20 dark:text-orange-300' : ''
                    }>
                      {assignment.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
