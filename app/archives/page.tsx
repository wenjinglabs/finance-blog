import type { Metadata } from "next"
import { getPosts } from "@/lib/posts"
import { ArchivesList } from "@/components/archives-list"

export const metadata: Metadata = {
  title: "Archives | GGAAG Finance Notes",
  description: "All posts, grouped by year.",
  alternates: { canonical: "/archives", languages: { en: "https://blog.ggaag.com/archives", zh: "https://blog.ggaag.com/zh/archives", "x-default": "https://blog.ggaag.com/archives" } },
}

export default function Archives() {
  const posts = getPosts()
  return <ArchivesList posts={posts} />
}
