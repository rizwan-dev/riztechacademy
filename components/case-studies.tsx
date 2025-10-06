import Image from 'next/image';

export function CaseStudies(){
  const items = [
    {
      title: 'E-Commerce Platform',
      student: 'Arjun Patel',
      track: 'Full-Stack JavaScript & TypeScript',
      description: 'Built a complete e-commerce platform with user authentication, payment integration, and admin dashboard.',
      technologies: 'React, Node.js, PostgreSQL, Stripe API',
      img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Task Management API',
      student: 'Priya Sharma',
      track: 'Web Development with Python & Django',
      description: 'Developed a RESTful API for task management with user authentication, CRUD operations, and data validation.',
      technologies: 'Django, Django REST Framework, PostgreSQL',
      img: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Fitness Tracking App',
      student: 'Rahul Kumar',
      track: 'Android App Development with Kotlin',
      description: 'Created a native Android app for fitness tracking with workout logging, progress charts, and social features.',
      technologies: 'Kotlin, Android SDK, Room Database, Firebase',
      img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80'
    }
  ];
  return (
    <section className="container-g py-16">
      <div className="text-center">
        <h2 className="text-2xl">Student Project Showcases</h2>
        <p className="text-gray-600 mt-2">Real projects built by our students during their training programs</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {items.map((c,i)=> (
          <article key={i} className="card overflow-hidden">
            <div className="relative h-40">
              <Image src={c.img} alt={c.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className="text-sm text-gray-700 mt-2">{c.description}</p>
              <div className="mt-4 space-y-2">
                <p className="text-xs text-blue-600 font-medium">👨‍💻 {c.student}</p>
                <p className="text-xs text-purple-600">{c.track}</p>
                <p className="text-xs text-gray-500">🛠️ {c.technologies}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


