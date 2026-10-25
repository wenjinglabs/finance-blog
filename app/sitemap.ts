import type { MetadataRoute } from "next"
import { getPosts } from "@/lib/posts"

const BASE = "https://blog.ggaag.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts()
  const entries: MetadataRoute.Sitemap = []

  // 英文页
  entries.push({ url: BASE, lastModified: posts[0]?.date.slice(0, 10) })
  entries.push({ url: `${BASE}/archives` })
  entries.push({ url: `${BASE}/about` })
  entries.push({ url: `${BASE}/privacy` })
  for (const p of posts) {
    entries.push({ url: `${BASE}/posts/${p.slug}`, lastModified: p.date.slice(0, 10) })
  }

  // 中文页（仅列有 zh 内容的页面）
  entries.push({ url: `${BASE}/zh`, lastModified: posts[0]?.date.slice(0, 10) })
  entries.push({ url: `${BASE}/zh/archives` })
  entries.push({ url: `${BASE}/zh/about` })
  entries.push({ url: `${BASE}/zh/privacy` })
  for (const p of posts) {
    if (p.zh) entries.push({ url: `${BASE}/zh/posts/${p.slug}`, lastModified: p.date.slice(0, 10) })
  }

  return entries
}
