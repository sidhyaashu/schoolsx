import * as React from "react"
import { Search, Plus, Info } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    description: string
    icon?: React.ReactNode
    actionLabel?: string
    onAction?: () => void
    variant?: "student" | "teacher" | "parent" | "admin" | "default"
}

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
    ({ className, title, description, icon, actionLabel, onAction, variant = "default", ...props }, ref) => {
        const iconStyles = {
            default: "bg-muted text-muted-foreground",
            student: "bg-blue-50 text-blue-500",
            teacher: "bg-sky-50 text-sky-500",
            parent: "bg-indigo-50 text-indigo-500",
            admin: "bg-slate-50 text-slate-500",
        }

        const buttonVariants = {
            default: "default",
            student: "blue",
            teacher: "sky",
            parent: "indigo",
            admin: "slate",
        } as const

        return (
            <div
                ref={ref}
                className={cn(
                    "flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center animate-in fade-in zoom-in duration-300",
                    className
                )}
                {...props}
            >
                <div className={cn(
                    "mx-auto flex h-20 w-20 items-center justify-center rounded-full mb-6",
                    iconStyles[variant]
                )}>
                    {icon || <Info className="h-10 w-10 opacity-50" />}
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-2">{title}</h3>
                <p className="text-muted-foreground max-w-sm mx-auto mb-8 leading-relaxed">
                    {description}
                </p>
                {actionLabel && (
                    <Button
                        onClick={onAction}
                        className={cn(
                            variant === "student" && "bg-blue-600 hover:bg-blue-700",
                            variant === "teacher" && "bg-sky-600 hover:bg-sky-700",
                            variant === "parent" && "bg-indigo-600 hover:bg-indigo-700",
                            variant === "admin" && "bg-slate-800 hover:bg-slate-900",
                        )}
                    >
                        <Plus className="mr-2 h-4 w-4" />
                        {actionLabel}
                    </Button>
                )}
            </div>
        )
    }
)
EmptyState.displayName = "EmptyState"

export { EmptyState }
