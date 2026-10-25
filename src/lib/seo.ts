import type { Metadata } from "next"

const BASE = "https://blog.ggaag.com"

/** 中文页通用 meta：html lang 由页面级 generateViewport/头部无法直接设，
 * Next 会在 <html> 上输出 lang="en"——中文页通过 metadata 的 other 字段补充声明。 */
export function zhMeta(title: string): Metadata {
  return {
    title,
    alternates: { canonical: undefined },
    openGraph: {
      siteName: "GGAAG 财经笔记",
      locale: "zh_CN",
    },
  }
}

/** hreflang 声明：每对页面互指 en/zh + x-default 指英文。 */
export function alternatesFor(canonical: string, counterpart?: string) {
  const languages: Record<string, string> = {
    "en": BASE + (canonical.replace(/^\/zh/, "") || "/"),
    "x-default": BASE + (canonical.replace(/^\/zh/, "") || "/"),
  }
  if (counterpart) {
    languages.zh = BASE + canonical
  }
  return {
    alternates: {
      canonical,
      languages,
    },
  }
}
