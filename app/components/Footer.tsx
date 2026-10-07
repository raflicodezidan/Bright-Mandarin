import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Heart, ChevronRight } from 'lucide-react';
import { mockSiteSettings } from '@/lib/mockData';
import { SiteSettings } from '@/lib/sanity';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .57.04.84.11V9.37a6.34 6.34 0 0 0-.84-.06A6.34 6.34 0 0 0 3.14 15.65a6.34 6.34 0 0 0 9.71 5.34 6.28 6.28 0 0 0 2.97-5.36V8.58a8.27 8.27 0 0 0 4.77 1.52v-3.41h-1z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer({ settings }: { settings?: SiteSettings }) {
  const currentSettings = settings || mockSiteSettings;

  const socialLinks = [
    {
      name: 'Instagram',
      url: currentSettings.instagramUrl || 'https://instagram.com/bright_mandarin',
      Icon: InstagramIcon,
      colorClass: 'bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white border-transparent shadow-md shadow-rose-500/20 hover:opacity-95',
    },
    {
      name: 'TikTok',
      url: currentSettings.tiktokUrl || 'https://tiktok.com/@bright_mandarin',
      Icon: TikTokIcon,
      colorClass: 'bg-slate-950 text-white border-transparent shadow-md shadow-slate-900/20 hover:bg-black',
    },
    {
      name: 'Facebook',
      url: currentSettings.facebookUrl || 'https://facebook.com/brightmandarin',
      Icon: FacebookIcon,
      colorClass: 'bg-[#1877F2] text-white border-transparent shadow-md shadow-blue-500/20 hover:bg-[#166fe5]',
    },
    {
      name: 'YouTube',
      url: currentSettings.youtubeUrl || 'https://youtube.com/@brightmandarin',
      Icon: YouTubeIcon,
      colorClass: 'bg-[#FF0000] text-white border-transparent shadow-md shadow-red-500/20 hover:bg-[#e60000]',
    },
  ];

  return (
    <footer className="bg-white text-slate-800 pt-16 pb-8 border-t-2 border-amber-200/80 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-amber-200/80">
          {/* Col 1: Brand Info & Kontak Utama */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center p-0.5 shrink-0 border-2 border-amber-300">
                <Image
                  src="/logo-official.png"
                  alt="Bright Mandarin Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>
              <div>
                <span className="font-black text-2xl tracking-tight leading-none block">
                  <span className="text-rose-600">BRIGHT</span>
                  <span className="text-sky-600 ml-1">MANDARIN</span>
                </span>
                <p className="text-xs text-amber-900 font-bold mt-1">明辉补习班 - Professional Mandarin Course Center</p>
              </div>
            </div>

            <div className="inline-flex items-center text-xs font-black px-3 py-1 rounded-full bg-amber-200/80 text-amber-950 border border-amber-300">
              <span>Kursus Mandarin Terkemuka & Berprestasi</span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-md font-medium">
              Lembaga kursus bahasa Mandarin terkemuka dengan kurikulum terstruktur, tutor bersertifikat HSK 6 lulusan universitas top Tiongkok, serta mitra terpercaya persiapan beasiswa dan karir internasional.
            </p>

            <div className="pt-2 space-y-3 text-sm text-slate-700 font-medium">
              {/* Alamat Lengkap */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-1" />
                <div className="whitespace-pre-line text-xs sm:text-sm text-slate-700 leading-snug">
                  {currentSettings.alamatPusat}
                </div>
              </div>

              {/* WhatsApp Hotline */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-600 shrink-0" />
                <a
                  href={currentSettings.whatsappUtama}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 transition-colors font-bold text-xs sm:text-sm text-slate-800"
                >
                  {currentSettings.teleponHotline}
                </a>
              </div>

              {/* Email Resmi */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-600 shrink-0" />
                <a
                  href={`mailto:${currentSettings.email}`}
                  className="hover:text-orange-600 transition-colors font-semibold text-xs sm:text-sm text-slate-800"
                >
                  {currentSettings.email}
                </a>
              </div>

              {/* Jam Operasional */}
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-orange-600 shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed w-full">
                  <span className="font-bold text-amber-950 block mb-1">Jam Operasional:</span>
                  <div className="text-slate-600 bg-amber-50/80 p-3 rounded-2xl border border-amber-200/80 text-xs font-medium space-y-2">
                    <div>
                      <p className="font-bold text-slate-800">Tutoring &amp; Kelas Reguler:</p>
                      <p>Senin – Jumat: 12.00 – 18.30</p>
                      <p>Sabtu: 09.00 – 15.00</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">Kelas Dewasa:</p>
                      <p>Senin – Jumat: 18.00 – 20.00</p>
                    </div>
                    <p className="italic text-slate-500">Jadwal kelas dapat berbeda sesuai program dan ketersediaan kelas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Program Kelas */}
          <div className="space-y-3">
            <h3 className="text-sm font-black tracking-wider text-amber-950 uppercase">
              Program Belajar
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li>
                <Link href="/program" className="hover:text-orange-600 transition-colors inline-flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-500" />
                  <span>Mandarin Kids & Teens</span>
                </Link>
              </li>
              <li>
                <Link href="/program" className="hover:text-orange-600 transition-colors inline-flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-500" />
                  <span>Intensive HSK 1 - 6</span>
                </Link>
              </li>
              <li>
                <Link href="/program" className="hover:text-orange-600 transition-colors inline-flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-500" />
                  <span>Business Mandarin</span>
                </Link>
              </li>
              <li>
                <Link href="/program" className="hover:text-orange-600 transition-colors inline-flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-500" />
                  <span>Daily Conversation</span>
                </Link>
              </li>
              <li>
                <Link href="/program" className="hover:text-orange-600 transition-colors inline-flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-500" />
                  <span>VIP Home Private</span>
                </Link>
              </li>
              <li>
                <Link href="/program" className="hover:text-orange-600 transition-colors inline-flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-500" />
                  <span>Studi & Beasiswa China</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigasi Cepat */}
          <div className="space-y-3">
            <h3 className="text-sm font-black tracking-wider text-amber-950 uppercase">
              Navigasi
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li>
                <Link href="/" className="hover:text-orange-600 transition-colors">Beranda</Link>
              </li>
              <li>
                <Link href="/#achievement" className="hover:text-orange-600 transition-colors">Achievement Murid</Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-orange-600 transition-colors">Galeri & Suasana Kelas</Link>
              </li>
              <li>
                <Link href="/berita" className="hover:text-orange-600 transition-colors">Blog & Artikel Mandarin</Link>
              </li>
              <li>
                <Link href="/#lokasi" className="hover:text-orange-600 transition-colors">Lokasi Learning Center</Link>
              </li>
              <li>
                <Link href="/#testimoni" className="hover:text-orange-600 transition-colors">Testimoni Siswa & Alumni</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Lokasi & Konsultasi */}
          <div className="space-y-4">
            <h3 className="text-sm font-black tracking-wider text-amber-950 uppercase">
              Konsultasi Cepat
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Bingung memilih level atau ingin tes penempatan gratis? Hubungi konsultan akademik kami sekarang.
            </p>
            <a
              href={currentSettings.whatsappUtama}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-black text-xs py-3 px-4 rounded-full transition-all shadow-md shadow-orange-500/20 hover:scale-105"
            >
              <div className="w-4.5 h-4.5 shrink-0">
                <Image
                  src="/whatsapp-logo.png"
                  alt="WhatsApp"
                  width={18}
                  height={18}
                  className="w-full h-full object-contain"
                />
              </div>
              <span>WhatsApp Hotline</span>
            </a>

            <div className="pt-2">
              <span className="text-xs text-amber-950 font-bold uppercase tracking-wider block mb-2">
                Learning Center:
              </span>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Jl. Venesia EA No. 2–3, Bukit Gading Mediterania, Kelapa Gading, Jakarta (+62 858-9059-2738)
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Follow Strip */}
        <div className="py-6 border-b border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-900 font-extrabold text-sm sm:text-base">
            <span className="uppercase tracking-wider">Follow Us:</span>
            <span className="text-xs text-orange-600 font-bold hidden md:inline">@{(currentSettings.instagramHandle || 'bright_mandarin').replace(/^@+/, '')}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {socialLinks.map((item) => {
              const Icon = item.Icon;
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Bright Mandarin on ${item.name}`}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black transition-all duration-200 hover:scale-105 active:scale-95 border ${item.colorClass}`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600 font-medium">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-900">Bright Mandarin Education</strong> (明辉补习班). All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Dirancang dengan standar edukasi & kenyamanan terbaik</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
}
