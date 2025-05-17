import type { Metadata } from 'next';
import { Geist } from 'next/font/google'; // Using Geist Sans as the primary sans-serif font
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: ['400', '500', '700'] // Include weights for normal, medium, bold
});


export const metadata: Metadata = {
  title: 'Alex Johnson | Java Full Stack Developer Portfolio',
  description: 'Showcase of Alex Johnson\'s projects and skills as a Java Full Stack Developer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} dark`}>
      <body className="font-sans antialiased flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
