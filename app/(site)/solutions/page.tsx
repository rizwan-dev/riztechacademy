import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
 

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Reusable AI accelerators like support copilots, sales bots, and vision pipelines.'
};

export default function Solutions(){
  const items = [
    {
      title: 'SaaS Application',
      desc: 'We design and build secure, multi-tenant SaaS platforms with billing, role-based access, and robust admin tools so you can onboard customers confidently.',
      bullets: ['Multi-tenant architecture', 'Billing & subscriptions', 'Admin dashboards & analytics'],
      tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80'
    },
    {
      title: 'Healthcare Application',
      desc: 'Patient-centered apps with provider portals, scheduling, and EMR integrations. We emphasize privacy-by-design and reliability.',
      bullets: ['HIPAA-friendly design', 'Appointments & EMR integrations', 'Patient and provider portals'],
      tags: ['React', 'Java', 'PostgreSQL', 'FHIR'],
      img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80'
    },
    {
      title: 'E‑commerce Application',
      desc: 'Modern storefronts with great UX, powerful search, and smooth checkout. Operational dashboards keep your team in control.',
      bullets: ['Storefront & product catalogs', 'Payments, shipping, tax', 'Ops dashboard & automation'],
      tags: ['Next.js', 'React', 'Stripe', 'Search'],
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80'
    },
    {
      title: 'Fintech & Related Apps',
      desc: 'We build trustworthy financial apps with secure auth, ledgers, and reporting. Performance and compliance are first-class concerns.',
      bullets: ['Secure auth & ledger design', 'Reporting & charts', 'Compliance & audit trails'],
      tags: ['Rust', 'Java', 'React', 'Analytics'],
      img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=80'
    },
    {
      title: 'Logistics Application',
      desc: 'End-to-end logistics platforms with live tracking, route optimization, and warehouse dashboards to streamline operations.',
      bullets: ['Realtime fleet tracking', 'Route optimization', 'Warehouse ops dashboards'],
      tags: ['Next.js', 'Node.js', 'Maps', 'WebSockets'],
      img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1400&q=80'
    },
    {
      title: 'EdTech Application',
      desc: 'Learning platforms with courses, assessments, and live classes. Analytics help measure outcomes and improve engagement.',
      bullets: ['Course & content management', 'Assessments & grading', 'Live classes & analytics'],
      tags: ['React', 'Next.js', 'WebRTC', 'Analytics'],
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80'
    }
  ];
  return (
      <section className="container-g py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl leading-tight">Solutions</h1>
          <p className="text-gray-700 mt-3">We build complete software application solutions for companies — from SaaS platforms to healthcare and e‑commerce apps.</p>
        </div>

        <div className="mt-10 space-y-8">
          {items.map((it,i)=> (
            <article key={i} className="grid md:grid-cols-2 gap-6 items-stretch">
              <div className={`card overflow-hidden ${i % 2 === 1 ? 'order-2 md:order-1' : ''}`}>
                <div className="relative h-56 md:h-full min-h-56">
                  <Image src={it.img} alt={`${it.title} illustration`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
              </div>
              <div className={`card p-6 ${i % 2 === 1 ? 'order-1 md:order-2' : ''}`}>
                <h3 className="font-semibold text-xl">{it.title}</h3>
                <p className="text-sm text-gray-700 mt-2">{it.desc}</p>
                <ul className="text-sm mt-3 list-disc list-inside text-gray-700 space-y-1">
                  {it.bullets.map((b,idx)=>(<li key={idx}>{b}</li>))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {it.tags?.map((t)=> (<span key={t} className="badge">{t}</span>))}
                </div>
                <div className="mt-5">
                  <Link href="/contact" className="btn btn-outline">Discuss this solution</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    
  );
}
