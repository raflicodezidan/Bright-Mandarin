import React from 'react';
import Image from 'next/image';
import { Award, GraduationCap, Sparkles, MessageCircle, BookOpen } from 'lucide-react';
import { getPengajar, mockSiteSettings } from '@/lib/sanity';

export const revalidate = 60;

export const metadata = {
  title: 'Tim Pengajar (Laoshi) — Bright Mandarin',
  description: 'Kenali profil Laoshi berlatar belakang pendidikan universitas terkemuka Tiongkok dengan sertifikasi minimal HSK 6 di Bright Mandarin.',
};

export default async function PengajarPage() {
  const pengajar = await getPengajar();

  return (
    <div className="py-12 lg:py-20 bg-gradient-to-b from-amber-50/70 via-yellow-50/50 to-orange-50/60 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Formal Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
            DEWAN PENGAJAR PROFESIONAL
          </h1>
          <p className="text-lg sm:text-xl font-bold text-orange-600 mt-2 mb-3">
            Profil Laoshi Bersertifikasi Min. HSK 6
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto my-3" />
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
            Seluruh tutor kami berpendidikan formal dari universitas bahasa terkemuka di Tiongkok dengan sertifikasi resmi minimal HSK 6 serta metode pengajaran yang interaktif dan berdedikasi.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pengajar.map((laoshi) => (
            <div
              key={laoshi._id}
              className="bg-white rounded-3xl overflow-hidden border border-brand-border shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-4/5 overflow-hidden bg-brand-charcoal">
                <img
                  src={laoshi.fotoUrl}
                  alt={laoshi.nama}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-brand-red text-white text-[11px] font-bold rounded-md mb-1.5 shadow-xs">
                    <Award className="w-3 h-3 text-brand-gold" />
                    <span>Min. HSK 6 Certified</span>
                  </span>
                  <p className="text-xs text-brand-gold font-semibold truncate">
                    {laoshi.spesialisasi}
                  </p>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-extrabold text-brand-charcoal mb-1 group-hover:text-brand-red transition-colors">
                    {laoshi.nama}
                  </h2>
                  <p className="text-xs text-brand-gray font-medium mb-3">
                    {laoshi.gelar}
                  </p>

                  <div className="pt-2 border-t border-brand-border/60">
                    <p className="text-xs text-brand-charcoal font-semibold mb-1.5 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-brand-red shrink-0" />
                      <span>Sertifikasi:</span>
                    </p>
                    <p className="text-xs text-brand-gray mb-3 bg-brand-cream p-2 rounded-lg border border-brand-border/60 leading-snug">
                      {laoshi.sertifikasi}
                    </p>

                    <p className="text-xs text-brand-gray leading-relaxed line-clamp-4">
                      {laoshi.bio}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-brand-border/60">
                  <a
                    href={`https://api.whatsapp.com/send/?phone=6289699288009&text=Halo+Admin+Bright+Mandarin%2C+saya+ingin+konsultasi+kelas+bersama+${encodeURIComponent(laoshi.nama)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-brand-cream hover:bg-brand-red text-brand-charcoal hover:text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-colors border border-brand-border hover:border-brand-red"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Jadwalkan Sesi Bersama Laoshi</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
