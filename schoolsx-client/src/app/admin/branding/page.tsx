"use client";

import { useAppSelector } from "@/store/hooks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Palette, Image as ImageIcon, Globe, LayoutTemplate } from "lucide-react";

export default function BrandingPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">School Branding</h1>
        <p className="text-muted-foreground">
          Customize the look and feel of the platform to match your school's identity.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Logo & Identity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ImageIcon className="h-5 w-5" /> Logo & Identity
            </CardTitle>
            <CardDescription>Upload your school logo and favicon.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="h-24 w-24 rounded-lg border-2 border-dashed flex items-center justify-center bg-slate-50">
                <ImageIcon className="h-8 w-8 text-slate-300" />
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-sm">School Logo</h4>
                <p className="text-xs text-muted-foreground max-w-[200px]">
                  Recommended size: 512x512px. PNG or SVG.
                </p>
                <Button size="sm" variant="outline"><Upload className="mr-2 h-3 w-3" /> Upload New</Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label>School Name</Label>
              <Input defaultValue="SchoolX International" />
            </div>
            <div className="space-y-2">
              <Label>Motto / Tagline</Label>
              <Input defaultValue="Empowering Future Leaders" />
            </div>
          </CardContent>
        </Card>

        {/* Theme Colors */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" /> Theme Colors
            </CardTitle>
            <CardDescription>Set your primary brand colors.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Primary Color</Label>
                <div className="flex gap-2">
                  <div className="h-10 w-10 rounded border bg-[#4F46E5]" />
                  <Input defaultValue="#4F46E5" className="font-mono" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Secondary Color</Label>
                <div className="flex gap-2">
                  <div className="h-10 w-10 rounded border bg-[#10B981]" />
                  <Input defaultValue="#10B981" className="font-mono" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Theme Preset</Label>
              <div className="flex gap-2">
                <div className="h-20 w-32 rounded-lg border-2 border-primary bg-slate-100 flex items-center justify-center cursor-pointer relative">
                  <div className="absolute top-2 right-2 h-4 w-4 bg-primary rounded-full" />
                  <span className="text-xs font-semibold">Modern</span>
                </div>
                <div className="h-20 w-32 rounded-lg border bg-slate-50 flex items-center justify-center cursor-pointer hover:bg-slate-100">
                  <span className="text-xs font-semibold">Classic</span>
                </div>
                <div className="h-20 w-32 rounded-lg border bg-slate-50 flex items-center justify-center cursor-pointer hover:bg-slate-100">
                  <span className="text-xs font-semibold">Playful</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Login Page Customization */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LayoutTemplate className="h-5 w-5" /> Login Portal Customization
            </CardTitle>
            <CardDescription>Customize the login experience for students and staff.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Login Page Heading</Label>
                <Input defaultValue="Welcome to SchoolX" />
              </div>
              <div className="space-y-2">
                <Label>Welcome Message</Label>
                <Textarea defaultValue="Please sign in with your school credentials to access the dashboard." />
              </div>
              <div className="space-y-2">
                <Label>Background Image</Label>
                <div className="h-32 w-full rounded-lg bg-slate-100 border-2 border-dashed flex items-center justify-center text-muted-foreground text-sm">
                  Drag & Drop image here
                </div>
              </div>
            </div>

            <div className="border rounded-xl overflow-hidden bg-slate-50 relative aspect-video flex shadow-lg transform scale-95 origin-top-left">
              {/* Preview Mockup */}
              <div className="w-1/2 bg-indigo-600 h-full p-6 text-white flex flex-col justify-center">
                <div className="h-8 w-8 bg-white/20 rounded mb-4" />
                <h3 className="font-bold text-lg">Welcome to SchoolX</h3>
                <p className="text-xs text-indigo-100 mt-2 opacity-80">Please sign in with your school credentials.</p>
              </div>
              <div className="w-1/2 bg-white h-full p-6 flex flex-col justify-center gap-3">
                <div className="h-2 w-10 bg-slate-200 rounded" />
                <div className="h-8 w-full bg-slate-100 rounded border" />
                <div className="h-8 w-full bg-slate-100 rounded border" />
                <div className="h-8 w-full bg-indigo-600 rounded" />
              </div>
              <Badge className="absolute top-2 right-2 bg-black text-white">Live Preview</Badge>
            </div>
          </CardContent>
          <CardFooter className="justify-end gap-2 border-t p-4">
            <Button variant="ghost">Reset to Defaults</Button>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
