import type { Post } from "./types";
import { financeStart } from "./finance-start";
import { financeLedger } from "./finance-ledger";
import { financeEmergencyFund } from "./finance-emergency-fund";
import { financeIndexDca } from "./finance-index-dca";
import { financeCompound } from "./finance-compound";
import { financeScam } from "./finance-scam";
import { financeAllocation } from "./finance-allocation";
import { financeDebtOrder } from "./finance-debt-order";
import { financeNasdaqDrawdown } from "./finance-nasdaq-drawdown";
import { financeRentVsBuy } from "./finance-rent-vs-buy";
import { financeLumpSumVsDca } from "./finance-lump-sum-vs-dca";
import { financeBudgetMethods } from "./finance-budget-methods";

export type { Post, Block } from "./types";

// Legacy Chinese tech notes are kept in this folder but excluded from the
// public feed; re-add imports here if they ever need to come back.
const all: Post[] = [
  financeBudgetMethods,
  financeLumpSumVsDca,
  financeRentVsBuy,
  financeNasdaqDrawdown,
  financeDebtOrder,
  financeAllocation,
  financeScam,
  financeCompound,
  financeIndexDca,
  financeEmergencyFund,
  financeLedger,
  financeStart,
];
all.sort((a, b) => (a.date < b.date ? 1 : -1));

export const posts: Post[] = all;
