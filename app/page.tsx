import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Hero from './components/Hero';
import FeatureWhyUs from './components/FeatureWhyUs';
import LearningModes from './components/LearningModes';
import BranchLocations from './components/BranchLocations';
import InstagramFeed from './components/InstagramFeed';
import TestimoniSection from './components/TestimoniSection';
import ProgramAutoSlider from './components/ProgramAutoSlider';
import PengajarAutoSlider from './components/PengajarAutoSlider';
import BeritaAutoSlider from './components/BeritaAutoSlider';
import { getPrograms, getPengajar, getBerita, getTestimoni, getKeunggulan, getSiteSettings, mockSiteSettings } from '@/lib/sanity';

export const revalidate = 60;

export default async function HomePage() {
  const [allPrograms, allPengajar, allBerita, allTestimoni, allKeunggulan, siteSettings] = await Promise.all([
    getPrograms(),
    getPengajar(),
    getBerita(),
    getTestimoni(),
    getKeunggulan(),
    getSiteSettings(),
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-amber-100/70 via-yellow-100/50 to-orange-100/60 w-full max-w-full overflow-x-hidden">
      {/* 1. Hero Section */}
      <Hero settings={siteSettings} />

      {/* 2. Mengapa Memilih Bright Mandarin */}
      <FeatureWhyUs keunggulan={allKeunggulan} />

      {/* 3. Tipe Pembelajaran (Online, Offline, Home Private) */}
      <LearningModes />

      {/* 4. Preview Program Unggulan (Background: Kuning-Oranye Hangat) */}
      <section className="py-20 bg-amber-100/60 border-b border-amber-300/70">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
              PROGRAM KURSUS UNGGULAN
            </h2>
            <p className="text-lg sm:text-xl font-bold text-orange-600 mt-2 mb-3">
              Pilihan Program Kursus Mandarin Favorit & Terstruktur
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto my-3" />
            <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed mb-6">
              Kurikulum terstruktur mulai dari anak-anak hingga persiapan profesional dan beasiswa universitas di China.
            </p>
            <div>
              <Link
                href="/program"
                className="inline-flex items-center gap-2 text-amber-950 hover:text-orange-600 font-bold text-sm bg-white hover:bg-amber-100 px-6 py-3 rounded-2xl border-2 border-amber-300 hover:shadow-md transition-all shadow-xs"
              >
                <span>Lihat Semua Program</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <ProgramAutoSlider programs={allPrograms} />
        </div>
      </section>

      {/* 5. Preview Tim Pengajar (Background: Kuning-Oranye Hangat) */}
      <section className="py-20 bg-orange-100/50 border-b border-amber-300/70">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
              DEWAN PENGAJAR PROFESIONAL
            </h2>
            <p className="text-lg sm:text-xl font-bold text-orange-600 mt-2 mb-3">
              Dibimbing Langsung oleh Laoshi Tersertifikasi Min. HSK 6
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto my-3" />
            <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed mb-6">
              Lulusan universitas top Tiongkok dengan keahlian pedagogi ramah murid, dedikasi tinggi, dan metode yang komunikatif.
            </p>
            <div>
              <Link
                href="/pengajar"
                className="inline-flex items-center gap-2 text-slate-800 hover:text-orange-600 font-bold text-sm bg-white hover:bg-amber-50 px-6 py-3 rounded-2xl border-2 border-amber-300 shadow-xs hover:shadow-md transition-all"
              >
                <span>Kenali Semua Laoshi</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <PengajarAutoSlider pengajar={allPengajar} />
        </div>
      </section>

      {/* 6. Preview Berita & Tips Mandarin (Background: Kuning-Oranye Hangat) */}
      <section className="py-20 bg-yellow-100/50 border-b border-amber-300/70">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
              ARTIKEL & TIPS MANDARIN
            </h2>
            <p className="text-lg sm:text-xl font-bold text-orange-600 mt-2 mb-3">
              Tips Belajar & Info Beasiswa Kuliah ke Tiongkok
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto my-3" />
            <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed mb-6">
              Wawasan praktis seputar tata bahasa Mandarin, persiapan ujian HSK, dan kisah sukses para alumni.
            </p>
            <div>
              <Link
                href="/berita"
                className="inline-flex items-center gap-2 text-amber-950 hover:text-orange-600 font-bold text-sm bg-white hover:bg-amber-100 px-6 py-3 rounded-2xl border-2 border-amber-300 hover:shadow-md transition-all shadow-xs"
              >
                <span>Semua Artikel</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <BeritaAutoSlider berita={allBerita} />
        </div>
      </section>

      {/* 7. Cabang Lokasi Offline Center (Background: Kuning-Oranye) */}
      <BranchLocations settings={siteSettings} />

      {/* 8. Instagram Feed (Background: Putih) */}
      <InstagramFeed />

      {/* 9. Testimoni Siswa & Alumni (Background: Kuning-Oranye) */}
      <TestimoniSection testimoni={allTestimoni} settings={siteSettings} />

      {/* 10. Call to Action Banner: Yuk, Mulai Petualangan Baru! */}
      <section className="py-20 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white relative overflow-hidden border-t-2 border-amber-300">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_2px,transparent_2px)] [background-size:20px_20px]" />
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wide bg-white text-slate-800 px-4 py-1.5 rounded-full shadow-xs border border-white/80">
              <span className="text-orange-600 font-extrabold">#BRIGHTMANDARIN</span>
              <span className="text-slate-700">Bersama Bright Mandarin!</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight drop-shadow-md">
            {siteSettings.ctaBannerTitle || 'Yuk, Mulai Petualangan Baru! Belajar Mandarin Seru & Pasti Lulus!'}
          </h2>
          <p className="text-base sm:text-lg text-amber-50 font-medium max-w-2xl mx-auto leading-relaxed">
            {siteSettings.ctaBannerSubtitle || 'Daftarkan diri Anda atau putra-putri tercinta sekarang juga. Dapatkan FREE Placement Test dan konsultasi kurikulum langsung bersama Laoshi.'}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteSettings.whatsappUtama || mockSiteSettings.whatsappUtama}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-amber-50 text-emerald-800 text-base font-black px-8 py-4 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 border-2 border-white"
            >
              <div className="w-6 h-6 shrink-0">
                <Image
                  src="/whatsapp-logo.png"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className="w-full h-full object-contain"
                />
              </div>
              <span>Daftar via WhatsApp Sekarang</span>
            </a>

            <Link
              href="/program"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-600/30 hover:bg-amber-600/50 backdrop-blur-xs border-2 border-white/80 text-white font-black text-base px-8 py-4 rounded-full transition-all hover:scale-105"
            >
              <span>Eksplorasi Program Kelas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
