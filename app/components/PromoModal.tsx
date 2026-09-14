'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Sparkles, CheckCircle2, Gift, Clock, Flame, ArrowRight, ExternalLink } from 'lucide-react';
import { PopupPromoData, mockPopupPromo } from '@/lib/mockData';

interface PromoModalProps {
  promoData?: PopupPromoData;
}

export default function PromoModal({ promoData = mockPopupPromo }: PromoModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  // If promo is deactivated in Sanity, do not show
  const isEnabled = promoData?.aktif !== false;

  useEffect(() => {
    if (!isEnabled) return;

    // Show modal automatically after 800ms on first load
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem('bright_promo_dismissed');
      if (!dismissed) {
        setIsOpen(true);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [isEnabled]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('bright_promo_dismissed', 'true');
  };

  if (!isOpen || !isEnabled) return null;

  const targetLink =
    promoData.linkTujuan ||
    'https://api.whatsapp.com/send/?phone=6289699288009&text=Halo+Admin+Bright+Mandarin%2C+saya+ingin+klaim+Promo+Brosur+dan+Konsultasi+Belajar';
  const buttonText = promoData.teksTombol || 'Klaim Promo via WhatsApp';
  const hasCustomPoster = Boolean(promoData.posterImageUrl);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Modal / Brochure Card */}
      <div className="relative w-full max-w-lg bg-gradient-to-b from-amber-50 via-white to-amber-50 rounded-3xl shadow-2xl border-4 border-amber-400 overflow-hidden z-10 animate-in zoom-in-95 duration-300 my-auto">
        {/* Floating Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3.5 right-3.5 z-30 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-lg border border-white/20"
          aria-label="Tutup Brosur Iklan"
        >
          <X className="w-5 h-5" />
        </button>

        {/* CASE 1: Uploaded Custom Poster from Sanity */}
        {hasCustomPoster ? (
          <div className="flex flex-col">
            <a
              href={targetLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="relative block w-full aspect-[4/5] sm:aspect-[3/4] bg-slate-950 overflow-hidden group/poster"
            >
              <img
                src={promoData.posterImageUrl}
                alt={promoData.judulPromo || 'Poster Promo Bright Mandarin'}
                className="w-full h-full object-contain group-hover/poster:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/poster:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/90 backdrop-blur-sm text-slate-900 font-black text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <span>Klik untuk Info & Pendaftaran</span>
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </a>

            {/* Bottom Action Footer for Poster */}
            <div className="p-4 sm:p-5 bg-gradient-to-b from-amber-50 to-orange-50 border-t-2 border-amber-200 space-y-3">
              <a
                href={targetLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white font-black text-sm sm:text-base py-3.5 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-95"
              >
                <div className="w-5 h-5 shrink-0 relative">
                  <Image
                    src="/whatsapp-logo.png"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span>{buttonText}</span>
              </a>

              <div className="flex items-center justify-between px-2 text-xs">
                <Link
                  href="/program"
                  onClick={handleClose}
                  className="font-bold text-amber-900 hover:text-orange-600 flex items-center gap-1 transition-colors"
                >
                  <span>Lihat Katalog Program</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={handleClose}
                  className="text-slate-400 hover:text-slate-600 font-medium transition-colors"
                >
                  Tutup Brosur
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* CASE 2: Rich Interactive Brochure Template (Default fallback when no custom poster image is uploaded) */
          <div>
            {/* Brochure Header Banner */}
            <div className="relative bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white p-5 text-center overflow-hidden">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_2px,transparent_2px)] [background-size:16px_16px]" />

              <div className="relative z-10 flex flex-col items-center">
                {/* Logo and Chinese Title */}
                <div className="flex items-center gap-2 mb-2 bg-white/20 backdrop-blur-xs px-3.5 py-1 rounded-full border border-white/30">
                  <div className="w-6 h-6 relative shrink-0">
                    <Image
                      src="/logo-official.png"
                      alt="Bright Mandarin"
                      width={24}
                      height={24}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-black tracking-wider uppercase">BRIGHT MANDARIN • 明辉补习班</span>
                </div>

                <div className="inline-flex items-center gap-1.5 bg-yellow-300 text-amber-950 font-black text-xs px-3 py-1 rounded-full shadow-md mb-2">
                  <Flame className="w-3.5 h-3.5 fill-current text-orange-600 animate-bounce" />
                  <span>PROMO SPESIAL BATCH BARU</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight drop-shadow-sm">
                  {promoData.judulPromo || 'DISKON PENDAFTARAN S.D 30%'}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-amber-100 mt-1">
                  + FREE Placement Test & Materi Belajar HSK Lengkap!
                </p>
              </div>
            </div>

            {/* Brochure Content Body */}
            <div className="p-6 space-y-4">
              {/* Visual Highlight Box */}
              <div className="bg-gradient-to-r from-amber-100/80 via-orange-50/80 to-yellow-100/80 rounded-2xl p-4 border border-amber-300/80 shadow-xs">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Gift className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900">
                      Paket Kursus Bergaransi Lulus
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-medium">
                      Tersedia untuk kelas <strong>Kids (4-15 th)</strong>, <strong>Intensive HSK 1-6</strong>, <strong>Daily Conversation</strong>, hingga <strong>Business Chinese</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Advantages List */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dibimbing Laoshi Tersertifikasi Min. HSK 6</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free Tes Level (Placement Test) & Konsultasi Belajar</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Fasilitas Mengulang Kelas Gratis Sampai Lulus</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pilihan Kelas Online, Offline Center, atau VIP Private</span>
                </div>
              </div>

              {/* Limited slots badge */}
              <div className="flex items-center justify-center gap-2 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl p-2.5 text-xs font-extrabold text-center">
                <Clock className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Kuota Terbatas: Hanya untuk 25 Pendaftar Pertama Bulan Ini!</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2.5">
                <a
                  href={targetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClose}
                  className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white font-black text-sm sm:text-base py-3.5 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-95"
                >
                  <div className="w-5 h-5 shrink-0 relative">
                    <Image
                      src="/whatsapp-logo.png"
                      alt="WhatsApp"
                      width={20}
                      height={20}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span>{buttonText}</span>
                </a>

                <div className="flex items-center justify-between px-2 pt-1 text-xs">
                  <Link
                    href="/program"
                    onClick={handleClose}
                    className="font-bold text-amber-900 hover:text-orange-600 flex items-center gap-1 transition-colors"
                  >
                    <span>Lihat Katalog Program</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={handleClose}
                    className="text-slate-400 hover:text-slate-600 font-medium transition-colors"
                  >
                    Nanti Saja
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
