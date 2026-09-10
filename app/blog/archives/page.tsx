import type { Metadata } from "next"
import Link from "next/link"
import { getPosts } from "@/lib/posts"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "归档 | 梗酱",
  description: "梗酱博客文章归档",
  alternates: { canonical: "/blog/archives" },
}

export default function Archives() {
  const posts = getPosts()
  const byYear = new Map<string, typeof posts>()
  for (const p of posts) {
    const y = p.date.slice(0, 4)
    if (!byYear.has(y)) byYear.set(y, [])
    byYear.get(y)!.push(p)
  }
  const years = [...byYear.entries()]
  return (
    <div>
      <h1 className="mb-2 text-3xl font-semibold tracking-tight">归档</h1>
      <p className="mb-8 text-muted-foreground">共 {posts.length} 篇</p>
      {years.map(([y, ps], yi) => (
        <section key={y} className="mb-8">
          <h2 className="mb-3 text-sm font-semibold text-muted-foreground">{y}</h2>
          <div className="flex flex-col">
            {ps.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/posts/${p.slug}`}
                className="flex items-baseline gap-4 rounded-md px-2 py-2 hover:bg-muted"
              >
                <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
                  {p.date.slice(5, 10)}
                </span>
                <span className="text-sm underline-offset-4 hover:underline">{p.title}</span>
              </Link>
            ))}
          </div>
          {yi < years.length - 1 && <Separator className="mt-8" />}
        </section>
      ))}
    </div>
  )
}
