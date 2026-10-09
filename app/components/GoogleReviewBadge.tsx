import React from 'react';
import { Star } from 'lucide-react';

export function GoogleLogo({ className = "w-5 h-5" }: { className?: string }) {
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

interface GoogleReviewBadgeProps {
  variant?: 'floating' | 'banner';
  className?: string;
  url?: string;
}

export default function GoogleReviewBadge({
  variant = 'banner',
  className = '',
  url = 'https://share.google/h4ySU4mqKW4a712F3',
}: GoogleReviewBadgeProps) {
  if (variant === 'floating') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-white/95 backdrop-blur-md border-2 sm:border-[2.5px] border-white rounded-2xl px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group text-left cursor-pointer ${className}`}
        title="Lihat ulasan Bright Mandarin Course di Google Reviews"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 shadow-xs flex items-center justify-center shrink-0">
            <GoogleLogo className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="font-bold text-slate-900 text-xs sm:text-sm tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                Bright Mandarin Course
              </span>
              <div className="text-slate-400 flex flex-col gap-0.5 shrink-0 px-0.5">
                <span className="w-0.5 h-0.5 rounded-full bg-slate-400" />
                <span className="w-0.5 h-0.5 rounded-full bg-slate-400" />
                <span className="w-0.5 h-0.5 rounded-full bg-slate-400" />
              </div>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="font-bold text-slate-900 text-xs leading-none">4,9</span>
              <div className="flex items-center gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[11px] text-blue-600 font-semibold underline underline-offset-1 hover:text-blue-700">
                20 Google reviews
              </span>
            </div>
            <p className="text-[10px] text-slate-500 font-medium leading-none mt-0.5">
              Language school in North Jakarta
            </p>
          </div>
        </div>
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3.5 sm:gap-4 bg-white hover:bg-slate-50/90 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl border-2 border-amber-200/90 hover:border-amber-400 shadow-md hover:shadow-xl transition-all duration-300 group text-left max-w-full ${className}`}
      title="Lihat ulasan Bright Mandarin Course di Google Reviews"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center shrink-0">
        <GoogleLogo className="w-6 h-6 sm:w-7 sm:h-7" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          <span className="font-extrabold text-slate-900 text-sm sm:text-base tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
            Bright Mandarin Course
          </span>
          <div className="text-slate-400 flex flex-col gap-0.5 shrink-0 px-1">
            <span className="w-1 h-1 rounded-full bg-slate-400" />
            <span className="w-1 h-1 rounded-full bg-slate-400" />
            <span className="w-1 h-1 rounded-full bg-slate-400" />
          </div>
        </div>

        <div className="flex items-center flex-wrap gap-1.5 mt-0.5 text-xs sm:text-sm">
          <span className="font-bold text-slate-900">4,9</span>
          <div className="flex items-center gap-0.5 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-blue-600 font-semibold underline underline-offset-2 hover:text-blue-700">
            20 Google reviews
          </span>
        </div>

        <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-none mt-1">
          Language school in North Jakarta
        </p>
      </div>
    </a>
  );
}
