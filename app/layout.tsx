import type { Metadata } from "next"
import Link from "next/link"
import { Archive, Home, Images, ImageDown } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://ggaag.com"),
  title: "ggaag",
  description: "梗图社区背后的技术博客",
  alternates: { canonical: "/" },
  openGraph: {
    title: "ggaag",
    description: "梗图社区背后的技术博客",
    url: "/",
    siteName: "ggaag",
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "梗酱" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ggaag",
    description: "梗图社区背后的技术博客",
    images: ["/og.png"],
  },
}

const links = [
  { href: "/", label: "首页", Icon: Home },
  { href: "/archives", label: "归档", Icon: Archive },
  { href: "/pics", label: "酱の相簿", Icon: Images },
  { href: "/compress", label: "压缩", Icon: ImageDown },
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
        <ThemeProvider>
          <Nav />
          <main className="mx-auto w-full max-w-3xl px-4 py-10">{children}</main>
          <footer className="mx-auto w-full max-w-3xl px-4 pb-10">
            <Separator className="mb-4" />
            <p className="text-xs text-muted-foreground">梗酱的技术博客 · Next.js + shadcn</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
