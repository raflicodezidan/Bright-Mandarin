import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { mockSiteSettings, SiteSettings } from '@/lib/sanity';

// Tatap Muka: Laoshi Mengajar Ilustrasi Modern
function IconOfflineMode() {
  return (
    <div className="relative w-20 h-20 flex-shrink-0 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-orange-500/30 to-amber-400/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />

      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-orange-50 via-amber-50/80 to-orange-100/60 p-1.5 border border-orange-200/80 shadow-lg shadow-orange-500/15 flex items-center justify-center overflow-hidden">
        <Image
          src="/icon-tatap-muka.png"
          alt="Laoshi Tatap Muka Offline Center"
          width={80}
          height={80}
          className="w-full h-full object-contain drop-shadow-md"
          priority
          unoptimized
        />
      </div>
    </div>
  );
}

export default function LearningModes({ settings }: { settings?: SiteSettings }) {
  const currentSettings = settings || mockSiteSettings;
  const points = [
    'Belajar langsung di Learning Center Kelapa Gading',
    'Fasilitas smart TV multimedia & perpustakaan buku',
    'Simulasi percakapan dan role-play langsung',
    'Suasana belajar fokus bersama teman sebaya',
  ];

  return (
    <section className="py-20 bg-orange-100/50 border-b border-amber-300/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Formal Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
            {currentSettings.learningModesTitle || 'METODE BELAJAR'}
          </h2>
          <p className="text-lg sm:text-xl font-bold text-orange-600 mt-2 mb-3">
            {currentSettings.learningModesSubtitle || 'Kelas Offline Tatap Muka di Learning Center Kelapa Gading'}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto my-3" />
          <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
            {currentSettings.learningModesDesc || 'Belajar langsung bersama Laoshi di ruang kelas modern ber-AC dengan suasana interaktif, fokus, dan menyenangkan.'}
          </p>
        </div>

        {/* Single Offline Class Card - Vertical Stack Layout */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border-2 border-amber-200 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 group">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <IconOfflineMode />
            </div>
            <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-orange-600 mb-1.5">
              Tatap Muka
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2 group-hover:text-orange-600 transition-colors leading-tight">
              Kelas Offline Center
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-medium max-w-md mx-auto mb-6">
              Tatap muka langsung di ruang kelas modern ber-AC
            </p>

            {/* Checklist Details (Tersusun Rapi di Bawahnya) */}
            <div className="w-full max-w-md border-t border-amber-200/80 pt-6 mb-8 text-left">
              <div className="space-y-3.5">
                {points.map((pt) => (
                  <div key={pt} className="flex items-start gap-3 text-sm sm:text-base text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/#lokasi"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-black text-sm py-3.5 px-8 rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Lihat Lokasi Center</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
