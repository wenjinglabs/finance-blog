import type { Block, Post } from "@/content"
import type { Lang } from "@/lib/language"

/**
 * 阅读时长估算：英文按词数（~220 词/分钟），中文按字数（~350 字/分钟）。
 * 列表页传入的对象没有 blocks 时按描述文本粗估。
 */
export function readingMinutes(
  post: Pick<Post, "zh"> & { blocks?: Block[]; description?: string },
  lang: Lang
): number {
  const source =
    lang === "zh" && post.zh ? post.zh.blocks : (post.blocks ?? [{ t: "p", text: post.description ?? "" }] as Block[])
  let words = 0
  let chars = 0
  const count = (s: string) => {
    const en = s.match(/[a-zA-Z0-9'’]+/g)?.length ?? 0
    const zh = s.match(/[\u4e00-\u9fff]/g)?.length ?? 0
    words += en
    chars += zh
  }
  for (const b of source) {
    if ("text" in b) count(b.text)
    if ("items" in b) for (const i of b.items) count(i)
  }
  const minutes = Math.max(words / 220, chars / 350)
  return Math.max(1, Math.round(minutes))
}
