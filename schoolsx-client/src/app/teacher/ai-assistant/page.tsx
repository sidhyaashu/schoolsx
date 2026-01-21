"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChat } from "@/hooks/use-chat";
import { Bot, Eraser, FileSignature, LayoutList, Loader2, Mic, Paperclip, Send, Sparkles } from "lucide-react";
import React from "react";

export default function TeacherAIAssistantPage() {
  const { messages, input, setInput, sendMessage, isLoading } = useChat("TEACHER_ASSISTANT");

  const handleSend = () => {
    sendMessage();
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] gap-6">
      {/* Main Chat Area */}
      <Card className="flex-1 flex flex-col shadow-md border-emerald-100 dark:border-emerald-900">
        <CardHeader className="border-b px-6 py-4 flex flex-row items-center justify-between bg-emerald-50/50 dark:bg-emerald-950/20">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-100 p-2 rounded-lg dark:bg-emerald-900/50">
              <Bot className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle className="text-lg">Teaching Assistant</CardTitle>
              <CardDescription>Helper for lesson plans, quizzes, and admin.</CardDescription>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon"><Eraser className="h-4 w-4" /></Button>
          </div>
        </CardHeader>

        <CardContent className="flex-1 p-0 overflow-hidden relative">
          <ScrollArea className="h-full p-6">
            <div className="space-y-6">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-64 text-center space-y-4 opacity-80">
                  <div className="bg-emerald-100 p-4 rounded-full">
                    <Sparkles className="h-10 w-10 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">Ready to assist, Teacher.</h3>
                    <p className="text-sm text-muted-foreground max-w-sm">
                      I can help generate lesson plans, draft emails to parents, or create quiz questions.
                    </p>
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                    <AvatarFallback className={msg.role === 'model' ? "bg-emerald-600 text-white" : "bg-slate-200"}>
                      {msg.role === 'model' ? "AI" : "TC"}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${msg.role === 'user'
                    ? 'bg-emerald-600 text-white rounded-tr-none'
                    : 'bg-white border border-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none'
                    }`}>
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-4">
                  <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                    <AvatarFallback className="bg-emerald-600 text-white">AI</AvatarFallback>
                  </Avatar>
                  <div className="bg-slate-50 border p-4 rounded-2xl rounded-tl-none flex items-center gap-2 text-sm text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Generating content...
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>

        <CardFooter className="p-4 border-t bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex w-full items-center gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Paperclip className="h-5 w-5" />
            </Button>
            <div className="relative flex-1">
              <Input
                placeholder="Ask to create a lesson plan..."
                className="pr-10 py-6 text-base"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-primary"
              >
                <Mic className="h-4 w-4" />
              </Button>
            </div>
            <Button onClick={handleSend} size="lg" className="px-8 bg-emerald-600 hover:bg-emerald-700">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </CardFooter>
      </Card>

      {/* Right Sidebar: Quick Actions */}
      <div className="w-72 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Button variant="outline" className="justify-start gap-2 h-auto py-3" onClick={() => setInput("Create a lesson plan for Grade 6 Math about Fractions")}>
              <LayoutList className="h-4 w-4 text-emerald-600" />
              <div className="text-left">
                <div className="font-semibold text-xs">Lesson Plan</div>
                <div className="text-[10px] text-muted-foreground">Grade 6 Math</div>
              </div>
            </Button>
            <Button variant="outline" className="justify-start gap-2 h-auto py-3" onClick={() => setInput("Generate 5 MCQs about Photosynthesis")}>
              <FileSignature className="h-4 w-4 text-blue-600" />
              <div className="text-left">
                <div className="font-semibold text-xs">Quiz Generator</div>
                <div className="text-[10px] text-muted-foreground">Biology</div>
              </div>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
