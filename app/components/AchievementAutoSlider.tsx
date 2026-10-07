'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Award, Trophy } from 'lucide-react';
import { AchievementItem } from '@/lib/mockData';

interface AchievementAutoSliderProps {
  achievement: AchievementItem[];
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

  // Auto-advance to the right every 3.5 seconds
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

  return (
    <div
      className="relative overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider Carousel Track */}
      <div className="overflow-hidden py-4">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)`,
          }}
        >
          {achievement.map((item, idx) => (
            <div
              key={item._id || idx}
              className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3.5"
            >
              <div className="bg-white rounded-3xl p-6 border-2 border-amber-200 shadow-sm hover:shadow-2xl hover:border-amber-400 transition-all duration-300 flex flex-col h-full group/card hover:-translate-y-1.5">
                {/* Gambar Murid & Badge Score */}
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-5 bg-slate-800">
                  <img
                    src={item.fotoUrl || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80'}
                    alt={item.nama}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                  />
                  {/* Top Level Pill */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-white/60">
                    <Trophy className="w-3.5 h-3.5 text-white" />
                    <span>{item.level}</span>
                  </div>

                  {/* Bottom Score Badge */}
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 text-amber-300 text-xs font-black px-3.5 py-1.5 rounded-xl backdrop-blur-xs flex items-center gap-1.5 border border-amber-400/50 shadow-lg">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>Score: {item.skor}</span>
                  </div>
                </div>

                {/* Info Murid */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                      {item.nama}
                    </h3>
                    {item.keterangan && (
                      <p className="text-xs text-slate-500 font-medium mt-1 mb-4">
                        {item.keterangan}
                      </p>
                    )}
                  </div>

                  {/* Card Footer: Highlight Test Score */}
                  <div className="mt-2 pt-3.5 border-t border-slate-200/80 flex items-center justify-between -mx-6 -mb-6 px-6 py-3.5 bg-slate-50/80 rounded-b-3xl">
                    <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Test Score
                    </span>
                    <span className="text-base font-black text-slate-900 bg-white px-3.5 py-1 rounded-full border border-slate-200 shadow-xs font-mono">
                      {item.skor}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 border-2 border-amber-300 shadow-xl flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 z-20 cursor-pointer"
        aria-label="Previous Achievement Slide"
      >
        <ChevronLeft className="w-6 h-6 text-orange-600" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 border-2 border-amber-300 shadow-xl flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 z-20 cursor-pointer"
        aria-label="Next Achievement Slide"
      >
        <ChevronRight className="w-6 h-6 text-orange-600" />
      </button>

      {/* Indicator Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentIndex
                ? 'w-8 bg-orange-600'
                : 'w-2 bg-amber-300 hover:bg-amber-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
