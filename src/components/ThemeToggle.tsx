import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-lg bg-white dark:bg-[#2D2D2D] hover:bg-gray-100 dark:hover:bg-[#3D3D3D] shadow-sm border border-gray-200 dark:border-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      ) : (
        <Sun className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      )}
    </button>
  );
}