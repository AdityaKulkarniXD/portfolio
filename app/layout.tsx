import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/* ---- Font (self-hosted, hydration-safe) ---- */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

/* ---- Metadata (FIXES metadataBase warning) ---- */
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  
  title: {
    default: 'Aditya Kulkarni – Software Engineer & Researcher',
    template: '%s | Aditya Kulkarni',
  },
  description:
    'Research-focused software engineer specializing in Machine Learning, RAG systems, and full-stack development. B.Tech CSE at Anurag University.',
  openGraph: {
    title: 'Aditya Kulkarni – Software Engineer & Researcher',
    description:
      'Research-focused software engineer specializing in Machine Learning, RAG systems, and full-stack development.',
    type: 'website',
    siteName: 'Aditya Kulkarni Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Kulkarni – Software Engineer & Researcher',
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
    <html lang="en" className={inter.className}>
      <body>
        <div className="relative min-h-screen overflow-x-hidden">
          {/* Background mesh (pure CSS, hydration-safe) */}
          <div className="fixed inset-0 -z-10 bg-gradient-mesh opacity-50 pointer-events-none" />

          <Navbar />

          <main className="relative pt-16">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
