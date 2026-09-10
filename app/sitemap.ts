import type { MetadataRoute } from "next"
import { getPosts } from "@/lib/posts"

const BASE = "https://ggaag.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts()
  return [
    { url: BASE },
    { url: `${BASE}/compress` },
    { url: `${BASE}/blog`, lastModified: posts[0]?.date.slice(0, 10) },
    { url: `${BASE}/blog/archives` },
    { url: `${BASE}/blog/pics` },
    ...posts.map((p) => ({
      url: `${BASE}/blog/posts/${p.slug}`,
      lastModified: p.date.slice(0, 10),
    })),
  ]
}
