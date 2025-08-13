import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Tell us about your project — we typically reply within 1 business day.'
};

export default function ContactLayout({ children }: { children: React.ReactNode }){
  return children;
}


