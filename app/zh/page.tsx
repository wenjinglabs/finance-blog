import type { Metadata } from "next"
import { PostList } from "@/components/post-list"
import { getPosts } from "@/lib/posts"
import { alternatesFor, zhMeta } from "@/lib/seo"

export const metadata: Metadata = {
  ...zhMeta("GGAAG 财经笔记 — 实用个人理财与投资"),
  description: "普通人的理财与投资笔记：记账、应急备用金、指数基金定投、资产配置与防骗，全部给出计算过程。",
  ...alternatesFor("/zh", "/zh"),
}

export default function ZhHome() {
  return <PostList posts={getPosts()} lang="zh" />
}
