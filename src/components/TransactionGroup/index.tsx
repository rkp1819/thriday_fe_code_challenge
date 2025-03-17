import React from "react";
import { Transaction } from "../../types/Transaction";
import TransactionItem from "../TransactionItem";
import "./styles.css";

interface TransactionGroupProps {
  date: string;
  transactions: Transaction[];
}

const formatDate = (dateString: string) => {
  // Could add logic here to handle "Today" and "Yesterday" if needed
  return dateString;
};

const TransactionGroup: React.FC<TransactionGroupProps> = ({
  date,
  transactions,
}) => {
  return (
    <div className="transaction-group">
      <h2 className="date-header">{formatDate(date)}</h2>
      <div className="transaction-list">
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.transactionId}
            transaction={transaction}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionGroup;
