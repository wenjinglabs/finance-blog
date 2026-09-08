import type { Post } from "./types";

export const helloBlog: Post = {
  slug: "hello-blog",
  title: "开站：这个博客是怎么跑起来的",
  date: "2026-09-07T14:50:00+08:00",
  description: "Hugo + PaperMod，静态文件打包进 Cloudflare Worker，根域钉优选 IP。",
  tags: ["博客", "Cloudflare"],
  blocks: [
    { t: "p", text: "欢迎。这是梗酱技术博客的第一篇，先交代这个站本身是怎么跑的，省得以后忘了。" },
    { t: "h2", text: "架构" },
    {
      t: "ul",
      items: [
        "写作：Hugo，主题 PaperMod。",
        "托管：没有服务器。`hugo` 构建出的十几个静态文件，用一个脚本（`gen-blog-worker.py`）全量内联成一个 Worker 脚本，推到 Cloudflare Workers，路由 `ggaag.com/*`。",
        "入口：根域是 DNS-only 的 A 记录，指向当前优选 IP，TTL 120。换 IP 时 keeper 连根域一起切。",
      ],
    },
    { t: "h2", text: "为什么不用 Pages" },
    {
      t: "p",
      text: "一开始确实用了 Pages，但 Pages 只能走默认 anycast，实测机房视角 2.2 秒落 SJC；搬进 Worker 吃上优选后 0.26 秒落 NRT，差 10 倍。以后发文章走 wrangler 推，命令在仓库 README 里。",
    },
    { t: "h2", text: "更新" },
    { t: "p", text: "想到什么写什么，以实战记录为主，不确定的会标出来，不装懂。" },
  ],
};
