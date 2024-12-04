import React from 'react';
import { motion } from 'framer-motion';
import { Category } from '../types';
import { ComposeKeyCard } from './ComposeKeyCard';
import { useApp } from '../context/AppContext';

interface CategorySectionProps {
  category: Category;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  const { layout } = useApp();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
        <span className="bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 
                       px-3 py-1 rounded-lg mr-3">
          {category.keys.length}
        </span>
        {category.name}
      </h2>
      <div className={`
        ${layout === 'card' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
          : 'space-y-4'
        }
      `}>
        {category.keys.map((key) => (
          <ComposeKeyCard key={key.unicode} composeKey={key} />
        ))}
      </div>
    </motion.section>
  );
};