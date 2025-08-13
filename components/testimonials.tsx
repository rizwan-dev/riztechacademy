export function Testimonials(){
  const items = [
    {
      quote: 'They delivered our MVP in weeks, not months—clean code and a great UX.',
      name: 'Ananya Sharma'
    },
    {
      quote: 'Their AI bot cut our support response time by 60% and improved CSAT.',
      name: 'Rohit Verma'
    },
    {
      quote: 'From infra to product, the team operates like senior engineers and owners.',
      name: 'Priya Singh'
    }
  ];
  return (
    <section className="bg-white">
      <div className="container-g py-16">
        <h2 className="text-2xl">What our clients say</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {items.map((t,i)=> (
            <figure key={i} className="card p-6">
              <blockquote className="text-sm text-gray-800">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-xs text-gray-600">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


