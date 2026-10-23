"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, CalendarDays, ChevronLeft, ChevronRight, Clock } from "lucide-react"
import type { Post } from "@/content"
import { postImages } from "@/content/images"
import { postRelated } from "@/content/related"
import { posts as allPosts } from "@/content"
import { PostBody } from "@/components/post-body"
import { ArticleImage } from "@/components/article-image"
import { AdSlot } from "@/components/ad-slot"
import { Toc, type TocItem } from "@/components/toc"
import { useLang } from "@/lib/language"
import { readingMinutes } from "@/lib/reading-time"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const FINANCE_TAGS = ["Investing", "Personal Finance", "Scams", "Fundamentals"]
const FINANCE_TAGS_ZH = ["投资", "理财", "防骗", "基础知识"]

export type NavPost = {
  slug: string
  title: string
  zhTitle?: string
}

export function PostView({
  post,
  prev,
  next,
}: {
  post: Post
  prev?: NavPost
  next?: NavPost
}) {
  const { lang } = useLang()
  const localized = lang === "zh" && post.zh ? { ...post, ...post.zh } : post

  const images = postImages[post.slug] ?? []
  const cover = images[0]?.img
  // 第一张图升格为封面，正文内只保留其余插图
  const inlineImages = images.slice(1)
  const blocks = [...localized.blocks]
  for (const { after, img } of [...inlineImages].sort((a, b) => b.after - a.after)) {
    if (after < blocks.length) blocks.splice(after + 1, 0, { t: "img", ...img })
  }

  // TOC：与 PostBody 渲染的最终 blocks 对齐，h2 的块索引即锚点 id
  const tocItems: TocItem[] = blocks
    .map((b, i) => (b.t === "h2" ? { id: `sec-${i}`, text: b.text } : null))
    .filter((x): x is TocItem => x !== null)
  const accent = cover?.accent
  const related = (postRelated[post.slug] ?? [])
    .map((slug) => allPosts.find((p) => p.slug === slug))
    .filter((p): p is Post => !!p)

  const isFinance =
    (post.zh?.tags ?? post.tags).some((t) => FINANCE_TAGS.includes(t) || FINANCE_TAGS_ZH.includes(t)) ||
    post.tags.some((t) => FINANCE_TAGS.includes(t))

  if (!post) notFound()

  const coverCaption = cover ? (lang === "zh" ? cover.captionZh ?? cover.caption : cover.caption) : undefined

  return (
    <article className="mx-auto w-full max-w-5xl">
      {/* Apple Music 式背景：封面图重度模糊铺满视口，融入页面底色；主色晕染叠在其上 */}
      {cover && (
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <img
            src={cover.src}
            alt=""
            className="h-full w-full scale-125 object-cover opacity-15 blur-3xl dark:opacity-25"
          />
          {accent && (
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(70% 90% at 50% 0%, color-mix(in oklch, ${accent} 20%, transparent), transparent 75%)`,
              }}
            />
          )}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, color-mix(in oklch, var(--background) 30%, transparent), var(--background) 78%)",
            }}
          />
        </div>
      )}
      {tocItems.length >= 2 && <Toc items={tocItems} />}
      <Link href="/" className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "mb-6 -ml-3")}>
        <ArrowLeft />
        {lang === "zh" ? "返回首页" : "Back"}
      </Link>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{localized.title}</h1>
      {localized.description && (
        <p className="mt-3 text-lg text-muted-foreground">{localized.description}</p>
      )}
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <CalendarDays className="size-3.5" />
          {post.date.slice(0, 10)}
        </span>
        <Link href="/about" className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
          GGAAG
        </Link>
        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="size-3.5" />
          {lang === "zh" ? `${readingMinutes(post, lang)} 分钟阅读` : `${readingMinutes(post, lang)} min read`}
        </span>
        {localized.tags.map((t) => (
          <Badge key={t} variant="outline">
            {t}
          </Badge>
        ))}
      </div>
      {cover && (
        <figure className="mt-6">
          <ArticleImage
            src={cover.src}
            alt={lang === "zh" && cover.altZh ? cover.altZh : cover.alt}
            accent={cover.accent}
          />
          {coverCaption && (
            <figcaption className="mt-3 text-center text-xs text-muted-foreground">{coverCaption}</figcaption>
          )}
        </figure>
      )}
      <Separator className="my-8" />
      <PostBody blocks={blocks} lang={lang} />
      {isFinance && (
        <p className="mt-10 rounded-lg border border-border bg-muted/50 p-4 text-xs leading-6 text-muted-foreground">
          {lang === "zh"
            ? "免责声明：本文为个人学习笔记，仅供参考，不构成任何投资建议。市场有风险，决策请独立判断。"
            : "Disclaimer: this article is a personal note for educational purposes only and does not constitute financial advice. Markets involve risk; always do your own research and make your own decisions."}
        </p>
      )}
      <AdSlot slot="in-article" className="my-8" />
      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="text-lg font-semibold tracking-tight">
            {lang === "zh" ? "相关阅读" : "Related reading"}
          </h2>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} href={`/posts/${p.slug}`} className="group">
                <Card className="h-full p-3 transition-colors group-hover:border-foreground/20">
                  <p className="text-sm font-medium leading-5">
                    {lang === "zh" ? p.zh?.title ?? p.title : p.title}
                  </p>
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    {lang === "zh" ? `${readingMinutes(p, lang)} 分钟` : `${readingMinutes(p, lang)} min`}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
      {(prev || next) && (
        <nav aria-label={lang === "zh" ? "文章导航" : "Post navigation"} className="mt-10 grid gap-3 sm:grid-cols-2">
          {prev ? (
            <Link href={`/posts/${prev.slug}`} className="group">
              <Card className="h-full p-4 transition-colors group-hover:border-foreground/20">
                <p className="flex items-center gap-1 text-xs text-muted-foreground">
                  <ChevronLeft className="size-3.5" />
                  {lang === "zh" ? "上一篇" : "Previous"}
                </p>
                <CardTitle className="mt-2 text-sm font-medium leading-6">
                  {lang === "zh" ? prev.zhTitle ?? prev.title : prev.title}
                </CardTitle>
              </Card>
            </Link>
          ) : (
            <span aria-hidden className="hidden sm:block" />
          )}
          {next && (
            <Link href={`/posts/${next.slug}`} className="group sm:text-right">
              <Card className="h-full p-4 transition-colors group-hover:border-foreground/20">
                <p className="flex items-center gap-1 text-xs text-muted-foreground sm:justify-end">
                  {lang === "zh" ? "下一篇" : "Next"}
                  <ChevronRight className="size-3.5" />
                </p>
                <CardTitle className="mt-2 text-sm font-medium leading-6">
                  {lang === "zh" ? next.zhTitle ?? next.title : next.title}
                </CardTitle>
              </Card>
            </Link>
          )}
        </nav>
      )}
    </article>
  )
}
