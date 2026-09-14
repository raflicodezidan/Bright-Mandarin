'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Heart, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { mockSiteSettings } from '@/lib/mockData';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface InstagramFeedProps {
  widgetEmbedHtml?: string;
}

export default function InstagramFeed({ widgetEmbedHtml }: InstagramFeedProps) {
  const samplePosts = [
    {
      img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=80',
      caption: 'Keseruan kelas Kids Mandarin hari ini. Belajar pinyin dengan flashcard karakter dan metode interaktif.',
      likes: '142',
      comments: '18',
    },
    {
      img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=80',
      caption: 'Tips menghafal 300 kosakata HSK 3 dalam 2 minggu secara terstruktur dan tahan lama.',
      likes: '289',
      comments: '43',
    },
    {
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80',
      caption: 'Selamat kepada murid kami Steven yang berhasil meraih beasiswa S2 ke Shanghai Jiao Tong University.',
      likes: '512',
      comments: '77',
    },
    {
      img: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&auto=format&fit=crop&q=80',
      caption: 'Workshop seni kaligrafi kuas tradisional Tiongkok (Shufa) bersama Laoshi di center Kelapa Gading.',
      likes: '198',
      comments: '24',
    },
    {
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80',
      caption: 'Kelas Corporate Business Mandarin: Simulasi negosiasi bisnis dan etika transaksi supplier China.',
      likes: '345',
      comments: '36',
    },
    {
      img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop&q=80',
      caption: 'Suasana speaking club Mandarin: Latihan pelafalan 4 nada (tones) dan percakapan kontekstual.',
      likes: '267',
      comments: '29',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(4);
  const touchStartX = useRef<number | null>(null);

  const total = samplePosts.length;

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setItemsVisible(1);
      } else if (window.innerWidth < 1024) {
        setItemsVisible(2);
      } else {
        setItemsVisible(4);
      }
    };
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  const maxIndex = Math.max(0, total - itemsVisible);

  // Auto scroll to right every 3.5s
  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

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

  if (widgetEmbedHtml) {
    return (
      <section className="py-16 bg-brand-cream/40 border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red bg-brand-red-light px-3 py-1 rounded-full border border-brand-red/20">
              Instagram @brightmandarin
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal">
              Aktivitas & Tips Harian di Media Sosial
            </h2>
          </div>
          <div dangerouslySetInnerHTML={{ __html: widgetEmbedHtml }} />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-amber-100/50 border-b border-amber-300/70">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
            MEDIA SOSIAL & EDUKASI
          </h2>
          <p className="text-lg sm:text-xl font-bold text-orange-600 mt-2 mb-3">
            Ikuti Aktivitas & Tips Belajar di Instagram @brightmandarin
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto my-3" />
          <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed mb-6">
            Dapatkan edukasi kosakata harian, tips lolos ujian HSK, serta update peluang beasiswa kuliah ke China.
          </p>
          <div>
            <a
              href={mockSiteSettings.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow @brightmandarin</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden py-3">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)`,
              }}
            >
              {samplePosts.map((post, idx) => (
                <div
                  key={idx}
                  className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
                >
                  <a
                    href={mockSiteSettings.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/card relative block rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-2xl transition-all duration-300 bg-slate-900 border-2 border-amber-200 hover:border-amber-400 hover:-translate-y-1.5"
                  >
                    <img
                      src={post.img}
                      alt="Instagram Bright Mandarin"
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500 opacity-95 group-hover/card:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between text-white">
                      <div className="flex justify-end">
                        <InstagramIcon className="w-5 h-5 text-white/80" />
                      </div>
                      <div>
                        <p className="text-xs line-clamp-3 leading-snug mb-3 font-medium">
                          {post.caption}
                        </p>
                        <div className="flex items-center gap-4 text-xs font-bold text-white/90">
                          <span className="flex items-center gap-1">
                            <Heart className="w-3.5 h-3.5 fill-current text-rose-500" />
                            {post.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageSquare className="w-3.5 h-3.5" />
                            {post.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 border-2 border-amber-300 shadow-xl flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 z-20"
            aria-label="Previous Instagram Post"
          >
            <ChevronLeft className="w-6 h-6 text-orange-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 border-2 border-amber-300 shadow-xl flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 z-20"
            aria-label="Next Instagram Post"
          >
            <ChevronRight className="w-6 h-6 text-orange-600" />
          </button>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-8 bg-orange-600'
                    : 'w-2 bg-amber-300 hover:bg-amber-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

