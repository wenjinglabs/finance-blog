/**
 * 相关阅读映射：文章底部的内链推荐（slug 列表，按相关度排序）。
 * 标题和语言由渲染时从文章索引实时取，双语自动跟随。
 */
export const postRelated: Record<string, string[]> = {
  "finance-start": ["finance-emergency-fund", "finance-ledger", "finance-index-dca"],
  "finance-ledger": ["finance-budget-methods", "finance-start", "finance-debt-order"],
  "finance-emergency-fund": ["finance-cash-rates", "finance-start", "finance-index-dca"],
  "finance-index-dca": ["finance-lump-sum-vs-dca", "finance-compound", "finance-allocation"],
  "finance-compound": ["finance-index-dca", "finance-emergency-fund", "finance-start"],
  "finance-scam": ["finance-nasdaq-drawdown", "finance-compound", "finance-allocation"],
  "finance-allocation": ["finance-rent-vs-buy", "finance-index-dca", "finance-emergency-fund"],
  "finance-debt-order": ["finance-ledger", "finance-start", "finance-emergency-fund"],
  "finance-nasdaq-drawdown": ["finance-scam", "finance-allocation", "finance-compound"],
  "finance-rent-vs-buy": ["finance-allocation", "finance-index-dca", "finance-compound"],
  "finance-lump-sum-vs-dca": ["finance-index-dca", "finance-compound", "finance-allocation"],
  "finance-budget-methods": ["finance-ledger", "finance-debt-order", "finance-start"],
  "finance-grad-jobs": ["finance-emergency-fund", "finance-ledger", "finance-compound"],
  "finance-cash-rates": ["finance-emergency-fund", "finance-budget-methods", "finance-index-dca"],
};
