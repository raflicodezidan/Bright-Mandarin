'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProgramItem } from '@/lib/mockData';

interface ProgramAutoSliderProps {
  programs: ProgramItem[];
}

export default function ProgramAutoSlider({ programs }: ProgramAutoSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(3);
  const touchStartX = useRef<number | null>(null);

  const total = programs.length;

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
          {programs.map((prog, idx) => (
            <div
              key={prog._id || idx}
              className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3.5"
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full group/card hover:-translate-y-1">
                {/* Image Header - Clean without badges */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100 shrink-0">
                  <img
                    src={prog.gambarUrl || 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80'}
                    alt={prog.judul}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug line-clamp-2 min-h-[3rem] flex items-center">
                      {prog.judul}
                    </h3>
                    
                    {/* Overview */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5 line-clamp-2">
                      {prog.ringkasan}
                    </p>

                    {/* Structured Details Table */}
                    <div className="border-y border-slate-100 divide-y divide-slate-100 text-xs sm:text-sm mb-5">
                      {prog.materi && (
                        <div className="py-2.5 grid grid-cols-[90px_1fr] sm:grid-cols-[105px_1fr] gap-2 items-start">
                          <span className="font-bold text-slate-900">Materi</span>
                          <span className="text-slate-600 leading-relaxed line-clamp-2">{prog.materi}</span>
                        </div>
                      )}

                      {prog.metode && (
                        <div className="py-2.5 grid grid-cols-[90px_1fr] sm:grid-cols-[105px_1fr] gap-2 items-start">
                          <span className="font-bold text-slate-900">Metode</span>
                          <span className="text-slate-600 leading-relaxed line-clamp-2">{prog.metode}</span>
                        </div>
                      )}

                      {prog.durasi && (
                        <div className="py-2.5 grid grid-cols-[90px_1fr] sm:grid-cols-[105px_1fr] gap-2 items-start">
                          <span className="font-bold text-slate-900">Durasi</span>
                          <span className="text-slate-600 leading-relaxed">{prog.durasi}</span>
                        </div>
                      )}

                      {prog.benefit && (
                        <div className="py-2.5 grid grid-cols-[90px_1fr] sm:grid-cols-[105px_1fr] gap-2 items-start">
                          <span className="font-bold text-slate-900">Benefit</span>
                          <span className="text-slate-600 leading-relaxed line-clamp-2">{prog.benefit}</span>
                        </div>
                      )}

                      {prog.targetUsia && (
                        <div className="py-2.5 grid grid-cols-[90px_1fr] sm:grid-cols-[105px_1fr] gap-2 items-start">
                          <span className="font-bold text-slate-900">Target Usia</span>
                          <span className="text-slate-600 leading-relaxed">{prog.targetUsia}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Footer: Price & CTA */}
                  <div className="flex flex-col items-center text-center gap-3 mt-auto">
                    <div className="w-full">
                      <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-semibold leading-tight mb-1">
                        BIAYA & INFORMASI
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 font-medium block leading-snug">
                        {prog.harga || 'Hubungi kami untuk informasi program dan biaya'}
                      </p>
                    </div>

                    <a
                      href={`https://api.whatsapp.com/send/?phone=6285890592738&text=Halo+Bright+Mandarin!+%F0%9F%8C%9F+Saya+tertarik+untuk+belajar+bahasa+Mandarin+dan+ingin+mengetahui+informasi+mengenai+program+kelas+serta+pendaftaran+trial+class.+Boleh+dibantu+informasinya?+Terima+kasih!+%F0%9F%99%8F`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-sm sm:text-base py-3 px-4 rounded-xl text-center shadow-xs hover:shadow-md transition-all active:scale-[0.99] cursor-pointer"
                    >
                      Daftar Kelas
                    </a>
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
        aria-label="Previous Program Slide"
      >
        <ChevronLeft className="w-6 h-6 text-orange-600" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 border-2 border-amber-300 shadow-xl flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 z-20 cursor-pointer"
        aria-label="Next Program Slide"
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
