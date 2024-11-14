import { NextResponse } from "next/server";
import { auth } from "./auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { pathname } = req.nextUrl;

  // Add paths that should be accessible only to logged-in users
  const protectedPaths = ["/dashboard", "/profile"];

  // Add paths that should be accessible only to non-logged-in users
  const authPaths = ["/login", "/register"];

  const isProtectedPath = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );

  const isAuthPath = authPaths.some((path) => pathname.startsWith(path));

  if (isProtectedPath && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isAuthPath && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
});

// Optionally configure middleware matcher
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
