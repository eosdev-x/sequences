import React from 'react';
import { motion } from 'framer-motion';
import { ComposeKey } from '../types';
import { useApp } from '../context/AppContext';

interface ComposeKeyCardProps {
  composeKey: ComposeKey;
}

export const ComposeKeyCard: React.FC<ComposeKeyCardProps> = ({ composeKey }) => {
  const { layout } = useApp();

  const cardContent = (
    <>
      <div className="flex items-center justify-between mb-4">
        <span className="text-4xl dark:text-white">{composeKey.char}</span>
        <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded 
                       text-gray-600 dark:text-gray-300">
          {composeKey.unicode}
        </code>
      </div>
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-gray-400">{composeKey.description}</p>
        <div className="flex flex-wrap gap-2">
          {composeKey.alternatives.map((sequence, index) => (
            <kbd
              key={index}
              className="px-2 py-1 bg-primary-50 dark:bg-primary-900/30 
                       text-primary-700 dark:text-primary-300 rounded text-sm font-mono 
                       border border-primary-200 dark:border-primary-700 shadow-sm"
            >
              Compose {sequence}
            </kbd>
          ))}
        </div>
      </div>
    </>
  );

  if (layout === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg 
                  transition-shadow border border-gray-100 dark:border-gray-700"
      >
        {cardContent}
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg 
                transition-shadow border border-gray-100 dark:border-gray-700"
    >
      {cardContent}
    </motion.div>
  );
};