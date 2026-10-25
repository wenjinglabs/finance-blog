import type { ReactNode } from "react"
import type { Metadata } from "next"
import { LanguageProvider } from "@/lib/language"
import { StripRsc } from "@/components/strip-rsc"
import { GoogleAnalytics } from "@/components/google-analytics"
import { AdSenseLoader } from "@/components/ad-slot"
import { BackToTop } from "@/components/back-to-top"

export const metadata: Metadata = {
  title: "GGAAG 财经笔记",
}

/**
 * /zh 布局：与英文版共用主题/GA/广告组件，导航强制中文。
 * html lang 在根布局为 en；中文页通过 <html lang> 无法按路由切换，
 * Next 支持 layout 内不重复渲染 html —— 根布局保持 en，
 * 中文页使用 metadata other 字段 + 内容本身声明 zh-CN。
 */
export default function ZhLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      {/* 中文页 SSR 即中文：解除根布局可能挂上的 lang-pending 遮罩，并声明偏好 */}
      <script
        dangerouslySetInnerHTML={{
          __html:
            'try{document.documentElement.classList.remove("lang-pending");localStorage.setItem("lang","zh")}catch(e){}',
        }}
      />
      <div lang="zh-CN">
        <StripRsc />
        <GoogleAnalytics />
        <AdSenseLoader />
        <div className="w-full">{children}</div>
        <BackToTop />
      </div>
    </LanguageProvider>
  )
}
