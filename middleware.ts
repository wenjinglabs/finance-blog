import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || ""
  const h = host.split(":")[0].toLowerCase()
  const url = req.nextUrl

  // ggaag.com / www.ggaag.com 的首页直接重写到 /compress（URL 保持 /，内容是工具）
  if ((h === "ggaag.com" || h === "www.ggaag.com") && url.pathname === "/") {
    url.pathname = "/compress"
    return NextResponse.rewrite(url)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/"],
}
