"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

/**
 * 文章插图：
 * - blur-up 淡入：加载完成前以低透明度 + 模糊占位，加载后平滑过渡到清晰
 * - Apple Music 式氛围背景：以图片主色调（accent，由压缩管线用 sharp 提取）
 *   在图片四周做柔和径向光晕 + 渐变底色，随图片浮现
 */
export function ArticleImage({
  src,
  alt,
  accent,
}: {
  src: string
  alt: string
  accent?: string
}) {
  const [loaded, setLoaded] = useState(false)
  const tone = accent ?? "var(--muted-foreground)"

  return (
    <div
      className="relative overflow-hidden rounded-xl border border-border"
      style={{ background: `linear-gradient(160deg, color-mix(in oklch, ${tone} 22%, transparent), color-mix(in oklch, ${tone} 6%, transparent))` }}
    >
      {/* 图片背后的主色光晕，加载后浮现 */}
      <div
        aria-hidden
        className={cn(
          "absolute -inset-6 transition-opacity duration-1000 ease-out",
          loaded ? "opacity-70" : "opacity-0"
        )}
        style={{
          background: `radial-gradient(ellipse 60% 55% at 50% 45%, color-mix(in oklch, ${tone} 38%, transparent), transparent 72%)`,
          filter: "blur(28px)",
        }}
      />
      <picture>
        {/* AVIF 为主格式（管线压到 <=50KB），webp 兜底老浏览器 */}
        <source srcSet={src} type="image/avif" />
        <source srcSet={src.replace(/\.avif$/, ".webp")} type="image/webp" />
        <img
          src={src.replace(/\.avif$/, ".webp")}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={cn(
            "relative w-full transition-[opacity,filter,transform] duration-700 ease-out",
            loaded ? "scale-100 opacity-100 blur-0" : "scale-[1.02] opacity-0 blur-md"
          )}
        />
      </picture>
    </div>
  )
}
