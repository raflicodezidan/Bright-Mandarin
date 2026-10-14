import React from 'react';
import { KeunggulanItem, SiteSettings } from '@/lib/sanity';

interface FeatureWhyUsProps {
  keunggulan?: KeunggulanItem[];
  settings?: SiteSettings;
}

// 6 Landscape Educational Photography Assets
const defaultVisualAssets = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80',
    alt: 'Personal Speaking Practice',
    title: 'Personal Speaking Practice',
    badge: 'Latihan Berbicara Pribadi',
    desc: 'Siswa mendapatkan kesempatan untuk berlatih berbicara secara langsung dan aktif, sehingga lebih percaya diri menggunakan bahasa Mandarin dalam percakapan sehari-hari.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80',
    alt: 'Structured Learning Program',
    title: 'Structured Learning Program',
    badge: 'Program Pembelajaran Terstruktur',
    desc: 'Program pembelajaran disusun secara terstruktur sesuai usia, level kemampuan, dan kebutuhan siswa, dari dasar hingga persiapan HSK.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&auto=format&fit=crop&q=80',
    alt: 'Experienced Teachers',
    title: 'Experienced Teachers',
    badge: 'Guru Berpengalaman',
    desc: 'Didampingi oleh guru yang berpengalaman dalam mengajar Mandarin untuk anak-anak, remaja, maupun dewasa.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
    alt: 'Practical Mandarin Skills',
    title: 'Practical Mandarin Skills',
    badge: 'Keterampilan Praktis Mandarin',
    desc: 'Tidak hanya belajar kosakata dan tata bahasa, tetapi juga bagaimana menggunakan Mandarin dalam situasi nyata, seperti percakapan, sekolah, perjalanan, hingga kebutuhan profesional.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
    alt: 'HSK & Academic Support',
    title: 'HSK & Academic Support',
    badge: 'HSK & Dukungan Akademik',
    desc: 'Membantu siswa mempersiapkan ujian HSK sekaligus mendukung kebutuhan Mandarin di sekolah maupun pendidikan lanjutan.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80',
    alt: 'Engaging & Interactive Learning',
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
          imageUrl: k.customIconUrl || (k as any).gambarUrl || fallback.imageUrl,
          alt: k.title,
        };
      })
    : defaultVisualAssets;

  return (
    <section className="py-20 bg-[#FFFEF8] border-b border-amber-200/60 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-10 right-5 w-72 h-72 rounded-full bg-yellow-300/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-72 h-72 rounded-full bg-orange-300/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
            {(() => {
              const title = settings?.whyUsTitle || 'MENGAPA MEMILIH\nBRIGHT MANDARIN?';
              const formattedTitle = title === 'MENGAPA MEMILIH BRIGHT MANDARIN?'
                ? 'MENGAPA MEMILIH\nBRIGHT MANDARIN?'
                : title;
              return formattedTitle.split('\n').map((part, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <br />}
                  {part}
                </React.Fragment>
              ));
            })()}
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
                className="bg-white rounded-3xl overflow-hidden border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col h-full group/card hover:-translate-y-1"
              >
                {/* Image Header (Landscape) */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900 shrink-0">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm tracking-wide">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover/card:text-orange-600 transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
