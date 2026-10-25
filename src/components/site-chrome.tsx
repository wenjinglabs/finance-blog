"use client"

import Link from "next/link"
import { Archive, BookOpen, Home, Images, Languages } from "lucide-react"
import { useEffect, useState } from "react"
import { useLang } from "@/lib/language"
import { Separator } from "@/components/ui/separator"

const NAV_ITEMS = [
  { key: "home", icon: Home, en: "Home", zh: "首页" },
  { key: "archives", icon: Archive, en: "Archives", zh: "归档" },
  { key: "pics", icon: Images, en: "Gallery", zh: "相簿" },
  { key: "about", icon: BookOpen, en: "About", zh: "关于" },
] as const

/** 顶部导航：吸顶毛玻璃，双语标签；语言切换跳转对应语言页面。 */
export function SiteNav({ lang: langProp, pathname }: { lang?: "en" | "zh"; pathname?: string }) {
  const { lang: hookLang } = useLang()
  const [locLang, setLocLang] = useState<"en" | "zh" | null>(null)
  const [locPath, setLocPath] = useState<string | null>(null)
  useEffect(() => {
    const detect = () => {
      setLocPath(window.location.pathname)
      setLocLang(window.location.pathname.startsWith("/zh") ? "zh" : "en")
    }
    detect()
    // 软导航后 pathname prop 可能缺,轮询一次兜底
    const t = setInterval(detect, 400)
    setTimeout(() => clearInterval(t), 2000)
    return () => clearInterval(t)
  }, [pathname])
  const lang = langProp ?? locLang ?? hookLang
  const effPath = pathname ?? locPath ?? "/"
  const homeHref = lang === "zh" ? "/zh" : "/"
  const archivesHref = lang === "zh" ? "/zh/archives" : "/archives"
  const picsHref = lang === "zh" ? "/zh/pics" : "/pics"
  const aboutHref = lang === "zh" ? "/zh/about" : "/about"
  const [toggleHref, setToggleHref] = useState("/")
  useEffect(() => {
    const m = (effPath).match("^(?:/zh)?(/.*)?$")
    const rest = m?.[1] ?? "/"
    setToggleHref(lang === "zh" ? rest : "/zh" + (rest === "/" ? "" : rest))
  }, [pathname, lang])
  const toggleLabel = lang === "zh" ? "EN" : "中文"
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex h-14 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={homeHref} className="font-mono text-base font-semibold tracking-[0.18em]">
          GGAAG
        </Link>
        <nav className="flex items-center gap-1">
          {NAV_ITEMS.map(({ key, icon: Icon, en, zh }) => (
            <Link
              key={key}
              href={key === "home" ? homeHref : key === "archives" ? archivesHref : key === "pics" ? picsHref : aboutHref}
              className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm hover:bg-muted sm:px-3"
            >
              <Icon className="size-4" />
              <span className="hidden sm:inline">{lang === "zh" ? zh : en}</span>
            </Link>
          ))}
          <Link
            href={toggleHref}
            aria-label="Switch language"
            onClick={() => {
              try {
                window.localStorage.setItem("lang", lang === "zh" ? "en" : "zh")
              } catch {}
            }}
            className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm hover:bg-muted sm:px-3"
          >
            <Languages className="size-4" />
            {toggleLabel}
          </Link>
        </nav>
      </div>
    </header>
  )
}

export function FooterText({ lang: langProp }: { lang?: "en" | "zh" }) {
  const { lang: hookLang } = useLang()
  const [locLang, setLocLang] = useState<"en" | "zh" | null>(null)
  useEffect(() => {
    const detect = () => setLocLang(window.location.pathname.startsWith("/zh") ? "zh" : "en")
    detect()
    const t = setInterval(detect, 400)
    setTimeout(() => clearInterval(t), 2000)
    return () => clearInterval(t)
  }, [])
  const lang = langProp ?? locLang ?? hookLang
  return (
    <>
      <p className="text-xs text-muted-foreground">
        {lang === "zh" ? "GGAAG 财经笔记" : "GGAAG Finance Notes"} ·{" "}
        <Link href={lang === "zh" ? "/zh/about" : "/about"} className="underline underline-offset-4">
          {lang === "zh" ? "关于" : "About"}
        </Link>{" "}
        ·{" "}
        <Link href={lang === "zh" ? "/zh/privacy" : "/privacy"} className="underline underline-offset-4">
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
