"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { CalendarDays, Clock } from "lucide-react"
import type { PostMeta } from "@/lib/posts"
import type { Post } from "@/content"
import { useLang } from "@/lib/language"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { readingMinutes } from "@/lib/reading-time"
import { postImages, homeHero } from "@/content/images"
import { ArticleImage } from "@/components/article-image"

type ListPost = PostMeta

export function PostList({ posts }: { posts: ListPost[] }) {
  const { lang } = useLang()
  const [activeTag, setActiveTag] = useState<string | null>(null)

  // 返回主页时恢复上次的滚动位置和筛选状态
  useEffect(() => {
    try {
      const savedTag = sessionStorage.getItem("home-tag")
      if (savedTag) setActiveTag(savedTag === "all" ? null : savedTag)
      const savedY = parseInt(sessionStorage.getItem("home-scroll") ?? "0", 10)
      if (savedY > 0) {
        // 图片加载/框架滚动处理会干扰一次性恢复,短周期重试直到到位;
        // 用户主动滚动(滚轮/触摸)则立即让位
        let tries = 0
        let t: ReturnType<typeof setInterval> | null = null
        const cancel = () => { if (t) clearInterval(t) }
        window.addEventListener("wheel", cancel, { once: true, passive: true })
        window.addEventListener("touchmove", cancel, { once: true, passive: true })
        window.addEventListener("keydown", cancel, { once: true })
        t = setInterval(() => {
          window.scrollTo({ top: savedY, behavior: "instant" })
          if (Math.abs(window.scrollY - savedY) < 2 || ++tries > 12) cancel()
        }, 70)
      }
    } catch {}
    const onScroll = () => {
      try {
        sessionStorage.setItem("home-scroll", String(window.scrollY))
        sessionStorage.setItem("home-tag", activeTag ?? "all")
      } catch {}
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const tags = useMemo(() => {
    const set = new Map<string, number>()
    for (const p of posts) {
      const ts = lang === "zh" && p.zh ? p.zh.tags : p.tags
      for (const t of ts) set.set(t, (set.get(t) ?? 0) + 1)
    }
    return [...set.entries()].sort((a, b) => b[1] - a[1])
  }, [posts, lang])

  useEffect(() => {
    try {
      sessionStorage.setItem("home-tag", activeTag ?? "all")
    } catch {}
  }, [activeTag])

  const visible = useMemo(() => {
    if (!activeTag) return posts
    return posts.filter((p) => {
      const ts = lang === "zh" && p.zh ? p.zh.tags : p.tags
      return ts.includes(activeTag)
    })
  }, [posts, activeTag, lang])

  return (
    <div>
      {/* Apple Music 式背景：整张图重度模糊后铺满视口做背景，向下融入页面底色，正文浮在其上 */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <img
          src={homeHero.src}
          alt=""
          className="h-full w-full scale-125 object-cover opacity-15 blur-3xl dark:opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in oklch, var(--background) 30%, transparent), var(--background) 78%)",
          }}
        />
      </div>
      <div className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">
          {lang === "zh" ? "财经笔记" : "Finance Notes"}
        </h1>
        <p className="mt-2 text-muted-foreground">
          {lang === "zh"
            ? "普通人的理财与投资笔记：记账、应急备用金、指数基金定投、资产配置与防骗。"
            : "Practical personal finance, written with the math shown: cash flow, emergency funds, index funds, allocation, and scam awareness."}
        </p>
      </div>

      {tags.length > 1 && (
        <div className="mb-6 flex items-center gap-2">
          <Select
            value={activeTag ?? "all"}
            onValueChange={(v) => setActiveTag(v === "all" ? null : v)}
          >
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder={lang === "zh" ? "选择分类" : "Filter by topic"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">
                {lang === "zh" ? `全部 · ${posts.length}` : `All · ${posts.length}`}
              </SelectItem>
              {tags.map(([t, n]) => (
                <SelectItem key={t} value={t}>
                  {t} · {n}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {activeTag && (
            <button
              type="button"
              onClick={() => setActiveTag(null)}
              className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              {lang === "zh" ? "清除" : "Clear"}
            </button>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {visible.map((p) => {
          const title = lang === "zh" && p.zh ? p.zh.title : p.title
          const description = lang === "zh" && p.zh ? p.zh.description : p.description
          const tags2 = lang === "zh" && p.zh ? p.zh.tags : p.tags
          const minutes = readingMinutes(p, lang)
          const cover = postImages[p.slug]?.[0]?.img
          return (
            <Link key={p.slug} href={`/posts/${p.slug}`} className="group">
              <Card className="h-full overflow-hidden pt-0 transition-colors group-hover:border-foreground/20">
                {cover && (
                  <div
                    className="relative aspect-[16/9] w-full overflow-hidden"
                    style={{
                      background: `linear-gradient(160deg, color-mix(in oklch, ${cover.accent ?? "gray"} 24%, transparent), transparent)`,
                    }}
                  >
                    <img
                      src={cover.src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="leading-snug">{title}</CardTitle>
                  {description && <CardDescription className="line-clamp-2">{description}</CardDescription>}
                </CardHeader>
                <CardFooter className="gap-3">
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <CalendarDays className="size-3.5" />
                    {p.date.slice(0, 10)}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="size-3.5" />
                    {lang === "zh" ? `${minutes} 分钟` : `${minutes} min`}
                  </span>
                  {tags2.slice(0, 1).map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </CardFooter>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
