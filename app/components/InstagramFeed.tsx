'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { mockSiteSettings, SiteSettings } from '@/lib/sanity';

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
  settings?: SiteSettings;
}

export default function InstagramFeed({ widgetEmbedHtml, settings }: InstagramFeedProps) {
  const currentSettings = settings || mockSiteSettings;
  const samplePosts = [
    {
      img: '/instagram/post-1.jpg',
      link: currentSettings.instagramUrl || mockSiteSettings.instagramUrl || 'https://instagram.com/bright_mandarin',
    },
    {
      img: '/instagram/post-2.png',
      link: currentSettings.instagramUrl || mockSiteSettings.instagramUrl || 'https://instagram.com/bright_mandarin',
    },
    {
      img: '/instagram/post-3.jpg',
      link: currentSettings.instagramUrl || mockSiteSettings.instagramUrl || 'https://instagram.com/bright_mandarin',
    },
    {
      img: '/instagram/post-4.png',
      link: currentSettings.instagramUrl || mockSiteSettings.instagramUrl || 'https://instagram.com/bright_mandarin',
    },
  ];

  // Gunakan postingan dari Sanity Studio jika sudah diupload oleh admin
  const displayPosts = (currentSettings.instagramPosts && currentSettings.instagramPosts.length > 0)
    ? currentSettings.instagramPosts.map((p, idx) => ({
        img: p.gambarUrl || samplePosts[idx % samplePosts.length].img,
        link: p.linkPost || currentSettings.instagramUrl || mockSiteSettings.instagramUrl || 'https://instagram.com/bright_mandarin',
      }))
    : samplePosts;

  const activeEmbedHtml = widgetEmbedHtml || currentSettings.instagramEmbedWidget;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(4);
  const touchStartX = useRef<number | null>(null);

  const total = displayPosts.length;
  const isCarousel = total > 4;

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

  // Auto scroll to right every 3.5s if carousel is needed
  useEffect(() => {
    if (!isCarousel || isPaused || maxIndex <= 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, [isCarousel, isPaused, maxIndex]);

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

  if (activeEmbedHtml) {
    return (
      <section className="py-20 bg-amber-100/50 border-b border-amber-300/70">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
              {currentSettings.socialSectionTitle || 'MEDIA SOSIAL KAMI'}
            </h2>
            <p className="text-lg sm:text-xl font-bold text-orange-600">
              {currentSettings.socialSectionSubtitle || 'Ikuti Aktivitas & Tips Belajar di Instagram @brightmandarin'}
            </p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: activeEmbedHtml }} />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-amber-100/50 border-b border-amber-300/70">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
            {currentSettings.socialSectionTitle || 'MEDIA SOSIAL KAMI'}
          </h2>
          <p className="text-lg sm:text-xl font-bold text-orange-600 mt-2 mb-3">
            {currentSettings.socialSectionSubtitle || 'Ikuti Aktivitas & Tips Belajar di Instagram @brightmandarin'}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto my-3" />
          <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed mb-6">
            {currentSettings.socialSectionDesc || 'Dapatkan edukasi kosakata harian, tips lolos ujian HSK, serta update peluang beasiswa kuliah ke China.'}
          </p>
          <div>
            <a
              href={currentSettings.instagramUrl || mockSiteSettings.instagramUrl || 'https://instagram.com/bright_mandarin'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow {currentSettings.instagramHandle || '@brightmandarin'}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Posts Container */}
        {!isCarousel ? (
          /* Direct 4-item Responsive Grid */
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {displayPosts.map((post, idx) => (
              <a
                key={idx}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/card relative block rounded-2xl overflow-hidden aspect-[4/5] shadow-md hover:shadow-2xl transition-all duration-300 bg-slate-900 border-2 border-amber-200/80 hover:border-amber-400 hover:-translate-y-1.5"
              >
                <img
                  src={post.img}
                  alt={`Instagram Post Bright Mandarin ${idx + 1}`}
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500 opacity-95 group-hover/card:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 p-4 sm:p-5 flex flex-col justify-between items-center text-white">
                  <div className="w-full flex justify-end">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-sm">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-pink-600 to-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg hover:scale-105 transition-transform">
                      <InstagramIcon className="w-3.5 h-3.5" />
                      <span>Buka di Instagram</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                  <div className="w-full" />
                </div>
              </a>
            ))}
          </div>
        ) : (
          /* Carousel Container for >4 items */
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
                {displayPosts.map((post, idx) => (
                  <div
                    key={idx}
                    className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
                  >
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/card relative block rounded-2xl overflow-hidden aspect-[4/5] shadow-sm hover:shadow-2xl transition-all duration-300 bg-slate-900 border-2 border-amber-200 hover:border-amber-400 hover:-translate-y-1.5"
                    >
                      <img
                        src={post.img}
                        alt={`Instagram Post Bright Mandarin ${idx + 1}`}
                        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500 opacity-95 group-hover/card:opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 p-4 sm:p-5 flex flex-col justify-between items-center text-white">
                        <div className="w-full flex justify-end">
                          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-sm">
                            <InstagramIcon className="w-4 h-4" />
                          </div>
                        </div>
                        <div className="text-center">
                          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-pink-600 to-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                            <InstagramIcon className="w-3.5 h-3.5" />
                            <span>Buka di Instagram</span>
                            <ExternalLink className="w-3 h-3" />
                          </span>
                        </div>
                        <div className="w-full" />
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
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                    ? 'w-8 bg-orange-600'
                    : 'w-2 bg-amber-300 hover:bg-amber-400'
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

