"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

import {
  LayoutDashboard,
  Network,
  Users,
  Calendar,
  Radio,
  Files,
  FileText,
  ClipboardCheck,
  BarChart3,
  UserPlus,
  CreditCard,
  Palmtree,
  History,
  Settings,
  MessageSquare
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/store/hooks";

const ADMIN_NAV = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Hierarchy", href: "/admin/hierarchy", icon: Network },
  { label: "Users & Roles", href: "/admin/users", icon: Users },
  { label: "Timetable", href: "/admin/timetable", icon: Calendar },
  { label: "Live Classes", href: "/admin/live-classes", icon: Radio },
  { label: "Content", href: "/admin/content", icon: Files },
  { label: "Assignments", href: "/admin/assignments", icon: FileText },
  { label: "Assessments", href: "/admin/assessments", icon: ClipboardCheck },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Admissions", href: "/admin/admissions", icon: UserPlus },
  { label: "Communications", href: "/admin/communications", icon: MessageSquare },
  { label: "Billing", href: "/admin/billing", icon: CreditCard },
  { label: "Branding", href: "/admin/branding", icon: Palmtree },
  { label: "Audit Logs", href: "/admin/audit-logs", icon: History },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { user } = useAppSelector(state => state.auth);

  return (
    <aside className="w-72 border-r bg-white p-4 flex flex-col h-full transition-all duration-300 ease-in-out">
      <div className="mb-8 px-4 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="font-black text-2xl tracking-tighter text-slate-800">🏫 SchoolX</h1>
          <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em] mt-0.5">Admin Operations</p>
        </div>
      </div>

      <nav className="space-y-0.5 flex-1 overflow-y-auto pr-2 px-1 custom-scrollbar">
        {ADMIN_NAV.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href as any}
              className={cn(
                "flex items-center space-x-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 group relative",
                isActive
                  ? "bg-slate-800 text-white shadow-lg shadow-slate-200"
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
        <div className="bg-slate-800 rounded-2xl p-5 shadow-xl shadow-slate-100 relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-125 transition-transform duration-500">
            <History size={80} className="text-white" />
          </div>
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center font-bold text-white border border-white/20">
              AD
            </div>
            <div className="flex-1 overflow-hidden text-white">
              <p className="text-xs font-bold truncate">{user?.name || "System Admin"}</p>
              <p className="text-[10px] text-slate-300 truncate">{user?.email || "admin@schoolx.com"}</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
