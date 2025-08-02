import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export default async function middleware(request) {
  try {
    const pathName = request.nextUrl.pathname;

    
    if (!pathName.startsWith("/admin") && !pathName.startsWith("/adminpage")) {
      return NextResponse.next();
    }

    const sessionKey = cookies().get("session")?.value;

    if (!sessionKey) {
      return NextResponse.redirect(new URL("/admin/login", request.nextUrl.origin));
    }

    const url = `${process.env.NEXT_PUBLIC_API_BASE}/api/admin/session`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        session: sessionKey,
        "Content-Type": "application/json",
      },
      credentials: "include", 
    });

    if (!res.ok) {
      return NextResponse.redirect(new URL("/admin/login", request.nextUrl.origin));
    }

    const { admin } = await res.json();

    if (admin && pathName.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/adminpage", request.nextUrl.origin));
    }

    if (!admin && pathName.startsWith("/adminpage")) {
      return NextResponse.redirect(new URL("/admin/login", request.nextUrl.origin));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("[Middleware Error]", error.message);
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/adminpage/:path*", "/admin/:path*"],
};
