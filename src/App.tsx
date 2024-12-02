import React, { useState, useMemo } from 'react';
import { Keyboard, Info } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { CategorySection } from './components/CategorySection';
import { categories } from './data/composeKeys';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = useMemo(() => {
    if (!searchQuery) return categories;
    
    const query = searchQuery.toLowerCase();
    return categories.map(category => ({
      ...category,
      keys: category.keys.filter(key => 
        key.char.toLowerCase().includes(query) ||
        key.description.toLowerCase().includes(query) ||
        key.alternatives.some(alt => alt.toLowerCase().includes(query))
      )
    })).filter(category => category.keys.length > 0);
  }, [searchQuery]);

  const totalKeys = useMemo(() => 
    categories.reduce((acc, cat) => acc + cat.keys.length, 0)
  , []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Keyboard className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Linux Compose Key Reference</h1>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Info className="h-4 w-4 mr-2" />
              {totalKeys} compose key sequences
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {filteredCategories.length > 0 ? (
          <div className="space-y-12">
            {filteredCategories.map((category) => (
              <CategorySection key={category.name} category={category} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No compose keys found matching your search.</p>
          </div>
        )}
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-600">
          <p className="text-center">Press the Compose key followed by the sequence to type special characters. © 2024 <a href="https://github.com/eosdev-x" className="text-blue-600">eosdev</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;