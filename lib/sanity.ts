import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import {
  mockPrograms,
  mockPengajar,
  mockBerita,
  mockGaleri,
  mockSiteSettings,
  mockPopupPromo,
  mockTestimoni,
  mockKeunggulan,
  ProgramItem,
  PengajarItem,
  TestimoniItem,
  KeunggulanItem,
  BeritaItem,
  GaleriItem,
  SiteSettings,
  PopupPromoData
} from './mockData';

export { mockSiteSettings, mockPopupPromo, mockTestimoni, mockKeunggulan };
export type { PopupPromoData, TestimoniItem, KeunggulanItem, ProgramItem, PengajarItem, BeritaItem, GaleriItem, SiteSettings };

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '9f5rpp8c';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-12';

export const isSanityConfigured = Boolean(projectId && projectId !== 'your-project-id');

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === 'production',
    })
  : null;

const builder = client ? imageUrlBuilder(client) : null;

export function urlFor(source: any) {
  if (!builder || !source) {
    return {
      url: () => (typeof source === 'string' ? source : '/placeholder.jpg'),
      width: (_w: number) => ({
        url: () => (typeof source === 'string' ? source : '/placeholder.jpg')
      }),
      height: (_h: number) => ({
        url: () => (typeof source === 'string' ? source : '/placeholder.jpg')
      })
    };
  }
  return builder.image(source);
}

// 1. Query Programs
export async function getPrograms(): Promise<ProgramItem[]> {
  if (!client) return mockPrograms;
  try {
    const query = `*[_type == "program"] | order(urutan asc, _createdAt desc){
      _id,
      judul,
      slug,
      kategori,
      tipeKelas,
      ringkasan,
      durasi,
      targetLevel,
      harga,
      keunggulan,
      "gambarUrl": gambar.asset->url
    }`;
    const data = await client.fetch(query);
    return data && data.length > 0 ? data : mockPrograms;
  } catch (error) {
    console.warn('Failed fetching programs from Sanity, falling back to mock data', error);
    return mockPrograms;
  }
}

// 2. Query Pengajar (Laoshi)
export async function getPengajar(): Promise<PengajarItem[]> {
  if (!client) return mockPengajar;
  try {
    const query = `*[_type == "pengajar"] | order(urutan asc){
      _id,
      nama,
      gelar,
      spesialisasi,
      bio,
      sertifikasi,
      "fotoUrl": foto.asset->url,
      urutan
    }`;
    const data = await client.fetch(query);
    return data && data.length > 0 ? data : mockPengajar;
  } catch (error) {
    console.warn('Failed fetching pengajar from Sanity, falling back to mock data', error);
    return mockPengajar;
  }
}

// 3. Query Testimoni Siswa & Alumni
export async function getTestimoni(): Promise<TestimoniItem[]> {
  if (!client) return mockTestimoni;
  try {
    const query = `*[_type == "testimoni"] | order(urutan asc, _createdAt desc){
      _id,
      nama,
      peran,
      program,
      rating,
      komentar,
      "fotoUrl": foto.asset->url,
      "avatar": foto.asset->url,
      urutan
    }`;
    const data = await client.fetch(query);
    return data && data.length > 0 ? data : mockTestimoni;
  } catch (error) {
    console.warn('Failed fetching testimoni from Sanity, falling back to mock data', error);
    return mockTestimoni;
  }
}

// 4. Query Keunggulan / Kenapa Kami
export async function getKeunggulan(): Promise<KeunggulanItem[]> {
  if (!client) return mockKeunggulan;
  try {
    const query = `*[_type == "keunggulan"] | order(urutan asc){
      _id,
      title,
      badge,
      desc,
      "customIconUrl": customIcon.asset->url,
      urutan
    }`;
    const data = await client.fetch(query);
    return data && data.length > 0 ? data : mockKeunggulan;
  } catch (error) {
    console.warn('Failed fetching keunggulan from Sanity, falling back to mock data', error);
    return mockKeunggulan;
  }
}

// 5. Query Berita & Artikel
export async function getBerita(): Promise<BeritaItem[]> {
  if (!client) return mockBerita;
  try {
    const query = `*[_type == "berita"] | order(tanggal desc){
      _id,
      judul,
      slug,
      tanggal,
      kategori,
      ringkasan,
      konten,
      "gambarUtamaUrl": gambarUtama.asset->url
    }`;
    const data = await client.fetch(query);
    return data && data.length > 0 ? data : mockBerita;
  } catch (error) {
    console.warn('Failed fetching berita from Sanity, falling back to mock data', error);
    return mockBerita;
  }
}

// 6. Query Single Berita by Slug
export async function getBeritaBySlug(slug: string): Promise<BeritaItem | null> {
  if (!client) {
    return mockBerita.find((b) => b.slug.current === slug) || mockBerita[0] || null;
  }
  try {
    const query = `*[_type == "berita" && slug.current == $slug][0]{
      _id,
      judul,
      slug,
      tanggal,
      kategori,
      ringkasan,
      konten,
      "gambarUtamaUrl": gambarUtama.asset->url
    }`;
    const data = await client.fetch(query, { slug });
    return data || mockBerita.find((b) => b.slug.current === slug) || null;
  } catch (error) {
    console.warn('Failed fetching single berita from Sanity', error);
    return mockBerita.find((b) => b.slug.current === slug) || null;
  }
}

// 7. Query Galeri
export async function getGaleri(): Promise<GaleriItem[]> {
  if (!client) return mockGaleri;
  try {
    const query = `*[_type == "galeri"] | order(tanggal desc){
      _id,
      judul,
      tanggal,
      deskripsi,
      kategori,
      "foto": foto[]{
        "url": asset->url,
        "caption": caption
      }
    }`;
    const data = await client.fetch(query);
    return data && data.length > 0 ? data : mockGaleri;
  } catch (error) {
    console.warn('Failed fetching galeri from Sanity, falling back to mock data', error);
    return mockGaleri;
  }
}

// 8. Query Site Settings & Hero Configuration
export async function getSiteSettings(): Promise<SiteSettings> {
  if (!client) return mockSiteSettings;
  try {
    const query = `*[_type == "siteSettings"][0]{
      namaSitus,
      tagline,
      deskripsi,
      teleponHotline,
      whatsappUtama,
      email,
      alamatPusat,
      jamOperasional,
      instagramUrl,
      instagramHandle,
      tiktokUrl,
      tiktokHandle,
      facebookUrl,
      facebookName,
      youtubeUrl,
      youtubeChannel,
      linkedinUrl,
      linkedinName,
      heroHeadlineMain,
      heroHeadlineHighlight,
      heroSubheadline,
      "heroPhotoUrl": heroPhoto.asset->url,
      ctaBannerTitle,
      ctaBannerSubtitle,
      cabang
    }`;
    const data = await client.fetch(query);
    return data ? { ...mockSiteSettings, ...data } : mockSiteSettings;
  } catch (error) {
    console.warn('Failed fetching siteSettings from Sanity', error);
    return mockSiteSettings;
  }
}

// 9. Query Popup Promo / Iklan Brosur
export async function getPopupPromo(): Promise<PopupPromoData> {
  if (!client) return mockPopupPromo;
  try {
    const query = `*[_type == "popupPromo"][0]{
      aktif,
      tipeTampilan,
      "posterImageUrl": posterImage.asset->url,
      judulPromo,
      linkTujuan,
      teksTombol
    }`;
    const data = await client.fetch(query);
    return data ? { ...mockPopupPromo, ...data } : mockPopupPromo;
  } catch (error) {
    console.warn('Failed fetching popupPromo from Sanity', error);
    return mockPopupPromo;
  }
}
