import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Calendar, 
  ArrowLeft, 
  Video, 
  Image as ImageIcon, 
  Sparkles, 
  MessageCircle,
  Share2
} from 'lucide-react';
import { getGaleriBySlug, getGaleri } from '@/lib/sanity';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const allGaleri = await getGaleri();
  return allGaleri.map((g) => ({
    slug: g.slug?.current || g._id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = await getGaleriBySlug(slug);
  if (!item) return { title: 'Kegiatan Tidak Ditemukan — Bright Mandarin' };

  return {
    title: `${item.judul} — Dokumentasi Kegiatan Bright Mandarin`,
    description: item.deskripsi || 'Dokumentasi kegiatan dan suasana belajar di Bright Mandarin.',
    openGraph: {
      images: item.coverImageUrl ? [item.coverImageUrl] : [],
    },
  };
}

export default async function GaleriDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = await getGaleriBySlug(slug);

  if (!item) {
    notFound();
  }

  const isYouTubeUrl = (url?: string) => {
    if (!url) return false;
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  const getYouTubeEmbedUrl = (url: string) => {
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes('watch?v=')) {
      const id = url.split('watch?v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    return url;
  };

  return (
    <div className="py-12 lg:py-20 bg-gradient-to-b from-amber-50/70 via-yellow-50/40 to-orange-50/50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/galeri"
            className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors py-2 px-4 rounded-xl bg-white/80 border border-amber-200/80 shadow-xs hover:shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Galeri Kegiatan</span>
          </Link>
        </div>

        {/* Blog Article Header */}
        <header className="mb-10 text-center sm:text-left space-y-4 bg-white rounded-3xl p-6 sm:p-10 border-2 border-amber-200 shadow-sm">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs">
              {item.kategori}
            </span>
            <span className="flex items-center gap-1.5 text-slate-500 font-semibold bg-slate-100 px-3 py-1 rounded-full">
              <Calendar className="w-3.5 h-3.5 text-orange-600" />
              {item.tanggal}
            </span>
            {item.videoUrl && (
              <span className="flex items-center gap-1 font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-full border border-red-200">
                <Video className="w-3 h-3" />
                Ada Video
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug">
            {item.judul}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-2 border-t border-slate-100">
            {item.deskripsi}
          </p>
        </header>

        {/* Video Player (If Available) */}
        {item.videoUrl && (
          <section className="mb-10 bg-white rounded-3xl p-5 sm:p-7 border-2 border-amber-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
              <Video className="w-4 h-4 text-red-600" />
              <span>Video Dokumentasi Kegiatan</span>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-lg border-2 border-slate-900">
              {isYouTubeUrl(item.videoUrl) ? (
                <iframe
                  src={getYouTubeEmbedUrl(item.videoUrl)}
                  title={item.judul}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={item.videoUrl}
                  controls
                  playsInline
                  poster={item.coverImageUrl || item.foto?.[0]?.url}
                  className="w-full h-full object-contain"
                >
                  Browser Anda tidak mendukung pemutar video HTML5.
                </video>
              )}
            </div>
          </section>
        )}

        {/* Full Story Content */}
        {item.ceritaLengkap && (
          <section className="mb-10 bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-500" />
              Cerita & Detail Kegiatan
            </h2>
            <p className="text-slate-700 leading-relaxed font-normal text-sm sm:text-base whitespace-pre-line">
              {item.ceritaLengkap}
            </p>
          </section>
        )}

        {/* Photo Gallery Grid */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-amber-600" />
              Koleksi Foto Dokumentasi ({item.foto?.length || 0})
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {item.foto?.map((pic, idx) => (
              <figure 
                key={idx}
                className="space-y-2 group rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 p-2 hover:border-amber-400 hover:shadow-md transition-all"
              >
                <div className="aspect-4/3 rounded-xl overflow-hidden bg-slate-900">
                  <img
                    src={pic.url}
                    alt={pic.caption || item.judul}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {pic.caption && (
                  <figcaption className="text-xs text-slate-600 px-2 py-1 font-medium leading-relaxed">
                    {pic.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>

        {/* WhatsApp Call to Action */}
        <div className="mt-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-6 sm:p-8 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold">
              Tertarik Mengikuti Kegiatan & Kelas Seru Ini?
            </h3>
            <p className="text-xs sm:text-sm text-white/90">
              Hubungi admin Bright Mandarin untuk informasi jadwal kelas terbaru dan konsultasi gratis.
            </p>
          </div>

          <a
            href={`https://api.whatsapp.com/send/?phone=6289699288009&text=Halo+Admin+Bright+Mandarin%2C+saya+tertarik+dengan+kegiatan+${encodeURIComponent(item.judul)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-2 bg-white text-orange-600 hover:bg-amber-50 font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Hubungi Kami via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
