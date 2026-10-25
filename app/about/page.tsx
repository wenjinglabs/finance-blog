import type { Metadata } from "next"
import { AboutContent } from "@/components/static-pages"

export const metadata: Metadata = {
  title: "About | GGAAG Finance Notes",
  description: "What this blog covers, its editorial stance, and how to get in touch.",
  alternates: { canonical: "/about", languages: { en: "https://blog.ggaag.com/about", zh: "https://blog.ggaag.com/zh/about", "x-default": "https://blog.ggaag.com/about" } },
}

export default function AboutPage() {
  return (
    <article>
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>
      <p className="mt-3 text-sm text-muted-foreground">Last updated: October 24, 2026</p>
      <hr className="my-6 border-border" />
      <AboutContent />
    </article>
  )
}
