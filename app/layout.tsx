import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'RizTech Academy — AI Solutions for Startups',
    template: '%s — RizTech Academy'
  },
  description: 'We build AI-powered software solutions that help startups move faster and smarter.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico' }
    ],
    apple: '/apple-touch-icon.png'
  },
  openGraph: {
    title: 'RizTech Academy — AI Solutions for Startups',
    description: 'We build AI-powered software solutions that help startups move faster and smarter.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RizTech Academy — AI Solutions for Startups',
    description: 'We build AI-powered software solutions that help startups move faster and smarter.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
