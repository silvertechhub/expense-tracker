import React, {useContext} from 'react';
import { TransactionsContext } from '../context/TransactionContext';

export default function TransactionHistory () {
  const { transactions, deleteTransaction} = useContext(TransactionsContext);
  // const allTransaction = transactions.map(transactions => transactions.amount);

  
  return transactions.length ? (<div>
      <h5>Transaction History</h5>
      <ul className='history' >
          {transactions.map (transaction =>( 
          <li  key={transaction.id}>
            <div  className={transaction.amount> 0 ? 'postive' : 'negative'}>
            </div>
             { transaction.texts +  `:` } {`$`+ transaction.amount} 
             <button onClick={() => deleteTransaction(transaction.id)} className='delete-btn'>X</button>
          </li>))}
          
      </ul>
  </div>) : (
    <div style={{paddingTop: "20px"}}>
      You don't have any transaction history
    </div>
  )
}
