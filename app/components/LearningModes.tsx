import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SiteSettings } from '@/lib/sanity';

// Tatap Muka: Laoshi Mengajar Ilustrasi Modern (Diperbesar)
function IconOfflineMode({ customImageUrl }: { customImageUrl?: string }) {
  return (
    <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex-shrink-0 group-hover:scale-105 group-hover:rotate-1 transition-all duration-300">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-orange-500/30 to-amber-400/30 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity" />

      <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-orange-50 via-amber-50/90 to-orange-100/70 p-2 sm:p-3 border-2 border-orange-200/90 shadow-xl shadow-orange-500/15 flex items-center justify-center overflow-hidden">
        <Image
          src={customImageUrl || '/icon-tatap-muka.png'}
          alt="Laoshi Tatap Muka Offline Center"
          width={144}
          height={144}
          className="w-full h-full object-contain drop-shadow-md"
          priority
          unoptimized
        />
      </div>
    </div>
  );
}

export default function LearningModes({ settings }: { settings?: SiteSettings }) {
  const defaultPoints = [
    'Belajar langsung di Learning Center Kelapa Gading',
    'Fasilitas multimedia & perpustakaan buku',
    'Simulasi percakapan dan role-play langsung',
    'Suasana belajar fokus bersama teman sebaya',
    'Laporan nilai dan performance siswa secara berkala',
    'Laporan video pembelajaran dan homework siswa secara berkala',
  ];

  const points = (settings?.learningModesPoints && settings.learningModesPoints.length > 0)
    ? settings.learningModesPoints
    : defaultPoints;

  const badge = settings?.learningModesBadge || 'Tatap Muka';
  const cardTitle = settings?.learningModesCardTitle || 'Kelas Offline Center';
  const buttonText = settings?.learningModesButtonText || 'Lihat Lokasi Center';
  const buttonLink = settings?.learningModesButtonLink || '/#lokasi';

  return (
    <section className="py-14 sm:py-20 bg-amber-100/50 border-b border-amber-300/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Single Offline Class Card - Enlarged & Centered */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border-2 border-amber-200 shadow-md hover:shadow-2xl hover:border-amber-400 transition-all duration-300 group">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5">
              <IconOfflineMode customImageUrl={settings?.learningModesCardImageUrl} />
            </div>
            <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-orange-600 mb-1.5">
              {badge}
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-6 group-hover:text-orange-600 transition-colors leading-tight">
              {cardTitle}
            </h3>

            {/* Checklist Details */}
            <div className="w-full max-w-lg border-t border-amber-200/80 pt-6 mb-8 text-left">
              <div className="space-y-4">
                {points.map((pt) => (
                  <div key={pt} className="flex items-start gap-3 text-sm sm:text-base text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={buttonLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-black text-sm sm:text-base py-3.5 sm:py-4 px-8 sm:px-10 rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
