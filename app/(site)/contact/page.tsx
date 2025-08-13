'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Contact(){
  const [status,setStatus] = useState<string|undefined>();
  async function submit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = Object.fromEntries(fd.entries());
    const r = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body)});
    const j = await r.json();
    setStatus(j?.ok ? 'Thanks! We will contact you shortly.' : (j?.error || 'Something went wrong.'));
  }
  return (
    <section className="container-g py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl leading-tight">Contact</h1>
        <p className="text-gray-700 mt-3">Tell us about your project — we typically reply within 1 business day.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 mt-10 items-start">
        <form onSubmit={submit} className="card p-6 space-y-4">
          <div><label className="text-sm">Name</label><input name="name" required className="w-full mt-1 rounded-xl border p-2"/></div>
          <div><label className="text-sm">Email</label><input type="email" name="email" required className="w-full mt-1 rounded-xl border p-2"/></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div><label className="text-sm">Company</label><input name="company" className="w-full mt-1 rounded-xl border p-2"/></div>
            <div><label className="text-sm">Phone</label><input name="phone" className="w-full mt-1 rounded-xl border p-2"/></div>
          </div>
          <div><label className="text-sm">Message</label><textarea name="message" rows={5} required className="w-full mt-1 rounded-xl border p-2"></textarea></div>
          <button className="btn btn-primary">Send</button>
          {status && <p className="text-sm text-green-700" aria-live="polite">{status}</p>}
        </form>
        <div className="card overflow-hidden">
          <div className="relative h-80">
            <Image src="https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&w=1600&q=80" alt="Contact us" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" priority/>
          </div>
          <div className="p-6">
            <h3 className="font-semibold">Visit us</h3>
            <p className="text-sm text-gray-700 mt-2">703, Jubilation, Ahwalwadi Road, Wagholi, Pune, India</p>
            <p className="text-sm text-gray-700 mt-1">Phone: <a className="text-brand" href="tel:+918983265077">+91 8983265077</a></p>
            <iframe className="w-full h-64 mt-4 rounded-xl"
              loading="lazy"
              title="RizTechAcademy office location on Google Maps"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Ahwalwadi%20Road%20Wagholi%20Pune&output=embed"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
