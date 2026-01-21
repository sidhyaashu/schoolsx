"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Activity, Award, BarChart3, BookOpen, Clock, Target, TrendingUp } from "lucide-react";

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Progress Dashboard</h1>
          <p className="text-muted-foreground">Detailed analytics of your learning journey.</p>
        </div>
        <Button variant="outline">Download Report</Button>
      </div>

      {/* Top Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Weekly Study Time", value: "4.2 hrs", icon: Clock, change: "+12%" },
          { label: "Quiz Accuracy", value: "86%", icon: Target, change: "+3%" },
          { label: "Lessons Completed", value: "14", icon: BookOpen, change: "On Track" },
          { label: "Current Streak", value: "6 Days", icon: Activity, change: "Top 5%" },
        ].map((stat, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.label}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500 font-medium">{stat.change}</span> from last week
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Main Chart Area */}
        <div className="col-span-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Subject Mastery</CardTitle>
              <CardDescription>Your performance across core subjects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { subject: "Mathematics", score: 78, color: "bg-blue-500" },
                { subject: "Science", score: 85, color: "bg-green-500" },
                { subject: "English", score: 92, color: "bg-purple-500" },
                { subject: "History", score: 64, color: "bg-orange-500" },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{item.subject}</span>
                    <span className="text-muted-foreground">{item.score}% Mastery</span>
                  </div>
                  <Progress value={item.score} className="h-2" indicatorClassName={item.color} />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <CardTitle>AI Insights & Recommendations</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                <h4 className="font-semibold text-blue-900 dark:text-blue-200">Strong Progress in English!</h4>
                <p className="text-sm text-blue-800 dark:text-blue-300 mt-1">You scored 95% on the last Grammar quiz. Keep it up!</p>
              </div>
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-100 dark:border-orange-800">
                <h4 className="font-semibold text-orange-900 dark:text-orange-200">Focus Needed: History</h4>
                <p className="text-sm text-orange-800 dark:text-orange-300 mt-1">Your mastery in "Mughal Empire" is 64%. Review the flashcards again.</p>
                <Button variant="outline" size="sm" className="mt-2 h-8 border-orange-200 text-orange-700 hover:bg-orange-100 hover:text-orange-800">Go to Flashcards</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="col-span-3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-0">
              {[
                { action: "Completed Quiz", item: "Algebra Basics", time: "2 hours ago", score: "+50 XP" },
                { action: "Watched Video", item: "Photosynthesis", time: "Yesterday", score: "+20 XP" },
                { action: "Submitted Assignment", item: "English Essay", time: "2 days ago", score: "+100 XP" },
                { action: "Joined Class", item: "Live Science", time: "2 days ago", score: "+30 XP" },
              ].map((act, i) => (
                <div key={i} className="flex items-center py-3 border-b last:border-0 last:pb-0">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-3"></div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{act.action}</p>
                    <p className="text-xs text-muted-foreground">{act.item}</p>
                  </div>
                  <div className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">{act.score}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-0">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Award className="h-5 w-5" /> Next Level: 5
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-2 flex justify-between text-sm text-indigo-100">
                <span>XP: 320/500</span>
                <span>180 XP to go</span>
              </div>
              <Progress value={64} className="h-2 bg-indigo-900/50" indicatorClassName="bg-white" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
