"use client"

import { useLang } from "@/lib/language"

function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4 leading-7 text-muted-foreground [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground">{children}</div>
}

export function AboutContent({ lang: langProp }: { lang?: "en" | "zh" }) {
  const { lang: hookLang } = useLang()
  const lang = langProp ?? hookLang
  if (lang === "zh") {
    return (
      <Wrapper>
        <p>
          GGAAG 财经笔记（blog.ggaag.com）是一个个人博客：用朴素、可验证的方法记录理财与投资的思考。默认英文是面向更广的读者，右上角可随时切回中文。
        </p>
        <h2>这里写什么</h2>
        <p>
          以“普通人如何管理自己的钱”为主线：现金流记账、应急备用金、指数基金与定投、资产配置与再平衡，以及如何识别理财骗局。凡是涉及数字的结论，我都会尽量给出计算过程和适用条件。
        </p>
        <h2>写作立场</h2>
        <p>
          三条自我要求：(1) 有数字就展示计算，做不到就说这是估算；(2) 说明建议适用的前提条件；(3) 犯了错公开承认。达不到这三条的稿子不发。
        </p>
        <h2>免责声明</h2>
        <p>
          本站全部内容均为个人学习笔记，<strong>不构成任何投资建议</strong>。市场有风险，包括本金损失的风险。文中出现的产品仅为举例说明，不构成推荐。涉及你的具体决策，请独立判断或咨询持牌专业人士。
        </p>
        <h2>联系</h2>
        <p>
          勘误、交流或版权事宜，请发邮件至{" "}
          <a className="underline underline-offset-4" href="mailto:wenj3549@gmail.com">wenj3549@gmail.com</a>。
        </p>
        <h2>技术与隐私</h2>
        <p>
          本站基于 Next.js 构建，托管于 Cloudflare Workers。数据收集与 Cookie 说明见{" "}
          <a className="underline underline-offset-4" href="/privacy">隐私政策</a>。
        </p>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <p>
        GGAAG Finance Notes (blog.ggaag.com) is a personal blog about managing money well with boring, verifiable methods.
        The site defaults to English for a wider audience; use the toggle in the header to switch to Chinese at any time.
      </p>
      <h2>What you&apos;ll find here</h2>
      <p>
        Notes on personal finance for people who want the reasoning, not just the conclusion: cash flow tracking, emergency
        funds, index funds and dollar-cost averaging, asset allocation and rebalancing, and how to recognize investment
        scams. Whenever a claim involves a number, I try to show where the number comes from.
      </p>
      <h2>Editorial stance</h2>
      <p>
        Three rules I hold myself to: (1) show the math or say it&apos;s an estimate; (2) state the conditions under which
        advice applies; (3) admit mistakes in public when I make them. If a post can&apos;t meet those bars, it doesn&apos;t
        get published.
      </p>
      <h2>Disclaimer</h2>
      <p>
        Everything on this site is a personal note for educational purposes only. It is <strong>not financial advice</strong>.
        Markets involve risk, including loss of principal. Any product mentioned is an example, not a recommendation. Do your
        own research and consult a licensed professional for your specific situation.
      </p>
      <h2>Contact</h2>
      <p>
        Corrections, questions, or comments are welcome at{" "}
        <a className="underline underline-offset-4" href="mailto:wenj3549@gmail.com">wenj3549@gmail.com</a>.
      </p>
      <h2>Colophon</h2>
      <p>
        Built with Next.js, hosted on Cloudflare Workers. See the{" "}
        <a className="underline underline-offset-4" href="/privacy">Privacy Policy</a> for what data this site collects and why.
      </p>
    </Wrapper>
  )
}

export function PrivacyContent({ lang: langProp }: { lang?: "en" | "zh" }) {
  const { lang: hookLang } = useLang()
  const lang = langProp ?? hookLang
  if (lang === "zh") {
    return (
      <Wrapper>
        <p>
          本政策说明本网站（blog.ggaag.com，下称“本站”）收集哪些信息、如何使用，以及你的选择权。使用本站即表示你理解并同意本政策。
        </p>
        <h2>本站直接收集的信息</h2>
        <p>
          本站为静态博客，没有注册、评论表单或订阅功能，因此不会要求或存储你的姓名、邮箱、电话等个人身份信息。
        </p>
        <h2>Google Analytics</h2>
        <p>
          本站使用 Google Analytics 4 了解汇总的访问情况——页面浏览量、来源与大致地域。GA 会通过 Cookie
          及类似技术收集设备与使用数据。你可以通过{" "}
          <a className="underline underline-offset-4" href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            Google 官方退出浏览器插件
          </a>{" "}
          或浏览器 Cookie 设置选择退出。
        </p>
        <h2>Google AdSense</h2>
        <p>
          本站可能展示由 Google AdSense 投放的广告。Google 及其合作方可能使用 Cookie（包括 DoubleClick
          Cookie）根据你对本站及其他网站的访问投放广告。你可以在{" "}
          <a className="underline underline-offset-4" href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">
            Google 广告设置
          </a>{" "}
          关闭个性化广告，并在{" "}
          <a className="underline underline-offset-4" href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
            aboutads.info
          </a>{" "}
          管理第三方 Cookie 偏好。
        </p>
        <h2>Cookie 管理</h2>
        <p>
          主流浏览器均支持清除或阻止 Cookie（通常在“设置 → 隐私”中）。阻止本站 Cookie 不影响正常阅读，仅影响统计与广告相关性。
        </p>
        <h2>政策变更</h2>
        <p>本政策如有重大变更，会在本页更新并修改顶部日期。</p>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <p>
        This policy describes what data this website (blog.ggaag.com, &quot;the site&quot;) collects, how it is used, and
        what choices you have. By using the site, you agree to this policy.
      </p>
      <h2>Information the site collects directly</h2>
      <p>
        The site is a static blog. There are no accounts, no comment forms, and no newsletters, so the site does not ask
        for or store personal identity information such as your name, email address, or phone number.
      </p>
      <h2>Google Analytics</h2>
      <p>
        The site uses Google Analytics 4 to understand aggregate usage — page views, referrers, and approximate geography.
        Google Analytics collects device and usage data via cookies and similar technologies. You can opt out using{" "}
        <a className="underline underline-offset-4" href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
          Google&apos;s official opt-out browser add-on
        </a>{" "}
        or your browser&apos;s cookie settings.
      </p>
      <h2>Google AdSense</h2>
      <p>
        The site may display advertising served by Google AdSense. Google and its partners may use cookies (including the
        DoubleClick cookie) to serve ads based on your visits to this and other websites. You can turn off personalized
        advertising in{" "}
        <a className="underline underline-offset-4" href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">
          Google Ads Settings
        </a>{" "}
        and manage third-party cookie preferences at{" "}
        <a className="underline underline-offset-4" href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
          aboutads.info
        </a>.
      </p>
      <h2>Managing cookies</h2>
      <p>
        Every mainstream browser lets you clear or block cookies (usually under Settings → Privacy). Blocking cookies used
        by this site will not affect reading the content; it only affects analytics and ad relevance.
      </p>
      <h2>Changes to this policy</h2>
      <p>If this policy changes materially, I will update this page and the date above.</p>
    </Wrapper>
  )
}
