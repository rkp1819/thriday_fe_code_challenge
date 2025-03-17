export interface Transaction {
  accountUuid: string;
  accountId: string;
  transEnrichmentState: string;
  transactionId: string;
  transactionIdH: string;
  thriveBankTransactionID: number;
  transactionType: string;
  date: string;
  transactionTitle: string;
  status: string;
  bkStatus: string;
  description: string;
  bankDescription: string;
  referenceClean: string;
  cashflow: "inflow" | "outflow";
  amount: string;
  balanceAmount: string | null;
  suburb?: string;
  shortCategory?: string;
  logoUrl?: string;
} 