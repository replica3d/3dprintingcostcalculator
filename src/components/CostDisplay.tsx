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
  const defaultClass = 'bg-white dark:bg-[#2D2D2D] border border-gray-200 dark:border-[#696969]';
  const finalClassName = className.includes('border') ? className.replace(/border-gray-\d+/g, 'dark:border-[#696969]') : `${defaultClass} ${className}`;

  return (
    <div className={`p-4 rounded-lg ${finalClassName}`}>
      <div className="text-sm text-[#121212] dark:text-dark-text flex items-center gap-1">
        {label}
        {tooltip && (
          <Tooltip content={tooltip}>
            <HelpCircle className="w-4 h-4 text-gray-400 dark:text-dark-text hover:text-[#121212] dark:hover:text-dark-text cursor-help" />
          </Tooltip>
        )}
      </div>
      <div className="text-xl font-semibold text-[#121212] dark:text-dark-text">
        {isHours ? 
          Math.round(value) : 
          `${value.toFixed(2)}€`
        }
      </div>
    </div>
  );
}