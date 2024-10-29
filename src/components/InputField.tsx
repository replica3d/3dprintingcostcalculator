import React from 'react';
import { LucideIcon, HelpCircle } from 'lucide-react';
import { Tooltip } from './Tooltip';

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  icon: LucideIcon;
  value: string | number;
  step?: string;
  isSelect?: boolean;
  options?: string[];
  tooltip?: string;
  unit?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export function InputField({ 
  label, 
  name, 
  type = 'number', 
  icon: Icon, 
  value, 
  step = '0.01',
  isSelect = false,
  options = [],
  tooltip,
  unit,
  onChange
}: InputFieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4" />
          {label}
          {tooltip && (
            <Tooltip content={tooltip}>
              <HelpCircle className="w-4 h-4 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 cursor-help" />
            </Tooltip>
          )}
        </div>
      </label>
      <div className="relative">
        {isSelect ? (
          <select
            name={name}
            value={value}
            onChange={onChange}
            className="mt-1 block w-full rounded-md border-0 dark:border-0 shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-[#696969] focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#2D2D2D] dark:text-gray-100 p-2 transition-colors"
          >
            {options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        ) : (
          <div className="relative">
            <input
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              step={step}
              min="0"
              className={`mt-1 block w-full rounded-md border-0 dark:border-0 shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-[#696969] focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#2D2D2D] dark:text-gray-100 p-2 transition-colors ${unit ? 'pr-12' : ''}`}
            />
            {unit && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                {unit}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}