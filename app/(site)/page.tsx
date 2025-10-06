import { Hero } from '@/components/hero';
import Link from 'next/link';
import Image from 'next/image';
import { Zap } from 'lucide-react';
import { Testimonials, Statistics, FAQ } from '@/components/testimonials';
import { CaseStudies } from '@/components/case-studies';

export default function Page(){
  return (
    <div>
      <Hero />
      <section className="container-g py-12 md:py-14">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl">Our Free Programs</h2>
          <Link href="/internships" className="btn btn-primary hidden md:inline-flex"><Zap className="mr-2" /> Apply Now</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {[
            {
              title: 'Web Development with Python & Django',
              desc: 'Learn to build robust web applications using Python and Django framework. Master backend development, databases, and REST APIs through hands-on projects.',
              img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
              features: ['Backend Development', 'Database Design', 'REST APIs', 'Django Framework'],
              duration: '6 Months',
              level: 'Beginner to Intermediate'
            },
            {
              title: 'Full-Stack JavaScript & TypeScript',
              desc: 'Master modern web development with JavaScript, TypeScript, NestJS, and Node.js. Build scalable applications from frontend to backend with industry best practices.',
              img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80',
              features: ['Frontend & Backend', 'TypeScript', 'Modern Frameworks', 'Full-Stack Apps'],
              duration: '6 Months',
              level: 'Beginner to Intermediate'
            },
            {
              title: 'Android App Development with Kotlin',
              desc: 'Create native Android applications using Kotlin. Learn mobile UI/UX, app architecture, and publish your apps to the Google Play Store.',
              img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
              features: ['Native Android Apps', 'Kotlin Programming', 'UI/UX Design', 'App Store Publishing'],
              duration: '6 Months',
              level: 'Beginner to Intermediate'
            }
          ].map((s,i)=> (
            <article key={i} className="card overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <Image src={s.img} alt={s.title} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block bg-white/90 text-gray-800 text-xs px-3 py-1 rounded-full font-medium">{s.duration}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full ml-2 whitespace-nowrap">{s.level}</span>
                </div>
                <p className="text-sm text-gray-700 mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {s.features.slice(0, 2).map((feature, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{feature}</span>
                  ))}
                </div>
                <Link href="/internships" className="text-sm font-medium text-blue-600 hover:text-blue-700 group-hover:underline">
                  Learn More →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link href="/internships" className="btn btn-primary inline-flex"><Zap className="mr-2" /> Apply Now</Link>
        </div>
      </section>
      <section className="bg-white py-12 md:py-14">
        <div className="container-g">
          <h2 className="text-2xl mb-6">Why RizTech Academy?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6"><h3 className="font-semibold">100% Free Education</h3><p className="text-sm mt-2 text-gray-700">No tuition fees, no hidden costs. Quality education should be accessible to all deserving students.</p></div>
            <div className="card p-6"><h3 className="font-semibold">Industry-Ready Skills</h3><p className="text-sm mt-2 text-gray-700">Learn the technologies and practices actually used in the software industry, not just theoretical concepts.</p></div>
            <div className="card p-6"><h3 className="font-semibold">Industry Ready Students</h3><p className="text-sm mt-2 text-gray-700">We make all our deserving students industry ready after our training, equipped with practical skills that employers value in the software industry.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 md:py-20">
        <div className="container-g">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-1">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                🎓 Free Career Launch Program
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transform Your Future</h2>
              <p className="text-lg text-gray-700 mb-6">Join our comprehensive 6-month program in Pune that combines project-based learning, real internships, and personalized mentorship. Transform from student to industry-ready developer — completely free.</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-sm font-medium">Live Projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-sm font-medium">Expert Mentors</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-sm font-medium">Portfolio Building</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-sm font-medium">Job Support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/internships" className="btn btn-primary text-center">
                  🚀 Apply for Free Program
                </Link>
                <Link href="/contact" className="btn btn-outline text-center">
                  📞 Get in Touch
                </Link>
              </div>
            </div>

            <div className="order-2 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-lg opacity-20"></div>
                <div className="relative card overflow-hidden">
                  <div className="relative h-80">
                    <Image
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
                      alt="Students collaborating on software development projects"
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                        <p className="text-sm text-gray-800 font-medium">📍 Pune, India • 100% Free • 6 Months</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container-g">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Learning Approach</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We focus on practical, industry-relevant learning that prepares you for real-world software development careers.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚀',
                label:'Project-First Learning',
                desc:'Learn by doing real projects from day one. Build production-ready applications that solve actual problems.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: '👨‍🏫',
                label:'Mentor-Guided Growth',
                desc:'Work closely with experienced developers who provide personalized feedback and career guidance.',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: '⚡',
                label:'Industry-Standard Practices',
                desc:'Master modern development workflows, version control, testing, and deployment methodologies used in top tech companies.',
                color: 'from-purple-500 to-purple-600'
              }
            ].map((i,idx)=> (
              <div key={idx} className="card p-8 text-center group hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${i.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{i.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{i.label}</h3>
                <p className="text-gray-700 leading-relaxed">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Statistics />
      {/* <Testimonials /> */}
      <FAQ />
      <CaseStudies />

      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 py-16">
        <div className="container-g text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Tech Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with our free programs. Apply now and take the first step towards becoming an industry-ready developer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/internships" className="btn bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg">
              🎯 Apply for Free Program
            </Link>
            <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 text-lg">
              💬 Have Questions?
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-2xl font-bold text-white mb-2">100%</div>
              <div className="text-blue-100">Free Education</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-2xl font-bold text-white mb-2">6</div>
              <div className="text-blue-100">Month Program</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
