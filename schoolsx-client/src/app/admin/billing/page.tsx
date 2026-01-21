"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, CreditCard, Download, FileText, Search, AlertCircle } from "lucide-react";

import { api } from "@schoolx/api";
import { Invoice } from "@/domain/types";
import { useState, useEffect } from "react";

export default function AdminBillingPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const data = await api.admin.getInvoices();
        setInvoices(data);
      } catch (error) {
        console.error("Failed to fetch invoices", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInvoices();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Fee & Billing</h1>
          <p className="text-muted-foreground">Manage invoices, payments, and financial reports.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Export Report</Button>
          <Button><CreditCard className="mr-2 h-4 w-4" /> Record Offline Payment</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-indigo-100 text-sm font-medium">Total Collections (Oct)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">₹ 42,50,000</div>
            <p className="text-xs text-indigo-200 mt-1">85% of projected revenue</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Outstanding Dues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">₹ 8,20,000</div>
            <p className="text-xs text-muted-foreground mt-1">From 45 students</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Next Due Date</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">Nov 10</div>
            <p className="text-xs text-muted-foreground mt-1">Term 2 Fees</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search invoice or student..." className="pl-8" />
        </div>
      </div>

      <Card>
        <div className="p-0 overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 dark:bg-slate-900 border-b text-muted-foreground font-medium">
              <tr>
                <th className="px-6 py-3">Invoice ID</th>
                <th className="px-6 py-3">Student</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Issue Date</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                  <td className="px-6 py-4 font-mono text-xs">{inv.id}</td>
                  <td className="px-6 py-4">
                    <div className="font-medium">{inv.student}</div>
                    <div className="text-xs text-muted-foreground">{inv.class}</div>
                  </td>
                  <td className="px-6 py-4 font-medium">{inv.amount}</td>
                  <td className="px-6 py-4 text-muted-foreground">{inv.date}</td>
                  <td className="px-6 py-4">
                    <Badge variant={
                      inv.status === 'Paid' ? 'default' :
                        inv.status === 'Overdue' ? 'destructive' : 'secondary'
                    } className={
                      inv.status === 'Paid' ? 'bg-green-600 hover:bg-green-700' : ''
                    }>
                      {inv.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="icon" title="View Invoice">
                      <FileText className="h-4 w-4" />
                    </Button>
                    {inv.status !== 'Paid' && (
                      <Button variant="ghost" size="icon" title="Send Reminder">
                        <AlertCircle className="h-4 w-4" />
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
