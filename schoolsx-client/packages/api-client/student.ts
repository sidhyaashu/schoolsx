import { api as client } from "./client";

export class StudentApi {
  async getDashboardData() {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      greeting: "Welcome back",
      firstName: "Student", // In real app, this comes from auth context or API
      streak: 12,
      lastLogin: "2 hours ago",
      learningWidget: {
        subject: "Mathematics",
        chapter: "Linear Equations",
        progress: 65,
        lastActivity: "24 mins ago",
        href: "/student/subjects/math-101",
      },
      aiInsight: {
        summary: "You're struggling with Word Problems.",
        details: "Focus on converting verbal statements into algebraic expressions. Try the Practice Set 3.2.",
      },
      gamification: {
        level: 14,
        xp: 1250,
        nextLevelXp: 2000,
        streak: 12,
      },
      stats: {
        mastery: { value: "78%", trend: "+5%" },
        chapters: { value: "18/24", description: "Next: Probability" },
        accuracy: { value: "82%", trend: "+2%" },
        dailyGoal: { value: "45m", description: "30m remaining" },
      },
    };
  }
}
