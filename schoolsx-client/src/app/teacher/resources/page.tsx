"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Plus, Sparkles, FolderOpen, MoreVertical, Download, Share2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { api } from "@schoolx/api";
import { useState, useEffect } from "react";

export default function ResourcesPage() {
  const [resources, setResources] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const data = await api.teacher.getResources();
        setResources(data);
      } catch (error) {
        console.error("Failed to fetch resources", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResources();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resources & Content</h1>
          <p className="text-muted-foreground">Manage your teaching materials and files.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Sparkles className="mr-2 h-4 w-4 text-purple-500" /> AI Generator
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Upload New
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Files</TabsTrigger>
          <TabsTrigger value="docs">Documents</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
          <TabsTrigger value="ai">AI Generated</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {resources.map((file, i) => (
              <Card key={i} className="group">
                <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                  <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                    <FileText className="h-8 w-8 text-slate-500 group-hover:text-blue-500" />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem><Download className="mr-2 h-4 w-4" /> Download</DropdownMenuItem>
                      <DropdownMenuItem><Share2 className="mr-2 h-4 w-4" /> Share</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-base truncate" title={file.title}>{file.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <span>{file.type}</span>
                    <span>•</span>
                    <span>{file.size}</span>
                  </CardDescription>
                  <div className="mt-4 flex items-center text-xs text-muted-foreground bg-slate-50 dark:bg-slate-900 p-2 rounded">
                    <FolderOpen className="mr-2 h-3 w-3" /> Shared with {file.shared}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        {/* Placeholders for other tabs */}
        <TabsContent value="docs" className="h-24 flex items-center justify-center text-muted-foreground">Documents view...</TabsContent>
        <TabsContent value="media" className="h-24 flex items-center justify-center text-muted-foreground">Media view...</TabsContent>
        <TabsContent value="ai" className="h-24 flex items-center justify-center text-muted-foreground">AI Generated content view...</TabsContent>
      </Tabs>
    </div>
  );
}
