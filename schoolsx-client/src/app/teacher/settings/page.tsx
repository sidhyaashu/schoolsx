"use client";

import { useAppSelector } from "@/store/hooks";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch"; 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload } from "lucide-react";



export default function TeacherSettingsPage() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profile & Settings</h1>
        <p className="text-muted-foreground">
          Manage your teacher profile, availability, and preferences.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {/* Sidebar / Quick Profile */}
        <Card className="md:col-span-1 h-fit">
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Avatar className="h-24 w-24">
                <AvatarFallback className="text-2xl bg-indigo-100 text-indigo-700">MR</AvatarFallback>
              </Avatar>
              <Button size="icon" variant="secondary" className="absolute bottom-0 right-0 rounded-full h-8 w-8 shadow-md">
                <Upload className="h-4 w-4" />
              </Button>
            </div>
            <h2 className="font-bold text-lg">{user?.name || "Manish Raj"}</h2>
            <p className="text-sm text-muted-foreground">Senior Physics Teacher</p>
            <div className="mt-4 w-full space-y-2">
              <div className="bg-slate-50 p-2 rounded text-xs font-medium text-slate-600">ID: TC-2029</div>
              <div className="bg-slate-50 p-2 rounded text-xs font-medium text-slate-600">Dept: Science</div>
            </div>
          </CardContent>
        </Card>

        {/* Main Settings Area */}
        <div className="md:col-span-3">
          <Tabs defaultValue="general">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="general">General Info</TabsTrigger>
              <TabsTrigger value="class">Classroom Preferences</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Details</CardTitle>
                  <CardDescription>Update your public profile information.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>First Name</Label>
                      <Input defaultValue="Manish" />
                    </div>
                    <div className="space-y-2">
                      <Label>Last Name</Label>
                      <Input defaultValue="Raj" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input defaultValue="manish.raj@schoolx.edu" disabled />
                  </div>
                  <div className="space-y-2">
                    <Label>Bio</Label>
                    <Textarea defaultValue="Passionate Physics educator with 10+ years of experience in making complex concepts simple." />
                  </div>
                  <div className="flex justify-end">
                    <Button>Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="class" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Classroom Configuration</CardTitle>
                  <CardDescription>Default settings for your live classes and assignments.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Auto-mute Students</Label>
                      <p className="text-xs text-muted-foreground">Automatically mute students when they join live class.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Allow Late Submissions</Label>
                      <p className="text-xs text-muted-foreground">Allow students to submit assignments after due date.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Show Leaderboard</Label>
                      <p className="text-xs text-muted-foreground">Display class leaderboard to students.</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
