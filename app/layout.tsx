import type { Metadata } from 'next';
import Image from 'next/image';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PromoModal from './components/PromoModal';
import { getPopupPromo, mockSiteSettings } from '@/lib/sanity';

export const metadata: Metadata = {
  title: 'Bright Mandarin Education — Kursus Bahasa Mandarin Berstandar HSK 6',
  description: 'Bright Mandarin adalah lembaga kursus bahasa Mandarin terpercaya di Indonesia dengan tutor bersertifikasi HSK 6 lulusan Tiongkok. Menyediakan kelas Online, Offline Center di Kelapa Gading, dan Home Private.',
  keywords: [
    'kursus bahasa mandarin',
    'les mandarin jakarta',
    'les mandarin online',
    'ujian HSK',
    'beasiswa tiongkok',
    'mandarin kids',
    'mandarin bisnis',
    'bright mandarin'
  ],
  icons: {
    icon: '/logo-official.png',
    shortcut: '/logo-official.png',
    apple: '/logo-official.png',
  },
  openGraph: {
    title: 'Bright Mandarin Education — Kursus Bahasa Mandarin Berstandar HSK 6',
    description: 'Bicara Mandarin lancar & raih beasiswa ke Tiongkok dengan bimbingan Laoshi tersertifikasi HSK 6.',
    url: 'https://brightmandarin.com',
    siteName: 'Bright Mandarin Education',
    locale: 'id_ID',
    type: 'website',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const promoData = await getPopupPromo();

  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased text-brand-charcoal bg-[#FFFBEB] selection:bg-orange-500 selection:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <PromoModal promoData={promoData} />

        {/* Floating WhatsApp Action Button with Official Logo (Bottom Right) */}
        <a
          href="https://api.whatsapp.com/send/?phone=6289699288009&text=Halo+Admin+Bright+Mandarin%2C+saya+ingin+mencoba+Free+Trial+Class"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mau cobain Free Trial Class? Chat WhatsApp Bright Mandarin"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-white/95 hover:bg-white text-slate-900 font-extrabold text-sm pl-2 pr-4 py-2.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-emerald-500/80 group"
        >
          <div className="relative w-9 h-9 shrink-0 group-hover:rotate-12 transition-transform">
            <Image
              src="/whatsapp-logo.png"
              alt="WhatsApp Admin Bright Mandarin"
              width={36}
              height={36}
              className="w-9 h-9 object-contain drop-shadow-sm group-hover:scale-110 transition-transform"
            />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full" />
          </div>
          <div className="flex flex-col text-left leading-tight pr-1">
            <span className="text-xs font-black text-slate-900">Mau coba trial class gratis?</span>
            <span className="text-[11px] font-extrabold text-emerald-600">WhatsApp sekarang juga</span>
          </div>
        </a>
      </body>
    </html>
  );
}
