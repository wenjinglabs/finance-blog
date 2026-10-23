import type { Post } from "./types";

export const financeAllocation: Post = {
  slug: "finance-allocation",
  title: "Asset Allocation: Decide the Buckets Before You Pick Anything",
  date: "2026-10-24T10:30:00+08:00",
  description:
    "Fund selection is the most-discussed, least-consequential decision in investing. The ratio between asset classes is where the actual results are decided.",
  tags: ["Investing", "Asset Allocation"],
  blocks: [
        {
      t: "summary",
      items: [
        "Most long-run return variability comes from allocation, not fund selection.",
        "Three layers: liquid (3-6 months), stable (1-3 years), growth (5+ years); rebalance on a schedule.",
      ],
    },
    {
      t: "p",
      text: "A widely cited finding in portfolio research (Brinson et al. and follow-ups) is that the large majority of a portfolio's return variability over time comes from **asset allocation policy** — how much sits in stocks vs bonds vs cash — not from which specific funds you picked or when you bought them. Yet the average investor spends ninety percent of their research time on the ten percent factor. This post is about the ninety.",
    },
    { t: "h2", text: "The three-bucket starting point" },
    {
      t: "ol",
      items: [
        "**Liquid layer** — 3-6 months of expenses. Cash, high-yield savings. Job: absorb shocks. (See the [emergency fund](/posts/finance-emergency-fund) post.)",
        "**Stable layer** — money you may need in 1-3 years. Deposits, short-term bonds, low-volatility products. Job: roughly keep pace with inflation without drawdowns.",
        "**Growth layer** — money untouched for 5+ years. Broad index funds. Job: accept volatility in exchange for long-run growth.",
      ],
    },
    {
      t: "p",
      text: "For the split between stable and growth, the old heuristic \"100 minus your age\" in the growth layer is crude but serviceable: ~70% growth-oriented at 30, ~50% at 50. The logic is what matters — **your capacity to sit through drawdowns declines as your horizon shortens**. Adjust for temperament: if a 30% drawdown would make you sell everything, your *behavioral* capacity is lower than the formula says.",
    },
    { t: "h2", text: "Rebalancing: the only scheduled action" },
    {
      t: "p",
      text: "Once the ratio is set, the strategy has exactly one recurring move: periodically restore the ratio. Worked example with a $20,000 growth portfolio at 60% stocks / 40% bonds:",
    },
    {
      t: "ul",
      items: [
        "After a strong stock year: stocks grow to $13,200, bonds sit at $8,000. Total $21,200, now 62.3% / 37.7%.",
        "Rebalancing sells ~$480 of stocks and buys bonds, restoring 60/40. You have just **sold high and bought low** without having an opinion about where markets go next.",
        "Do it on a schedule — annually or at ±5 percentage-point drift. More frequent just adds trading costs and temptation. (The [Bogleheads wiki](https://www.bogleheads.org/wiki/Rebalancing) documents the mechanics.)",
      ],
    },
    { t: "h2", text: "The underrated half: psychology" },
    {
      t: "p",
      text: "A portfolio that is 100% equities is objectively fine on a 30-year spreadsheet and behaviorally fragile in real life, because the owner will experience several 30%+ drawdowns with no buffer and no plan. An allocated portfolio gives you two things at the worst moments: **money you don't have to sell** (the stable layers), and **a written rule for what to do** (rebalancing). Same market, same returns available — completely different odds you'll still be following the plan at the end.",
    },
    {
      t: "quote",
      text: "Allocation is less about maximizing returns on paper and more about maximizing the odds that you personally capture them.",
    },
  ],
  zh: {
    title: "资产配置：先决定鸡蛋放几个篮子，再挑篮子",
    description: "选基金是讨论最多、影响最小的投资决策。真正的结果由资产类别之间的比例决定。",
    tags: ["投资", "资产配置"],
    blocks: [
            {
        t: "summary",
        items: [
          "长期收益的大头由配置比例决定，而不是选了哪只基金。",
          "三层结构：活钱（3-6 个月）、稳健（1-3 年）、增长（5 年以上）；按日程再平衡。",
        ],
      },
      {
        t: "p",
        text: "组合研究里一个被广泛引用的结论（Brinson 等人及其后续研究）：组合长期收益波动的大头来自**配置政策**——股票/债券/现金各放多少——而不是具体选了哪只基金、什么时候买的。然而普通投资者把九成的研究时间花在那 10% 的因素上。这篇讲那 90%。",
      },
      { t: "h2", text: "三层结构的起点" },
      {
        t: "ol",
        items: [
          "**活钱层**——3-6 个月支出。现金、高息活期。任务：吸收冲击。（见[应急备用金](/posts/finance-emergency-fund)一篇。）",
          "**稳健层**——1-3 年内可能要用的钱。存款、短债、低波产品。任务：大约跟上通胀，回撤接近零。",
          "**增长层**——5 年以上不动的钱。宽基指数基金。任务：接受波动，换取长期增长。",
        ],
      },
      {
        t: "p",
        text: "稳健层和增长层怎么分，“100 减年龄”这个老启发式粗糙但能用：30 岁增长层约七成，50 岁降到五成。重要的是背后的逻辑——**你扛得住回撤的能力随投资期限缩短而下降**。再按性格调：如果 -30% 会让你清仓离场，你的**行为承载力**就比公式说的低。",
      },
      { t: "h2", text: "再平衡：唯一的定期动作" },
      {
        t: "p",
        text: "比例定好之后，策略里只有一个周期性动作：定期把偏离的比例调回来。用一个 20,000、股 60/债 40 的组合算一遍：",
      },
      {
        t: "ul",
        items: [
          "股票大涨一年后：股票 13,200，债券 8,000。总 21,200，比例变成 62.3% / 37.7%。",
          "再平衡卖出约 480 的股票、买入债券，恢复 60/40。你刚刚完成了一次**高抛低吸**——全程不需要对市场走向有任何观点。",
          "按日程做——每年一次，或偏离 ±5 个百分点时触发。更频繁只是增加交易成本和手痒的机会。（[Bogleheads Wiki](https://www.bogleheads.org/wiki/Rebalancing) 有完整的机制说明。）",
        ],
      },
      { t: "h2", text: "被低估的另一半：心理" },
      {
        t: "p",
        text: "一个 100% 股票的组合，在 30 年的电子表格上完全成立，在真实生活里却行为脆弱——持有者要经历若干次 30% 以上的回撤，手里没有缓冲，也没有预案。配置好的组合在最坏的时刻给你两样东西：**不必卖出的钱**（活钱层和稳健层），和**写好的行动规则**（再平衡）。同一个市场，同样的收益可得——你坚持到终场的概率完全不同。",
      },
      {
        t: "quote",
        text: "配置的目标不是让纸面收益最大化，而是让你本人真的拿到那些收益的概率最大化。",
      },
    ],
  },
};
