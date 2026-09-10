"use client"
import { useRef, useState } from "react"
import { Download, FileDown, Loader2, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

function fmt(n: number) {
  if (n < 1024) return n + " B"
  if (n < 1024 * 1024) return (n / 1024).toFixed(1) + " KB"
  return (n / 1024 / 1024).toFixed(2) + " MB"
}

async function compressPdf(file: File, quality: number, scale: number): Promise<Blob> {
  const pdfjs: any = await import("pdfjs-dist")
  // worker 使用 CDN，保持 bundle 小；本地处理无需额外 worker 文件可走 fakeWorker
  // pdfjs-dist 5 的 legacy 构建自动处理
  try {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@5.4.296/build/pdf.worker.min.mjs`
  } catch {}
  const buf = await file.arrayBuffer()
  const doc = await pdfjs.getDocument({ data: buf, useWorkerFetch: true, isEvalSupported: false }).promise
  const { PDFDocument } = await import("pdf-lib")
  const out = await PDFDocument.create()
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i)
    const viewport = page.getViewport({ scale })
    const canvas = document.createElement("canvas")
    canvas.width = viewport.width
    canvas.height = viewport.height
    const ctx = canvas.getContext("2d")!
    // 白底，避免透明转黑
    ctx.fillStyle = "#fff"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    await page.render({ canvasContext: ctx, viewport }).promise
    const blob: Blob = await new Promise((res, rej) =>
      canvas.toBlob((b) => (b ? res(b) : rej(new Error("toBlob null"))), "image/jpeg", quality)
    )
    const bytes = new Uint8Array(await blob.arrayBuffer())
    const img = await out.embedJpg(bytes)
    const p = out.addPage([img.width, img.height])
    p.drawImage(img, { x: 0, y: 0, width: img.width, height: img.height })
  }
  const bytes = await out.save()
  return new Blob([new Uint8Array(bytes) as any], { type: "application/pdf" })
}

export default function PdfClient() {
  const [q, setQ] = useState(70)
  const [scale, setScale] = useState(1.5)
  const [file, setFile] = useState<File | null>(null)
  const [outBlob, setOutBlob] = useState<Blob | null>(null)
  const [outUrl, setOutUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState<string | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const onFile = (f: File) => {
    if (f.type !== "application/pdf" && !f.name.toLowerCase().endsWith(".pdf")) return
    if (outUrl) URL.revokeObjectURL(outUrl)
    setFile(f); setOutBlob(null); setOutUrl(null); setErr(null)
  }

  const run = async () => {
    if (!file) return
    setLoading(true); setErr(null)
    try {
      const blob = await compressPdf(file, q / 100, scale)
      const url = URL.createObjectURL(blob)
      if (outUrl) URL.revokeObjectURL(outUrl)
      setOutBlob(blob); setOutUrl(url)
    } catch (e: any) {
      setErr(e?.message || "压缩失败，试试更低清晰度或更小文件")
    } finally { setLoading(false) }
  }

  const download = () => {
    if (!outUrl || !file) return
    const a = document.createElement("a"); a.href = outUrl
    a.download = file.name.replace(/\.pdf$/i, "") + "-compressed.pdf"; a.click()
  }

  if (!file) {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="text-lg font-semibold tracking-tight">PDF 压缩</h1>
        <p className="text-sm text-muted-foreground">本地栅格化重压 · 不上传服务器 · 适合扫描件/图片型 PDF，矢量 PDF 会转位图</p>
        <Card onDragOver={(e) => { e.preventDefault(); setDragOver(true) }} onDragLeave={() => setDragOver(false)} onDrop={(e) => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) onFile(f) }} className={"flex items-center justify-center border-dashed py-16 transition-colors " + (dragOver ? "border-foreground bg-muted" : "hover:border-foreground/30")}>
          <CardContent className="flex flex-col items-center gap-3 py-6">
            <div className="flex size-12 items-center justify-center rounded-full bg-muted"><Upload className="size-6" /></div>
            <p className="text-sm font-medium">拖拽 PDF 到这里</p>
            <p className="text-xs text-muted-foreground">或点击选择 · 建议 &lt; 25MB</p>
            <Button size="sm" onClick={() => inputRef.current?.click()}><FileDown />选择 PDF</Button>
            <input ref={inputRef} type="file" accept="application/pdf,.pdf" className="hidden" onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])} />
          </CardContent>
        </Card>
        <p className="text-center text-xs text-muted-foreground">浏览器本地处理 · 不经过服务器 · 大文件可能吃内存</p>
      </div>
    )
  }

  const saving = outBlob ? ((1 - outBlob.size / file.size) * 100).toFixed(0) : null
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold tracking-tight">PDF 压缩</h1>
        <Button variant="outline" size="sm" onClick={() => { if (outUrl) URL.revokeObjectURL(outUrl); setFile(null); setOutBlob(null); setOutUrl(null); setErr(null) }}><X />换一个</Button>
      </div>
      <p className="truncate text-xs text-muted-foreground">{file.name} · {fmt(file.size)}</p>
      <Card className="p-3">
        <div className="flex flex-wrap items-center gap-2">
          {[{ l: "更小", v: 50 }, { l: "均衡", v: 70 }, { l: "清晰", v: 85 }].map((p) => (
            <Button key={p.v} size="sm" variant={q === p.v ? "default" : "outline"} onClick={() => setQ(p.v)}>{p.l} {p.v}%</Button>
          ))}
          <input type="range" min={30} max={90} value={q} onChange={(e) => setQ(Number(e.target.value))} className="ml-1 h-2 w-24 accent-foreground" />
          <span className="text-xs font-medium">{q}%</span>
          <span className="ml-2 text-xs text-muted-foreground">清晰度</span>
          <select value={scale} onChange={(e) => setScale(Number(e.target.value))} className="ml-2 h-7 rounded-md border border-input bg-background px-2 text-xs">
            <option value={1.0}>1.0× 最小</option>
            <option value={1.5}>1.5× 推荐</option>
            <option value={2.0}>2.0× 高清</option>
          </select>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">矢量 PDF 会被栅格化为图片，文件可能变大；扫描件 PDF 压小效果最好。</p>
      </Card>
      <Button onClick={run} disabled={loading}>{loading ? <><Loader2 className="animate-spin" /> 压缩中… 可能需 10-30 秒</> : "开始压缩"}</Button>
      {err && <p className="text-sm text-destructive">{err}</p>}
      {outBlob && outUrl && (
        <Card className="p-3">
          <div className="flex items-center justify-between text-sm">
            <span>结果 · {fmt(outBlob.size)}{saving !== null && Number(saving) > 0 ? <span className="ml-2 rounded bg-green-500/10 px-1.5 py-0.5 text-green-700 dark:text-green-400">省 {saving}%</span> : saving !== null && Number(saving) < 0 ? <span className="ml-2 rounded bg-amber-500/10 px-1.5 py-0.5 text-amber-700">大了 {Math.abs(Number(saving))}%</span> : null}</span>
            <Button size="sm" onClick={download}><Download />下载 PDF</Button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">已在本地生成，无需上传。下载后对比清晰度是否可接受。</p>
        </Card>
      )}
      <input ref={inputRef} type="file" accept="application/pdf,.pdf" className="hidden" onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])} />
    </div>
  )
}
