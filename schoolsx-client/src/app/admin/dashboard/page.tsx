"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, ArrowUpRight, BarChart3, BookOpen, Calendar, CheckCircle2, MoreHorizontal, Users, Zap, Bell, Search } from "lucide-react";
import { useAppSelector } from "@/store/hooks";

export default function AdminDashboard() {
  const { user } = useAppSelector((state) => state.auth);
  // Default to 'Admin' for the admin role
  const adminName = user?.role === 'admin' ? user.name : "System Administrator";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of school operations, health, and alerts. Welcome back, {adminName}.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline"><Calendar className="mr-2 h-4 w-4" /> Academic Year: 2024-25</Button>
          <Button>Generate Report</Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,240</div>
            <p className="text-xs text-muted-foreground flex items-center text-green-600">
              <ArrowUpRight className="h-3 w-3 mr-1" /> +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Teachers</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68</div>
            <p className="text-xs text-muted-foreground flex items-center text-green-600">
              <ArrowUpRight className="h-3 w-3 mr-1" /> +2 new this week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Live Classes</CardTitle>
            <Zap className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              Currently active sessions
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Attendance</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground flex items-center text-red-500">
              <ArrowUpRight className="h-3 w-3 mr-1 rotate-90" /> -1% today
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">

        {/* Left Column: AI Operations & Trends */}
        <div className="col-span-4 space-y-6">

          {/* AI Operational Insights */}
          <Card className="border-indigo-100 bg-indigo-50/50 dark:bg-indigo-950/20 dark:border-indigo-900/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400">
                <Zap className="h-5 w-5 fill-current" /> AI Ops Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-background rounded-lg p-4 border shadow-sm flex gap-4">
                <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-sm">Staffing Optimization Suggested</p>
                  <p className="text-sm text-muted-foreground">
                    High load detected on Grade 9 Math teachers. AI recommends moving Ms. Sharma to Grade 9B.
                  </p>
                  <div className="pt-2 flex gap-2">
                    <Button size="sm" variant="default" className="bg-indigo-600 hover:bg-indigo-700">Review Plan</Button>
                    <Button size="sm" variant="ghost">Dismiss</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Attendance & Stats Chart Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle>School Health Overview</CardTitle>
              <CardDescription>Attendance vs Performance trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[250px] flex items-end justify-between gap-2 px-2">
                {[65, 78, 45, 89, 56, 78, 85, 92, 67, 73, 84, 95].map((h, i) => (
                  <div key={i} className="w-full bg-slate-100 dark:bg-slate-800 rounded-t-md relative group hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors">
                    <div
                      className="bg-primary absolute bottom-0 w-full rounded-t-md transition-all duration-500"
                      style={{ height: `${h}%` }}
                    />
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs p-1 rounded border shadow-sm">
                      {h}%
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground px-2">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
            </CardContent>
          </Card>

          {/* Pending Tasks */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Pending Administrative Tasks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { task: "Review 12 pending student admissions", status: "High Priority", bg: "bg-red-100 text-red-700" },
                { task: "Approve 5 new teacher resources", status: "Medium", bg: "bg-amber-100 text-amber-700" },
                { task: "Update holiday calendar for next term", status: "Low", bg: "bg-blue-100 text-blue-700" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="text-sm font-medium">{item.task}</span>
                  <Badge variant="secondary" className={item.bg}>{item.status}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Activity & Status */}
        <div className="col-span-3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest events across the school</CardDescription>
            </CardHeader>
            <CardContent className="space-y-0">
              {[
                { user: "Sarah Williams", action: "Submitted Grade 8 Report Cards", time: "10 mins ago", avatar: "SW" },
                { user: "James Miller", action: "Scheduled Parent Meeting (7B)", time: "1 hour ago", avatar: "JM" },
                { user: "System", action: "Automated Backup Completed", time: "2 hours ago", avatar: "SYS" },
                { user: "Emma Davis", action: "Added new resource: 'Physics 101'", time: "3 hours ago", avatar: "ED" },
                { user: "Admin", action: "Updated security policy", time: "5 hours ago", avatar: "AD" },
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-4 py-4 border-b last:border-0">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{activity.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{activity.user}</p>
                    <p className="text-sm text-muted-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground pt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Health</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Storage Usage</span>
                  <span className="font-bold">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>API Quota (AI)</span>
                  <span className="font-bold">42%</span>
                </div>
                <Progress value={42} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Server Load</span>
                  <span className="font-bold">12%</span>
                </div>
                <Progress value={12} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
