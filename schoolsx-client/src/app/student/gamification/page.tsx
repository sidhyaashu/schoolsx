"use client";

import { useAppSelector } from "@/store/hooks";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Crown, Flame, Gem, Shield, Star, Trophy, Zap } from "lucide-react";

export default function GamificationPage() {
  const { user } = useAppSelector((state) => state.auth);

  const badges = [
    { name: "Math Whiz", icon: Star, color: "text-yellow-500 bg-yellow-100", desc: "Scored 100% in 5 Math Quizzes" },
    { name: "Science Explorer", icon: FlaskIcon, color: "text-green-500 bg-green-100", desc: "Completed 10 Science Experiments" },
    { name: "Early Bird", icon: SunIcon, color: "text-orange-500 bg-orange-100", desc: "Attended 5 Morning Classes on time" },
    { name: "Helper", icon: HeartIcon, color: "text-pink-500 bg-pink-100", desc: "Helped 3 classmates in doubts" },
  ];

  const leaderboard = [
    { rank: 1, name: "Aditi Sharma", xp: 2450, avatar: "AS", me: true },
    { rank: 2, name: "Rohan Kumar", xp: 2380, avatar: "RK", me: false },
    { rank: 3, name: "Priya Singh", xp: 2100, avatar: "PS", me: false },
    { rank: 4, name: "Aarav Patel", xp: 1950, avatar: "AP", me: false },
    { rank: 5, name: "Vivaan Gupta", xp: 1800, avatar: "VG", me: false },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Achievements</h1>
          <p className="text-muted-foreground">
            Track your progress, earn badges, and climb the leaderboard!
          </p>
        </div>
        <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 p-2 rounded-lg border border-yellow-200 text-yellow-800">
          <Trophy className="h-5 w-5 text-yellow-600" />
          <span className="font-bold">Level 4</span>
          <span className="text-sm opacity-80">(Next Level: 550 XP)</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Main XP Card */}
        <Card className="md:col-span-2 bg-gradient-to-br from-indigo-600 to-violet-700 text-white border-none shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10 transform translate-x-10 -translate-y-10">
            <Crown className="h-64 w-64" />
          </div>
          <CardContent className="p-8 relative z-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative">
                <div className="h-32 w-32 rounded-full border-4 border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                  <Gem className="h-16 w-16 text-yellow-300" />
                </div>
                <Badge className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black hover:bg-yellow-500 border-none px-3 py-1 text-sm font-bold shadow-lg">
                  Rank #1
                </Badge>
              </div>
              <div className="flex-1 text-center md:text-left space-y-4">
                <div>
                  <h2 className="text-3xl font-bold">Aditi Sharma</h2>
                  <p className="text-indigo-200">Keep up the great work! You're leading the class.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium text-indigo-100">
                    <span>XP Progress</span>
                    <span>2,450 / 3,000 XP</span>
                  </div>
                  <Progress value={82} className="h-3 bg-black/20" />
                </div>
                <div className="flex gap-4 justify-center md:justify-start pt-2">
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                    <Flame className="h-4 w-4 text-orange-400" /> 12 Day Streak
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                    <Zap className="h-4 w-4 text-yellow-400" /> Top 5%
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leaderboard */}
        <Card className="row-span-2 h-full flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-yellow-500" /> Leaderboard
            </CardTitle>
            <CardDescription>Class 6-A Weekly Top Scorers</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto pr-2">
            <div className="space-y-4">
              {leaderboard.map((student) => (
                <div key={student.rank} className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${student.me ? 'bg-indigo-50 border border-indigo-100 dark:bg-indigo-900/30' : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                  <div className={`font-bold w-6 text-center ${student.rank <= 3 ? 'text-yellow-600' : 'text-slate-500'}`}>
                    #{student.rank}
                  </div>
                  <Avatar className="h-10 w-10 border-2 border-white">
                    <AvatarFallback className={student.me ? 'bg-indigo-100 text-indigo-700' : ''}>{student.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className={`font-medium text-sm ${student.me ? 'text-indigo-700 dark:text-indigo-300' : ''}`}>
                      {student.name} {student.me && '(You)'}
                    </p>
                    <p className="text-xs text-muted-foreground">{student.xp} XP</p>
                  </div>
                  {student.rank === 1 && <Trophy className="h-4 w-4 text-yellow-500" />}
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 text-xs">View Full Leaderboard</Button>
          </CardContent>
        </Card>

        {/* Earned Badges */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>My Badges</CardTitle>
            <CardDescription>You have earned 12 badges so far.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {badges.map((badge, i) => (
                <div key={i} className="flex flex-col items-center text-center p-4 rounded-xl border bg-slate-50/50 dark:bg-slate-900/30 hover:bg-slate-100 transition-colors group cursor-pointer">
                  <div className={`h-12 w-12 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${badge.color}`}>
                    <badge.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-sm">{badge.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{badge.desc}</p>
                </div>
              ))}
              <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-dashed text-muted-foreground hover:bg-slate-50 transition-colors">
                <Shield className="h-8 w-8 mb-2 opacity-50" />
                <span className="text-xs font-medium">Locked Badges</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Icons
function FlaskIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
      <path d="M8.5 2h7" />
      <path d="M7 16h10" />
    </svg>
  )
}

function SunIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.28 3.6-1.28 5.14 0 .34.3.56.7.56 1.15a2.5 2.5 0 0 1-5 0" />
      <path d="M14.28 12.83a10 10 0 0 1-7.17-5.4 6 6 0 0 1 7.17 5.4z" />
      <path d="M21.21 16.63c.7.45 1.79.45 2.58 0a2.5 2.5 0 1 0-2.58 0z" />
      <path d="M20.21 15.63a7 7 0 1 0-16.42 0" />
    </svg>
  )
}
