"use client";

import { useAppSelector } from "@/store/hooks";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Moon, Sun, User, Volume2 } from "lucide-react";

export default function StudentSettingsPage() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Customize your learning experience and profile.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {/* Sidebar Card */}
        <Card className="md:col-span-1 border-indigo-100 dark:border-indigo-900 bg-indigo-50/50 dark:bg-indigo-950/20">
          <CardContent className="pt-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold">{user?.name || "Aditi Sharma"}</p>
                <p className="text-xs text-muted-foreground">Class 6-A</p>
              </div>
            </div>
            <div className="h-px w-full bg-indigo-200 dark:bg-indigo-800" />
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start text-indigo-700 bg-indigo-100/50 font-semibold">
                <User className="mr-2 h-4 w-4" /> Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Bell className="mr-2 h-4 w-4" /> Notifications
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Volume2 className="mr-2 h-4 w-4" /> Audio & Video
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="md:col-span-3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Customization</CardTitle>
              <CardDescription>Manage how you appear to others.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 rounded-full bg-slate-100 flex items-center justify-center">
                  <span className="text-2xl">🦄</span>
                </div>
                <Button variant="outline" size="sm">Change Avatar</Button>
              </div>
              <div className="grid gap-2">
                <Label>Display Name</Label>
                <Input defaultValue="Aditi Sharma" />
              </div>
              <div className="grid gap-2">
                <Label>Bio / Status</Label>
                <Input defaultValue="Loving Physics! 🚀" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Dark Mode</Label>
                  <p className="text-xs text-muted-foreground">Switch between light and dark themes.</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-xs text-muted-foreground">Receive updates about assignments and quizzes.</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
