'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Brain, Phone } from 'lucide-react';
import clsx from 'clsx';
import Image from 'next/image';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/internships', label: 'Internships' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/admin', label: 'Admin' },
  { href: '/contact', label: 'Contact' },
];

export function Header(){
  const pathname = usePathname();
  return (
    <header className="bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 border-b">
      <div className="container-g flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <Image src="/logo.svg" alt="RizTechAcademy" fill className="object-contain" priority />
          </div>
          <span className="font-semibold">RizTechAcademy</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => {
            const active = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href + '/'));
            return (
              <Link key={l.href} href={l.href} className={clsx('navlink', active && 'text-brand')}>
              {l.label}
              </Link>
            );
          })}
        </nav>
        <a href="tel:+918983265077" className="btn btn-primary hidden md:inline-flex"><Phone className="mr-2" size={16}/> +91 8983265077</a>
      </div>
    </header>
  );
}
