import { NextResponse } from "next/server";
import { AIInsight } from "@/domain/types";

export async function GET() {
    const insight: AIInsight = {
        learningStyle: {
            dominant: "Visual Learner",
            description: "Aditi engages 40% more with video content and diagram-based questions compared to text-heavy study materials. She excels in tasks requiring spatial reasoning.",
            tags: ["Visual Reps", "Mind Mapping", "Video Lectures"]
        },
        achievements: [
            "Consistent improvement in Mathematics over the last 3 weeks (+12%).",
            "Top performance in the recent Computer Science coding challenge."
        ],
        recommendations: [
            {
                area: "History Dates & Events",
                description: "Struggling with chronology in the 'Mughal Empire' chapter. Recommend using flashcards timeline.",
                actionLabel: "View Recommended Flashcards",
                type: "issue"
            },
            {
                area: "Advanced Algebra",
                description: "Ready for advanced topics. Suggest assigning 'Polynomials Level 2' practice set.",
                type: "opportunity"
            }
        ],
        predictiveScore: 94
    };

    return NextResponse.json({ data: insight });
}
