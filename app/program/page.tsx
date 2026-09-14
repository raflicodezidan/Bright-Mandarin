import React from 'react';
import Link from 'next/link';
import { Sparkles, MessageCircle, Clock, CheckCircle2, Award, BookOpen, Layers } from 'lucide-react';
import { getPrograms, mockSiteSettings } from '@/lib/sanity';

export const revalidate = 60;

export const metadata = {
  title: 'Program Kelas Kursus Mandarin — Bright Mandarin',
  description: 'Pilihan lengkap program kursus bahasa Mandarin: Kids & Teens, Intensive HSK 1-6, Business Chinese, Daily Conversation, hingga Beasiswa Studi ke China.',
};

export default async function ProgramPage() {
  const programs = await getPrograms();

  return (
    <div className="py-12 lg:py-20 bg-gradient-to-b from-amber-50/70 via-yellow-50/50 to-orange-50/60 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Formal Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
            KATALOG PROGRAM KELAS LENGKAP
          </h1>
          <p className="text-lg sm:text-xl font-bold text-orange-600 mt-2 mb-3">
            Program Belajar Bahasa Mandarin Sesuai Target Anda
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto my-3" />
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
            Mulai dari usia dini, siswa sekolah, persiapan ujian internasional HSK, hingga pebisnis dan calon penerima beasiswa universitas di Tiongkok.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog) => (
            <div
              key={prog._id}
              className="bg-white rounded-3xl overflow-hidden border-2 border-amber-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-slate-800">
                  <img
                    src={prog.gambarUrl || 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80'}
                    alt={prog.judul}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md">
                      {prog.kategori}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/95 text-slate-900 backdrop-blur-xs shadow-xs">
                      {prog.tipeKelas}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <h2 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors leading-snug">
                    {prog.judul}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                    {prog.ringkasan}
                  </p>

                  <div className="space-y-2.5 py-4 border-y border-amber-200/60 text-xs text-slate-800 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Target Capaian:</span>
                      <strong className="text-orange-600 font-bold">{prog.targetLevel}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Estimasi Waktu:</span>
                      <strong className="font-semibold">{prog.durasi}</strong>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                      Keunggulan Program:
                    </span>
                    {prog.keunggulan?.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-7 pt-0 border-t border-amber-200/60 mt-4">
                <div className="pt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Investasi Belajar</span>
                    <strong className="text-lg font-black text-slate-900">
                      {prog.harga || 'Mulai Rp 650.000'}
                    </strong>
                  </div>

                  <a
                    href={`https://api.whatsapp.com/send/?phone=6289699288009&text=Halo+Admin+Bright+Mandarin%2C+saya+ingin+daftar+program+${encodeURIComponent(prog.judul)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black text-sm px-6 py-3 rounded-2xl shadow-md transition-all hover:scale-105"
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
