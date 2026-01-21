"use client";

import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import React from "react";

interface MobileSidebarProps {
    children: React.ReactNode;
    portalName: string;
}

export default function MobileSidebar({ children, portalName }: MobileSidebarProps) {
    const [open, setOpen] = React.useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent side="left" className="p-0 w-72 h-full border-none shadow-2xl">
                <SheetHeader className="hidden">
                    <SheetTitle>{portalName} Navigation</SheetTitle>
                </SheetHeader>
                <div className="h-full" onClick={() => setOpen(false)}>
                    {children}
                </div>
            </SheetContent>
        </Sheet>
    );
}
