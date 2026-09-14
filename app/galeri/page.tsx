import React from 'react';
import { Camera, Calendar, Sparkles } from 'lucide-react';
import { getGaleri } from '@/lib/sanity';

export const revalidate = 60;

export const metadata = {
  title: 'Galeri Kegiatan & Suasana Kelas — Bright Mandarin',
  description: 'Dokumentasi interaksi belajar mengajar, workshop kaligrafi, perayaan festival kebudayaan Tionghoa, dan pelepasan beasiswa di Bright Mandarin.',
};

export default async function GaleriPage() {
  const galeriList = await getGaleri();

  return (
    <div className="py-12 lg:py-20 bg-gradient-to-b from-amber-50/70 via-yellow-50/50 to-orange-50/60 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Formal Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
            DOKUMENTASI & SUASANA KELAS
          </h1>
          <p className="text-lg sm:text-xl font-bold text-orange-600 mt-2 mb-3">
            Galeri Suasana Belajar & Aktivitas Budaya
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto my-3" />
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
            Dokumentasi momen belajar interaktif murid-murid kelas Kids & Dewasa, workshop budaya Tionghoa, dan perayaan kelulusan ujian resmi HSK.
          </p>
        </div>

        {/* Galeri Blocks */}
        <div className="space-y-16">
          {galeriList.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-sm space-y-6"
            >
              {/* Block Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-brand-border/60 pb-5">
                <div>
                  <div className="flex items-center gap-2 text-xs text-brand-gold-dark font-bold uppercase tracking-wider mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-brand-gold-light border border-brand-gold/30">
                      {item.kategori}
                    </span>
                    <span className="flex items-center gap-1 text-brand-gray font-medium">
                      <Calendar className="w-3.5 h-3.5 text-brand-red" />
                      {item.tanggal}
                    </span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-brand-charcoal">
                    {item.judul}
                  </h2>
                </div>
                {item.deskripsi && (
                  <p className="text-xs sm:text-sm text-brand-gray max-w-md">
                    {item.deskripsi}
                  </p>
                )}
              </div>

              {/* Photos Grid inside document block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {item.foto?.map((pic, pIdx) => (
                  <div
                    key={pIdx}
                    className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-brand-charcoal shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src={pic.url}
                      alt={pic.caption || item.judul}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {pic.caption && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white text-xs font-semibold leading-snug">
                          {pic.caption}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
