import type { Metadata } from "next"
import Link from "next/link"
import { Archive, Home, Images } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { StripRsc } from "@/components/strip-rsc"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.ggaag.com"),
  title: "梗酱 - 技术博客",
  description: "梗图社区背后的技术博客",
  alternates: { canonical: "/" },
  openGraph: {
    title: "梗酱 - 技术博客",
    description: "梗图社区背后的技术博客",
    url: "/",
    siteName: "梗酱",
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "梗酱" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "梗酱 - 技术博客",
    description: "梗图社区背后的技术博客",
    images: ["/og.png"],
  },
}

function BlogNav() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-4">
        <Link href="/" className="font-mono text-base font-semibold tracking-[0.18em]">
          ggaag
        </Link>
        <nav className="flex items-center gap-1">
          <Link href="/" className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm hover:bg-muted sm:px-3">
            <Home className="size-4" />
            <span className="hidden sm:inline">首页</span>
          </Link>
          <Link href="/archives" className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm hover:bg-muted sm:px-3">
            <Archive className="size-4" />
            <span className="hidden sm:inline">归档</span>
          </Link>
          <Link href="/pics" className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm hover:bg-muted sm:px-3">
            <Images className="size-4" />
            <span className="hidden sm:inline">相簿</span>
          </Link>
          <a href="https://ggaag.com" className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm hover:bg-muted sm:px-3">
            工具
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <StripRsc />
        <ThemeProvider>
          <BlogNav />
          <main className="mx-auto w-full max-w-3xl px-4 py-10">{children}</main>
          <footer className="mx-auto w-full max-w-3xl px-4 pb-10">
            <Separator className="mb-4" />
            <p className="text-xs text-muted-foreground">
              梗酱的技术博客 · Next.js + shadcn · <a href="https://ggaag.com" className="underline underline-offset-4">工具箱</a>
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
