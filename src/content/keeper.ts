import type { Post } from "./types";

export const keeper: Post = {
  slug: "keeper",
  title: "一个自动换 IP 的 keeper 是怎么写出来的",
  date: "2026-09-07T15:10:00+08:00",
  description: "cfst 全量扫描 + 本机探活 + 防抖切换：每 30 分钟跑一遍，健康就别动。",
  tags: ["Cloudflare", "自动化"],
  blocks: [
    { t: "h2", text: "流程" },
    { t: "p", text: "每 30 分钟 cron 跑一遍：" },
    {
      t: "ol",
      items: [
        "拉 Cloudflare 官方 IP 段，cfst 全量扫描，按延迟排序取前 12 个候选。",
        "逐个探活：正确 SNI、HTTPS、200、内容哈希与基线一致。过了才算活。",
        "打分：`cf-ray` 落点在亚洲加分（HKG/TPE/KIX/NRT/ICN/SIN…），同分比延迟。",
        "防抖：现任 IP 还活着、且差距在 20% 以内，不切。宁可慢一点，不要跳来跳去。",
      ],
    },
    { t: "h2", text: "踩过的坑" },
    {
      t: "ul",
      items: [
        "一度引入外部优选站（WeTest）做候选源，后来砍了：多一个依赖多一个死法，纯机房自测，死的只剩自家东西。",
        "wrangler 默认走 IPv6 出口，被 Token 的 IP 白名单拦（9109），`NODE_OPTIONS=--dns-result-order=ipv4first` 解决。",
        "Poster：裸 JS 上传 Worker 不支持 `export`，得用 service-worker 写法（`addEventListener`）或 multipart 发模块。",
      ],
    },
    { t: "h2", text: "结论" },
    { t: "p", text: "keeper 的哲学就一条：健康就别动。切换是故障处理，不是优化手段。" },
  ],
};
