import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [formMode, setFormMode] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormMode(false);
  }

  function openFormHandler() {
    setFormMode(true);
  }

  function closeFormHandler() {
    setFormMode(false);
  }

  return (
    <div className="new-expense">
      {!formMode && <button onClick={openFormHandler}>Add New Expense</button>}
      {formMode && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelForm={closeFormHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
