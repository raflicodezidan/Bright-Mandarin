import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { mockSiteSettings } from '@/lib/mockData';

// ===============================================
// PINTEREST / DRIBBBLE 3D ILLUSTRATED ICONS
// ===============================================

// 1. Online: Live Kelas Online Interaktif Laoshi Illustration
function IconOnlineMode() {
  return (
    <div className="relative w-20 h-20 flex-shrink-0 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-sky-500/30 to-blue-500/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-sky-50 via-blue-50/80 to-indigo-100/60 p-1 border border-sky-200/80 shadow-lg shadow-sky-500/15 flex items-center justify-center overflow-hidden">
        <Image
          src="/icon-kelas-online.png"
          alt="Kelas Online Interaktif Live Zoom"
          width={80}
          height={80}
          className="w-full h-full object-cover rounded-xl drop-shadow-md"
          priority
          unoptimized
        />
      </div>
    </div>
  );
}

// 2. Tatap Muka: Laoshi Mengajar Ilustrasi Modern
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

// 3. 3D Royal VIP House & Gold Crown Private Tutor
function IconVipPrivateMode() {
  return (
    <div className="relative w-20 h-20 flex-shrink-0 group-hover:scale-110 group-hover:-rotate-2 transition-all duration-300">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-amber-500/30 to-yellow-400/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-amber-50 via-yellow-50/80 to-amber-100/60 p-2.5 border border-amber-200/80 shadow-lg shadow-amber-500/15 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-md" fill="none">
          <defs>
            <linearGradient id="crownGrad" x1="18" y1="8" x2="46" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDE047" />
              <stop offset="0.5" stopColor="#F59E0B" />
              <stop offset="1" stopColor="#D97706" />
            </linearGradient>
            <linearGradient id="villaGrad" x1="12" y1="20" x2="52" y2="54" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFBEB" />
              <stop offset="1" stopColor="#FEF3C7" />
            </linearGradient>
          </defs>

          {/* VIP Villa House Body */}
          <path d="M14 26L32 14L50 26V52H14V26Z" fill="url(#villaGrad)" stroke="#D97706" strokeWidth="2" />
          
          {/* Villa Roof Eaves */}
          <path d="M10 28L32 12L54 28" stroke="#B45309" strokeWidth="3.5" strokeLinecap="round" />

          {/* Glowing Villa Arched Window */}
          <path d="M26 34C26 30.7 28.7 28 32 28C35.3 28 38 30.7 38 34V46H26V34Z" fill="#FDE047" stroke="#D97706" strokeWidth="1.5" />
          <path d="M32 28V46M26 37H38" stroke="#D97706" strokeWidth="1" />

          {/* 3D Golden VIP Crown Floating on Top */}
          <path d="M22 14L25 8L32 12L39 8L42 14H22Z" fill="url(#crownGrad)" stroke="#92400E" strokeWidth="1.2" className="drop-shadow-sm" />
          <circle cx="25" cy="8" r="1.5" fill="#EF4444" />
          <circle cx="32" cy="12" r="1.5" fill="#3B82F6" />
          <circle cx="39" cy="8" r="1.5" fill="#EF4444" />

          {/* VIP Gold Badge Ring */}
          <rect x="20" y="46" width="24" height="6" rx="3" fill="#D97706" />
          <text x="32" y="50.8" fontSize="4.5" fontWeight="900" fill="#FFFFFF" textAnchor="middle" fontFamily="sans-serif">
            1-ON-1
          </text>

          {/* Sparkles */}
          <path d="M48 20L49.5 23L52.5 24.5L49.5 26L48 29L46.5 26L43.5 24.5L46.5 23L48 20Z" fill="#F59E0B" />
          <circle cx="15" cy="20" r="2" fill="#FBBF24" />
        </svg>
      </div>
    </div>
  );
}

