import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import './Expenses.css'

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020')

  const filteredYearHandler = (year) => {
    setFilteredYear(year)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter 
          selected={filteredYear} 
          setFilteredData={filteredYearHandler} 
        />   
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses