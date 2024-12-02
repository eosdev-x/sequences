import React from 'react';
import { motion } from 'framer-motion';
import { KeyboardKey } from './KeyboardKey';
import { Shortcut, OperatingSystem } from '../types';

interface ShortcutCardProps {
  shortcut: Shortcut;
  selectedOS: OperatingSystem;
}

export const ShortcutCard: React.FC<ShortcutCardProps> = ({ shortcut, selectedOS }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{shortcut.name}</h3>
      <p className="text-gray-600 text-sm mb-3">{shortcut.description}</p>
      <div className="flex items-center space-x-1">
        {shortcut.keys[selectedOS].map((key, index) => (
          <KeyboardKey key={index} keyName={key} />
        ))}
      </div>
    </motion.div>
  );
};