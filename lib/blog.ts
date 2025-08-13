import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), 'content', 'blog');

export type PostMeta = { slug: string; title: string; date: string; excerpt: string; tags?: string[]; readingTime?: number };
export type Post = PostMeta & { contentHtml: string };

export function getAllPostsMeta(): PostMeta[]{
  const files = fs.readdirSync(postsDir).filter(f=>f.endsWith('.md'));
  const posts = files.map(filename => {
    const slug = filename.replace(/\.md$/, '');
    const file = fs.readFileSync(path.join(postsDir, filename), 'utf8');
    const { data, content } = matter(file);
    const excerpt = (data.excerpt as string) || content.slice(0, 180).replace(/\n/g,' ') + '...';
    const words = content.trim().split(/\s+/).length;
    const readingTime = Math.max(1, Math.round(words / 220));
    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      excerpt,
      tags: (data.tags || []) as string[],
      readingTime
    };
  });
  return posts.sort((a,b)=> (a.date > b.date ? -1 : 1));
}

export async function getPost(slug: string): Promise<Post>{
  const full = fs.readFileSync(path.join(postsDir, slug + '.md'), 'utf8');
  const { data, content } = matter(full);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();
  const words = content.trim().split(/\s+/).length;
  const readingTime = Math.max(1, Math.round(words / 220));
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: (data.excerpt as string) || '',
    tags: (data.tags || []) as string[],
    contentHtml,
    readingTime
  };
}
