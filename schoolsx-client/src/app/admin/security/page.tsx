import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { AlertTriangle, Download, FileText, Lock, ShieldCheck, UserCheck } from "lucide-react";

export default function AdminSecurityPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Security & Compliance</h1>
                <p className="text-muted-foreground">
                    Manage access controls, data privacy policies, and security settings.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Lock className="h-5 w-5" />
                            Authentication & Access
                        </CardTitle>
                        <CardDescription>Control how users log in and access the system.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center justify-between space-x-2">
                            <div className="space-y-0.5">
                                <div className="font-medium">Two-Factor Authentication (2FA)</div>
                                <div className="text-sm text-muted-foreground">
                                    Require 2FA for all admin and teacher accounts.
                                </div>
                            </div>
                            <Switch checked={true} />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between space-x-2">
                            <div className="space-y-0.5">
                                <div className="font-medium">Force Session Timeout</div>
                                <div className="text-sm text-muted-foreground">
                                    Automatically log out users after 30 minutes of inactivity.
                                </div>
                            </div>
                            <Switch checked={false} />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between space-x-2">
                            <div className="space-y-0.5">
                                <div className="font-medium">Single Sign-On (SSO)</div>
                                <div className="text-sm text-muted-foreground">
                                    Allow login via Google or Microsoft accounts.
                                </div>
                            </div>
                            <Switch checked={true} />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <ShieldCheck className="h-5 w-5" />
                            Data Privacy & Compliance
                        </CardTitle>
                        <CardDescription>Manage regulatory compliance and data protection.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                                <div className="font-medium">Data Export</div>
                                <div className="text-sm text-muted-foreground">
                                    Download a full archive of school data.
                                </div>
                            </div>
                            <Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4" /> Request Archive</Button>
                        </div>

                        <div className="flex items-center justify-between rounded-lg border p-4 bg-amber-50 border-amber-200">
                            <div className="space-y-0.5">
                                <div className="flex items-center gap-2">
                                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                                    <div className="font-medium text-amber-900">Emergency Lockdown</div>
                                </div>
                                <div className="text-sm text-amber-800">
                                    Temporarily restrict access to the portal.
                                </div>
                            </div>
                            <Button variant="destructive" size="sm">Lockdown</Button>
                        </div>
                    </CardContent>
                </Card>

                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileText className="h-5 w-5" />
                            Legal Documents
                        </CardTitle>
                        <CardDescription>Manage terms of service and privacy policies displayed to users.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between border-b pb-4">
                                <div>
                                    <p className="font-medium">Privacy Policy</p>
                                    <p className="text-sm text-muted-foreground">Last updated: Oct 24, 2024</p>
                                </div>
                                <Button variant="ghost" size="sm">Edit</Button>
                            </div>
                            <div className="flex items-center justify-between border-b pb-4">
                                <div>
                                    <p className="font-medium">Terms of Service</p>
                                    <p className="text-sm text-muted-foreground">Last updated: Aug 12, 2024</p>
                                </div>
                                <Button variant="ghost" size="sm">Edit</Button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Cookie Policy</p>
                                    <p className="text-sm text-muted-foreground">Last updated: Jan 10, 2024</p>
                                </div>
                                <Button variant="ghost" size="sm">Edit</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
