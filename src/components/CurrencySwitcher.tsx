import React from 'react';
import { Currency } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

const currencies: Record<string, string> = {
  EUR: 'Euro',
  USD: 'US Dollar',
  PLN: 'Polish Zloty'
};

export function CurrencySwitcher() {
  const { currency, switchCurrency } = useCurrency();
  
  return (
    <div className="flex items-center gap-2">
      <Currency className="w-4 h-4 text-gray-600 dark:text-gray-400" />
      <label htmlFor="currency-select" className="sr-only">
        Select Currency
      </label>
      <select
        id="currency-select"
        value={currency}
        onChange={(e) => switchCurrency(e.target.value as Currency)}
        className="bg-transparent text-gray-600 dark:text-gray-400 border-none focus:ring-0 cursor-pointer text-sm"
      >
        {Object.entries(currencies).map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}
