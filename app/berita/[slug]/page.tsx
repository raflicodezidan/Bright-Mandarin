import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, ArrowLeft, Share2, MessageCircle, Sparkles, BookOpen } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { getBeritaBySlug, mockSiteSettings } from '@/lib/sanity';

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
    <article className="py-12 lg:py-20 bg-brand-cream/20 min-h-screen">
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
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-red text-white">
              {item.kategori}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-brand-gray font-medium">
              <Calendar className="w-3.5 h-3.5 text-brand-gold-dark" />
              <span>Dipublikasikan pada {item.tanggal}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
            {item.judul}
          </h1>

          <p className="text-base sm:text-lg text-brand-gray leading-relaxed italic border-l-4 border-brand-red pl-4">
            {item.ringkasan}
          </p>

          {/* Cover Image */}
          <div className="rounded-2xl overflow-hidden aspect-16/9 bg-brand-charcoal shadow-md">
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
                  Kesalahan paling sering pada pemula adalah terburu-buru menghafal ratusan kosakata tanpa mematangkan 4 nada dasar pinyin. Perbedaan intonasi sedikit saja dapat mengubah arti kata secara drastis (contoh: <em>mā</em> [ibu], <em>má</em> [rami], <em>mǎ</em> [kuda], <em>mà</em> [memarahi]). Latihlah otot bicara setiap hari minimal 15 menit dengan panduan audio tutor bersertifikat HSK 6.
                </p>
                <h3 className="text-xl font-bold text-brand-charcoal pt-3">
                  2. Memahami Radikal Karakter Hanzi Secara Logis
                </h3>
                <p>
                  Jangan menghafal karakter Mandarin sebagai coretan acak tanpa makna. Setiap huruf Hanzi terdiri atas komponen radikal yang merepresentasikan ide, alam, manusia, atau bunyi. Ketika Anda memahami radikal dasar (seperti air 氵, orang 亻, atau hati 忄), Anda akan mampu menebak konteks arti ribuan karakter baru dengan jauh lebih cepat.
                </p>
                <h3 className="text-xl font-bold text-brand-charcoal pt-3">
                  3. Konsistensi dan Praktik Dua Arah
                </h3>
                <p>
                  Bergabung dengan kelas interaktif yang mewajibkan Anda berbicara aktif sangat krusial. Di Bright Mandarin, kami memastikan interaksi guru dan murid seimbang, sehingga Anda terbiasa merespons secara spontan tanpa rasa cemas.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Call To Action Box */}
        <div className="bg-gradient-to-r from-brand-charcoal via-brand-charcoal-light to-brand-red text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block">
              Siap Meningkatkan Skor HSK Anda?
            </span>
            <h3 className="text-xl sm:text-2xl font-black">
              Mulai Konsultasi Belajar Bersama Laoshi Kami
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-md">
              Dapatkan tes penempatan level gratis dan konsultasi jalur beasiswa kuliah ke China.
            </p>
          </div>

          <a
            href={mockSiteSettings.whatsappUtama}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-charcoal font-black text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}
