"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  PenTool,
  Calendar,
  ClipboardCheck,
  Sparkles,
  PlayCircle,
  Files,
  Megaphone,
  MessageSquare,
  Settings
} from "lucide-react";
import { usePathname } from "next/navigation";

const PARENT_NAV = [
  { label: "Dashboard", href: "/parent/dashboard", icon: LayoutDashboard },
  { label: "My Children", href: "/parent/children", icon: Users },
  { label: "Performance", href: "/parent/performance", icon: BarChart3 },
  { label: "Homework", href: "/parent/homework", icon: PenTool },
  { label: "Attendance", href: "/parent/attendance", icon: Calendar },
  { label: "Exams & Results", href: "/parent/exams", icon: ClipboardCheck },
  { label: "AI Insights", href: "/parent/ai-insights", icon: Sparkles },
  { label: "Classes", href: "/parent/classes", icon: PlayCircle },
  { label: "Resources", href: "/parent/resources", icon: Files },
  { label: "Announcements", href: "/parent/announcements", icon: Megaphone },
  { label: "Communication", href: "/parent/communications", icon: MessageSquare },
  { label: "Settings", href: "/parent/settings", icon: Settings },
];

export default function ParentSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 border-r bg-white p-4 flex flex-col h-full transition-all duration-300 ease-in-out">
      <div className="mb-8 px-4 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="font-black text-2xl tracking-tighter text-purple-600">👨‍👩‍👧 SchoolX</h1>
          <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em] mt-0.5">Parent Portal</p>
        </div>
      </div>

      <nav className="space-y-1 flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {PARENT_NAV.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href as any}
              className={cn(
                "flex items-center space-x-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 group relative",
                isActive
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-200"
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
        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-5 shadow-xl shadow-purple-100 relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-125 transition-transform duration-500">
            <Sparkles size={80} className="text-white" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-black text-purple-100 uppercase tracking-widest">AI Weekly snapshot</p>
            <div className="bg-white/20 p-1 rounded-md backdrop-blur-sm">
              <Sparkles className="h-3 w-3 text-purple-200" />
            </div>
          </div>
          <div className="mt-3">
            <p className="text-xs font-bold text-white leading-tight">Aditi improved in Fractions this week! 🎉</p>
            <Link href={"/parent/ai-insights" as any} className="text-[10px] text-purple-100 underline mt-2 inline-block opacity-80 hover:opacity-100 transition-opacity">View Details</Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
