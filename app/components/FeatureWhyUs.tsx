import React from 'react';
import Image from 'next/image';

// ==========================================
// PINTEREST / DRIBBBLE 3D ILLUSTRATED ICONS
// ==========================================

// 1. Jaminan Kualitas: HSK 6 Purple Hanzi Badge
function IconHSK6() {
  return (
    <div className="relative w-20 h-20 flex-shrink-0 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
      {/* Ambient 3D Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/30 to-fuchsia-400/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
      
      {/* 3D Container */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden p-1 bg-gradient-to-br from-purple-600 to-purple-800 border-2 border-purple-300/80 shadow-lg shadow-purple-500/20 flex items-center justify-center">
        <Image
          src="/icon-jaminan-kualitas-hsk6.png"
          alt="Jaminan Kualitas Sertifikasi Min. HSK 6"
          width={72}
          height={72}
          className="w-full h-full object-cover rounded-xl drop-shadow-md group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
}

// 2. Fleksibel Usia: Kids & Adult 3D Illustrated Avatars
function IconKidsAdults() {
  return (
    <div className="relative w-20 h-20 flex-shrink-0 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-orange-500/30 to-amber-400/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-orange-50 via-amber-50/80 to-orange-100/60 p-2.5 border border-orange-200/80 shadow-lg shadow-orange-500/15 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-md" fill="none">
          <defs>
            <linearGradient id="kidGrad" x1="12" y1="20" x2="32" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FBBF24" />
              <stop offset="1" stopColor="#F59E0B" />
            </linearGradient>
            <linearGradient id="adultGrad" x1="28" y1="10" x2="56" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FB923C" />
              <stop offset="1" stopColor="#EA580C" />
            </linearGradient>
            <linearGradient id="capGrad" x1="30" y1="6" x2="52" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4338CA" />
              <stop offset="1" stopColor="#312E81" />
            </linearGradient>
          </defs>

          {/* Adult Character (Right / Back) */}
          {/* Body */}
          <path d="M30 52C30 41 35 34 43 34C51 34 56 41 56 52H30Z" fill="url(#adultGrad)" />
          {/* Head */}
          <circle cx="43" cy="24" r="9" fill="#FFEDD5" />
          <circle cx="43" cy="24" r="8" fill="#FED7AA" />
          {/* Glasses */}
          <rect x="36" y="22" width="6" height="4" rx="1.5" stroke="#4338CA" strokeWidth="1.5" fill="none" />
          <rect x="44" y="22" width="6" height="4" rx="1.5" stroke="#4338CA" strokeWidth="1.5" fill="none" />
          <path d="M42 24H44" stroke="#4338CA" strokeWidth="1.5" />
          {/* Graduation Cap */}
          <path d="M43 8L55 13L43 18L31 13L43 8Z" fill="url(#capGrad)" />
          <path d="M53 14V22" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="53" cy="23" r="1.5" fill="#F59E0B" />

          {/* Kid Character (Left / Front) */}
          {/* Body */}
          <path d="M10 54C10 44 15 38 23 38C31 38 36 44 36 54H10Z" fill="url(#kidGrad)" />
          {/* Head */}
          <circle cx="23" cy="28" r="8" fill="#FEF3C7" />
          {/* Cute Smile & Cheeks */}
          <circle cx="19" cy="30" r="1.5" fill="#F87171" opacity="0.6" />
          <circle cx="27" cy="30" r="1.5" fill="#F87171" opacity="0.6" />
          <path d="M21 31C21 33 25 33 25 31" stroke="#78350F" strokeWidth="1.2" strokeLinecap="round" />
          {/* Cute Beanie */}
          <path d="M15 26C15 20 18 16 23 16C28 16 31 20 31 26H15Z" fill="#F43F5E" />
          <circle cx="23" cy="14" r="2.5" fill="#FBBF24" />

          {/* Dynamic Floating Badges */}
          <circle cx="12" cy="16" r="2.5" fill="#F59E0B" />
          <path d="M54 28L55 30L57 31L55 32L54 34L53 32L51 31L53 30L54 28Z" fill="#FBBF24" />
        </svg>
      </div>
    </div>
  );
}

// 3. Target Pasti: 3D Speed Rocket & Bullseye Calendar Target
function IconStudyPlan() {
  return (
    <div className="relative w-20 h-20 flex-shrink-0 group-hover:scale-110 group-hover:-rotate-2 transition-all duration-300">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-500/30 to-teal-400/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50/80 to-emerald-100/60 p-2.5 border border-emerald-200/80 shadow-lg shadow-emerald-500/15 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-md" fill="none">
          <defs>
            <linearGradient id="rocketBody" x1="18" y1="12" x2="48" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="0.6" stopColor="#E0F2FE" />
              <stop offset="1" stopColor="#38BDF8" />
            </linearGradient>
            <linearGradient id="rocketFin" x1="12" y1="28" x2="36" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F43F5E" />
              <stop offset="1" stopColor="#BE123C" />
            </linearGradient>
            <linearGradient id="fireGrad" x1="16" y1="44" x2="28" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FBBF24" />
              <stop offset="0.5" stopColor="#F97316" />
              <stop offset="1" stopColor="#EF4444" />
            </linearGradient>
          </defs>

          {/* Orbit / Speed Path */}
          <path d="M12 48C18 36 34 20 54 18" stroke="#059669" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.6" />

          {/* Speed Stars */}
          <circle cx="16" cy="18" r="2" fill="#10B981" />
          <circle cx="50" cy="46" r="2.5" fill="#34D399" />
          <path d="M46 10L47 13L50 14L47 15L46 18L45 15L42 14L45 13L46 10Z" fill="#FBBF24" />

          {/* Rocket Thruster Fire */}
          <path d="M22 42L16 54C19 51 24 51 26 56L28 44Z" fill="url(#fireGrad)" />
          <path d="M22 43L19 49C21 48 23 48 25 51L26 44Z" fill="#FEF08A" />

          {/* Rocket Wings / Fins */}
          <path d="M21 34L14 42C18 43 23 41 24 37Z" fill="url(#rocketFin)" />
          <path d="M33 22L41 29C42 25 40 20 37 19Z" fill="url(#rocketFin)" />

          {/* 3D Rocket Body */}
          <path d="M46 14C46 14 36 18 28 26C20 34 22 42 22 42C22 42 30 44 38 36C46 28 46 14 46 14Z" fill="url(#rocketBody)" stroke="#0284C7" strokeWidth="1.5" />
          
          {/* Rocket Window */}
          <circle cx="35" cy="25" r="4.5" fill="#0284C7" />
          <circle cx="35" cy="25" r="3" fill="#38BDF8" />
          <circle cx="34" cy="24" r="1" fill="#FFFFFF" />

          {/* Calendar Check Target Badge */}
          <rect x="36" y="38" width="18" height="16" rx="4" fill="#047857" stroke="#10B981" strokeWidth="1.5" />
          <path d="M39 46L43 50L51 42" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

// 4. Gratis Pengurusan: 3D Official HSK Certificate & FREE Stamp
function IconFreeReg() {
  return (
    <div className="relative w-20 h-20 flex-shrink-0 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-amber-500/30 to-rose-400/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-amber-50 via-rose-50/70 to-orange-100/60 p-2.5 border border-amber-200/80 shadow-lg shadow-amber-500/15 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-md" fill="none">
          <defs>
            <linearGradient id="docGrad" x1="14" y1="10" x2="48" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="0.8" stopColor="#FFFBEB" />
              <stop offset="1" stopColor="#FEF3C7" />
            </linearGradient>
            <linearGradient id="stampGrad" x1="30" y1="30" x2="56" y2="56" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F43F5E" />
              <stop offset="1" stopColor="#BE123C" />
            </linearGradient>
          </defs>

          {/* Document Shadow */}
          <rect x="14" y="12" width="34" height="42" rx="4" fill="#E2E8F0" opacity="0.6" transform="rotate(-6 14 12)" />

          {/* 3D Certificate Document */}
          <rect x="12" y="10" width="34" height="42" rx="4" fill="url(#docGrad)" stroke="#D97706" strokeWidth="2" />
          
          {/* Certificate Header Banner */}
          <path d="M16 16H42" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
          
          {/* Certificate Text Lines */}
          <path d="M16 23H38M16 28H34M16 33H28" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />

          {/* Golden Seal Ribbon on Document */}
          <path d="M22 38L18 50L24 47L30 50L26 38" fill="#F59E0B" />
          <circle cx="24" cy="38" r="5" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
          <circle cx="24" cy="38" r="3" fill="#D97706" />

          {/* 3D FREE VIP Stamp (Floating on top) */}
          <g transform="rotate(12 44 42)">
            <rect x="32" y="32" width="24" height="14" rx="4" fill="url(#stampGrad)" stroke="#FFFFFF" strokeWidth="1.5" className="drop-shadow-md" />
            <text x="44" y="42" fontSize="7" fontWeight="900" fill="#FFFFFF" textAnchor="middle" fontFamily="sans-serif">
              FREE
            </text>
          </g>

          {/* Sparkle Stars */}
          <circle cx="48" cy="14" r="2" fill="#F59E0B" />
          <path d="M10 24L11.5 27L14.5 28.5L11.5 30L10 33L8.5 30L5.5 28.5L8.5 27L10 24Z" fill="#FBBF24" />
        </svg>
      </div>
    </div>
  );
}

// 5. Custom Learning: 3D Calligraphy Brush & Chinese Character "中"
function IconCustomLearning() {
  return (
    <div className="relative w-20 h-20 flex-shrink-0 group-hover:scale-110 group-hover:-rotate-2 transition-all duration-300">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-sky-500/30 to-blue-500/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-sky-50 via-blue-50/80 to-indigo-100/60 p-2.5 border border-sky-200/80 shadow-lg shadow-sky-500/15 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-md" fill="none">
          <defs>
            <linearGradient id="cubeGrad" x1="10" y1="12" x2="42" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="1" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="brushGrad" x1="28" y1="8" x2="56" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B" />
              <stop offset="0.7" stopColor="#78350F" />
              <stop offset="1" stopColor="#1E293B" />
            </linearGradient>
          </defs>

          {/* Floating Chinese Character Block */}
          <rect x="10" y="14" width="34" height="34" rx="8" fill="url(#cubeGrad)" stroke="#0369A1" strokeWidth="1.5" />
          <rect x="12" y="16" width="30" height="30" rx="6" fill="#0EA5E9" />
          
          {/* Hanzi "中" in Gold/White */}
          {/* Middle box */}
          <rect x="18" y="24" width="18" height="11" rx="2" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
          {/* Vertical stroke */}
          <path d="M27 18V41" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

          {/* Speech Bubble on Hanzi */}
          <circle cx="15" cy="18" r="2.5" fill="#FEF08A" />

          {/* 3D Traditional Calligraphy Brush (Crossing Over) */}
          {/* Bamboo Handle */}
          <path d="M52 10L42 26" stroke="#D97706" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M43 24L38 32" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
          {/* Brush Tip (Black/Crimson ink) */}
          <path d="M38 32C37 34 33 39 31 43C34 42 38 38 40 36L38 32Z" fill="#0F172A" />
          {/* Ink Drop Splash */}
          <circle cx="30" cy="46" r="2.5" fill="#0284C7" />
          <circle cx="25" cy="49" r="1.5" fill="#38BDF8" />

          {/* Sparkles */}
          <path d="M48 38L49.5 41L52.5 42.5L49.5 44L48 47L46.5 44L43.5 42.5L46.5 41L48 38Z" fill="#FBBF24" />
        </svg>
      </div>
    </div>
  );
}

// 6. Garansi Siswa: 3D Diamond Emerald Shield & 100% Ribbon
function IconGuarantee() {
  return (
    <div className="relative w-20 h-20 flex-shrink-0 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/30 to-indigo-500/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-purple-50 via-indigo-50/80 to-blue-100/60 p-2.5 border border-indigo-200/80 shadow-lg shadow-indigo-500/15 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-md" fill="none">
          <defs>
            <linearGradient id="shieldGrad" x1="14" y1="8" x2="50" y2="54" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366F1" />
              <stop offset="0.5" stopColor="#4F46E5" />
              <stop offset="1" stopColor="#312E81" />
            </linearGradient>
            <linearGradient id="shieldGlass" x1="20" y1="12" x2="44" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" stopOpacity="0.6" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="badgeGold" x1="20" y1="36" x2="44" y2="54" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDE047" />
              <stop offset="1" stopColor="#D97706" />
            </linearGradient>
          </defs>

          {/* 3D Security Shield */}
          <path d="M32 8L50 14V28C50 41 42 50 32 54C22 50 14 41 14 28V14L32 8Z" fill="url(#shieldGrad)" stroke="#818CF8" strokeWidth="2" />

          {/* Inner Facet Glass */}
          <path d="M32 12L46 17V28C46 38 39 46 32 49V12Z" fill="url(#shieldGlass)" />

          {/* 3D Golden Checkmark Badge */}
          <circle cx="32" cy="30" r="10" fill="url(#badgeGold)" stroke="#FFFFFF" strokeWidth="1.5" />
          <path d="M27 30L30.5 33.5L37 27" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* 100% Free / Warranty Stars */}
          <path d="M32 14L33 16L35 16.5L33.5 18L34 20L32 19L30 20L30.5 18L29 16.5L31 16L32 14Z" fill="#FDE047" />
          <circle cx="16" cy="18" r="2" fill="#FBBF24" />
          <circle cx="48" cy="42" r="2" fill="#818CF8" />
        </svg>
      </div>
    </div>
  );
}


import { KeunggulanItem } from '@/lib/sanity';

interface FeatureWhyUsProps {
  keunggulan?: KeunggulanItem[];
}

export default function FeatureWhyUs({ keunggulan }: FeatureWhyUsProps) {
  const defaultIcons = [IconHSK6, IconKidsAdults, IconStudyPlan, IconFreeReg, IconCustomLearning, IconGuarantee];
  const colorClasses = [
    'text-amber-600',
    'text-orange-600',
    'text-emerald-600',
    'text-rose-600',
    'text-sky-600',
    'text-indigo-600',
  ];

  const defaultFeatures = [
    {
      IconComponent: IconHSK6,
      title: 'Sertifikasi Min. HSK 6',
      desc: 'Seluruh Laoshi di Bright Mandarin memiliki latar belakang pendidikan formal dengan sertifikasi minimal HSK 6 dari universitas bahasa Mandarin ternama di Tiongkok.',
      badge: 'Jaminan Kualitas',
      colorClass: 'text-amber-600',
      customIconUrl: '',
    },
    {
      IconComponent: IconKidsAdults,
      title: 'Kelas Kids & Dewasa',
      desc: 'Memiliki kurikulum berjenjang terpisah yang disesuaikan dengan psikologi anak (usia 4-15 th) serta kebutuhan profesional dan mahasiswa dewasa.',
      badge: 'Fleksibel Usia',
      colorClass: 'text-orange-600',
      customIconUrl: '',
    },
    {
      IconComponent: IconStudyPlan,
      title: 'Study Plan Terstruktur 3-4 Bulan',
      desc: 'Setiap level memiliki target pencapaian terukur dengan durasi 3 - 4 bulan sehingga murid tidak berputar-putar tanpa arah dan cepat menguasai target level.',
      badge: 'Target Pasti',
      colorClass: 'text-emerald-600',
      customIconUrl: '',
    },
    {
      IconComponent: IconFreeReg,
      title: 'FREE Jasa Registrasi Ujian HSK',
      desc: 'Bagi murid yang hendak mengikuti ujian HSK resmi internasional dari Tiongkok, tim kami mengurus seluruh proses pendaftaran tanpa biaya admin tambahan.',
      badge: 'Gratis Pengurusan',
      colorClass: 'text-rose-600',
      customIconUrl: '',
    },
    {
      IconComponent: IconCustomLearning,
      title: 'Metode Sesuai Kebutuhan',
      desc: 'Materi dapat disesuaikan: mulai dari HSK 1 - 6, Hanzi Tradisional / Simplified, Speaking & Daily Conversation, hingga Business Chinese untuk ekspansi usaha.',
      badge: 'Custom Learning',
      colorClass: 'text-sky-600',
      customIconUrl: '',
    },
    {
      IconComponent: IconGuarantee,
      title: 'Garansi Mengulang Gratis',
      desc: 'Apabila kehadiran di atas 90% dan mengerjakan seluruh tugas namun belum lulus ujian level, kami berikan fasilitas mengulang kelas secara cuma-cuma.',
      badge: 'Garansi Siswa',
      colorClass: 'text-indigo-600',
      customIconUrl: '',
    },
  ];

  const displayFeatures = (keunggulan && keunggulan.length > 0)
    ? keunggulan.map((k, idx) => ({
        IconComponent: defaultIcons[idx % defaultIcons.length],
        title: k.title,
        desc: k.desc,
        badge: k.badge || 'Keunggulan',
        colorClass: colorClasses[idx % colorClasses.length],
        customIconUrl: k.customIconUrl,
      }))
    : defaultFeatures;

  return (
    <section className="py-20 bg-amber-100/50 border-b border-amber-300/70 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-10 right-5 w-72 h-72 rounded-full bg-yellow-300/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-72 h-72 rounded-full bg-orange-300/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
            MENGAPA MEMILIH BRIGHT MANDARIN?
          </h2>
          <p className="text-lg sm:text-xl font-bold text-orange-600 mt-2 mb-3">
            Belajar Mandarin Lebih Cepat, Seru, & Bergaransi Lulus
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto my-3" />
          <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
            Kurikulum akselerasi terbukti, materi interaktif yang menyenangkan, serta bimbingan intensif dari para Laoshi terbaik lulusan Tiongkok.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayFeatures.map((item, idx) => {
            const Icon = item.IconComponent;
            return (
              <div
                key={idx}
                className="group relative bg-white hover:bg-amber-50/30 rounded-3xl p-8 border-2 border-amber-200 shadow-sm hover:shadow-2xl hover:border-amber-400 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center justify-between"
              >
                <div className="flex flex-col items-center">
                  {/* Centered 3D Icon or Custom Uploaded Icon */}
                  <div className="mb-4 flex justify-center">
                    {item.customIconUrl ? (
                      <div className="w-20 h-20 rounded-2xl overflow-hidden p-2 bg-amber-50 border border-amber-200 shadow-md flex items-center justify-center">
                        <img src={item.customIconUrl} alt={item.title} className="w-full h-full object-contain" />
                      </div>
                    ) : (
                      <Icon />
                    )}
                  </div>

                  {/* Formal Sub-label with matching color positioned directly under the icon */}
                  <div className="mb-2">
                    <span className={`text-xs sm:text-sm font-extrabold tracking-wider uppercase ${item.colorClass}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

