
// src/components/download-cv-button.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export function DownloadCVButton() {
  const handleDownloadCV = () => {
    // Ensure you have 'ashish-kumar-rajak-cv.pdf' in your /public folder.
    window.open('/ashish-kumar-rajak-cv.pdf', '_blank');
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
