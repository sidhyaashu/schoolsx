"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import { ChevronRight } from "lucide-react";

export default function PortalBreadcrumb() {
    const pathname = usePathname();
    const paths = (pathname || "").split("/").filter((path) => path);

    return (
        <Breadcrumb className="mb-6">
            <BreadcrumbList>
                {paths.map((path, index) => {
                    const href = `/${paths.slice(0, index + 1).join("/")}`;
                    const isLast = index === paths.length - 1;
                    const label = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " ");

                    return (
                        <React.Fragment key={path}>
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage className="font-bold text-slate-900">{label}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink asChild>
                                        <Link href={href as any}>{label}</Link>
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                            {!isLast && <BreadcrumbSeparator />}
                        </React.Fragment>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
