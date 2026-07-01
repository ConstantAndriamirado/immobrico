import type { MetadataRoute } from 'next';
import { SERVICES } from '@/lib/content';
import { ARTICLES } from '@/lib/blog';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ['', '/services', '/realisations', '/professionnels', '/tarifs', '/actualites', '/faq', '/a-propos', '/contact', '/zones-intervention'];
  const base = routes.map((r) => ({ url: `${SITE_URL}${r}`, lastModified: now, changeFrequency: 'monthly' as const, priority: r === '' ? 1 : 0.7 }));
  const svc = SERVICES.map((s) => ({ url: `${SITE_URL}/services/${s.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 }));
  const art = ARTICLES.map((a) => ({ url: `${SITE_URL}/actualites/${a.slug}`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.5 }));
  return [...base, ...svc, ...art];
}
