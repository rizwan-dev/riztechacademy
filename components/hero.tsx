import Link from 'next/link';
import Image from 'next/image';
export function Hero(){
  return (
    <section className="hero-grad">
      <div className="container-g py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="badge">Web · Mobile · AI</span>
          <h1 className="text-4xl md:text-5xl mt-4 leading-tight">We build <span className="text-brand">Web Applications</span>, <span className="text-brand">Mobile Applications</span> and <span className="text-brand">AI-based</span> solutions</h1>
          <p className="mt-4 text-gray-700">From MVPs to scale, we turn your ideas into production-grade AI products — fast, secure, and measurable.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/contact" className="btn btn-primary">Get a proposal</Link>
            <Link href="/services" className="btn btn-outline">Explore services</Link>
          </div>
        </div>
        <div className="card overflow-hidden">
          <div className="relative h-56">
            <Image
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80"
              alt="Team collaborating on product design and development"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <ul className="space-y-3 text-sm">
              <li>• Web application development (Next.js, secure APIs)</li>
              <li>• Mobile application development (iOS & Android)</li>
              <li>• AI bots and integrations for your workflows</li>
              <li>• Cloud dashboards and product analytics</li>
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-blue-50 text-blue-800 text-sm">Located in Pune — working with founders worldwide.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
