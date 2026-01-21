"use client";

import StudentSidebar from "@/components/layouts/student-sidebar";
import Topbar from "@/components/layouts/topbar";
import PortalBreadcrumb from "@/components/layouts/portal-breadcrumb";
import AuthGuard from "@/components/auth/auth-guard";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React from "react";
import { cn } from "@/lib/utils";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <AuthGuard allowedRoles={['student']}>
      <div className="flex h-screen bg-slate-50 overflow-hidden">
        {/* Desktop Sidebar */}
        <div className="hidden md:flex h-full w-72 flex-col shrink-0">
          <StudentSidebar />
        </div>

        {/* Mobile Sidebar */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetContent side="left" className="p-0 w-72 h-full border-none">
            <div onClick={() => setIsMobileMenuOpen(false)} className="h-full">
              <StudentSidebar />
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          <Topbar
            title="Student Portal"
            portalType="student"
            onMenuClick={() => setIsMobileMenuOpen(true)}
          />
          <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 custom-scrollbar relative">
            <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500">
              <PortalBreadcrumb />
              {children}
            </div>
          </main>
        </div>
      </div>
    </AuthGuard>
  );
}
