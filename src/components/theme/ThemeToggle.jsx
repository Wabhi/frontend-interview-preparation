import React from 'react';

const ThemeToggle = ({ theme, onToggle }) => {
  return (
    <div className="toggle-container">
      <span>Current Mode: **{theme.toUpperCase()}**</span>
      <button 
        onClick={onToggle} 
        className={`btn ${theme}`}
        aria-label="Toggle Theme"
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </div>
  );
};

export default ThemeToggle;