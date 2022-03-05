import React, {useState, useContext } from 'react';
import { TransactionsContext } from '../context/TransactionContext';

export default function AddTransaction() {
    const { addCreditDebit} = useContext(TransactionsContext)
    const [amount, setAmount] = useState("")
    const [reason, setReason] = useState("")

   
    const handleSubmit = (e) => {
        e.preventDefault();
        const intAmount = parseInt(amount);
        addCreditDebit(reason, intAmount);
        setAmount("");
        setReason("");
        
    }

  return <div>
      <h5>Add Transaction</h5>
      <form onSubmit={handleSubmit}>
          
            <label>Amount</label>
          <input type="number" required value={amount} placeholder="Enter amount here"
           onChange={ (e) => setAmount(e.target.value)}/>
          <label>Text</label>
          <input type="text" required value={reason} placeholder="Enter reason"
           onChange={(e) => setReason(e.target.value) }/> <br/>
          <input type="submit" className='add-btn'  value="Add transaction" />  
      </form>
  </div>;
}
