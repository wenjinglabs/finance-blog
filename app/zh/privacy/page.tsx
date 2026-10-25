import type { Metadata } from "next"
import { PrivacyContent } from "@/components/static-pages"
import { alternatesFor, zhMeta } from "@/lib/seo"

export const metadata: Metadata = {
  ...zhMeta("隐私政策 | GGAAG 财经笔记"),
  description: "本站如何处理 Cookie、Google Analytics 与 Google AdSense 数据。",
  ...alternatesFor("/zh/privacy", "/zh/privacy"),
}

export default function ZhPrivacy() {
  return (
    <article>
      <h1 className="text-3xl font-semibold tracking-tight">隐私政策</h1>
      <p className="mt-3 text-sm text-muted-foreground">最近更新：2026 年 10 月 24 日</p>
      <PrivacyContent lang="zh" />
    </article>
  )
}
