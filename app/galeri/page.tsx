import React from 'react';
import { getGaleri, getSiteSettings } from '@/lib/sanity';
import GaleriBlogView from '@/app/components/GaleriBlogView';

import type { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Galeri & Suasana Kelas Mandarin di Kelapa Gading',
  description: 'Dokumentasi interaktif suasana kelas offline di Kelapa Gading, workshop budaya Tionghoa, video kegiatan belajar murid, dan simulasi kelulusan ujian HSK di Bright Mandarin.',
};

export default async function GaleriPage() {
  const [galeriList, settings] = await Promise.all([
    getGaleri(),
    getSiteSettings()
  ]);

  const title = settings?.galeriSectionTitle || 'GALERI KEGIATAN & KELAS';
  const subtitle = settings?.galeriSectionSubtitle || 'Cuplikan Momen Belajar, Video Interaktif, & Kebudayaan Mandarin';
  const desc = settings?.galeriSectionDesc || 'Jelajahi rangkuman kegiatan seru para siswa, rekaman video suasana belajar kelas offline, workshop kaligrafi Shufa, hingga try-out simulasi ujian internasional HSK.';

  return (
    <div className="py-12 lg:py-20 bg-[#FFFEF8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Editorial Blog Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
            {title}
          </h1>

          <p className="text-base sm:text-xl font-bold text-orange-600 mt-2 mb-3">
            {subtitle}
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto my-3" />

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            {desc}
          </p>
        </div>

        {/* Blog Gallery View with Preview & Detail Modal */}
        <GaleriBlogView items={galeriList} />
      </div>
    </div>
  );
}
