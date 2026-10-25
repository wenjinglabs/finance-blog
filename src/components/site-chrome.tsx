"use client"

import Link from "next/link"
import { Archive, BookOpen, Home, Images } from "lucide-react"
import { Separator } from "@/components/ui/separator"

/** 顶部导航：吸顶 + 毛玻璃（纯英文站）。 */
export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex h-14 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-mono text-base font-semibold tracking-[0.18em]">
          GGAAG
        </Link>
        <nav className="flex items-center gap-1">
          <Link href="/" className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm hover:bg-muted sm:px-3">
            <Home className="size-4" />
            <span className="hidden sm:inline">Home</span>
          </Link>
          <Link href="/archives" className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm hover:bg-muted sm:px-3">
            <Archive className="size-4" />
            <span className="hidden sm:inline">Archives</span>
          </Link>
          <Link href="/pics" className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm hover:bg-muted sm:px-3">
            <Images className="size-4" />
            <span className="hidden sm:inline">Gallery</span>
          </Link>
          <Link href="/about" className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm hover:bg-muted sm:px-3">
            <BookOpen className="size-4" />
            <span className="hidden sm:inline">About</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export function FooterText() {
  return (
    <>
      <p className="text-xs text-muted-foreground">
        GGAAG Finance Notes ·{" "}
        <Link href="/about" className="underline underline-offset-4">About</Link> ·{" "}
        <Link href="/privacy" className="underline underline-offset-4">Privacy Policy</Link> ·{" "}
        <a href="https://ggaag.com" className="underline underline-offset-4">Tools</a>
      </p>
      <p className="mt-2 text-xs text-muted-foreground/70">
        All content is personal notes for educational purposes only and does not constitute financial advice.
      </p>
    </>
  )
}

export function FooterSeparator() {
  return <Separator className="mb-4" />
}
