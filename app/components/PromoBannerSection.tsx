import React from 'react';
import Image from 'next/image';
import { Phone, Sparkles } from 'lucide-react';

interface PromoBannerSectionProps {
  settings?: any;
}

export default function PromoBannerSection({ settings }: PromoBannerSectionProps) {
  const whatsappUrl =
    settings?.whatsappUtama ||
    'https://wa.me/6285890592738?text=Halo%20Bright%20Mandarin,%20saya%20ingin%20mendaftar%20dan%20mengklaim%20Promo%20Free%20Admin%20%26%20Free%20Trial%201x';

  return (
    <section className="py-12 sm:py-16 bg-amber-100/50 border-b border-amber-300/70 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        
        {/* Banner Card Container with Interactive Hover */}
        <div className="relative group">
          {/* Subtle Outer Glow Accent */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 rounded-[28px] sm:rounded-[36px] blur-sm opacity-60 group-hover:opacity-100 transition duration-500 pointer-events-none" />

          {/* Main Card with Thick White Border */}
          <div className="relative bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden border-[4px] sm:border-[8px] border-white shadow-2xl">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative aspect-[2/1] w-full overflow-hidden cursor-pointer"
              title="Klik untuk Klaim Promo & Daftar Kursus Bright Mandarin"
            >
              <Image
                src="/promo-banner-registration.png"
                alt="Promo Bright Mandarin - Kursus Offline dan Online, Free Admin & Free Trial 1x"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1152px"
                className="object-contain sm:object-cover w-full h-full group-hover:scale-[1.015] transition-transform duration-500"
              />
            </a>
          </div>
        </div>

        {/* Action Buttons Below Banner */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            <div className="w-5 h-5 shrink-0">
              <Image
                src="/whatsapp-logo.png"
                alt="WhatsApp"
                width={20}
                height={20}
                className="w-full h-full object-contain"
              />
            </div>
            <span>Daftar via WhatsApp (0858-9059-2738)</span>
          </a>

          <a
            href="tel:0214514574"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-black text-sm sm:text-base px-5 sm:px-6 py-3 sm:py-3.5 rounded-full border-2 border-slate-900 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all"
          >
            <Phone className="w-4 h-4 text-slate-900" />
            <span>Telepon: (021) 451-4574</span>
          </a>
        </div>
      </div>
    </section>
  );
}
