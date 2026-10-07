'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Trophy } from 'lucide-react';
import { AchievementItem } from '@/lib/mockData';

interface AchievementAutoSliderProps {
  achievement: AchievementItem[];
}

// Color theme configuration inspired directly by the reference mockup
interface CardTheme {
  type: 'gold' | 'purple' | 'teal' | 'rose' | 'indigo';
  pillBg: string;
  pillText: string;
  photoBorderColor: string;
  cornerBrushColor: string;
  cornerBrushAccent: string;
  burstColor: string;
  scoreGradStart: string;
  scoreGradMid: string;
  scoreGradEnd: string;
  scoreText: string;
  scoreLabel: string;
  scoreBorderBrush: string;
}

function getTheme(item: AchievementItem, index: number): CardTheme {
  const lvl = (item.level || '').toUpperCase();

  // Pattern rotation or explicit level matching
  const mod = index % 3;

  if (lvl.includes('HSK 2') || mod === 0) {
    return {
      type: 'gold',
      pillBg: 'bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500',
      pillText: 'text-white',
      photoBorderColor: '#D97706',
      cornerBrushColor: '#EAB308',
      cornerBrushAccent: '#CA8A04',
      burstColor: 'text-amber-500',
      scoreGradStart: '#FDE047',
      scoreGradMid: '#F59E0B',
      scoreGradEnd: '#D97706',
      scoreText: 'text-slate-950',
      scoreLabel: 'text-amber-950/70',
      scoreBorderBrush: '#D97706',
    };
  }

  if (lvl.includes('HSK 3') || mod === 1) {
    return {
      type: 'purple',
      pillBg: 'bg-gradient-to-r from-indigo-500 via-purple-600 to-violet-600',
      pillText: 'text-white',
      photoBorderColor: '#7C3AED',
      cornerBrushColor: '#8B5CF6',
      cornerBrushAccent: '#6D28D9',
      burstColor: 'text-purple-500',
      scoreGradStart: '#818CF8',
      scoreGradMid: '#7C3AED',
      scoreGradEnd: '#6D28D9',
      scoreText: 'text-white',
      scoreLabel: 'text-purple-200',
      scoreBorderBrush: '#8B5CF6',
    };
  }

  // Teal / Cyan for HSK 4 & mod === 2
  return {
    type: 'teal',
    pillBg: 'bg-gradient-to-r from-teal-400 via-teal-500 to-emerald-500',
    pillText: 'text-white',
    photoBorderColor: '#0D9488',
    cornerBrushColor: '#14B8A6',
    cornerBrushAccent: '#0F766E',
    burstColor: 'text-teal-500',
    scoreGradStart: '#2DD4BF',
    scoreGradMid: '#14B8A6',
    scoreGradEnd: '#0D9488',
    scoreText: 'text-white',
    scoreLabel: 'text-teal-100',
    scoreBorderBrush: '#14B8A6',
  };
}

