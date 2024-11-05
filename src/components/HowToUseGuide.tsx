import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export function HowToUseGuide() {
  return (
    <div className="mt-12 bg-white dark:bg-[#1E1E1E] rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-[#121212] dark:text-gray-50 mb-6">
        How to Use This 3D Printing Cost Calculator
      </h2>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
          <p className="text-[#121212] dark:text-gray-300">Enter your part name and select the material type from the dropdown menu</p>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
          <p className="text-[#121212] dark:text-gray-300">Input the estimated filament weight (in grams) and printing time (in hours)</p>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
          <p className="text-[#121212] dark:text-gray-300">Add any additional costs like hardware components and packaging materials</p>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
          <p className="text-[#121212] dark:text-gray-300">Adjust advanced settings if needed for more precise calculations</p>
        </div>
      </div>
    </div>
  );
}