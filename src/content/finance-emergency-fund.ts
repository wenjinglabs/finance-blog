import type { Post } from "./types";

export const financeEmergencyFund: Post = {
  slug: "finance-emergency-fund",
  title: "The Emergency Fund: Sizing Math and Where to Actually Park It",
  date: "2026-10-24T10:10:00+08:00",
  description:
    "It's the lowest-yielding money you'll ever hold, and it's what lets you hold everything else. Here's how to size it and where to keep it.",
  tags: ["Personal Finance", "Emergency Fund"],
  blocks: [
        {
      t: "summary",
      items: [
        "Size it from expenses: 3 months if income is stable, 6+ if volatile.",
        "Park it where principal cannot drop and withdrawal takes a day: HYSA or money market.",
      ],
    },
    {
      t: "p",
      text: "The emergency fund gets less airtime than any other financial topic because it's boring: no returns to brag about, no strategy to debate. But it does a specific job no other money can do — **it converts emergencies from financial events into inconveniences**. Every dollar of it exists so you never have to sell investments at the worst moment or put a crisis on a credit card.",
    },
    { t: "h2", text: "How much: do the arithmetic, not the folklore" },
    {
      t: "p",
      text: "The baseline is 3-6 months of expenses, but which end of that range you need is determined by three variables:",
    },
    {
      t: "ul",
      items: [
        "**Income volatility.** Salaried with a stable employer: 3 months. Freelance, commission-based, or single-income household: 6+ months.",
        "**Number of earning adults in the household.** Two independent incomes are themselves a hedge; one income supporting several people needs the bigger buffer.",
        "**What a gap actually costs you.** Estimate honestly: if you lost your income today, how many months until a new one, at your field's real pace? Use that number, not optimism.",
      ],
    },
    {
      t: "p",
      text: "Note the base is **expenses**, not income. If your essential monthly spend is $3,200 and you settled on 5 months, the target is $16,000. Sizing off income inflates the target and makes people quit halfway.",
    },
    { t: "h2", text: "Where it lives: the requirements narrow the list" },
    {
      t: "p",
      text: "Two requirements — principal can't drop, and you can get it within about a day. That leaves roughly:",
    },
    {
      t: "ul",
      items: [
        "**High-yield savings account.** The default answer. Currently ~4-5% APY in the US market (as of late 2026, this moves with policy rates — check current numbers). [FDIC insured](https://www.fdic.gov/deposit-insurance) up to limits.",
        "**Money market funds.** Similar yields, held at a brokerage. Extremely liquid, but not FDIC insured (they hold short-term instruments; historically very stable but not guaranteed).",
        "**A tiered setup.** One month of expenses in checking, the rest in HYSA. Buys you \"no action needed\" coverage for small shocks.",
      ],
    },
    {
      t: "p",
      text: "What doesn't qualify, no matter how good it looks: anything with a lock-up period, anything whose value fluctuates, and anything with a withdrawal penalty. Chasing an extra 0.5% on $15,000 earns you $75/year. One forced sale of investments in a downturn routinely costs thousands. **The emergency fund is not where you optimize returns — that is a job for [index funds](/posts/finance-index-dca).**",
    },
    { t: "h2", text: "Three failure modes" },
    {
      t: "ol",
      items: [
        "**Investing the emergency fund** \"temporarily.\" The market drops exactly when jobs disappear — the two risks are correlated. This is the classic first-loss story.",
        "**Counting a credit line as the fund.** Credit solves timing problems, not solvency problems, and it's repriced or cancelled at precisely the wrong moments.",
        "**Never re-sizing.** Life changes — a kid, a mortgage, a move. Check the number against reality once a year.",
      ],
    },
    {
      t: "quote",
      text: "The emergency fund isn't an investment. It's the insurance policy that makes it rational to be an aggressive long-term investor with everything else.",
    },
  ],
  zh: {
    title: "应急备用金：怎么算够，以及放在哪",
    description: "它是你收益率最低的一笔钱，也是让你能持有其他所有资产的东西。这一篇讲清楚怎么算额度、放哪里。",
    tags: ["理财", "应急备用金"],
    blocks: [
            {
        t: "summary",
        items: [
          "按支出算额度：收入稳定 3 个月，波动 6 个月以上。",
          "放在本金不波动、一天内能取的地方：高息活期或货币基金。",
        ],
      },
      {
        t: "p",
        text: "应急备用金是最少被聊的理财话题，因为它无聊：没有收益可以炫耀，没有策略可以争论。但它做一件其他任何钱都做不到的事——**把突发事件从财务事件降级为麻烦事**。它的每一块钱都存在，只为让你永远不必在最差的时点卖出资产，或把一场危机刷进信用卡。",
      },
      { t: "h2", text: "算多少：做算术，别背口诀" },
      {
        t: "p",
        text: "基准是 3-6 个月的支出，但你落在哪一端，由三个变量决定：",
      },
      {
        t: "ul",
        items: [
          "**收入波动性。**有稳定雇主的工薪：3 个月。自由职业、佣金制、单收入家庭：6 个月起步。",
          "**家庭里赚钱的人数。**两份独立收入本身就是对冲；一份收入养几个人，就要更大的缓冲。",
          "**收入中断的真实成本。**诚实地估：如果今天失业，按你所在行业的真实节奏，几个月能找到下一份？用这个数字，别用乐观。",
        ],
      },
      {
        t: "p",
        text: "注意基数是**支出**不是收入。必要月支出 3,200、取 5 个月，目标就是 16,000。按收入算会把目标撑大，让人半途放弃。",
      },
      { t: "h2", text: "放哪里：两个要求把清单缩得很短" },
      {
        t: "p",
        text: "两个要求——本金不能跌、大约一天内能取出来。剩下的选项大致是：",
      },
      {
        t: "ul",
        items: [
          "**高息活期存款。**默认答案。美国市场目前约 4-5% 年化（2026 年末，随政策利率浮动，用前查当下数字），[有存款保险](https://www.fdic.gov/deposit-insurance)。",
          "**货币基金。**收益相近，在券商账户持有。流动性极好，但不受存款保险（底层是短期工具，历史上很稳，但无保证）。",
          "**分层设置。**一个月支出放活期，其余放高息活期。小额冲击连动作都不用做。",
        ],
      },
      {
        t: "p",
        text: "无论看起来多好，以下都不合格：有封闭期的、净值会波动的、取回有罚金的。为 15,000 多挣 0.5% 是每年 75 块；一次被迫在下跌中卖资产动辄亏几千。**备用金不是用来优化收益的地方——那是[指数基金](/posts/finance-index-dca)的工作。**",
      },
      { t: "h2", text: "三种典型死法" },
      {
        t: "ol",
        items: [
          "**把备用金“暂时”投出去。**市场下跌和失业总是同时发生——这两个风险是相关的。这是经典的第一笔亏损剧本。",
          "**把信用额度当备用金。**信用解决的是时间差，不是偿付能力，而且它恰恰会在最坏的时刻被调低或取消。",
          "**从不重新校准。**生活会变——孩子、房贷、搬家。每年把额度对一次现实。",
        ],
      },
      {
        t: "quote",
        text: "备用金不是投资。它是保险，是让你敢对其他所有钱做长期激进投资的那个保险。",
      },
    ],
  },
};
