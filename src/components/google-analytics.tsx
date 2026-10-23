"use client"

import { useEffect } from "react"
import Script from "next/script"
import { usePathname } from "next/navigation"

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-05HJJXMSY6"

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * GA4 接入。
 * - 自动 page_view 关掉（send_page_view: false），改由 App Router 的 pathname 变化手动上报，
 *   否则 SPA 内部跳转不会产生 page_view、首次加载又可能重复计数。
 * - 只上报 pathname，不带 query string，避免把敏感参数送进 GA。
 * - 开发环境不加载，防止污染真实数据。
 */
export function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return
    if (typeof window.gtag !== "function") return

    window.gtag("event", "page_view", {
      page_path: pathname,
      page_location: window.location.origin + pathname,
      page_title: document.title,
    })
  }, [pathname])

  if (process.env.NODE_ENV !== "production") return null

  return (
    <>
      <Script
        id="ga-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}',{send_page_view:false});`}
      </Script>
    </>
  )
}
