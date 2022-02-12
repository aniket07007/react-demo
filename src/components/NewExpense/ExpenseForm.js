import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');
  const initInputVals = {
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  }
  const [inputVals, setInputVals] = useState(initInputVals);
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });


  // const titleChangeHandler = (event) => {
  //   setEnteredTitle(event.target.value);
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredTitle: event.target.value,
  //   // });
  //   // setUserInput((prevState) => {
  //   //   return { ...prevState, enteredTitle: event.target.value };
  //   // });
  // };
  const inputHandle = ({target: {name: name, value: value}}) => {
    setInputVals((prevState) => {
        return { ...prevState, [name]: value };
      });
  }

  // const amountChangeHandler = (event) => {
  //   setEnteredAmount(event.target.value);
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredAmount: event.target.value,
  //   // });
  // };

  // const dateChangeHandler = (event) => {
  //   setEnteredDate(event.target.value);
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredDate: event.target.value,
  //   // });
  // };

  const InputHandler = () => {

  }

  const submitHandler = (event) => {
    event.preventDefault();
    
    const expenseData = {
      title: inputVals.enteredTitle,
      amount: inputVals.enteredAmount,
      date: new Date(inputVals.enteredDate)
    };

    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    // setEnteredTitle('');
    // setEnteredAmount('');
    // setEnteredDate('');
    setInputVals(initInputVals)
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' name="enteredTitle" onChange={inputHandle} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            name= "enteredAmount"
            min='0.01'
            step='0.01'
            onChange={inputHandle}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            name= "enteredDate"
            onChange={inputHandle}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
