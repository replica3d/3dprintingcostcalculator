import React, { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';

interface ShareButtonProps {
  data: Record<string, any>;
}

export function ShareButton({ data }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const generateShareUrl = async () => {
    const baseUrl = window.location.origin + window.location.pathname;
    const encodedData = encodeURIComponent(JSON.stringify(data));
    const url = `${baseUrl}?data=${encodedData}`;
    
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy URL:', error);
    }
  };

  return (
    <button
      onClick={generateShareUrl}
      className="flex items-center gap-2 bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          Copied!
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4" />
          Share Calculator Settings
        </>
      )}
    </button>
  );
}