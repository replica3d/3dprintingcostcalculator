import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { CurrencyProvider } from './context/CurrencyContext';
import { getTranslation } from './translations';
import './index.css';

const lang = getTranslation(window.location.pathname);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <LanguageProvider lang={lang}>
        <CurrencyProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </CurrencyProvider>
      </LanguageProvider>
    </HelmetProvider>
  </StrictMode>
);
