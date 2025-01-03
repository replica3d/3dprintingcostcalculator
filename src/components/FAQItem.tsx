import React from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="bg-gray-50 dark:bg-[#2D2D2D] rounded-lg p-6 transition-colors">
      <h3 className="text-lg font-semibold text-[#121212] dark:text-gray-50 mb-2">
        {question}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {answer}
      </p>
    </div>
  );
}
