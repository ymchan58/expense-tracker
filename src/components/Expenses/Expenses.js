import { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function filterExpenseItemsHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onSelectYear={filterExpenseItemsHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
