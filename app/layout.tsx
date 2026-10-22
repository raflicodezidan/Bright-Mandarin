import type { Metadata, Viewport } from 'next';
import Image from 'next/image';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PromoModal from './components/PromoModal';
import { getPopupPromo, getSiteSettings, DEFAULT_WHATSAPP_URL } from '@/lib/sanity';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.brightmandarin.courses'),
  title: {
    default: 'Kursus Mandarin di Kelapa Gading Terbaik dan Terpercaya - Bright Mandarin',
    template: '%s | Bright Mandarin Kelapa Gading',
  },
  description: 'Bright Mandarin, lembaga kursus bahasa Mandarin sejak 2010, telah dipercaya oleh lebih dari 500 siswa untuk mengembangkan kemampuan Mandarin dan meraih prestasi. Melalui program persiapan HSK yang terstruktur, metode pembelajaran interaktif, dan dukungan pengajar berpengalaman, kami membantu siswa mempersiapkan ujian HSK, meningkatkan kemampuan bahasa Mandarin, serta mencapai target level HSK sesuai kemampuan dan tujuan belajar mereka.',
  keywords: [
    'kursus mandarin di kelapa gading terbaik dan terpercaya',
    'kursus mandarin anak di kelapa gading',
    'kursus mandarin anak interaktif dan seru',
    'kursus mandarin anak kelapa gading interaktif dan seru',
    'les mandarin anak di kelapa gading',
    'tempat les mandarin anak kelapa gading',
    'kursus mandarin di kelapa gading terbaik',
    'kursus mandarin di kelapa gading terpercaya',
    'kursus mandarin di kelapa gading',
    'les mandarin kelapa gading terbaik',
    'les mandarin kelapa gading terpercaya',
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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-48x48.png', type: 'image/png', sizes: '48x48' },
      { url: '/icon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/icon-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Kursus Mandarin di Kelapa Gading Terbaik dan Terpercaya - Bright Mandarin',
    description: 'Bright Mandarin, lembaga kursus bahasa Mandarin sejak 2010, telah dipercaya oleh lebih dari 500 siswa untuk mengembangkan kemampuan Mandarin dan meraih prestasi. Melalui program persiapan HSK yang terstruktur, metode pembelajaran interaktif, dan dukungan pengajar berpengalaman, kami membantu siswa mempersiapkan ujian HSK, meningkatkan kemampuan bahasa Mandarin, serta mencapai target level HSK sesuai kemampuan dan tujuan belajar mereka.',
    url: 'https://www.brightmandarin.courses',
    siteName: 'Bright Mandarin Education',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Belajar Mandarin Mudah & Menyenangkan di Bright Mandarin Kelapa Gading',
        type: 'image/png',
      },
      {
        url: '/hero-banner-square.png',
        width: 800,
        height: 800,
        alt: 'Belajar Mandarin Mudah & Menyenangkan di Bright Mandarin Kelapa Gading',
        type: 'image/png',
      },
      {
        url: '/hero-banner.png',
        width: 1672,
        height: 941,
        alt: 'Belajar Mandarin Mudah & Menyenangkan di Bright Mandarin Kelapa Gading',
        type: 'image/png',
      },
      {
        url: '/logo-official.png',
        width: 512,
        height: 512,
        alt: 'Bright Mandarin Education Kelapa Gading',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kursus Mandarin di Kelapa Gading Terbaik dan Terpercaya - Bright Mandarin',
    description: 'Bright Mandarin, lembaga kursus bahasa Mandarin sejak 2010, telah dipercaya oleh lebih dari 500 siswa. Program persiapan HSK terstruktur, metode pembelajaran interaktif, dan pengajar berpengalaman untuk membantu mencapai target level HSK.',
    images: ['/og-image.png'],
  },
  other: {
    thumbnail: 'https://www.brightmandarin.courses/og-image.png',
    'image:width': '1200',
    'image:height': '630',
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
  verification: {
    google: 'vGbF7uz5KnePfGCiww4OOGsAReqnfssk0AryjPxXCXU',
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

  // Schema Markup JSON-LD (@graph) untuk LocalBusiness, WebSite, dan SiteNavigationElement (Mendorong Google Sitelinks & Rich Snippets)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://www.brightmandarin.courses/#website',
        url: 'https://www.brightmandarin.courses',
        name: 'Bright Mandarin',
        alternateName: [
          'Bright Mandarin Education',
          'Bright Mandarin Course',
          'Kursus Bahasa Mandarin Kelapa Gading',
        ],
        description: 'Bright Mandarin, lembaga kursus bahasa Mandarin sejak 2010, telah dipercaya oleh lebih dari 500 siswa untuk mengembangkan kemampuan Mandarin dan meraih prestasi. Program persiapan HSK terstruktur, metode pembelajaran interaktif, dan pengajar berpengalaman di Kelapa Gading, Jakarta Utara.',
        publisher: {
          '@id': 'https://www.brightmandarin.courses/#organization',
        },
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.brightmandarin.courses/#webpage',
        url: 'https://www.brightmandarin.courses',
        name: 'Kursus Mandarin di Kelapa Gading Terbaik dan Terpercaya - Bright Mandarin',
        primaryImageOfPage: {
          '@type': 'ImageObject',
          '@id': 'https://www.brightmandarin.courses/#primaryimage',
          url: 'https://www.brightmandarin.courses/og-image.png',
          contentUrl: 'https://www.brightmandarin.courses/og-image.png',
          width: '1200',
          height: '630',
          caption: 'Belajar Mandarin Mudah & Menyenangkan di Bright Mandarin Kelapa Gading',
        },
      },
      {
        '@type': ['EducationalOrganization', 'LocalBusiness'],
        '@id': 'https://www.brightmandarin.courses/#organization',
        name: 'Bright Mandarin Education',
        alternateName: 'Kursus Bahasa Mandarin Bright Mandarin Kelapa Gading',
        url: 'https://www.brightmandarin.courses',
        logo: 'https://www.brightmandarin.courses/logo-official.png',
        image: [
          'https://www.brightmandarin.courses/og-image.png',
          'https://www.brightmandarin.courses/hero-banner-square.png',
          'https://www.brightmandarin.courses/hero-banner.png',
          'https://www.brightmandarin.courses/logo-official.png',
        ],
        description: 'Bright Mandarin, lembaga kursus bahasa Mandarin sejak 2010, telah dipercaya oleh lebih dari 500 siswa untuk mengembangkan kemampuan Mandarin dan meraih prestasi. Melalui program persiapan HSK yang terstruktur, metode pembelajaran interaktif, dan dukungan pengajar berpengalaman, kami membantu siswa mempersiapkan ujian HSK, meningkatkan kemampuan bahasa Mandarin, serta mencapai target level HSK sesuai kemampuan dan tujuan belajar mereka.',
        telephone: '+62-858-9059-2738',
        email: 'coursebrightmandarin@gmail.com',
        priceRange: '$$',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          bestRating: '5',
          worstRating: '1',
          ratingCount: '48',
          reviewCount: '48',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Jl. Raya Venesia, RW.5, Klp. Gading Bar., Kec. Klp. Gading',
          addressLocality: 'Jakarta Utara',
          addressRegion: 'DKI Jakarta',
          postalCode: '14240',
          addressCountry: 'ID',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -6.1557,
          longitude: 106.9038,
        },
        hasMap: 'https://www.google.com/maps/search/?api=1&query=Bright+Mandarin+Course,+Jl.+Raya+Venesia,+RW.5,+Klp.+Gading+Bar.,+Kec.+Klp.+Gading,+Jkt+Utara+14240',
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
      },
      {
        '@type': 'ItemList',
        '@id': 'https://www.brightmandarin.courses/#sitelinks',
        name: 'Navigasi Program & Halaman Utama Bright Mandarin',
        itemListElement: [
          {
            '@type': 'SiteNavigationElement',
            position: 1,
            name: 'Program Kelas',
            description: 'Pilihan lengkap program kursus Mandarin: Bimbingan Belajar Akademik, Kelas Reguler, HSK, dan Percakapan.',
            url: 'https://www.brightmandarin.courses/program',
          },
          {
            '@type': 'SiteNavigationElement',
            position: 2,
            name: 'Achievement Murid',
            description: 'Bukti prestasi dan kelulusan skor ujian HSK & HSKK murid-murid Bright Mandarin.',
            url: 'https://www.brightmandarin.courses/#achievement',
          },
          {
            '@type': 'SiteNavigationElement',
            position: 3,
            name: 'Galeri Kegiatan',
            description: 'Dokumentasi foto & video suasana belajar interaktif dan kegiatan kelas di Kelapa Gading.',
            url: 'https://www.brightmandarin.courses/galeri',
          },
          {
            '@type': 'SiteNavigationElement',
            position: 4,
            name: 'Blog Edukasi Mandarin',
            description: 'Kumpulan artikel tips belajar bahasa Mandarin dan panduan beasiswa kuliah ke China.',
            url: 'https://www.brightmandarin.courses/berita',
          },
          {
            '@type': 'SiteNavigationElement',
            position: 5,
            name: 'Lokasi Center Kelapa Gading',
            description: 'Alamat lengkap, rute Google Maps, dan jam operasional Learning Center Kelapa Gading.',
            url: 'https://www.brightmandarin.courses/#lokasi',
          },
        ],
      },
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
      <body className="antialiased text-brand-charcoal bg-[#FFFEF8] selection:bg-orange-500 selection:text-white overflow-x-hidden w-full max-w-full">
        <Navbar />
        <main className="pt-[66px] sm:pt-[70px] overflow-x-hidden w-full max-w-full">{children}</main>
        <Footer settings={siteSettings} />
        <PromoModal promoData={promoData} />

        {/* Floating WhatsApp Action Button with Official Logo (Bottom Right) */}
        <a
          href={siteSettings.whatsappUtama || DEFAULT_WHATSAPP_URL}
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
