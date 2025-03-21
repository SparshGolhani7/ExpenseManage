import * as React from "react";
import { Transaction } from "../../types/Transaction";

const TransactionItem: React.FC<{ transaction: Transaction }> = ({ transaction }) => {
  return (
    <div className="transaction-item">
      <img src={transaction.logoUrl} alt={transaction.transactionTitle} />
      <div>
        <h3>{transaction.transactionTitle}</h3>
        <p>{transaction.suburb ? `${transaction.suburb} | ` : ""}{transaction.shortCategory}</p>
      </div>
      <span style={{ color: transaction.cashflow === "inflow" ? "green" : "red" }}>
        {transaction.cashflow === "inflow" ? "+" : "-"}${transaction.amount}
      </span>
    </div>
  );
};

export default TransactionItem;

