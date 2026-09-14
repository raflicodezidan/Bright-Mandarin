'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, ExternalLink, Navigation } from 'lucide-react';
import { mockSiteSettings } from '@/lib/mockData';
import { SiteSettings } from '@/lib/sanity';

export default function BranchLocations({ settings }: { settings?: SiteSettings }) {
  const currentSettings = settings || mockSiteSettings;
  const center = (currentSettings.cabang && currentSettings.cabang.length > 0)
    ? currentSettings.cabang[0]
    : {
        nama: currentSettings.namaSitus ? `${currentSettings.namaSitus} Center` : "Bright Mandarin Learning Center",
        alamat: currentSettings.alamatPusat || "Jl. Raya Venesia, RW.5, Klp. Gading Bar., Kec. Klp. Gading, Jkt Utara, Daerah Khusus Ibukota Jakarta 14240",
        linkMaps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentSettings.alamatPusat || "Jl. Raya Venesia, Klp. Gading Bar., Jkt Utara")}`,
      };

  const gmapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(center.alamat)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="lokasi" className="py-20 bg-yellow-100/50 border-b border-amber-300/70 relative overflow-hidden">
      {/* Target anchor for both #lokasi and legacy #cabang */}
      <div id="cabang" className="absolute -top-24" />

      {/* Background ambient glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-amber-300/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 rounded-full bg-orange-300/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Formal Header Hierarchy */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
            LOKASI LEARNING CENTER
          </h2>
          <p className="text-lg sm:text-xl font-bold text-orange-600 mt-2 mb-3">
            Kunjungi Kantor & Ruang Kelas Resmi Bright Mandarin
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto my-3" />
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
            Pusat bimbingan belajar bahasa Mandarin modern di Kelapa Gading, Jakarta Utara dengan fasilitas ruang kelas ber-AC, smart multimedia, dan konsultasi gratis.
          </p>
        </div>

        {/* 2-Column Grid: Left (Location Details) & Right (Interactive Google Maps) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Center Info & Direction Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border-2 border-amber-200 shadow-xl flex flex-col justify-between group">
            <div className="space-y-6">
              
              {/* Header with Official Logo & Formal Sub-label without box */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden p-1 bg-white border-2 border-amber-300 shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Image
                    src="/logo-official.png"
                    alt="Bright Mandarin Official Logo"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                    priority
                    unoptimized
                  />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-extrabold tracking-wider text-orange-600 uppercase block">
                    Kantor Pusat & Center
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1 leading-tight">
                    {center.nama}
                  </h3>
                </div>
              </div>

              {/* Address Details */}
              <div className="bg-amber-50/70 rounded-2xl p-5 border border-amber-200/80 space-y-2">
                <div className="flex items-start gap-3.5 text-slate-800">
                  <MapPin className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Alamat Lengkap:
                    </span>
                    <p className="text-sm font-semibold text-slate-900 leading-relaxed mt-1">
                      {center.alamat}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direction Action Button */}
            <div className="pt-6 mt-6 border-t border-amber-200/80">
              <a
                href={center.linkMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-black text-sm py-4 px-5 rounded-2xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <Navigation className="w-4 h-4 shrink-0" />
                <span>Buka Petunjuk Arah di Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Frame (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-3 sm:p-4 border-2 border-amber-200 shadow-xl flex flex-col justify-between overflow-hidden group">
            <div className="relative w-full h-[380px] sm:h-[450px] lg:h-full min-h-[360px] rounded-2xl overflow-hidden border border-amber-200">
              {/* Google Maps Iframe */}
              <iframe
                title="Bright Mandarin Learning Center Google Maps"
                src={gmapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
