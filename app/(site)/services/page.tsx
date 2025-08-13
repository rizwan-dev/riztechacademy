import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Rocket, Wrench, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Web, Mobile, and AI solutions for startups and small businesses — delivered with quality and speed.'
};

export default function Services(){
  const items = [
    {
      title: 'Web Application Development',
      desc: 'Modern, scalable web apps with Next.js, secure APIs, and great UX.',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      alt: 'Developer coding a web application on a laptop',
      bullets: ['Responsive UI and accessibility', 'Secure server-side APIs', 'Analytics & SEO best practices']
    },
    {
      title: 'Mobile Application Development',
      desc: 'High-quality iOS and Android apps with React Native and robust backends.',
      img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
      alt: 'Person holding a smartphone with a mobile app interface',
      bullets: ['Native-feel UX and performance', 'Offline-first and push notifications', 'App Store and Play Store support']
    },
    {
      title: 'AI Bots',
      desc: 'Intelligent chatbots and copilots integrated with your data and tools.',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      alt: 'Abstract visualization representing artificial intelligence',
      bullets: ['RAG over your data', 'Tool use & workflow automation', 'Guardrails, evals, and analytics']
    }
  ];
  return (
      <>
      <section className="container-g py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl leading-tight">Services</h1>
          <p className="text-gray-700 mt-3">Product-focused engineering across web, mobile, and AI — built to scale securely and perform beautifully.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {items.map((it,i)=> (
            <article key={i} className="card overflow-hidden">
              <div className="relative h-56">
                <Image src={it.img} alt={it.alt} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg">{it.title}</h3>
                <p className="text-sm text-gray-700 mt-2">{it.desc}</p>
                {Array.isArray((it as any).bullets) && (
                  <ul className="text-sm mt-3 list-disc list-inside text-gray-700 space-y-1">
                    {(it as any).bullets.map((b:string,idx:number)=>(<li key={idx}>{b}</li>))}
                  </ul>
                )}
                <div className="mt-5">
                  <Link href="/contact" className="btn btn-outline">Get a proposal</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-white">
        <div className="container-g py-14">
          <h2 className="text-2xl">How we deliver</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="card p-6">
              <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center"><Rocket size={18} /></div>
              <h3 className="font-semibold mt-3">Discovery & plan</h3>
              <p className="text-sm text-gray-700 mt-2">Clarify goals, scope, and constraints. Define a roadmap aligned to business outcomes.</p>
            </div>
            <div className="card p-6">
              <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center"><Wrench size={18} /></div>
              <h3 className="font-semibold mt-3">Build & iterate</h3>
              <p className="text-sm text-gray-700 mt-2">Ship fast in weekly sprints with demos, feedback loops, and high code quality.</p>
            </div>
            <div className="card p-6">
              <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center"><BarChart3 size={18} /></div>
              <h3 className="font-semibold mt-3">Measure & scale</h3>
              <p className="text-sm text-gray-700 mt-2">Instrumentation, analytics, and robust infra to ensure performance and reliability.</p>
            </div>
          </div>
        </div>
      </section>
      </>
  );
}
