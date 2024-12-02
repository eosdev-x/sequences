import React from 'react';
import { motion } from 'framer-motion';
import { Category } from '../types';
import { ComposeKeyCard } from './ComposeKeyCard';

interface CategorySectionProps {
  category: Category;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg mr-3">
          {category.keys.length}
        </span>
        {category.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.keys.map((key) => (
          <ComposeKeyCard key={key.unicode} composeKey={key} />
        ))}
      </div>
    </motion.section>
  );
};