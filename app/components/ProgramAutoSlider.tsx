'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Users, BookOpen, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
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
              <div className="bg-white rounded-3xl overflow-hidden border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col h-full group/card hover:-translate-y-1">
                {/* Image Header */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900 shrink-0">
                  <img
                    src={prog.gambarUrl || 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80'}
                    alt={prog.judul}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm tracking-wide">
                      {prog.kategori}
                    </span>
                    {prog.targetUsia && (
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/95 text-slate-800 backdrop-blur-xs shadow-xs">
                        {prog.targetUsia}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover/card:text-orange-600 transition-colors leading-snug line-clamp-2 min-h-[3rem] flex items-center">
                      {prog.judul}
                    </h3>
                    
                    {/* Overview */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4 line-clamp-2">
                      {prog.ringkasan}
                    </p>

                    {/* Structured Information Box */}
                    <div className="bg-amber-50/50 rounded-2xl p-4 border border-amber-200/70 space-y-2.5 text-xs mb-4">
                      {prog.materi && (
                        <div className="flex items-start gap-2">
                          <BookOpen className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <div className="leading-relaxed">
                            <span className="font-bold text-slate-800">Materi: </span>
                            <span className="text-slate-600 font-normal">{prog.materi}</span>
                          </div>
                        </div>
                      )}

                      {prog.metode && (
                        <div className="flex items-start gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                          <div className="leading-relaxed">
                            <span className="font-bold text-slate-800">Metode: </span>
                            <span className="text-slate-600 font-normal">{prog.metode}</span>
                          </div>
                        </div>
                      )}

                      {prog.durasi && (
                        <div className="flex items-start gap-2">
                          <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <div className="leading-relaxed">
                            <span className="font-bold text-slate-800">Durasi: </span>
                            <span className="text-slate-700 font-semibold">{prog.durasi}</span>
                          </div>
                        </div>
                      )}

                      {prog.benefit && (
                        <div className="pt-2 border-t border-amber-200/60 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <div className="leading-relaxed">
                            <span className="font-bold text-slate-800">Benefit: </span>
                            <span className="text-slate-600 font-normal">{prog.benefit}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Footer: Price & CTA (Centered Stack) */}
                  <div className="pt-3.5 border-t border-slate-100 flex flex-col items-center text-center gap-3 mt-3">
                    <div className="w-full">
                      <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-bold leading-tight mb-1">
                        Biaya & Informasi
                      </span>
                      <strong className="text-xs sm:text-[13px] font-bold text-slate-900 block leading-snug">
                        {prog.harga || 'Hubungi kami untuk informasi program dan biaya'}
                      </strong>
                    </div>

                    <a
                      href={`https://api.whatsapp.com/send/?phone=6285890592738&text=Halo+Admin+Bright+Mandarin%2C+saya+tertarik+dengan+program+${encodeURIComponent(prog.judul)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer hover:scale-[1.02] active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      <span>Daftar Kelas</span>
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
