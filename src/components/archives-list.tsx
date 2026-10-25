"use client"

import type { PostMeta } from "@/lib/posts"
import { useLang } from "@/lib/language"
import { Separator } from "@/components/ui/separator"
import type { Post } from "@/content"

type ListPost = PostMeta

export function ArchivesList({ posts, lang: langProp }: { posts: ListPost[]; lang?: "en" | "zh" }) {
  const { lang: hookLang } = useLang()
  const lang = langProp ?? hookLang
  const byYear = new Map<string, ListPost[]>()
  for (const p of posts) {
    const y = p.date.slice(0, 4)
    if (!byYear.has(y)) byYear.set(y, [])
    byYear.get(y)!.push(p)
  }
  const years = [...byYear.entries()]
  return (
    <div>
      <h1 className="mb-2 text-3xl font-semibold tracking-tight">{lang === "zh" ? "归档" : "Archives"}</h1>
      <p className="mb-8 text-muted-foreground">
        {lang === "zh" ? `共 ${posts.length} 篇` : `${posts.length} posts in total`}
      </p>
      {years.map(([y, ps], yi) => (
        <section key={y} className="mb-8">
          <h2 className="mb-3 text-sm font-semibold text-muted-foreground">{y}</h2>
          <div className="flex flex-col">
            {ps.map((p) => (
              <a
                key={p.slug}
                href={`/posts/${p.slug}`}
                className="flex items-baseline gap-4 rounded-md px-2 py-2 hover:bg-muted"
              >
                <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
                  {p.date.slice(5, 10)}
                </span>
                <span className="text-sm underline-offset-4 hover:underline">
                  {lang === "zh" && p.zh ? p.zh.title : p.title}
                </span>
              </a>
            ))}
          </div>
          {yi < years.length - 1 && <Separator className="mt-8" />}
        </section>
      ))}
    </div>
  )
}
