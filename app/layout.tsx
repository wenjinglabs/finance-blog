import type { Metadata } from "next"
import Link from "next/link"
import { Archive, Home, Images, ImageDown } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { StripRsc } from "@/components/strip-rsc"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://ggaag.com"),
  title: "ggaag - 工具箱",
  description: "免费在线工具箱 · 图片压缩 · 本地处理不上传",
  alternates: { canonical: "/" },
  openGraph: {
    title: "ggaag - 工具箱",
    description: "免费在线工具箱 · 图片压缩 · 本地处理不上传",
    url: "/",
    siteName: "ggaag",
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "梗酱" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ggaag - 工具箱",
    description: "免费在线工具箱 · 本地处理不上传",
    images: ["/og.png"],
  },
}

const links = [
  { href: "/", label: "工具", Icon: Home },
  { href: "/compress", label: "压缩", Icon: ImageDown },
  { href: "/blog", label: "博客", Icon: Archive },
  { href: "/blog/pics", label: "相簿", Icon: Images },
]

function Nav() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-4">
        <Link href="/" className="font-mono text-base font-semibold tracking-[0.18em]">
          ggaag
        </Link>
        <nav className="flex items-center gap-1">
          {links.map(({ href, label, Icon }) => (
            <Link key={href} href={href} className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "px-2 sm:px-3")}>
              <Icon />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
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
          <Nav />
          <main className="mx-auto w-full max-w-3xl px-4 py-10">{children}</main>
          <footer className="mx-auto w-full max-w-3xl px-4 pb-10">
            <Separator className="mb-4" />
            <p className="text-xs text-muted-foreground">ggaag 工具箱 · 本地处理不上传 · <Link href="/blog" className="underline underline-offset-4">博客</Link></p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
