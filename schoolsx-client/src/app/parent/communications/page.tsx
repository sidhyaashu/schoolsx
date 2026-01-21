"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Send, Phone } from "lucide-react";

export default function ParentCommunicationsPage() {
  const contacts = [
    { name: "Mr. Sharma", role: "Class Teacher", status: "Online", avatar: "MS" },
    { name: "Principal's Desk", role: "Admin", status: "Offline", avatar: "PR" },
    { name: "Transport In-charge", role: "Staff", status: "Online", avatar: "TR" },
  ];

  return (
    <div className="space-y-6 h-[calc(100vh-8rem)] flex flex-col">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
        <p className="text-muted-foreground">Direct line to teachers and school administration.</p>
      </div>

      <div className="flex-1 grid md:grid-cols-3 gap-6 min-h-0">
        {/* Contacts List */}
        <Card className="md:col-span-1 overflow-hidden flex flex-col">
          <div className="p-4 border-b bg-slate-50 dark:bg-slate-900">
            <Input placeholder="Search people..." />
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            {contacts.map((contact, i) => (
              <div key={i} className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${i === 0 ? 'bg-slate-100 dark:bg-slate-800' : ''}`}>
                <div className="relative">
                  <Avatar>
                    <AvatarFallback>{contact.avatar}</AvatarFallback>
                  </Avatar>
                  {contact.status === 'Online' && <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></div>}
                </div>
                <div>
                  <p className="font-medium text-sm">{contact.name}</p>
                  <p className="text-xs text-muted-foreground">{contact.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Chat Window */}
        <Card className="md:col-span-2 flex flex-col overflow-hidden">
          <div className="p-4 border-b flex justify-between items-center bg-slate-50 dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">Mr. Sharma</p>
                <p className="text-xs text-muted-foreground">Class Teacher • 6A</p>
              </div>
            </div>
            <Button variant="ghost" size="icon"><Phone className="h-4 w-4" /></Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 dark:bg-slate-900/50">
            <div className="flex justify-start">
              <div className="bg-white dark:bg-slate-800 border p-3 rounded-lg max-w-[80%] shadow-sm">
                <p className="text-sm">Hello Mr. Sharma, I wanted to ask about the upcoming Science Fair dates.</p>
                <span className="text-[10px] text-muted-foreground mt-1 block">10:30 AM</span>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white p-3 rounded-lg max-w-[80%] shadow-sm">
                <p className="text-sm">Hi! The Science Fair is scheduled for Nov 15th. We will send a circular tomorrow.</p>
                <span className="text-[10px] text-blue-100 mt-1 block">10:35 AM</span>
              </div>
            </div>
          </div>

          <div className="p-4 border-t bg-white dark:bg-black">
            <div className="flex gap-2">
              <Input placeholder="Type your message..." />
              <Button size="icon"><Send className="h-4 w-4" /></Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
