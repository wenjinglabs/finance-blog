"use client"
import { useCallback, useRef, useState } from "react"
import { Download, Image as ImageIcon, Sparkles, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type Item = {
  id: string
  file: File
  url: string
  w: number
  h: number
  outUrl: string | null
  outBlob: Blob | null
  outSize: number | null
  loading: boolean
}

function fmt(n: number) {
  if (n < 1024) return n + " B"
  if (n < 1024 * 1024) return (n / 1024).toFixed(1) + " KB"
  return (n / 1024 / 1024).toFixed(2) + " MB"
}

async function toWebp(file: File, quality: number): Promise<{ blob: Blob; w: number; h: number }> {
  const img = document.createElement("img")
  const url = URL.createObjectURL(file)
  await new Promise<void>((res, rej) => {
    img.onload = () => res()
    img.onerror = () => rej(new Error("decode failed"))
    img.src = url
  })
  const canvas = document.createElement("canvas")
  canvas.width = img.naturalWidth
  canvas.height = img.naturalHeight
  const ctx = canvas.getContext("2d")!
  ctx.drawImage(img, 0, 0)
  URL.revokeObjectURL(url)
  const blob: Blob = await new Promise((res) =>
    canvas.toBlob((b) => res(b!), "image/webp", quality)
  )
  return { blob, w: img.naturalWidth, h: img.naturalHeight }
}

export default function CompressClient() {
  const [q, setQ] = useState(80)
  const [items, setItems] = useState<Item[]>([])
  const [dragOver, setDragOver] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const convert = useCallback(
    async (file: File, quality: number) => {
      const id = Math.random().toString(36).slice(2)
      const url = URL.createObjectURL(file)
      const img = document.createElement("img")
      await new Promise<void>((res) => {
        img.onload = () => res()
        img.onerror = () => res()
        img.src = url
      })
      const w = img.naturalWidth || 0
      const h = img.naturalHeight || 0
      setItems((prev) => [...prev, { id, file, url, w, h, outUrl: null, outBlob: null, outSize: null, loading: true }])
      try {
        const { blob } = await toWebp(file, quality / 100)
        const outUrl = URL.createObjectURL(blob)
        setItems((prev) =>
          prev.map((it) => (it.id === id ? { ...it, outUrl, outBlob: blob, outSize: blob.size, loading: false } : it))
        )
      } catch {
        setItems((prev) => prev.map((it) => (it.id === id ? { ...it, loading: false } : it)))
      }
    },
    []
  )

  const reconvertAll = useCallback(
    async (quality: number) => {
      for (const it of items) {
        if (!it.file) continue
        setItems((prev) => prev.map((p) => (p.id === it.id ? { ...p, loading: true, outUrl: null, outBlob: null, outSize: null } : p)))
        try {
          const { blob } = await toWebp(it.file, quality / 100)
          const outUrl = URL.createObjectURL(blob)
          setItems((prev) => prev.map((p) => (p.id === it.id ? { ...p, outUrl, outBlob: blob, outSize: blob.size, loading: false } : p)))
        } catch {
          setItems((prev) => prev.map((p) => (p.id === it.id ? { ...p, loading: false } : p)))
        }
      }
    },
    [items]
  )

  const onFiles = useCallback(
    (files: FileList | File[]) => {
      const arr = Array.from(files).filter((f) => f.type.startsWith("image/"))
      if (arr.length === 0) return
      arr.slice(0, 20).forEach((f) => convert(f, q))
    },
    [convert, q]
  )

  const onQ = (v: number) => {
    setQ(v)
  }

  const applyQ = () => reconvertAll(q)

  const remove = (id: string) => {
    setItems((prev) => {
      const it = prev.find((p) => p.id === id)
      if (it) {
        URL.revokeObjectURL(it.url)
        if (it.outUrl) URL.revokeObjectURL(it.outUrl)
      }
      return prev.filter((p) => p.id !== id)
    })
  }

  const download = (it: Item) => {
    if (!it.outUrl) return
    const a = document.createElement("a")
    a.href = it.outUrl
    a.download = it.file.name.replace(/\.[^.]+$/, "") + ".webp"
    a.click()
  }

  const downloadAll = async () => {
    for (const it of items) if (it.outUrl) download(it)
  }

  const downloadZip = async () => {
    const ready = items.filter((it) => it.outBlob)
    if (ready.length === 0) return
    const JSZip = (await import("jszip")).default
    const zip = new JSZip()
    ready.forEach((it) => {
      zip.file(it.file.name.replace(/\.[^.]+$/, "") + ".webp", it.outBlob!)
    })
    const blob = await zip.generateAsync({ type: "blob" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `compress-${Date.now()}.zip`
    a.click()
    setTimeout(() => URL.revokeObjectURL(url), 5000)
  }

  const done = items.filter((it) => it.outSize !== null)
  const totalIn = done.reduce((s, it) => s + it.file.size, 0)
  const totalOut = done.reduce((s, it) => s + (it.outSize ?? 0), 0)
  const totalSaving = totalIn > 0 ? ((1 - totalOut / totalIn) * 100).toFixed(0) : null

  return (
    <div className="min-h-screen w-full">
      {/* 标题 */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">图片压缩</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          拖拽即转 WebP · 浏览器本地处理，不上传服务器 · 支持 JPG/PNG/WebP
        </p>
      </div>

      {/* 拖拽区 */}
      <Card
        onDragOver={(e) => {
          e.preventDefault()
          setDragOver(true)
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragOver(false)
          onFiles(e.dataTransfer.files)
        }}
        className={
          "border-dashed transition-colors " +
          (dragOver ? "border-foreground bg-muted" : "hover:border-foreground/30")
        }
      >
        <CardContent className="flex flex-col items-center gap-3 py-10">
          <div className="flex size-12 items-center justify-center rounded-full bg-muted">
            <Upload className="size-6" />
          </div>
          <p className="text-sm font-medium">拖拽图片到这里，或点击选择</p>
          <p className="text-xs text-muted-foreground">最多 20 张，单张建议 &lt; 20MB</p>
          <Button variant="outline" size="sm" onClick={() => inputRef.current?.click()}>
            <ImageIcon /> 选择图片
          </Button>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => e.target.files && onFiles(e.target.files)}
          />
        </CardContent>
      </Card>

      {/* 质量控制 */}
      {items.length > 0 && (
        <>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium">质量 {q}%</span>
            <input
              type="range"
              min={40}
              max={95}
              value={q}
              onChange={(e) => onQ(Number(e.target.value))}
              className="h-2 w-48 accent-foreground"
            />
            <Button size="sm" variant="outline" onClick={applyQ}>
              <Sparkles /> 应用到全部
            </Button>
            <span className="text-xs text-muted-foreground">改完点一下重转</span>
            {items.some((it) => it.outUrl) && (
              <div className="ml-auto flex gap-2">
                <Button size="sm" variant="outline" onClick={downloadAll}>
                  逐个下载
                </Button>
                <Button size="sm" onClick={downloadZip}>
                  <Download /> 打包 ZIP
                </Button>
              </div>
            )}
          </div>
          {done.length > 0 && (
            <p className="mt-2 text-xs text-muted-foreground">
              已转 {done.length} 张 · {fmt(totalIn)} → {fmt(totalOut)}
              {totalSaving !== null && Number(totalSaving) > 0 && (
                <span className="ml-1 font-medium text-green-700 dark:text-green-400">省 {totalSaving}%</span>
              )}
            </p>
          )}
        </>
      )}

      {/* 列表 */}
      {items.length > 0 && (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {items.map((it) => {
            const saving =
              it.outSize !== null ? ((1 - it.outSize / it.file.size) * 100).toFixed(0) : null
            return (
              <Card key={it.id} className="overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={it.url} alt={it.file.name} className="h-full w-full object-contain p-2" />
                  {it.loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background/60 text-sm">
                      转换中…
                    </div>
                  )}
                  <button
                    onClick={() => remove(it.id)}
                    className="absolute right-2 top-2 rounded-full bg-background p-1 shadow hover:bg-muted"
                    aria-label="remove"
                  >
                    <X className="size-4" />
                  </button>
                </div>
                <CardContent className="space-y-2 p-3">
                  <p className="truncate text-sm font-medium" title={it.file.name}>
                    {it.file.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {it.w ? `${it.w}×${it.h}` : ""} · {fmt(it.file.size)}
                    {it.outSize !== null && (
                      <>
                        {" → "}
                        <span className="font-medium text-foreground">{fmt(it.outSize)}</span>
                        {saving !== null && Number(saving) > 0 && (
                          <span className="ml-1 rounded bg-green-500/10 px-1.5 py-0.5 text-green-700 dark:text-green-400">
                            -{saving}%
                          </span>
                        )}
                      </>
                    )}
                  </p>
                  <Button
                    size="sm"
                    className="w-full"
                    disabled={!it.outUrl}
                    onClick={() => download(it)}
                  >
                    <Download /> 下载 WebP
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}

      {/* 说明 */}
      <div className="mt-8 rounded-lg border bg-muted/30 p-4 text-xs leading-5 text-muted-foreground">
        <p className="font-medium text-foreground">说明</p>
        <ul className="mt-1 list-disc pl-4">
          <li>全程浏览器 Canvas 处理，不上传服务器，适合隐私图。</li>
          <li>默认质量 80%，人眼几乎无损，体积通常省 60-90%（参考：站内 `l/*.webp 1600px q80`）。</li>
          <li>批量最多 20 张，需更多可分批下载。</li>
        </ul>
      </div>
    </div>
  )
}
