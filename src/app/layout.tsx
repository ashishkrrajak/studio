'use client'; // Required for useState and useEffect

import type { Metadata } from 'next'; // Keep for potential future use if structure changes
import { Geist } from 'next/font/google'; 
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import Preloader from '@/components/preloader'; // Import the preloader
import React, { useState, useEffect } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: ['400', '500', '700'] 
});

// Static metadata should ideally be in a parent server component or handled via generateMetadata
// For now, we keep it commented out as 'use client' in RootLayout affects static export.
// export const metadata: Metadata = {
//   title: 'Ashish Kumar Rajak | Java Full Stack Developer Portfolio',
//   description: 'Showcase of Ashish Kumar Rajak\'s projects and skills as a Java Full Stack Developer.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Total duration for the preloader (including its fade-out time)
    const preloaderTotalDuration = 2000; // Changed to 2 seconds

    const timer = setTimeout(() => {
      setIsLoading(false); // After this, the preloader will be unmounted
    }, preloaderTotalDuration);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <html lang="en" className={`${geistSans.variable} dark`}>
      <body className="font-sans antialiased flex flex-col min-h-screen bg-background text-foreground">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Header />
            {/* Apply fade-in animation to the main content area */}
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 opacity-0 animate-fadeInLayout">
              {children}
            </main>
            <Footer />
            <Toaster />
          </>
        )}
      </body>
    </html>
  );
}
