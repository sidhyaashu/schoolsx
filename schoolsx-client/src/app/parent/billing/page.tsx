import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Download, FileText, History } from "lucide-react";

export default function ParentBillingPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Fees & Billing</h1>
                <p className="text-muted-foreground">
                    View invoices, payment history, and manage fee payments.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Current Status</CardTitle>
                        <CardDescription>Overview of pending and upcoming fees.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center justify-between rounded-lg border p-4 bg-red-50 border-red-100 dark:bg-red-950/20 dark:border-red-900">
                            <div className="space-y-1">
                                <p className="font-semibold text-red-900 dark:text-red-400">Term 2 Tuition Fee</p>
                                <p className="text-sm text-red-700 dark:text-red-300">Due Date: 15 Nov, 2024</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="font-bold text-lg">₹ 24,000</span>
                                <Button size="sm">Pay Now</Button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="space-y-1">
                                <p className="font-medium">Transport Fee (Dec)</p>
                                <p className="text-sm text-muted-foreground">Due Date: 05 Dec, 2024</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="font-semibold">₹ 3,500</span>
                                <Button variant="outline" size="sm">Pay Now</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <Button variant="outline" className="w-full justify-start">
                            <Download className="mr-2 h-4 w-4" /> Download Latest Receipt
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                            <History className="mr-2 h-4 w-4" /> View Payment History
                        </Button>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Payment History</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                                        <FileText className="h-5 w-5 text-slate-500" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Term {3 - i + 1} Fee Payment</p>
                                        <p className="text-sm text-muted-foreground">Paid on Oct {10 + i}, 2024</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">Paid</Badge>
                                    <span className="font-medium">₹ 24,000</span>
                                    <Button variant="ghost" size="icon"><Download className="h-4 w-4" /></Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
