import type {MetadataRoute} from 'next';

import {baseUrl} from '@/lib/metadata';
import {source} from '@/lib/source';

export const revalidate = false;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const items = await Promise.all(
    source.getPages().map(async (page) => {
      const lastModified = page.data.lastModified;

      return {
        url: url(page.url),
        lastModified: lastModified ? new Date(lastModified) : undefined,
        changeFrequency: 'weekly',
        priority: 0.5,
      } as MetadataRoute.Sitemap[number];
    })
  );

  return [
    {
      url: url('/'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...items.filter((v) => v !== undefined),
  ];
}

function url(path: string) {
  return new URL(path, baseUrl).toString();
}
