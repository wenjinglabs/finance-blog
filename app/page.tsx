import type { Metadata } from "next"
import { getPosts } from "@/lib/posts"
import { PostList } from "@/components/post-list"

export const metadata: Metadata = {
  title: "GGAAG Finance Notes",
  description:
    "Practical notes on personal finance: cash flow tracking, emergency funds, index fund investing, asset allocation, and spotting scams.",
  alternates: { canonical: "/" },
}

export default function Home() {
  const posts = getPosts()
  return <PostList posts={posts} />
}
