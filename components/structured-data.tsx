import { Metadata } from 'next';

// Organization structured data
export function OrganizationStructuredData() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RizTech Academy',
    url: 'https://riztechacademy.com',
    logo: 'https://riztechacademy.com/logo.svg',
    description: 'We build AI-powered software solutions that help startups move faster and smarter.',
    foundingDate: '2024',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-8983265077',
      contactType: 'customer service',
      areaServed: 'Worldwide',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'India',
      addressRegion: 'Maharashtra',
      addressLocality: 'Pune',
      postalCode: '411057',
      streetAddress: '703, Jubilation, Ahwalwadi Road, Wagholi',
    },
    sameAs: [
      // Add social media URLs when available
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}

// Website structured data
export function WebsiteStructuredData() {
  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'RizTech Academy',
    url: 'https://riztechacademy.com',
    description: 'Professional web and mobile application development company offering AI solutions and internship opportunities.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://riztechacademy.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
    />
  );
}

// Service structured data
export function ServiceStructuredData({
  name,
  description,
  serviceType,
  url,
}: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
}) {
  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    provider: {
      '@type': 'Organization',
      name: 'RizTech Academy',
    },
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
    />
  );
}

// Breadcrumb structured data
export function BreadcrumbStructuredData({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}

// Article/BlogPost structured data
export function ArticleStructuredData({
  title,
  description,
  url,
  image,
  publishedTime,
  modifiedTime,
  author,
  tags,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  publishedTime: string;
  modifiedTime?: string;
  author: string;
  tags?: string[];
}) {
  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image: image || 'https://riztechacademy.com/logo.svg',
    url,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'RizTech Academy',
      logo: {
        '@type': 'ImageObject',
        url: 'https://riztechacademy.com/logo.svg',
      },
    },
    ...(tags && tags.length > 0 && {
      keywords: tags.join(', '),
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
    />
  );
}

