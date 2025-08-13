import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
  description: 'RizTechAcademy builds AI-powered software for startups with a senior, product-minded team.'
};

export default function About(){
  return (
    <>
      <section className="container-g py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl">About RizTechAcademy</h1>
            <p className="text-gray-700 mt-3 max-w-3xl">We help founders and small businesses turn ideas into modern web, mobile, and AI-powered products. We combine product strategy, UX, and engineering to ship fast, measure impact, and iterate with confidence.</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="card p-6">
                <h3 className="font-semibold">How we work</h3>
                <p className="text-sm text-gray-700 mt-2">Small, senior teams. Weekly demos. Clear milestones and transparent communication.</p>
              </div>
              <div className="card p-6">
                <h3 className="font-semibold">Quality by default</h3>
                <p className="text-sm text-gray-700 mt-2">Clean architecture, performance, security, and observability from day one.</p>
              </div>
            </div>
          </div>
          <div className="card overflow-hidden">
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
                alt="Team collaborating on product design and development"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-g py-14">
          <h2 className="text-2xl">Tech stack</h2>
          <div className="card p-6 mt-6">
            <div className="flex flex-wrap gap-2">
              <span className="badge">Java</span>
              <span className="badge">Python</span>
              <span className="badge">Rust</span>
              <span className="badge">React</span>
              <span className="badge">Native Android (Kotlin/Java)</span>
              <span className="badge">Native iOS (Swift)</span>
              <span className="badge">Next.js</span>
              <span className="badge">Node.js APIs</span>
              <span className="badge">PostgreSQL</span>
              <span className="badge">Docker & Cloud</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container-g py-14">
        <div className="grid md:grid-cols-3 gap-6">
          <article className="card overflow-hidden">
            <div className="relative h-44">
              <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" alt="Engineering best practices" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="font-semibold">Engineering excellence</h3>
              <p className="text-sm text-gray-700 mt-2">Type-safe code, automated checks, and clear documentation ensure maintainability as your product grows.</p>
            </div>
          </article>
          <article className="card overflow-hidden">
            <div className="relative h-44">
              <Image src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80" alt="Product thinking" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="font-semibold">Product-focused</h3>
              <p className="text-sm text-gray-700 mt-2">We align on outcomes, not just outputs—prioritizing features that move activation, retention, and revenue.</p>
            </div>
          </article>
          <article className="card overflow-hidden">
            <div className="relative h-44">
              <Image src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80" alt="Reliable delivery" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="font-semibold">Reliable delivery</h3>
              <p className="text-sm text-gray-700 mt-2">Predictable sprints, frequent releases, and close collaboration keep momentum high.</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
