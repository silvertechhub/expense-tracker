import React, {useContext} from 'react';
import { TransactionsContext } from '../context/TransactionContext';

export default function Balance() {
  const {transactions} = useContext(TransactionsContext)
  const allTransaction = transactions.map(transactions => transactions.amount);
  const total = allTransaction.reduce((acc, amount) => {return acc += amount}, 0).toFixed(2)

  return <div className='balance-div'>
      <h4 className='balance-header'>Your Balance</h4>
      <p className='balance'>${total}</p>
  </div>;
}
