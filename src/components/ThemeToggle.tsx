import React from 'react';
import { Sun, Moon, LayoutGrid, List } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ThemeToggle: React.FC = () => {
  const { theme, layout, toggleTheme, toggleLayout } = useApp();

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={toggleLayout}
        className="p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label={`Switch to ${layout === 'card' ? 'list' : 'card'} view`}
      >
        {layout === 'card' ? (
          <List className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        ) : (
          <LayoutGrid className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        )}
      </button>

      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? (
          <Moon className="w-5 h-5 text-gray-600" />
        ) : (
          <Sun className="w-5 h-5 text-gray-400" />
        )}
      </button>
    </div>
  );
}; 