import type { MetadataRoute } from "next"

export default async function robots(): Promise<MetadataRoute.Robots> {
  const { headers } = await import("next/headers")
  const host = (await headers()).get("host")?.split(":")[0].toLowerCase() || ""
  const isBlog = host === "blog.ggaag.com"
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: isBlog ? "https://blog.ggaag.com/sitemap.xml" : "https://ggaag.com/sitemap.xml",
  }
}
