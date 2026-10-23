import type { Post } from "./types";

export const financeLumpSumVsDca: Post = {
  slug: "finance-lump-sum-vs-dca",
  title: "Lump Sum vs Dollar-Cost Averaging: 155 Years of Data, Every Starting Month",
  date: "2026-10-25T14:00:00+08:00",
  description:
    "You have $100,000 to invest. All at once, or spread over 12 months? I ran every starting month since 1871 through real S&P 500 total-return data — here are the win rates, the worst cases, and the price of each strategy's insurance.",
  tags: ["Investing", "Index Funds"],
  blocks: [
    {
      t: "p",
      text: "A bonus, an inheritance, a home sale — one day you're holding a large sum and facing the most uncomfortable question in personal finance: **invest it all today, or spread it out?** Spreading feels safer. Investing everything at once feels reckless. I wanted actual numbers rather than feelings, so I ran a backtest on 155 years of real market data — every possible starting month from 1871 through September 2026, using Robert Shiller's [publicly available S&P 500 dataset](https://shillerdata.com/) with dividends reinvested.",
    },
    { t: "h2", text: "The setup, stated plainly so you can attack it" },
    {
      t: "ul",
      items: [
        "**Lump sum (LS):** invest the full $100,000 on day one.",
        "**DCA-12:** split it into 12 equal monthly installments; uninvested cash sits idle (earning nothing — deliberately conservative).",
        "**Measurement:** compare final values 12 months after the start date. Every starting month from the dataset is a separate trial.",
        "**Returns:** total return — price change plus dividends reinvested monthly.",
      ],
    },
    {
      t: "p",
      text: "This mirrors the methodology of Vanguard's [cost-averaging research paper](https://corporate.vanguard.com/content/dam/corp/research/pdf/cost_averaging_invest_now_or_temporarily_hold_your_cash.pdf), which found lump sum winning roughly two-thirds of the time in US data. My numbers came out a bit stronger — because a 100% equity index is more volatile (and drifts upward more reliably) than their 60/40 portfolios.",
    },
    { t: "h2", text: "Result one: lump sum wins about 3 times out of 4" },
    {
      t: "table",
      head: ["Period", "LS win rate", "LS average advantage", "Median advantage", "LS worst case"],
      rows: [
        ["Since 1950 (909 trials)", "**77.3%**", "+5.2%", "+5.8%", "-28.1% (start: May 2008)"],
        ["Since 1871 (1,857 trials)", "72.0%", "+4.3%", "+4.6%", "-42.5% (start: Aug 1931)"],
      ],
    },
    {
      t: "p",
      text: "Three observations worth more than the table. **First, the horizon doesn't matter** — win rates are nearly identical at 12, 24, 36, 60, and 120 months, because both strategies hold the market after month 12; the decision only concerns the first year. **Second, the average cost of a 12-month DCA is about 5%.** That is the expected price of spreading out. **Third, the worst case is exactly what you'd guess: deploying everything into May 2008**, two-thirds of the way into the financial crisis. The lump-sum investor was down 28% relative to a co-worker who spread the same money over the year.",
    },
    { t: "h2", text: "Result two: the five worst times to invest everything" },
    {
      t: "p",
      text: "Win rates hide the tails, so here are the famous crash eves — what actually happened to a $100,000 lump sum versus a 12-month DCA, measured 12 months later:",
    },
    {
      t: "table",
      head: ["Starting month", "Lump sum after 12 mo", "DCA-12 after 12 mo", "DCA's advantage"],
      rows: [
        ["Sep 1929 (Great Depression)", "$69k", "$92k", "+32%"],
        ["Aug 1987 (Black Monday)", "$83k", "$100k", "+21%"],
        ["Oct 2007 (financial crisis)", "$64k", "$72k", "+12%"],
        ["Dec 2021 (rate-shock bear)", "$85k", "$95k", "+12%"],
        ["Mar 2000 (dot-com peak)", "$83k", "$85k", "+2%"],
      ],
    },
    {
      t: "p",
      text: "This is DCA's entire case, stated honestly: **in the worst 5-10% of starting months, spreading out saves you somewhere between 2% and 32% of the principal.** In the other 90%+, it quietly costs you an average of 5%. You are not choosing between smart and stupid. You are choosing whether to buy insurance against bad timing, and what premium you're willing to pay for it.",
    },
    { t: "h2", text: "Result three: the insurance price list" },
    {
      t: "p",
      text: "If you've decided to spread out — or you know you'll panic — the length of the schedule is a dial you control. Since 1950, evaluated 12 months after start:",
    },
    {
      t: "table",
      head: ["Strategy", "Beats lump sum", "Average cost vs LS", "Worst case vs LS"],
      rows: [
        ["3-month schedule", "31.6% of the time", "-0.8%", "-9.6%"],
        ["6-month schedule", "26.3% of the time", "-2.0%", "-16.4%"],
        ["12-month schedule", "22.7% of the time", "-4.3%", "-24.8%"],
      ],
    },
    {
      t: "p",
      text: "The 3-month schedule is the sleeper result here: **it keeps most of DCA's psychological comfort while giving up less than 1% of expected return.** The classic 12-month schedule, by contrast, pays the full insurance premium. Most people never consider that the schedule length is a choice — they default to 12 months because that's how the term \"dollar-cost averaging\" is usually described.",
    },
    { t: "h2", text: "The part statistics can't decide: regret" },
    {
      t: "p",
      text: "On paper this post ends here: lump sum wins 77% of the time, invest and go. But money is felt, not modeled, and the two strategies fail in asymmetric ways. The lump-sum investor who deploys at a crash eve watches their new portfolio drop 30% and knows it was **their single decision**. The DCA investor who watches the market rip upward during their schedule suffers a slow, recurring regret — and research and lived experience suggest the second pain is easier to survive than the first. That asymmetry is real, it's psychological rather than mathematical, and pretending it away produces investors who abandon plans. A plan you can actually hold through its worst moment beats the optimal plan you quit — the same logic that makes interruption the enemy in [compound growth](/posts/finance-compound).",
    },
    {
      t: "p",
      text: "There is also a second behavioral trap, and it's the more dangerous one: **DCA plans don't fail at the math, they fail at completion.** Twelve months is twelve separate decisions to buy, each one an opportunity to \"wait until things settle.\" The backtest above assumes flawless execution. If you honestly doubt you'll finish the schedule, the automatic, immediate, boring lump sum is the safer choice **for you**, regardless of what the win rate says. And if the money is sitting in a 0.2% checking account \"temporarily,\" the drag is identical to the one that makes idle cash a [guaranteed real loss](/posts/finance-compound).",
    },
    { t: "h2", text: "The decision rules I'd actually use" },
    {
      t: "ol",
      items: [
        "**Default: lump sum, invested per your [allocation](/posts/finance-allocation), automated on day one.** It wins three-quarters of the time, and it removes twelve chances to hesitate. This is also what the evidence from Vanguard and this backtest both support.",
        "**If a 30% drawdown on paper would genuinely break you: 3-month DCA, automated.** It costs less than 1% of expected return and halves the regret exposure. Twelve months of DCA is paying full premium for insurance you probably don't need at that length.",
        "**If the money arrived because you sold another asset, DCA is a hedge against double timing error** — you already made one market call (selling); spreading the re-entry avoids stacking a second one onto the same week.",
        "**Whatever you choose, schedule it before the money arrives.** The whole value of either strategy dies the moment each installment becomes a fresh decision. This is the same reason [automatic monthly investing](/posts/finance-index-dca) works.",
        "**Do not DCA because headlines look scary.** Fear at the moment of entry is the default state of every starting month in this dataset — including the 77% where lump sum won.",
      ],
    },
    {
      t: "p",
      text: "Honest limitations, in one breath: this is US large-cap data only; dividends were reinvested but taxes were not modeled; idle DCA cash earned zero rather than treasury rates (crediting it would narrow the gap by roughly a third); and 155 years of one country's rising market is the only history we get — [equity drawdowns](/posts/finance-nasdaq-drawdown) in other markets have taken decades, not years. The data narrows the decision; it cannot make it for you.",
    },
    {
      t: "quote",
      text: "Lump sum wins three times out of four and costs you nothing but nerve. DCA is insurance: know the premium, choose the deductible, set the schedule before the money lands — then stop renegotiating with yourself.",
    },
  ],
  zh: {
    title: "一次性买入 vs 定投：155 年数据，每一个可能的起始月",
    description:
      "手里有 100 万要投。一次全投，还是分 12 个月？我用 1871 年至今的真实标普 500 数据把每个可能的起始月都跑了一遍——胜率、最差情况、以及每种策略的“保险价格”，全部给出。",
    tags: ["投资", "指数基金"],
    blocks: [
      {
        t: "p",
        text: "一笔年终奖、一笔遗产、一笔卖房款——某天你手里突然多了一大笔钱，然后面对个人理财里最让人难受的问题：**今天全部投进去，还是分批？**分批让人感觉安全，一次全投让人感觉鲁莽。我想要数字而不是感觉，所以用 155 年的真实市场数据跑了一个回测——从 1871 年到 2026 年 9 月的每一个可能的起始月，数据来自 Robert Shiller 公开的[标普 500 历史数据集](https://shillerdata.com/)，含股息再投资。",
      },
      { t: "h2", text: "设定，摆在明处让你可以攻击" },
      {
        t: "ul",
        items: [
          "**一次性（LS）**：第一天投入全部 10 万美元。",
          "**12 个月定投（DCA-12）**：拆成 12 份按月投入，未投出的现金闲置（不记利息——故意保守）。",
          "**计量**：比较起始点 12 个月后的终值；数据集中每个起始月都是一个独立样本。",
          "**回报**：总回报——价格变动 + 股息按月再投资。",
        ],
      },
      {
        t: "p",
        text: "方法与 Vanguard 的[成本平均研究论文](https://corporate.vanguard.com/content/dam/corp/research/pdf/cost_averaging_invest_now_or_temporarily_hold_your_cash.pdf)一致——他们的结论是一次性投入大约三分之二的情况获胜。我的结果略强一些，原因在于 100% 股票指数比他们的 60/40 组合波动更大、长期漂移也更可靠。",
      },
      { t: "h2", text: "结果一：一次性投入大约四分之三的情况获胜" },
      {
        t: "table",
        head: ["区间", "LS 胜率", "LS 平均优势", "中位数", "LS 最差"],
        rows: [
          ["1950 年至今（909 个样本）", "**77.3%**", "+5.2%", "+5.8%", "-28.1%（起点：2008 年 5 月）"],
          ["1871 年至今（1,857 个样本）", "72.0%", "+4.3%", "+4.6%", "-42.5%（起点：1931 年 8 月）"],
        ],
      },
      {
        t: "p",
        text: "三个比表格更值钱的观察。**第一，期限不重要**——12、24、36、60、120 个月的胜率几乎一样，因为 12 个月后两种策略都满仓了市场，决策只关于第一年。**第二，12 个月定投的平均代价约为 5%**，这就是“分批”的期望价格。**第三，最差情况和你猜的一样：2008 年 5 月全额进场**——金融危机走到三分之二处，一次性投资者比把同样金额分摊到全年的同事落后 28%。",
      },
      { t: "h2", text: "结果二：五个最不应该全额进场的时刻" },
      {
        t: "p",
        text: "胜率会掩盖尾部，所以列出著名的崩盘前夜——10 万美元一次性投入 vs 12 个月定投，12 个月后的真实结果：",
      },
      {
        t: "table",
        head: ["起始月", "一次性 12 个月后", "定投 12 个月后", "定投的优势"],
        rows: [
          ["1929 年 9 月（大萧条）", "$69k", "$92k", "+32%"],
          ["1987 年 8 月（黑色星期一）", "$83k", "$100k", "+21%"],
          ["2007 年 10 月（金融危机）", "$64k", "$72k", "+12%"],
          ["2021 年 12 月（加息熊市）", "$85k", "$95k", "+12%"],
          ["2000 年 3 月（互联网泡沫顶）", "$83k", "$85k", "+2%"],
        ],
      },
      {
        t: "p",
        text: "这就是定投的全部理由，诚实版：**在最差的 5-10% 起始月里，分批能帮你保住本金的 2% 到 32%。**在其余 90% 以上的月份里，它平均悄悄花掉你 5%。你不是在聪明和愚蠢之间选，而是在决定要不要为“买在坏时点”买保险、以及愿意付多少保费。",
      },
      { t: "h2", text: "结果三：保险的价目表" },
      {
        t: "p",
        text: "如果你已经决定分批——或者知道自己会慌——分批的长度是一个你可以自己调的旋钮。1950 年至今，起始点 12 个月后评估：",
      },
      {
        t: "table",
        head: ["策略", "跑赢一次性", "相对 LS 平均代价", "相对 LS 最差"],
        rows: [
          ["3 个月分批", "31.6% 的情况", "-0.8%", "-9.6%"],
          ["6 个月分批", "26.3% 的情况", "-2.0%", "-16.4%"],
          ["12 个月分批", "22.7% 的情况", "-4.3%", "-24.8%"],
        ],
      },
      {
        t: "p",
        text: "3 个月方案是被埋没的答案：**它保留了定投大部分的心理安慰，只放弃不到 1% 的期望收益。**经典的 12 个月方案则付足了全额保费。大多数人从没意识到分批时长是个选择——他们默认 12 个月，只因为“定投”这个词通常被这么解释。",
      },
      { t: "h2", text: "统计决定不了的那一半：懊悔" },
      {
        t: "p",
        text: "纸面上这篇文章到此为止：一次性投入四分之三的情况赢，投完收工。但钱是拿来“感受”的，不是拿来建模的，两种策略的失败方式并不对称。在崩盘前夜全额进场的投资者，看着新组合跌去 30%，而且**清楚地知道这是自己一个人的决定**。定投者看着市场在自己的 schedule 里一路涨上去，承受的是慢性的、反复的懊悔——研究和生活经验都表明，第二种痛比第一种好熬。这种不对称是真实的，它是心理的而不是数学的，假装它不存在只会制造放弃计划的投资者。能撑过最差时刻的计划，胜过你会半途而废的最优计划——和[复利](/posts/finance-compound)一篇里“中断是头号杀手”是同一个逻辑。",
      },
      {
        t: "p",
        text: "还有第二个行为陷阱，它更危险：**定投计划的失败不在数学，而在完成。**12 个月定投是 12 次独立的“买入”决定，每一次都是“再等等看”的机会。上面的回测假设了完美执行。如果你诚实地怀疑自己跑不完 schedule，那么自动的、立即的、无聊的一次性投入对你来说就是更安全的选择——无论胜率怎么说。而如果这笔钱正“暂时”躺在 0.2% 的活期里，那种损耗和[复利篇](/posts/finance-compound)里写的“保本的实际亏损”一模一样。",
      },
      { t: "h2", text: "我自己会用的决策规则" },
      {
        t: "ol",
        items: [
          "**默认：一次性投入，按你的[资产配置](/posts/finance-allocation)分好，第一天自动执行。**它四分之三的情况获胜，并且删掉了十二次犹豫的机会。Vanguard 的证据和这个回测都支持它。",
          "**如果纸面 -30% 会真的击垮你：3 个月定投，自动化。**代价不到期望收益的 1%，懊悔敞口减半。12 个月的定投是在为一份你大概率不需要那么长期限的保险付全额保费。",
          "**如果这笔钱来自卖出另一项资产，定投是对“双重择时错误”的对冲**——你已经做过一次市场判断（卖出），把再进场摊开可以避免在同一周叠加第二次。",
          "**无论选哪个，在钱到账之前就定好日程。**两种策略的全部价值，都会在每一期投入变成一次新决定的那一刻死掉。这也是[自动每月定投](/posts/finance-index-dca)能起作用的原因。",
          "**不要因为新闻标题吓人就定投。**进场时的恐惧是这份数据集里每一个起始月的默认状态——包括那 77% 一次性投入获胜的月份。",
        ],
      },
      {
        t: "p",
        text: "诚实声明一口气说完：这只是美国大盘数据；股息再投资但税未建模；定投闲置现金记零收益而非国债利率（计入的话差距会缩小约三分之一）；155 年只有一个国家的上行市场——其他市场的[股票回撤](/posts/finance-nasdaq-drawdown)以几十年计。数据收窄了决策，但不能替你做决定。",
      },
      {
        t: "quote",
        text: "一次性投入四次赢三次，代价只是胆量。定投是保险：看清保费、选好免赔额、在钱到账之前定好日程——然后停止和自己重新谈判。",
      },
    ],
  },
};
