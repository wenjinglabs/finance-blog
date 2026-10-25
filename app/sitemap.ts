import type { MetadataRoute } from "next"
import { getPosts } from "@/lib/posts"

const BASE = "https://blog.ggaag.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts()
  return [
    { url: BASE, lastModified: posts[0]?.date.slice(0, 10) },
    { url: `${BASE}/archives` },
    { url: `${BASE}/about` },
    { url: `${BASE}/privacy` },
    ...posts.map((p) => ({ url: `${BASE}/posts/${p.slug}`, lastModified: p.date.slice(0, 10) })),
  ]
}
