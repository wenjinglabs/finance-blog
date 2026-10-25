import type { Post } from "./types";

export const financeCompound: Post = {
  slug: "finance-compound",
  title: "Compound Interest: Two Details Nobody Mentions",
  date: "2026-10-24T10:20:00+08:00",
  description:
    "Everyone can recite the formula. The two things that actually determine whether compounding works for you are interruption and inflation — with numbers.",
  tags: ["Investing", "Fundamentals"],
  blocks: [
        {
      t: "summary",
      items: [
        "Over 30 years at 8%, more than half the gains arrive in the final decade — interruption is the killer.",
        "An 8% nominal return during 3% inflation is roughly 5% real; a 0.2% checking account is a guaranteed real loss.",
      ],
    },
    {
      t: "p",
      text: "Every finance article recites the same example: $10,000 at 8% becomes $100,000 in 30 years — run it yourself on the [SEC compound interest calculator](https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator). True, and useless — because most people never see anything like it, for two reasons that live outside the formula.",
    },
    { t: "h2", text: "Detail one: compounding has a rear-loaded engine" },
    {
      t: "p",
      text: "Look at where the growth actually happens for that $10,000 at 8%:",
    },
    {
      t: "ul",
      items: [
        "After 10 years: ~$21,600 — the first decade added about $11,600",
        "After 20 years: ~$46,600 — the second decade added about $25,000",
        "After 30 years: ~$100,600 — **the final decade added about $54,000, more than half the entire result**",
      ],
    },
    {
      t: "chart",
      chart: {
        type: "hbar",
        title: "Where the growth lands: $10k at 8% by decade",
        labels: ["Years 1-10", "Years 11-20", "Years 21-30"],
        values: [11600, 25000, 54000],
        unit: "",
        highlight: 2,
      },
    },

    {
      t: "p",
      text: "This is why interruption is so expensive. Every withdrawal, every \"I'll restart next year,\" every reset to chase a better fund puts you back on the flat part of the curve. People don't fail at compounding because they picked the wrong asset. They fail because **the average holding period is a fraction of the period the math requires**. This is also why the [emergency fund](/posts/finance-emergency-fund) comes before investing: it's the thing that stops life's surprises from interrupting the curve.",
    },
    { t: "h2", text: "Detail two: nominal returns are not buying power" },
    {
      t: "p",
      text: "An 8% nominal return during 3% inflation is roughly a 5% real return. Over 30 years that difference is enormous: $10,000 nominally becomes $100,600, but its *purchasing power* is only about $41,000 in today's money. And the flip side is worse: a typical checking account at 0.2% isn't \"safe\" — at 3% inflation it's a guaranteed real loss of about 2.8% per year. Money that looks intact is quietly shrinking.",
    },
    { t: "p", text: "Two practical consequences:" },
    {
      t: "ul",
      items: [
        "**Always subtract inflation mentally.** Any product promising 4-5% \"guaranteed\" during normal inflation is offering you roughly zero real growth, minus fees — possibly negative.",
        "**Start earlier beats starting bigger.** Because the curve is rear-loaded, ten extra years at the beginning are worth more than double the principal — see the table above: the last decade outweighs the first two combined.",
      ],
    },
    { t: "h2", text: "The honest summary" },
    {
      t: "quote",
      text: "Compounding is not a trick that makes money grow. It's a promise that only pays out in full to people who can hold a position for decades and stay out of its way. Almost everything about good personal finance — the emergency fund, the allocation, the automation — exists to make you that person.",
    },
  ],
  zh: {
    title: "复利：没人提的两个细节",
    description: "公式谁都会背，但决定复利对你是否生效的，是“不中断”和“通胀”这两件事——这篇把数字摆出来。",
    tags: ["投资", "基础知识"],
    blocks: [
            {
        t: "summary",
        items: [
          "年化 8% 存 30 年，一半以上收益来自最后十年——中断是头号杀手。",
          "3% 通胀下的 8% 名义收益约等于 5% 实际；0.2% 的活期是保本的实际亏损。",
        ],
      },
      {
        t: "p",
        text: "每篇理财文章都背同一道题：10,000 元本金，年化 8%，30 年变 100,600（可以在 [SEC 的复利计算器](https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator)上自己算一遍）。对，但没用——因为大多数人从未接近过这个结果，原因藏在公式外面的两个细节里。",
      },
      { t: "h2", text: "细节一：复利的引擎在后半段" },
      {
        t: "p",
        text: "看 10,000 元、年化 8% 的增长都发生在哪：",
      },
      {
        t: "ul",
        items: [
          "第 10 年末：约 21,600 —— 头十年只涨了约 11,600",
          "第 20 年末：约 46,600 —— 第二个十年涨了约 25,000",
          "第 30 年末：约 100,600 —— **最后一个十年涨了约 54,000，超过全部结果的一半**",
        ],
      },
      {
        t: "chart",
        chart: {
          type: "hbar",
          title: "增长都落在哪：1 万本金、年化 8%、按十年计",
          labels: ["第 1-10 年", "第 11-20 年", "第 21-30 年"],
          values: [11600, 25000, 54000],
          unit: "",
          highlight: 2,
        },
      },

      {
        t: "p",
        text: "这就是为什么中断如此昂贵。每一次取出、每一次“明年重新开始”、每一次为换“更好的标的”而清仓，都把你扔回曲线的平坦段。人们复利失败，很少因为选错了资产，而是因为**实际持有期远短于数学要求的周期**。这也是为什么[备用金](/posts/finance-emergency-fund)排在投资之前：它存在的意义就是阻止生活意外打断这条曲线。",
      },
      { t: "h2", text: "细节二：名义收益不等于购买力" },
      {
        t: "p",
        text: "3% 通胀环境下的 8% 名义收益，实际大约是 5%。30 年下来差距巨大：10,000 名义上变成 100,600，但**购买力**按今天的钱只有约 41,000。更糟的是反面：0.2% 的活期存款并不是“安全”——在 3% 通胀下它是一笔每年约 2.8% 的保本亏损。账面没少的钱，能买到的东西每年都在变少。",
      },
      { t: "p", text: "两个实操结论：" },
      {
        t: "ul",
        items: [
          "**心里永远做一次减法。**正常通胀下任何“保本 4-5%”的产品，实际增长约等于零，再扣费用后可能是负的。",
          "**早开始胜过多存钱。**因为曲线后段发力，开头多十年比本金翻倍更值——看上表：最后一个十年超过前两个十年的总和。",
        ],
      },
      { t: "h2", text: "诚实的总结" },
      {
        t: "quote",
        text: "复利不是让钱变多的戏法，它是一份只对“能持有几十年、并且一路不添乱的人”全额兑现的承诺。好的个人理财里几乎所有东西——备用金、资产配置、自动化——存在的原因，都是让你成为那个人。",
      },
    ],
  },
};
