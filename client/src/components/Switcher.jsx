import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from '../utils/ThemeContext';

export default function Switcher() {
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = (checked) => {
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <div>
      <DarkModeSwitch
        checked={theme === 'dark'}
        onChange={toggleDarkMode}
        size={26}
      />
    </div>
  );
}