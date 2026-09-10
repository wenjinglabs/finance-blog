import type { MetadataRoute } from "next"
import { getPosts } from "@/lib/posts"
import { headers } from "next/headers"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getPosts()
  const host = (await headers()).get("host")?.split(":")[0].toLowerCase() || ""
  const isBlog = host === "blog.ggaag.com" || host === "www.blog.ggaag.com"
  if (isBlog) {
    const B = "https://blog.ggaag.com"
    return [
      { url: B, lastModified: posts[0]?.date.slice(0, 10) },
      { url: `${B}/archives` },
      { url: `${B}/pics` },
      ...posts.map((p) => ({ url: `${B}/posts/${p.slug}`, lastModified: p.date.slice(0, 10) })),
    ]
  }
  // ggaag.com 仅工具
  return [
    { url: "https://ggaag.com" },
    { url: "https://ggaag.com/compress" },
    { url: "https://ggaag.com/pdf" },
  ]
}
