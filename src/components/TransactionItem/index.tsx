import React from "react";
import { Transaction } from "../../types/Transaction";
import receiptIcon from "../../assets/receipt.svg";
import "./styles.css";

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const { logoUrl, transactionTitle, suburb, shortCategory, amount, cashflow } =
    transaction;

  const formatAmount = (amount: string, cashflow: string) => {
    const prefix = cashflow === "inflow" ? "+" : "-";
    return `${prefix}$${parseFloat(amount).toFixed(2)}`;
  };

  const formattedAmount = formatAmount(amount, cashflow);

  return (
    <div className="transaction-item">
      <div className="transaction-logo">
        {logoUrl ? (
          <img src={logoUrl} alt="" className="logo" />
        ) : (
          <img src={receiptIcon} alt="" className="logo fallback" />
        )}
      </div>
      <div className="transaction-details">
        <div className="transaction-title">{transactionTitle}</div>
        {(suburb || shortCategory) && (
          <div className="transaction-subtitle">
            {suburb && <span>{suburb}</span>}
            {suburb && shortCategory && <span className="separator">•</span>}
            {shortCategory && <span>{shortCategory}</span>}
          </div>
        )}
      </div>
      <div className={`transaction-amount ${cashflow}`}>{formattedAmount}</div>
    </div>
  );
};

export default TransactionItem;
