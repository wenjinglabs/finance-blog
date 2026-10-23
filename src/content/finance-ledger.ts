import type { Post } from "./types";

export const financeLedger: Post = {
  slug: "finance-ledger",
  title: "Track Your Cash Flow: A Three-Category System That Survives Month Two",
  date: "2026-10-24T10:05:00+08:00",
  description:
    "Detailed budgets fail because they demand daily willpower. This system needs one decision a day and answers the only three questions that matter.",
  tags: ["Personal Finance", "Cash Flow"],
  blocks: [
        {
      t: "summary",
      items: [
        "Track three categories only: fixed, flexible, irregular.",
        "After 30 days, answer three questions: fixed-cost share, top flexible leaks, real monthly surplus.",
      ],
    },
    {
      t: "p",
      text: "Most budgets die in the second month. Not because people are undisciplined, but because a 40-category budget demands dozens of small decisions every week, and decision fatigue is real. The fix is to make tracking coarser, not finer. You don't need to know where every dollar went. You need to know **where the leak is**.",
    },
    { t: "h2", text: "Three categories, nothing else" },
    {
      t: "ol",
      items: [
        "**Fixed** — rent/mortgage, insurance, subscriptions, minimum debt payments. These barely change, so you record them once and move on.",
        "**Flexible** — food, transport, shopping, entertainment. This is the only category that needs ongoing tracking, because it's the only one with real slack in it.",
        "**Irregular** — anything over roughly 5% of monthly income in a single hit: car repairs, medical bills, gifts, travel. Track these separately because they're the ones that masquerade as \"unexpected\" when they're actually just *unscheduled*.",
      ],
    },
    { t: "h2", text: "After 30 days, answer three questions" },
    {
      t: "ul",
      items: [
        "**What fraction of income goes to fixed costs?** Above ~50% and your problem isn't lattes — it's housing or transport, and only a big change (or a raise) fixes it. Knowing this changes which advice applies to you.",
        "**What are the top three lines inside flexible spending?** There are almost always one or two lines you can't reconstruct from memory. That's the leak. It's rarely the thing you feel guilty about.",
        "**What's my actual monthly surplus?** Not what you hoped, what happened. This single number caps every plan that follows: the [emergency fund](/posts/finance-emergency-fund) timeline, the [debt payoff](/posts/finance-debt-order) date, the investable amount. Guessing it is how people end up with plans that fail their first contact with reality.",
      ],
    },
    { t: "h2", text: "Practical notes" },
    {
      t: "ul",
      items: [
        "Any tool works — a spreadsheet, an app, a note on your phone. The only test: **can you log an expense in under 30 seconds?** If not, you'll stop.",
        "Bank/credit card auto-categorization is fine, but strip out internal transfers and payments between your own accounts, or your surplus will be wrong every single month.",
        "The tracking phase is temporary. Once you can predict your surplus within ~10% without checking, stop tracking and go back to a quarterly check-in. Tracking is a diagnostic, not a lifestyle.",
      ],
    },
    {
      t: "quote",
      text: "A budget you abandon in week six tells you nothing. A month of coarse data you actually collected tells you everything you need next.",
    },
  ],
  zh: {
    title: "记账：一个能撑过第二个月的三分类系统",
    description: "精细的预算死于每天需要的意志力。这套系统每天只需要一个决定，却能回答真正重要的三个问题。",
    tags: ["理财", "现金流"],
    blocks: [
            {
        t: "summary",
        items: [
          "只记三类：固定、弹性、大额。",
          "记满 30 天回答三个问题：固定支出占比、弹性支出漏损点、每月真实结余。",
        ],
      },
      {
        t: "p",
        text: "大多数预算死在第二个月。不是因为人没自律，而是因为一个 40 个类别的预算每周要求几十次小决策，决策疲劳是真实的。解法是把记账变粗，而不是变细。你不需要知道每一块钱去哪了，你需要知道**漏洞在哪**。",
      },
      { t: "h2", text: "三个分类，别加第四个" },
      {
        t: "ol",
        items: [
          "**固定**——房租/房贷、保险、订阅、债务最低还款。几乎不变，记一个月就够了。",
          "**弹性**——吃饭、交通、购物、娱乐。唯一需要持续记的类别，也是唯一有真正压缩空间的类别。",
          "**大额**——单笔超过月收入约 5% 的支出：修车、医疗、人情、旅行。单独记，因为它们总被当成“意外”，其实是**没排期**。",
        ],
      },
      { t: "h2", text: "记满 30 天，回答三个问题" },
      {
        t: "ul",
        items: [
          "**固定支出占收入多少？**超过约 50%，问题就不在拿铁，而在住房或通勤——只有大改动（或加薪）能解决。知道这一点，才知道哪些建议对你适用。",
          "**弹性支出里排前三的是什么？**几乎总能找到一两条你完全想不起来的线，那就是漏洞。它很少是你有负罪感的那个东西。",
          "**我每月的真实结余是多少？**不是希望的数字，是发生的数字。这一个数字封顶了后面所有的规划：[备用金](/posts/finance-emergency-fund)的时间线、[还清债务](/posts/finance-debt-order)的日期、可投资金额。拍脑袋估它，是计划第一次接触现实就崩掉的原因。",
        ],
      },
      { t: "h2", text: "实操提示" },
      {
        t: "ul",
        items: [
          "什么工具都行——表格、App、手机备忘录。唯一的检验标准：**能不能在 30 秒内记完一笔**。不能，你就会停。",
          "银行/信用卡的自动分类可以用，但要剔除自己账户之间的转账和还款，否则每月结余永远是错的。",
          "记账阶段是暂时的。当你不看记录也能把结余估准到 ±10%，就停掉日常记账，改成每季度看一次。记账是诊断工具，不是生活方式。",
        ],
      },
      {
        t: "quote",
        text: "第六周就被放弃的预算什么都告诉不了你；一个月粗颗粒、但你真的记完了的数据，能告诉你接下来需要的一切。",
      },
    ],
  },
};
