import * as React from "react"
import { Award, Lock, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface BadgeDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string
    description: string
    icon?: React.ReactNode
    isLocked?: boolean
    isEarned?: boolean
    dateEarned?: string
    variant?: "student" | "default"
}

const BadgeDisplay = React.forwardRef<HTMLDivElement, BadgeDisplayProps>(
    ({ className, name, description, icon, isLocked = false, isEarned = false, dateEarned, variant = "student", ...props }, ref) => {
        return (
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div
                            ref={ref}
                            className={cn(
                                "relative flex flex-col items-center justify-center space-y-2 p-4 rounded-xl border-2 transition-all",
                                isLocked
                                    ? "bg-slate-50 border-slate-100 opacity-60 grayscale"
                                    : "bg-white border-blue-100 shadow-sm hover:shadow-md hover:scale-105",
                                isEarned && "border-yellow-400 bg-yellow-50/30",
                                className
                            )}
                            {...props}
                        >
                            <div className={cn(
                                "flex h-16 w-16 items-center justify-center rounded-full transition-colors",
                                isLocked ? "bg-slate-200 text-slate-500" : "bg-blue-100 text-blue-600",
                                isEarned && "bg-yellow-100 text-yellow-600"
                            )}>
                                {icon || <Award className="h-8 w-8" />}
                            </div>

                            <span className="text-sm font-bold text-center leading-tight">{name}</span>

                            {isLocked && (
                                <div className="absolute top-2 right-2">
                                    <Lock className="h-3 w-3 text-slate-400" />
                                </div>
                            )}

                            {isEarned && (
                                <div className="absolute top-2 right-2">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-500 fill-white" />
                                </div>
                            )}
                        </div>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-[200px] text-center p-3">
                        <p className="font-bold mb-1">{name}</p>
                        <p className="text-xs text-muted-foreground">{description}</p>
                        {isEarned && dateEarned && (
                            <p className="text-[10px] mt-2 font-medium text-emerald-600 uppercase tracking-wider">
                                Earned on {dateEarned}
                            </p>
                        )}
                        {isLocked && (
                            <p className="text-[10px] mt-2 font-medium text-slate-500 uppercase tracking-wider">
                                Locked
                            </p>
                        )}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        )
    }
)
BadgeDisplay.displayName = "BadgeDisplay"

export { BadgeDisplay }
