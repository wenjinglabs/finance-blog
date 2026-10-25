import type { Metadata } from "next"
import Gallery from "@/components/gallery"
import { alternatesFor, zhMeta } from "@/lib/seo"

export const metadata: Metadata = {
  ...zhMeta("相簿 | GGAAG"),
  ...alternatesFor("/zh/pics", "/zh/pics"),
}

export default function ZhPics() {
  return <Gallery />
}
