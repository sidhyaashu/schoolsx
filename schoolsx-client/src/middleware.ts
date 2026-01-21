import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const session = req.cookies.get("session")?.value;

  const protectedRoutes = ["/student", "/teacher", "/parent", "/admin"];
  const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route));

  if (!session && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/student/:path*", "/teacher/:path*", "/parent/:path*", "/admin/:path*"],
};
