import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";

const App = () => {
  // Sample initial expenses
  const [expenses, setExpenses] = useState([
    {
      description: "KPLC tokens",
      category: "utilities",
      amount: 2500,
      date: "2025-04-01",
    },
    {
      description: "Buy shoes",
      category: "personal",
      amount: 5000,
      date: "2025-04-05",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState(null); // For sorting (category or description)

  // Add a new expense
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  // Delete an expense
  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  // Filter expenses based on search term
  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort expenses
  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (!sortField) return 0;
    return a[sortField].localeCompare(b[sortField]);
  });

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Expense Tracker</h1>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Form Section */}
          <div className="md:w-1/3">
            <ExpenseForm onAddExpense={addExpense} />
          </div>
          {/* Table and Search Section */}
          <div className="md:w-2/3">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ExpenseTable
              expenses={sortedExpenses}
              onDelete={deleteExpense}
              onSort={setSortField}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;