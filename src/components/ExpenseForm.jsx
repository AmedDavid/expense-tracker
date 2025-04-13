import { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

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
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
          placeholder="Enter expense description"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
          placeholder="Enter expense category"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
          placeholder="Enter amount"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default ExpenseForm;