export default function AchievementAutoSlider({ achievement }: AchievementAutoSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(3);
  const touchStartX = useRef<number | null>(null);

  const total = achievement.length;

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setItemsVisible(1);
      } else if (window.innerWidth < 1024) {
        setItemsVisible(2);
      } else {
        setItemsVisible(3);
      }
    };
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  const maxIndex = Math.max(0, total - itemsVisible);

  // Auto-advance to the right every 4 seconds
  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative overflow-visible group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider Carousel Track */}
      <div className="overflow-hidden py-4 -mx-2 px-2">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)`,
          }}
        >
          {achievement.map((item, idx) => {
            const theme = getTheme(item, idx);

            return (
              <div
                key={item._id || idx}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 sm:px-4"
              >
                <div className="bg-white rounded-[32px] p-5 sm:p-6 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full group/card hover:-translate-y-1.5 relative overflow-hidden border border-slate-100 select-none">
                  
                  {/* 1. TOP-LEFT ARTISTIC BRUSH STROKE ACCENT */}
                  <svg
                    className="absolute -top-1 -left-1 w-28 h-20 pointer-events-none z-10"
                    viewBox="0 0 120 80"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 42 C6 26, 15 13, 30 7 C48 1, 76 3, 102 4 C84 6, 52 8, 35 14 C20 20, 11 32, 9 46 C7 56, 5 66, 4 72 C3 62, 3 52, 4 42 Z"
                      fill={theme.cornerBrushColor}
                      opacity="0.85"
                    />
                    <path
                      d="M12 24 C16 16, 24 10, 38 7 C52 4, 78 5, 90 4 C74 6, 50 8, 38 12 C26 16, 18 22, 14 30 Z"
                      fill={theme.cornerBrushAccent}
                      opacity="0.7"
                    />
                    {/* Small dry brush wisps */}
                    <path
                      d="M6 35 L2 38 M18 12 L15 8 M45 4 L48 1"
                      stroke={theme.cornerBrushColor}
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* 2. BOTTOM CORNER DRY BRUSH STROKES ACCENT */}
                  <svg
                    className="absolute -bottom-1 -left-1 -right-1 w-[calc(100%+8px)] h-12 pointer-events-none z-10"
                    viewBox="0 0 360 48"
                    preserveAspectRatio="none"
                    fill="none"
                    aria-hidden="true"
                  >
                    {/* Sweeping dry brush stroke across bottom edge */}
                    <path
                      d="M4 36 C45 44, 95 42, 145 40 C195 38, 255 42, 315 44 C338 45, 350 42, 356 37 C338 40, 288 39, 228 37 C168 35, 108 36, 58 38 C24 40, 9 38, 4 36 Z"
                      fill={theme.cornerBrushColor}
                      opacity="0.85"
                    />
                    {/* Left bristled ends */}
                    <path
                      d="M6 30 C22 36, 50 41, 80 41 C54 40, 28 37, 12 33 Z"
                      fill={theme.cornerBrushAccent}
                      opacity="0.75"
                    />
                    {/* Right bristled ends */}
                    <path
                      d="M260 41 C295 43, 330 40, 354 33 C340 37, 310 40, 280 40 Z"
                      fill={theme.cornerBrushAccent}
                      opacity="0.75"
                    />
                    {/* Dry splatters */}
                    <path
                      d="M2 30 L0 32 M358 32 L360 30"
                      stroke={theme.cornerBrushColor}
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* 3. GAMBAR MURID DENGAN INK BRUSH BORDER & BADGE HSK */}
                  <div className="relative aspect-[16/10] sm:aspect-[4/2.6] rounded-[22px] overflow-hidden bg-slate-900 group-hover/card:shadow-md transition-shadow">
                    <img
                      src={
                        item.fotoUrl ||
                        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80'
                      }
                      alt={item.nama}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                    />

                    {/* Ink Brush Frame Overlay with Rough Calligraphic Bristles */}
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      viewBox="0 0 320 200"
                      preserveAspectRatio="none"
                      fill="none"
                      aria-hidden="true"
                    >
                      {/* Top brush stroke */}
                      <path
                        d="M6 8 C60 5, 140 4, 220 5 C270 6, 305 8, 314 11 C280 8, 200 7, 120 7 C50 8, 18 10, 6 8 Z"
                        fill={theme.photoBorderColor}
                        opacity="0.9"
                      />
                      {/* Right dry brush bristles */}
                      <path
                        d="M312 8 C315 45, 314 95, 315 145 C316 175, 313 192, 310 196 C312 170, 313 120, 312 70 C311 35, 311 18, 312 8 Z"
                        fill={theme.photoBorderColor}
                        opacity="0.9"
                      />
                      {/* Right bristle wisps */}
                      <path
                        d="M313 35 L317 38 M314 65 L318 67 M313 105 L318 108 M314 135 L317 137"
                        stroke={theme.photoBorderColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      {/* Bottom brush stroke */}
                      <path
                        d="M8 194 C65 192, 145 194, 225 193 C275 192, 305 195, 314 196 C275 194, 195 195, 115 194 C55 195, 20 193, 8 194 Z"
                        fill={theme.photoBorderColor}
                        opacity="0.9"
                      />
                      {/* Left brush stroke */}
                      <path
                        d="M8 10 C6 45, 7 95, 6 145 C5 175, 7 190, 9 194 C7 170, 6 120, 7 70 C8 35, 7 20, 8 10 Z"
                        fill={theme.photoBorderColor}
                        opacity="0.9"
                      />
                    </svg>

                    {/* Top-Left HSK Trophy Pill Badge */}
                    <div className="absolute top-3 left-3 z-20">
                      <div
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full ${theme.pillBg} ${theme.pillText} text-xs font-black shadow-md border border-white/40 tracking-wide`}
                      >
                        <Trophy className="w-3.5 h-3.5 text-white drop-shadow-xs" />
                        <span>{item.level}</span>
                      </div>
                    </div>

                    {/* Decorative Corner Dashes on Photo */}
                    <div className="absolute top-2.5 right-3 pointer-events-none opacity-80">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={theme.burstColor}>
                        <path d="M4 6L8 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M10 4L11 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M15 7L13 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>

                  {/* 4. INFORMASI MURID (NAMA & PROGRAM KELAS) */}
                  <div className="mt-4 mb-4">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      {item.nama}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                      {item.keterangan || 'Bright Mandarin Student'}
                    </p>
                  </div>

                  {/* 5. TEST SCORE OVAL BADGE ALA MOCKUP */}
                  <div className="mt-auto pt-2 pb-1 flex items-center justify-center gap-2 sm:gap-3">
                    {/* Radiating Burst Dashes Kiri */}
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      className={`${theme.burstColor} shrink-0`}
                      aria-hidden="true"
                    >
                      <path d="M14 5L7 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M13 11L6 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M14 17L7 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>

                    {/* Brush Stroke Oval Container */}
                    <div className="relative inline-flex flex-col items-center justify-center px-8 sm:px-10 py-2 sm:py-2.5 min-w-[165px] sm:min-w-[185px]">
                      {/* Background Brush Oval SVG */}
                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-sm"
                        viewBox="0 0 200 64"
                        preserveAspectRatio="none"
                        fill="none"
                        aria-hidden="true"
                      >
                        <defs>
                          <linearGradient
                            id={`grad-oval-${idx}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor={theme.scoreGradStart} />
                            <stop offset="50%" stopColor={theme.scoreGradMid} />
                            <stop offset="100%" stopColor={theme.scoreGradEnd} />
                          </linearGradient>
                        </defs>

                        {/* Main filled organic brush oval */}
                        <path
                          d="M30 10 C70 4, 130 4, 170 10 C194 15, 198 32, 190 44 C175 58, 125 60, 75 60 C35 60, 8 56, 10 40 C12 24, 18 12, 30 10 Z"
                          fill={`url(#grad-oval-${idx})`}
                        />

                        {/* Painterly brush outline stroke around oval */}
                        <path
                          d="M24 12 C65 5, 135 5, 176 12 C196 17, 199 35, 188 47 C168 59, 120 62, 70 61 C30 60, 6 56, 8 38 C10 22, 16 14, 24 12"
                          stroke={theme.scoreBorderBrush}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          opacity="0.8"
                        />

                        {/* Little dry brush stroke wisps on top & bottom */}
                        <path
                          d="M40 8 C80 3, 140 4, 175 9"
                          stroke={theme.scoreBorderBrush}
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          opacity="0.6"
                        />
                        <path
                          d="M35 57 C75 61, 135 62, 170 57"
                          stroke={theme.scoreBorderBrush}
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          opacity="0.6"
                        />
                      </svg>

                      {/* Text Contents: TEST SCORE & Nilai */}
                      <span
                        className={`relative z-10 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em] ${theme.scoreLabel}`}
                      >
                        TEST SCORE
                      </span>
                      <span
                        className={`relative z-10 text-2xl sm:text-[28px] font-black tracking-tight leading-none mt-0.5 ${theme.scoreText} drop-shadow-xs`}
                      >
                        {item.skor}
                      </span>
                    </div>

                    {/* Radiating Burst Dashes Kanan */}
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      className={`${theme.burstColor} shrink-0`}
                      aria-hidden="true"
                    >
                      <path d="M8 5L15 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M9 11L16 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M8 17L15 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      {maxIndex > 0 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:-left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-slate-800 border-2 border-amber-300 shadow-xl flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 z-20 cursor-pointer"
            aria-label="Previous Achievement Slide"
          >
            <ChevronLeft className="w-6 h-6 text-orange-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 sm:-right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-slate-800 border-2 border-amber-300 shadow-xl flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 z-20 cursor-pointer"
            aria-label="Next Achievement Slide"
          >
            <ChevronRight className="w-6 h-6 text-orange-600" />
          </button>
        </>
      )}

      {/* Indicator Pagination Dots */}
      {maxIndex > 0 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? 'w-8 bg-orange-600 shadow-xs'
                  : 'w-2 bg-amber-300 hover:bg-amber-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
