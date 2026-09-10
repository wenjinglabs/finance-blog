import type { Metadata } from "next"
import Link from "next/link"
import { FileDown, ImageDown, Images, Wrench } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "ggaag - 免费在线工具箱",
  description: "免费在线工具箱 · 图片压缩转WebP、PDF压缩等，浏览器本地处理，不上传服务器。",
  alternates: { canonical: "/" },
}

const tools = [
  {
    href: "/compress",
    title: "图片压缩",
    desc: "JPG/PNG 转 WebP · 拖拽即压 · 本地处理",
    Icon: ImageDown,
    badge: "热门",
  },
  {
    href: "/blog/pics",
    title: "酱の相簿",
    desc: "我的图库 + 吉卜力剧照 550 枚",
    Icon: Images,
  },
  {
    href: "/blog",
    title: "技术博客",
    desc: "梗酱背后的技术笔记",
    Icon: FileDown,
  },
]

export default function ToolsHome() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="inline-flex items-center gap-2 text-3xl font-semibold tracking-tight">
          <Wrench className="size-7" />
          ggaag 工具箱
        </h1>
        <p className="mt-2 text-muted-foreground">免费 · 本地处理不上传 · 打开即用</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {tools.map((t) => (
          <Link key={t.href} href={t.href}>
            <Card className="h-full transition-colors hover:border-foreground/20 hover:bg-muted/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <t.Icon className="size-5" />
                  {t.title}
                  {t.badge && <span className="rounded-full bg-foreground px-2 py-0.5 text-xs text-background">{t.badge}</span>}
                </CardTitle>
                <CardDescription>{t.desc}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
      <p className="mt-8 text-xs text-muted-foreground">后续 PDF 压缩等工具直接在此加卡片即可（纯前端本地处理）。</p>
    </div>
  )
}
