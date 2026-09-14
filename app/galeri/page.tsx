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
              className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200/80 shadow-md hover:shadow-lg transition-shadow space-y-6"
            >
              {/* Block Header */}
              <div className="border-b border-amber-200/80 pb-5 space-y-2.5">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-bold tracking-wide">
                    {item.kategori}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-orange-600" />
                    <span>{item.tanggal}</span>
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                    {item.judul}
                  </h2>
                  {item.deskripsi && (
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl font-normal pt-1">
                      {item.deskripsi}
                    </p>
                  )}
                </div>
              </div>

              {/* Photos Grid inside document block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {item.foto?.map((pic, pIdx) => (
                  <div
                    key={pIdx}
                    className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-slate-900 border border-amber-200/60 shadow-xs hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src={pic.url}
                      alt={pic.caption || item.judul}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {pic.caption && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
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
