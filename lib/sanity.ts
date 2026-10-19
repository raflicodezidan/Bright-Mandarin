import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import {
  mockPrograms,
  mockAchievement,
  mockExamSchoolAchievement,
  mockPengajar,
  mockBerita,
  mockGaleri,
  mockSiteSettings,
  mockPopupPromo,
  mockTestimoni,
  mockKeunggulan,
  DEFAULT_WHATSAPP_URL,
  DEFAULT_WHATSAPP_MESSAGE,
  DEFAULT_WHATSAPP_PHONE,
  ProgramItem,
  AchievementItem,
  PengajarItem,
  TestimoniItem,
  KeunggulanItem,
  BeritaItem,
  GaleriItem,
  SiteSettings,
  PopupPromoData,
  InstagramPostItem
} from './mockData';

export { mockSiteSettings, mockPopupPromo, mockTestimoni, mockKeunggulan, mockAchievement, mockExamSchoolAchievement, DEFAULT_WHATSAPP_URL, DEFAULT_WHATSAPP_MESSAGE, DEFAULT_WHATSAPP_PHONE };
export type { PopupPromoData, TestimoniItem, KeunggulanItem, ProgramItem, AchievementItem, PengajarItem, BeritaItem, GaleriItem, SiteSettings, InstagramPostItem };

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
      ringkasan,
      targetUsia,
      materi,
      metode,
      durasi,
      benefit,
      harga,
      "gambarUrl": gambar.asset->url
    }`;
    const data = await client.fetch(query);
    return data && data.length > 0 ? data : mockPrograms;
  } catch (error) {
    console.warn('Failed fetching programs from Sanity, falling back to mock data', error);
    return mockPrograms;
  }
}

// 2a. Query Achievement HSK / HSKK
export async function getHskAchievement(): Promise<AchievementItem[]> {
  if (!client) return mockAchievement;
  try {
    const query = `*[_type == "achievement" && (kategori == "hsk" || !defined(kategori))] | order(urutan asc, _createdAt desc){
      _id,
      nama,
      level,
      skor,
      keterangan,
      kategori,
      "fotoUrl": foto.asset->url,
      urutan
    }`;
    const data = await client.fetch(query);
    return data && data.length > 0 ? data : mockAchievement;
  } catch (error) {
    console.warn('Failed fetching HSK achievement from Sanity, falling back to mock data', error);
    return mockAchievement;
  }
}

// 2b. Query Achievement Ujian Sekolah / Kompetisi
export async function getExamSchoolAchievement(): Promise<AchievementItem[]> {
  if (!client) return mockExamSchoolAchievement;
  try {
    const query = `*[_type == "achievement" && kategori == "examSchool"] | order(urutan asc, _createdAt desc){
      _id,
      nama,
      level,
      skor,
      keterangan,
      kategori,
      "fotoUrl": foto.asset->url,
      urutan
    }`;
    const data = await client.fetch(query);
    return data && data.length > 0 ? data : mockExamSchoolAchievement;
  } catch (error) {
    console.warn('Failed fetching exam school achievement from Sanity, falling back to mock data', error);
    return mockExamSchoolAchievement;
  }
}

// 2c. Query semua Achievement (untuk backward compat)
export async function getAchievement(): Promise<AchievementItem[]> {
  if (!client) return mockAchievement;
  try {
    const query = `*[_type == "achievement"] | order(urutan asc, _createdAt desc){
      _id,
      nama,
      level,
      skor,
      keterangan,
      kategori,
      "fotoUrl": foto.asset->url,
      urutan
    }`;
    const data = await client.fetch(query);
    return data && data.length > 0 ? data : mockAchievement;
  } catch (error) {
    console.warn('Failed fetching achievement from Sanity, falling back to mock data', error);
    return mockAchievement;
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
      "gambarUtamaUrl": gambarUtama.asset->url,
      "videoVerticalUrl": videoVertical.asset->url,
      videoJudul
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
      "gambarUtamaUrl": gambarUtama.asset->url,
      "videoVerticalUrl": videoVertical.asset->url,
      videoJudul
    }`;
    const data = await client.fetch(query, { slug });
    return data || mockBerita.find((b) => b.slug.current === slug) || null;
  } catch (error) {
    console.warn('Failed fetching single berita from Sanity', error);
    return mockBerita.find((b) => b.slug.current === slug) || null;
  }
}

