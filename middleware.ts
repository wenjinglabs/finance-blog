import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const p = url.pathname

  // 旧博客路径 308 到 /blog/*
  if (p === "/posts" || p === "/posts/") {
    url.pathname = "/blog"
    return NextResponse.redirect(url, 308)
  }
  if (p.startsWith("/posts/")) {
    url.pathname = "/blog" + p
    return NextResponse.redirect(url, 308)
  }
  if (p === "/archives" || p === "/archives/") {
    url.pathname = "/blog/archives"
    return NextResponse.redirect(url, 308)
  }
  if (p === "/pics" || p === "/pics/") {
    url.pathname = "/blog/pics"
    return NextResponse.redirect(url, 308)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/posts", "/posts/", "/posts/:path*", "/archives", "/archives/", "/pics", "/pics/"],
}
