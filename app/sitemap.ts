import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://riztechacademy.com';

// Static pages
const staticPages = [
  '',
  '/services',
  '/internships',
  '/solutions',
  '/about',
  '/contact',
  '/blog'
];

// Get blog posts
function getBlogPosts() {
  try {
    const blogDir = path.join(process.cwd(), 'content', 'blog');
    const files = fs.readdirSync(blogDir);

    return files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const filePath = path.join(blogDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);

        return {
          slug: file.replace('.md', ''),
          lastModified: data.date ? new Date(data.date) : new Date(),
        };
      });
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getBlogPosts();

  const staticRoutes = staticPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page === '' ? 1 : 0.8,
  }));

  const blogRoutes = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}

