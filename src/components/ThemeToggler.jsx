// I made this component to add a cool theme toggle - I hope the professor likes it!
const ThemeToggler = ({ isDarkMode, toggleTheme }) => {
    return (
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full focus:outline-none"
        aria-label="Toggle theme"
      >
        <span className={`sun-moon text-2xl ${isDarkMode ? "text-yellow-400" : "text-gray-800"}`}>
          {isDarkMode ? "☀️" : "🌙"}
        </span>
      </button>
    );
  };
  
  export default ThemeToggler;