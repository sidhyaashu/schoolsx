"use client";

import { Search, Bell, User, LogOut, Settings as SettingsIcon, HelpCircle, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { logout } from "@/store/slices/authSlice";

interface TopbarProps {
  title: string;
  portalType?: "student" | "teacher" | "parent" | "admin";
  onMenuClick?: () => void;
}

const PORTAL_THEME = {
  student: {
    ring: "focus-visible:ring-blue-500",
    text: "text-blue-600",
    bg: "bg-blue-50",
    fallback: "bg-blue-100 text-blue-700",
  },
  teacher: {
    ring: "focus-visible:ring-emerald-500",
    text: "text-emerald-600",
    bg: "bg-emerald-50",
    fallback: "bg-emerald-100 text-emerald-700",
  },
  parent: {
    ring: "focus-visible:ring-purple-500",
    text: "text-purple-600",
    bg: "bg-purple-50",
    fallback: "bg-purple-100 text-purple-700",
  },
  admin: {
    ring: "focus-visible:ring-slate-500",
    text: "text-slate-600",
    bg: "bg-slate-50",
    fallback: "bg-slate-100 text-slate-700",
  },
};

export default function Topbar({ title, portalType = "student", onMenuClick }: TopbarProps) {
  const theme = PORTAL_THEME[portalType];
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("session"); // Clear persistence
    router.push("/login");
  };

  // Fallback if user is not loaded yet (though AuthGuard should prevent this)
  const userName = user?.name || "User";
  const userEmail = user?.email || "user@schoolx.edu";
  const userInitials = (userName || "").split(" ").map((n) => n[0] || "").join("").substring(0, 2);

  return (
    <header className="h-16 border-b bg-white/80 backdrop-blur-md flex items-center justify-between px-4 md:px-6 sticky top-0 z-30 transition-all duration-300">
      <div className="flex items-center flex-1 gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>

        <h2 className={cn("text-lg font-bold whitespace-nowrap hidden sm:block", theme.text)}>
          {title}
        </h2>

        <div className="relative w-full max-w-sm hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className={cn(
              "pl-10 bg-muted/30 border-none h-9 transition-all focus-visible:ring-1",
              theme.ring
            )}
          />
        </div>
      </div>

      <div className="flex items-center space-x-2 md:space-x-4">
        <Button variant="ghost" size="icon" className="relative group">
          <Bell className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          <span className="absolute top-2 right-2 h-2 w-2 bg-rose-500 rounded-full border-2 border-white animate-pulse" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full p-0 overflow-hidden border border-muted/60 hover:border-muted transition-colors">
              <Avatar className="h-full w-full">
                <AvatarImage src={user?.avatar} alt={userName} />
                <AvatarFallback className={cn("font-bold text-xs", theme.fallback)}>{userInitials}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-semibold leading-none">{userName}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {userEmail}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <SettingsIcon className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Help Center</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-rose-600 focus:text-rose-600 cursor-pointer" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

