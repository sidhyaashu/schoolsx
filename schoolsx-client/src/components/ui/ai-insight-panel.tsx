import * as React from "react"
import { Sparkles, ArrowRight, Lightbulb, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface AIInsightPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    content?: string
    summary?: string
    details?: string
    type?: "recommendation" | "prediction" | "alert" | "info"
    variant?: "student" | "teacher" | "parent" | "admin"
    actionLabel?: string
    onAction?: () => void
}

const AIInsightPanel = React.forwardRef<HTMLDivElement, AIInsightPanelProps>(
    ({ className, title, content, summary, details, type = "info", variant = "student", actionLabel, onAction, ...props }, ref) => {
        const icons = {
            recommendation: <Lightbulb className="h-5 w-5" />,
            prediction: <Sparkles className="h-5 w-5" />,
            alert: <AlertCircle className="h-5 w-5" />,
            info: <Sparkles className="h-5 w-5" />,
        }

        const typeStyles = {
            recommendation: "bg-emerald-50 text-emerald-700 border-emerald-100",
            prediction: "bg-purple-50 text-purple-700 border-purple-100",
            alert: "bg-rose-50 text-rose-700 border-rose-100",
            info: "bg-blue-50 text-blue-700 border-blue-100",
        }

        const variantStyles = {
            student: "border-l-4 border-l-blue-500",
            teacher: "border-l-4 border-l-sky-500",
            parent: "border-l-4 border-l-indigo-500",
            admin: "border-l-4 border-l-slate-500",
        }

        return (
            <Card
                ref={ref}
                className={cn(
                    "overflow-hidden border-none shadow-sm",
                    typeStyles[type],
                    variantStyles[variant],
                    className
                )}
                {...props}
            >
                <CardContent className="p-5">
                    <div className="flex items-start space-x-4">
                        <div className={cn(
                            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/50 backdrop-blur-sm",
                            type === "info" && "text-blue-600",
                            type === "prediction" && "text-purple-600",
                            type === "recommendation" && "text-emerald-600",
                            type === "alert" && "text-rose-600"
                        )}>
                            {icons[type]}
                        </div>
                        <div className="flex-1 space-y-1">
                            <h4 className="font-bold tracking-tight">{title}</h4>
                            {summary && <p className="text-sm font-bold opacity-100">{summary}</p>}
                            {(details || content) && (
                                <p className="text-sm leading-relaxed opacity-90">{details || content}</p>
                            )}
                            {actionLabel && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="mt-2 -ml-2 h-8 hover:bg-white/20"
                                    onClick={onAction}
                                >
                                    {actionLabel}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>
        )
    }
)
AIInsightPanel.displayName = "AIInsightPanel"

export { AIInsightPanel }
