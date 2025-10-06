import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About RizTech Academy - Free Tech Education for Students',
  description: 'RizTech Academy is a non-profit organization providing free project-based training, internships, and mentorship to bridge the gap between traditional education and industry needs.'
};

export default function About(){
  return (
    <>
      <section className="container-g py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
        <h1 className="text-3xl">About RizTech Academy</h1>
            <p className="text-gray-700 mt-3 max-w-3xl">We are a non-profit organization dedicated to bridging the gap between traditional education and the software industry&apos;s demands. Our mission is to provide free, high-quality technical education to deserving students who lack access to industry-relevant training.</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="card p-6">
                <h3 className="font-semibold">Our Mission</h3>
                <p className="text-sm text-gray-700 mt-2">Democratize access to quality tech education. Help students build careers in software development through hands-on learning.</p>
              </div>
              <div className="card p-6">
                <h3 className="font-semibold">100% Free</h3>
                <p className="text-sm text-gray-700 mt-2">No tuition fees, no hidden costs. Quality education should be accessible to all motivated students regardless of financial background.</p>
              </div>
            </div>
          </div>
          <div className="card overflow-hidden">
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
                alt="Students collaborating on software development projects"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container-g py-14">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl font-medium text-gray-800 italic mb-4">
              &ldquo;I get inspiration from Sonam Wangchuk sir to start this organization to help Indian Students.&rdquo;
            </blockquote>
            <cite className="text-sm text-gray-600">- RizTech Academy Founder</cite>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-g py-14">
          <h2 className="text-2xl">What You&apos;ll Learn</h2>
          <div className="card p-6 mt-6">
            <p className="text-gray-700 mb-4">Our curriculum covers industry-standard technologies used by top tech companies.</p>
            <div className="flex flex-wrap gap-2">
              <span className="badge">JavaScript/TypeScript</span>
              <span className="badge">Python</span>
              <span className="badge">Java</span>
              <span className="badge">React & Next.js</span>
              <span className="badge">Native Android (Kotlin)</span>
              <span className="badge">Native iOS (Swift)</span>
              <span className="badge">Node.js & APIs</span>
              <span className="badge">Databases (SQL & NoSQL)</span>
              <span className="badge">Cloud & DevOps</span>
              <span className="badge">Git & Version Control</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container-g py-14">
        <div className="grid md:grid-cols-3 gap-6">
          <article className="card overflow-hidden">
            <div className="relative h-44">
              <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" alt="Students learning coding together" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="font-semibold">Hands-on Learning</h3>
              <p className="text-sm text-gray-700 mt-2">Learn by building real applications. Our project-based approach ensures you gain practical skills that employers value.</p>
            </div>
          </article>
          <article className="card overflow-hidden">
            <div className="relative h-44">
              <Image src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80" alt="Mentor guiding student" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="font-semibold">Personalized Mentorship</h3>
              <p className="text-sm text-gray-700 mt-2">Work one-on-one with experienced developers who provide guidance, code reviews, and career advice tailored to your goals.</p>
            </div>
          </article>
          <article className="card overflow-hidden">
            <div className="relative h-44">
              <Image src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80" alt="Students celebrating career success" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="font-semibold">Industry Ready Students</h3>
              <p className="text-sm text-gray-700 mt-2">We make all our deserving students industry ready after our training, equipped with practical skills that employers value in the software industry.</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
