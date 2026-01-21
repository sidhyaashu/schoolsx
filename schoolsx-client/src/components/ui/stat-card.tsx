import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    value: string | number
    icon?: React.ElementType
    trend?: string | {
        value: number
        label: string
        isPositive: boolean
    }
    description?: string
    variant?: "student" | "teacher" | "parent" | "admin" | "default"
    color?: "blue" | "green" | "amber" | "purple" | "rose" | "slate"
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
    ({ className, title, value, icon: Icon, trend, description, variant = "default", color, ...props }, ref) => {
        const colorStyles = {
            blue: "text-blue-600 bg-blue-50/50 border-blue-100",
            green: "text-emerald-600 bg-emerald-50/50 border-emerald-100",
            amber: "text-amber-600 bg-amber-50/50 border-amber-100",
            purple: "text-purple-600 bg-purple-50/50 border-purple-100",
            rose: "text-rose-600 bg-rose-50/50 border-rose-100",
            slate: "text-slate-600 bg-slate-50/50 border-slate-100",
        }

        const variantStyles = {
            default: "bg-background",
            student: "bg-blue-50/50 border-blue-100",
            teacher: "bg-sky-50/50 border-sky-100",
            parent: "bg-indigo-50/50 border-indigo-100",
            admin: "bg-slate-50/50 border-slate-100",
        }

        return (
            <Card
                ref={ref}
                className={cn(
                    "overflow-hidden transition-all hover:shadow-md",
                    color ? colorStyles[color] : variantStyles[variant],
                    className
                )}
                {...props}
            >
                <CardContent className="p-6">
                    <div className="flex items-center justify-between space-x-4">
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium text-muted-foreground">{title}</p>
                            <h3 className="text-2xl font-bold tracking-tight text-slate-900">{value}</h3>
                        </div>
                        {Icon && (
                            <div className={cn(
                                "flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-50",
                                color && colorStyles[color]?.split(" ")[0]
                            )}>
                                <Icon className="h-6 w-6" />
                            </div>
                        )}
                    </div>
                    {(trend || description) && (
                        <div className="mt-4 flex items-center space-x-2">
                            {trend && (
                                <span className={cn(
                                    "text-xs font-bold",
                                    typeof trend === "string"
                                        ? (trend.startsWith("+") ? "text-emerald-600" : "text-rose-600")
                                        : (trend.isPositive ? "text-emerald-600" : "text-rose-600")
                                )}>
                                    {typeof trend === "string"
                                        ? trend
                                        : `${trend.isPositive ? "+" : "-"}${Math.abs(trend.value)}%`}
                                </span>
                            )}
                            {description && (
                                <span className="text-xs font-medium text-muted-foreground">{description}</span>
                            )}
                        </div>
                    )}
                </CardContent>
            </Card>
        )
    }
)
StatCard.displayName = "StatCard"

export { StatCard }
