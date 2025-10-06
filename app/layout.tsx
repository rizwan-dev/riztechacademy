import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Inter } from 'next/font/google';
import { MuiProvider } from '@/components/mui-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'RizTech Academy — Free Tech Education for Students',
    template: '%s — RizTech Academy'
  },
  description: 'Non-profit organization providing free project-based training, internships, and mentorship to bridge the gap between education and industry needs.',
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
    title: 'RizTech Academy — Free Tech Education for Students',
    description: 'Non-profit organization providing free project-based training, internships, and mentorship to bridge the gap between education and industry needs.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RizTech Academy — Free Tech Education for Students',
    description: 'Non-profit organization providing free project-based training, internships, and mentorship to bridge the gap between education and industry needs.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <MuiProvider>
          <Header />
          <main className="min-h-[70vh]">{children}</main>
          <Footer />
        </MuiProvider>
      </body>
    </html>
  );
}
