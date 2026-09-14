import React from 'react';
import Link from 'next/link';
import { Newspaper, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { getBerita } from '@/lib/sanity';

export const revalidate = 60;

export const metadata = {
  title: 'Blog & Edukasi Mandarin — Bright Mandarin',
  description: 'Kumpulan artikel blog edukasi, tips cepat menguasai nada pinyin & hanzi, info jadwal ujian HSK, dan panduan beasiswa kuliah ke China.',
};

export default async function BeritaPage() {
  const beritaList = await getBerita();

  return (
    <div className="py-12 lg:py-20 bg-gradient-to-b from-amber-50/70 via-yellow-50/50 to-orange-50/60 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
            BLOG BRIGHT MANDARIN
          </h1>
          <p className="text-lg sm:text-xl font-bold text-orange-600 mt-2 mb-3">
            Tips Belajar Bahasa Mandarin & Info Beasiswa Tiongkok
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto my-3" />
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
            Perkaya wawasan bahasa Mandarin Anda melalui kumpulan artikel blog pilihan: tips praktis, pemahaman budaya, serta informasi ujian HSK dan peluang studi di Tiongkok.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beritaList.map((item) => (
            <Link
              key={item._id}
              href={`/berita/${item.slug.current}`}
              className="bg-white rounded-3xl overflow-hidden border border-brand-border hover:border-brand-red/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-brand-charcoal">
                  <img
                    src={item.gambarUtamaUrl}
                    alt={item.judul}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full bg-brand-red text-white shadow-xs">
                    {item.kategori}
                  </span>
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-1.5 text-xs text-brand-gray font-medium mb-3">
                    <Calendar className="w-3.5 h-3.5 text-brand-gold-dark" />
                    <span>{item.tanggal}</span>
                  </div>

                  <h2 className="text-xl font-extrabold text-brand-charcoal mb-3 group-hover:text-brand-red transition-colors leading-snug">
                    {item.judul}
                  </h2>

                  <p className="text-sm text-brand-gray leading-relaxed line-clamp-3">
                    {item.ringkasan}
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0">
                <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs font-bold text-brand-red group-hover:text-brand-red-hover">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
