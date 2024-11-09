import { 
    convexAuthNextjsMiddleware, 
    createRouteMatcher,
  } from "@convex-dev/auth/nextjs/server";
  import { NextRequest } from "next/server";
  
  const isProtectedRoute = createRouteMatcher(["/pay(.*)"]); 
  
  export default convexAuthNextjsMiddleware(
    (request: NextRequest, { convexAuth }) => {
      if (isProtectedRoute(request) && !convexAuth.isAuthenticated()) {
        // Get the current origin
        const origin = request.nextUrl.origin;
        const pathname = request.nextUrl.pathname;
        
        // Construct the URL string directly without any encoding
        const redirectUrl = `${origin}/sign-in?redirect=${pathname}`;
        
        // Use Response.redirect directly to avoid additional encoding
        return Response.redirect(redirectUrl);
      }
    }
  );
  
  export const config = {
    matcher: [
      "/((?!.*\\..*|_next).*)",
      "/",
      "/(api|trpc)(.*)"
    ],
  };