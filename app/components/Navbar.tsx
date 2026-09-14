'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Phone, MessageCircle, Clock, MapPin, Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { mockSiteSettings } from '@/lib/mockData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Beranda', href: '/' },
    { label: 'Program Kelas', href: '/program' },
    { label: 'Pengajar (Laoshi)', href: '/pengajar' },
    { label: 'Berita & Tips', href: '/berita' },
    { label: 'Galeri Kegiatan', href: '/galeri' },
    { label: 'Lokasi Center', href: '/#lokasi' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Main Navbar */}
      <nav className="bg-gradient-to-r from-amber-50/95 via-yellow-50/95 to-orange-50/95 backdrop-blur-md border-b border-amber-200/80 px-4 lg:px-8 py-2.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform duration-200 shrink-0">
              <Image
                src="/logo-official.png"
                alt="Bright Mandarin Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
                priority
                unoptimized
              />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="font-black text-base sm:text-lg lg:text-xl tracking-tight leading-none whitespace-nowrap">
                  <span className="text-rose-600">BRIGHT</span>
                  <span className="text-sky-600 ml-1">MANDARIN</span>
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-200/80 text-amber-950 font-black whitespace-nowrap">
                  明辉
                </span>
              </div>
              <span className="text-[9.5px] sm:text-[11px] text-slate-600 font-semibold tracking-wide mt-0.5 whitespace-nowrap truncate max-w-[210px] sm:max-w-none">
                明辉补习班 - Professional Mandarin Course Center
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items - Clean text-only without boxed backgrounds, no line breaks */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 font-bold text-xs xl:text-sm whitespace-nowrap">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`py-2 px-2 xl:px-3 rounded-lg transition-colors duration-200 relative whitespace-nowrap ${
                    isActive
                      ? 'text-orange-600 font-extrabold after:absolute after:bottom-0 after:left-2 after:right-2 xl:after:left-3 xl:after:right-3 after:h-0.5 after:bg-orange-500 after:rounded-full'
                      : 'text-slate-700 hover:text-orange-600'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right Action CTA Button - Warm Yellow-Orange harmony, no line wrap */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={mockSiteSettings.whatsappUtama}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white text-xs md:text-sm font-black px-4.5 xl:px-5 py-2.5 rounded-full shadow-md shadow-orange-500/20 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-95 whitespace-nowrap group shrink-0"
            >
              <div className="w-5 h-5 shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-transform">
                <Image
                  src="/whatsapp-logo.png"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="whitespace-nowrap">Daftar Sekarang</span>
              <ChevronRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-800 hover:text-orange-600 hover:bg-amber-100/60 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-amber-200/80 pb-4 space-y-1">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-bold transition-colors ${
                    isActive
                      ? 'text-orange-600 font-extrabold bg-amber-100/60'
                      : 'text-slate-700 hover:text-orange-600 hover:bg-amber-100/40'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3 px-2">
              <a
                href={mockSiteSettings.whatsappUtama}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-3 rounded-full font-black text-sm shadow-md"
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
                <span>Hubungi Kami via WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
