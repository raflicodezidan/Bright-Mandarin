import type { Metadata, Viewport } from 'next';
import Image from 'next/image';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PromoModal from './components/PromoModal';
import { getPopupPromo, getSiteSettings } from '@/lib/sanity';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.brightmandarin.courses'),
  title: {
    default: 'Kursus Bahasa Mandarin di Kelapa Gading — Bright Mandarin',
    template: '%s | Bright Mandarin Kelapa Gading',
  },
  description: 'Tempat kursus & les bahasa Mandarin terbaik di Kelapa Gading, Jakarta Utara (Bukit Gading Mediterania). Program untuk anak (Kids/Teens), dewasa, persiapan HSK 1–6 & HSKK, bimbingan akademik sekolah, hingga percakapan bisnis dengan tutor berstandar HSK 6 lulusan Tiongkok.',
  keywords: [
    'kursus mandarin di kelapa gading',
    'les mandarin kelapa gading',
    'kursus bahasa mandarin kelapa gading',
    'tempat les mandarin kelapa gading',
    'kursus mandarin jakarta utara',
    'les mandarin bukit gading mediterania',
    'les mandarin anak kelapa gading',
    'kursus hsk kelapa gading',
    'les mandarin hskk jakarta',
    'kursus mandarin dewasa kelapa gading',
    'les privat mandarin kelapa gading',
    'kursus bahasa mandarin terdekat',
    'les mandarin kurikulum internasional',
    'bright mandarin',
    'bright mandarin courses',
    'bimbingan belajar mandarin kelapa gading'
  ],
  alternates: {
    canonical: 'https://www.brightmandarin.courses',
  },
  icons: {
    icon: '/logo-official.png',
    shortcut: '/logo-official.png',
    apple: '/logo-official.png',
  },
  openGraph: {
    title: 'Kursus Bahasa Mandarin di Kelapa Gading — Bright Mandarin',
    description: 'Kursus & les bahasa Mandarin terpercaya di Kelapa Gading, Jakarta Utara. Bimbingan Laoshi tersertifikasi HSK 6 lulusan universitas top Tiongkok. Kelas Offline Center, Online, & Home Private.',
    url: 'https://www.brightmandarin.courses',
    siteName: 'Bright Mandarin Education',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/logo-official.png',
        width: 800,
        height: 800,
        alt: 'Bright Mandarin Education Kelapa Gading',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kursus Bahasa Mandarin di Kelapa Gading — Bright Mandarin',
    description: 'Kursus & les bahasa Mandarin berstandar HSK 6 di Kelapa Gading, Jakarta Utara. Kelas anak, reguler, HSK, dan percakapan.',
    images: ['/logo-official.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [promoData, siteSettings] = await Promise.all([
    getPopupPromo(),
    getSiteSettings(),
  ]);

  // Schema Markup JSON-LD untuk LocalBusiness & EducationalOrganization (Kunci ranking Google lokal)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    '@id': 'https://www.brightmandarin.courses/#organization',
    name: 'Bright Mandarin Education',
    alternateName: 'Kursus Bahasa Mandarin Bright Mandarin Kelapa Gading',
    url: 'https://www.brightmandarin.courses',
    logo: 'https://www.brightmandarin.courses/logo-official.png',
    image: 'https://www.brightmandarin.courses/logo-official.png',
    description: 'Lembaga kursus dan bimbingan belajar bahasa Mandarin terpercaya di Kelapa Gading, Jakarta Utara. Menyediakan kelas anak (Kids/Teens), reguler, persiapan ujian HSK 1–6 & HSKK, bimbingan akademik, serta percakapan bisnis.',
    telephone: '+62-858-9059-2738',
    email: 'coursebrightmandarin@gmail.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Venesia EA No. 2–3, Bukit Gading Mediterania',
      addressLocality: 'Kelapa Gading, Jakarta Utara',
      addressRegion: 'DKI Jakarta',
      postalCode: '14240',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.1557,
      longitude: 106.9038,
    },
    hasMap: 'https://www.google.com/maps/search/?api=1&query=Jl.+Venesia+EA+No.+2-3+Bukit+Gading+Mediterania+Kelapa+Gading+Jakarta',
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Kelapa Gading' },
      { '@type': 'AdministrativeArea', name: 'Jakarta Utara' },
      { '@type': 'AdministrativeArea', name: 'DKI Jakarta' },
      { '@type': 'Country', name: 'Indonesia' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '12:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '15:00',
      },
    ],
    sameAs: [
      'https://instagram.com/bright_mandarin',
      'https://tiktok.com/@bright_mandarin',
      'https://facebook.com/brightmandarin',
      'https://youtube.com/@brightmandarin',
    ],
  };

  return (
    <html lang="id" className="scroll-smooth overflow-x-hidden w-full max-w-full">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased text-brand-charcoal bg-[#FFFBEB] selection:bg-orange-500 selection:text-white overflow-x-hidden w-full max-w-full">
        <Navbar />
        <main className="pt-[66px] sm:pt-[70px] overflow-x-hidden w-full max-w-full">{children}</main>
        <Footer settings={siteSettings} />
        <PromoModal promoData={promoData} />

        {/* Floating WhatsApp Action Button with Official Logo (Bottom Right) */}
        <a
          href={siteSettings.whatsappUtama || "https://api.whatsapp.com/send/?phone=6285890592738&text=Halo+Admin+Bright+Mandarin%2C+saya+ingin+mencoba+Free+Trial+Class"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mau cobain Free Trial Class? Chat WhatsApp Bright Mandarin"
          className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5 bg-white/95 hover:bg-white text-slate-900 font-extrabold text-sm pl-2 pr-3.5 sm:pr-4 py-2 sm:py-2.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-emerald-500/80 group max-w-[calc(100vw-24px)]"
        >
          <div className="relative w-9 h-9 shrink-0 group-hover:rotate-12 transition-transform">
            <Image
              src="/whatsapp-logo.png"
              alt="WhatsApp Admin Bright Mandarin"
              width={36}
              height={36}
              className="w-9 h-9 object-contain drop-shadow-sm group-hover:scale-110 transition-transform"
            />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" style={{ willChange: 'transform, opacity' }} />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full" />
          </div>
          <div className="flex flex-col text-left leading-tight pr-1">
            <span className="text-xs font-black text-slate-900">Mau coba trial class gratis?</span>
            <span className="text-[11px] font-extrabold text-emerald-600">WhatsApp sekarang juga</span>
          </div>
        </a>
        <SpeedInsights />
      </body>
    </html>
  );
}
