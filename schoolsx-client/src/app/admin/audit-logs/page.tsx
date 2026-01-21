"use client";

import { useAppSelector } from "@/store/hooks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertCircle, Download, FileText, Filter, Search, ShieldCheck } from "lucide-react";

export default function AuditLogsPage() {
  const logs = [
    { action: "User Login", user: "admin@schoolx.edu", ip: "192.168.1.1", time: "2 mins ago", status: "Success" },
    { action: "Update Grade", user: "teacher.sharma@schoolx.edu", ip: "192.168.1.42", time: "15 mins ago", status: "Success" },
    { action: "Delete User", user: "admin@schoolx.edu", ip: "192.168.1.1", time: "1 hour ago", status: "Failed", details: "Permission Denied" },
    { action: "Upload Resource", user: "teacher.raj@schoolx.edu", ip: "192.168.1.55", time: "3 hours ago", status: "Success" },
    { action: "System Backup", user: "SYSTEM", ip: "localhost", time: "5 hours ago", status: "Success" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Audit Logs</h1>
          <p className="text-muted-foreground">
            Monitor system activity and security events.
          </p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" /> Export CSV
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search logs..." className="pl-8" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon"><Filter className="h-4 w-4" /></Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Start Time</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>User</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.map((log, i) => (
                <TableRow key={i}>
                  <TableCell className="text-muted-foreground whitespace-nowrap">{log.time}</TableCell>
                  <TableCell className="font-medium">{log.action}</TableCell>
                  <TableCell>{log.user}</TableCell>
                  <TableCell className="font-mono text-xs">{log.ip}</TableCell>
                  <TableCell>
                    <Badge variant={log.status === 'Success' ? 'outline' : 'destructive'} className={log.status === 'Success' ? 'text-green-600 border-green-200' : ''}>
                      {log.status === 'Success' ? <ShieldCheck className="mr-1 h-3 w-3" /> : <AlertCircle className="mr-1 h-3 w-3" />}
                      {log.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">{log.details || "-"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
