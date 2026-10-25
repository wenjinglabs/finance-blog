import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPost, getPosts } from "@/lib/posts"
import { PostView } from "@/components/post-view"
import { alternatesFor, zhMeta } from "@/lib/seo"

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug)
  if (!post?.zh) return {}
  return {
    ...zhMeta(`${post.zh.title} | GGAAG 财经笔记`),
    description: post.zh.description,
    ...alternatesFor(`/zh/posts/${post.slug}`, `/posts/${post.slug}`),
    openGraph: {
      title: post.zh.title,
      description: post.zh.description,
      url: `/zh/posts/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
  }
}

export default async function ZhPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const post = getPost(slug)
  if (!post) notFound()

  const ordered = getPosts()
  const idx = ordered.findIndex((p) => p.slug === slug)
  const toNav = (p?: (typeof ordered)[number]) =>
    p ? { slug: p.slug, title: p.title, zhTitle: p.zh?.title } : undefined

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.zh?.title ?? post.title,
    description: post.zh?.description ?? post.description,
    inLanguage: "zh-CN",
    datePublished: post.date,
    mainEntityOfPage: `https://blog.ggaag.com/zh/posts/${post.slug}`,
    image: "https://blog.ggaag.com/og.png",
    author: { "@type": "Person", name: "GGAAG", url: "https://blog.ggaag.com/zh/about" },
    publisher: { "@type": "Organization", name: "GGAAG 财经笔记", url: "https://blog.ggaag.com/zh" },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PostView post={post} prev={toNav(ordered[idx - 1])} next={toNav(ordered[idx + 1])} lang="zh" />
    </>
  )
}
