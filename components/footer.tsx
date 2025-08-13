import Link from 'next/link';
import Image from 'next/image';

export function Footer(){
  return (
    <footer className="mt-16 bg-gradient-to-b from-gray-950 to-gray-900 text-gray-300">
      <div className="container-g py-14 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 rounded-full ring-1 ring-white/20 bg-white/5 p-1">
              <Image src="/logo.svg" alt="RizTechAcademy" fill className="object-contain" />
            </div>
            <span className="font-semibold text-white">RizTechAcademy</span>
          </div>
          <p className="text-sm text-gray-400 mt-3 max-w-sm">Web, mobile, and AI solutions for startups and small businesses.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Company</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:text-white" href="/about">About</Link></li>
            <li><Link className="hover:text-white" href="/blog">Blog</Link></li>
            <li><Link className="hover:text-white" href="/internships">Internships</Link></li>
            <li><Link className="hover:text-white" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Services</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:text-white" href="/services">Web Development</Link></li>
            <li><Link className="hover:text-white" href="/services">Mobile Development</Link></li>
            <li><Link className="hover:text-white" href="/services">AI Bots</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>703, Jubilation, Ahwalwadi Road, Wagholi, Pune, India</li>
            <li>Phone: <a className="text-brand hover:text-white" href="tel:+918983265077">+91 8983265077</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-g flex flex-col md:flex-row items-center justify-between py-6 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} RizTechAcademy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
