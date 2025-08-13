import Image from 'next/image';

export function CaseStudies(){
  const items = [
    {
      title: 'E-commerce AI Support Bot',
      result: '60% faster responses, +12 pts CSAT',
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Healthcare Scheduling App',
      result: 'Launched in 6 weeks with HIPAA-friendly design',
      img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Sales Enablement Copilot',
      result: '+18% pipeline velocity',
      img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80'
    }
  ];
  return (
    <section className="container-g py-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl">Case studies</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {items.map((c,i)=> (
          <article key={i} className="card overflow-hidden">
            <div className="relative h-40">
              <Image src={c.img} alt={c.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm text-gray-700 mt-2">{c.result}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