// 7. Query Galeri Kegiatan
export async function getGaleri(): Promise<GaleriItem[]> {
  if (!client) return mockGaleri;
  try {
    const query = `*[_type == "galeri"] | order(_createdAt desc){
      _id,
      judul,
      slug,
      tanggal,
      deskripsi,
      ceritaLengkap,
      kategori,
      "coverImageUrl": coalesce(coverImage.asset->url, foto[0].asset->url),
      "videoUrl": coalesce(videoFile.asset->url, videoUrl),
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

// 7b. Query Single Galeri by Slug
export async function getGaleriBySlug(slug: string): Promise<GaleriItem | null> {
  if (!client) {
    return mockGaleri.find((g) => g.slug?.current === slug || g._id === slug) || mockGaleri[0] || null;
  }
  try {
    const query = `*[_type == "galeri" && (slug.current == $slug || _id == $slug)][0]{
      _id,
      judul,
      slug,
      tanggal,
      deskripsi,
      ceritaLengkap,
      kategori,
      "coverImageUrl": coalesce(coverImage.asset->url, foto[0].asset->url),
      "videoUrl": coalesce(videoFile.asset->url, videoUrl),
      "foto": foto[]{
        "url": asset->url,
        "caption": caption
      }
    }`;
    const data = await client.fetch(query, { slug });
    return data || mockGaleri.find((g) => g.slug?.current === slug || g._id === slug) || null;
  } catch (error) {
    console.warn('Failed fetching single galeri from Sanity', error);
    return mockGaleri.find((g) => g.slug?.current === slug || g._id === slug) || null;
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
      heroBadgeText,
      heroHeadlineMain,
      heroHeadlineHighlight,
      heroSubheadline,
      heroPrimaryCtaText,
      heroSecondaryCtaText,
      "heroBgImageUrl": heroBgImage.asset->url,
      "heroPhotoUrl": heroPhoto.asset->url,
      heroCard1Number,
      heroCard1Text,
      heroCard2Number,
      heroCard2Text,
      heroCard3Number,
      heroCard3Text,
      whyUsTitle,
      whyUsSubtitle,
      whyUsDesc,
      learningModesTitle,
      learningModesSubtitle,
      learningModesDesc,
      learningModesBadge,
      learningModesCardTitle,
      "learningModesCardImageUrl": learningModesCardImage.asset->url,
      learningModesPoints,
      learningModesButtonText,
      learningModesButtonLink,
      programSectionTitle,
      programSectionSubtitle,
      programSectionDesc,
      pengajarSectionTitle,
      pengajarSectionSubtitle,
      pengajarSectionDesc,
      achievementSectionTitle,
      achievementSectionSubtitle,
      achievementSectionDesc,
      beritaSectionTitle,
      beritaSectionSubtitle,
      beritaSectionDesc,
      lokasiSectionTitle,
      lokasiSectionSubtitle,
      lokasiSectionDesc,
      socialSectionTitle,
      socialSectionSubtitle,
      socialSectionDesc,
      instagramAspectRatio,
      instagramShowCaptionLikes,
      instagramEmbedWidget,
      "instagramPosts": instagramPosts[]{
        "gambarUrl": gambar.asset->url,
        caption,
        linkPost,
        likes
      },
      testimoniSectionTitle,
      testimoniSectionSubtitle,
      testimoniSectionDesc,
      googleReviewUrl,
      ctaBannerBadge,
      ctaBannerTitle,
      ctaBannerSubtitle,
      ctaBannerButtonWhatsapp,
      ctaBannerButtonProgram,
      "ctaBannerBgImageUrl": ctaBannerBgImage.asset->url,
      galeriSectionTitle,
      galeriSectionSubtitle,
      galeriSectionDesc,
      cabang
    }`;
    const data = await client.fetch(query);
    const result = data ? { ...mockSiteSettings, ...data } : mockSiteSettings;
    if (!result.whatsappUtama || result.whatsappUtama.includes('Halo+Admin') || result.whatsappUtama.includes('Halo%20Admin') || result.whatsappUtama.includes('Free+Trial')) {
      result.whatsappUtama = DEFAULT_WHATSAPP_URL;
    }
    return result;
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
    const result = data ? { ...mockPopupPromo, ...data } : mockPopupPromo;
    if (!result.linkTujuan || result.linkTujuan.includes('Halo+Admin') || result.linkTujuan.includes('Halo%20Admin')) {
      result.linkTujuan = DEFAULT_WHATSAPP_URL;
    }
    return result;
  } catch (error) {
    console.warn('Failed fetching popupPromo from Sanity', error);
    return mockPopupPromo;
  }
}

