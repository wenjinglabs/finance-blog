"use client"

import { Archive, BookOpen, Home, Images } from "lucide-react"
import { Separator } from "@/components/ui/separator"

/** 顶部导航：吸顶 + 毛玻璃（纯英文站）。 */
export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex h-14 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          onClick={(e) => {
            if (document.referrer && new URL(document.referrer).origin === window.location.origin && window.location.pathname !== "/") {
              e.preventDefault()
              history.back()
            }
          }}
          className="font-mono text-base font-semibold tracking-[0.18em]"
        >
          GGAAG
        </a>
        <nav className="flex items-center gap-1">
          <a href="/" className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm hover:bg-muted sm:px-3">
            <Home className="size-4" />
            <span className="hidden sm:inline">Home</span>
          </a>
          <a href="/archives" className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm hover:bg-muted sm:px-3">
            <Archive className="size-4" />
            <span className="hidden sm:inline">Archives</span>
          </a>
          <a href="/pics" className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm hover:bg-muted sm:px-3">
            <Images className="size-4" />
            <span className="hidden sm:inline">Gallery</span>
          </a>
          <a href="/about" className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm hover:bg-muted sm:px-3">
            <BookOpen className="size-4" />
            <span className="hidden sm:inline">About</span>
          </a>
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
        <a href="/about" className="underline underline-offset-4">About</a> ·{" "}
        <a href="/privacy" className="underline underline-offset-4">Privacy Policy</a> ·{" "}
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
