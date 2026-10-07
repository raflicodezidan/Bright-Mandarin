import React from 'react';
import { Camera, Video, Sparkles, BookOpen } from 'lucide-react';
import { getGaleri } from '@/lib/sanity';
import GaleriBlogView from '@/app/components/GaleriBlogView';

export const revalidate = 60;

export const metadata = {
  title: 'Galeri & Dokumentasi Kegiatan — Bright Mandarin',
  description: 'Dokumentasi interaktif suasana kelas offline, workshop budaya Tionghoa, video kegiatan belajar, dan simulasi kelulusan ujian HSK di Bright Mandarin.',
};

export default async function GaleriPage() {
  const galeriList = await getGaleri();

  return (
    <div className="py-12 lg:py-20 bg-gradient-to-b from-amber-50/70 via-yellow-50/40 to-orange-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Editorial Blog Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-300 text-orange-700 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>Dokumentasi & Cerita Kegiatan</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
            GALERI KEGIATAN & KELAS
          </h1>

          <p className="text-base sm:text-xl font-bold text-orange-600 mt-2 mb-3">
            Cuplikan Momen Belajar, Video Interaktif, & Kebudayaan Mandarin
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto my-3" />

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Jelajahi rangkuman kegiatan seru para siswa, rekaman video suasana belajar kelas offline, workshop kaligrafi Shufa, hingga try-out simulasi ujian internasional HSK.
          </p>
        </div>

        {/* Blog Gallery View with Preview & Detail Modal */}
        <GaleriBlogView items={galeriList} />
      </div>
    </div>
  );
}
