import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { StripRsc } from "@/components/strip-rsc"
import { GoogleAnalytics } from "@/components/google-analytics"
import { AdSenseLoader } from "@/components/ad-slot"
import { LanguageProvider } from "@/lib/language"
import { SiteNav, FooterText, FooterSeparator } from "@/components/site-chrome"
import { BackToTop } from "@/components/back-to-top"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.ggaag.com"),
  title: "GGAAG Finance Notes — Practical Personal Finance & Investing",
  description:
    "Practical notes on personal finance: cash flow tracking, emergency funds, index fund investing, asset allocation, and spotting scams. Written from real experience, with the math shown.",
  alternates: { canonical: "/" },
  verification: { google: "1-X-DrfXE3bRsRBqD-_JCCkkjHSkgw_lDImvjK216H0" },
  openGraph: {
    title: "GGAAG Finance Notes",
    description:
      "Practical notes on personal finance: cash flow, emergency funds, index funds, asset allocation, and scam awareness.",
    url: "/",
    siteName: "GGAAG Finance Notes",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "GGAAG Finance Notes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GGAAG Finance Notes",
    description:
      "Practical notes on personal finance: cash flow, emergency funds, index funds, asset allocation, and scam awareness.",
    images: ["/og.png"],
  },
}

/**
 * 水合前执行：若上次选择的语言是中文，先隐藏内容，
 * 避免"SSR 英文闪现后变中文"。LanguageProvider 水合后移除 lang-pending。
 */
const LANG_PREPAINT =
  // 1) esbuild/Turbopack keepNames 的内联脚本（next-themes 主题引导）会调用 __name，
  //    但打包器没把辅助函数带上——在此补一个全局 shim，避免 ReferenceError。
  `window.__name=window.__name||function(f,n){try{Object.defineProperty(f,"name",{value:n,configurable:true})}catch(e){}return f};` +
  `try{if(localStorage.getItem("lang")==="zh"){document.documentElement.classList.add("lang-pending")}}catch(e){}`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <script dangerouslySetInnerHTML={{ __html: LANG_PREPAINT }} />
        <GoogleAnalytics />
        <AdSenseLoader />
        <StripRsc />
        <ThemeProvider>
          <LanguageProvider>
            <SiteNav />
            <main className="w-full px-4 sm:px-6 lg:px-8 py-10">{children}</main>
            <footer className="w-full px-4 sm:px-6 lg:px-8 pb-10">
              <FooterSeparator />
              <FooterText />
            </footer>
          </LanguageProvider>
        </ThemeProvider>
        <BackToTop />
      </body>
    </html>
  )
}
