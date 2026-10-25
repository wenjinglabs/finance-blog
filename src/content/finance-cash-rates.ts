import type { Post } from "./types";

export const financeCashRates: Post = {
  slug: "finance-cash-rates",
  title: "Where to Park Cash in October 2026: HYSA, CDs, and the Ladder Math",
  date: "2026-10-27T10:00:00+08:00",
  description:
    "The Fed just surprised everyone with a hike, top savings accounts pay ~4-5% — and the national average is still 0.38%. The inertia tax, the lock-vs-float decision, and a CD ladder you can build in 20 minutes.",
  tags: ["Personal Finance", "Emergency Fund"],
  blocks: [
    {
      t: "p",
      text: "Two things happened to cash this year, and they point in opposite directions. First: the Fed surprised markets in September 2026 with its first hike in three years ([25bp, to 3.75-4.00%](https://www.jpmorgan.com/insights/global-research/economy/fed-rate-cuts)), and futures still price one more possible move by January. Second: despite cash finally paying real yields, the [FDIC's October 2026 data](https://www.fdic.gov/national-rates-and-rate-caps) shows the national average savings account is still paying **0.38%**. Top high-yield savings accounts pay roughly **4-5%**. That gap — about 11x — is not a market outcome. It is a laziness outcome. This post is about closing it, and then deciding how much cash to lock down given nobody knows the next Fed move.",
    },
    { t: "h2", text: "What cash actually pays right now" },
    {
      t: "chart",
      chart: {
        type: "hbar",
        title: "Typical APYs, October 2026 (FDIC national averages vs best offers)",
        labels: ["Interest checking (avg)", "Savings (avg)", "Money market (avg)", "1-yr CD (avg)", "Top HYSA", "Top CD offer"],
        values: [0.07, 0.38, 0.63, 1.71, 4.5, 5],
        unit: "%",
        highlight: 5,
      },
    },
    {
      t: "p",
      text: "Same FDIC insurance, same money, and a spread from 0.07% to 5% depending entirely on which account holds it. Note what the chart doesn't show: risk. Everything above is deposit-grade or Treasury-grade — the differences are pure friction: your employer's default checking account, the bank your parents used, the inertia of never moving money.",
    },
    { t: "h2", text: "The inertia tax, quantified" },
    {
      t: "chart",
      chart: {
        type: "hbar",
        title: "One year of 0.38% vs 4.5% — what laziness costs",
        labels: ["$10k idle", "$25k idle", "$50k idle", "$100k idle"],
        values: [412, 1030, 2060, 4120],
        unit: "$",
        highlight: 1,
      },
    },
    {
      t: "p",
      text: "$25,000 sitting in an average savings account burns **$1,030 per year** versus the same money in a top high-yield account. That's a phone-transfer's worth of effort for a four-figure return — and unlike [investing the money in the market](/posts/finance-index-dca), this requires no risk tolerance, no thesis, and no holding period. It is the closest thing to free money that exists in personal finance. (If your cash is the [emergency fund](/posts/finance-emergency-fund), this is its default home — the sizing math lives in that post.)",
    },
    { t: "h2", text: "Lock or float: the only real decision" },
    {
      t: "p",
      text: "Once cash is earning real yields, one decision remains: **lock a rate with a CD, or keep it floating in savings** and accept whatever the Fed does next. September's surprise hike makes this genuinely two-sided, so run both scenarios on a $10,000 one-year stake:",
    },
    {
      t: "table",
      head: ["Scenario (next 12 months)", "HYSA (floats)", "1-yr CD (locked ~4.5%)", "Winner"],
      rows: [
        ["Fed hikes again (+50bp): float rises to ~5.0%", "$500", "$450", "HYSA by $50"],
        ["Fed reverses (-100bp): float falls to ~3.5%", "$350", "$450", "CD by $100"],
        ["Rates hold", "$450", "$450", "tie"],
      ],
    },
    {
      t: "p",
      text: "The asymmetry is the point: **the downside of locking (missing a hike) is smaller than the upside (being paid through a cut)** — in these scenarios, roughly $50 versus $100. CDs are insurance against falling rates, and the premium you pay is small when the curve is this flat. But locking everything is still a bet; if September's hike was the start of a tightening cycle, floating cash keeps repricing upward while your CD sits at a now-lowly 4.5%.",
    },
    { t: "h2", text: "The CD ladder: paying both bets at once" },
    {
      t: "p",
      text: "You don't have to choose. A **ladder** splits cash across maturities so a portion is always coming due — near-term money stays flexible, long-term money locks the yield. With $30,000 (that's genuinely not needed for 3 years — different money from the [emergency fund](/posts/finance-emergency-fund)):",
    },
    {
      t: "ol",
      items: [
        "**$10,000 → 1-year CD (~4.5%)** — matures next year, re-decide then with fresh information.",
        "**$10,000 → 2-year CD (~4.3%)** — locks today's yield through most of the uncertainty.",
        "**$10,000 → 3-year CD (~4.2%)** — the far end, where rates are usually highest.",
      ],
    },
    {
      t: "p",
      text: "Outcome after 3 years: about **$32,640** versus $30,340 leaving everything idle at 0.38% — a $2,300 difference for one afternoon of account openings. And the structural benefit matters more than the yield: every year, one rung matures. If rates went up, you reinvest higher; if rates fell, two-thirds of the ladder is still locked at today's yields. The ladder is not an optimized portfolio — it's a machine that makes the right decision automatically, the same reason [automated monthly investing](/posts/finance-index-dca) works.",
    },
    { t: "h2", text: "Rules that hold regardless of the Fed" },
    {
      t: "ol",
      items: [
        "**Emergency fund floats, always.** It exists to be reachable; a 7% early-withdrawal penalty defeats its purpose. HYSA or money market only — this is where 3-6 months of expenses live ([sizing here](/posts/finance-emergency-fund)).",
        "**Ladder only money you can certify is multi-year.** The ladder's math assumes you hold every rung to maturity. If a rung might be needed early, it belongs in the float, not the lock.",
        "**Compare APY, ignore teaser checking bonuses until the math is done.** A $300 checking bonus with 0.07% ongoing is often worse than a boring 4.5% HYSA over two years — but run your own numbers; bonuses can win at larger balances.",
        "**Check rates quarterly, not daily.** Top HYSA yields move together with policy rates; switching for +0.05% is churn. Re-run the comparison at each [quarterly budget check](/posts/finance-budget-methods).",
        "**FDIC (or NCUA) insurance, always.** Everything in this post is deposit-grade. If an 'account' promises more than the Treasury yield for zero risk and no insurance logo, it's one of the [three scam structures](/posts/finance-scam), not a savings account.",
      ],
    },
    {
      t: "p",
      text: "Honest caveat: exact APYs move weekly — the figures here are October 2026 snapshots ([FDIC averages](https://www.fdic.gov/national-rates-and-rate-caps); [Bankrate](https://www.bankrate.com/banking/cds/current-cd-interest-rates) and [Investopedia](https://www.investopedia.com/best-cd-rates-4770618) track the best offers). The structure — close the inertia gap, float the emergency fund, ladder the multi-year money — is the part that doesn't expire.",
    },
    {
      t: "quote",
      text: "The Fed's next move is unknowable. What your cash currently earns is knowable, fixable in twenty minutes, and worth four figures a year on a typical balance. Fix the knowable part and let the unknowable part take care of itself.",
    },
  ],
};
