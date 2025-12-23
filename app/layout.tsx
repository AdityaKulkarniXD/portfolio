import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aditya Kulkarni - Software Engineer & Researcher',
  description:
    'Research-focused software engineer specializing in Machine Learning, RAG systems, and full-stack development. B.Tech CSE at Anurag University.',
  openGraph: {
    title: 'Aditya Kulkarni - Software Engineer & Researcher',
    description:
      'Research-focused software engineer specializing in Machine Learning, RAG systems, and full-stack development.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Kulkarni - Software Engineer & Researcher',
    description:
      'Research-focused software engineer specializing in Machine Learning, RAG systems, and full-stack development.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen">
          <div className="fixed inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
