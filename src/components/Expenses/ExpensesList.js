import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = (props) => {

  let expensesContent = <p>No expense found</p>

  if (props.items.length === 0) {
    // expensesContent = 
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>
  }

  return <ul className='expenses-list'>
    {
      props.items.map(expense => {
        return <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
      })
    }
  </ul>

}

export default ExpensesList