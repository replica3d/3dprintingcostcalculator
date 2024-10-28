import React, { useState } from 'react';
import { Share2 } from 'lucide-react';

interface ShareButtonProps {
  data: Record<string, any>;
}

export function ShareButton({ data }: ShareButtonProps) {
  const [shareUrl, setShareUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const generateShareUrl = () => {
    const baseUrl = window.location.origin;
    const encodedData = encodeURIComponent(JSON.stringify(data));
    const url = `${baseUrl}?data=${encodedData}`;
    setShareUrl(url);
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={generateShareUrl}
        className="flex items-center gap-2 bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
      >
        <Share2 className="w-4 h-4" />
        Share Calculator Settings
      </button>
      {shareUrl && (
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {copied ? 'URL copied to clipboard!' : 'Click to copy URL'}
        </div>
      )}
    </div>
  );
}