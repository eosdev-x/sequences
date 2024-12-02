import React from 'react';
import { motion } from 'framer-motion';
import { ComposeKey } from '../types';

interface KeyCardProps {
  composeKey: ComposeKey;
}

export const KeyCard: React.FC<KeyCardProps> = ({ composeKey }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-3xl">{composeKey.char}</span>
        <code className="text-sm text-gray-500">{composeKey.unicode}</code>
      </div>
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {composeKey.sequences.map((sequence, index) => (
            <kbd
              key={index}
              className="px-2 py-1 bg-gray-100 rounded text-sm font-mono border border-gray-200 
                         shadow-sm hover:bg-gray-200 transition-colors"
            >
              Compose {sequence}
            </kbd>
          ))}
        </div>
        <p className="text-sm text-gray-600">{composeKey.description}</p>
      </div>
    </motion.div>
  );
};