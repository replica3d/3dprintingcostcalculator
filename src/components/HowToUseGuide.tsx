import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function HowToUseGuide() {
  const { t } = useLanguage();

  return (
    <div className="mt-12 bg-white dark:bg-[#1E1E1E] rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-[#121212] dark:text-gray-50 mb-6">
        {t.guide.title}
      </h2>
      <div className="space-y-4">
        {t.guide.steps.map((step, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
            <p className="text-[#121212] dark:text-gray-300">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
