import type { Post } from "./types";

export const financeGradJobs: Post = {
  slug: "finance-grad-jobs",
  title: "The Grad Job Market Broke in 2026: The Numbers, the Reasons, and What Actually Helps",
  date: "2026-10-26T16:00:00+08:00",
  description:
    "For the first time on record, recent college graduates are unemployed at a higher rate than the overall workforce. The data behind that flip, the three forces that caused it, and the moves that still work for someone starting out.",
  tags: ["Investing", "Fundamentals"],
  blocks: [
    {
      t: "p",
      text: "One statistic sums up 2026's job market better than any essay: **recent college graduates (ages 22-27) now face ~5.7% unemployment while the overall workforce sits near 4.4%** — the widest gap on record, per the [New York Fed's College Labor Market tracker](https://www.newyorkfed.org/research/college-labor-market). For almost the entire modern era, the arrow pointed the other way: a degree meant *lower* unemployment than average. That assumption just died, and most graduates haven't been told. This post is about why the flip happened, why it's structural rather than cyclical, and what the arithmetic says a new graduate should actually do about it.",
    },
    { t: "h2", text: "The numbers, without the mood" },
    {
      t: "table",
      head: ["Group", "Unemployment", "Source"],
      rows: [
        ["Recent graduates, 22-27", "~5.7%", "[NY Fed](https://www.newyorkfed.org/research/college-labor-market), 2026 Q2"],
        ["All workers", "~4.4%", "[BLS](https://www.bls.gov/opub/ted/youth.htm), late 2026"],
        ["Youth 16-24 overall", "9.1-9.9%", "BLS youth release, Jul-Sep 2026"],
        ["College grads 25+", "~2.5%", "BLS educational attainment"],
        ["Workers 25+, no diploma", "4.7%", "BLS, Aug 2026"],
      ],
    },
    {
      t: "p",
      text: "Read the table twice, because it contains a contradiction worth sitting with: **a 25-year-old with a degree is worse off than a 45-year-old dropout — but a 45-year-old graduate is the most secure worker in America.** Age and exposure, not education itself, is what 2026 punishes. The degree didn't lose its value; the *entry rung* it used to guarantee did.",
    },
    { t: "h2", text: "Force one: AI is eating the entry rung" },
    {
      t: "p",
      text: "The entry-level job has always been a bundle: real work plus training plus supervision. AI unbundles it. Tasks that made junior roles junior — first-draft memos, routine code, data cleaning, basic research, support tickets — are now done in seconds, and the 2026 data shows the result: [companies are explicitly cutting roles as capital shifts toward AI](https://www.reuters.com/business/world-at-work/companies-cutting-jobs-investments-shift-toward-ai-2026-10-22), with over 330,000 job cuts attributed to AI so far this year. The uncomfortable nuance: an HR Dive survey found a majority of employers *frame* layoffs as AI-driven partly because it plays better — so the true AI share is fuzzy. But when Wells Fargo and Shopify freeze hiring outright, the mechanism doesn't matter: **the ladder's bottom rung is being removed at exactly the moment 2 million graduates a year reach for it.**",
    },
    { t: "h2", text: "Force two: the frozen ladder (low hiring, low firing)" },
    {
      t: "p",
      text: "The second force is quieter and bigger. Headline unemployment stayed moderate through 2026 not because the market is healthy, but because of a bizarre equilibrium: **nobody hires and nobody quits.** Layoffs get headlines, but the real contraction is in the *hiring* line — backfills frozen, reqs closed, new-grad programs cancelled. And on the other side, employed workers are staying put (quit rates near historic lows) because switching feels dangerous. Why does that freeze the entry market? Because in a normal economy, roughly a third of openings come from *churn* — someone leaves, their seat reopens at the bottom. No quits, no bottom seats. GDP kept growing through all of this — output without jobs, productivity without onboarding — which is why the stock market and the graduate experience disagree so violently.",
    },
    { t: "h2", text: "Force three: the degree premium re-priced by major" },
    {
      t: "p",
      text: "The third force is differentiation. A bachelor's stopped being scarce decades ago; what 2026 repriced is *which* bachelor's. The NY Fed's [outcomes-by-major data](https://www.newyorkfed.org/research/college-labor-market#--:outcomes-by-major) has always shown a spread; AI widened it into a canyon — computer science, once the safe answer, now produces some of the highest underemployment rates among majors, because its entry-level tasks are the most automatable. Meanwhile anything requiring a physical presence or a license (nursing, skilled trades, field engineering) stayed tight. The market isn't saying \"degrees are worthless.\" It's saying: **the degree is a floor, not an elevator — and the elevator now has a waitlist.**",
    },
    { t: "h2", text: "Why this is structural, not a bad year" },
    {
      t: "ul",
      items: [
        "**The cycle argument would require hiring to return.** Hiring doesn't return when the task list that justified the hiring is automated. Recoveries of the past decade re-hired the same rungs; this one is re-building without them.",
        "**Supply doesn't adjust.** ~2 million US graduates enter annually regardless of demand, because enrollment decisions were made 4-6 years ago based on the pre-AI market. The mismatch gets worse before it gets better.",
        "**The capital is committed.** Trillions in AI capex has a payback schedule. Companies that cut to fund it cannot afford to unfreeze hiring until the investment stops burning cash — measured in years, not quarters.",
      ],
    },
    { t: "h2", text: "What the arithmetic says to do" },
    {
      t: "ol",
      items: [
        "**Trade the title for the skill stack.** The market now prices tasks, not credentials. Adjacency beats perfection: the data-adjacent analyst who can also deploy AI tools outranks the pure-title specialist. Learn to *use* the machine eating the rungs — that's where the leverage went.",
        "**Sell where the shortage is physical.** Healthcare, trades, field work, and licensed professions have pricing power precisely because AI can't remote into them. An underemployed grad with a trade certification out-earns the unemployed one waiting for the old ladder.",
        "**Treat the first job as a bond you're buying cheap.** In a frozen market, take the underpaid role that touches real systems — the option value of being *inside* when churn resumes beats optimizing for salary in a year with no seats. This is the same logic that makes [starting to invest early](/posts/finance-compound) beat starting big.",
        "**Guard the personal runway ruthlessly.** Job-search length is the real risk, so the fund that buys time is the real asset: [size the emergency fund](/posts/finance-emergency-fund) to 6+ months during the search, and keep the [cash-flow ledger](/posts/finance-ledger) running — the surplus you can live without today is the runway you'll need.",
        "**And the money you do earn — invest it mechanically.** A weak labor market is not a reason to sit out the market; [the data on lump sums and DCA](/posts/finance-lump-sum-vs-dca) applies to your first $10k exactly as it does to anyone's.",
      ],
    },
    {
      t: "p",
      text: "One honest caveat: the noise floor in this topic is high. \"AI did it\" claims are partly marketing cover, surveys disagree at the margins, and the EPI's own read of the class of 2026 is \"weaker, but more mixed than headlines suggest.\" The direction of every series above, however, points the same way — and no serious dataset shows the entry rung coming back on its own.",
    },
    {
      t: "quote",
      text: "The degree was never the asset. It was a claim on the bottom rung of a ladder, and the ladder is being rebuilt without one. Own the skills the new ladder needs, keep the runway long, and let the machines you can't beat work for you instead.",
    },
  ],
};
