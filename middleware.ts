import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default function middleware(request:NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("AccessToken");

  if (!token) {
    const redirectUrl = new URL("/", request.url);

    if (pathname.startsWith("/learn") && pathname !== "/learn/loading-sosial") {
      return NextResponse.redirect(redirectUrl);
    }
  
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/learn/:path*", "/study/:path*"],
};
