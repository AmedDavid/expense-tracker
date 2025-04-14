import { useState } from "react";
import AddExpenseWidget from "./components/AddExpenseWidget";
import ExpenseListDisplay from "./components/ExpenseListDisplay";
import SearchFilter from "./components/SearchFilter";
import ThemeToggler from "./components/ThemeToggler";

// Main app component - I spent a lot of time making this look nice for the assignment!
const App = () => {
  // Initial expenses to start with - I added these to test the app
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
  const [sortField, setSortField] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false); // Added this for the theme toggle - I thought it’d be cool!

  // Function to add a new expense to the list
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  // Function to delete an expense - took me a while to figure out the index thing
  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  // Filter expenses based on what the user types in the search bar
  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort expenses - I added this as an advanced feature for extra points!
  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (!sortField) return 0;
    return a[sortField].localeCompare(b[sortField]);
  });

  // Toggle between dark and light mode - I saw this in a tutorial and thought it’d make my app stand out
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} flex justify-center items-start p-6 transition-all duration-300`}>
      <div className={`w-full max-w-4xl ${isDarkMode ? "bg-gray-800" : "bg-white"} shadow-lg rounded-lg p-6`}>
        {/* Header with theme toggle - I positioned it here so it looks neat */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Expense Tracker</h1>
          <ThemeToggler isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Form section on the left */}
          <div className="md:w-1/3">
            <AddExpenseWidget onAddExpense={addExpense} isDarkMode={isDarkMode} />
          </div>
          {/* Table and search section on the right */}
          <div className="md:w-2/3">
            <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} isDarkMode={isDarkMode} />
            <ExpenseListDisplay
              expenses={sortedExpenses}
              onDelete={deleteExpense}
              onSort={setSortField}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;