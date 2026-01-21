import { BaseEntity, UserId, SchoolId, ClassId } from "../common/models";

export interface Student extends BaseEntity {
  userId: UserId;
  schoolId: SchoolId;
  currentClassId: ClassId;
  rollNumber: string;
  personalInfo: {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    avatarUrl?: string;
  };
  academicProgress: {
    overallMastery: number; // 0-100
    completedChapters: number;
    totalChapters: number;
    attendancePercentage: number;
    averageScore: number;
  };
  gamification: {
    level: number;
    xp: number;
    nextLevelXp: number;
    streak: number;
    badges: Badge[];
  };
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: Date;
  category: "academic" | "social" | "consistency" | "special";
}

export interface StudentStats {
  todayActivities: number;
  pendingAssignments: number;
  upcomingClasses: number;
  weeklyProgressTrend: number[]; // Last 7 days
}
