"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDown, ArrowUp, BarChart3, Calendar, Download, Users, Wallet } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">School Analytics</h1>
          <p className="text-muted-foreground">Comprehensive insights into school performance.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm"><Calendar className="mr-2 h-4 w-4" /> This Year</Button>
          <Button size="sm"><Download className="mr-2 h-4 w-4" /> Export Report</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Enrollment</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,482</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">+4.2%</span> from last year
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Attendance</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.8%</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowDown className="h-3 w-3 text-red-500 mr-1" />
              <span className="text-red-500 font-medium">-0.5%</span> this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fee Collection</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹ 42.5L</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">+12%</span> vs target
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Academic Perf.</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">B+ (78%)</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <span className="text-muted-foreground">School Average GPA</span>
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Enrollment Trends</CardTitle>
            <CardDescription>Student admissions over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[250px] flex items-end justify-between gap-2 px-4">
              {[45, 62, 58, 75, 80, 95].map((h, i) => (
                <div key={i} className="w-full bg-blue-100 dark:bg-blue-900/30 rounded-t-md relative group">
                  <div
                    className="bg-blue-600 dark:bg-blue-500 rounded-t-md absolute bottom-0 left-0 right-0 transition-all group-hover:bg-blue-700"
                    style={{ height: `${h}%` }}
                  ></div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded transition-opacity">
                    {h} Students
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between px-4 mt-2 text-xs text-muted-foreground uppercase">
              <span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Attendance by Grade</CardTitle>
            <CardDescription>Daily attendance snapshot</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { label: "Grade 6", value: 98, color: "bg-green-500" },
                { label: "Grade 7", value: 94, color: "bg-green-500" },
                { label: "Grade 8", value: 92, color: "bg-yellow-500" },
                { label: "Grade 9", value: 88, color: "bg-orange-500" },
                { label: "Grade 10", value: 96, color: "bg-green-500" },
              ].map((g, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{g.label}</span>
                    <span>{g.value}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full ${g.color}`} style={{ width: `${g.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Subjects</CardTitle>
            <CardDescription>Based on recent unit test results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded bg-blue-100 text-blue-700 flex items-center justify-center font-bold">1</div>
                  <span className="font-medium">Computer Science</span>
                </div>
                <Badge variant="secondary">88% Avg</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded bg-slate-100 text-slate-700 flex items-center justify-center font-bold">2</div>
                  <span className="font-medium">English Literature</span>
                </div>
                <Badge variant="secondary">84% Avg</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded bg-slate-100 text-slate-700 flex items-center justify-center font-bold">3</div>
                  <span className="font-medium">Physical Education</span>
                </div>
                <Badge variant="secondary">82% Avg</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Insights</CardTitle>
            <CardDescription>AI-driven observations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900 rounded-lg text-sm">
              <p className="font-medium text-yellow-800 dark:text-yellow-200">Attendance Drop in Grade 9</p>
              <p className="text-yellow-700 dark:text-yellow-300 mt-1">Grade 9 attendance has dropped by 5% over the last week. Recommended to check with Class Teacher.</p>
            </div>
            <div className="p-3 bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900 rounded-lg text-sm">
              <p className="font-medium text-green-800 dark:text-green-200">Library Usage up by 20%</p>
              <p className="text-green-700 dark:text-green-300 mt-1">New book arrivals have boosted library engagement significantly.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
