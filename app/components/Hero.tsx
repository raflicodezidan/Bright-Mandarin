import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, MessageCircle, ArrowRight, Award, GraduationCap, Trophy, CheckCircle2, Star, ThumbsUp } from 'lucide-react';
import { mockSiteSettings, SiteSettings } from '@/lib/sanity';

export default function Hero({ settings }: { settings?: SiteSettings }) {
  const currentSettings = settings || mockSiteSettings;
  return (
    <section className="relative overflow-hidden w-full max-w-full bg-gradient-to-br from-amber-400 via-yellow-300 to-orange-400 pt-10 pb-20 lg:pt-16 lg:pb-28 border-b-4 border-amber-500/30">
      {/* Playful Sunshine & Cloud Doodles in Background */}
      <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-white/20 blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-orange-500/20 blur-3xl pointer-events-none" />
      
      {/* Decorative SVG Sunbeams & Sparkles */}
      <div className="absolute top-8 left-12 text-white/30 hidden md:block">
        <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="20" fill="white" opacity="0.4" />
          <line x1="50" y1="10" x2="50" y2="25" stroke="white" strokeWidth="6" strokeLinecap="round" opacity="0.5" />
          <line x1="50" y1="75" x2="50" y2="90" stroke="white" strokeWidth="6" strokeLinecap="round" opacity="0.5" />
          <line x1="10" y1="50" x2="25" y2="50" stroke="white" strokeWidth="6" strokeLinecap="round" opacity="0.5" />
          <line x1="75" y1="50" x2="90" y2="50" stroke="white" strokeWidth="6" strokeLinecap="round" opacity="0.5" />
          <line x1="22" y1="22" x2="33" y2="33" stroke="white" strokeWidth="6" strokeLinecap="round" opacity="0.5" />
          <line x1="67" y1="67" x2="78" y2="78" stroke="white" strokeWidth="6" strokeLinecap="round" opacity="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Playful Pill Badge (Centered with Animation) */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white text-slate-800 text-[11px] sm:text-xs md:text-sm font-black shadow-lg border-2 border-white/90 animate-wiggle hover:scale-105 transition-all cursor-default max-w-full text-center">
                <span className="text-orange-600 font-extrabold whitespace-nowrap shrink-0">#BRIGHTMANDARIN</span>
                <span className="text-sky-600 font-bold whitespace-nowrap">Kursus Mandarin Paling Seru & Terbukti!</span>
              </div>
            </div>

            {/* Main Headline with Fun Sunray & Color Pop */}
            <div className="relative">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight drop-shadow-xs">
                {currentSettings.heroHeadlineMain || 'Bicara Mandarin Lancar & Raih'}{' '}
                <span className="inline-block relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-600 to-amber-700">
                    {currentSettings.heroHeadlineHighlight || 'Beasiswa ke Tiongkok'}
                  </span>
                  {/* Playful underline squiggle */}
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-red-500/80" viewBox="0 0 200 12" fill="none">
                    <path d="M2 7C40 2 80 12 120 5C150 1 180 8 198 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 bg-white/40 backdrop-blur-xs p-4 rounded-2xl border border-white/60 shadow-xs">
              {currentSettings.heroSubheadline || 'Belajar bahasa Mandarin dengan metode akselerasi interaktif 3 - 4 bulan. Dibimbing langsung oleh para Laoshi ceria bersertifikasi HSK 6 dari universitas top Tiongkok!'}
            </p>

            {/* Key Value Points in Cute Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs px-3.5 py-2.5 rounded-xl border border-white shadow-xs text-sm text-slate-800 font-bold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Seluruh Laoshi Min. HSK 6</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs px-3.5 py-2.5 rounded-xl border border-white shadow-xs text-sm text-slate-800 font-bold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>FREE Jasa Pendaftaran Ujian HSK</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs px-3.5 py-2.5 rounded-xl border border-white shadow-xs text-sm text-slate-800 font-bold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Kelas Online, Offline & Private</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs px-3.5 py-2.5 rounded-xl border border-white shadow-xs text-sm text-slate-800 font-bold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Garansi Lulus & Mengulang Gratis</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={currentSettings.whatsappUtama || mockSiteSettings.whatsappUtama}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white text-sm sm:text-base font-black px-5 sm:px-7 py-3.5 sm:py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 active:translate-y-0 border-2 border-white/80 group"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-transform">
                  <Image
                    src="/whatsapp-logo.png"
                    alt="WhatsApp"
                    width={22}
                    height={22}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="whitespace-nowrap">Konsultasi & Placement Test Gratis</span>
              </a>

              <Link
                href="/program"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-amber-50 text-slate-900 border-2 border-white font-black text-base px-6 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Lihat Program Kelas</span>
                <ArrowRight className="w-4 h-4 text-sky-600" />
              </Link>
            </div>

            {/* Social Proof Numbers in Cute Cards */}
            <div className="pt-4 grid grid-cols-3 gap-3 text-center">
              <div className="bg-white/70 backdrop-blur-xs p-3 rounded-2xl border border-white/80 shadow-xs">
                <p className="text-2xl sm:text-3xl font-black text-rose-600">5.000+</p>
                <p className="text-[11px] sm:text-xs text-slate-700 font-bold">Alumni Lulus</p>
              </div>
              <div className="bg-white/70 backdrop-blur-xs p-3 rounded-2xl border border-white/80 shadow-xs">
                <p className="text-2xl sm:text-3xl font-black text-amber-700">98.4%</p>
                <p className="text-[11px] sm:text-xs text-slate-700 font-bold">Lulus HSK 1-6</p>
              </div>
              <div className="bg-white/70 backdrop-blur-xs p-3 rounded-2xl border border-white/80 shadow-xs">
                <p className="text-2xl sm:text-3xl font-black text-sky-700">100%</p>
                <p className="text-[11px] sm:text-xs text-slate-700 font-bold">Tutor HSK 6</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Photo Showcase with Playful Badges (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Floating "Well done" Sticker */}
              <div className="absolute -top-6 right-2 sm:-right-3 z-30 bg-gradient-to-tr from-amber-400 to-yellow-300 border-3 border-white rounded-2xl px-3.5 py-1.5 shadow-xl rotate-12 flex items-center gap-1.5">
                <Star className="w-5 h-5 text-amber-700 fill-amber-500" />
                <div className="leading-tight">
                  <p className="text-[9px] font-black text-amber-950 uppercase">WELL</p>
                  <p className="text-[11px] font-black text-orange-600 uppercase tracking-wide">DONE!</p>
                </div>
              </div>

              {/* Main Photo Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 transform hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={currentSettings.heroPhotoUrl || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&auto=format&fit=crop&q=80"}
                  alt="Suasana Belajar Mandarin Interaktif di Bright Mandarin"
                  className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Photo Top Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-xs text-orange-600 text-xs font-black rounded-full shadow-md flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
                    <span>#BisaMandarin</span>
                  </span>
                </div>

                {/* Photo Bottom Caption */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="inline-block px-3 py-1 bg-orange-600 text-white text-xs font-black rounded-lg shadow-xs">
                    Kelas Interaktif & Menyenangkan
                  </span>
                  <h3 className="text-lg sm:text-xl font-black leading-snug drop-shadow-md">
                    "Dari Nol Dasar hingga Percakapan Percaya Diri dalam Hitungan Bulan!"
                  </h3>
                  <p className="text-xs text-amber-200 font-bold">
                    Bright Mandarin (明辉补习班) - Metode Cepat & Menyenangkan
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: HSK Top Tier */}
              <div className="absolute -top-5 left-2 sm:-left-5 z-20 bg-white/95 backdrop-blur-xs rounded-2xl p-3 shadow-xl border-2 border-amber-200 flex items-center gap-3 animate-float hover:scale-105 transition-all">
                <div className="w-12 h-12 rounded-xl overflow-hidden shadow-xs shrink-0 border border-purple-200/80 flex items-center justify-center bg-purple-600">
                  <Image
                    src="/icon-jaminan-kualitas-hsk6.png"
                    alt="Laoshi Min. HSK 6"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[11px] text-amber-700 font-bold">Standar Kualitas</p>
                  <p className="text-xs sm:text-sm font-black text-slate-900">Laoshi Min. HSK 6</p>
                </div>
              </div>

              {/* Floating Badge 2: Beasiswa Tiongkok */}
              <div className="absolute -bottom-5 right-2 sm:-right-3 z-20 bg-white/95 backdrop-blur-xs rounded-2xl p-3 shadow-xl border-2 border-amber-200 flex items-center gap-3 hover:scale-105 transition-all">
                <div className="w-12 h-12 flex items-center justify-center shrink-0">
                  <Image
                    src="/icon-scholarship.png"
                    alt="Beasiswa Kuliah ke China"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain drop-shadow-sm"
                  />
                </div>
                <div>
                  <p className="text-[11px] text-rose-600 font-bold">Peluang Masa Depan</p>
                  <p className="text-xs sm:text-sm font-black text-slate-900">Beasiswa Kuliah ke China</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

