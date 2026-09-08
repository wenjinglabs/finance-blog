"use client"
import { useCallback, useEffect, useRef, useState } from "react"
import { Download, Image as ImageIcon, Upload, X } from "lucide-react"
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
  const bmp = await createImageBitmap(file)
  const canvas = document.createElement("canvas")
  canvas.width = bmp.width
  canvas.height = bmp.height
  const ctx = canvas.getContext("2d")!
  ctx.drawImage(bmp, 0, 0)
  bmp.close()
  const blob: Blob = await new Promise((res, rej) =>
    canvas.toBlob((b) => (b ? res(b) : rej(new Error("toBlob null"))), "image/webp", quality)
  )
  return { blob, w: canvas.width, h: canvas.height }
}

export default function CompressClient() {
  const [q, setQ] = useState(80)
  const [items, setItems] = useState<Item[]>([])
  const [dragOver, setDragOver] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const single = items.length === 1 ? items[0] : null

  const convert = useCallback(async (file: File, quality: number) => {
    const id = Math.random().toString(36).slice(2)
    const url = URL.createObjectURL(file)
    // 快照尺寸先用 createImageBitmap 拿，避免等 img onload
    let w = 0, h = 0
    try {
      const bmp = await createImageBitmap(file)
      w = bmp.width; h = bmp.height; bmp.close()
    } catch {}
    setItems((prev) => [...prev, { id, file, url, w, h, outUrl: null, outBlob: null, outSize: null, loading: true }])
    try {
      const { blob } = await toWebp(file, quality / 100)
      const outUrl = URL.createObjectURL(blob)
      setItems((prev) => prev.map((it) => (it.id === id ? { ...it, outUrl, outBlob: blob, outSize: blob.size, loading: false } : it)))
    } catch {
      setItems((prev) => prev.map((it) => (it.id === id ? { ...it, loading: false } : it)))
    }
  }, [])

  const onFiles = useCallback((files: FileList | File[]) => {
    const arr = Array.from(files).filter((f) => f.type.startsWith("image/"))
    if (arr.length === 0) return
    // 单图模式：清掉旧的，保持一屏
    setItems((prev) => {
      prev.forEach((p) => { URL.revokeObjectURL(p.url); if (p.outUrl) URL.revokeObjectURL(p.outUrl) })
      return []
    })
    arr.slice(0, 20).forEach((f) => convert(f, q))
  }, [convert, q])

  // 滑杆自动重转（防抖 300ms）
  const qRef = useRef(q)
  qRef.current = q
  useEffect(() => {
    if (items.length === 0) return
    const t = setTimeout(async () => {
      const quality = qRef.current
      setItems((prev) => prev.map((p) => ({ ...p, loading: true })))
      const res = await Promise.all(items.map(async (it) => {
        try { const { blob } = await toWebp(it.file, quality / 100); return { id: it.id, blob, url: URL.createObjectURL(blob) } }
        catch { return { id: it.id, blob: null as Blob | null, url: null as string | null } }
      }))
      setItems((prev) => prev.map((p) => {
        const r = res.find((x) => x.id === p.id)
        if (!r || !r.blob || !r.url) return { ...p, loading: false }
        if (p.outUrl) URL.revokeObjectURL(p.outUrl)
        return { ...p, outUrl: r.url, outBlob: r.blob, outSize: r.blob.size, loading: false }
      }))
    }, 320)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q])

  const remove = (id: string) => {
    setItems((prev) => {
      const it = prev.find((p) => p.id === id)
      if (it) { URL.revokeObjectURL(it.url); if (it.outUrl) URL.revokeObjectURL(it.outUrl) }
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

  const downloadZip = async () => {
    const ready = items.filter((it) => it.outBlob)
    if (ready.length === 0) return
    const JSZip = (await import("jszip")).default
    const zip = new JSZip()
    ready.forEach((it) => zip.file(it.file.name.replace(/\.[^.]+$/, "") + ".webp", it.outBlob!))
    const blob = await zip.generateAsync({ type: "blob" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a"); a.href = url; a.download = `compress-${Date.now()}.zip`; a.click()
    setTimeout(() => URL.revokeObjectURL(url), 5000)
  }

  // 一屏布局：无滚动
  if (items.length === 0) {
    return (
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">图片压缩</h1>
          <p className="mt-1 text-sm text-muted-foreground">拖拽即转 WebP · 本地处理不上传 · 一页完成</p>
        </div>
        <Card
          onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => { e.preventDefault(); setDragOver(false); onFiles(e.dataTransfer.files) }}
          className={"flex flex-1 items-center justify-center border-dashed py-16 transition-colors " + (dragOver ? "border-foreground bg-muted" : "hover:border-foreground/30")}
        >
          <CardContent className="flex flex-col items-center gap-3 py-6">
            <div className="flex size-12 items-center justify-center rounded-full bg-muted"><Upload className="size-6" /></div>
            <p className="text-sm font-medium">拖拽图片到这里</p>
            <p className="text-xs text-muted-foreground">或点击选择 · JPG/PNG/WebP · 自动转</p>
            <Button size="sm" onClick={() => inputRef.current?.click()}><ImageIcon />选择图片</Button>
            <input ref={inputRef} type="file" accept="image/*" multiple className="hidden" onChange={(e) => e.target.files && onFiles(e.target.files)} />
          </CardContent>
        </Card>
        <p className="text-center text-xs text-muted-foreground">默认 80% · 人眼无损，通常省 60-90%</p>
      </div>
    )
  }

  // 单图：一屏无滚动，骨架屏，傻瓜操作
  if (single) {
    const saving = single.outSize !== null ? ((1 - single.outSize / single.file.size) * 100).toFixed(0) : null
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight">图片压缩</h1>
          <Button variant="outline" size="sm" onClick={() => { remove(single.id) }}><X />换一张</Button>
        </div>

        {/* 预设：傻瓜式 */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { l: "小文件", v: 60 },
            { l: "均衡", v: 80 },
            { l: "高清", v: 92 },
          ].map((p) => (
            <Button key={p.v} size="sm" variant={q === p.v ? "default" : "outline"} onClick={() => setQ(p.v)}>{p.l} {p.v}%</Button>
          ))}
          <span className="ml-2 text-xs text-muted-foreground">点一下自动重转</span>
          <input type="range" min={40} max={95} value={q} onChange={(e) => setQ(Number(e.target.value))} className="ml-2 h-2 w-28 accent-foreground" />
          <span className="text-xs font-medium">{q}%</span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {/* 原图 */}
          <Card className="overflow-hidden">
            <div className="flex h-7 items-center px-3 text-xs font-medium text-muted-foreground">原图 · {fmt(single.file.size)} · {single.w ? `${single.w}×${single.h}` : ""}</div>
            <div className="aspect-[4/3] bg-muted p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={single.url} alt="orig" className="h-full w-full object-contain" />
            </div>
          </Card>
          {/* 结果：骨架屏 */}
          <Card className="overflow-hidden">
            <div className="flex h-7 items-center justify-between px-3 text-xs font-medium">
              <span className="text-muted-foreground">WebP · {single.outSize !== null ? fmt(single.outSize) : "—"}</span>
              {saving !== null && Number(saving) > 0 && <span className="rounded bg-green-500/10 px-1.5 py-0.5 text-green-700 dark:text-green-400">省 {saving}%</span>}
            </div>
            <div className="aspect-[4/3] bg-muted p-2">
              {single.loading ? (
                <div className="h-full w-full animate-pulse rounded bg-background/60" />
              ) : single.outUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={single.outUrl} alt="webp" className="h-full w-full object-contain" />
              ) : (
                <div className="flex h-full items-center justify-center text-xs text-muted-foreground">转换失败</div>
              )}
            </div>
          </Card>
        </div>

        <Button className="w-full" disabled={!single.outUrl || single.loading} onClick={() => download(single)}>
          <Download />{single.loading ? "转换中…" : "下载 WebP"}
        </Button>
        <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files && onFiles(e.target.files)} />
      </div>
    )
  }

  // 多图：极简列表（保留批量）
  const done = items.filter((it) => it.outSize !== null)
  const totalIn = done.reduce((s, it) => s + it.file.size, 0)
  const totalOut = done.reduce((s, it) => s + (it.outSize ?? 0), 0)
  const totalSaving = totalIn > 0 ? ((1 - totalOut / totalIn) * 100).toFixed(0) : null
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">图片压缩 · {items.length} 张</h1>
        <Button variant="outline" size="sm" onClick={() => setItems((prev) => { prev.forEach((p) => { URL.revokeObjectURL(p.url); if (p.outUrl) URL.revokeObjectURL(p.outUrl) }); return [] })}>清空</Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium">质量 {q}%</span>
        <input type="range" min={40} max={95} value={q} onChange={(e) => setQ(Number(e.target.value))} className="h-2 w-28 accent-foreground" />
        <span className="text-xs text-muted-foreground">自动重转</span>
        <span className="ml-auto text-xs text-muted-foreground">{done.length}/{items.length} 已完成{totalSaving ? ` · 省 ${totalSaving}%` : ""}</span>
      </div>
      <div className="flex gap-2">
        <Button size="sm" onClick={downloadZip} disabled={done.length === 0}><Download />打包 ZIP</Button>
        <Button size="sm" variant="outline" onClick={() => inputRef.current?.click()}>继续添加</Button>
      </div>
      <div className="grid gap-2 sm:grid-cols-3">
        {items.map((it) => (
          <Card key={it.id} className="overflow-hidden">
            <div className="relative aspect-square bg-muted">
              {it.loading ? <div className="h-full w-full animate-pulse bg-background/60" /> : <img src={it.outUrl || it.url} alt={it.file.name} className="h-full w-full object-contain p-1" />}
              <button onClick={() => remove(it.id)} className="absolute right-1 top-1 rounded-full bg-background p-1 shadow"><X className="size-3" /></button>
            </div>
            <div className="p-2 text-xs">
              <p className="truncate font-medium">{it.file.name}</p>
              <p className="text-muted-foreground">{fmt(it.file.size)}{it.outSize !== null ? ` → ${fmt(it.outSize)}` : ""}</p>
            </div>
          </Card>
        ))}
      </div>
      <input ref={inputRef} type="file" accept="image/*" multiple className="hidden" onChange={(e) => e.target.files && onFiles(e.target.files)} />
    </div>
  )
}
