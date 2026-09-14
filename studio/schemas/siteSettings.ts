export default {
  name: 'siteSettings',
  title: 'Pengaturan Situs & Beranda',
  type: 'document',
  fields: [
    // 1. Identitas & Kontak
    {
      name: 'namaSitus',
      title: 'Nama Lembaga / Brand',
      type: 'string',
      initialValue: 'Bright Mandarin Education',
    },
    {
      name: 'tagline',
      title: 'Tagline Utama',
      type: 'string',
      initialValue: 'Kursus Bahasa Mandarin No. 1 Berstandar HSK 6 & Beasiswa Tiongkok',
    },
    {
      name: 'deskripsi',
      title: 'Deskripsi Profil Lembaga',
      type: 'text',
      rows: 3,
    },
    {
      name: 'teleponHotline',
      title: 'Nomor Telepon Hotline',
      type: 'string',
      initialValue: '089699288009',
    },
    {
      name: 'whatsappUtama',
      title: 'Link WhatsApp Pendaftaran Utama',
      type: 'url',
      initialValue: 'https://api.whatsapp.com/send/?phone=6289699288009&text=Halo+Admin+Bright+Mandarin%2C+saya+ingin+tanya+program+kursus+bahasa+Mandarin',
    },
    {
      name: 'email',
      title: 'Email Resmi',
      type: 'string',
      initialValue: 'halo@brightmandarin.com',
    },
    {
      name: 'alamatPusat',
      title: 'Alamat Kantor / Center Utama',
      type: 'text',
      rows: 2,
      initialValue: 'Jl. Raya Venesia, RW.5, Klp. Gading Bar., Kec. Klp. Gading, Jkt Utara, Daerah Khusus Ibukota Jakarta 14240',
    },
    {
      name: 'jamOperasional',
      title: 'Jam Operasional Layanan',
      type: 'string',
      initialValue: 'Senin - Minggu: 09.00 - 21.00 WIB',
    },

    // 2. Media Sosial
    {
      name: 'instagramUrl',
      title: 'Link Instagram',
      type: 'url',
      initialValue: 'https://instagram.com/brightmandarin',
    },
    {
      name: 'instagramHandle',
      title: 'Username Instagram',
      type: 'string',
      initialValue: '@brightmandarin',
    },
    {
      name: 'tiktokUrl',
      title: 'Link TikTok',
      type: 'url',
      initialValue: 'https://tiktok.com/@brightmandarin',
    },
    {
      name: 'tiktokHandle',
      title: 'Username TikTok',
      type: 'string',
      initialValue: '@brightmandarin',
    },
    {
      name: 'facebookUrl',
      title: 'Link Facebook',
      type: 'url',
      initialValue: 'https://facebook.com/brightmandarin',
    },
    {
      name: 'facebookName',
      title: 'Nama Halaman Facebook',
      type: 'string',
      initialValue: 'Bright Mandarin',
    },
    {
      name: 'youtubeUrl',
      title: 'Link YouTube Channel',
      type: 'url',
      initialValue: 'https://youtube.com/@brightmandarin',
    },
    {
      name: 'youtubeChannel',
      title: 'Nama Channel YouTube',
      type: 'string',
      initialValue: 'Bright Mandarin Channel',
    },
    {
      name: 'linkedinUrl',
      title: 'Link LinkedIn',
      type: 'url',
      initialValue: 'https://linkedin.com/company/bright-mandarin',
    },
    {
      name: 'linkedinName',
      title: 'Nama Profil LinkedIn',
      type: 'string',
      initialValue: 'Bright Mandarin Education',
    },

    // 3. Hero Section Konten
    {
      name: 'heroHeadlineMain',
      title: 'Hero Judul Baris 1',
      type: 'string',
      initialValue: 'Bicara Mandarin Lancar & Raih',
    },
    {
      name: 'heroHeadlineHighlight',
      title: 'Hero Judul Teks Highlight',
      type: 'string',
      initialValue: 'Beasiswa ke Tiongkok',
    },
    {
      name: 'heroSubheadline',
      title: 'Hero Subheadline / Deskripsi Singkat',
      type: 'text',
      rows: 3,
      initialValue: 'Belajar bahasa Mandarin dengan metode akselerasi interaktif 3 - 4 bulan. Dibimbing langsung oleh para Laoshi ceria bersertifikasi HSK 6 dari universitas top Tiongkok!',
    },
    {
      name: 'heroPhoto',
      title: 'Foto Utama Hero Showcase',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    // 4. CTA Banner (Bagian Bawah)
    {
      name: 'ctaBannerTitle',
      title: 'Judul Banner Ajakan Belajar (CTA Bawah)',
      type: 'string',
      initialValue: 'Yuk, Mulai Petualangan Baru! Belajar Mandarin Seru & Pasti Lulus!',
    },
    {
      name: 'ctaBannerSubtitle',
      title: 'Deskripsi Banner Ajakan Belajar (CTA Bawah)',
      type: 'text',
      rows: 2,
      initialValue: 'Daftarkan diri Anda atau putra-putri tercinta sekarang juga. Dapatkan FREE Placement Test dan konsultasi kurikulum langsung bersama Laoshi.',
    },
  ],
};
