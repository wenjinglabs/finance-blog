import type { Post } from "./types";

export const financeBudgetMethods: Post = {
  slug: "finance-budget-methods",
  title: "50/30/20 vs Zero-Based Budgeting: Which One Survives Contact With Your Life",
  date: "2026-10-26T10:00:00+08:00",
  description:
    "One budget fits in your head, the other fits your actual spending. A comparison of the two dominant methods — with the savings-rate ladder that matters more than which one you pick.",
  tags: ["Personal Finance", "Cash Flow"],
  blocks: [
    {
      t: "p",
      text: "There are only two budgeting methods with real staying power. **50/30/20** — split after-tax income into 50% needs, 30% wants, 20% savings — was popularized by Elizabeth Warren and Amelia Warren Tyagi in their 2005 book *All Your Worth* (see the [personal budget overview](https://en.wikipedia.org/wiki/Personal_budget) for the rule in context). **Zero-based budgeting (ZBB)** — assign every single dollar a job before the month starts — is the engine behind YNAB and every hard-core spreadsheet. People argue about which is \"right.\" The honest answer: they solve different problems, break in different places, and one of them matters about five times more than the other.",
    },
    { t: "h2", text: "What each method actually asks of you" },
    {
      t: "table",
      head: ["", "50/30/20", "Zero-based"],
      rows: [
        ["Core idea", "Three percentage buckets", "Every dollar assigned a job"],
        ["Decisions per month", "≈ 1 (set the split)", "20-40 (categorize everything)"],
        ["Tooling", "Works in your head or one spreadsheet row", "Wants an app or a real spreadsheet"],
        ["Best at", "Preventing drift with near-zero effort", "Finding leaks; digging out of a hole"],
        ["Fails when", "Fixed costs exceed 50% (very common)", "You stop doing the monthly ritual"],
      ],
    },
    {
      t: "p",
      text: "50/30/20 is a **target**, not a tracking system: it tells you where money should go and lets your bank statement tell you afterwards whether it did. Zero-based is a **process**: it forces you to touch every expense monthly, which is exactly why it finds leaks and exactly why people abandon it in month three. One optimizes for sustainability, the other for visibility.",
    },
    { t: "h2", text: "Where 50/30/20 breaks: the 50% is not a choice" },
    {
      t: "p",
      text: "The rule's quiet assumption is that needs fit inside 50% of income. In expensive cities, housing alone can eat 35-45% before food and transport. At $3,000/month take-home, the rule assigns $1,500 to needs — while a modest one-bedroom in many metros costs more than that. When fixed costs exceed the bucket, the rule doesn't bend; it just produces guilt. That's not a discipline failure, it's the rule's design limit: **50/30/20 is calibrated for mid-range incomes in moderate-cost areas.** Below that line, use it directionally (track the three buckets, ignore the percentages) rather than as targets.",
    },
    {
      t: "p",
      text: "Zero-based handles this differently — it doesn't care what the percentages are. If needs take 65%, ZBB forces you to see it and make explicit trade-offs elsewhere. That's why it's the better tool for the two hardest situations: **climbing out of debt** (every dollar visibly deployed against the balance — see the [payoff-order math](/posts/finance-debt-order)) and **repairing a broken cash flow** after a [tracking month](/posts/finance-ledger) reveals a leak.",
    },
    { t: "h2", text: "The part that matters more than the method" },
    {
      t: "p",
      text: "Here's the uncomfortable arithmetic: the method is the brush, the **savings rate** is the painting. On $10,000/month take-home at a 6% long-run return, each 5-point shift in savings rate is worth roughly half a million dollars over 30 years:",
    },
    {
      t: "table",
      head: ["Savings rate", "Monthly invested", "Value after 30 years (6%/yr)"],
      rows: [
        ["5%", "$500", "~$502,000"],
        ["10%", "$1,000", "~$1,005,000"],
        ["15%", "$1,500", "~$1,507,000"],
        ["20%", "$2,000", "~$2,009,000"],
        ["25%", "$2,500", "~$2,511,000"],
      ],
    },
    {
      t: "p",
      text: "Notice what's absent from that table: the budgeting method. A person running casual 50/30/20 who saves 20% every month beats a meticulous zero-based budgeter saving 5% — by about $1.5 million over 30 years. The method only matters insofar as it moves the savings rate. Pick the one that keeps **your** rate where it needs to be, and the zealotry on both sides becomes noise.",
    },
    { t: "h2", text: "The hybrid that actually works" },
    {
      t: "ol",
      items: [
        "**Automate the savings rate first.** On payday, auto-transfer the savings amount to [investments](/posts/finance-index-dca) before any spending decisions exist. This single step does more than any tracking method — it makes the savings rate structural instead of aspirational.",
        "**Run 50/30/20 as your background check.** Once a quarter, tally the three buckets from statements. You're not micromanaging — you're checking whether needs crept past their line.",
        "**Deploy zero-based only as a repair tool.** When the quarterly check finds a leak, or debt is climbing, run one or two months of strict ZBB to find and kill the cause — then go back to coasting.",
        "**Keep the wants bucket honest by naming it.** A [discretionary budget you can spend guilt-free](/posts/finance-emergency-fund) — yes, guilt-free — is what makes the whole system durable. Budgets that feel like punishment don't survive their first bad week.",
      ],
    },
    {
      t: "p",
      text: "The hybrid works because it matches effort to stakes: automation (zero effort, highest value) → quarterly audit (low effort, catches drift) → zero-based surgery (high effort, only when something's broken). Full-time zero-based budgeting is a tool borrowed from the repair phase that most people never return.",
    },
    {
      t: "p",
      text: "One honest limitation: the 50/30/20 percentages are a US heuristic from a 2005 book — the 20% savings bucket is decent, but [the order your money should follow](/posts/finance-start) (employer match → high-interest debt → emergency fund) still governs *where* the savings bucket goes first.",
    },
    {
      t: "quote",
      text: "Don't marry a budgeting method. Marry a savings rate, automate it, and use whichever tracking method keeps you honest with the least effort.",
    },
  ],
  zh: {
    title: "50/30/20 vs 零基预算：哪种方法能扛住真实生活",
    description:
      "一种装得进脑子里，另一种贴得住真实开销。两大主流记账法的正面对比——以及比选方法重要五倍的“储蓄率阶梯”。",
    tags: ["理财", "现金流"],
    blocks: [
      {
        t: "p",
        text: "真正活得久的记账方法只有两种。**50/30/20**——税后收入按 50% 必需、30% 想要、20% 储蓄分配——由 Elizabeth Warren 和女儿 Amelia Warren Tyagi 在 2005 年的《All Your Worth》一书中推广（规则语境见[个人预算条目](https://en.wikipedia.org/wiki/Personal_budget)）。**零基预算（ZBB）**——月初给每一块钱都安排任务——是 YNAB 和所有硬核表格背后的引擎。人们争论哪种“对”。诚实的答案是：它们解决的是不同的问题、在不同的地方失灵，而且其中一件比另一件重要五倍。",
      },
      { t: "h2", text: "两种方法实际要求你做什么" },
      {
        t: "table",
        head: ["", "50/30/20", "零基预算"],
        rows: [
          ["核心思想", "三个百分比桶", "每一块钱都有任务"],
          ["每月决策次数", "约 1 次（定好比例）", "20-40 次（给每笔支出归类）"],
          ["工具要求", "脑子里或一行表格就够", "需要一个 App 或真正的表格"],
          ["最擅长", "近乎零成本地防漂移", "找漏洞；从坑里往外爬"],
          ["失灵条件", "固定支出超过 50%（非常常见）", "你停止执行每月仪式"],
        ],
      },
      {
        t: "p",
        text: "50/30/20 是一个**目标**而不是记账系统：它告诉你钱应该去哪，然后让账单事后告诉你有没有做到。零基预算是一个**流程**：它强迫你每月亲手碰每一笔支出——这正是它能找到漏洞的原因，也正是人们第三个月就放弃的原因。一个为可持续性优化，另一个为可见性优化。",
      },
      { t: "h2", text: "50/30/20 的断点：50% 不是你能选的" },
      {
        t: "p",
        text: "这条规则的隐含假设是“必需品装得进 50%”。在房价高的城市，仅住房一项就能吃掉 35-45%，还没算吃饭和交通。月到手 $3,000 时，规则给必需品分 $1,500——而很多城市一间普通一居室的租金就超过这个数。固定支出一旦越界，规则不会弯曲，只会生产负罪感。这不是自律问题，是规则的设计边界：**50/30/20 是按中等收入、中等生活成本校准的。**低于这条线，把它当方向（追踪三个桶、忽略百分比），别当硬指标。",
      },
      {
        t: "p",
        text: "零基预算对此的处理完全不同——它根本不在乎百分比是多少。必需品吃掉 65% 也行，ZBB 强迫你亲眼看见，然后在别处做显式的取舍。所以它才是两种最难场景下的更好工具：**从债务里往外爬**（每一块钱都可视化地砸向余额——参见[还债顺序的算术](/posts/finance-debt-order)），以及[记账一个月](/posts/finance-ledger)发现漏洞后修复断裂的现金流。",
      },
      { t: "h2", text: "比选方法更重要五倍的那件事" },
      {
        t: "p",
        text: "不舒服的算术来了：方法是画笔，**储蓄率**才是画。月到手 $10,000、长期回报 6% 的假设下，储蓄率每移动 5 个百分点，30 年大约值 50 万美元：",
      },
      {
        t: "table",
        head: ["储蓄率", "每月投入", "30 年后（6%/年）"],
        rows: [
          ["5%", "$500", "约 $502,000"],
          ["10%", "$1,000", "约 $1,005,000"],
          ["15%", "$1,500", "约 $1,507,000"],
          ["20%", "$2,000", "约 $2,009,000"],
          ["25%", "$2,500", "约 $2,511,000"],
        ],
      },
      {
        t: "p",
        text: "注意表格里缺了什么：记账方法。一个随手用 50/30/20、每月稳定存 20% 的人，30 年后比一个一丝不苟做零基预算但只存 5% 的人多出约 150 万美元。方法只有在它能移动储蓄率的时候才有意义。选那个能把**你的**储蓄率守在目标线上的方法，两边的狂热就都成了噪音。",
      },
      { t: "h2", text: "真正能落地的混合方案" },
      {
        t: "ol",
        items: [
          "**先自动化储蓄率。**发薪日当天，自动把储蓄金额转入[投资](/posts/finance-index-dca)——在任何消费决策存在之前。这一步的价值超过所有记账方法：它让储蓄率从“愿望”变成“结构”。",
          "**把 50/30/20 当季度体检。**每季度从账单里汇总三个桶的占比。不是微管理——只是检查固定支出有没有爬过线。",
          "**零基预算只当维修工具。**体检发现漏洞、或债务开始爬升时，严格跑一两个月 ZBB 找到并消灭原因——然后回到巡航状态。",
          "**给“想要”的桶留出可以毫无负罪感花掉的钱。**是的，[毫无负罪感](/posts/finance-emergency-fund)——这是整个系统能持续的原因。像惩罚一样的预算活不过第一个糟糕的星期。",
        ],
      },
      {
        t: "p",
        text: "混合方案有效的原因是它让力气花在刀刃上：自动化（零努力、价值最高）→ 季度体检（低努力、防漂移）→ 零基手术（高努力、只在坏掉时用）。全职零基预算是从维修阶段借来的工具，大多数人再也不用回去。",
      },
      {
        t: "p",
        text: "一个诚实的局限：50/30/20 的百分比是 2005 年一本书里的美国经验值——20% 的储蓄桶不算离谱，但钱[应该按什么顺序用](/posts/finance-start)（雇主匹配 → 高息债务 → 备用金）依然决定着储蓄桶里的钱第一步去哪。",
      },
      {
        t: "quote",
        text: "别和记账方法结婚。和储蓄率结婚，把它自动化，然后用最省力的方式保持诚实。",
      },
    ],
  },
};
