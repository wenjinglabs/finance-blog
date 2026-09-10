import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const host = (req.headers.get("host") || "").split(":")[0].toLowerCase()
  const isBlog = host === "blog.ggaag.com" || host === "www.blog.ggaag.com"
  const url = req.nextUrl
  const p = url.pathname

  // blog 子域：干净路径在根，内部文件在 /blog/*
  if (isBlog) {
    // /blog 前缀在子域上已废弃，直接去掉（按要求不兼容旧前缀，重定向到干净路径）
    if (p === "/blog" || p === "/blog/") {
      url.pathname = "/"
      return NextResponse.redirect(url, 308)
    }
    if (p.startsWith("/blog/")) {
      url.pathname = p.replace(/^\/blog/, "") || "/"
      return NextResponse.redirect(url, 308)
    }
    // 根 -> /blog（文件实际在 app/blog）
    if (p === "/") {
      url.pathname = "/blog"
      return NextResponse.rewrite(url)
    }
    if (p === "/archives" || p === "/archives/" || p.startsWith("/archives/")) {
      url.pathname = "/blog/archives"
      return NextResponse.rewrite(url)
    }
    if (p === "/pics" || p === "/pics/" || p.startsWith("/pics/")) {
      url.pathname = "/blog/pics"
      return NextResponse.rewrite(url)
    }
    if (p === "/posts" || p === "/posts/" || p.startsWith("/posts/")) {
      url.pathname = "/blog" + p
      return NextResponse.rewrite(url)
    }
    return NextResponse.next()
  }

  // apex ggaag.com：仅工具，/blog 直接 404（按要求直接去掉，不跳子域）
  if (p === "/blog" || p === "/blog/" || p.startsWith("/blog/")) {
    url.pathname = "/_not-found"
    return NextResponse.rewrite(url)
  }
  if (p === "/posts" || p === "/posts/" || p.startsWith("/posts/") || p === "/archives" || p === "/archives/" || p === "/pics" || p === "/pics/") {
    url.pathname = "/_not-found"
    return NextResponse.rewrite(url)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/", "/blog/:path*", "/posts/:path*", "/posts", "/archives/:path*", "/archives", "/pics/:path*", "/pics", "/compress/:path*", "/pdf/:path*"],
}
