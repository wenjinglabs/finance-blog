"use client"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Clapperboard,
  ExternalLink,
  Images,
} from "lucide-react"
import { Button, buttonVariants } from "./ui/button"
import { Dialog, DialogContent } from "./ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"
import U from "../data/gallery.json"
import G from "../data/ghibli.json"
import BIG from "../data/big.json"
import { cn } from "../lib/utils"

const ORIGIN = "https://pics.ggaag.com"
const PER = 30

const FILMS: Record<string, string> = {
  nausicaa: "风之谷",
  laputa: "天空之城",
  totoro: "龙猫",
  majo: "魔女宅急便",
  porco: "红猪",
  mononoke: "幽灵公主",
  chihiro: "千与千寻",
  howl: "哈尔的移动城堡",
  ponyo: "悬崖上的波妞",
  kazetachinu: "起风了",
  kimitachi: "苍鹭与少年",
}

const USER_KEYS = U as string[]
const GHIBLI_KEYS = G as string[]
const BIG_SET = new Set(BIG as string[])

function thumbOf(mode: string, k: string) {
  return (
    "https://pics.ggaag.com/" + (mode === "u" ? "t/" + k : k.replace("g/", "gt/"))
  )
}

// 灯箱图：统一走 l/*.webp（1600px q80），缺失时回落原图
function webpOf(k: string) {
  return "https://pics.ggaag.com/l/" + k.replace(/\.[^.]+$/, "") + ".webp"
}
function fullOf(mode: string, k: string) {
  if (mode === "u") return webpOf(k)
  return ORIGIN + "/" + k
}

function captionOf(mode: string, k: string) {
  if (mode !== "g") return k.slice(0, 8)
  const m = /^g\/([a-z-]+)(\d+)\.jpg$/.exec(k)
  if (!m) return k
  return `${FILMS[m[1]] ?? m[1]} · ${m[2]}`
}

function pageWindow(cur: number, n: number) {
  const s = new Set([1, n, cur - 1, cur, cur + 1])
  return [...s].filter((p) => p >= 1 && p <= n).sort((a, b) => a - b)
}

function Thumb({ src, alt, aspect, eager }: { src: string; alt: string; aspect: string; eager?: boolean }) {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef<HTMLImageElement | null>(null)
  useEffect(() => { setLoaded(false) }, [src])
  const onLoad = useCallback(() => setLoaded(true), [])
  useEffect(() => {
    const el = ref.current
    if (el && el.complete && el.naturalWidth > 0) setLoaded(true)
    else if (el) {
      const h = () => setLoaded(true)
      el.addEventListener("load", h, { once: true })
      el.addEventListener("error", h, { once: true })
      return () => { el.removeEventListener("load", h); el.removeEventListener("error", h) }
    }
  }, [src])
  return (
    <div className={cn("relative w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800", aspect)}>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-zinc-200 dark:bg-zinc-700" />}
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        onLoad={onLoad}
        onError={onLoad}
        className="relative h-full w-full object-cover transition duration-300 group-hover:scale-105"
      />
    </div>
  )
}

