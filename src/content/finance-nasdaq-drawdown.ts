import type { Post } from "./types";

export const financeNasdaqDrawdown: Post = {
  slug: "finance-nasdaq-drawdown",
  title: "Nasdaq Drawdowns in Numbers: How Deep, How Long, What Actually Helps",
  date: "2026-10-24T12:00:00+08:00",
  description:
    "A 2-3% red day stings; the question is what kind of drawdown you might be in. Every major Nasdaq decline since 2000, how long recovery took, and the three moves with math behind them.",
  tags: ["Investing", "Market Downturns"],
  blocks: [
        {
      t: "summary",
      items: [
        "-20% to -35% drawdowns hit a tech-heavy index about once every five years; recovery took 4 months to 15 years.",
        "What works: keep auto-buys running, protect the emergency fund, rebalance on schedule.",
      ],
    },
    {
      t: "p",
      text: "Late October 2026: the Nasdaq dropped [2.6% in a single session](https://www.reuters.com/business/nasdaq-futures-drop-over-1-ai-worries-resurface-oil-climbs-2026-10-22) as doubts about AI spending resurfaced, led by semiconductors. Headlines explain *why* (AI capex skepticism, inflation worries, bond volatility, oil). This post is about the questions headlines don't answer: how bad can this get, how long do these things last, and — if you hold index funds — what's actually worth doing right now.",
    },
    { t: "h2", text: "First, the asymmetry everyone forgets" },
    {
      t: "p",
      text: "Losses and gains are not symmetric. The deeper the hole, the steeper the climb out:",
    },
    {
      t: "table",
      head: ["Drawdown", "Gain needed to recover"],
      rows: [
        ["-20%", "+25%"],
        ["-30%", "+43%"],
        ["-50%", "+100%"],
        ["-78% (dot-com crash)", "+355%"],
      ],
    },
    {
      t: "p",
      text: "This is why \"I'll sell now and buy back lower\" is harder than it sounds: you need the market to fall far enough to cover the recovery math *and* you need to actually pull the buy trigger, which feels worst exactly at the bottom.",
    },
    { t: "h2", text: "Every major Nasdaq drawdown since 2000" },
    {
      t: "table",
      head: ["Episode", "Peak → bottom", "Depth", "Time to new high"],
      rows: [
        ["Dot-com crash", "Mar 2000 → Oct 2002", "-78%", "~15 years (2015)"],
        ["Financial crisis", "Oct 2007 → Mar 2009", "-54%", "~7 years (2014)"],
        ["Q4 2018 selloff", "Aug 2018 → Dec 2018", "-23%", "~5 months (May 2019)"],
        ["COVID crash", "Feb 2020 → Mar 2020", "-28%", "~4 months (Jun 2020)"],
        ["2022 rate-cycle bear", "Nov 2021 → Dec 2022", "-33%", "~2.5 years (Apr 2024)"],
      ],
    },
    {
      t: "p",
      text: "The dot-com row deserves its asterisk: deepest *and* longest. The 2018 row deserves the opposite one — at the time it felt like the beginning of the end, and it lasted five months.",
    },
    {
      t: "p",
      text: "Two honest takeaways. First: drawdowns of -20% to -35% are **routine** for a tech-heavy index — five in 26 years. If you hold Nasdaq-weighted funds, this is the admission price, not an anomaly. Second: recovery times ranged from 4 months to 15 years. Nobody knows which one any current decline turns out to be — which is exactly why the response shouldn't depend on guessing it.",
    },
    { t: "h2", text: "The three moves with math behind them" },
    {
      t: "ol",
      items: [
        "**Don't stop the automatic buys.** Fixed-dollar buying purchases more shares at lower prices — at -30%, the same $500 buys ~43% more shares than at the peak. DCA's edge exists *only* if it runs through the drawdown. Pausing during red months quietly deletes the entire mechanism and converts you back into a market-timer.",
        "**Check the emergency fund, not the portfolio.** The real risk in a crash isn't the drawdown — it's being *forced* to sell into it. 3-6 months of expenses in cash means a job loss during the downturn doesn't touch the portfolio. If that buffer is intact, a -30% line on a screen is uncomfortable but not dangerous.",
        "**[Rebalance](/posts/finance-allocation) if allocations drifted.** A 60/40 portfolio that went through a big tech run then a -25% equity drop has drifted meaningfully. Restoring target weights now is the disciplined version of \"buy low\" — mechanical, scheduled, no forecasting required.",
      ],
    },
    { t: "h2", text: "And one warning" },
    {
      t: "p",
      text: "Downturns are prime season for scams, because fear sells better than greed: \"recovery trades,\" \"crash-proof\" AI funds, guaranteed-return desks. A market decline doesn't create safe 30% opportunities — it creates *more* claims of them. The three structures of investment scams don't pause for red days; they recruit during them.",
    },
    {
      t: "quote",
      text: "You can't control whether this is a 2.6% wobble or the start of a -30% bear. You can control whether the automatic buys keep running, whether the cash buffer is real, and whether the allocation gets restored on schedule. Historically, that trio is what separated the people who came out of every Nasdaq drawdown wealthier from the people who didn't.",
    },
  ],
  zh: {
    title: "纳斯达克回撤数据：跌多深、熬多久、什么操作真的有用",
    description:
      "单日 -2.6% 只是刺痛，真正的问题是你在哪种回撤里。2000 年以来纳斯达克每一次大跌的真实数据、恢复用了多久，以及三个有数学依据的动作。",
    tags: ["投资", "市场下跌"],
    blocks: [
            {
        t: "summary",
        items: [
          "科技权重高的指数大约每五年遇一次 -20%~-35% 回撤；恢复用时从 4 个月到 15 年。",
          "有用的三件事：别停自动买入、守好备用金、按计划再平衡。",
        ],
      },
      {
        t: "p",
        text: "2026 年 10 月下旬：对 AI 支出的怀疑再度发酵，纳斯达克[单日下跌 2.6%](https://www.reuters.com/business/nasdaq-futures-drop-over-1-ai-worries-resurface-oil-climbs-2026-10-22)，半导体领跌。新闻都在解释*为什么*（AI 资本开支疑虑、通胀担忧、债市波动、油价上行）。这篇回答的是新闻不回答的问题：这可能会跌到多深、要熬多久——以及，如果你拿着指数基金，现在做什么才是真正有用的。",
      },
      { t: "h2", text: "先说所有人都忘了的不对称" },
      {
        t: "p",
        text: "亏损和回本需要的涨幅不是一比一。坑越深，爬出来越陡：",
      },
      {
        t: "table",
        head: ["回撤幅度", "回本所需涨幅"],
        rows: [
          ["-20%", "+25%"],
          ["-30%", "+43%"],
          ["-50%", "+100%"],
          ["-78%（互联网泡沫）", "+355%"],
        ],
      },
      {
        t: "p",
        text: "这就是为什么“先卖掉、跌下来再买回”比听起来难得多：你既需要市场跌到足以覆盖回本数学的深度，又需要在感受最差的底部真的按下买入键——而那恰恰是最难按下去的时刻。",
      },
      { t: "h2", text: "2000 年以来纳斯达克的每一次大回撤" },
      {
        t: "table",
        head: ["事件", "峰值 → 底部", "深度", "回到新高用时"],
        rows: [
          ["互联网泡沫", "2000/03 → 2002/10", "-78%", "约 15 年（2015）"],
          ["全球金融危机", "2007/10 → 2009/03", "-54%", "约 7 年（2014）"],
          ["2018 年四季度下跌", "2018/08 → 2018/12", "-23%", "约 5 个月（2019/05）"],
          ["新冠疫情暴跌", "2020/02 → 2020/03", "-28%", "约 4 个月（2020/06）"],
          ["2022 年加息熊市", "2021/11 → 2022/12", "-33%", "约 2 年半（2024/04）"],
        ],
      },
      {
        t: "p",
        text: "互联网泡沫那一行值得单独加注：既是最深也是恢复最久的一次，是有些人看到纳斯达克长期走势图会心头一紧的原因。2018 年那行恰恰相反——当时的感觉是世界要完了，实际只持续了五个月。",
      },
      {
        t: "p",
        text: "两句诚实的结论。第一：对一个科技权重高的指数来说，-20% 到 -35% 的回撤是**常态**——26 年里出现了五次。拿着纳斯达克相关基金，这是入场票价，不是异常事件。第二：恢复时间从 4 个月到 15 年不等。没人知道眼前这次会是哪一种——这恰恰是为什么应对方案不应该建立在猜对它之上。",
      },
      { t: "h2", text: "三个有数学依据的动作" },
      {
        t: "ol",
        items: [
          "**别停自动买入。**固定金额在低价时买到更多份额——跌 30% 时，同样的 500 美元比顶部多买约 43% 的份额。定投的优势**只存在于**穿越下跌的过程中。红色月份里暂停，等于悄悄删掉整套机制，把自己变回择时者。",
          "**检查的是备用金，不是持仓。**暴跌中真正的风险不是回撤本身，而是被*迫*在低点卖出。手里有 3-6 个月支出的现金，意味着衰退期的失业不会波及持仓。缓冲还在，屏幕上那条 -30% 就只是难受，不危险。",
          "**配置偏了就[再平衡](/posts/finance-allocation)。**一个 60/40 组合经过科技大涨再叠加 -25% 的权益下跌，比例已经明显漂移。现在把目标比例调回来，就是纪律化版本的“低买”——机械化、按日程、不需要预测。",
        ],
      },
      { t: "h2", text: "再加一句警告" },
      {
        t: "p",
        text: "下跌季是骗局旺季，因为恐惧比贪婪更好卖：“回本通道”“防崩盘 AI 基金”“保收益柜台”。市场下跌不会创造年化 30% 的安全机会——只会让这类*声称*变多。投资骗局的三种结构不会因为大跌暂停，它们恰恰在红色的日子里招人。",
      },
      {
        t: "quote",
        text: "你控制不了这次是 2.6% 的抖动还是 -30% 熊市的起点。你控制得了的是：自动买入是否还在运行、现金缓冲是否真实、配置是否按计划恢复。从历史上每一次纳斯达克回撤里走出来变得更有钱的人，靠的都是这三样——而不是猜中了哪一次。",
      },
    ],
  },
};
