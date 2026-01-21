"use client";

import { useAppSelector } from "@/store/hooks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertCircle, Check, Lock, Plus, Shield, ShieldAlert, UserCog } from "lucide-react";

export default function RolesPage() {
  const roles = [
    { title: "Super Admin", users: 2, level: "Full Access", desc: "Can manage all aspects of the platform." },
    { title: "School Admin", users: 5, level: "High", desc: "Can manage users, classes, and school settings." },
    { title: "Teacher", users: 68, level: "Medium", desc: "Can manage classes, assignments, and view student progress." },
    { title: "Student", users: 1240, level: "Limited", desc: "Access to learning materials and personal progress." },
    { title: "Parent", users: 850, level: "Read-Only", desc: "View Only access to child's data and fee payment." },
  ];

  const permissions = [
    { module: "User Management", admin: true, school: true, teacher: false, student: false, parent: false },
    { module: "Content Creation", admin: true, school: true, teacher: true, student: false, parent: false },
    { module: "Fee Management", admin: true, school: true, teacher: false, student: false, parent: true },
    { module: "Class Scheduling", admin: true, school: true, teacher: false, student: false, parent: false },
    { module: "System Settings", admin: true, school: false, teacher: false, student: false, parent: false },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Roles & Permissions</h1>
          <p className="text-muted-foreground">
            Configure access levels and roles for the school ecosystem.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create New Role
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {roles.map((role, i) => (
          <Card key={i} className="hover:border-indigo-300 transition-colors cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-bold">{role.title}</CardTitle>
              <Shield className={`h-5 w-5 ${role.level === 'Full Access' ? 'text-red-500' : 'text-slate-400'}`} />
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{role.users} Users</Badge>
                <Badge variant="outline">{role.level}</Badge>
              </div>
              <p className="text-sm text-muted-foreground h-10">{role.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Permission Matrix</CardTitle>
          <CardDescription>Overview of access rights per role.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Module / Feature</TableHead>
                <TableHead className="text-center">Super Admin</TableHead>
                <TableHead className="text-center">School Admin</TableHead>
                <TableHead className="text-center">Teacher</TableHead>
                <TableHead className="text-center">Student</TableHead>
                <TableHead className="text-center">Parent</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {permissions.map((perm, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{perm.module}</TableCell>
                  <TableCell className="text-center">{perm.admin ? <Check className="h-4 w-4 mx-auto text-green-600" /> : <div className="h-1.5 w-1.5 rounded-full bg-slate-200 mx-auto" />}</TableCell>
                  <TableCell className="text-center">{perm.school ? <Check className="h-4 w-4 mx-auto text-green-600" /> : <div className="h-1.5 w-1.5 rounded-full bg-slate-200 mx-auto" />}</TableCell>
                  <TableCell className="text-center">{perm.teacher ? <Check className="h-4 w-4 mx-auto text-green-600" /> : <div className="h-1.5 w-1.5 rounded-full bg-slate-200 mx-auto" />}</TableCell>
                  <TableCell className="text-center">{perm.student ? <Check className="h-4 w-4 mx-auto text-green-600" /> : <div className="h-1.5 w-1.5 rounded-full bg-slate-200 mx-auto" />}</TableCell>
                  <TableCell className="text-center">{perm.parent ? <Check className="h-4 w-4 mx-auto text-green-600" /> : <div className="h-1.5 w-1.5 rounded-full bg-slate-200 mx-auto" />}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-800">
        <CardContent className="flex items-center gap-4 p-4">
          <ShieldAlert className="h-8 w-8 text-amber-600 shrink-0" />
          <div>
            <h3 className="font-bold text-amber-900 dark:text-amber-100">Security Audit</h3>
            <p className="text-sm text-amber-800 dark:text-amber-200">2 Admin roles were modified yesterday. <Button variant="link" className="p-0 h-auto text-amber-900 underline">View Logs</Button></p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
