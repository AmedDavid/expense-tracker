import { useState } from "react";

// This is the form for adding expenses - I tried to make it look like the image in the assignment
const AddExpenseWidget = ({ onAddExpense, isDarkMode }) => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // Handle form submission - I made sure it doesn’t refresh the page
  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && category && amount && date) {
      onAddExpense({ description, category, amount: Number(amount), date });
      setDescription("");
      setCategory("");
      setAmount("");
      setDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-lg font-semibold">Add Expense</h2>
      <div>
        <label className="block text-sm font-medium">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={`mt-1 block w-full border rounded-md p-2 focus:ring focus:ring-blue-200 ${
            isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"
          }`}
          placeholder="Enter expense description"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={`mt-1 block w-full border rounded-md p-2 focus:ring focus:ring-blue-200 ${
            isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"
          }`}
          placeholder="Enter expense category"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className={`mt-1 block w-full border rounded-md p-2 focus:ring focus:ring-blue-200 ${
            isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"
          }`}
          placeholder="Enter amount"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={`mt-1 block w-full border rounded-md p-2 focus:ring focus:ring-blue-200 ${
            isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"
          }`}
        />
      </div>
      <button
        type="submit"
        className={`w-full py-2 rounded-md transition ${
          isDarkMode ? "bg-gray-600 hover:bg-gray-500" : "bg-black hover:bg-gray-800"
        } text-white`}
      >
        SUBMIT
      </button>
    </form>
  );
};

export default AddExpenseWidget;