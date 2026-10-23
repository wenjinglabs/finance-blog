"use client"

import Script from "next/script"

/**
 * AdSense 广告位。
 * - NEXT_PUBLIC_ADSENSE_CLIENT 未设置（未过审/未配置）时整块不渲染，不影响构建与审核。
 * - 过审后在部署环境变量里设置 NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxx 即生效。
 */
export function AdSlot({ slot, className }: { slot: string; className?: string }) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT
  if (!client) return null

  return (
    <div className={className}>
      <ins
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <Script id={`ads-push-${slot}`} strategy="afterInteractive">
        {`(adsbygoogle=window.adsbygoogle||[]).push({})`}
      </Script>
    </div>
  )
}

/** AdSense 库加载器，放在 layout；未配置 client 时不输出任何内容。 */
export function AdSenseLoader() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT
  if (!client) return null

  return (
    <Script
      id="adsense-loader"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}
