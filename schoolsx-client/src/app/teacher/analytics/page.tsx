"use client";

import { useAppSelector } from "@/store/hooks";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle, ArrowUpRight, BarChart3, TrendingUp, Users } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Class Analytics</h1>
          <p className="text-muted-foreground">
            Deep dive into student performance and engagement metrics.
          </p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="9a">
            <SelectTrigger className="w-[150px]"><SelectValue placeholder="Class" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="9a">Grade 9-A</SelectItem>
              <SelectItem value="9b">Grade 9-B</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="physics">
            <SelectTrigger className="w-[150px]"><SelectValue placeholder="Subject" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="physics">Physics</SelectItem>
              <SelectItem value="math">Mathematics</SelectItem>
            </SelectContent>
          </Select>
          <Button>Export Report</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Class Average</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78.5%</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" /> +2.1% vs last term
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Assignment Completion</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground mt-1">
              32/35 students submitted
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">At Risk Students</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">3</div>
            <p className="text-xs text-muted-foreground mt-1">
              Falling below 40% threshold
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Performance Distribution</CardTitle>
            <CardDescription>Grade distribution for the current term.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-end justify-center gap-4">
              {[
                { label: '0-40%', h: 10, count: 3 },
                { label: '40-60%', h: 25, count: 8 },
                { label: '60-80%', h: 60, count: 18 },
                { label: '80-100%', h: 30, count: 9 }
              ].map((bar, i) => (
                <div key={i} className="flex flex-col items-center gap-2 group w-full max-w-[80px]">
                  <div className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity mb-1">{bar.count}</div>
                  <div
                    className="w-full bg-indigo-100 dark:bg-indigo-900/30 rounded-t-md hover:bg-indigo-500 dark:hover:bg-indigo-500 transition-all duration-500 relative"
                    style={{ height: `${bar.h * 3}px` }}
                  />
                  <span className="text-xs text-muted-foreground">{bar.label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Top Performers</CardTitle>
            <CardDescription>Students with highest cumulative scores.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              { name: "Aditi Sharma", score: 98, rank: 1 },
              { name: "Rohan Gupta", score: 96, rank: 2 },
              { name: "Priya Singh", score: 94, rank: 3 },
              { name: "Arjun Kumar", score: 91, rank: 4 },
              { name: "Sneha Patel", score: 89, rank: 5 },
            ].map((student, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm ${i < 3 ? 'bg-yellow-100 text-yellow-700' : 'bg-slate-100 text-slate-500'}`}>
                    {student.rank}
                  </div>
                  <span className="font-medium">{student.name}</span>
                </div>
                <span className="font-bold">{student.score}%</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
