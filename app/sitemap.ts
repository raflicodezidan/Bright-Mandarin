import { MetadataRoute } from 'next';
import { getBerita } from '@/lib/sanity';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.brightmandarin.courses';

  // Halaman Utama & Statis
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/program`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pengajar`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/galeri`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/berita`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];

  // Halaman Berita / Blog Dinamis
  let dynamicBeritaRoutes: MetadataRoute.Sitemap = [];
  try {
    const beritaList = await getBerita();
    if (Array.isArray(beritaList)) {
      dynamicBeritaRoutes = beritaList
        .filter((item) => item?.slug?.current)
        .map((item) => ({
          url: `${baseUrl}/berita/${item.slug.current}`,
          lastModified: item.tanggal ? new Date(item.tanggal) : new Date(),
          changeFrequency: 'monthly',
          priority: 0.7,
        }));
    }
  } catch {
    // Fallback jika Sanity offline saat build
  }

  return [...staticRoutes, ...dynamicBeritaRoutes];
}
