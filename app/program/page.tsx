import React from 'react';
import { MessageCircle, Users, BookOpen, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import { getPrograms, mockSiteSettings } from '@/lib/sanity';

export const revalidate = 60;

export const metadata = {
  title: 'Program Kursus Unggulan — Bright Mandarin',
  description: 'Pilihan lengkap program kursus bahasa Mandarin: Bimbingan Belajar Akademik, Kelas Reguler, Kindergarten, Bright Mandarin Kids, HSK Preparation, HSKK Speaking Test, dan Kelas Percakapan.',
};

export default async function ProgramPage() {
  const programs = await getPrograms();

  return (
    <div className="py-12 lg:py-20 bg-gradient-to-b from-amber-50/70 via-yellow-50/50 to-orange-50/60 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Formal Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
            PROGRAM KURSUS UNGGULAN
          </h1>
          <p className="text-lg sm:text-xl font-bold text-orange-600 mt-2 mb-3">
            Program Belajar Bahasa Mandarin Sesuai Target & Usia Anda
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto my-3" />
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
            Mulai dari bimbingan akademik sekolah, kelas reguler, kurikulum internasional anak, hingga persiapan ujian sertifikasi HSK, HSKK, dan percakapan bisnis profesional.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog) => (
            <div
              key={prog._id}
              className="bg-white rounded-3xl overflow-hidden border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group/card hover:-translate-y-1"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-900 shrink-0">
                  <img
                    src={prog.gambarUrl || 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80'}
                    alt={prog.judul}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm tracking-wide">
                      {prog.kategori}
                    </span>
                    {prog.targetUsia && (
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/95 text-slate-800 backdrop-blur-xs shadow-xs">
                        {prog.targetUsia}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover/card:text-orange-600 transition-colors leading-snug">
                    {prog.judul}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                    {prog.ringkasan}
                  </p>

                  {/* Structured Details Box */}
                  <div className="bg-amber-50/50 rounded-2xl p-4 border border-amber-200/70 space-y-3 text-xs sm:text-[13px] mb-2">
                    {prog.materi && (
                      <div className="flex items-start gap-2.5">
                        <BookOpen className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div className="leading-relaxed">
                          <span className="font-bold text-slate-800">Materi: </span>
                          <span className="text-slate-600 font-normal">{prog.materi}</span>
                        </div>
                      </div>
                    )}

                    {prog.metode && (
                      <div className="flex items-start gap-2.5">
                        <Sparkles className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <div className="leading-relaxed">
                          <span className="font-bold text-slate-800">Metode: </span>
                          <span className="text-slate-600 font-normal">{prog.metode}</span>
                        </div>
                      </div>
                    )}

                    {prog.durasi && (
                      <div className="flex items-start gap-2.5">
                        <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div className="leading-relaxed">
                          <span className="font-bold text-slate-800">Durasi: </span>
                          <span className="text-slate-700 font-semibold">{prog.durasi}</span>
                        </div>
                      </div>
                    )}

                    {prog.benefit && (
                      <div className="pt-2.5 border-t border-amber-200/60 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div className="leading-relaxed">
                          <span className="font-bold text-slate-800">Benefit: </span>
                          <span className="text-slate-600 font-normal">{prog.benefit}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer: Price & CTA Button */}
              <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 mt-2">
                <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-bold">
                      Biaya & Informasi
                    </span>
                    <strong className="text-xs sm:text-sm font-bold text-slate-900 block truncate">
                      {prog.harga || 'Hubungi kami untuk informasi program'}
                    </strong>
                  </div>

                  <a
                    href={`https://api.whatsapp.com/send/?phone=6289699288009&text=Halo+Admin+Bright+Mandarin%2C+saya+ingin+daftar+program+${encodeURIComponent(prog.judul)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-xs hover:shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Daftar Kelas</span>
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
