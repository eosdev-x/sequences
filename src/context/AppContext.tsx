import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';
type Layout = 'card' | 'list';

interface AppContextType {
  theme: Theme;
  layout: Layout;
  toggleTheme: () => void;
  toggleLayout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as Theme) || 'light';
  });
  
  const [layout, setLayout] = useState<Layout>(() => {
    const savedLayout = localStorage.getItem('layout');
    return (savedLayout as Layout) || 'card';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('layout', layout);
  }, [layout]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const toggleLayout = () => setLayout(prev => prev === 'card' ? 'list' : 'card');

  return (
    <AppContext.Provider value={{ theme, layout, toggleTheme, toggleLayout }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}; 