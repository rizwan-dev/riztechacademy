import { Hero } from '@/components/hero';
import Link from 'next/link';
import Image from 'next/image';
import { Zap } from 'lucide-react';
import { Testimonials } from '@/components/testimonials';
import { CaseStudies } from '@/components/case-studies';

export default function Page(){
  return (
    <div>
      <Hero />
      <section className="container-g py-12 md:py-14">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl">What we do</h2>
          <Link href="/services" className="btn btn-primary hidden md:inline-flex"><Zap className="mr-2" /> See our services</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: 'Web Application Development',
              desc: 'Modern, scalable web apps with secure APIs and great UX.',
              img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
            },
            {
              title: 'Mobile Application Development',
              desc: 'High-quality iOS and Android apps with React Native.',
              img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
            },
            {
              title: 'AI Bots',
              desc: 'Intelligent chatbots and copilots integrated into your workflows.',
              img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
            }
          ].map((s,i)=> (
            <article key={i} className="card overflow-hidden">
              <div className="relative h-40">
                <Image src={s.img} alt={s.title} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-gray-700 mt-2">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link href="/services" className="btn btn-primary inline-flex"><Zap className="mr-2" /> See our services</Link>
        </div>
      </section>
      <section className="bg-white py-12 md:py-14">
        <div className="container-g">
          <h2 className="text-2xl mb-6">Why choose us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6"><h3 className="font-semibold">Startup speed</h3><p className="text-sm mt-2 text-gray-700">Lean, fast iterations with founders in the loop.</p></div>
            <div className="card p-6"><h3 className="font-semibold">Production quality</h3><p className="text-sm mt-2 text-gray-700">Secure APIs, telemetry, and CI/CD from day one.</p></div>
            <div className="card p-6"><h3 className="font-semibold">Measurable ROI</h3><p className="text-sm mt-2 text-gray-700">Ship features that move activation, retention, and revenue.</p></div>
          </div>
        </div>
      </section>

      <section className="container-g py-12 md:py-14">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="card overflow-hidden order-2 md:order-1">
            <div className="relative h-56">
              <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80" alt="Students collaborating during an internship program" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="badge">Learn & grow</span>
            <h2 className="text-2xl mt-3">Internships at RizTech Academy</h2>
            <p className="text-gray-700 mt-2">Kickstart your career in software development. Work on real projects, learn modern stacks, and build a strong portfolio with mentorship.</p>
            <div className="mt-5 flex gap-3">
              <Link href="/internships" className="btn btn-primary">Explore internships</Link>
              <Link href="/contact" className="btn btn-outline">Contact us</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 md:py-14">
        <div className="container-g grid md:grid-cols-3 gap-6">
          {[{label:'Fast kickoffs',desc:'We align on outcomes, scope and timelines, then ship weekly.'},{label:'Senior delivery',desc:'Small expert teams across product, design, and engineering.'},{label:'Built-in quality',desc:'Security, analytics and CI from day one—not after launch.'}].map((i,idx)=> (
            <div key={idx} className="card p-6">
              <h3 className="font-semibold">{i.label}</h3>
              <p className="text-sm text-gray-700 mt-2">{i.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <Testimonials />
      <CaseStudies />
    </div>
  );
}
