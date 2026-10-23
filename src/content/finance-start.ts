import type { Post } from "./types";

export const financeStart: Post = {
  slug: "finance-start",
  title: "Start Here: The Order of Operations for Your Money",
  date: "2026-10-24T10:00:00+08:00",
  description:
    "Most money problems come from doing step 5 before step 2. This is the sequence that matters, and why each step sits where it does.",
  tags: ["Fundamentals", "Personal Finance"],
  blocks: [
        {
      t: "summary",
      items: [
        "Work in order: basics → employer match → high-interest debt → emergency fund → long-term investing.",
        "Paying off a 22% APR card is a guaranteed 20% return — order beats intensity.",
      ],
    },
    {
      t: "p",
      text: "Personal finance advice is usually presented as a buffet: budgeting apps here, index funds there, a hot stock tip on the side. That framing is wrong. Personal finance is a **sequence** — each step only works because the ones before it are done. Doing them out of order isn't just suboptimal; it's how people end up investing in the stock market while carrying 24% APR credit card debt.",
    },
    { t: "h2", text: "The sequence" },
    {
      t: "ol",
      items: [
        "**Cover survival basics from current income.** Rent, food, utilities, minimum debt payments. Nothing else on this list is possible until this is stable.",
        "**Capture every employer 401(k) match.** A 50% match is an instant 50% return. No investment on earth reliably beats that. If your employer matches, contributing up to the match is not investing — it's collecting pay you already earned.",
        "**Kill high-interest debt.** Paying off a 20% APR balance is a guaranteed, tax-free 20% return. Compare that to the stock market's long-run ~7-10% nominal and the choice is arithmetic, not opinion.",
        "**Build an [emergency fund](/posts/finance-emergency-fund).** Roughly 3-6 months of essential expenses, held somewhere boring and liquid. This is the firewall that keeps a car repair from becoming a credit card balance (back to step 3).",
        "**Invest for the long term in tax-advantaged accounts.** Broad, low-cost index funds. This is where most of your lifetime returns will come from — but only if steps 1-4 hold.",
        "**Then optimize.** Extra mortgage payments, taxable investing, alternative assets. Fine — but this is the top floor, not the foundation.",
      ],
    },
    { t: "h2", text: "Why order beats intensity" },
    {
      t: "p",
      text: "A person saving $500/month while carrying $8,000 of credit card debt at 22% APR loses about $1,760/year to interest — more than 29% of everything they save. The same person who clears the debt first hasn't just saved that interest; they've converted their savings rate from leaking to compounding. **The order of operations is itself the biggest return available to most people**, bigger than any fund choice.",
    },
    { t: "h2", text: "What this site is for" },
    {
      t: "ul",
      items: [
        "Working through each step in depth: cash flow, emergency funds, index investing, allocation.",
        "Showing the arithmetic behind each recommendation, including when a common rule of thumb is wrong.",
        "Documenting my own mistakes, because the failure modes are more instructive than the success stories.",
      ],
    },
    {
      t: "quote",
      text: "The goal isn't to find clever investments. It's to stop doing the two or three things that quietly guarantee mediocre results.",
    },
  ],
  zh: {
    title: "从这里开始：管钱的正确顺序",
    description: "大多数财务问题源于把第 5 步做在了第 2 步前面。真正重要的是顺序本身，以及每一步为什么排在那个位置。",
    tags: ["基础知识", "理财"],
    blocks: [
            {
        t: "summary",
        items: [
          "按顺序来：生存开支 → 拿满雇主匹配 → 清高息债 → 备用金 → 长期投资。",
          "还清一张 22% 年利率的卡等于一笔保本 20% 收益——顺序比强度重要。",
        ],
      },
      {
        t: "p",
        text: "理财建议通常被摆成自助餐：记账 App 一份、指数基金一份、再加一条热门股票消息。这个框架是错的。个人理财是一套**顺序**——每一步之所以成立，是因为前面的步骤已经完成。顺序做错不只是低效，这正是“一边投着股市、一边背着 24% 年利率信用卡债”的由来。",
      },
      { t: "h2", text: "正确的顺序" },
      {
        t: "ol",
        items: [
          "**用当期收入覆盖生存开支。**房租、吃饭、水电、债务最低还款。这一步不稳，后面的都免谈。",
          "**拿满雇主养老计划的匹配额度。**50% 的匹配等于即时 50% 的收益，没有任何投资能稳定跑赢。有匹配而不拿满，等于放弃已到手的工资。",
          "**消灭高息负债。**还清一张 20% 年利率的卡，等于获得一笔保本、免税的 20% 收益。对比股市长期 7-10% 的名义回报，这不是观点题，是算术题。",
          "**建立[应急备用金](/posts/finance-emergency-fund)。**约 3-6 个月的必要支出，放在无聊但随取随用的地方。它是防止一次修车变成信用卡负债的防火墙（否则回到第 3 步）。",
          "**在税收优惠账户里做长期投资。**宽基、低费率的指数基金。你一生的投资回报大头来自这里——但前提是第 1-4 步都站稳了。",
          "**然后才是优化。**提前还房贷、应税账户投资、另类资产。可以做——但这是顶楼，不是地基。",
        ],
      },
      { t: "h2", text: "为什么顺序比强度重要" },
      {
        t: "p",
        text: "一个人每月存 500 美元，但同时背着 8,000 美元年利率 22% 的卡债，每年要付约 1,760 美元利息——超过储蓄额的 29%。同样的钱先还清债务，不只是省下这笔利息，而是让储蓄从“漏水”变成“复利”。**对多数人来说，顺序本身就是最大的可用收益**，大于任何基金选择的差异。",
      },
      { t: "h2", text: "这个站做什么" },
      {
        t: "ul",
        items: [
          "逐层展开上面的每一步：现金流、备用金、指数投资、资产配置。",
          "给出每条建议背后的算术，包括常见经验法则什么时候是错的。",
          "记录我自己踩过的坑，因为失败模式比成功故事更有教学价值。",
        ],
      },
      {
        t: "quote",
        text: "目标不是找到聪明的投资，而是停止做那两三件会安静地保证平庸结果的事。",
      },
    ],
  },
};
