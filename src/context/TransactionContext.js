import React, {createContext, useState} from "react";

    
export const TransactionsContext = createContext();

// providercomponent
export const TransactionsContextProvider = ({children}) => {
    // initial state
 const [transactions, setTransaction] = useState([
    
])

    const addCreditDebit = (reason, intAmount) =>{
        const generateId = Math.floor(Math.random() * 100);
        setTransaction([...transactions, {texts: reason, amount: intAmount, id:generateId}])

    }
    const deleteTransaction = (id) => {
        setTransaction(transactions.filter(transaction => transaction.id !== id))
    }
    return(
          <TransactionsContext.Provider value={{transactions, addCreditDebit, deleteTransaction}} >
              {children}
          </TransactionsContext.Provider>
    )
}

