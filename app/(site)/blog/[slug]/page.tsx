import { getAllPostsMeta, getPost } from '@/lib/blog';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getExtraContent } from '@/lib/blogContent';

export const dynamic = 'force-static';

type Props = { params: { slug: string } };

export async function generateStaticParams(){
  return getAllPostsMeta().map(p => ({ slug: p.slug }));
}

export default async function PostPage({ params }: Props){
  const post = await getPost(params.slug);
  const all = getAllPostsMeta();
  const related = all.filter(p => p.slug !== post.slug).slice(0,3);
  const extra = getExtraContent(post.slug);

  function pickImage(tags?: string[]): string{
    const t = (tags || []).map(s=>s.toLowerCase());
    if (t.includes('ai')) return 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80';
    if (t.includes('next.js') || t.includes('web')) return 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80';
    if (t.includes('ml')) return 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80';
    return 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1600&q=80';
  }
  return (
    <>
      <section className="container-g py-12">
        <article className="max-w-3xl mx-auto card overflow-hidden">
          <div className="relative h-60 md:h-80">
            <Image src={pickImage(post.tags)} alt={post.title} fill className="object-cover" sizes="(min-width: 768px) 66vw, 100vw" />
          </div>
          <div className="p-8">
            <div className="text-xs text-gray-500 flex items-center gap-2">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span>·</span>
              <span>{post.readingTime || 3} min read</span>
            </div>
            <h1 className="text-3xl mt-2">{post.title}</h1>
            <div className="mt-3 flex flex-wrap gap-2">
              {(post.tags||[]).map(tag=> (<span key={tag} className="badge">{tag}</span>))}
            </div>
            {extra?.subtitle && <p className="text-gray-700 mt-4">{extra.subtitle}</p>}
            {extra?.heroPoints && (
              <ul className="list-disc list-inside text-sm text-gray-700 mt-3 space-y-1">
                {extra.heroPoints.map((pt,i)=>(<li key={i}>{pt}</li>))}
              </ul>
            )}
            <div className="prose mt-6" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            {extra?.sections?.map((s,idx)=>(
              <section key={idx} className="mt-8">
                <h3 className="text-xl font-semibold">{s.heading}</h3>
                {s.body.map((p,i)=>(<p key={i} className="text-gray-700 mt-2">{p}</p>))}
                {s.bullets && (
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                    {s.bullets.map((b,i)=>(<li key={i}>{b}</li>))}
                  </ul>
                )}
              </section>
            ))}
            {extra?.takeaways && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold">Key takeaways</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                  {extra.takeaways.map((t,i)=>(<li key={i}>{t}</li>))}
                </ul>
              </div>
            )}
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              {[
                'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1400&q=80',
                'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80'
              ].map((src,idx)=> (
                <div key={idx} className="relative h-40 rounded-2xl overflow-hidden">
                  <Image src={src} alt="Article illustration" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3">
              <Link href="/blog" className="btn btn-outline">← Back to blog</Link>
              <Link href="/contact" className="btn btn-primary">Start a project</Link>
            </div>
          </div>
        </article>
      </section>

      {related.length > 0 && (
        <section className="container-g pb-14">
          <h2 className="text-2xl mb-6">More articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map(p => (
              <article key={p.slug} className="card overflow-hidden flex flex-col">
                <div className="relative h-32">
                  <Image src={pickImage(p.tags)} alt={p.title} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs text-gray-500">{new Date(p.date).toLocaleDateString()}</div>
                  <h3 className="font-semibold mt-2 text-lg">{p.title}</h3>
                  <p className="text-sm text-gray-700 mt-2 flex-1">{p.excerpt}</p>
                  <Link href={`/blog/${p.slug}`} className="btn btn-outline mt-4 self-start">Read more</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt || undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt || undefined,
      type: 'article'
    },
    twitter: {
      card: 'summary',
      title: post.title,
      description: post.excerpt || undefined
    }
  };
}
