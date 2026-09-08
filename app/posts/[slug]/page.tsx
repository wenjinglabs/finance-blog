import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, CalendarDays } from "lucide-react"
import { getPost, getPosts } from "@/lib/posts"
import { PostBody } from "@/components/post-body"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug)
  if (!post) return {}
  return { title: `${post.title} | 梗酱`, description: post.description }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug)
  if (!post) notFound()
  return (
    <article>
      <Link href="/" className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "mb-6 -ml-3")}>
        <ArrowLeft />
        返回首页
      </Link>
      <h1 className="text-3xl font-semibold tracking-tight">{post.title}</h1>
      {post.description && (
        <p className="mt-3 text-lg text-muted-foreground">{post.description}</p>
      )}
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <CalendarDays className="size-3.5" />
          {post.date.slice(0, 10)}
        </span>
        {post.tags.map((t) => (
          <Badge key={t} variant="outline">
            {t}
          </Badge>
        ))}
      </div>
      <Separator className="my-6" />
      <PostBody blocks={post.blocks} />
    </article>
  )
}
