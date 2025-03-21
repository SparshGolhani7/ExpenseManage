import * as React from "react";
import { useTransactionContext } from "../../context/TransactionContext";

const Toolbar: React.FC = () => {
  const { filter, setFilter } = useTransactionContext();

  return (
    <div className="toolbar">
      <button 
        className={filter === "all" ? "selected" : ""} 
        onClick={() => {
          console.log('All button clicked');
          setFilter("all");
          console.log(filter, 'afiltervalue');
        }}
      >
        All
      </button>
      <button 
        className={filter === "income" ? "selected" : ""} 
        onClick={() => {
          console.log('Income button clicked');
          setFilter("income");
          console.log(filter, 'filteravalue');
        }}
      >
        Income
      </button>
      <button 
        className={filter === "expense" ? "selected" : ""} 
        onClick={() => {
          console.log('Expense button clicked');
          setFilter("expense");
          console.log(setFilter, 'filtervalue');
        }}
      >
        Expense
      </button>
    </div>
  );
};

export default Toolbar;
