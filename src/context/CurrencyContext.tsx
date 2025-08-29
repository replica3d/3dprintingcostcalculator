import React, { createContext, useContext, useState } from 'react';

type Currency = 'EUR' | 'USD' | 'PLN';

interface CurrencyContextType {
  currency: Currency;
  switchCurrency: (newCurrency: Currency) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  // Detect language and set default currency
  const getDefaultCurrency = (): Currency => {
    const pathSegments = window.location.pathname.split('/');
    const lang = pathSegments[1];
    return lang === 'pl' ? 'PLN' : 'EUR';
  };

  const [currency, setCurrency] = useState<Currency>(getDefaultCurrency());

  const switchCurrency = (newCurrency: Currency) => {
    setCurrency(newCurrency);
  };

  return (
    <CurrencyContext.Provider value={{ currency, switchCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
