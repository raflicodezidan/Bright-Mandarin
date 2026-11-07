import React from 'react';
import { Star, MapPin } from 'lucide-react';

export function GoogleLogo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

// 5-Petal Chinese Blossom Flower matching reference image
function BlossomFlower({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      {/* 5 rounded petals */}
      <circle cx="12" cy="6.2" r="3.6" />
      <circle cx="17.5" cy="10.2" r="3.6" />
      <circle cx="15.4" cy="16.6" r="3.6" />
      <circle cx="8.6" cy="16.6" r="3.6" />
      <circle cx="6.5" cy="10.2" r="3.6" />
      {/* Center pistil & stamen accents */}
      <circle cx="12" cy="12" r="2.2" className="fill-amber-400" />
      <circle cx="12" cy="12" r="1.1" className="fill-amber-600" />
      <circle cx="12" cy="8.8" r="0.5" className="fill-amber-700" />
      <circle cx="14.8" cy="11" r="0.5" className="fill-amber-700" />
      <circle cx="13.7" cy="14.4" r="0.5" className="fill-amber-700" />
      <circle cx="10.3" cy="14.4" r="0.5" className="fill-amber-700" />
      <circle cx="9.2" cy="11" r="0.5" className="fill-amber-700" />
    </svg>
  );
}

// Sparkle rays radiating from top-left of the Google icon
function SparkleRays({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      {/* Ray 1: Left */}
      <rect
        x="1"
        y="12"
        width="5"
        height="2.5"
        rx="1.25"
        className="fill-amber-400"
        transform="rotate(-15 3.5 13.25)"
      />
      {/* Ray 2: Top-left diagonal */}
      <rect
        x="3.5"
        y="4.5"
        width="5"
        height="2.5"
        rx="1.25"
        className="fill-amber-400"
        transform="rotate(-55 6 5.75)"
      />
      {/* Ray 3: Top */}
      <rect
        x="10.5"
        y="1.5"
        width="2.5"
        height="5"
        rx="1.25"
        className="fill-amber-400"
        transform="rotate(10 11.75 4)"
      />
    </svg>
  );
}

interface GoogleReviewBadgeProps {
  variant?: 'hero' | 'banner';
  className?: string;
  url?: string;
}

export default function GoogleReviewBadge({
  variant = 'banner',
  className = '',
  url = 'https://share.google/h4ySU4mqKW4a712F3',
}: GoogleReviewBadgeProps) {
  const isHero = variant === 'hero';

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative overflow-hidden inline-flex items-center gap-3.5 sm:gap-4.5 bg-white hover:bg-amber-50/15 border-2 sm:border-[2.5px] border-amber-300 rounded-[24px] sm:rounded-[28px] ${
        isHero
          ? 'px-3.5 py-3 sm:px-4.5 sm:py-3.5'
          : 'px-5 py-3.5 sm:px-6 sm:py-4'
      } shadow-[0_8px_25px_rgba(245,158,11,0.18)] hover:shadow-[0_12px_32px_rgba(245,158,11,0.26)] transition-all duration-300 group text-left cursor-pointer max-w-full ${className}`}
      title="Buka ulasan Bright Mandarin Course di Google"
    >
      {/* Corner Waves in the bottom right corner */}
      <div className="absolute right-0 bottom-0 top-0 w-24 sm:w-32 pointer-events-none overflow-hidden rounded-r-[22px] sm:rounded-r-[26px]">
        <svg
          className="w-full h-full"
          viewBox="0 0 120 90"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="waveSoft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id="waveWarm" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>

          {/* Background translucent wave */}
          <path
            d="M20 90 Q 55 60, 75 35 T 120 10 L 120 90 Z"
            fill="url(#waveSoft)"
          />

          {/* Foreground rich warm amber wave */}
          <path
            d="M45 90 Q 72 72, 92 48 T 120 28 L 120 90 Z"
            fill="url(#waveWarm)"
          />
        </svg>
      </div>

      {/* Blossom Flower in bottom-right wave corner */}
      <div className="absolute right-2.5 bottom-2.5 sm:right-3.5 sm:bottom-3 z-10 text-amber-100 pointer-events-none drop-shadow-xs">
        <BlossomFlower className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>

      {/* Left Icon with Sparkles */}
      <div className="relative shrink-0 z-10">
        {/* Top-left radiating sparkle rays */}
        <div className="absolute -top-2.5 -left-2.5 pointer-events-none select-none z-10">
          <SparkleRays className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>

        {/* White rounded container for Google Logo with soft shadow */}
        <div className={`${
          isHero ? 'w-12 h-12 sm:w-14 sm:h-14' : 'w-13 h-13 sm:w-16 sm:h-16'
        } rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center justify-center`}>
          <GoogleLogo className={isHero ? "w-6 h-6 sm:w-7 sm:h-7" : "w-7 h-7 sm:w-8 sm:h-8"} />
        </div>
      </div>

      {/* Text & Rating content */}
      <div className="min-w-0 pr-6 sm:pr-8 z-10">
        {/* Course Title */}
        <h3 className={`font-black text-[#1A2E40] ${
          isHero ? 'text-sm sm:text-base lg:text-lg' : 'text-base sm:text-lg lg:text-xl'
        } tracking-tight leading-tight group-hover:text-blue-700 transition-colors truncate`}>
          Bright Mandarin Course
        </h3>

        {/* Rating Pill: 4,9 | ★★★★★ */}
        <div className="mt-1 sm:mt-1.5 inline-flex items-center gap-1.5 sm:gap-2 bg-[#FFF9EA] border border-amber-200/80 rounded-full px-2.5 py-0.5 sm:px-3 sm:py-0.5 shadow-2xs">
          <span className="font-black text-slate-900 text-xs sm:text-sm leading-none">
            4,9
          </span>
          <span className="w-px h-3 bg-amber-200" />
          <div className="flex items-center gap-0.5 text-[#FFB800]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#FFB800] text-[#FFB800]" />
            ))}
          </div>
        </div>

        {/* Location Subtitle */}
        <div className="flex items-center gap-1.5 text-slate-500 font-medium text-[11px] sm:text-xs mt-1 sm:mt-1.5">
          <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
          <span className="truncate">Language school in North Jakarta</span>
        </div>
      </div>
    </a>
  );
}
