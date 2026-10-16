import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Play } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { getBeritaBySlug } from '@/lib/sanity';

export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = await getBeritaBySlug(slug);

  if (!item) {
    return {
      title: 'Artikel Tidak Ditemukan — Bright Mandarin',
    };
  }

  return {
    title: `${item.judul} — Bright Mandarin`,
    description: item.ringkasan,
  };
}

export default async function BeritaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = await getBeritaBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <article className="py-12 lg:py-20 bg-[#FFF8E6] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-charcoal hover:text-brand-red transition-colors bg-white px-4 py-2 rounded-xl border border-brand-border shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Daftar Blog</span>
          </Link>
        </div>

        {/* Article Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-border shadow-sm mb-8 space-y-6">

          <h1 className="text-2xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
            {item.judul}
          </h1>

          <p className="text-base sm:text-lg text-brand-gray leading-relaxed italic border-l-4 border-brand-red pl-4">
            {item.ringkasan}
          </p>

          {/* Cover Image */}
          <div className="rounded-2xl overflow-hidden aspect-video bg-brand-charcoal shadow-md">
            <img
              src={item.gambarUtamaUrl}
              alt={item.judul}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body Content */}
          <div className="pt-6 prose prose-lg max-w-none text-brand-charcoal leading-relaxed space-y-5">
            {item.konten && Array.isArray(item.konten) ? (
              <PortableText value={item.konten} />
            ) : (
              <>
                <p>
                  Belajar bahasa Mandarin merupakan salah satu investasi keterampilan paling bernilai di era globalisasi saat ini. Dengan pesatnya pertumbuhan kerja sama ekonomi, perdagangan, dan teknologi antara Indonesia dan negara-negara berbahasa Mandarin, menguasai keterampilan pinyin, karakter Hanzi, dan percakapan bisnis membuka gerbang peluang karier yang sangat luas.
                </p>
                <h3 className="text-xl font-bold text-brand-charcoal pt-3">
                  1. Membangun Fondasi Pelafalan Nada (Tones) dengan Benar
                </h3>
                <p>
                  Dalam bahasa Mandarin, nada memiliki peran yang sangat penting. Ada empat nada utama, yaitu nada datar (1), naik (2), turun lalu naik (3), dan turun (4). Kesalahan dalam mengucapkan nada dapat mengubah arti kata secara drastis, sehingga latihan nada secara konsisten menjadi kunci utama.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 not-prose">
                  <p className="text-sm font-bold text-amber-800 mb-1">💡 Tips Penting</p>
                  <p className="text-sm text-amber-700">Gunakan aplikasi latihan pengucapan dan dengarkan penutur asli sebanyak mungkin untuk membiasakan telinga dengan intonasi yang benar.</p>
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal pt-3">
                  2. Memahami Perbedaan Karakter Sederhana dan Kompleks
                </h3>
                <p>
                  Karakter Hanzi terdiri dari ribuan simbol yang memiliki makna. Mulailah dengan karakter sederhana terlebih dahulu, kemudian secara bertahap lanjut ke karakter kompleks. Gunakan metode menulis ulang (tracing) dan membuat kartu flash untuk memperkuat ingatan.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 not-prose">
                  <p className="text-sm font-bold text-blue-800 mb-1">📖 Rekomendasi Belajar</p>
                  <p className="text-sm text-blue-700">Fokus pada 50–100 karakter pertama yang paling sering digunakan dalam percakapan sehari-hari.</p>
                </div>
              </>
            )}
          </div>

          {/* ───────── VIDEO VERTIKAL 9:16 ───────── */}
          {item.videoVerticalUrl && (
            <div className="pt-4 not-prose">
              <div className="flex flex-col items-center gap-3">
                {/* Label badge */}
                <div className="flex items-center gap-2 self-start">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-brand-charcoal/60 bg-brand-charcoal/8 px-3 py-1 rounded-full border border-brand-charcoal/10">
                    <Play className="w-3 h-3 fill-current" />
                    Video
                  </span>
                </div>

                {/* Video: rasio 9:16, max 360px lebar */}
                <div
                  className="relative rounded-2xl overflow-hidden shadow-xl border border-brand-border/60 bg-black"
                  style={{ width: '100%', maxWidth: '360px', aspectRatio: '9 / 16' }}
                >
                  <video
                    src={item.videoVerticalUrl}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                    aria-label={item.videoJudul || 'Video artikel'}
                  />
                </div>

                {/* Caption judul video */}
                {item.videoJudul && (
                  <p className="text-base sm:text-lg text-center text-slate-900 font-bold max-w-sm sm:max-w-md leading-snug">
                    {item.videoJudul}
                  </p>
                )}

                {/* Badge format — sesuai desain screenshot */}
                <span className="text-[11px] font-medium text-brand-charcoal/40 tracking-wide">
                  Format vertikal · 9:16
                </span>
              </div>
            </div>
          )}
          {/* ─────────────────────────────────────── */}

        </div>

      </div>
    </article>
  );
}

