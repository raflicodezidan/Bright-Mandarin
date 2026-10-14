'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Trophy, GraduationCap } from 'lucide-react';
import { AchievementItem } from '@/lib/mockData';

interface AchievementAutoSliderProps {
  achievement: AchievementItem[];
  badgeType?: 'hsk' | 'examSchool';
}

export default function AchievementAutoSlider({ achievement, badgeType = 'hsk' }: AchievementAutoSliderProps) {
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
            return (
              <div
                key={item._id || idx}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 sm:px-4"
              >
                {/* Formal Basic Box Card */}
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full border border-slate-200 group/card select-none">
                  {/* Foto Murid dengan HSK Badge Oranye */}
                  <div className="relative aspect-[3/4] rounded-lg sm:rounded-xl overflow-hidden bg-slate-100">
                    <img
                      src={
                        item.fotoUrl ||
                        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80'
                      }
                      alt={item.keterangan || item.level || 'Achievement Murid Bright Mandarin'}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                    />

                    {/* Badge - Formal & Satu Warna Oranye Sesuai Tema */}
                    <div className="absolute top-3 left-3 z-10">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 text-white text-sm font-black shadow-lg tracking-wide">
                        {badgeType === 'examSchool' ? (
                          <GraduationCap className="w-5 h-5 text-white flex-shrink-0" />
                        ) : (
                          <Trophy className="w-5 h-5 text-white flex-shrink-0" />
                        )}
                        <span className="text-sm font-black leading-none">{item.level}</span>
                      </div>
                    </div>
                  </div>

                  {/* Keterangan Kelas / Program Murid */}
                  <div className="mt-3.5 text-center">
                    <p className="text-sm sm:text-base font-semibold text-slate-800 tracking-tight">
                      {item.keterangan || item.level || 'Bright Mandarin Student'}
                    </p>
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
            className="absolute left-0 sm:-left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-slate-800 border-2 border-slate-200 shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 z-20 cursor-pointer"
            aria-label="Previous Achievement Slide"
          >
            <ChevronLeft className="w-6 h-6 text-orange-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 sm:-right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-slate-800 border-2 border-slate-200 shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 z-20 cursor-pointer"
            aria-label="Next Achievement Slide"
          >
            <ChevronRight className="w-6 h-6 text-orange-600" />
          </button>
        </>
      )}

      {/* Indicator Pagination Dots */}
      {maxIndex > 0 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? 'w-8 bg-orange-600 shadow-xs'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
