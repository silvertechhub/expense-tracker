import {React} from 'react';
import './App.css';
import AddTransaction from './comps/AddTransaction';
import Balance from './comps/Balance';
import IncomeExpenses from './comps/IncomeExpenses';
import TrackerHeader from './comps/TrackerHeader';
import TransactionHistory from './comps/TransactionHistory';
import { TransactionsContextProvider } from './context/TransactionContext';



function App() {
    
  return (
    <div className='container'>
      <TransactionsContextProvider>
        <TrackerHeader />
        <Balance />
        <IncomeExpenses />
        <TransactionHistory />
        <AddTransaction />
     </TransactionsContextProvider>
    </div>
  );
}

export default App;
