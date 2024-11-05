import React from 'react';
import { HelpCircle } from 'lucide-react';
import { FAQItem } from './FAQItem';

const faqItems = [
  {
    question: "How accurate is this 3D printing cost calculator?",
    answer: "Our 3D printing cost estimator provides highly accurate results by considering multiple factors including material costs, machine time, labor, and overhead. However, actual costs may vary based on specific printer settings, environmental conditions, and local pricing factors."
  },
  {
    question: "What factors affect the total cost of a 3D print?",
    answer: "The 3D printing quote calculator considers filament cost, printing time, electricity usage, machine depreciation, labor costs, and additional materials. Advanced settings allow for fine-tuning of these parameters for more precise estimates."
  },
  {
    question: "How do I determine the filament weight for my print?",
    answer: "Most 3D printing slicers will provide an estimated filament weight. For the most accurate results in our 3D print cost calculator, use the weight provided by your slicer software after configuring your print settings."
  },
  {
    question: "Why should I include labor costs in my calculations?",
    answer: "Labor costs are essential for accurate pricing, especially if you're running a business. This includes time spent on print preparation, post-processing, and quality control. Our calculator helps you factor in these costs for better pricing decisions."
  },
  {
    question: "How can I optimize my 3D printing costs?",
    answer: "Use our 3D printing cost calculator to experiment with different settings and materials. Consider factors like infill density, layer height, and print orientation to optimize material usage while maintaining quality. The advanced settings section can help identify areas for cost reduction."
  }
];

export function FAQ() {
  return (
    <div className="mt-8 bg-white dark:bg-[#1E1E1E] rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        <h2 className="text-2xl font-bold text-[#121212] dark:text-gray-50">
          Frequently Asked Questions
        </h2>
      </div>
      
      <div className="space-y-6">
        {faqItems.map((item, index) => (
          <FAQItem key={index} {...item} />
        ))}
      </div>

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqItems.map(item => ({
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