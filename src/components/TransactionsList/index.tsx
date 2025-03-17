import React from "react";
import { useTransactions } from "../../hooks/useTransactions";
import TransactionGroup from "../TransactionGroup";
import Toolbar from "../Toolbar";
import "./styles.css";

const TransactionsList: React.FC = () => {
  const { transactionsByDate, loading, error, filter, setFilter } =
    useTransactions();

  if (loading) {
    return <div className="loading">Loading transactions...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  const sortedDates = Object.keys(transactionsByDate).sort((a, b) => {
    // Sort dates in descending order (newest first)
    // This is a simple sort that works with DD/MM/YYYY format
    const [aDay, aMonth, aYear] = a.split("/").map(Number);
    const [bDay, bMonth, bYear] = b.split("/").map(Number);

    if (aYear !== bYear) return bYear - aYear;
    if (aMonth !== bMonth) return bMonth - aMonth;
    return bDay - aDay;
  });

  return (
    <div className="transactions-container">
      <Toolbar activeFilter={filter} onFilterChange={setFilter} />

      {sortedDates.length === 0 ? (
        <div className="no-transactions">No transactions found</div>
      ) : (
        <div className="transactions-list">
          {sortedDates.map((date) => (
            <TransactionGroup
              key={date}
              date={date}
              transactions={transactionsByDate[date]}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionsList;