// 10. Query Media Sosial / Instagram Feed (Dokumen Khusus Terpisah)
export type MediaSosialData = {
  socialSectionTitle?: string;
  socialSectionSubtitle?: string;
  socialSectionDesc?: string;
  instagramUrl?: string;
  instagramHandle?: string;
  instagramAspectRatio?: 'auto' | 'portrait' | 'square' | 'story' | string;
  instagramShowCaptionLikes?: boolean;
  instagramPosts?: InstagramPostItem[];
  instagramEmbedWidget?: string;
};

export async function getMediaSosial(): Promise<MediaSosialData> {
  const fallbackData: MediaSosialData = {
    socialSectionTitle: mockSiteSettings.socialSectionTitle,
    socialSectionSubtitle: mockSiteSettings.socialSectionSubtitle,
    socialSectionDesc: mockSiteSettings.socialSectionDesc,
    instagramUrl: mockSiteSettings.instagramUrl,
    instagramHandle: mockSiteSettings.instagramHandle,
    instagramAspectRatio: mockSiteSettings.instagramAspectRatio,
    instagramShowCaptionLikes: mockSiteSettings.instagramShowCaptionLikes,
    instagramPosts: mockSiteSettings.instagramPosts,
    instagramEmbedWidget: mockSiteSettings.instagramEmbedWidget,
  };

  if (!client) return fallbackData;

  try {
    const query = `*[_type == "mediaSosial"][0]{
      socialSectionTitle,
      socialSectionSubtitle,
      socialSectionDesc,
      instagramUrl,
      instagramHandle,
      instagramAspectRatio,
      instagramShowCaptionLikes,
      instagramEmbedWidget,
      "instagramPosts": instagramPosts[]{
        "gambarUrl": gambar.asset->url,
        caption,
        linkPost,
        likes
      }
    }`;
    const data = await client.fetch(query);
    if (data && (data.socialSectionTitle || data.instagramPosts?.length || data.instagramAspectRatio)) {
      return { ...fallbackData, ...data };
    }

    // Jika dokumen terpisah belum diisi, fallback ke siteSettings
    const settings = await getSiteSettings();
    return {
      socialSectionTitle: settings.socialSectionTitle || fallbackData.socialSectionTitle,
      socialSectionSubtitle: settings.socialSectionSubtitle || fallbackData.socialSectionSubtitle,
      socialSectionDesc: settings.socialSectionDesc || fallbackData.socialSectionDesc,
      instagramUrl: settings.instagramUrl || fallbackData.instagramUrl,
      instagramHandle: settings.instagramHandle || fallbackData.instagramHandle,
      instagramAspectRatio: settings.instagramAspectRatio || fallbackData.instagramAspectRatio,
      instagramShowCaptionLikes: settings.instagramShowCaptionLikes ?? fallbackData.instagramShowCaptionLikes,
      instagramPosts: settings.instagramPosts || fallbackData.instagramPosts,
      instagramEmbedWidget: settings.instagramEmbedWidget || fallbackData.instagramEmbedWidget,
    };
  } catch (error) {
    console.warn('Failed fetching mediaSosial from Sanity', error);
    return fallbackData;
  }
}

