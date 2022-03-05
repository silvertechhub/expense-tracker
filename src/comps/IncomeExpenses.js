import React, {useContext} from 'react';
import { TransactionsContext } from '../context/TransactionContext';


export default function IncomeExpenses() {
  const {transactions} = useContext(TransactionsContext);
  const amounts = transactions.map( transactions => transactions.amount);
  const income = amounts
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2);

  const expense = amounts
  .filter(item => item < 0)
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2);

    
  
  return <div className='income-exp'>
         <div>
             <span className='income-exp-text'>Income</span><p>${income}</p>
         </div>
         <div className='divider'></div>
         <div>
             <span className='income-exp-text'>Expense</span> <p>${expense}</p>
         </div>
  </div>;
}
