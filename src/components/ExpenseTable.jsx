const ExpenseTable = ({ expenses, onDelete, onSort }) => {
    return (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left">
                <button
                  onClick={() => onSort("description")}
                  className="hover:underline"
                >
                  Description
                </button>
              </th>
              <th className="border border-gray-300 p-2 text-left">
                <button
                  onClick={() => onSort("category")}
                  className="hover:underline"
                >
                  Category
                </button>
              </th>
              <th className="border border-gray-300 p-2 text-left">Amount</th>
              <th className="border border-gray-300 p-2 text-left">Date</th>
              <th className="border border-gray-300 p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2">
                  {expense.description}
                </td>
                <td className="border border-gray-300 p-2">{expense.category}</td>
                <td className="border border-gray-300 p-2">{expense.amount}</td>
                <td className="border border-gray-300 p-2">{expense.date}</td>
                <td className="border border-gray-300 p-2">
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
  
  export default ExpenseTable;