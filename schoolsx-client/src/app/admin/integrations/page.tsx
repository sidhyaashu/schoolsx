"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, CheckCircle2, Copy, Globe, Key, Plug, RefreshCw, Shield } from "lucide-react";

export default function AdminIntegrationsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Integrations & APIs</h1>
                <p className="text-muted-foreground">
                    Manage external connections, API keys, and developer settings.
                </p>
            </div>

            <Tabs defaultValue="connected-apps" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="connected-apps">Connected Apps</TabsTrigger>
                    <TabsTrigger value="api-keys">API Keys</TabsTrigger>
                    <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
                </TabsList>

                <TabsContent value="connected-apps" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-base font-medium">Google Workspace</CardTitle>
                                <Badge variant="default" className="bg-green-500 hover:bg-green-600">Active</Badge>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center space-x-4 py-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                                        <Globe className="h-6 w-6 text-slate-600 dark:text-slate-300" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">SSO & Calendar</p>
                                        <p className="text-sm text-muted-foreground">Syncs users and events</p>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <Button variant="outline" size="sm">Configure</Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-base font-medium">Payment Gateway</CardTitle>
                                <Badge variant="outline">Inactive</Badge>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center space-x-4 py-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                                        <Plug className="h-6 w-6 text-slate-600 dark:text-slate-300" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">Stripe / Razorpay</p>
                                        <p className="text-sm text-muted-foreground">Process fee payments</p>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <Button size="sm">Connect</Button>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-base font-medium">Video Conferencing</CardTitle>
                                <Badge variant="default" className="bg-green-500 hover:bg-green-600">Active</Badge>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center space-x-4 py-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                                        <Globe className="h-6 w-6 text-slate-600 dark:text-slate-300" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">Zoom Integration</p>
                                        <p className="text-sm text-muted-foreground">For live classes</p>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <Button variant="outline" size="sm">Configure</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="api-keys" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>API Key Management</CardTitle>
                            <CardDescription>
                                Manage API keys for accessing school data programmatically.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between rounded-lg border p-4">
                                <div className="space-y-0.5">
                                    <div className="flex items-center">
                                        <Label className="text-base">Production Key</Label>
                                        <Badge variant="secondary" className="ml-2">Read-Only</Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Last used: 2 hours ago</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Input readOnly value="sk_live_...x892" className="w-[200px] font-mono text-xs" />
                                    <Button variant="ghost" size="icon">
                                        <Copy className="h-4 w-4" />
                                    </Button>
                                    <Button variant="destructive" size="sm">Revoke</Button>
                                </div>
                            </div>
                            <Button><Key className="mr-2 h-4 w-4" /> Generate New Key</Button>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
