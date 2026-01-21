import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                <div className="absolute inset-0 bg-indigo-600" />
                <div className="relative z-20 flex items-center text-lg font-medium">
                    <GraduationCap className="mr-2 h-6 w-6" />
                    SchoolX
                </div>
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-lg">
                            &ldquo;This platform has completely transformed how we manage our school. The AI integration is a game changer for both teachers and students.&rdquo;
                        </p>
                        <footer className="text-sm">Sofia Davis, Principal</footer>
                    </blockquote>
                </div>
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    {children}
                </div>
            </div>
        </div>
    );
}
