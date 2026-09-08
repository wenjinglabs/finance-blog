"use client"
import { useCallback, useEffect, useRef, useState } from "react"
import { Check, Download, Image as ImageIcon, Loader2, Upload, X } from "lucide-react"
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

async function toWebp(file: File, quality: number): Promise<{ blob: Blob }> {
  const bmp = await createImageBitmap(file)
  const canvas = document.createElement("canvas")
  canvas.width = bmp.width
  canvas.height = bmp.height
  canvas.getContext("2d")!.drawImage(bmp, 0, 0)
  bmp.close()
  const blob: Blob = await new Promise((res, rej) =>
    canvas.toBlob((b) => (b ? res(b) : rej(new Error("toBlob null"))), "image/webp", quality)
  )
  return { blob }
}

function Steps({ step }: { step: 1 | 2 | 3 }) {
  const s = (n: number) => (step === n ? "bg-foreground text-background" : step > n ? "bg-green-500 text-white" : "bg-muted text-muted-foreground")
  const label = (n: number, t: string) => (
    <span className="flex items-center gap-1.5 text-xs">
      <span className={"flex size-5 items-center justify-center rounded-full text-xs font-medium " + s(n)}>{step > n ? <Check className="size-3" /> : n}</span>
      <span className={step === n ? "font-medium text-foreground" : "text-muted-foreground"}>{t}</span>
    </span>
  )
  return (
    <div className="flex items-center gap-2">
      {label(1, "选图")}<span className="h-px w-6 bg-border" />{label(2, "压缩")}<span className="h-px w-6 bg-border" />{label(3, "下载")}
    </div>
  )
}

