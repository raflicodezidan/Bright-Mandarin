'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { PopupPromoData, mockPopupPromo, DEFAULT_WHATSAPP_URL } from '@/lib/sanity';

interface PromoModalProps {
  promoData?: PopupPromoData;
}

export default function PromoModal({ promoData = mockPopupPromo }: PromoModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  // If promo is deactivated in Sanity, do not show
  const isEnabled = promoData?.aktif !== false;

  useEffect(() => {
    if (!isEnabled) return;

    const dismissed = sessionStorage.getItem('bright_promo_dismissed');
    if (dismissed) return;

    let opened = false;
    const openPromo = () => {
      if (opened) return;
      opened = true;
      setIsOpen(true);
      cleanup();
    };

    // Show immediately on first user interaction, or after 3.5s so initial LCP finishes cleanly
    const timer = setTimeout(openPromo, 3500);
    const events = ['scroll', 'pointerdown', 'keydown', 'touchstart'] as const;

    const cleanup = () => {
      clearTimeout(timer);
      events.forEach((evt) => window.removeEventListener(evt, openPromo));
    };

    events.forEach((evt) => window.addEventListener(evt, openPromo, { once: true, passive: true }));

    return cleanup;
  }, [isEnabled]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('bright_promo_dismissed', 'true');
  };

  if (!isOpen || !isEnabled) return null;

  const targetLink =
    !promoData.linkTujuan || promoData.linkTujuan.includes('Halo+Admin') || promoData.linkTujuan.includes('Halo%20Admin')
      ? DEFAULT_WHATSAPP_URL
      : promoData.linkTujuan;

  // Fallback image if user hasn't uploaded a custom poster yet
  const displayImage =
    promoData.posterImageUrl ||
    'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=700&auto=format&fit=crop&q=75';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Clean Poster Image Modal - fits uploaded image dimensions without blank space */}
      <div className="relative z-10 max-w-[92vw] sm:max-w-md md:max-w-lg max-h-[88vh] my-auto animate-in zoom-in-95 duration-300 flex flex-col items-center">
        {/* Floating Close Button */}
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 z-30 w-9 h-9 rounded-full bg-slate-900/90 hover:bg-slate-950 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-2xl border-2 border-white cursor-pointer"
          aria-label="Tutup Brosur Iklan"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Poster Image Only */}
        <a
          href={targetLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClose}
          className="block group overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border-2 sm:border-4 border-amber-400 bg-white cursor-pointer"
        >
          <Image
            src={displayImage}
            alt={promoData.judulPromo || 'Poster Promo Bright Mandarin'}
            width={600}
            height={750}
            quality={80}
            sizes="(max-width: 640px) 92vw, 512px"
            className="w-auto h-auto max-w-full max-h-[82vh] object-contain rounded-2xl sm:rounded-3xl group-hover:scale-[1.01] transition-transform duration-300 block"
          />
        </a>
      </div>
    </div>
  );
}
