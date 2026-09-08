import type { Metadata } from "next"
import CompressClient from "./compress-client"

export const metadata: Metadata = {
  title: "图片压缩 - 免费在线 WebP 转换 | 梗酱",
  description: "免费在线图片压缩，拖拽即转 WebP，无广告不上传，浏览器本地处理。支持 JPG/PNG 转 WebP，质量可调，批量处理。",
  alternates: { canonical: "/compress" },
  openGraph: {
    title: "图片压缩 - 免费在线 WebP 转换",
    description: "拖拽即转 WebP，浏览器本地处理，不上传服务器",
    url: "/compress",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
}

export default function CompressPage() {
  return <CompressClient />
}
