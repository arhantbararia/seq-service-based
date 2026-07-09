import type { MetadataRoute } from 'next'
import { verticals } from '@/data/verticals'

const BASE_URL = 'https://services.sequels.diy';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/services',
    '/verticals',
    '/catalogue/websites',
    '/catalogue/automations',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const segmentRoutes = verticals.flatMap(vertical => 
    (vertical.segments || []).map(segment => ({
      url: `${BASE_URL}/segments/${segment.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.64,
    }))
  );

  return [...routes, ...segmentRoutes];
}
