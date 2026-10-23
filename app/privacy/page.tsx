import type { Metadata } from "next"
import { PrivacyContent } from "@/components/static-pages"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How this site handles cookies, Google Analytics, and Google AdSense data.",
  alternates: { canonical: "/privacy" },
}

export default function PrivacyPage() {
  return (
    <article>
      <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-3 text-sm text-muted-foreground">Last updated: October 24, 2026</p>
      <PrivacyContent />
    </article>
  )
}
