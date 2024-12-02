import { Shortcut } from '../types';

export const shortcuts: Shortcut[] = [
  {
    id: 'copy',
    name: 'Copy',
    description: 'Copy selected text or files',
    category: 'Basic Operations',
    keys: {
      linux: ['Ctrl', 'C'],
      mac: ['⌘', 'C'],
      windows: ['Ctrl', 'C'],
    },
  },
  {
    id: 'terminal',
    name: 'Open Terminal',
    description: 'Open system terminal',
    category: 'System',
    keys: {
      linux: ['Ctrl', 'Alt', 'T'],
      mac: ['⌘', 'Space'],
      windows: ['Windows', 'X', 'T'],
    },
  },
  // Add more shortcuts here
];