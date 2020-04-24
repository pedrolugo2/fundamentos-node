import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    const incomeArray = [0];
    const outcomeArray = [0];
    this.transactions.map(transaction => {
      const { value, type } = transaction;
      if (type === 'income') {
        incomeArray.push(value);
      } else outcomeArray.push(value);
    });

    const income = incomeArray.reduce((acc, val) => acc + val);
    const outcome = outcomeArray.reduce((acc2, val2) => acc2 + val2);
    const total = income - outcome;
    const Balance = {
      income,
      outcome,
      total,
    };
    return Balance;
  }

  public create({ title, type, value }: CreateTransactionDTO): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
