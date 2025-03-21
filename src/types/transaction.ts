export type Transaction = {
    id: number;
    transactionTitle: any;
    amount: number;
    cashflow: "inflow" | "outflow";
    suburb?: string;
    shortCategory?: string;
    date: string;
    logoUrl: any;
  };
  