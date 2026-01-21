"use client";

import TeacherSidebar from "@/components/layouts/teacher-sidebar";
import Topbar from "@/components/layouts/topbar";
import PortalBreadcrumb from "@/components/layouts/portal-breadcrumb";
import AuthGuard from "@/components/auth/auth-guard";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import React from "react";

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <AuthGuard allowedRoles={['teacher']}>
      <div className="flex h-screen bg-slate-50 overflow-hidden">
        {/* Desktop Sidebar */}
        <div className="hidden md:flex h-full w-72 flex-col shrink-0">
          <TeacherSidebar />
        </div>

        {/* Mobile Sidebar */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetContent side="left" className="p-0 w-72 h-full border-none">
            <div onClick={() => setIsMobileMenuOpen(false)} className="h-full">
              <TeacherSidebar />
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          <Topbar
            title="Teacher Portal"
            portalType="teacher"
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
