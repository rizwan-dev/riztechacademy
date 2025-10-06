'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// Using Tailwind grid wrappers with MUI inputs/buttons
import Alert from '@mui/material/Alert';

export default function Contact(){
  const [status,setStatus] = useState<{ kind: 'success' | 'error'; text: string }|undefined>();
  const [loading,setLoading] = useState(false);
  const alertRef = useRef<HTMLDivElement>(null);
  async function submit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const body = Object.fromEntries(fd.entries());
    try{
      setLoading(true);
      setStatus(undefined);
      const r = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body)});
      const j = await r.json().catch(()=>({}));
      if(r.ok && j?.ok){
        form.reset();
        setStatus({ kind: 'success', text: 'Thanks for reaching out! We will contact you shortly about our free programs.' });
      }else{
        setStatus({ kind: 'error', text: j?.error || 'Something went wrong. Please try again.' });
      }
    }catch(err:any){
      setStatus({ kind: 'error', text: err?.message || 'Network error. Please try again.' });
    }finally{
      setLoading(false);
      setTimeout(()=> alertRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    }
  }
  return (
    <section className="container-g py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl leading-tight">Get In Touch</h1>
        <p className="text-gray-700 mt-3">Have questions about our free programs? Want to apply for our internship or mentorship programs? We&apos;d love to hear from you — we typically reply within 1 business day.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 mt-10 items-start">
        <form onSubmit={submit} className="card p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField label="Name" name="name" required fullWidth />
            <TextField label="Email" name="email" type="email" required fullWidth />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField label="College/University" name="college" fullWidth />
            <TextField label="Phone" name="phone" fullWidth />
          </div>
          <TextField
            select
            label="Interested in Program"
            name="program"
            fullWidth
            SelectProps={{ native: true }}
          >
            <option value=""></option>
            <option value="python-django">Web Development with Python & Django</option>
            <option value="javascript-typescript">Full-Stack JavaScript & TypeScript</option>
            <option value="android-kotlin">Android App Development with Kotlin</option>
            <option value="general">General Inquiry</option>
          </TextField>
          <TextField label="Message" name="message" required fullWidth multiline rows={5} placeholder="Tell us about your background and what you're looking for..." />
          <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>{loading ? 'Sending…' : 'Send message'}</Button>
          {status && (
            <div ref={alertRef}>
              <Alert severity={status.kind === 'success' ? 'success' : 'error'} role="status" aria-live="polite">{status.text}</Alert>
            </div>
          )}
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
