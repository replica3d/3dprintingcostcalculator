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
  const inputId = `input-${name}`;
  
  return (
    <div className="mb-4">
      <label 
        htmlFor={inputId}
        className="block text-sm font-medium text-[#121212] dark:text-dark-text mb-1"
      >
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4" />
          <span>{label}</span>
          {tooltip && (
            <Tooltip content={tooltip}>
              <HelpCircle className="w-4 h-4 text-gray-400 dark:text-dark-text hover:text-[#121212] dark:hover:text-white cursor-help" />
            </Tooltip>
          )}
        </div>
      </label>
      <div className="relative">
        {isSelect ? (
          <select
            id={inputId}
            name={name}
            value={value}
            onChange={onChange}
            aria-labelledby={`${inputId}-label`}
            className="mt-1 block w-full rounded-md border-0 dark:border-0 shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-[#696969] focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#2D2D2D] text-[#121212] dark:text-dark-text py-[0.4375rem] px-2 transition-colors h-[42px]"
          >
            {options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        ) : (
          <div className="relative">
            <input
              id={inputId}
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              step={step}
              min="0"
              aria-labelledby={`${inputId}-label`}
              className={`mt-1 block w-full rounded-md border-0 dark:border-0 shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-[#696969] focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#2D2D2D] text-[#121212] dark:text-dark-text p-2 transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none h-[42px] ${unit ? 'pr-12' : ''}`}
            />
            {unit && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#121212] dark:text-dark-text">
                {unit}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}