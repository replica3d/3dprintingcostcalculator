import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Tooltip } from './Tooltip';

interface CostDisplayProps {
  label: string;
  value: number;
  className?: string;
  isHours?: boolean;
  tooltip?: string;
}

export function CostDisplay({ label, value, className = '', isHours = false, tooltip }: CostDisplayProps) {
  return (
    <div className={`p-4 rounded-lg ${className}`}>
      <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
        {label}
        {tooltip && (
          <Tooltip content={tooltip}>
            <HelpCircle className="w-4 h-4 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 cursor-help" />
          </Tooltip>
        )}
      </div>
      <div className="text-xl font-semibold text-gray-900 dark:text-white">
        {isHours ? 
          Math.round(value) : 
          `${value.toFixed(2)}€`
        }
      </div>
    </div>
  );
}