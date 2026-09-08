import type { Metadata } from "next"
import Link from "next/link"
import { Archive, Home, Images } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import "./globals.css"

export const metadata: Metadata = {
  title: "梗酱",
  description: "梗图社区背后的技术博客",
}

const links = [
  { href: "/", label: "首页", Icon: Home },
  { href: "/archives", label: "归档", Icon: Archive },
  { href: "/pics", label: "图库", Icon: Images },
]

function Nav() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-4">
        <Link href="/" className="text-base font-semibold tracking-tight">
          梗酱
        </Link>
        <nav className="flex items-center gap-1">
          {links.map(({ href, label, Icon }) => (
            <Link key={href} href={href} className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}>
              <Icon />
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Nav />
        <main className="mx-auto w-full max-w-3xl px-4 py-10">{children}</main>
        <footer className="mx-auto w-full max-w-3xl px-4 pb-10">
          <Separator className="mb-4" />
          <p className="text-xs text-muted-foreground">梗酱的技术博客 · Next.js + shadcn</p>
        </footer>
      </body>
    </html>
  )
}
