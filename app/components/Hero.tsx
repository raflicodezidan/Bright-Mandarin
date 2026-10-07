import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, GraduationCap, Star } from 'lucide-react';
import { mockSiteSettings, SiteSettings } from '@/lib/sanity';

export default function Hero({ settings }: { settings?: SiteSettings }) {
  const currentSettings = settings || mockSiteSettings;
  return (
    <section className="relative overflow-hidden w-full max-w-full bg-amber-400 pt-6 pb-12 lg:pt-8 lg:pb-14 border-b-4 border-amber-600/30">
      {/* Traditional Chinese Hero Background Image (Customizable via Sanity) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={currentSettings.heroBgImageUrl || "/hero-chinese-bg.png"}
          alt="Bright Mandarin Oriental Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center select-none pointer-events-none"
        />
        {/* Soft atmospheric gradient overlay for balanced text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-300/20 via-transparent to-amber-400/15 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start lg:items-center">
          {/* Left Column: Headlines & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 text-center lg:text-left">

            {/* Playful Responsive Pill Badge with Lively Motion */}
            <div className="flex justify-center lg:justify-start px-1">
              <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-xl sm:rounded-full bg-white text-slate-800 text-xs sm:text-sm font-black shadow-md border-2 border-white/90 animate-wiggle hover:scale-105 transition-all duration-200 cursor-default max-w-full text-center">
                <span className="text-orange-600 font-extrabold tracking-wide shrink-0">#BRIGHTMANDARIN</span>
                <span className="text-sky-600 font-bold leading-tight">{currentSettings.heroBadgeText || 'Kursus Mandarin Paling Seru & Terbukti!'}</span>
              </div>
            </div>

            {/* Main Headline with Hierarchy & Color Pop */}
            <div className="space-y-2">
              {/* Primary Title (Enlarged, Bold Navy) */}
              <h1 className="text-3xl sm:text-4xl lg:text-[3.15rem] font-black text-slate-900 tracking-tight leading-[1.12] drop-shadow-xs">
                {currentSettings.heroHeadlineMain === 'Bicara Mandarin Lancar & Raih' ? (
                  <>
                    Kursus Mandarin No. 1<br />
                    di Kelapa Gading
                  </>
                ) : currentSettings.heroHeadlineMain?.includes('Kelapa Gading') ? (
                  <>
                    {currentSettings.heroHeadlineMain.replace(/\s*di\s*Kelapa\s*Gading/i, '')}<br />
                    di Kelapa Gading
                  </>
                ) : currentSettings.heroHeadlineMain ? (
                  currentSettings.heroHeadlineMain
                ) : (
                  <>
                    Kursus Mandarin No. 1<br />
                    di Kelapa Gading
                  </>
                )}
              </h1>

              {/* Secondary Highlight Sub-title (Smaller, Vibrant Red with Squiggle Underline) */}
              <div className="text-xl sm:text-2xl lg:text-[1.85rem] font-black text-red-600 tracking-tight leading-tight">
                {currentSettings.heroHeadlineHighlight && currentSettings.heroHeadlineHighlight !== 'Beasiswa ke Tiongkok' ? (
                  currentSettings.heroHeadlineHighlight.includes('Tiongkok') ? (
                    <>
                      {currentSettings.heroHeadlineHighlight.includes(',') ? (
                        <>
                          {currentSettings.heroHeadlineHighlight.split(',')[0]},<br />
                          {currentSettings.heroHeadlineHighlight.split(',')[1]?.replace(/Tiongkok!?/i, '').trim()}{' '}
                        </>
                      ) : (
                        <>
                          {currentSettings.heroHeadlineHighlight.replace(/Tiongkok!?/i, '').trim()}{' '}
                        </>
                      )}
                      <span className="relative inline-block">
                        Tiongkok!
                        <svg
                          className="absolute -bottom-1.5 left-0 w-full h-3 text-red-500"
                          viewBox="0 0 100 12"
                          preserveAspectRatio="none"
                          fill="none"
                        >
                          <path
                            d="M2 7C30 2 65 10 98 4"
                            stroke="currentColor"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </>
                  ) : (
                    currentSettings.heroHeadlineHighlight
                  )
                ) : (
                  <>
                    Kuasai Mandarin,<br />
                    Buka Peluang ke{' '}
                    <span className="relative inline-block">
                      Tiongkok!
                      <svg
                        className="absolute -bottom-1.5 left-0 w-full h-3 text-red-500"
                        viewBox="0 0 100 12"
                        preserveAspectRatio="none"
                        fill="none"
                      >
                        <path
                          d="M2 7C30 2 65 10 98 4"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Sub-headline */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-800 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 bg-white/40 backdrop-blur-xs p-3 sm:p-3.5 rounded-xl border border-white/60 shadow-xs">
              {currentSettings.heroSubheadline || 'Belajar bahasa Mandarin dengan metode akselerasi interaktif 3 - 4 bulan. Dibimbing langsung oleh para Laoshi ceria bersertifikasi HSK 6 dari universitas top Tiongkok!'}
            </p>

            {/* Call to Action */}
            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <Link
                href="/program"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border-2 sm:border-[2.5px] border-black font-black text-sm sm:text-base px-6 py-3 sm:py-3.5 rounded-full shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span>{currentSettings.heroSecondaryCtaText || 'Lihat Program Kelas'}</span>
                <ArrowRight className="w-4 h-4 text-slate-900 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Social Proof Numbers in Cute Cards */}
            <div className="pt-1.5 sm:pt-2 grid grid-cols-2 gap-2 sm:gap-2.5 text-center max-w-sm mx-auto lg:mx-0">
              <div className="bg-white/70 backdrop-blur-xs p-2 sm:p-2.5 rounded-xl border border-white/80 shadow-xs">
                <p className="text-xl sm:text-2xl font-black text-rose-600">{currentSettings.heroCard1Number || '5.000+'}</p>
                <p className="text-[10px] sm:text-[11px] text-slate-700 font-bold">{currentSettings.heroCard1Text || 'Alumni Lulus'}</p>
              </div>
              <div className="bg-white/70 backdrop-blur-xs p-2 sm:p-2.5 rounded-xl border border-white/80 shadow-xs">
                <p className="text-xl sm:text-2xl font-black text-amber-700">{currentSettings.heroCard2Number || '98.4%'}</p>
                <p className="text-[10px] sm:text-[11px] text-slate-700 font-bold">{currentSettings.heroCard2Text || 'Lulus HSK 1-6'}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Photo Showcase with Asymmetrical Curved Corners (5 cols) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Floating Top Badge: Laoshi Bersertifikasi HSK 6 */}
              <div className="absolute -top-5 sm:-top-7 right-2 sm:right-4 z-20 bg-white/95 backdrop-blur-xs rounded-full py-2 px-4 sm:px-5 shadow-xl border-2 border-white flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-md">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="leading-tight text-left">
                  <p className="text-[11px] sm:text-xs font-bold text-blue-600">Laoshi Bersertifikasi</p>
                  <p className="text-base sm:text-lg font-black text-blue-600 tracking-tight">HSK 6</p>
                </div>
              </div>

              {/* Main Photo Container with Asymmetrical Curved Corners and Thick White Border */}
              <div className="relative overflow-hidden border-[6px] sm:border-[8px] border-white shadow-2xl bg-white rounded-tl-[65px] sm:rounded-tl-[85px] lg:rounded-tl-[95px] rounded-tr-[30px] sm:rounded-tr-[40px] rounded-bl-[30px] sm:rounded-bl-[40px] rounded-br-[65px] sm:rounded-br-[85px] lg:rounded-br-[95px]">
                <div className="relative w-full h-[330px] sm:h-[370px] lg:h-[390px]">
                  <Image
                    src={currentSettings.heroPhotoUrl || "/hero-classroom.jpg"}
                    alt="Suasana Belajar Mandarin Interaktif di Bright Mandarin"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />

                  {/* Chinese Calligraphy Doodle Overlay inside Photo: 你好 Nǐ hǎo */}
                  <div className="absolute top-5 right-5 z-10 select-none pointer-events-none drop-shadow-sm bg-white/45 backdrop-blur-xs rounded-2xl px-3 py-1.5 border border-white/60">
                    <div className="flex items-center gap-2">
                      <div className="text-center font-bold text-slate-800">
                        <div className="text-2xl sm:text-3xl font-extrabold tracking-wider leading-none">
                          你好
                        </div>
                        <div className="text-[11px] sm:text-xs font-semibold text-slate-700 mt-0.5">
                          Nǐ hǎo
                        </div>
                      </div>
                      {/* Sunburst Accent doodle rays */}
                      <div className="flex flex-col gap-1 text-amber-500">
                        <span className="w-3.5 h-1 bg-amber-400 rounded-full rotate-[20deg]" />
                        <span className="w-4 h-1 bg-amber-400 rounded-full rotate-[5deg]" />
                        <span className="w-3.5 h-1 bg-amber-400 rounded-full -rotate-[15deg]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Bottom Badge: Kelas Interaktif & Menyenangkan */}
              <div className="absolute -bottom-4 sm:-bottom-5 -right-2 sm:right-2 z-20 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-900 border-2 sm:border-3 border-white rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-xl flex items-center gap-2.5 -rotate-2 hover:rotate-0 transition-transform">
                <Star className="w-5 h-5 text-slate-900 fill-slate-900 shrink-0" />
                <span className="text-xs sm:text-sm font-black text-slate-900 tracking-tight whitespace-nowrap">
                  Kelas Interaktif & Menyenangkan
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

