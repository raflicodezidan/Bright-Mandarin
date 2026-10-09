import React from 'react';
import Image from 'next/image';
import { KeunggulanItem, SiteSettings } from '@/lib/sanity';

interface FeatureWhyUsProps {
  keunggulan?: KeunggulanItem[];
  settings?: SiteSettings;
}

// 6 Core 3D Rendered Icons & Visual Themes
const defaultVisualAssets = [
  {
    imageUrl: '/keunggulan-speaking.jpg',
    alt: 'Personal Speaking Practice 3D Icon',
    glow: 'from-purple-500/35 to-fuchsia-400/35',
    border: 'border-purple-200/90 hover:border-purple-400',
    shadow: 'shadow-purple-500/15',
    badgeColor: 'text-purple-600',
    title: 'Personal Speaking Practice',
    badge: 'Latihan Berbicara Pribadi',
    desc: 'Siswa mendapatkan kesempatan untuk berlatih berbicara secara langsung dan aktif, sehingga lebih percaya diri menggunakan bahasa Mandarin dalam percakapan sehari-hari.',
  },
  {
    imageUrl: '/keunggulan-roadmap.jpg',
    alt: 'Structured Learning Program 3D Icon',
    glow: 'from-emerald-500/35 to-teal-400/35',
    border: 'border-emerald-200/90 hover:border-emerald-400',
    shadow: 'shadow-emerald-500/15',
    badgeColor: 'text-emerald-600',
    title: 'Structured Learning Program',
    badge: 'Program Pembelajaran Terstruktur',
    desc: 'Program pembelajaran disusun secara terstruktur sesuai usia, level kemampuan, dan kebutuhan siswa, dari dasar hingga persiapan HSK.',
  },
  {
    imageUrl: '/keunggulan-teacher.jpg',
    alt: 'Experienced Teachers 3D Icon',
    glow: 'from-indigo-500/35 to-blue-400/35',
    border: 'border-indigo-200/90 hover:border-indigo-400',
    shadow: 'shadow-indigo-500/15',
    badgeColor: 'text-indigo-600',
    title: 'Experienced Teachers',
    badge: 'Guru Berpengalaman',
    desc: 'Didampingi oleh guru yang berpengalaman dalam mengajar Mandarin untuk anak-anak, remaja, maupun dewasa.',
  },
  {
    imageUrl: '/keunggulan-practical.jpg',
    alt: 'Practical Mandarin Skills 3D Icon',
    glow: 'from-sky-500/35 to-blue-400/35',
    border: 'border-sky-200/90 hover:border-sky-400',
    shadow: 'shadow-sky-500/15',
    badgeColor: 'text-sky-600',
    title: 'Practical Mandarin Skills',
    badge: 'Keterampilan Praktis Mandarin',
    desc: 'Tidak hanya belajar kosakata dan tata bahasa, tetapi juga bagaimana menggunakan Mandarin dalam situasi nyata, seperti percakapan, sekolah, perjalanan, hingga kebutuhan profesional.',
  },
  {
    imageUrl: '/keunggulan-academic.jpg',
    alt: 'HSK & Academic Support 3D Icon',
    glow: 'from-amber-500/35 to-orange-400/35',
    border: 'border-amber-200/90 hover:border-amber-400',
    shadow: 'shadow-amber-500/15',
    badgeColor: 'text-amber-600',
    title: 'HSK & Academic Support',
    badge: 'HSK & Dukungan Akademik',
    desc: 'Membantu siswa mempersiapkan ujian HSK sekaligus mendukung kebutuhan Mandarin di sekolah maupun pendidikan lanjutan.',
  },
  {
    imageUrl: '/keunggulan-interactive.jpg',
    alt: 'Engaging & Interactive Learning 3D Icon',
    glow: 'from-rose-500/35 to-orange-400/35',
    border: 'border-rose-200/90 hover:border-rose-400',
    shadow: 'shadow-rose-500/15',
    badgeColor: 'text-rose-600',
    title: 'Engaging & Interactive Learning',
    badge: 'Pembelajaran Interaktif & Menarik',
    desc: 'Pembelajaran dibuat interaktif melalui speaking practice, games, activities, dan berbagai aktivitas yang membuat belajar Mandarin lebih menyenangkan.',
  },
];

export default function FeatureWhyUs({ keunggulan, settings }: FeatureWhyUsProps) {
  const displayFeatures = (keunggulan && keunggulan.length > 0)
    ? keunggulan.map((k, idx) => {
        const fallback = defaultVisualAssets[idx % defaultVisualAssets.length];
        return {
          title: k.title,
          desc: k.desc,
          badge: k.badge || fallback.badge,
          imageUrl: k.customIconUrl || fallback.imageUrl,
          alt: k.title,
          glow: fallback.glow,
          border: fallback.border,
          shadow: fallback.shadow,
          badgeColor: fallback.badgeColor,
        };
      })
    : defaultVisualAssets;

  return (
    <section className="py-20 bg-amber-100/50 border-b border-amber-300/70 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-10 right-5 w-72 h-72 rounded-full bg-yellow-300/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-72 h-72 rounded-full bg-orange-300/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
            {settings?.whyUsTitle || 'MENGAPA MEMILIH BRIGHT MANDARIN?'}
          </h2>
          <p className="text-lg sm:text-xl font-bold text-orange-600 mt-2 mb-3">
            {settings?.whyUsSubtitle || 'Belajar Mandarin Lebih Cepat, Seru, & Bergaransi Lulus'}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto my-3" />
          <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
            {settings?.whyUsDesc || 'Kurikulum terstruktur terbukti, latihan interaktif yang menyenangkan, serta bimbingan intensif dari para guru berpengalaman.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayFeatures.map((item, idx) => {
            return (
              <div
                key={idx}
                className="group relative bg-white hover:bg-amber-50/30 rounded-3xl p-8 border-2 border-amber-200 shadow-sm hover:shadow-2xl hover:border-amber-400 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center justify-between"
              >
                <div className="flex flex-col items-center w-full">
                  {/* Premium 3D Rendered Glossy Icon */}
                  <div className="mb-5 flex justify-center">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 group-hover:scale-110 group-hover:-translate-y-1.5 transition-all duration-300">
                      {/* Ambient 3D Glow */}
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-tr ${item.glow} blur-xl opacity-75 group-hover:opacity-100 transition-opacity`} />
                      
                      {/* 3D Glass Container */}
                      <div className={`relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden p-1 bg-white border-2 ${item.border} ${item.shadow} shadow-lg flex items-center justify-center`}>
                        <Image
                          src={item.imageUrl}
                          alt={item.alt}
                          width={112}
                          height={112}
                          priority={idx < 3}
                          className="w-full h-full object-cover rounded-xl sm:rounded-2xl drop-shadow-sm group-hover:scale-105 transition-transform duration-300 select-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Formal Sub-label Badge */}
                  <div className="mb-2">
                    <span className={`text-xs sm:text-sm font-extrabold tracking-wider uppercase ${item.badgeColor}`}>
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
