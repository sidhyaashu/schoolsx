"use client";

import React from "react";
import ContinueLearningWidget from "@/components/student/dashboard/continue-learning-widget";
import QuickAccessCards from "@/components/student/dashboard/quick-access-cards";
import GamificationBar from "@/components/student/dashboard/gamification-bar";
import { StatCard } from "@/components/ui/stat-card";
import { AIInsightPanel } from "@/components/ui/ai-insight-panel";
import { BookOpen, Target, Zap, Clock } from "lucide-react";
import { useAppSelector } from "@/store/hooks";
import { useStudentDashboard } from "@/hooks/api/use-student";

export default function StudentDashboard() {
  const { data, isLoading } = useStudentDashboard();
  const { user } = useAppSelector((state) => state.auth);

  // Create a safe default or use fetched data
  const firstName = user?.name?.split(' ')[0] || data?.firstName || 'Student';
  const [greeting, setGreeting] = React.useState("Welcome back");

  React.useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 17) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-8 pb-10 max-w-7xl mx-auto animate-pulse">
        <div className="h-20 bg-slate-100 rounded-xl" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 h-64 bg-slate-100 rounded-xl" />
          <div className="lg:col-span-1 h-64 bg-slate-100 rounded-xl" />
        </div>
        <div className="h-40 bg-slate-100 rounded-xl" />
      </div>
    );
  }

  // Use data from API or fallbacks
  const learningWidget = data?.learningWidget;
  const aiInsight = data?.aiInsight;
  const gamification = data?.gamification;
  const stats = data?.stats;

  return (
    <div className="space-y-8 pb-10 max-w-7xl mx-auto">
      {/* Welcome Section */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">{greeting}, {firstName}! 👋</h1>
          <p className="text-slate-500 font-medium mt-1">Consistency is key. You're on a {gamification?.streak || 0}-day streak!</p>
        </div>
        <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm">
          <Clock className="h-4 w-4" />
          Last login: {data?.lastLogin || "Just now"}
        </div>
      </section>

      {/* Hero Learning Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {learningWidget && (
            <ContinueLearningWidget
              subject={learningWidget.subject}
              chapter={learningWidget.chapter}
              progress={learningWidget.progress}
              lastActivity={learningWidget.lastActivity}
              href={learningWidget.href}
            />
          )}
        </div>
        <div className="lg:col-span-1">
          {aiInsight && (
            <AIInsightPanel
              title="AI Focus Areas"
              type="info"
              summary={aiInsight.summary}
              details={aiInsight.details}
              actionLabel="Start Practice"
              onAction={() => console.log("Starting practice")}
            />
          )}
        </div>
      </div>

      {/* Quick Access */}
      <section className="space-y-4">
        <h3 className="text-xl font-black text-slate-900 px-1">Quick Access</h3>
        <QuickAccessCards />
      </section>

      {/* Gamification Status */}
      {gamification && (
        <GamificationBar
          level={gamification.level}
          xp={gamification.xp}
          nextLevelXp={gamification.nextLevelXp}
          streak={gamification.streak}
        />
      )}

      {/* Key Metrics */}
      {stats && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Overall Mastery"
            value={stats.mastery.value}
            trend={stats.mastery.trend}
            icon={Target}
            color="blue"
          />
          <StatCard
            title="Chapters Done"
            value={stats.chapters.value}
            description={stats.chapters.description}
            icon={BookOpen}
            color="green"
          />
          <StatCard
            title="Avg. Accuracy"
            value={stats.accuracy.value}
            trend={stats.accuracy.trend}
            icon={Zap}
            color="amber"
          />
          <StatCard
            title="Daily Goal"
            value={stats.dailyGoal.value}
            description={stats.dailyGoal.description}
            icon={Clock}
            color="purple"
          />
        </div>
      )}
    </div>
  );
}
