import type { Post } from "./types";

export const financeIndexDca: Post = {
  slug: "finance-index-dca",
  title: "Index Funds and Dollar-Cost Averaging: What You're Actually Buying",
  date: "2026-10-24T10:15:00+08:00",
  description:
    "DCA isn't magic and index funds aren't risk-free. What they actually do is solve two specific problems — and stop working the moment you misuse them.",
  tags: ["Investing", "Index Funds"],
  blocks: [
        {
      t: "summary",
      items: [
        "A 1% fee gap consumes about 23% of final wealth over 40 years.",
        "DCA pays off only if you keep buying through the drawdown — with money you won't need for 5+ years.",
      ],
    },
    {
      t: "p",
      text: "Index funds and dollar-cost averaging get sold as a bundle, but they solve two different problems. An index fund solves **stock-picking**: you can't reliably pick winners, so you buy the whole market at near-zero cost. DCA solves **timing**: you can't reliably pick moments either, so you spread entries out. Understanding which problem each solves tells you when the advice stops applying.",
    },
    { t: "h2", text: "The fee math is the quiet superpower" },
    {
      t: "p",
      text: "Index funds' real edge is cost, and cost compounds just like returns. Here's the same investor — $10,000/year contributed, 7% gross annual return, 40 years:",
    },
    {
      t: "ul",
      items: [
        "At 0.05% expense ratio (typical broad index fund): roughly **$2.0M**",
        "At 1.05% expense ratio (typical actively managed fund): roughly **$1.55M**",
      ],
    },
    {
      t: "p",
      text: "That 1% annual difference consumes about **23% of your final wealth** over 40 years. Fees are one of the very few variables in investing you fully control, which is why they're the first thing to check on any fund, before anything else about it.",
    },
    { t: "h2", text: "What DCA actually earns, and what it doesn't" },
    {
      t: "ul",
      items: [
        "**It earns the market's long-run return** — the beta. Buying broad indexes is a bet that economies grow over decades. Historically, that bet has paid; it is not a guarantee for any particular market or period.",
        "**It smooths your entry price.** Fixed amounts buy more shares when prices are low. This only pays off if prices *recover* after falling. In a permanent decline, DCA just loses money more slowly.",
        "**It does not protect you from selling at the bottom.** DCA is a buying strategy. The damage in most real portfolios comes from the selling side — stopping the plan during a crash, which silently converts the recovery from your friend to a stranger.",
      ],
    },
    { t: "h2", text: "The three prerequisites" },
    {
      t: "ol",
      items: [
        "**Choose broad, not thematic.** Broad indexes (total market, S&P 500, developed+EM mixes) represent the average. Thematic funds are concentrated bets sold to you after they've already run up — the opposite of what made the index idea good.",
        "**Use money you won't need for 5+ years.** DCA's arithmetic needs a full down-and-recovery cycle to work. Money needed sooner belongs in the [emergency fund](/posts/finance-emergency-fund) or stable assets, not the market.",
        "**Automate the buy, then leave it.** The whole value of automation is that it removes the monthly decision. (Already hold the full amount today? See [lump sum vs DCA](/posts/finance-lump-sum-vs-dca) — spreading it out is a choice, not a duty.) The moment you're judging each month's purchase by how you feel about the news, you've switched strategies without admitting it.",
      ],
    },
    {
      t: "quote",
      text: "Index investing earns the market's return minus almost nothing. Most investors earn the market's return minus their own behavior. The gap between those two sentences is the entire game.",
    },
  ],
  zh: {
    title: "指数基金与定投：你实际在买什么",
    description: "定投不神奇，指数基金也不是零风险。它们各自解决一个具体问题——而用错的那一刻，好处就全部消失。",
    tags: ["投资", "指数基金"],
    blocks: [
            {
        t: "summary",
        items: [
          "1% 的费率差，40 年吞掉约 23% 的最终财富。",
          "定投要在下跌中继续买才有意义，且必须用 5 年以上不用的钱。",
        ],
      },
      {
        t: "p",
        text: "指数基金和定投常被打包出售，但它们解决的是两个不同的问题。指数基金解决**选股**：你无法稳定选出赢家，所以以近零成本买下整个市场。定投解决**择时**：你同样无法稳定选出时点，所以把买入摊开。分清各自解决什么，才知道这套建议什么时候失效。",
      },
      { t: "h2", text: "费率才是安静的大杀器" },
      {
        t: "p",
        text: "指数基金真正的优势是成本，而成本和收益一样会复利。同一位投资者——每年投入 10,000，总回报按年化 7%，投 40 年：",
      },
      {
        t: "ul",
        items: [
          "费率 0.05%（典型宽基指数基金）：约 **200 万**",
          "费率 1.05%（典型主动管理基金）：约 **155 万**",
        ],
      },
      {
        t: "p",
        text: "每年 1% 的差异，40 年吃掉约 **23% 的最终财富**。费率是投资里极少数你完全可控的变量，所以看任何基金，第一件事看费率，其他都往后排。",
      },
      { t: "h2", text: "定投真正赚什么钱、不赚什么钱" },
      {
        t: "ul",
        items: [
          "**它赚市场长期上涨的钱**（贝塔）。买宽基指数，本质是赌经济几十年内长期增长。历史上这个赌注赢了，但它不是对任何市场、任何时期的保证。",
          "**它摊薄你的买入成本。**固定金额在低位买到更多份额。但这只有在“下跌后回升”时才兑现——单边下跌的品种定投只是亏得慢一点。",
          "**它不能保护你不卖在底部。**定投是买入策略。多数真实组合的亏损来自卖出那一侧——暴跌时停掉计划，等于亲手把“回升”从自己的朋友变成路人。",
        ],
      },
      { t: "h2", text: "三个前提" },
      {
        t: "ol",
        items: [
          "**选宽基，不选主题。**宽基指数（全市场、标普 500、发达+新兴市场组合）代表市场平均。热门主题基金是集中赌注，而且往往是在涨起来之后才卖给你——恰好是指数思想要避免的反面。",
          "**用 5 年以上不用的钱。**定投的算术需要完整穿越一个下跌-回升周期。更早要用的钱属于[备用金](/posts/finance-emergency-fund)或稳健层，不属于市场。",
          "**自动买入，然后别碰。**自动化的全部价值在于消除每个月的决策。（今天就已经持有全部资金？参见[一次性买入 vs 定投](/posts/finance-lump-sum-vs-dca)——分批是选择，不是义务。）当你开始根据新闻感受来判断这个月买不买，你已经换了一套策略，只是没承认。",
        ],
      },
      {
        t: "quote",
        text: "指数投资赚的是市场收益减去几乎为零。大多数投资者赚的是市场收益减去自己的操作。这两句话之间的差距，就是整个游戏。",
      },
    ],
  },
};
