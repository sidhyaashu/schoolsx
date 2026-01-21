"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock, Eye, MessageSquare, MicOff, Video, VideoOff } from "lucide-react";

import { api } from "@schoolx/api";
import { LiveSession } from "@/domain/types";
import { useState, useEffect } from "react";

export default function AdminLiveClassesPage() {
  const [activeSessions, setActiveSessions] = useState<LiveSession[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const data = await api.admin.getLiveSessions();
        setActiveSessions(data);
      } catch (error) {
        console.error("Failed to fetch live sessions", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSessions();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Live Classroom Monitor</h1>
          <p className="text-muted-foreground">Oversee active live sessions and ensure quality.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="destructive"><AlertTriangle className="mr-2 h-4 w-4" /> Emergency Broadcast</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {activeSessions.map((session) => (
          <Card key={session.id} className={session.status === 'Lag Detected' ? 'border-red-200 bg-red-50/20 dark:bg-red-900/10' : ''}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <Badge variant="outline" className="mb-1">{session.class}</Badge>
                  <CardTitle className="text-base">{session.subject}</CardTitle>
                </div>
                <Badge variant={session.status === 'Healthy' ? 'default' : 'destructive'} className={session.status === 'Healthy' ? 'bg-green-500' : ''}>
                  {session.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-black/5 rounded-lg mb-4 flex items-center justify-center relative">
                <Video className="h-8 w-8 text-muted-foreground opacity-20" />
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded flex items-center gap-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"></div>
                  Live
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Teacher</span>
                  <span className="font-medium">{session.teacher}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Topic</span>
                  <span className="font-medium truncate max-w-[150px]">{session.topic}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Attendance</span>
                  <span className="font-medium">{session.students}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium font-mono">{session.duration}</span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 mt-4 pt-4 border-t">
                <Button variant="outline" size="icon" title="View Stream"><Eye className="h-4 w-4" /></Button>
                <Button variant="outline" size="icon" title="Chat Log"><MessageSquare className="h-4 w-4" /></Button>
                <Button variant="outline" size="icon" title="Mute All Students"><MicOff className="h-4 w-4" /></Button>
                <Button variant="destructive" size="icon" title="End Session"><VideoOff className="h-4 w-4" /></Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
