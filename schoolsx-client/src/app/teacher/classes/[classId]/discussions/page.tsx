import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Send, ThumbsUp } from "lucide-react";

export default function ClassDiscussionsPage({ params }: { params: { classId: string } }) {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold tracking-tight">Discussions & Doubts</h2>
                <p className="text-muted-foreground">
                    Answer student queries and facilitate class discussions.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-4">
                    {/* Discussion Feed */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <Avatar>
                                    <AvatarImage src="/avatars/01.png" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle className="text-base">John Doe</CardTitle>
                                    <CardDescription className="text-xs">2 hours ago • Chapter 4: Calculus</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p>I'm having trouble understanding the chain rule application in question 5. Can someone explain?</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground border-t pt-4">
                                <Button variant="ghost" size="sm"><ThumbsUp className="mr-2 h-4 w-4" /> 3 Likes</Button>
                                <Button variant="ghost" size="sm"><MessageSquare className="mr-2 h-4 w-4" /> 2 Replies</Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Reply Box Demo */}
                    <Card className="border-l-4 border-l-blue-500">
                        <CardContent className="pt-6 space-y-4">
                            <div className="flex gap-3">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="/avatars/teacher.png" />
                                    <AvatarFallback>YOU</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 space-y-2">
                                    <p className="text-sm font-medium">Your Reply</p>
                                    <Textarea placeholder="Type your explanation here..." />
                                    <div className="flex justify-end gap-2">
                                        <Button variant="outline" size="sm">AI Assist</Button>
                                        <Button size="sm"><Send className="mr-2 h-4 w-4" /> Post Reply</Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-4">
                    {/* Right Sidebar - Priority Doubts */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Priority Doubts</CardTitle>
                            <CardDescription>Unanswered questions needing attention</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {[1, 2].map((i) => (
                                <div key={i} className="flex items-start gap-3 text-sm border-b pb-3 last:border-0 last:pb-0">
                                    <div className="h-2 w-2 mt-1.5 rounded-full bg-red-500 shrink-0" />
                                    <div>
                                        <p className="font-medium">Sarah M.</p>
                                        <p className="text-muted-foreground line-clamp-2">Sir, is the project submission deadline extended?</p>
                                        <Button variant="link" className="h-auto p-0 text-xs mt-1">Reply Now</Button>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
