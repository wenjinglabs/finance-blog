import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPost, getPosts } from "@/lib/posts"
import { PostView } from "@/components/post-view"

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug)
  if (!post) return {}
  return {
    title: `${post.title} | GGAAG Finance Notes`,
    description: post.description,
    alternates: { canonical: `/posts/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/posts/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const post = getPost(slug)
  if (!post) notFound()

  // 按站内排序（新→旧）计算上下篇：prev 更新的一篇，next 更旧的一篇
  const ordered = getPosts()
  const idx = ordered.findIndex((p) => p.slug === slug)
  const toNav = (p?: (typeof ordered)[number]) =>
    p ? { slug: p.slug, title: p.title, zhTitle: p.zh?.title } : undefined
  const prev = toNav(ordered[idx - 1])
  const next = toNav(ordered[idx + 1])

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    mainEntityOfPage: `https://blog.ggaag.com/posts/${post.slug}`,
    image: "https://blog.ggaag.com/og.png",
    author: { "@type": "Person", name: "GGAAG", url: "https://blog.ggaag.com/about" },
    publisher: { "@type": "Organization", name: "GGAAG Finance Notes", url: "https://blog.ggaag.com" },
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PostView post={post} prev={prev} next={next} />
    </>
  )
}