export default function CompressClient() {
  const [q, setQ] = useState(80)
  const [targetKb, setTargetKb] = useState("")
  const [targeting, setTargeting] = useState(false)
  const [items, setItems] = useState<Item[]>([])
  const [dragOver, setDragOver] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const single = items.length === 1 ? items[0] : null
  const step: 1 | 2 | 3 = items.length === 0 ? 1 : single?.loading || targeting ? 2 : single?.outUrl ? 3 : 2

  const convert = useCallback(async (file: File, quality: number) => {
    const id = Math.random().toString(36).slice(2)
    const url = URL.createObjectURL(file)
    let w = 0, h = 0
    try { const bmp = await createImageBitmap(file); w = bmp.width; h = bmp.height; bmp.close() } catch {}
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
    setItems((prev) => { prev.forEach((p) => { URL.revokeObjectURL(p.url); if (p.outUrl) URL.revokeObjectURL(p.outUrl) }); return [] })
    arr.slice(0, 20).forEach((f) => convert(f, q))
  }, [convert, q])

  // 滑杆自动重转（单张才自动，避免批量狂转）
  const qRef = useRef(q); qRef.current = q
  useEffect(() => {
    if (items.length !== 1) return
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

  const runTarget = async () => {
    if (!single) return
    const kb = Number(targetKb)
    if (!kb || kb <= 0) return
    const target = kb * 1024
    setTargeting(true)
    setItems((prev) => prev.map((p) => ({ ...p, loading: true })))
    // 二分找最高满足体积的质量
    let lo = 20, hi = 92, best: { blob: Blob; q: number } | null = null
    let candidate: Blob | null = null
    // 先试 80 看是否已满足
    for (let iter = 0; iter < 7; iter++) {
      const mid = Math.floor((lo + hi) / 2)
      const { blob } = await toWebp(single.file, mid / 100)
      candidate = blob
      if (blob.size <= target) { best = { blob, q: mid }; lo = mid + 1 } else { hi = mid - 1 }
      if (lo > hi) break
    }
    const final = best ?? (candidate ? { blob: candidate, q: hi } : null)
    if (final) {
      const url = URL.createObjectURL(final.blob)
      if (single.outUrl) URL.revokeObjectURL(single.outUrl)
      setQ(final.q)
      setItems((prev) => prev.map((p) => ({ ...p, outUrl: url, outBlob: final.blob, outSize: final.blob.size, loading: false })))
    } else {
      setItems((prev) => prev.map((p) => ({ ...p, loading: false })))
    }
    setTargeting(false)
  }

  const remove = (id: string) => {
    setItems((prev) => {
      const it = prev.find((p) => p.id === id)
      if (it) { URL.revokeObjectURL(it.url); if (it.outUrl) URL.revokeObjectURL(it.outUrl) }
      return prev.filter((p) => p.id !== id)
    })
  }
  const download = (it: Item) => {
    if (!it.outUrl) return
    const a = document.createElement("a"); a.href = it.outUrl; a.download = it.file.name.replace(/\.[^.]+$/, "") + ".webp"; a.click()
  }
  const downloadZip = async () => {
    const ready = items.filter((it) => it.outBlob)
    if (ready.length === 0) return
    const JSZip = (await import("jszip")).default; const zip = new JSZip()
    ready.forEach((it) => zip.file(it.file.name.replace(/\.[^.]+$/, "") + ".webp", it.outBlob!))
    const blob = await zip.generateAsync({ type: "blob" })
    const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = `compress-${Date.now()}.zip`; a.click()
    setTimeout(() => URL.revokeObjectURL(url), 5000)
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight">图片压缩</h1>
          <Steps step={1} />
        </div>
        <p className="text-sm text-muted-foreground">第 1 步 · 选一张图，自动转 WebP，不上传</p>
        <Card
          onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => { e.preventDefault(); setDragOver(false); onFiles(e.dataTransfer.files) }}
          className={"flex items-center justify-center border-dashed py-16 transition-colors " + (dragOver ? "border-foreground bg-muted" : "hover:border-foreground/30")}
        >
          <CardContent className="flex flex-col items-center gap-3 py-6">
            <div className="flex size-12 items-center justify-center rounded-full bg-muted"><Upload className="size-6" /></div>
            <p className="text-sm font-medium">拖拽图片到这里</p>
            <p className="text-xs text-muted-foreground">或点击选择 · JPG/PNG/WebP</p>
            <Button size="sm" onClick={() => inputRef.current?.click()}><ImageIcon />选择图片</Button>
            <input ref={inputRef} type="file" accept="image/*" multiple className="hidden" onChange={(e) => e.target.files && onFiles(e.target.files)} />
          </CardContent>
        </Card>
        <p className="text-center text-xs text-muted-foreground">本地处理 · 默认 80% · 通常省 60-90%</p>
      </div>
    )
  }

  if (single) {
    const saving = single.outSize !== null ? ((1 - single.outSize / single.file.size) * 100).toFixed(0) : null
    return (
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight">图片压缩</h1>
          <Steps step={step} />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{step === 2 ? "第 2 步 · 选清晰度或压到指定大小" : step === 3 ? "第 3 步 · 完成，下一步下载" : "第 2 步"}</p>
          <Button variant="outline" size="sm" onClick={() => remove(single.id)}><X />换一张</Button>
        </div>

        {/* 第2步控件：预设+目标体积 */}
        <Card className="p-3">
          <div className="flex flex-wrap items-center gap-2">
            {[{ l: "小文件", v: 60 }, { l: "均衡", v: 80 }, { l: "高清", v: 92 }].map((p) => (
              <Button key={p.v} size="sm" variant={q === p.v ? "default" : "outline"} onClick={() => setQ(p.v)}>{p.l} {p.v}%</Button>
            ))}
            <input type="range" min={40} max={95} value={q} onChange={(e) => setQ(Number(e.target.value))} className="ml-1 h-2 w-24 accent-foreground" />
            <span className="text-xs font-medium">{q}%</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-xs text-muted-foreground">或压到</span>
            <input value={targetKb} onChange={(e) => setTargetKb(e.target.value.replace(/[^\d]/g, ""))} placeholder="500" className="flex h-7 w-20 rounded-md border border-input bg-background px-2 text-sm outline-none focus-visible:ring-1 focus-visible:ring-ring" inputMode="numeric" />
            <span className="text-xs text-muted-foreground">KB 以内</span>
            <Button size="sm" variant="outline" disabled={targeting || !targetKb} onClick={runTarget}>{targeting ? <Loader2 className="animate-spin" /> : "一键压"}</Button>
            <span className="text-xs text-muted-foreground">自动找最高清晰度</span>
          </div>
        </Card>

        <div className="grid gap-3 sm:grid-cols-2">
          <Card className="overflow-hidden">
            <div className="flex h-7 items-center px-3 text-xs font-medium text-muted-foreground">原图 · {fmt(single.file.size)} · {single.w ? `${single.w}×${single.h}` : ""}</div>
            <div className="aspect-[4/3] bg-muted p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={single.url} alt="orig" className="h-full w-full object-contain" />
            </div>
          </Card>
          <Card className="overflow-hidden">
            <div className="flex h-7 items-center justify-between px-3 text-xs font-medium">
              <span className="text-muted-foreground">WebP · {single.outSize !== null ? fmt(single.outSize) : "—"}</span>
              {saving !== null && Number(saving) > 0 && <span className="rounded bg-green-500/10 px-1.5 py-0.5 text-green-700 dark:text-green-400">省 {saving}%</span>}
            </div>
            <div className="aspect-[4/3] bg-muted p-2">
              {single.loading || targeting ? <div className="h-full w-full animate-pulse rounded bg-background/60" /> : single.outUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={single.outUrl} alt="webp" className="h-full w-full object-contain" />
              ) : <div className="flex h-full items-center justify-center text-xs text-muted-foreground">转换失败</div>}
            </div>
          </Card>
        </div>

        <Button className="w-full" disabled={!single.outUrl || single.loading || targeting} onClick={() => download(single)}>
          <Download />{single.loading || targeting ? "处理中…" : "下载 WebP — 第 3 步"}
        </Button>
        <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files && onFiles(e.target.files)} />
      </div>
    )
  }

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
      <Steps step={items.some((it) => it.loading) ? 2 : 3} />
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium">质量 {q}%</span>
        <input type="range" min={40} max={95} value={q} onChange={(e) => setQ(Number(e.target.value))} className="h-2 w-24 accent-foreground" />
        <span className="text-xs text-muted-foreground">改完自动重转</span>
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
