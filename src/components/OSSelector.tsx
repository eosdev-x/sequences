import React from 'react';
import { Monitor, Apple, MonitorCheck } from 'lucide-react';
import { OperatingSystem } from '../types';

interface OSSelectorProps {
  selectedOS: OperatingSystem;
  onSelect: (os: OperatingSystem) => void;
}

export const OSSelector: React.FC<OSSelectorProps> = ({ selectedOS, onSelect }) => {
  return (
    <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
      {[
        { os: 'linux' as const, icon: Monitor, label: 'Linux' },
        { os: 'mac' as const, icon: Apple, label: 'macOS' },
        { os: 'windows' as const, icon: MonitorCheck, label: 'Windows' },
      ].map(({ os, icon: Icon, label }) => (
        <button
          key={os}
          onClick={() => onSelect(os)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors
                     ${selectedOS === os 
                       ? 'bg-white shadow-sm text-blue-600' 
                       : 'text-gray-600 hover:bg-gray-200'}`}
        >
          <Icon size={18} />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
};