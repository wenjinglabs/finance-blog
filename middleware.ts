import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const p = url.pathname
  // 兼容旧 /blog/* 前缀，308 到干净路径
  if (p === "/blog" || p === "/blog/") {
    url.pathname = "/"
    return NextResponse.redirect(url, 308)
  }
  if (p.startsWith("/blog/")) {
    url.pathname = p.replace(/^\/blog/, "") || "/"
    return NextResponse.redirect(url, 308)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/blog", "/blog/", "/blog/:path*"],
}
