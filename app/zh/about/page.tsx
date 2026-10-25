import type { Metadata } from "next"
import { AboutContent } from "@/components/static-pages"

import { alternatesFor, zhMeta } from "@/lib/seo"

export const metadata: Metadata = {
  ...zhMeta("关于 | GGAAG 财经笔记"),
  description: "这个博客写什么、编辑立场与联系方式。",
  ...alternatesFor("/zh/about", "/zh/about"),
}

export default function ZhAbout() {
  return (
    <article>
      <h1 className="text-3xl font-semibold tracking-tight">关于</h1>
      <p className="mt-3 text-sm text-muted-foreground">最近更新：2026 年 10 月 24 日</p>
      <hr className="my-6 border-border" />
      <AboutContent lang="zh" />
    </article>
  )
}
