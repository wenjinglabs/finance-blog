import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || ""
  const h = host.split(":")[0].toLowerCase()
  const url = req.nextUrl

  // ggaag.com / www.ggaag.com 首页即工具
  if (h === "ggaag.com" || h === "www.ggaag.com") {
    if (url.pathname === "/") {
      url.pathname = "/compress"
      return NextResponse.rewrite(url)
    }
    if (url.pathname === "/compress" || url.pathname === "/compress/") {
      url.pathname = "/"
      return NextResponse.redirect(url, 308)
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/", "/compress", "/compress/"],
}
