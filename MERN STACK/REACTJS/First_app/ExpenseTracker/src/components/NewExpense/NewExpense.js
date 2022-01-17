import React from "react";

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense =()=>{

    const saveExpenseData=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
    }
    return(
        <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseData} />
        </div>)
}
export default NewExpense;