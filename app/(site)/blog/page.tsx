import Link from 'next/link';
import Image from 'next/image';
import { getAllPostsMeta } from '@/lib/blog';
import type { Metadata } from 'next';
 

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on building AI products for startups.'
};

export default function BlogPage(){
  const posts = getAllPostsMeta();
  const [featured, ...rest] = posts;

  function pickImage(tags?: string[]): string{
    const t = (tags || []).map(s=>s.toLowerCase());
    if (t.includes('ai')) return 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80';
    if (t.includes('next.js') || t.includes('web')) return 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80';
    if (t.includes('ml')) return 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80';
    return 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1600&q=80';
  }

  const tagToCount = rest.reduce<Record<string,number>>((acc,p)=>{
    (p.tags || []).forEach(tag=>{ acc[tag] = (acc[tag]||0)+1; });
    return acc;
  },{});
  const topTags = Object.entries(tagToCount).sort((a,b)=> b[1]-a[1]).slice(0,6).map(([t])=>t);

  return (
    <section className="container-g py-16">
      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {featured && (
          <article className="md:col-span-2 card overflow-hidden flex flex-col">
            <div className="relative h-56 md:h-72">
              <Image src={pickImage(featured.tags)} alt={featured.title} fill className="object-cover" sizes="(min-width: 768px) 66vw, 100vw" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="text-xs text-gray-500">{new Date(featured.date).toLocaleDateString()}</div>
              <h2 className="font-semibold mt-2 text-xl">{featured.title}</h2>
              <p className="text-sm text-gray-700 mt-2 flex-1">{featured.excerpt}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {(featured.tags||[]).map(tag=> (<span key={tag} className="badge">{tag}</span>))}
              </div>
              <Link href={`/blog/${featured.slug}`} className="btn btn-primary mt-5 self-start">Read article</Link>
            </div>
          </article>
        )}

        <aside className="card p-6 h-full">
          <h3 className="font-semibold">Popular topics</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {topTags.length>0 ? topTags.map(tag=> (<span key={tag} className="badge">{tag}</span>)) : <span className="text-sm text-gray-600">Tags coming soon</span>}
          </div>
          <p className="text-sm text-gray-700 mt-4">Insights on building web, mobile, and AI products — practical and founder-focused.</p>
        </aside>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {rest.map(p => (
          <article key={p.slug} className="card overflow-hidden flex flex-col">
            <div className="relative h-36">
              <Image src={pickImage(p.tags)} alt={p.title} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="text-xs text-gray-500">{new Date(p.date).toLocaleDateString()}</div>
              <h3 className="font-semibold mt-2 text-lg">{p.title}</h3>
              <p className="text-sm text-gray-700 mt-2 flex-1">{p.excerpt}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {(p.tags||[]).map(tag=> (<span key={tag} className="badge">{tag}</span>))}
              </div>
              <Link href={`/blog/${p.slug}`} className="btn btn-outline mt-4 self-start">Read more</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
