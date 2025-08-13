import Link from 'next/link';

export function CTA(){
  return (
    <section className="bg-gray-900 text-white">
      <div className="container-g py-12 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold">Ready to build something great?</h2>
          <p className="text-sm text-gray-300 mt-2">Web, mobile, and AI solutions for startups and small businesses—delivered with speed and quality.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/contact" className="btn btn-primary">Start a project</Link>
          <Link href="/services" className="btn btn-outline bg-transparent border-white/20 text-white hover:bg-white/10">View services</Link>
        </div>
      </div>
    </section>
  );
}


