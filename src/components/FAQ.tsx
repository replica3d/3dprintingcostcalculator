import React from 'react';
import { HelpCircle } from 'lucide-react';
import { FAQItem } from './FAQItem';
import { useLanguage } from '../context/LanguageContext';

export function FAQ() {
  const { t } = useLanguage();

  return (
    <div className="mt-8 bg-white dark:bg-[#1E1E1E] rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        <h2 className="text-2xl font-bold text-[#121212] dark:text-gray-50">
          {t.faq.title}
        </h2>
      </div>
      
      <div className="space-y-6">
        {t.faq.items.map((item, index) => (
          <FAQItem key={index} {...item} />
        ))}
      </div>

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": t.faq.items.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        })}
      </script>
    </div>
  );
}
