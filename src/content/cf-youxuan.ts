import type { Post } from "./types";

export const cfYouxuan: Post = {
  slug: "cf-youxuan",
  title: "Cloudflare 优选 IP 到底在优选什么",
  date: "2026-09-07T15:00:00+08:00",
  description: "SNI/Host 决定回源，DNS 决定入口：优选 IP 选的是进 Cloudflare 边缘网的门。",
  tags: ["Cloudflare", "网络"],
  blocks: [
    { t: "h2", text: "一句话" },
    {
      t: "p",
      text: "Cloudflare 的边缘靠 SNI/Host 决定把请求送给谁，DNS 只决定你从哪扇门进去。所谓优选 IP，就是给你的域名挑一扇离你近、又没坏的门。",
    },
    { t: "h2", text: "关键事实" },
    {
      t: "ul",
      items: [
        "同一个 IP 是任播（anycast），全球 300+ 机房同时广播，BGP 选路决定你实际落到哪个机房。IP 本身不等于地点。",
        "Worker 跑起来之后改不了入口，只能靠 DNS 分发。所以免费版 DNS（不支持分线路）只能玩单 IP 策略。",
        "验证 IP 是否真服务你的站：正确 SNI 探活，看状态 200 + 内容哈希一致，再看 `cf-ray` 尾缀确认落点。缺任何一个都是自欺欺人。",
      ],
    },
    { t: "h2", text: "实测" },
    {
      t: "p",
      text: "同一台机房机，同一分钟：优选 IP 0.19 秒落 NRT，换优选之前的 IP 0.55 秒落 LAX，随机抓的 0.52 秒落 LAX。差 3 倍，这是 keeper 每 30 分钟算一遍的账。",
    },
    { t: "h2", text: "边界" },
    {
      t: "p",
      text: "机房测的是机房到边缘，不是访客到边缘。优选保的是下限（IP 活的、亚洲可达），访客个人的上限（比如某条宽带的 BGP 抖动）它管不着。承认这点，方案才诚实。",
    },
  ],
};
