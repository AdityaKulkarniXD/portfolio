import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aditya Kulkarni - Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Next.js, and Node.js. Building modern web applications with clean code and exceptional user experiences.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'JavaScript', 'TypeScript'],
  authors: [{ name: 'Aditya Kulkarni' }],
  creator: 'Aditya Kulkarni',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adityakulkarni.dev',
    title: 'Aditya Kulkarni - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and Node.js. Building modern web applications with clean code and exceptional user experiences.',
    siteName: 'Aditya Kulkarni Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Kulkarni - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and Node.js. Building modern web applications with clean code and exceptional user experiences.',
    creator: '@adityakulkarni',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950">
            <Navbar />
            <main className="relative">
              {children}
            </main>
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}