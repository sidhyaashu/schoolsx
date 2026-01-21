import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, BrainCircuit, Clock, CheckCircle2 } from "lucide-react";

export default function ClassQuizzesPage({ params }: { params: { classId: string } }) {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Class Quizzes</h2>
                    <p className="text-muted-foreground">
                        Manage quizzes and assessments for this class.
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline"><BrainCircuit className="mr-2 h-4 w-4" /> AI Generate</Button>
                    <Button><Plus className="mr-2 h-4 w-4" /> Create Quiz</Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Placeholder Quiz Cards */}
                {[1, 2, 3].map((i) => (
                    <Card key={i}>
                        <CardHeader className="pb-3">
                            <div className="flex justify-between items-start">
                                <Badge variant={i === 1 ? "default" : "secondary"}>
                                    {i === 1 ? "Active" : "Draft"}
                                </Badge>
                                <Button variant="ghost" size="icon" className="h-6 w-6">...</Button>
                            </div>
                            <CardTitle className="mt-2 text-lg">Weekly Review: Chapter {i}</CardTitle>
                            <CardDescription>Maths • 20 Questions</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between text-sm text-muted-foreground mt-2">
                                <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" /> 30 mins
                                </div>
                                <div className="flex items-center gap-1">
                                    <CheckCircle2 className="h-4 w-4" /> {i === 1 ? "12/30 Submitted" : "Not Published"}
                                </div>
                            </div>
                            <div className="mt-4 flex gap-2">
                                <Button variant="outline" size="sm" className="w-full">Edit</Button>
                                <Button size="sm" className="w-full">View Results</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
