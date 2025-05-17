// src/components/download-cv-button.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export function DownloadCVButton() {
  const handleDownloadCV = () => {
    // In a real scenario, you might point to an actual file in the /public directory
    // or an API route that serves the file.
    // For this placeholder, we'll use a dummy PDF name.
    // Ensure you have 'alex-johnson-cv.pdf' in your /public folder.
    window.open('/alex-johnson-cv.pdf', '_blank');
  };

  return (
    <Button
      size="lg"
      variant="outline"
      className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium border-primary text-primary hover:bg-primary/10 transition-all duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg hover:shadow-xl"
      onClick={handleDownloadCV}
    >
      Download CV
      <Download className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:scale-110" />
    </Button>
  );
}
