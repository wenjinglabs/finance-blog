import type { Post } from "./types";

export const financeDebtOrder: Post = {
  slug: "finance-debt-order",
  title: "Avalanche vs Snowball: What Each Debt Payoff Order Actually Costs",
  date: "2026-10-24T11:00:00+08:00",
  description:
    "Everyone says avalanche saves money and snowball builds motivation. I ran both on the same three debts with the same $600/month — here are the exact numbers, and the case where the famous advice flips.",
  tags: ["Personal Finance", "Debt"],
  blocks: [
        {
      t: "summary",
      items: [
        "Same $600/month: avalanche costs $4,489 in interest over 33 months; snowball $5,412 over 35 — but snowball's first payoff lands 4 months sooner.",
        "A plan you finish beats a plan that is optimal on paper.",
      ],
    },
    {
      t: "p",
      text: "If you have multiple debts, the advice industry offers two famous orders. **Avalanche**: pay minimums on everything, throw all extra cash at the highest interest rate first. **Snowball**: same idea, but attack the *smallest balance* first, regardless of rate. Avalanche is mathematically optimal. Snowball is psychologically sticky — quick wins keep people going. Both claims are true, but they're usually stated without numbers. So I ran both, on the same debts, with the same budget.",
    },
    { t: "h2", text: "The setup" },
    {
      t: "table",
      head: ["Debt", "Balance", "APR", "Minimum"],
      rows: [
        ["Store card", "$4,000", "28%", "$100/mo"],
        ["Credit card", "$8,000", "22%", "$160/mo"],
        ["Personal loan", "$3,000", "8%", "$90/mo"],
      ],
    },
    {
      t: "p",
      text: "Total budget for all debt payments: **$600/month**. Minimums add up to $350, leaving $250/month of attack money — the only variable between the two strategies is the *order* it lands in.",
    },
    {
      t: "chart",
      chart: {
        type: "hbar",
        title: "Total interest paid over the full payoff ($600/mo budget)",
        labels: ["Avalanche", "Snowball"],
        values: [4489, 5412],
        unit: "$",
        highlight: 1,
      },
    },

    { t: "h2", text: "The results, month by month" },
    {
      t: "table",
      head: ["Strategy", "Order of attack", "Debt-free", "Total interest", "First payoff"],
      rows: [
        ["Avalanche", "28% → 22% → 8%", "33 months", "$4,489", "Month 14"],
        ["Snowball", "\k → \k → \k", "35 months", "$5,412", "Month 10"],
      ],
    },
    {
      t: "p",
      text: "The gap: snowball costs **$923 more and takes 2 months longer** — but delivers its first complete payoff **4 months sooner**. That's the whole trade in three numbers. About 2.9% of total debt, in exchange for an early demonstration that the plan works.",
    },
    { t: "h2", text: "Where the difference comes from" },
    {
      t: "p",
      text: "Snowball pays off the 8% personal loan first — the *cheapest* money you owe — while the 28% store card keeps compounding against you for extra months. At 28% APR, that balance accrues roughly $93 of interest **per month** on its own. Every month of delay there is what the $923 is made of. The smaller the rate spread between your debts, the smaller this penalty shrinks: with debts at 19% and 22%, the two methods nearly converge.",
    },
    { t: "h2", text: "The part the math misses" },
    {
      t: "p",
      text: "A plan you abandon at month 9 loses to any plan you finish. Debt payoff fails for behavioral reasons far more often than mathematical ones, and an empty-feeling first year is precisely when people quit. Snowball's month-10 payoff — one fewer account, one less minimum payment, visible proof of motion — is buying compliance, not returns. Research on real borrowers — Gal & McShane’s [2012 study in the Journal of Marketing Research](https://journals.sagepub.com/doi/10.1509/jmr.11.0272) — found that people who focus on one account at a time are more likely to eliminate debt entirely, regardless of order.",
    },
    { t: "h2", text: "The decision rule I'd actually use" },
    {
      t: "ol",
      items: [
        "**Rate spread is small (under ~5 points) or you're disciplined by nature → avalanche.** The penalty is trivial and the math is clean.",
        "**Spread is wide but the small debt dies fast (within a few months) → snowball anyway.** Killing the loan in month 3 costs little and buys a lot of momentum.",
        "**You have a 25%+ APR debt that is ALSO your biggest balance → hybrid.** Attack it first even if it's the largest; at that rate, it's both the math move and, eventually, the momentum move.",
        "**Either way: automate the minimums the day the [cash-flow budget](/posts/finance-ledger) exists.** The order matters far less than the machine never stopping.",
      ],
    },
    {
      t: "quote",
      text: "The best debt payoff order is the one that's still running in month nine. Pick the version of yourself you actually are, and let the $923 be what it is: the price of a plan you'll finish.",
    },
  ],
  zh: {
    title: "雪崩法 vs 雪球法：还债顺序到底差多少钱",
    description:
      "都说雪崩法省钱、雪球法养心态。我用同样的三笔债、同样的每月 600 美元预算把两种顺序都跑了一遍——这是精确数字，以及那条著名建议会反转的情形。",
    tags: ["理财", "负债"],
    blocks: [
            {
        t: "summary",
        items: [
          "同样每月 600 美元：雪崩法总利息 $4,489（33 个月），雪球法 $5,412（35 个月）——但雪球法第一笔清零早 4 个月。",
          "能走完的计划胜过纸面最优的计划。",
        ],
      },
      {
        t: "p",
        text: "手里有多笔债时，理财建议行业有两套著名顺序。**雪崩法**：每笔都还最低，多余的钱全砸利率最高的那笔。**雪球法**：思路相同，但先攻**余额最小**的那笔，不管利率。雪崩法数学最优，雪球法心理粘性强——快速见效让人坚持得下去。两个说法都对，但很少有人给出数字。所以我用同一组债、同一个预算，把两种都跑了一遍。",
      },
      { t: "h2", text: "实验设置" },
      {
        t: "table",
        head: ["债务", "余额", "年利率", "最低月还"],
        rows: [
          ["商店卡", "$4,000", "28%", "$100"],
          ["信用卡", "$8,000", "22%", "$160"],
          ["个人贷款", "$3,000", "8%", "$90"],
        ],
      },
      {
        t: "p",
        text: "每月总还款预算 **$600**。最低还款合计 $350，剩下每月 $250 是进攻资金——两种策略之间唯一的区别，只是这笔钱**落地的顺序**。",
      },
      {
        t: "chart",
        chart: {
          type: "hbar",
          title: "整个还清周期内支付的总利息（每月 600 美元预算）",
          labels: ["雪崩法", "雪球法"],
          values: [4489, 5412],
          unit: "$",
          highlight: 1,
        },
      },

      { t: "h2", text: "结果，逐月模拟" },
      {
        t: "table",
        head: ["策略", "进攻顺序", "还清用时", "总利息", "第一笔清零"],
        rows: [
          ["雪崩法", "28% → 22% → 8%", "33 个月", "$4,489", "第 14 个月"],
          ["雪球法", "\k → \k → \k", "35 个月", "$5,412", "第 10 个月"],
        ],
      },
      {
        t: "p",
        text: "差距：雪球法**多付 $923、慢 2 个月**——但第一笔完整清零**提前 4 个月**。整个权衡就是这三个数字：约占总债务 2.9% 的成本，换来一次“计划真的在运转”的早期证明。",
      },
      { t: "h2", text: "差距从哪来" },
      {
        t: "p",
        text: "雪球法先还的是 8% 的个人贷款——你欠的**最便宜**的钱——而 28% 的商店卡多滚了几个月的利。28% 年利率意味着那张卡每月自己就长出约 $93 的利息，每晚一个月都是 $923 的原料。债务之间的利率差越小，这个惩罚越小：如果两笔债是 19% 和 22%，两种方法几乎收敛。",
      },
      { t: "h2", text: "数学没算到的部分" },
      {
        t: "p",
        text: "一个第 9 个月就放弃的计划，输给任何能走完的计划。还债失败的原因，行为上的远多于数学上的，而“第一年毫无成就感”恰恰是人们退出的时点。雪球法第 10 个月的那次清零——少一个账户、少一笔最低还款、看得见的进展——买到的是依从性，不是收益率。针对真实借款人的研究（Gal 与 McShane 2012 年发表于 [Journal of Marketing Research](https://journals.sagepub.com/doi/10.1509/jmr.11.0272)）发现：一次只集中还一个账户的人，最终把债全部还清的概率更高，与顺序无关。",
      },
      { t: "h2", text: "我自己会用的决策规则" },
      {
        t: "ol",
        items: [
          "**利率差小（5 个百分点以内），或你天生自律 → 雪崩法。**惩罚微不足道，数学干净。",
          "**利差大，但小额那笔几个月内就能清掉 → 直接雪球。**第 3 个月干掉一笔小债成本很低，买到的动力很足。",
          "**你有一笔 25% 以上的债、同时它又是最大的一笔 → 混合。**先攻它：这个利率下，它既是数学上的正确答案，最终也是动力上的正确答案。",
          "**无论选哪个：[现金流预算](/posts/finance-ledger)一确定就把最低还款设成自动。**顺序的重要性，远低于“机器永不停”的重要性。",
        ],
      },
      {
        t: "quote",
        text: "最好的还债顺序，是第 9 个月还在运行的那一个。选那个对应真实的你的版本，让那 $923 就是它本来的样子：一份你能坚持走完的计划的票价。",
      },
    ],
  },
};
