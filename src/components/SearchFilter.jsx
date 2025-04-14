// Search bar component - I made it filter both description and category
const SearchFilter = ({ searchTerm, setSearchTerm, isDarkMode }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`w-full border rounded-md p-2 focus:ring focus:ring-blue-200 ${
          isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"
        }`}
        placeholder="Search expenses..."
      />
    </div>
  );
};

export default SearchFilter;