import React from 'react';
import { motion } from 'framer-motion';
import { ComposeKey } from '../types';

interface ComposeKeyCardProps {
  composeKey: ComposeKey;
}

export const ComposeKeyCard: React.FC<ComposeKeyCardProps> = ({ composeKey }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-4xl">{composeKey.char}</span>
        <code className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-600">
          {composeKey.unicode}
        </code>
      </div>
      <div className="space-y-3">
        <p className="text-sm text-gray-600">{composeKey.description}</p>
        <div className="flex flex-wrap gap-2">
          {composeKey.alternatives.map((sequence, index) => (
            <kbd
              key={index}
              className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm font-mono 
                         border border-blue-200 shadow-sm"
            >
              Compose {sequence}
            </kbd>
          ))}
        </div>
      </div>
    </motion.div>
  );
};