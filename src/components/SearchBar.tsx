import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search compose key sequences..."
        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 
                   focus:ring-blue-500 focus:border-transparent outline-none transition-all"
      />
    </div>
  );
};