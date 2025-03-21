import * as React from "react";
import classnames from "classnames";
import { useTransactionContext } from "../../context/TransactionContext";
import TransactionItem from "./TransactionItem";

interface Transaction {
  id: number;
  date: string;
  cashflow: "inflow" | "outflow";
  amount: number;
  transactionTitle: string;
  logoUrl: string;
}

const ITEMS_PER_PAGE = 10;

const TransactionList: React.FC = () => {
  const { transactions, filter } = useTransactionContext();
  const [currentPage, setCurrentPage] = React.useState(1);

  const filteredTransactions = transactions.filter((txn) => {
    if (filter === "all") return true;
    return filter === "income" ? txn.cashflow === "inflow" : txn.cashflow === "outflow";
  });

  const groupedTransactions = filteredTransactions.reduce((acc: Record<string, Transaction[]>, txn: any) => {
    if (!acc[txn.date]) {
      acc[txn.date] = [];
    }
    acc[txn.date].push(txn);
    return acc;
  }, {});

  const allDates = Object.keys(groupedTransactions);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedDates = allDates.slice(startIndex, endIndex);

  return (
    <div className="transaction-list">
      {paginatedDates.map((date) => (
        <div key={date} className={classnames("transaction-group", { "has-transactions": groupedTransactions[date]?.length > 0 })}>
          <h2>{date}</h2>
          {(groupedTransactions[date] || []).map((transaction) => (
            <TransactionItem 
              key={transaction.id} 
              transaction={{ 
                ...transaction, 
                transactionTitle: transaction.transactionTitle || "Untitled", 
                logoUrl: transaction.logoUrl || "/default-logo.png"
              }} 
            />
          ))}
        </div>
      ))}

      <div className="pagination-controls">
        <button 
          onClick={() => setCurrentPage(currentPage - 1)} 
          disabled={currentPage === 1}
          className="pagination-button prev"
        >
          Previous
        </button>
        <span className="pagination-info">Page {currentPage}</span>
        <button 
          onClick={() => setCurrentPage(currentPage + 1)} 
          disabled={endIndex >= allDates.length}
          className="pagination-button next"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TransactionList;
