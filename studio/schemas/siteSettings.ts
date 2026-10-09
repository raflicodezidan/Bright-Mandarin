export default {
  name: 'siteSettings',
  title: 'Pengaturan Konten & Teks Seluruh Website',
  type: 'document',
  fieldsets: [
    { name: 'kontak', title: '1. Identitas Lembaga & Kontak', options: { collapsible: true, collapsed: false } },
    { name: 'sosmed', title: '2. Media Sosial', options: { collapsible: true, collapsed: true } },
    { name: 'hero', title: '3. Bagian Hero (Header Beranda)', options: { collapsible: true, collapsed: false } },
    { name: 'whyUs', title: '4. Bagian Mengapa Memilih Kami (Why Choose Us)', options: { collapsible: true, collapsed: false } },
    { name: 'learningModes', title: '5. Bagian Metode Belajar (Online/Offline/Privat)', options: { collapsible: true, collapsed: false } },
    { name: 'programSection', title: '6. Bagian Preview Program Kursus Unggulan', options: { collapsible: true, collapsed: false } },
    { name: 'achievementSection', title: '7. Bagian Achievement Murid-Murid', options: { collapsible: true, collapsed: false } },
    { name: 'beritaSection', title: '8. Bagian Preview Blog & Tips Mandarin', options: { collapsible: true, collapsed: false } },
    { name: 'lokasiSection', title: '9. Bagian Lokasi Learning Center', options: { collapsible: true, collapsed: false } },
    { name: 'socialSection', title: '10. Bagian Media Sosial / Instagram Feed', options: { collapsible: true, collapsed: false } },
    { name: 'testimoniSection', title: '11. Bagian Testimoni & Ulasan Siswa', options: { collapsible: true, collapsed: false } },
    { name: 'ctaBanner', title: '12. Bagian Banner Ajakan Belajar (CTA Bawah)', options: { collapsible: true, collapsed: false } },
  ],
  fields: [
    // ----------------------------------------------------
    // 1. Identitas & Kontak
    // ----------------------------------------------------
    {
      name: 'namaSitus',
      title: 'Nama Lembaga / Brand',
      type: 'string',
      fieldset: 'kontak',
      initialValue: 'Bright Mandarin Education',
    },
    {
      name: 'tagline',
      title: 'Tagline Utama',
      type: 'string',
      fieldset: 'kontak',
      initialValue: 'Kursus Bahasa Mandarin No. 1 Berstandar HSK 6 & Beasiswa Tiongkok',
    },
    {
      name: 'deskripsi',
      title: 'Deskripsi Profil Lembaga',
      type: 'text',
      rows: 3,
      fieldset: 'kontak',
    },
    {
      name: 'teleponHotline',
      title: 'Nomor Telepon Hotline / WhatsApp',
      type: 'string',
      fieldset: 'kontak',
      initialValue: '+62 858-9059-2738',
    },
    {
      name: 'whatsappUtama',
      title: 'Link WhatsApp Pendaftaran Utama',
      type: 'url',
      fieldset: 'kontak',
      initialValue: 'https://api.whatsapp.com/send/?phone=6285890592738&text=Halo+Admin+Bright+Mandarin%2C+saya+ingin+tanya+program+kursus+bahasa+Mandarin',
    },
    {
      name: 'email',
      title: 'Email Resmi',
      type: 'string',
      fieldset: 'kontak',
      initialValue: 'coursebrightmandarin@gmail.com',
    },
    {
      name: 'alamatPusat',
      title: 'Alamat Kantor / Center Utama',
      type: 'text',
      rows: 3,
      fieldset: 'kontak',
      initialValue: 'Jl. Raya Venesia, RW.5, Klp. Gading Bar., Kec. Klp. Gading, Jkt Utara, Daerah Khusus Ibukota Jakarta 14240',
    },
    {
      name: 'jamOperasional',
      title: 'Jam Operasional Layanan',
      type: 'text',
      rows: 6,
      fieldset: 'kontak',
      initialValue: `Tutoring & Kelas Reguler
Senin – Jumat: 12.00 – 18.30
Sabtu: 09.00 – 15.00
Kelas Dewasa
Senin – Jumat: 18.00 – 20.00
Jadwal kelas dapat berbeda sesuai program dan ketersediaan kelas.`,
    },

    // ----------------------------------------------------
    // 2. Media Sosial
    // ----------------------------------------------------
    {
      name: 'instagramUrl',
      title: 'Link Instagram',
      type: 'url',
      fieldset: 'sosmed',
      initialValue: 'https://instagram.com/bright_mandarin',
    },
    {
      name: 'instagramHandle',
      title: 'Username Instagram',
      type: 'string',
      fieldset: 'sosmed',
      initialValue: 'bright_mandarin',
    },
    {
      name: 'tiktokUrl',
      title: 'Link TikTok',
      type: 'url',
      fieldset: 'sosmed',
      initialValue: 'https://tiktok.com/@bright_mandarin',
    },
    {
      name: 'tiktokHandle',
      title: 'Username TikTok',
      type: 'string',
      fieldset: 'sosmed',
      initialValue: 'bright_mandarin',
    },
    {
      name: 'facebookUrl',
      title: 'Link Facebook',
      type: 'url',
      fieldset: 'sosmed',
      initialValue: 'https://facebook.com/brightmandarin',
    },
    {
      name: 'facebookName',
      title: 'Nama Halaman Facebook',
      type: 'string',
      fieldset: 'sosmed',
      initialValue: 'Bright Mandarin',
    },
    {
      name: 'youtubeUrl',
      title: 'Link YouTube Channel',
      type: 'url',
      fieldset: 'sosmed',
      initialValue: 'https://youtube.com/@brightmandarin',
    },
    {
      name: 'youtubeChannel',
      title: 'Nama Channel YouTube',
      type: 'string',
      fieldset: 'sosmed',
      initialValue: 'Bright Mandarin Channel',
    },

    // ----------------------------------------------------
    // 3. Hero Section (Header Beranda)
    // ----------------------------------------------------
    {
      name: 'heroBadgeText',
      title: 'Hero Teks Badge Kecil',
      type: 'string',
      fieldset: 'hero',
      initialValue: 'Kursus Mandarin Paling Seru & Terbukti!',
    },
    {
      name: 'heroHeadlineMain',
      title: 'Hero Judul Baris Utama (Teks Besar)',
      type: 'string',
      fieldset: 'hero',
      initialValue: 'Kursus Mandarin No. 1 di Kelapa Gading',
    },
    {
      name: 'heroHeadlineHighlight',
      title: 'Hero Judul Teks Highlight Merah',
      type: 'string',
      fieldset: 'hero',
      initialValue: 'Kuasai Mandarin, Buka Peluang ke Tiongkok!',
    },
    {
      name: 'heroSubheadline',
      title: 'Hero Deskripsi Singkat',
      type: 'text',
      rows: 3,
      fieldset: 'hero',
      initialValue: 'Belajar bahasa Mandarin dengan metode akselerasi interaktif 3 - 4 bulan. Dibimbing langsung oleh para Laoshi ceria bersertifikasi HSK 6 dari universitas top Tiongkok!',
    },
    {
      name: 'heroPrimaryCtaText',
      title: 'Teks Tombol Utama Hero (Merah)',
      type: 'string',
      fieldset: 'hero',
      initialValue: 'Daftar Sekarang',
    },
    {
      name: 'heroSecondaryCtaText',
      title: 'Teks Tombol Kedua Hero',
      type: 'string',
      fieldset: 'hero',
      initialValue: 'Lihat Program Kelas',
    },
    {
      name: 'heroBgImage',
      title: 'Custom Upload Background Hero (Opsional)',
      description: 'Upload gambar background hero kustom jika ingin mengganti latar belakang kapanpun dari Sanity.',
      type: 'image',
      fieldset: 'hero',
      options: { hotspot: true },
    },
    {
      name: 'heroPhoto',
      title: 'Foto Siswa / Showcase Hero',
      type: 'image',
      fieldset: 'hero',
      options: { hotspot: true },
    },
    {
      name: 'heroCard1Number',
      title: 'Statistik Hero 1 (Angka)',
      type: 'string',
      fieldset: 'hero',
      initialValue: '5.000+',
    },
    {
      name: 'heroCard1Text',
      title: 'Statistik Hero 1 (Keterangan)',
      type: 'string',
      fieldset: 'hero',
      initialValue: 'Alumni Puas & Fasih',
    },
    {
      name: 'heroCard2Number',
      title: 'Statistik Hero 2 (Angka)',
      type: 'string',
      fieldset: 'hero',
      initialValue: '98.7%',
    },
    {
      name: 'heroCard2Text',
      title: 'Statistik Hero 2 (Keterangan)',
      type: 'string',
      fieldset: 'hero',
      initialValue: 'Kelulusan Ujian HSK',
    },
    {
      name: 'heroCard3Number',
      title: 'Statistik Hero 3 (Angka)',
      type: 'string',
      fieldset: 'hero',
      initialValue: '100%',
    },
    {
      name: 'heroCard3Text',
      title: 'Statistik Hero 3 (Keterangan)',
      type: 'string',
      fieldset: 'hero',
      initialValue: 'Laoshi Lulusan China',
    },

    // ----------------------------------------------------
    // 4. Bagian Mengapa Memilih Kami (Why Choose Us)
    // ----------------------------------------------------
    {
      name: 'whyUsTitle',
      title: 'Judul Utama Bagian Mengapa Memilih Kami',
      type: 'text',
      rows: 2,
      fieldset: 'whyUs',
      initialValue: 'MENGAPA MEMILIH\nBRIGHT MANDARIN?',
    },
    {
      name: 'whyUsSubtitle',
      title: 'Sub-Judul Bagian Mengapa Memilih Kami',
      type: 'string',
      fieldset: 'whyUs',
      initialValue: 'Belajar Mandarin Lebih Cepat, Seru, & Bergaransi Lulus',
    },
    {
      name: 'whyUsDesc',
      title: 'Paragraf Deskripsi Bagian Mengapa Memilih Kami',
      type: 'text',
      rows: 3,
      fieldset: 'whyUs',
      initialValue: 'Kurikulum akselerasi terbukti, materi interaktif yang menyenangkan, serta bimbingan intensif dari para Laoshi terbaik lulusan Tiongkok.',
    },

    // ----------------------------------------------------
    // 5. Bagian Metode Belajar (Online/Offline/Privat)
    // ----------------------------------------------------
    {
      name: 'learningModesTitle',
      title: 'Judul Utama Bagian Metode Belajar',
      type: 'string',
      fieldset: 'learningModes',
      initialValue: 'PILIHAN METODE BELAJAR',
    },
    {
      name: 'learningModesSubtitle',
      title: 'Sub-Judul Bagian Metode Belajar',
      type: 'string',
      fieldset: 'learningModes',
      initialValue: 'Pilihan Format Belajar Online, Offline Center, & Home Private',
    },
    {
      name: 'learningModesDesc',
      title: 'Paragraf Deskripsi Bagian Metode Belajar',
      type: 'text',
      rows: 3,
      fieldset: 'learningModes',
      initialValue: 'Mulai dari kelas tatap muka interaktif di Learning Center Kelapa Gading, kelas daring live dari rumah, hingga guru privat eksklusif.',
    },
    {
      name: 'learningModesBadge',
      title: 'Badge Kartu Kelas Offline',
      type: 'string',
      fieldset: 'learningModes',
      initialValue: 'Tatap Muka',
    },
    {
      name: 'learningModesCardTitle',
      title: 'Judul Kartu Kelas Offline',
      type: 'string',
      fieldset: 'learningModes',
      initialValue: 'Kelas Offline Center',
    },
    {
      name: 'learningModesCardImage',
      title: 'Ikon / Gambar Kartu Kelas Offline (Opsional)',
      description: 'Upload gambar/ilustrasi custom jika ingin mengganti ikon tatap muka.',
      type: 'image',
      fieldset: 'learningModes',
      options: { hotspot: true },
    },
    {
      name: 'learningModesPoints',
      title: 'Daftar Poin Keunggulan & Fasilitas Kelas Offline',
      description: 'Daftar fasilitas dan keunggulan yang tampil pada checklist kartu kelas offline.',
      type: 'array',
      of: [{ type: 'string' }],
      fieldset: 'learningModes',
      initialValue: [
        'Belajar langsung di Learning Center Kelapa Gading',
        'Fasilitas multimedia & perpustakaan buku',
        'Simulasi percakapan dan role-play langsung',
        'Suasana belajar fokus bersama teman sebaya',
        'Laporan nilai dan performance siswa secara berkala',
        'Laporan video pembelajaran dan homework siswa secara berkala',
      ],
    },
    {
      name: 'learningModesButtonText',
      title: 'Teks Tombol Aksi Kartu',
      type: 'string',
      fieldset: 'learningModes',
      initialValue: 'Lihat Lokasi Center',
    },
    {
      name: 'learningModesButtonLink',
      title: 'Link Tujuan Tombol Aksi Kartu',
      type: 'string',
      fieldset: 'learningModes',
      initialValue: '/#lokasi',
    },

    // ----------------------------------------------------
    // 6. Bagian Preview Program Kursus Unggulan
    // ----------------------------------------------------
    {
      name: 'programSectionTitle',
      title: 'Judul Bagian Program Unggulan',
      type: 'string',
      fieldset: 'programSection',
      initialValue: 'PROGRAM KURSUS UNGGULAN',
    },
    {
      name: 'programSectionSubtitle',
      title: 'Sub-Judul Bagian Program Unggulan',
      type: 'string',
      fieldset: 'programSection',
      initialValue: 'Pilihan Program Kursus Mandarin Favorit & Terstruktur',
    },
    {
      name: 'programSectionDesc',
      title: 'Deskripsi Bagian Program Unggulan',
      type: 'text',
      rows: 3,
      fieldset: 'programSection',
      initialValue: 'Kurikulum terstruktur mulai dari anak-anak hingga persiapan profesional dan beasiswa universitas di China.',
    },

    // ----------------------------------------------------
    // 7. Bagian Achievement Murid-Murid
    // ----------------------------------------------------
    {
      name: 'achievementSectionTitle',
      title: 'Judul Bagian Achievement Murid',
      type: 'string',
      fieldset: 'achievementSection',
      initialValue: 'ACHIEVEMENT MURID BRIGHT MANDARIN',
    },
    {
      name: 'achievementSectionSubtitle',
      title: 'Sub-Judul Bagian Achievement Murid',
      type: 'string',
      fieldset: 'achievementSection',
      initialValue: 'Small Steps, Big Progress',
    },
    {
      name: 'achievementSectionDesc',
      title: 'Deskripsi Bagian Achievement Murid',
      type: 'text',
      rows: 3,
      fieldset: 'achievementSection',
      initialValue: 'Every test is a step closer to my bigger goals. Bukti nyata hasil belajar dan dedikasi murid-murid kami dalam meraih skor memuaskan pada ujian HSK dan HSKK.',
    },

    // ----------------------------------------------------
    // 8. Bagian Preview Blog & Tips Mandarin
    // ----------------------------------------------------
    {
      name: 'beritaSectionTitle',
      title: 'Judul Bagian Blog & Berita',
      type: 'string',
      fieldset: 'beritaSection',
      initialValue: 'BLOG BRIGHT MANDARIN',
    },
    {
      name: 'beritaSectionSubtitle',
      title: 'Sub-Judul Bagian Blog & Berita',
      type: 'string',
      fieldset: 'beritaSection',
      initialValue: 'Tips Belajar & Info Beasiswa Kuliah ke Tiongkok',
    },
    {
      name: 'beritaSectionDesc',
      title: 'Deskripsi Bagian Blog & Berita',
      type: 'text',
      rows: 3,
      fieldset: 'beritaSection',
      initialValue: 'Wawasan praktis seputar tata bahasa Mandarin, persiapan ujian HSK, dan kisah sukses para alumni.',
    },

    // ----------------------------------------------------
    // 9. Bagian Lokasi Learning Center
    // ----------------------------------------------------
    {
      name: 'lokasiSectionTitle',
      title: 'Judul Bagian Lokasi Center',
      type: 'string',
      fieldset: 'lokasiSection',
      initialValue: 'LOKASI LEARNING CENTER',
    },
    {
      name: 'lokasiSectionSubtitle',
      title: 'Sub-Judul Bagian Lokasi Center',
      type: 'string',
      fieldset: 'lokasiSection',
      initialValue: 'Kunjungi Kantor & Ruang Kelas Resmi Bright Mandarin',
    },
    {
      name: 'lokasiSectionDesc',
      title: 'Deskripsi Bagian Lokasi Center',
      type: 'text',
      rows: 3,
      fieldset: 'lokasiSection',
      initialValue: 'Pusat bimbingan belajar bahasa Mandarin modern di Kelapa Gading, Jakarta Utara dengan fasilitas ruang kelas ber-AC, smart multimedia, dan konsultasi gratis.',
    },

    // ----------------------------------------------------
    // 10. Bagian Media Sosial / Instagram Feed
    // ----------------------------------------------------
    {
      name: 'socialSectionTitle',
      title: 'Judul Bagian Media Sosial',
      type: 'string',
      fieldset: 'socialSection',
      initialValue: 'MEDIA SOSIAL KAMI',
    },
    {
      name: 'socialSectionSubtitle',
      title: 'Sub-Judul Bagian Media Sosial',
      type: 'string',
      fieldset: 'socialSection',
      initialValue: 'Ikuti Keseharian, Tips Edukasi, & Aktivitas Seru di Instagram',
    },
    {
      name: 'socialSectionDesc',
      title: 'Deskripsi Bagian Media Sosial',
      type: 'text',
      rows: 3,
      fieldset: 'socialSection',
      initialValue: 'Pantau tips praktis bahasa Mandarin harian, info beasiswa Tiongkok terbaru, dan keceriaan suasana kelas kami setiap hari.',
    },
    {
      name: 'instagramPosts',
      title: 'Daftar Foto Postingan Instagram (Carousel Feed)',
      type: 'array',
      fieldset: 'socialSection',
      description: 'Upload foto-foto postingan Instagram terbaru beserta caption untuk ditampilkan di carousel beranda. Rekomendasi rasio foto/video adalah 4:5 (1080 x 1350 piksel).',
      of: [
        {
          type: 'object',
          title: 'Postingan Instagram (4:5)',
          fields: [
            {
              name: 'gambar',
              title: 'Foto Postingan / Poster (Ideal: 4:5 / 1080x1350px)',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'caption',
              title: 'Caption / Teks Postingan',
              type: 'text',
              rows: 3,
              placeholder: 'Contoh: Suasana kelas Kids Mandarin hari ini. Belajar pinyin dengan seru!',
            },
            {
              name: 'linkPost',
              title: 'Link ke Postingan Instagram (Opsional)',
              type: 'url',
              placeholder: 'https://www.instagram.com/p/xxxxxx/',
              description: 'Jika diisi, pengunjung yang mengklik foto ini akan langsung diarahkan ke postingan tersebut.',
            },
            {
              name: 'likes',
              title: 'Jumlah Likes (Opsional, misal: 250)',
              type: 'string',
              initialValue: '150+',
            },
          ],
          preview: {
            select: {
              title: 'caption',
              media: 'gambar',
              subtitle: 'likes',
            },
            prepare({ title, media, subtitle }: any) {
              return {
                title: title ? (title.length > 40 ? title.substring(0, 40) + '...' : title) : 'Postingan Instagram',
                subtitle: subtitle ? `Likes: ${subtitle}` : '',
                media,
              };
            },
          },
        },
      ],
    },
    {
      name: 'instagramEmbedWidget',
      title: 'Kode Embed Widget Instagram Otomatis (Opsional)',
      type: 'text',
      rows: 4,
      fieldset: 'socialSection',
      description: 'Jika nanti Anda menggunakan widget otomatis seperti Elfsight atau SnapWidget, tempelkan kodenya di sini. Jika diisi, widget otomatis akan menggantikan foto manual di atas.',
    },

    // ----------------------------------------------------
    // 11. Bagian Testimoni & Ulasan Siswa
    // ----------------------------------------------------
    {
      name: 'testimoniSectionTitle',
      title: 'Judul Bagian Testimoni',
      type: 'string',
      fieldset: 'testimoniSection',
      initialValue: 'TESTIMONI & ULASAN SISWA',
    },
    {
      name: 'testimoniSectionSubtitle',
      title: 'Sub-Judul Bagian Testimoni',
      type: 'string',
      fieldset: 'testimoniSection',
      initialValue: 'Kisah Sukses & Pengalaman Belajar dari 5.000+ Alumni Bright Mandarin',
    },
    {
      name: 'testimoniSectionDesc',
      title: 'Deskripsi Bagian Testimoni',
      type: 'text',
      rows: 3,
      fieldset: 'testimoniSection',
      initialValue: 'Dengarkan langsung pengalaman para siswa, orang tua murid, profesional, hingga peraih beasiswa universitas ternama Tiongkok.',
    },
    {
      name: 'googleReviewUrl',
      title: 'Link Ulasan Google Reviews (Share URL)',
      type: 'url',
      fieldset: 'testimoniSection',
      initialValue: 'https://share.google/h4ySU4mqKW4a712F3',
      description: 'Link share langsung ke profil ulasan Google Maps Bright Mandarin.',
    },

    // ----------------------------------------------------
    // 12. Bagian Banner Ajakan Belajar (CTA Bawah)
    // ----------------------------------------------------
    {
      name: 'ctaBannerBadge',
      title: 'Teks Badge Banner CTA (Kecil)',
      type: 'string',
      fieldset: 'ctaBanner',
      initialValue: 'Bersama Bright Mandarin!',
    },
    {
      name: 'ctaBannerTitle',
      title: 'Judul Utama Banner Ajakan Belajar (CTA Bawah)',
      type: 'string',
      fieldset: 'ctaBanner',
      initialValue: 'Yuk, Mulai Petualangan Baru! Belajar Mandarin Seru & Pasti Lulus!',
    },
    {
      name: 'ctaBannerSubtitle',
      title: 'Deskripsi Banner Ajakan Belajar (CTA Bawah)',
      type: 'text',
      rows: 2,
      fieldset: 'ctaBanner',
      initialValue: 'Daftarkan diri Anda atau putra-putri tercinta sekarang juga. Dapatkan FREE Placement Test dan konsultasi kurikulum langsung bersama Laoshi.',
    },
    {
      name: 'ctaBannerButtonWhatsapp',
      title: 'Teks Tombol WhatsApp (CTA Bawah)',
      type: 'string',
      fieldset: 'ctaBanner',
      initialValue: 'Daftar via WhatsApp Sekarang',
    },
    {
      name: 'ctaBannerButtonProgram',
      title: 'Teks Tombol Program (CTA Bawah)',
      type: 'string',
      fieldset: 'ctaBanner',
      initialValue: 'Eksplorasi Program Kelas',
    },
    {
      name: 'ctaBannerBgImage',
      title: 'Custom Upload Background Banner CTA (Opsional)',
      description: 'Upload gambar background khusus untuk banner CTA bawah jika ingin mengganti tampilan dari Sanity Studio.',
      type: 'image',
      fieldset: 'ctaBanner',
      options: { hotspot: true },
    },
  ],
};
