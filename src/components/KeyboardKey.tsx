import React from 'react';
import { motion } from 'framer-motion';

interface KeyboardKeyProps {
  keyName: string;
}

export const KeyboardKey: React.FC<KeyboardKeyProps> = ({ keyName }) => {
  return (
    <motion.span
      className="inline-flex items-center justify-center min-w-[32px] h-8 px-2 mx-1 
                 bg-gray-100 rounded-md border border-gray-300 shadow-sm 
                 font-mono text-sm text-gray-700"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {keyName}
    </motion.span>
  );
};