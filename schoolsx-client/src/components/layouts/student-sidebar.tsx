"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BookOpen,
  Video,
  Radio,
  FileText,
  Bot,
  PenTool,
  BarChart3,
  Trophy,
  Megaphone,
  Files,
  Settings
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/store/hooks";

const STUDENT_NAV = [
  { label: "Dashboard", href: "/student/dashboard", icon: LayoutDashboard },
  { label: "My Subjects", href: "/student/subjects", icon: BookOpen },
  { label: "Live Classes", href: "/student/live-classes", icon: Radio },
  { label: "Recorded Classes", href: "/student/recorded-classes", icon: Video },
  { label: "Assignments", href: "/student/assignments", icon: FileText },
  { label: "AI Tutor", href: "/student/ai-tutor", icon: Bot },
  { label: "Practice", href: "/student/practice", icon: PenTool },
  { label: "Resources", href: "/student/resources", icon: Files },
  { label: "Progress", href: "/student/progress", icon: BarChart3 },
  { label: "Gamification", href: "/student/gamification", icon: Trophy },
  { label: "Announcements", href: "/student/announcements", icon: Megaphone },
  { label: "Settings", href: "/student/settings", icon: Settings },
];

export default function StudentSidebar() {
  const pathname = usePathname();
  const { user } = useAppSelector((state) => state.auth);
  // Calculate level based on mock XP logic or store it in redux
  const level = 4; // Placeholder for now

  return (
    <aside className="w-72 border-r bg-white p-4 flex flex-col h-full transition-all duration-300 ease-in-out">
      <div className="mb-8 px-4 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="font-black text-2xl tracking-tighter text-blue-600">🎒 SchoolX</h1>
          <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em] mt-0.5">Student Portal</p>
        </div>
      </div>

      <nav className="space-y-1 flex-1">
        {STUDENT_NAV.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href as any}
              className={cn(
                "flex items-center space-x-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 group relative",
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <Icon className={cn("h-5 w-5 transition-transform group-hover:scale-110", isActive ? "text-white" : "text-slate-400 group-hover:text-slate-900")} />
              <span>{item.label}</span>
              {isActive && (
                <div className="absolute right-3 w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 border-t px-2">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-5 shadow-xl shadow-blue-100 relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-125 transition-transform duration-500">
            <Trophy size={80} className="text-white" />
          </div>
          <p className="text-[10px] font-black text-blue-100 uppercase tracking-widest">Achiever Status</p>
          <div className="flex items-center justify-between mt-1">
            <span className="text-xl font-black text-white">Level 4</span>
            <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
              <Trophy className="h-4 w-4 text-yellow-300" />
            </div>
          </div>
          <div className="mt-4 space-y-1.5">
            <div className="flex justify-between text-[10px] font-bold text-blue-100 px-0.5">
              <span>XP: 2,450 / 3,000</span>
              <span>82%</span>
            </div>
            <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
              <div className="bg-white h-full rounded-full w-[82%] transition-all duration-1000 ease-out" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
