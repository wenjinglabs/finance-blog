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
  zh: {
    title: "2026 年应届生就业市场崩了：数据、原因与真正有用的应对",
    description:
      "有记录以来第一次：应届毕业生失业率高于整体劳动力。NY Fed 官方数据背后的三大结构性力量，以及对新人真正有效的五步应对。",
    tags: ["投资", "基础知识"],
    blocks: [
      {
        t: "summary",
        items: [
          "应届毕业生（22-27 岁）失业率约 5.7%，首次高于整体劳动力（约 4.4%），为有记录以来最大差距（NY Fed 数据）。",
          "三大结构性力量：AI 吃掉入门级任务、低招聘低离职的冻结均衡、学位溢价按专业重定价。应对：技能栈、物理性短缺行业、长跑道、机械定投。",
        ],
      },
      {
        t: "p",
        text: "一个数字概括 2026 年的就业市场：**应届大学毕业生（22-27 岁）失业率约 5.7%，而整体劳动力只有约 4.4%**——有记录以来最大的差距，来自 [纽约联储的毕业生劳动力市场追踪](https://www.newyorkfed.org/research/college-labor-market)。在现代史的绝大部分时间里，箭头都指向另一边：学位意味着低于平均的失业率。这个假设刚刚死去，而大多数毕业生还没被告知。",
      },
      { t: "h2", text: "数字本身，不带情绪" },
      {
        t: "table",
        head: ["群体", "失业率", "来源"],
        rows: [
          ["应届毕业生（22-27 岁）", "约 5.7%", "[纽约联储](https://www.newyorkfed.org/research/college-labor-market)，2026 Q2"],
          ["全体劳动者", "约 4.4%", "[BLS](https://www.bls.gov/opub/ted/youth.htm)，2026 年末"],
          ["16-24 岁青年整体", "9.1-9.9%", "BLS 青年报告，2026 年 7-9 月"],
          ["25 岁以上学位持有者", "约 2.5%", "BLS 教育程度统计"],
          ["25 岁以上无高中文凭", "4.7%", "BLS，2026 年 8 月"],
        ],
      },
      {
        t: "p",
        text: "把表格读两遍，里面藏着一个值得咀嚼的矛盾：**一个 25 岁的毕业生，处境比 45 岁的辍学者更糟——但 45 岁的毕业生是全美国最有安全感的工人。**2026 年惩罚的是年龄和敞口，不是教育本身。学位没有失去价值，失去的是它曾经担保的那级入门台阶。",
      },
      { t: "h2", text: "力量一：AI 正在吃掉入门台阶" },
      {
        t: "p",
        text: "入门级工作从来都是一个组合包：真实工作 + 培训 + 督导。AI 把它拆开了。让初级岗位成为初级的那部分任务——初稿备忘录、常规代码、数据清洗、基础研究、支持工单——现在几秒钟完成，而 2026 年的数据显示了结果：[公司明确把岗位裁掉、把资本转向 AI](https://www.reuters.com/business/world-at-work/companies-cutting-jobs-investments-shift-toward-ai-2026-10-22)，今年以来超过 33 万个裁员被归因于 AI。让人不适的细节是：HR Dive 的调查发现过半雇主把裁员*描述*为 AI 驱动，部分原因是这么说更好听——所以真实的 AI 占比是模糊的。但当 Wells Fargo 和 Shopify 直接冻结招聘时，机制已经不重要：**每年恰好有 200 万毕业生伸手去够的那级台阶，正在被撤走。**",
      },
      { t: "h2", text: "力量二：冻结的梯子（低招聘、低离职）" },
      {
        t: "p",
        text: "第二股力量更安静也更大。2026 年的头条失业率保持温和，不是因为市场健康，而是因为一个奇怪的均衡：**没人招人，也没人辞职。**裁员上头条，但真正的收缩发生在*招聘*这条线上——补员冻结、岗位关闭、应届生项目取消。另一边，在职者不敢动（离职率接近历史低点），因为换工作感觉危险。为什么这冻结了入门市场？因为正常经济里约三分之一的岗位来自*流动*——有人离开，他的座位在底层重新打开。没有离职，就没有底层座位。这一切发生时 GDP 还在增长——有产出没岗位、有生产率没有入职——这就是股市和毕业生体感激烈分歧的原因。",
      },
      { t: "h2", text: "力量三：学位溢价按专业重新定价" },
      {
        t: "p",
        text: "第三股力量是分化。本科学位几十年前就不稀缺了；2026 年重定价的是*哪种*本科。[纽约联储的分专业数据](https://www.newyorkfed.org/research/college-labor-market#--:outcomes-by-major)一直显示差距，AI 把差距拉成了峡谷——计算机科学曾经是安全答案，现在却贡献了各专业里最高的不完全就业率之一，因为它的入门任务最可自动化。 meanwhile，一切需要物理在场或执照的（护理、技工、现场工程）依然紧俏。市场不是在说“学位没用”，而是在说：**学位是地板，不是电梯——而且电梯现在要排号。**",
      },
      { t: "h2", text: "为什么是结构性的，不是一个坏年份" },
      {
        t: "ul",
        items: [
          "**周期论要求招聘回来。**但当招聘的理由（那些任务）被自动化了，招聘就不会回来。过去十年的复苏会重新雇同样的台阶；这一次的复苏在没有它们的情况下重建。",
          "**供给不调整。**无论需求如何，每年约 200 万美国毕业生照样进场，因为入学决定是 4-6 年前按 AI 之前的市场做的。错配先变差，才可能变好。",
          "**资本已经承诺。**数万亿美元 AI 资本开支有回款时间表。靠裁员融资的公司在投资停止烧钱之前无法解冻招聘——以年计，不是以季度计。",
        ],
      },
      { t: "h2", text: "算术给出的应对" },
      {
        t: "ol",
        items: [
          "**用技能栈替换头衔。**市场现在给任务定价，不给凭证定价。邻近性胜过完美：会部署 AI 工具的数据分析师，排名高于纯头衔专家。学会*使用*那台吃掉台阶的机器——杠杆去了那里。",
          "**去物理性短缺的地方卖自己。**医疗、技工、现场工作、持证职业之所以有定价权，恰恰因为 AI 无法远程进入它们。一个带着技工认证的不完全就业毕业生，收入高于等旧梯子的失业毕业生。",
          "**把第一份工作当作打折买入的债券。**在冻结的市场里，接受那份工资不高但接触真实系统的工作——流动恢复时，*在里面*的期权价值，胜过在没有座位的年份里优化工资。这和[早开始投资](/posts/finance-compound)胜过多投钱是同一个逻辑。",
          "**像守卫生命线一样守卫个人跑道。**求职时长才是真正的风险，所以买时间的钱才是真资产：求职期间把[应急备用金](/posts/finance-emergency-fund)扩到 6 个月以上，[现金流记账](/posts/finance-ledger)继续跑——你今天省得下的结余，就是你需要的那条跑道。",
          "**赚到的钱——机械地投出去。**疲软的就业市场不是缺席市场的理由；[一次性 vs 定投的数据](/posts/finance-lump-sum-vs-dca)对你的第一个一万块和对任何人的都一样。",
        ],
      },
      {
        t: "p",
        text: "诚实的警告：这个话题的噪音底很高。“AI 干的”有一部分是营销话术，各调查在边际上有分歧，EPI 对 2026 届的判断也是“更弱，但比标题更复杂”。但上面每一列数据的方向都指向同一处——没有任何严肃数据集显示入门台阶会自己回来。",
      },
      {
        t: "quote",
        text: "学位从来不是资产，它只是对梯子最底层一级的索取权，而梯子正在被重建成没有一级的样子。拥有新梯子需要的技能，让跑道足够长，让你打不过的机器为你工作。",
      },
    ],
  },
};
