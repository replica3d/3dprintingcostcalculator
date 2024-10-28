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
      <div className="text-sm text-gray-600 flex items-center gap-1">
        {label}
        {tooltip && (
          <Tooltip content={tooltip}>
            <HelpCircle className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-help" />
          </Tooltip>
        )}
      </div>
      <div className="text-xl font-semibold">
        {isHours ? 
          Math.round(value) : 
          `${value.toFixed(2)}€`
        }
      </div>
    </div>
  );
}