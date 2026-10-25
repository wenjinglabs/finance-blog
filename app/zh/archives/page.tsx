import type { Metadata } from "next"
import { ArchivesList } from "@/components/archives-list"
import { getPosts } from "@/lib/posts"
import { alternatesFor, zhMeta } from "@/lib/seo"

export const metadata: Metadata = {
  ...zhMeta("归档 | GGAAG 财经笔记"),
  description: "全部文章，按年份分组。",
  ...alternatesFor("/zh/archives", "/zh/archives"),
}

export default function ZhArchives() {
  return <ArchivesList posts={getPosts()} lang="zh" />
}
