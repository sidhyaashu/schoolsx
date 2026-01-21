"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { loginStart, loginSuccess, loginFailure } from "@/store/slices/authSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Loader2, GraduationCap } from "lucide-react";
import { authService } from "@/services/auth.service";
import { ROLE_ROUTES, Role } from "@/lib/rbac";

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(loginStart());

    try {
      const { user, token } = await authService.login({ email, password });

      // 1. Dispatch to Redux
      dispatch(loginSuccess(user));

      // 2. Persist to Session
      localStorage.setItem("session", JSON.stringify({ user, token }));
      localStorage.setItem("token", token);

      setIsLoading(false);

      // 3. Redirect
      const targetPath = ROLE_ROUTES[user.role as Role];
      if (targetPath) {
        router.push(targetPath as any);
      } else {
        console.error("No route found for role", user.role);
      }
    } catch (err: any) {
      console.error("Login failed", err);
      dispatch(loginFailure());
      setIsLoading(false);
      // You could add a toast here for error feedback
    }
  };

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Login to account</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to access your school portal
        </p>
      </div>
      <div className="grid gap-6">
        <form onSubmit={handleLogin}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="name@schoolx.edu"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href={"/forgot-password" as any} className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                autoCapitalize="none"
                autoComplete="current-password"
                disabled={isLoading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button disabled={isLoading} className="w-full">
              {isLoading && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign In with Email
            </Button>
          </div>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Button variant="outline" type="button" disabled={isLoading} className="w-full">
          <GraduationCap className="mr-2 h-4 w-4" />
          Google / Microsoft
        </Button>
      </div>
      <p className="px-8 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href={"/register" as any}
          className="underline underline-offset-4 hover:text-primary"
        >
          Sign up
        </Link>
      </p>
    </>
  );
}
