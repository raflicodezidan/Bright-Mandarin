'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { PengajarItem } from '@/lib/mockData';

interface PengajarAutoSliderProps {
  pengajar: PengajarItem[];
}

export default function PengajarAutoSlider({ pengajar }: PengajarAutoSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(3);
  const touchStartX = useRef<number | null>(null);

  const total = pengajar.length;

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
          {pengajar.map((laoshi, idx) => (
            <div
              key={laoshi._id || idx}
              className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3.5"
            >
              <div className="bg-white rounded-3xl p-6 border-2 border-amber-200 shadow-sm hover:shadow-2xl hover:border-amber-400 transition-all duration-300 flex flex-col h-full group/card hover:-translate-y-1.5">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-5 bg-slate-800">
                  <img
                    src={laoshi.fotoUrl}
                    alt={laoshi.nama}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-slate-900/90 text-amber-300 text-xs font-bold px-3 py-1 rounded-lg backdrop-blur-xs flex items-center gap-1.5 border border-amber-400/40">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Sertifikasi Min. HSK 6</span>
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-1">
                  {laoshi.nama}
                </h3>
                <p className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                  {laoshi.spesialisasi}
                </p>
                <p className="text-xs text-slate-500 font-medium mb-3">
                  {laoshi.gelar}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 font-medium">
                  {laoshi.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 border-2 border-amber-300 shadow-xl flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 z-20"
        aria-label="Previous Teacher Slide"
      >
        <ChevronLeft className="w-6 h-6 text-orange-600" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 border-2 border-amber-300 shadow-xl flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 z-20"
        aria-label="Next Teacher Slide"
      >
        <ChevronRight className="w-6 h-6 text-orange-600" />
      </button>

      {/* Indicator Pagination Dots */}
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
  );
}

