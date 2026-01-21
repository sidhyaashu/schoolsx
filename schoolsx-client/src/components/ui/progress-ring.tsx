import * as React from "react"
import { cn } from "@/lib/utils"

interface ProgressRingProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number
    size?: number
    strokeWidth?: number
    variant?: "student" | "teacher" | "parent" | "admin" | "default"
    showLabel?: boolean
}

const ProgressRing = React.forwardRef<HTMLDivElement, ProgressRingProps>(
    ({ className, value, size = 64, strokeWidth = 6, variant = "default", showLabel = true, ...props }, ref) => {
        const radius = size / 2 - strokeWidth
        const circumference = 2 * Math.PI * radius
        const offset = circumference - (value / 100) * circumference

        const variantColors = {
            default: "stroke-primary",
            student: "stroke-blue-500",
            teacher: "stroke-sky-500",
            parent: "stroke-indigo-500",
            admin: "stroke-slate-500",
        }

        const bgColors = {
            default: "stroke-muted",
            student: "stroke-blue-100",
            teacher: "stroke-sky-100",
            parent: "stroke-indigo-100",
            admin: "stroke-slate-100",
        }

        return (
            <div
                ref={ref}
                className={cn("relative inline-flex items-center justify-center", className)}
                style={{ width: size, height: size }}
                {...props}
            >
                <svg
                    className="transform -rotate-90"
                    width={size}
                    height={size}
                >
                    {/* Background Ring */}
                    <circle
                        className={cn("fill-transparent", bgColors[variant])}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        r={radius}
                        cx={size / 2}
                        cy={size / 2}
                    />
                    {/* Progress Ring */}
                    <circle
                        className={cn("fill-transparent transition-all duration-500 ease-in-out", variantColors[variant])}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        r={radius}
                        cx={size / 2}
                        cy={size / 2}
                    />
                </svg>
                {showLabel && (
                    <span className="absolute text-sm font-semibold">
                        {Math.round(value)}%
                    </span>
                )}
            </div>
        )
    }
)
ProgressRing.displayName = "ProgressRing"

export { ProgressRing }
