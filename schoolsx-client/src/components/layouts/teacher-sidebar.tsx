"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Bot,
  FileText,
  ClipboardCheck,
  Radio,
  Video,
  BarChart3,
  Library,
  Megaphone,
  Files,
  Settings,
  Sparkles
} from "lucide-react";

const TEACHER_NAV = [
  { label: "Dashboard", href: "/teacher/dashboard", icon: LayoutDashboard },
  { label: "My Classes", href: "/teacher/classes", icon: Users },
  { label: "My Subjects", href: "/teacher/subjects", icon: BookOpen },
  { label: "AI Assistant", href: "/teacher/ai-assistant", icon: Bot },
  { label: "Assignments", href: "/teacher/assignments", icon: FileText },
  { label: "Quizzes", href: "/teacher/quizzes", icon: ClipboardCheck },
  { label: "Live Classes", href: "/teacher/live-classes", icon: Radio },
  { label: "Recorded Classes", href: "/teacher/recorded-classes", icon: Video },
  { label: "Resources", href: "/teacher/resources", icon: Files },
  { label: "Analytics", href: "/teacher/analytics", icon: BarChart3 },
  { label: "Question Bank", href: "/teacher/question-bank", icon: Library },
  { label: "Announcements", href: "/teacher/announcements", icon: Megaphone },
  { label: "Settings", href: "/teacher/settings", icon: Settings },
];

export default function TeacherSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 border-r bg-white p-4 flex flex-col h-full transition-all duration-300 ease-in-out">
      <div className="mb-8 px-4 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="font-black text-2xl tracking-tighter text-emerald-600">🧑‍🏫 SchoolX</h1>
          <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em] mt-0.5">Teacher Portal</p>
        </div>
      </div>

      <nav className="space-y-1 flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {TEACHER_NAV.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href as any}
              className={cn(
                "flex items-center space-x-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 group relative",
                isActive
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200"
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
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-5 shadow-xl shadow-emerald-100 relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-125 transition-transform duration-500">
            <Sparkles size={80} className="text-white" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-black text-emerald-100 uppercase tracking-widest">Teacher Insights</p>
            <div className="bg-white/20 p-1 rounded-md backdrop-blur-sm">
              <Sparkles className="h-3 w-3 text-emerald-200" />
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md">
                <span className="text-lg font-black text-white">12</span>
              </div>
              <div>
                <p className="text-xs font-bold text-white leading-tight">Pending Tasks</p>
                <p className="text-[10px] text-emerald-100 opacity-80 mt-0.5 italic">Ready for review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
