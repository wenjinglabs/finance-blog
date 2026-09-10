import type { Metadata } from "next"
import Link from "next/link"
import { CalendarDays } from "lucide-react"
import { getPosts } from "@/lib/posts"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "博客 | 梗酱",
  description: "梗图社区背后的技术博客",
  alternates: { canonical: "/" },
}

export default function Home() {
  const posts = getPosts()
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">梗酱</h1>
        <p className="mt-2 text-muted-foreground">梗图社区背后的技术博客</p>
      </div>
      <div className="flex flex-col gap-4">
        {posts.map((p) => (
          <Link key={p.slug} href={`/posts/${p.slug}`}>
            <Card className="transition-colors hover:border-foreground/20">
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
                {p.description && <CardDescription>{p.description}</CardDescription>}
              </CardHeader>
              <CardFooter className="gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <CalendarDays className="size-3.5" />
                  {p.date.slice(0, 10)}
                </span>
                {p.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
