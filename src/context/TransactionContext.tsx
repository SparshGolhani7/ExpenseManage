import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import * as React from 'react';
import { Transaction } from "../types/Transaction";

// //
// interface Transaction {
//   id: string;  
//   date: string;
//   cashflow: "inflow" | "outflow";
//   amount: number;
//   transactionTitle?: any;
//   logoUrl?: any;
// }


interface TransactionContextType {
  transactions: Transaction[];
  filter: string;
  setFilter: (filter: string) => void;
}


const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

export const TransactionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("http://localhost:3004/transactions");
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions, filter, setFilter }}>
      {children}
    </TransactionContext.Provider>
  );
};


export const useTransactionContext = (): TransactionContextType => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error("useTransactionContext must be used within a TransactionProvider");
  }
  return context;
};
