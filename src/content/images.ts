import type { Block } from "./types";

type ImgInput = Omit<Extract<Block, { t: "img" }>, "t">;

/**
 * 文章插图映射：按 slug 把图片块插入到 blocks 的指定位置之后（after 为 0 基索引）。
 * 中英文 blocks 顺序保持一致，同一 after 对两种语言同时生效。
 * 图片为相册原图经 scripts/optimize-images.mjs 压缩的 1280px webp，放在 public/images 同源加载；accent 为 sharp 提取的主色调，用于氛围背景。
 */
export const postImages: Record<string, { after: number; img: ImgInput }[]> = {
  "finance-start": [
    {
      after: 0,
      img: {
        src: "/images/ponyo010.avif",
        accent: "#e8c8a8",
        alt: "A calm car ride at the start of a journey",
        altZh: "旅程开始时的平静车内",
        caption: "Before the journey, fasten the seatbelt.",
        captionZh: "出发之前，先系好安全带。",
      },
    },
  ],
  "finance-ledger": [
    {
      after: 0,
      img: {
        src: "/images/howl021.avif",
        accent: "#788898",
        alt: "A busy harbor market in Howl's Moving Castle",
        altZh: "哈尔移动城堡里的渔港市场",
        caption: "Cash flow looks like this: ordinary, daily, and worth writing down.",
        captionZh: "现金流长这样：平凡、日常，且值得记下来。",
      },
    },
  ],
  "finance-emergency-fund": [
    {
      after: 0,
      img: {
        src: "/images/totoro032.avif",
        accent: "#484848",
        alt: "Totoro sheltering two children from the rain at a bus stop",
        altZh: "龙猫在巴士站为两个孩子挡雨",
        caption: "An emergency fund is a bus stop in the rain.",
        captionZh: "应急备用金，就是雨天里那个巴士站。",
      },
    },
  ],
  "finance-index-dca": [
    {
      after: 0,
      img: {
        src: "/images/majo030.avif",
        accent: "#c8d8b8",
        alt: "Kiki studying a map before setting out on a delivery",
        altZh: "魔女琪琪在出发送件前研究地图",
        caption: "Check the route first. Then just keep delivering.",
        captionZh: "先看好路线，然后只管把每一单送完。",
      },
    },
  ],
  "finance-compound": [
    {
      after: 0,
      img: {
        src: "/images/totoro040.avif",
        accent: "#0878a8",
        alt: "A big tree and grassland in My Neighbor Totoro",
        altZh: "龙猫里的草地与大树",
        caption: "Trees grow slowly, then all at once.",
        captionZh: "树长得很慢，然后突然很高。",
      },
    },
  ],
  "finance-scam": [
    {
      after: 0,
      img: {
        src: "/images/chihiro025.avif",
        accent: "#281818",
        alt: "No-Face offering gold to Chihiro in the rain",
        altZh: "雨中无脸男向千寻递出金子",
        caption: "The pitch always starts with something free.",
        captionZh: "话术总是从“免费的好处”开始。",
      },
    },
    {
      after: 6,
      img: {
        src: "/images/kazetachinu015.avif",
        accent: "#b89878",
        alt: "A slice of cake resting on a newspaper",
        altZh: "报纸上放着的一块蛋糕",
        caption: "Looks generous. Ask who is paying, and why.",
        captionZh: "看起来很慷慨——先问问谁出钱，图什么。",
      },
    },
  ],
  "finance-allocation": [
    {
      after: 0,
      img: {
        src: "/images/mononoke012.avif",
        accent: "#181818",
        alt: "Lady Eboshi's forge, where everyone has a role",
        altZh: "黑帽大人的铁工场，各司其职",
        caption: "Allocation is division of labor: each layer does its own job.",
        captionZh: "配置就是分工：每一层只做自己的事。",
      },
    },
  ],
  "finance-debt-order": [
    {
      after: 0,
      img: {
        src: "/images/chihiro045.avif",
        accent: "#087898",
        alt: "A night flight on Haku's back over calm water",
        altZh: "骑在白龙背上夜航平静的水面",
        caption: "Same journey, different order — one of them has the wind behind it.",
        captionZh: "同一段路，不同的顺序——有一种会顺风。",
      },
    },
  ],
  "finance-nasdaq-drawdown": [
    {
      after: 0,
      img: {
        src: "/images/mononoke045.avif",
        accent: "#181828",
        alt: "A restless night scene with torches from Princess Mononoke",
        altZh: "幽灵公主里举着火把的骚动之夜",
        caption: "Every market panic looks like the end. Most are just weather.",
        captionZh: "每次市场恐慌看起来都像终点，大多数只是天气。",
      },
    },
  ],
  "finance-rent-vs-buy": [
    {
      after: 0,
      img: {
        src: "/images/kimitachi005.avif",
        accent: "#8a7a58",
        alt: "Two friends talking over tea at a kitchen table in a cozy home",
        altZh: "温馨的家里，两人在厨房桌边喝茶商量事情",
        caption: "The biggest purchase of your life deserves a table, a pot of tea, and some math.",
        captionZh: "人生最大的一笔 purchase，值得一张桌子、一壶茶和一些算术。",
      },
    },
  ],
  "finance-grad-jobs": [
    {
      after: 0,
      img: {
        src: "/images/kimitachi010.avif",
        accent: "#5a7858",
        alt: "Two people in serious conversation at a kitchen table",
        altZh: "两人在厨房桌边严肃地商量事情",
        caption: "The ladder changed. Read the new one before climbing.",
        captionZh: "梯子换了，爬之前先看清新的。",
      },
    },
  ],
  "finance-cash-rates": [
    {
      after: 0,
      img: {
        src: "/images/chihiro050.avif",
        accent: "#4a6848",
        alt: "Chihiro standing in a quiet forest, deciding which path to take",
        altZh: "千寻站在安静的森林里决定走哪条路",
        caption: "Cash needs a home too. Pick one on purpose.",
        captionZh: "现金也需要一个家，而且是主动选的那个。",
      },
    },
  ],
  "finance-lump-sum-vs-dca": [
    {
      after: 0,
      img: {
        src: "/images/laputa030.avif",
        accent: "#b86a28",
        alt: "A dramatic orange sky over the falling castle town in Laputa",
        altZh: "天空之城里坠落时的橙色天空",
        caption: "The market will move while you decide. The only choice is how you enter.",
        captionZh: "你犹豫的时候，市场照常波动。你能选的只有进场的方式。",
      },
    },
  ],
  "finance-budget-methods": [
    {
      after: 0,
      img: {
        src: "/images/kazetachinu015.avif",
        accent: "#b89878",
        alt: "A slice of cake resting on a folded newspaper",
        altZh: "折叠的报纸上放着一块蛋糕",
        caption: "The 30% bucket exists so the cake stays enjoyable.",
        captionZh: "30% 的桶存在的意义，就是让蛋糕依然好吃。",
      },
    },
  ],
};

/** 首页 hero 图（Apple Music 式氛围背景的取色来源）。 */
export const homeHero = {
  src: "/images/howl050.avif",
  accent: "#0878b8",
  alt: "Two figures on a sky walkway above the clouds in Howl's Moving Castle",
  altZh: "哈尔的移动城堡里，两人在云端栈道远眺",
  caption: "Notes on money, written with the horizon in view.",
  captionZh: "带着地平线看钱的事。",
};
