"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen, Users, Shield } from "lucide-react";

export default function SelectRolePage() {
  const roles = [
    { id: "student", label: "Student", icon: GraduationCap, href: "/login?role=student" },
    { id: "teacher", label: "Teacher", icon: BookOpen, href: "/login?role=teacher" },
    { id: "parent", label: "Parent", icon: Users, href: "/login?role=parent" },
    { id: "admin", label: "Admin", icon: Shield, href: "/login?role=admin" },
  ];

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm text-muted-foreground">
          Identify yourself to proceed to the portal
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {roles.map((role) => (
          <Link key={role.id} href={role.href as any}>
            <Card className="hover:border-indigo-600 cursor-pointer transition-colors h-full">
              <CardContent className="flex flex-col items-center justify-center p-6 gap-3">
                <role.icon className="h-8 w-8 text-indigo-600" />
                <span className="font-semibold text-sm">{role.label}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <div className="text-center">
        <Button variant="link" asChild>
          <Link href="/select-school">Not your school? Switch School</Link>
        </Button>
      </div>
    </>
  );
}