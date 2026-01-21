"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit, Lightbulb, Sparkles, Target, TrendingUp, AlertTriangle } from "lucide-react";

import { api } from "@schoolx/api";
import { AIInsight } from "@/domain/types";
import { useState, useEffect } from "react";

export default function ParentAIInsightsPage() {
  const [insight, setInsight] = useState<AIInsight | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInsight = async () => {
      try {
        const data = await api.parent.getAIInsights("student_1");
        setInsight(data);
      } catch (error) {
        console.error("Failed to fetch AI insights", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInsight();
  }, []);

  if (isLoading) return <div className="p-8 text-center text-muted-foreground">Analyzing learning patterns...</div>;
  if (!insight) return <div className="p-8 text-center text-red-500">Failed to load AI insights.</div>;
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
            <Sparkles className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">AI Insights Profile</h1>
            <p className="text-muted-foreground">Advanced analysis of Aditi's learning patterns and potential.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border-indigo-100 dark:border-indigo-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
              <BrainCircuit className="h-5 w-5" /> Learning Style Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm mb-2">Dominant Style: {insight.learningStyle.dominant}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {insight.learningStyle.description}
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {insight.learningStyle.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="bg-white/50">{tag}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
              <TrendingUp className="h-5 w-5" /> Recent Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {insight.achievements.map((achievement, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="h-2 w-2 rounded-full bg-green-500 mt-2 shrink-0"></div>
                <p className="text-sm text-muted-foreground">{achievement}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600" /> Recommended Focus Areas
            </CardTitle>
            <CardDescription>AI-generated suggestions for next week</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {insight.recommendations.map((rec, i) => (
              <div key={i} className={`p-4 border rounded-lg flex gap-4 ${rec.type === 'issue' ? 'bg-orange-50/50 dark:bg-orange-900/10 border-orange-100' : 'bg-blue-50/50 dark:bg-blue-900/10 border-blue-100'}`}>
                {rec.type === 'issue' ? <AlertTriangle className="h-5 w-5 text-orange-500 shrink-0" /> : <Lightbulb className="h-5 w-5 text-blue-500 shrink-0" />}
                <div>
                  <h4 className="font-medium text-sm">{rec.area}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{rec.description}</p>
                  {rec.actionLabel && <Button size="sm" variant="link" className={`px-0 h-auto mt-2 ${rec.type === 'issue' ? 'text-orange-600' : 'text-blue-600'}`}>{rec.actionLabel}</Button>}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-slate-900 text-white border-0">
          <CardHeader>
            <CardTitle className="text-white">Predictive Score</CardTitle>
            <CardDescription className="text-slate-400">Forecast for Final Terms</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center py-6">
            <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {insight.predictiveScore}%
            </div>
            <p className="text-sm text-slate-400 mt-4 text-center">Based on current trajectory and submission consistency.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
