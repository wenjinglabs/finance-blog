"use client"

import { createContext, useContext, useEffect, useState } from "react"

export type Lang = "en" | "zh"

type LangContextValue = { lang: Lang; setLang: (l: Lang) => void }

const LangContext = createContext<LangContextValue>({ lang: "en", setLang: () => {} })

const STORAGE_KEY = "lang"

/**
 * 语言上下文：默认英文（服务端渲染的 HTML 始终是英文，利于 SEO/AdSense），
 * 用户切换后写入 localStorage，之后每次进站在水合完成时立即恢复上次选择。
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  useEffect(() => {
    let restored = false
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (saved === "zh" || saved === "en") {
        setLangState(saved)
        restored = true
      }
    } catch {}
    // 解除 layout 内联脚本设置的"水合前隐藏"，内容以正确语言显示
    document.documentElement.classList.remove("lang-pending")
    if (!restored) {
      try {
        window.localStorage.removeItem(STORAGE_KEY)
      } catch {}
    }
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    document.documentElement.classList.remove("lang-pending")
    try {
      window.localStorage.setItem(STORAGE_KEY, l)
    } catch {}
  }

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}

/** 双语文案节点：按当前语言渲染对应内容。 */
export function T({ en, zh }: { en: React.ReactNode; zh: React.ReactNode }) {
  const { lang } = useLang()
  return <>{lang === "zh" ? zh : en}</>
}