export default function Gallery() {
  const [mode, setMode] = useState("u")
  const [film, setFilm] = useState("")
  const [page, setPage] = useState(1)
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const [fullLoaded, setFullLoaded] = useState(false)

  const keys = useMemo(() => {
    if (mode === "u") return USER_KEYS
    return film ? GHIBLI_KEYS.filter((k) => k.startsWith("g/" + film)) : GHIBLI_KEYS
  }, [mode, film])

  const n = Math.max(1, Math.ceil(keys.length / PER))
  const cur = Math.min(Math.max(1, page), n)
  const items = keys.slice((cur - 1) * PER, cur * PER)

  function switchMode(m: string) {
    setMode(m)
    setPage(1)
    setOpenIdx(null)
  }
  function switchFilm(f: string) {
    setFilm(f === "all" ? "" : f)
    setPage(1)
    setOpenIdx(null)
  }

  useEffect(() => {
    if (openIdx === null) return
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") setOpenIdx((i) => (i === null ? i : (i + 1) % keys.length))
      if (e.key === "ArrowLeft")
        setOpenIdx((i) => (i === null ? i : (i - 1 + keys.length) % keys.length))
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [openIdx, keys.length])

  const openKey = openIdx === null ? null : keys[openIdx]
  useEffect(() => { setFullLoaded(false) }, [openIdx])
  const fullRef = useRef<HTMLImageElement | null>(null)
  useEffect(() => {
    const el = fullRef.current
    if (el && el.complete && el.naturalWidth > 0) setFullLoaded(true)
    else if (el) {
      const h = () => setFullLoaded(true)
      el.addEventListener("load", h, { once: true })
      el.addEventListener("error", h, { once: true })
      return () => { el.removeEventListener("load", h); el.removeEventListener("error", h) }
    }
  }, [openKey])

  return (
    <div className="min-h-screen w-full">
      <Link href="/" className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "-ml-3 mb-6")}>
        <ArrowLeft /> 返回博客
      </Link>
      <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">酱の相簿</h1>
        <p className="text-sm text-muted-foreground">
          {mode === "u" ? `${USER_KEYS.length} 张` : `${keys.length} 枚`} · 缩略图懒加载 + 分页，点击看原图
        </p>
      </div>

      <Tabs value={mode} onValueChange={switchMode} className="mt-4">
        <div className="flex flex-wrap items-center gap-3">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="u" className="flex-1 sm:flex-none">
              <Images /> 我的图库
            </TabsTrigger>
            <TabsTrigger value="g" className="flex-1 sm:flex-none">
              <Clapperboard /> 吉卜力剧照
            </TabsTrigger>
          </TabsList>
          {mode === "g" && (
            <Select value={film === "" ? "all" : film} onValueChange={switchFilm}>
              <SelectTrigger className="w-44">
                <SelectValue placeholder="全部 11 部" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部 11 部</SelectItem>
                {Object.entries(FILMS).map(([s, name]) => (
                  <SelectItem key={s} value={s}>
                    {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
        {mode === "g" && (
          <p className="mt-3 text-xs text-muted-foreground">
            宫崎骏执导 11 部 · 各 50 枚 · 画像 © STUDIO GHIBLI Inc.（官方免费公开）
          </p>
        )}

        <div className="mt-4">
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {items.map((k, i) => {
              const idx = keys.indexOf(k)
              return (
                <button
                  key={k}
                  onClick={() => setOpenIdx(idx)}
                  className="group overflow-hidden rounded-lg bg-muted outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Thumb src={thumbOf(mode, k)} alt={captionOf(mode, k)} aspect={mode === "u" ? "aspect-square" : "aspect-[16/10]"} eager={i < 6} />
                </button>
              )
            })}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-1">
            <Button variant="outline" size="icon" className="hidden sm:inline-flex" disabled={cur <= 1} onClick={() => setPage(1)}>
              <ChevronsLeft />
            </Button>
            <Button variant="outline" size="icon" disabled={cur <= 1} onClick={() => setPage(cur - 1)}>
              <ChevronLeft />
            </Button>
            {pageWindow(cur, n).map((p) => (
              <Button
                key={p}
                variant={p === cur ? "default" : "ghost"}
                size="sm"
                onClick={() => setPage(p)}
              >
                {p}
              </Button>
            ))}
            <Button variant="outline" size="icon" disabled={cur >= n} onClick={() => setPage(cur + 1)}>
              <ChevronRight />
            </Button>
            <Button variant="outline" size="icon" className="hidden sm:inline-flex" disabled={cur >= n} onClick={() => setPage(n)}>
              <ChevronsRight />
            </Button>
          </div>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            {cur} / {n}
          </p>
        </div>
      </Tabs>

      <Dialog open={openIdx !== null} onOpenChange={(o) => !o && setOpenIdx(null)}>
        <DialogContent className="flex flex-col items-center gap-2 sm:max-w-[min(90vw,640px)] p-4">
          {openKey && (
            <>
              <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
                {!fullLoaded && <div className="absolute inset-0 animate-pulse bg-zinc-200 dark:bg-zinc-700" />}
                <img
                  ref={fullRef}
                  src={openKey ? fullOf(mode, openKey) : ""}
                  alt={openKey ? captionOf(mode, openKey) : ""}
                  onLoad={() => setFullLoaded(true)}
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement
                    const fallback = ORIGIN + "/" + (openKey ?? "")
                    if (img.src !== fallback) img.src = fallback
                    setFullLoaded(true)
                  }}
                  className="relative h-full w-full object-contain p-2"
                />
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setOpenIdx((i) => (i === null ? i : (i - 1 + keys.length) % keys.length))}
                >
                  <ChevronLeft />
                </Button>
                <span className="min-w-24 text-center text-sm text-muted-foreground">
                  {openKey ? captionOf(mode, openKey) : ""}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setOpenIdx((i) => (i === null ? i : (i + 1) % keys.length))}
                >
                  <ChevronRight />
                </Button>
                {openKey && mode === "u" && BIG_SET.has(openKey) && (
                  <a
                    href={ORIGIN + "/" + openKey}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-1 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
                  >
                    <ExternalLink className="size-3" /> 原图
                  </a>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
