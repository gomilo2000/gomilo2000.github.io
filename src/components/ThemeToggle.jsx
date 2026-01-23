const ThemeToggle = ({ toggleTheme }) => {
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      type="button"
    />
  );
};

export default ThemeToggle;