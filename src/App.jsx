import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import { useLocalStorage } from './hooks/useLocalStorage'
// import ExpenseData from './ExpenseData'

function App() {

  const [expense, setExpense] = useLocalStorage("expense",{
    title: '',
    category: '',
    amount: ''
  })
  const [expenses, setExpenses] = useLocalStorage("expenses",[])
  const [editingRowId, setEditingRowId] = useLocalStorage('editingRowId',"");

  return (
    <>
      <main>
        <h2>Track Your Expense</h2>
        <div className='expense-tracker'>
          <ExpenseForm
            setExpenses={setExpenses}
            expense={expense}
            setExpense={setExpense}
            editingRowId={editingRowId}
            setEditingRowId={setEditingRowId}
          />
          <ExpenseTable
            expenses={expenses}
            setExpenses={setExpenses}
            setExpense={setExpense}
            setEditingRowId={setEditingRowId} />
        </div>
      </main>
    </>
  )
}

export default App
