import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Tooltip } from './Tooltip';
import { useCurrency } from '../context/CurrencyContext';

interface CostDisplayProps {
  label: string;
  value: number;
  vatValue?: number;
  className?: string;
  isHours?: boolean;
  tooltip?: string;
}

export function CostDisplay({ label, value, vatValue, className = '', isHours = false, tooltip }: CostDisplayProps) {
  const { currency } = useCurrency();
  const defaultClass = 'bg-white dark:bg-[#2D2D2D] border border-gray-200 dark:border-[#696969]';
  const finalClassName = className.includes('border') ? className.replace(/border-gray-\d+/g, 'dark:border-[#696969]') : `${defaultClass} ${className}`;

  const currencyFormats = {
    EUR: { symbol: '€', position: 'after' },
    USD: { symbol: '$', position: 'before' },
    PLN: { symbol: 'zł', position: 'after' }
  };

  const formatValue = (value: number) => {
    if (isHours) {
      return Math.round(value);
    }
    
    const { symbol, position } = currencyFormats[currency];
    return position === 'before' 
      ? `${symbol}${value.toFixed(2)}`
      : `${value.toFixed(2)} ${symbol}`;
  };

  const shouldShowVAT = value > 0 && vatValue !== undefined;

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
        {formatValue(value)}
      </div>
      {shouldShowVAT && (
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          VAT incl: {formatValue(vatValue)}
        </div>
      )}
    </div>
  );
}
