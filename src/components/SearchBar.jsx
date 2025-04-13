const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
          placeholder="Search expenses..."
        />
      </div>
    );
  };
  
  export default SearchBar;