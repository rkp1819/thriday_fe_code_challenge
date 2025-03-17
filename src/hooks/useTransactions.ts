import { useState, useEffect } from 'react';
import { Transaction } from '../types/Transaction';

type FilterType = 'all' | 'income' | 'expense';

interface TransactionsByDate {
  [date: string]: Transaction[];
}

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterType>('all');

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('http://localhost:3004/transactions');
        if (!response.ok) {
          throw new Error('Failed to fetch transactions');
        }
        const data = await response.json();
        setTransactions(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === 'all') return true;
    if (filter === 'income') return transaction.cashflow === 'inflow';
    if (filter === 'expense') return transaction.cashflow === 'outflow';
    return true;
  });

  const groupTransactionsByDate = (transactions: Transaction[]): TransactionsByDate => {
    return transactions.reduce((grouped, transaction) => {
      const date = transaction.date;
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(transaction);
      return grouped;
    }, {} as TransactionsByDate);
  };

  const transactionsByDate = groupTransactionsByDate(filteredTransactions);

  return {
    transactions: filteredTransactions,
    transactionsByDate,
    loading,
    error,
    filter,
    setFilter,
  };
}; 