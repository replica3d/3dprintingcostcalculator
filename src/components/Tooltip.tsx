import React, { useState } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
}

export function Tooltip({ children, content }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div 
          className="absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-[#1E1E1E] rounded-lg shadow-sm tooltip -top-2 -translate-y-full left-1/2 -translate-x-1/2 w-48"
          style={{ pointerEvents: 'none' }}
        >
          {content}
          <div 
            className="tooltip-arrow absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full border-8 border-transparent border-t-gray-900 dark:border-t-[#1E1E1E]"
            style={{ pointerEvents: 'none' }}
          ></div>
        </div>
      )}
    </div>
  );
}