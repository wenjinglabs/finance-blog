import type { Metadata } from "next"
import PdfClient from "./pdf-client"

export const metadata: Metadata = {
  title: "PDF 压缩 - 免费在线压小 PDF | ggaag",
  description: "免费在线 PDF 压缩，浏览器本地栅格化重压，不上传服务器。适合扫描件/大图 PDF 快速压小。",
  alternates: { canonical: "/pdf" },
  openGraph: {
    title: "PDF 压缩 - 免费在线压小 PDF",
    description: "本地处理不上传，拖拽即压，清晰度可调",
    url: "/pdf",
    type: "website",
  },
}

export default function PdfPage() {
  return <PdfClient />
}