export default function LearningModes() {
  const modes = [
    {
      IconComponent: IconOnlineMode,
      title: 'Kelas Online Interaktif',
      subtitle: 'Belajar fleksibel dari mana saja di seluruh Indonesia',
      badge: 'Paling Populer',
      colorClass: 'text-sky-600',
      points: [
        'Live streaming Zoom dua arah dengan laoshi',
        'Rekaman video kelas dapat ditonton ulang kapan saja',
        'Materi digital interaktif & quiz interaktif',
        'Grup diskusi WhatsApp aktif dengan tutor'
      ],
      ctaText: 'Daftar Kelas Online',
      link: '/program?tipe=Online',
      isExternal: false,
    },
    {
      IconComponent: IconOfflineMode,
      title: 'Kelas Offline Center',
      subtitle: 'Tatap muka langsung di ruang kelas modern ber-AC',
      badge: 'Tatap Muka',
      colorClass: 'text-orange-600',
      points: [
        'Belajar langsung di Learning Center Kelapa Gading',
        'Fasilitas smart TV multimedia & perpustakaan buku',
        'Simulasi percakapan dan role-play langsung',
        'Suasana belajar fokus bersama teman sebaya'
      ],
      ctaText: 'Lihat Lokasi Center',
      link: '/#lokasi',
      isExternal: false,
    },
    {
      IconComponent: IconVipPrivateMode,
      title: 'VIP Home Private 1-on-1',
      subtitle: 'Tutor datang langsung ke kediaman Anda (Jabodetabek)',
      badge: 'Eksklusif VIP',
      colorClass: 'text-amber-600',
      points: [
        'Guru datang ke rumah atau privat online eksklusif',
        'Kurikulum 100% dipersonalisasi sesuai kecepatan murid',
        'Bebas atur jadwal sesuai waktu luang Anda',
        'Sangat direkomendasikan untuk anak-anak & eksekutif'
      ],
      ctaText: 'Konsultasi Home Private',
      link: mockSiteSettings.whatsappUtama,
      isExternal: true,
    }
  ];

  return (
    <section className="py-20 bg-orange-100/50 border-b border-amber-300/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Formal Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
            PILIHAN METODE BELAJAR
          </h2>
          <p className="text-lg sm:text-xl font-bold text-orange-600 mt-2 mb-3">
            Pilihan Format Belajar Online, Offline Center, & Home Private
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto my-3" />
          <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
            Mulai dari kelas tatap muka interaktif di Learning Center Kelapa Gading, kelas daring live dari rumah, hingga guru privat eksklusif.
          </p>
        </div>

        {/* 3 Modes Cards - Centered Icon & Centered Formal Sub-label Underneath */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modes.map((mode, idx) => {
            const Icon = mode.IconComponent;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border-2 border-amber-200 shadow-sm hover:shadow-2xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 group text-center"
              >
                <div className="flex flex-col items-center">
                  {/* Centered 3D Illustrated Icon */}
                  <div className="mb-4 flex justify-center">
                    <Icon />
                  </div>

                  {/* Centered Formal Sub-label with matching color */}
                  <div className="mb-2">
                    <span className={`text-xs sm:text-sm font-extrabold tracking-wider uppercase ${mode.colorClass}`}>
                      {mode.badge}
                    </span>
                  </div>

                  {/* Centered Title */}
                  <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {mode.title}
                  </h3>
                  
                  {/* Centered Subtitle */}
                  <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed font-medium">
                    {mode.subtitle}
                  </p>

                  {/* Bullet Points Container (Left Aligned for Easy Reading) */}
                  <div className="w-full space-y-3 pt-5 border-t-2 border-dashed border-amber-200/80 mb-8 text-left">
                    {mode.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA Button */}
                <div className="w-full pt-2">
                  {mode.isExternal ? (
                    <a
                      href={mode.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-black text-sm py-3.5 px-5 rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>{mode.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      href={mode.link}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-black text-sm py-3.5 px-5 rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>{mode.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

