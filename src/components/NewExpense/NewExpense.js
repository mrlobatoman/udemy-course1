import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {

  const [expenseForm, setExpenseForm] = useState(false)

  const newExpenseHandler = () => setExpenseForm(true)

  const closeFormHandler = () => setExpenseForm(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    closeFormHandler(false)
  }

  return (
    <div className ='new-expense'>
      {!expenseForm && 
        <button onClick={newExpenseHandler}>Add New Expense</button>
      }
      {expenseForm &&
       <ExpenseForm 
        onSaveExpenseData={saveExpenseDataHandler} 
        closeForm={closeFormHandler}
      />
      } 
    </div>
  )
}

export default NewExpense