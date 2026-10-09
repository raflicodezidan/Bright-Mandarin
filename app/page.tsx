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
import AchievementAutoSlider from './components/AchievementAutoSlider';
import BeritaAutoSlider from './components/BeritaAutoSlider';
import { getPrograms, getAchievement, getBerita, getTestimoni, getKeunggulan, getSiteSettings, mockSiteSettings } from '@/lib/sanity';

export const revalidate = 60;

export default async function HomePage() {
  const [allPrograms, allAchievement, allBerita, allTestimoni, allKeunggulan, siteSettings] = await Promise.all([
    getPrograms(),
    getAchievement(),
    getBerita(),
    getTestimoni(),
    getKeunggulan(),
    getSiteSettings(),
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-amber-100/50 w-full max-w-full overflow-x-hidden">
      {/* 1. Hero Section */}
      <Hero settings={siteSettings} />

      {/* 2. Mengapa Memilih Bright Mandarin */}
      <FeatureWhyUs keunggulan={allKeunggulan} settings={siteSettings} />

      {/* 3. Tipe Pembelajaran (Online, Offline, Home Private) */}
      <LearningModes settings={siteSettings} />

      {/* 4. Preview Program Unggulan */}
      <section className="py-20 bg-amber-100/50 border-b border-amber-300/70">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
              {siteSettings.programSectionTitle || 'PROGRAM KURSUS UNGGULAN'}
            </h2>
            <p className="text-lg sm:text-xl font-bold text-orange-600 mt-2 mb-3">
              {siteSettings.programSectionSubtitle || 'Pilihan Program Kursus Mandarin Favorit & Terstruktur'}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto my-3" />
            <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed mb-6">
              {siteSettings.programSectionDesc || 'Kurikulum terstruktur mulai dari anak-anak hingga persiapan profesional dan beasiswa universitas di China.'}
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

      {/* 5. Achievement Murid-Murid: Small Steps, Big Progress */}
      <section id="achievement" className="py-20 sm:py-24 bg-amber-100/50 border-b border-amber-200/70 scroll-mt-20 relative overflow-hidden">
        {/* Subtle watercolor / artistic brush wash in top-right and bottom-left */}
        <div className="absolute -top-12 -right-12 w-96 h-80 bg-gradient-to-bl from-amber-200/50 via-orange-100/30 to-transparent pointer-events-none rounded-bl-full blur-2xl" />
        <div className="absolute -bottom-12 -left-12 w-96 h-80 bg-gradient-to-tr from-amber-200/40 via-orange-100/20 to-transparent pointer-events-none rounded-tr-full blur-2xl" />

        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          {/* Section Header: Gaya Sama Persis Seperti Section Lainnya */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
              {siteSettings.achievementSectionTitle || 'ACHIEVEMENT MURID BRIGHT MANDARIN'}
            </h2>
            <p className="text-lg sm:text-xl font-bold text-orange-600 mt-2 mb-3">
              {siteSettings.achievementSectionSubtitle || 'Small Steps, Big Progress'}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto my-3" />
            <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed mb-6">
              {siteSettings.achievementSectionDesc || 'Every test is a step closer to my bigger goals. Bukti nyata hasil belajar dan dedikasi murid-murid kami dalam meraih skor memuaskan pada ujian HSK dan HSKK.'}
            </p>
          </div>

          <AchievementAutoSlider achievement={allAchievement} />
        </div>
      </section>

      {/* 6. Testimoni Siswa & Alumni */}
      <TestimoniSection testimoni={allTestimoni} settings={siteSettings} />

      {/* 7. Preview Blog & Tips Mandarin */}
      <section className="py-20 bg-amber-100/50 border-b border-amber-300/70">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
              {siteSettings.beritaSectionTitle || 'BLOG BRIGHT MANDARIN'}
            </h2>
            <p className="text-lg sm:text-xl font-bold text-orange-600 mt-2 mb-3">
              {siteSettings.beritaSectionSubtitle || 'Tips Belajar & Info Beasiswa Kuliah ke Tiongkok'}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto my-3" />
            <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed mb-6">
              {siteSettings.beritaSectionDesc || 'Wawasan praktis seputar tata bahasa Mandarin, persiapan ujian HSK, dan kisah sukses para alumni.'}
            </p>
            <div>
              <Link
                href="/berita"
                className="inline-flex items-center gap-2 text-amber-950 hover:text-orange-600 font-bold text-sm bg-white hover:bg-amber-100 px-6 py-3 rounded-2xl border-2 border-amber-300 hover:shadow-md transition-all shadow-xs"
              >
                <span>Lihat Semua Blog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <BeritaAutoSlider berita={allBerita} />
        </div>
      </section>

      {/* 8. Instagram Feed (Media Sosial) */}
      <InstagramFeed settings={siteSettings} />

      {/* 9. Cabang Lokasi Offline Center */}
      <BranchLocations settings={siteSettings} />

      {/* 10. Call to Action Banner: Yuk, Mulai Petualangan Baru! (Dapat dicustom via Sanity) */}
      <section className="py-20 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white relative overflow-hidden border-t-2 border-amber-300">
        {/* Custom Uploaded Background Image from Sanity or fallback pattern */}
        {siteSettings.ctaBannerBgImageUrl ? (
          <div className="absolute inset-0 z-0">
            <Image
              src={siteSettings.ctaBannerBgImageUrl}
              alt="CTA Background"
              fill
              sizes="100vw"
              className="object-cover object-center select-none pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-950/40 via-transparent to-orange-950/25 pointer-events-none" />
          </div>
        ) : (
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_2px,transparent_2px)] [background-size:20px_20px]" />
        )}

        <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10">
          <div className="flex justify-center px-2">
            <span className="inline-flex items-center justify-center text-xs sm:text-sm font-bold tracking-wide bg-white text-orange-600 px-4 sm:px-5 py-2 sm:py-1.5 rounded-2xl sm:rounded-full shadow-xs border border-white/80 max-w-full text-center">
              <span>{siteSettings.ctaBannerBadge || 'A Brighter Future Through Mandarin'}</span>
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
              <span>{siteSettings.ctaBannerButtonWhatsapp || 'Daftar via WhatsApp Sekarang'}</span>
            </a>

            <Link
              href="/program"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-600/30 hover:bg-amber-600/50 backdrop-blur-xs border-2 border-white/80 text-white font-black text-base px-8 py-4 rounded-full transition-all hover:scale-105"
            >
              <span>{siteSettings.ctaBannerButtonProgram || 'Eksplorasi Program Kelas'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
