import type { Post } from "./types";

export const cfToken: Post = {
  slug: "cf-token",
  title: "Token 的最小权限：我是这么配的",
  date: "2026-09-07T15:20:00+08:00",
  description: "Workers 读写 + DNS 读写 + Pages 读写，IP 白名单只放一台机房机。",
  tags: ["Cloudflare", "安全"],
  blocks: [
    { t: "h2", text: "原则" },
    { t: "p", text: "Token 能小就小，能短就短，能锁 IP 就锁 IP。这次的配置：" },
    {
      t: "ul",
      items: [
        "Workers Scripts：读写（发 Worker、改路由）。",
        "`ggaag.com` zone：DNS 读写、SSL 读写、Workers Routes 读写。",
        "账户：Pages 读写（博客部署用）。",
        "IP 过滤：只放机房公网机的 IPv4。注意 Cloudflare 的 verify 接口不查 IP，读写才查——verify 通过不代表权限真能用，动手试一把才算。",
        "有效期：一个月，到期续。",
      ],
    },
    { t: "h2", text: "教训" },
    {
      t: "ul",
      items: [
        "本机只读：Token 在本机只用来查，不写。写操作一律上机房机执行，IP 白名单就是干这个的。",
        "密钥落盘 600，不进 git，不走任何第三方保险柜。",
        "wrangler 这类工具默认行为（比如走 IPv6）会莫名其妙撞墙，出问题先看出口 IP，再怀疑别的。",
      ],
    },
  ],
};
