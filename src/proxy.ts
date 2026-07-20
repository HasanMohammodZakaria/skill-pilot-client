import { NextResponse, type NextRequest } from "next/server";


const PROTECTED_ROUTES = ["/dashboard", "/blueprints/add", "/blueprints/manage"];
const ADMIN_ROUTES = ["/dashboard/admin"];
const LOGIN_PATH = "/login";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

function matchesAny(pathname: string, routes: string[]) {
  return routes.some((route) => pathname === route || pathname.startsWith(`${route}/`));
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isAdminRoute = matchesAny(pathname, ADMIN_ROUTES);
  const isProtectedRoute = isAdminRoute || matchesAny(pathname, PROTECTED_ROUTES);

  
  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  
  const sessionRes = await fetch(`${BACKEND_URL}/api/auth/get-session`, {
    headers: {
      cookie: request.headers.get("cookie") ?? "",
    },
  });

  const session = sessionRes.ok ? await sessionRes.json() : null;

  if (!session?.user) {
    const loginUrl = new URL(LOGIN_PATH, request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAdminRoute && session.user.role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/blueprints/add", "/blueprints/manage"],
};