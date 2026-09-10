import type { Metadata } from "next"
import Gallery from "@/components/gallery"

export const metadata: Metadata = {
  title: "酱の相簿 | 梗酱",
  description: "我的图库 + 吉卜力剧照 550 枚",
  alternates: { canonical: "/blog/pics" },
}

export default function PicsPage() {
  return <Gallery />
}
