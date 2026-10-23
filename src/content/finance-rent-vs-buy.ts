import type { Post } from "./types";

export const financeRentVsBuy: Post = {
  slug: "finance-rent-vs-buy",
  title: "Rent vs Buy: The Break-Even Math, With Real Numbers",
  date: "2026-10-25T10:00:00+08:00",
  description:
    "\"Renting is throwing money away\" and \"buying is a trap\" are both slogans. I modeled the same $400k house against renting and investing the difference — here is exactly where the break-even sits.",
  tags: ["Personal Finance", "Housing"],
  blocks: [
    {
      t: "summary",
      items: [
        "In the base model (3% appreciation, 6% investment return), buying and renting are within a few thousand dollars for 20+ years.",
        "Buying clearly wins when appreciation beats your investment return by ~2.6%/yr of carrying costs; below that, renting + investing wins.",
      ],
    },
    {
      t: "p",
      text: "No personal-finance debate is louder than rent vs buy, and almost nobody argues with numbers. \"Renting is throwing money away.\" \"Buying locks you into a trap.\" Both are slogans. So I built a full model of a concrete scenario and ran it across different holding periods and market conditions. The result is more interesting than either slogan: **buying and renting are closer to a tie than either camp admits — and the whole fight reduces to two numbers: home appreciation vs your investment return.**",
    },
    { t: "h2", text: "The scenario" },
    {
      t: "table",
      head: ["Parameter", "Buy", "Rent"],
      rows: [
        ["Home price", "$400,000", "—"],
        ["Monthly rent", "—", "$2,000 (+3%/yr)"],
        ["Upfront cost", "$92,000 (20% down + 3% closing)", "$0"],
        ["Mortgage", "$320,000 @ 6%, 30-yr fixed (P&I ≈ $1,919)", "—"],
        ["Carrying costs", "1.2% tax + 1% maintenance + 0.4% insurance ≈ $867/mo", "included in rent"],
        ["Growth", "home appreciation: varied below", "invested difference at 6%/yr"],
        ["Exit friction", "7% of sale price (agent + transfer)", "none"],
      ],
    },
    {
      t: "p",
      text: "The renter invests the $92,000 upfront **and** the monthly difference between the owner's total cost ($2,785) and their rent — that's the fair comparison, and it's the one most rent-vs-buy takes skip. Price-to-rent ratio here: $400,000 ÷ ($2,000 × 12) = **16.7**. (Below ~15 generally leans buy; above ~20 leans rent.) Local appreciation history lives in official indexes like the [FHFA House Price Index](https://www.fhfa.gov/data/hpi).",
    },
    { t: "h2", text: "The break-even table" },
    {
      t: "p",
      text: "Net-worth difference between buying and renting (positive = buying wins), by annual home appreciation and holding period, with investments returning 6%/yr:",
    },
    {
      t: "table",
      head: ["Home appreciation", "After 10 yrs", "After 20 yrs", "After 30 yrs"],
      rows: [
        ["2%/yr", "-$56k", "-$95k", "-$212k"],
        ["3%/yr", "-$16k", "-$3k", "-$32k"],
        ["4%/yr", "+$28k", "+$99k", "+$187k"],
        ["5%/yr", "+$76k", "+$221k", "+$408k"],
        ["6%/yr", "+$129k", "+$372k", "+$715k"],
      ],
    },
    {
      t: "p",
      text: "Read that middle row again: **at 3% appreciation — roughly the long-run US average — the two strategies are statistically indistinguishable for two decades.** The decision only becomes big when appreciation is clearly above or below your investment return. And with a conservative 4% investment return instead, buying wins at just 3% appreciation (worth +$151k at 20 years). The relationship that matters:",
    },
    {
      t: "quote",
      text: "Buying wins when home appreciation beats your investment return by roughly the ~2.6%/yr carrying cost and the 7% exit friction. Everything else — the forced savings, the pride, the landlord stories — is commentary.",
    },
    { t: "h2", text: "Why renting isn't \"throwing money away\"" },
    {
      t: "ul",
      items: [
        "**Rent buys shelter, exactly like a mortgage buys shelter.** The owner's version of \"throwing money away\" is the $867/mo of tax, maintenance, and insurance — money that buys no equity at all. In year one of our model, the owner pays about $14,500 in interest (also no equity) plus that carrying cost.",
        "**The renter in this model ends up with a real portfolio** — around $514k after 20 years at 6%. \"Rent money disappears\" only if the difference actually disappears instead of being invested. It usually doesn't, and that's a behavior risk, not a math one.",
        "**Leverage cuts both ways.** The owner controls a $400k asset with $92k — wonderful at 5% appreciation, brutal at 2%. The renter's exposure is never leveraged.",
      ],
    },
    { t: "h2", text: "What the model deliberately ignores" },
    {
      t: "ul",
      items: [
        "**Flexibility.** Renting keeps you mobile for a job change or family change — worth real money that depends entirely on your life. Buying a home with a 30-year loan and selling in year 3 eats the friction twice.",
        "**Taxes and subsidies.** Deductions, first-time-buyer programs, and local rules shift the math by country and by person. None are in the model.",
        "**Rent-control regimes and insurance-less medical events** — the model assumes smooth 3% rent growth; many cities are not smooth.",
        "**Behavior.** The model assumes the renter actually invests the difference every month for decades. If honestly that won't happen, the buyer's forced savings are worth more than the spreadsheet says — see why interruption ruins compounding in [the compound interest post](/posts/finance-compound).",
      ],
    },
    { t: "h2", text: "The decision rule I'd actually use" },
    {
      t: "ol",
      items: [
        "**Stability first.** If you might move within ~5 years, renting wins almost regardless of the market — the 7% friction on a $400k home is $28,000 before any appreciation helps you.",
        "**Check the price-to-rent ratio where you live.** Under 15, buying is usually defensible; over 20, renting plus [investing the difference](/posts/finance-index-dca) is usually defensible; in between, it's genuinely a coin flip driven by your market's appreciation.",
        "**Compare against your honest alternative return.** If the down-payment money would sit in a 0.2% checking account, buying wins easily — the comparison is against what you'd [actually do with the money](/posts/finance-allocation), not against a fantasy portfolio.",
        "**Only buy after the [emergency fund](/posts/finance-emergency-fund) exists.** A broken furnace is not a financial emergency if the repair fund is already there.",
      ],
    },
    {
      t: "p",
      text: "One more honesty note: every number above is a parameter you can argue with — 6% investment returns, 3% appreciation, 1% maintenance. The conclusion isn't any single row; it's the shape: **the rent-vs-buy fight is mostly a fight about two rates, and you can look up both for your own city before you decide.**",
    },
  ],
  zh: {
    title: "租房还是买房：回本算术，附真实数字",
    description:
      "“租房是给房东打工”和“买房是接盘陷阱”都是口号。我把同一套 40 万美元的房子和“租房+投资差额”完整建模跑了一遍——盈亏平衡点到底在哪，这篇给出精确答案。",
    tags: ["理财", "住房"],
    blocks: [
      {
        t: "summary",
        items: [
          "基线模型（房价年涨 3%、投资回报 6%）下，买房与租房二十年内差距只有几千美元。",
          "当房价涨幅跑赢投资回报约 2.6%/年的持有成本时买房赢；跑不赢时，租房+投资差额赢。",
        ],
      },
      {
        t: "p",
        text: "个人理财领域吵架最凶的题就是租房还是买房，而吵架的双方几乎都不带数字。“租房是给房东打工。”“买房是把自己锁死。”都是口号。所以我给一个具体场景建了完整的模型，在不同持有期和市场条件下跑了一遍。结果比任何一边的口号都有意思：**买房和租房的差距比双方承认的都小得多——整场争论其实只取决于两个数字：房价涨幅 vs 你的投资回报。**",
      },
      { t: "h2", text: "模型设定" },
      {
        t: "table",
        head: ["参数", "买房", "租房"],
        rows: [
          ["房价", "$400,000", "—"],
          ["月租", "—", "$2,000（年涨 3%）"],
          ["前期投入", "$92,000（20% 首付 + 3% 成交费）", "$0"],
          ["房贷", "$320,000 @ 6%，30 年固定（本息 ≈ $1,919/月）", "—"],
          ["持有成本", "1.2% 房产税 + 1% 维护 + 0.4% 保险 ≈ $867/月", "含在房租里"],
          ["增长", "房价涨幅：见下表", "差额按 6%/年投资"],
          ["退出摩擦", "卖价的 7%（中介+税费）", "无"],
        ],
      },
      {
        t: "p",
        text: "租房者把 9.2 万前期款**以及**每月“房东总成本（$2,785）减去自己房租”的差额全部拿去投资——这才是公平对比，也是大多数租房买房争论都跳过的一步。本例房价租金比：$400,000 ÷ ($2,000 × 12) = **16.7**（低于约 15 通常偏向买房，高于约 20 偏向租房）。你所在城市的涨幅历史可以查官方指数，比如美国的 [FHFA 房价指数](https://www.fhfa.gov/data/hpi)。",
      },
      { t: "h2", text: "盈亏平衡表" },
      {
        t: "p",
        text: "买房与租房的净资产差（正值 = 买房赢），按房价年涨幅和持有期排列，投资回报按 6%/年：",
      },
      {
        t: "table",
        head: ["房价年涨幅", "10 年后", "20 年后", "30 年后"],
        rows: [
          ["2%/年", "-$56k", "-$95k", "-$212k"],
          ["3%/年", "-$16k", "-$3k", "-$32k"],
          ["4%/年", "+$28k", "+$99k", "+$187k"],
          ["5%/年", "+$76k", "+$221k", "+$408k"],
          ["6%/年", "+$129k", "+$372k", "+$715k"],
        ],
      },
      {
        t: "p",
        text: "再看一遍 3% 那一行：**在 roughly 美国长期平均水平的 3% 涨幅下，两种策略二十年内在统计上无法区分。**只有当涨幅明显高于或低于你的投资回报时，决策才变得“大”。如果把投资回报换成保守的 4%，那么 3% 的房价涨幅买房就赢了（20 年 +$151k）。真正起作用的关系是：",
      },
      {
        t: "quote",
        text: "当房价涨幅跑赢你的投资回报约 2.6%/年的持有成本加 7% 的退出摩擦时，买房赢。其余的——强制储蓄、归属感、房东的故事——都是注解。",
      },
      { t: "h2", text: "为什么租房不是“给房东打工”" },
      {
        t: "ul",
        items: [
          "**房租买的是住，月供买的也是住。**房东版本里的“打水漂”是每月 $867 的税、维护和保险——这些钱一分钱都换不成产权。模型第一年，业主还要付约 $14,500 的利息（同样没有产权）。",
          "**模型里的租房者最后有一份真实资产**——按 6% 算，20 年后约 51 万美元。“租房的钱消失了”只在差额真的消失、而没有被投资的情况下成立。这是行为风险，不是数学问题。",
          "**杠杆是双刃剑。**业主用 9.2 万撬动 40 万的资产——涨幅 5% 时很美好，2% 时很残酷。租房者的敞口永远不加杠杆。",
        ],
      },
      { t: "h2", text: "模型故意没算的部分" },
      {
        t: "ul",
        items: [
          "**灵活性。**租房保留了换工作、换城市的自由——这份自由值多少钱完全取决于你的生活。背着 30 年贷款在第三年卖房，摩擦成本要吃两次。",
          "**税收与补贴。**抵扣、首套房政策、各地规则，会按国家和个人大幅移动天平，模型没算。",
          "**租金管制与意外事件。**模型假设租金平滑上涨 3%；很多城市并不平滑。",
          "**行为。**模型假设租房者真的把差额坚持投资了几十年。如果诚实评估自己做不到，那么买房的强制储蓄就比表格显示的更值钱——参见[复利](/posts/finance-compound)一篇里“中断”的代价。",
        ],
      },
      { t: "h2", text: "我自己会用的决策规则" },
      {
        t: "ol",
        items: [
          "**先看稳定度。**如果五年内可能搬家，几乎无论市场如何都选租房——40 万的房子 7% 的摩擦是 2.8 万美元，涨幅还没来得及帮你。",
          "**查你所在城市的房价租金比。**低于 15，买房通常说得过去；高于 20，租房加[投资差额](/posts/finance-index-dca)通常说得过去；中间地带，真正的决定因素是你那个市场的涨幅。",
          "**对比你诚实的替代回报。**如果那笔首付钱只会躺在 0.2% 的活期里，买房轻松赢——对比对象是你[真的会怎么用这笔钱](/posts/finance-allocation)，不是幻想中的投资组合。",
          "**买房之前，先让[应急备用金](/posts/finance-emergency-fund)到位。**暖气坏掉不应该是一次财务紧急事件——前提是维修的钱早就在那里。",
        ],
      },
      {
        t: "p",
        text: "最后再诚实一次：上面每个数字都是可以争的参数——6% 的投资回报、3% 的涨幅、1% 的维护。结论不是任何一行数字，而是这个形状：**租房 vs 买房的争论，本质上是一场关于两个比率的争论，而这两个比率在你决定之前都可以查到。**",
      },
    ],
  },
};
