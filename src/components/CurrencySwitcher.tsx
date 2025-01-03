import React from 'react';
import { DollarSign } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

const currencies: Record<string, string> = {
  EUR: '€',
  USD: '$',
  PLN: 'zł'
};

export function CurrencySwitcher() {
  const { currency, switchCurrency } = useCurrency();
  
  return (
    <div className="flex items-center gap-2">
      <DollarSign className="w-4 h-4 text-gray-600 dark:text-gray-400" />
      <label htmlFor="currency-select" className="sr-only">
        Select Currency
      </label>
      <select
        id="currency-select"
        value={currency}
        onChange={(e) => switchCurrency(e.target.value as Currency)}
        className="bg-transparent text-gray-600 dark:text-gray-400 border-none focus:ring-0 cursor-pointer text-sm"
      >
        {Object.entries(currencies).map(([code, symbol]) => (
          <option key={code} value={code}>
            {code} {symbol}
          </option>
        ))}
      </select>
    </div>
  );
}
