// This component shows the expenses in a table - I added sorting and deleting as extra features
const ExpenseListDisplay = ({ expenses, onDelete, onSort, isDarkMode }) => {
  return (
    <div className="overflow-x-auto">
      <table className={`w-full border-collapse border ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}>
        <thead>
          <tr className={isDarkMode ? "bg-gray-700" : "bg-gray-100"}>
            <th className={`border p-2 text-left ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}>
              <button onClick={() => onSort("description")} className="hover:underline">
                Description
              </button>
            </th>
            <th className={`border p-2 text-left ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}>
              <button onClick={() => onSort("category")} className="hover:underline">
                Category
              </button>
            </th>
            <th className={`border p-2 text-left ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}>Amount</th>
            <th className={`border p-2 text-left ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}>Date</th>
            <th className={`border p-2 text-left ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index} className={isDarkMode ? "hover:bg-gray-600" : "hover:bg-gray-50"}>
              <td className={`border p-2 ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}>
                {expense.description}
              </td>
              <td className={`border p-2 ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}>
                {expense.category}
              </td>
              <td className={`border p-2 ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}>
                {expense.amount}
              </td>
              <td className={`border p-2 ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}>
                {expense.date}
              </td>
              <td className={`border p-2 ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}>
                <button
                  onClick={() => onDelete(index)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseListDisplay;