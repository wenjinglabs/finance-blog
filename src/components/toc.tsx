"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export type TocItem = { id: string; text: string }

/**
 * 文章目录（桌面端）：固定在视口右侧的小面板，滚动时高亮当前小节。
 * 仅 2xl 及以上屏宽显示（内容容器放宽后 xl 侧边空间不足）；条目来自文章的 h2 块，id 与 PostBody 渲染的标题一致。
 */
export function Toc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "")

  useEffect(() => {
    if (items.length === 0) return
    const headings = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => !!el)
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // 取最后一个进入触发区的标题为当前小节
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          setActive(visible[visible.length - 1].target.id)
        }
      },
      { rootMargin: "-88px 0px -65% 0px" }
    )
    headings.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [items])

  if (items.length < 2) return null

  return (
    <nav
      aria-label="Table of contents"
      className="fixed right-6 top-28 z-40 hidden w-48 2xl:block"
    >
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
        On this page
      </p>
      <ul className="space-y-1 border-l border-border">
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              className={cn(
                "-ml-px block border-l-2 py-1 pl-3 text-xs leading-5 transition-colors",
                active === it.id
                  ? "border-foreground font-medium text-foreground"
                  : "border-transparent text-muted-foreground hover:border-foreground/30 hover:text-foreground"
              )}
            >
              {it.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
