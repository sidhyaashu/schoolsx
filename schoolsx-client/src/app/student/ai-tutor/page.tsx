"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { BrainCircuit, Eraser, FileText, Gamepad2, HelpCircle, Lightbulb, MessageCircle, Mic, Paperclip, Send, Sparkles, Wand2 } from "lucide-react";
import React from "react";

import { useChat } from "@/hooks/use-chat";
import { Loader2 } from "lucide-react";

export default function StudentAITutorPage() {
  const { messages, input, setInput, sendMessage, isLoading } = useChat("STUDENT_TUTOR");

  const handleSend = () => {
    sendMessage();
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] gap-6">
      {/* Main Chat Area */}
      <Card className="flex-1 flex flex-col shadow-md border-slate-200 dark:border-slate-800">
        <CardHeader className="border-b px-6 py-4 flex flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-100 p-2 rounded-lg dark:bg-indigo-900/50">
              <BrainCircuit className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle className="text-lg">AI Tutor</CardTitle>
              <CardDescription>Always here to help you learn!</CardDescription>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon"><Eraser className="h-4 w-4" /></Button>
            <Button variant="outline" size="sm">
              <HistoryIcon className="mr-2 h-4 w-4" /> History
            </Button>
          </div>
        </CardHeader>

        <CardContent className="flex-1 p-0 overflow-hidden relative">
          <ScrollArea className="h-full p-6">
            <div className="space-y-6">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-64 text-center space-y-4">
                  <div className="bg-indigo-100 p-4 rounded-full">
                    <BrainCircuit className="h-12 w-12 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">Hi! I'm your AI Tutor.</h3>
                    <p className="text-sm text-muted-foreground max-w-sm">
                      Ask me anything about your homework, subjects, or just to learn something new!
                    </p>
                  </div>
                </div>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                    <AvatarImage src={msg.role === 'model' ? "/bot-avatar.png" : "/user-avatar.png"} />
                    <AvatarFallback className={msg.role === 'model' ? "bg-indigo-600 text-white" : "bg-slate-200"}>
                      {msg.role === 'model' ? "AI" : "YOU"}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${msg.role === 'user'
                    ? 'bg-indigo-600 text-white rounded-tr-none'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none'
                    }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-4">
                  <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                    <AvatarFallback className="bg-indigo-600 text-white">AI</AvatarFallback>
                  </Avatar>
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none flex items-center gap-2 text-sm text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Thinking...
                  </div>
                </div>
              )}
              {/* Placeholder for "Typing..." state or suggestions chips could go here */}
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
                placeholder="Ask anything... (e.g., 'Explain Photosynthesis')"
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
            <Button onClick={handleSend} size="lg" className="px-8 bg-indigo-600 hover:bg-indigo-700">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </CardFooter>
      </Card>

      {/* Right Sidebar: Tools */}
      <div className="w-80 space-y-6">
        {/* Tools Menu */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Magic Tools</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            <ToolButton icon={FileText} label="Notes" color="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" />
            <ToolButton icon={HelpCircle} label="Quiz Me" color="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" />
            <ToolButton icon={Wand2} label="Simplify" color="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300" />
            <ToolButton icon={Gamepad2} label="Game Mode" color="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300" />
            <ToolButton icon={Lightbulb} label="Explain" color="bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300" />
            <ToolButton icon={Sparkles} label="Flashcards" color="bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300" />
          </CardContent>
        </Card>

        {/* Suggested Topics */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Suggested for You</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {["Pythagoras Theorem", "Water Cycle", "Create a Story", "French Basics"].map((topic) => (
              <Button key={topic} variant="outline" className="w-full justify-start text-sm h-auto py-2">
                <MessageCircle className="mr-2 h-3 w-3 text-muted-foreground" />
                {topic}
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ToolButton({ icon: Icon, label, color }: { icon: any, label: string, color: string }) {
  return (
    <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl border hover:bg-accent/50 transition-colors h-24">
      <div className={`p-2.5 rounded-full ${color}`}>
        <Icon className="h-5 w-5" />
      </div>
      <span className="text-sm font-medium">{label}</span>
    </button>
  )
}

function HistoryIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 12" />
      <path d="M3 3v9h9" />
      <path d="M12 7v5l4 2" />
    </svg>
  )
}
