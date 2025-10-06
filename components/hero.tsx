import Link from 'next/link';
import Image from 'next/image';
export function Hero(){
  return (
    <section className="hero-grad">
      <div className="container-g py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="badge">Free Education · Project-Based Learning · Career Support</span>
          <h1 className="text-4xl md:text-5xl mt-4 leading-tight">Bridging the Gap Between <span className="text-brand">Education</span> and <span className="text-brand">Industry</span> Needs</h1>
          <p className="mt-4 text-gray-700">We provide free project-based training, internships, and mentorship to help students gain real-world software development skills and build successful careers in tech.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/internships" className="btn btn-primary">Apply for Programs</Link>
            <Link href="/about" className="btn btn-outline">Our Mission</Link>
          </div>
        </div>
        <div className="card overflow-hidden">
          <div className="relative h-56">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
              alt="Students learning software development through hands-on projects"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <ul className="space-y-3 text-sm">
              <li>• Free project-based training programs</li>
              <li>• Real-world internship opportunities</li>
              <li>• One-on-one mentorship from industry experts</li>
              <li>• Portfolio development and career guidance</li>
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-green-50 text-green-800 text-sm">🎓 100% Free Education • Pune, India<br/>📍 703, Jubilation, Ahwalwadi Road, Wagholi, Pune</div>
          </div>
        </div>
      </div>
    </section>
  );
}
