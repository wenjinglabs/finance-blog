"use client"

import Link from "next/link"
import { Archive, BookOpen, Home, Images, Languages } from "lucide-react"
import { useLang } from "@/lib/language"
import { Separator } from "@/components/ui/separator"

const NAV_ITEMS = [
  { href: "/", icon: Home, en: "Home", zh: "首页" },
  { href: "/archives", icon: Archive, en: "Archives", zh: "归档" },
  { href: "/pics", icon: Images, en: "Gallery", zh: "相簿" },
  { href: "/about", icon: BookOpen, en: "About", zh: "关于" },
] as const

/** 顶部导航：双语标签 + 语言切换，整体为客户端组件以响应语言状态。 */
export function SiteNav() {
  const { lang, setLang } = useLang()
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex h-14 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-mono text-base font-semibold tracking-[0.18em]">
          GGAAG
        </Link>
        <nav className="flex items-center gap-1">
          {NAV_ITEMS.map(({ href, icon: Icon, en, zh }) => (
            <Link
              key={href}
              href={href}
              className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm hover:bg-muted sm:px-3"
            >
              <Icon className="size-4" />
              <span className="hidden sm:inline">{lang === "zh" ? zh : en}</span>
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            aria-label="Switch language"
            className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm hover:bg-muted sm:px-3"
          >
            <Languages className="size-4" />
            {lang === "en" ? "中文" : "EN"}
          </button>
        </nav>
      </div>
    </header>
  )
}

export function FooterText() {
  const { lang } = useLang()
  return (
    <>
      <p className="text-xs text-muted-foreground">
        {lang === "zh" ? "GGAAG 财经笔记" : "GGAAG Finance Notes"} ·{" "}
        <Link href="/about" className="underline underline-offset-4">
          {lang === "zh" ? "关于" : "About"}
        </Link>{" "}
        ·{" "}
        <Link href="/privacy" className="underline underline-offset-4">
          {lang === "zh" ? "隐私政策" : "Privacy Policy"}
        </Link>{" "}
        ·{" "}
        <a href="https://ggaag.com" className="underline underline-offset-4">
          {lang === "zh" ? "工具箱" : "Tools"}
        </a>
      </p>
      <p className="mt-2 text-xs text-muted-foreground/70">
        {lang === "zh"
          ? "本站内容仅为个人笔记，不构成投资建议。"
          : "All content is personal notes for educational purposes only and does not constitute financial advice."}
      </p>
    </>
  )
}

export function FooterSeparator() {
  return <Separator className="mb-4" />
}
