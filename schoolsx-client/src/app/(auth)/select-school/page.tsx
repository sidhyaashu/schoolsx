"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Search, Building2 } from "lucide-react";

export default function SelectSchoolPage() {
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Find your school</h1>
        <p className="text-sm text-muted-foreground">
          Enter your school code or search by name
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="school-code">School Code</Label>
            <Input id="school-code" placeholder="e.g. SCH-001" />
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or search</span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="search">School Name</Label>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input id="search" placeholder="Search schools..." className="pl-9" />
            </div>
          </div>
          <Button>
            Continue <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="bg-slate-50 p-4 rounded-lg flex items-start gap-3 text-sm text-muted-foreground">
        <Building2 className="h-5 w-5 shrink-0 mt-0.5" />
        <p>If you cannot find your school, please contact your school administrator or support team.</p>
      </div>
      <p className="px-8 text-center text-sm text-muted-foreground">
        <Link
          href="/login"
          className="hover:text-primary"
        >
          Back to Login
        </Link>
      </p>
    </>
  );
}