import React from 'react';
import { getPrograms, mockSiteSettings } from '@/lib/sanity';

import type { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Program Kursus Mandarin Anak & Dewasa di Kelapa Gading',
  description: 'Pilihan lengkap kursus Mandarin anak di Kelapa Gading interaktif dan seru, bimbingan belajar akademik, kelas reguler, Kindergarten kurikulum internasional, Bright Mandarin Kids, persiapan HSK 1–6 & HSKK.',
  keywords: [
    'kursus mandarin anak di kelapa gading',
    'kursus mandarin anak interaktif dan seru',
    'les mandarin anak di kelapa gading',
    'tempat les mandarin anak kelapa gading',
    'program kursus mandarin',
    'kursus mandarin di kelapa gading',
    'les mandarin anak kelapa gading',
    'kursus hsk kelapa gading',
    'les mandarin hskk jakarta',
    'bimbingan belajar mandarin kelapa gading',
    'les mandarin bukit gading mediterania'
  ],
};

export default async function ProgramPage() {
  const programs = await getPrograms();

  return (
    <div className="py-12 lg:py-20 bg-[#FFFEF8] min-h-screen">
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
              id={prog.slug?.current || prog._id}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full group/card hover:-translate-y-1 scroll-mt-28"
            >
              {/* Image Header - Clean without badges */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100 shrink-0">
                <img
                  src={prog.gambarUrl || 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80'}
                  alt={prog.judul}
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 leading-snug">
                    {prog.judul}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-snug mb-3.5 font-normal">
                    {prog.ringkasan}
                  </p>

                  {/* Structured Details Table */}
                  <div className="border-y border-slate-100 divide-y divide-slate-100 text-xs sm:text-[13px] mb-3.5">
                    {prog.materi && (
                      <div className="py-2 grid grid-cols-[90px_1fr] sm:grid-cols-[105px_1fr] gap-2.5 items-start">
                        <span className="font-bold text-slate-900">Materi</span>
                        <span className="text-slate-600 leading-snug">{prog.materi}</span>
                      </div>
                    )}

                    {prog.metode && (
                      <div className="py-2 grid grid-cols-[90px_1fr] sm:grid-cols-[105px_1fr] gap-2.5 items-start">
                        <span className="font-bold text-slate-900">Metode</span>
                        <span className="text-slate-600 leading-snug">{prog.metode}</span>
                      </div>
                    )}

                    {prog.durasi && (
                      <div className="py-2 grid grid-cols-[90px_1fr] sm:grid-cols-[105px_1fr] gap-2.5 items-start">
                        <span className="font-bold text-slate-900">Durasi</span>
                        <span className="text-slate-600 leading-snug">{prog.durasi}</span>
                      </div>
                    )}

                    {prog.benefit && (
                      <div className="py-2 grid grid-cols-[90px_1fr] sm:grid-cols-[105px_1fr] gap-2.5 items-start">
                        <span className="font-bold text-slate-900">Benefit</span>
                        <span className="text-slate-600 leading-snug">{prog.benefit}</span>
                      </div>
                    )}

                    {prog.targetUsia && (
                      <div className="py-2 grid grid-cols-[90px_1fr] sm:grid-cols-[105px_1fr] gap-2.5 items-start">
                        <span className="font-bold text-slate-900">Target Usia</span>
                        <span className="text-slate-600 leading-snug">{prog.targetUsia}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer: Price & CTA Button */}
                <div className="flex flex-col items-center text-center gap-2.5 mt-auto pt-1">
                  <div className="w-full">
                    <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider block font-semibold leading-none mb-1">
                      BIAYA & INFORMASI
                    </span>
                    <p className="text-xs sm:text-[13px] text-slate-700 font-medium block leading-snug">
                      {prog.harga || 'Hubungi kami untuk informasi program dan biaya'}
                    </p>
                  </div>

                  <a
                    href={`https://api.whatsapp.com/send/?phone=6285890592738&text=Halo+Bright+Mandarin!+%F0%9F%8C%9F+Saya+tertarik+untuk+belajar+bahasa+Mandarin+dan+ingin+mengetahui+informasi+mengenai+program+kelas+serta+pendaftaran+trial+class.+Boleh+dibantu+informasinya?+Terima+kasih!+%F0%9F%99%8F`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl text-center shadow-xs hover:shadow-md transition-all active:scale-[0.99] cursor-pointer"
                  >
                    Daftar Kelas
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
