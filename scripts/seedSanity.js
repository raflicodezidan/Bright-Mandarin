const { createClient } = require('@sanity/client');

const token = process.env.SANITY_API_WRITE_TOKEN || 'skBWckgdWyVnq0YVnX7iaSNkaH1cUjl2LaexK3Hjq1dazDwZQxSOO4AltCAhCpoGDUdrMwYwV3fNyIhUUhjXbU9and4mamRkoPNAErpQfMKM1BSP8hOpic9UnIr7Ux8kMDUKJLZ8xblnd4L4Y6GCi0hX8tWl2FJEQNVvwDr9utTVt11KXGl5';
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '9f5rpp8c';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-03-12',
  token,
  useCdn: false,
});

async function uploadImageFromUrl(url, filename) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const asset = await client.assets.upload('image', buffer, { filename });
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    };
  } catch (err) {
    console.warn(`Failed to upload image ${filename}:`, err.message);
    return null;
  }
}

async function runSeed() {
  console.log('--- STARTING SANITY AUTO-SEED ---');
  console.log(`Project ID: ${projectId}, Dataset: ${dataset}`);

  // 1. Seed Site Settings (Singleton)
  console.log('Seeding Site Settings...');
  const heroImageAsset = await uploadImageFromUrl(
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=80',
    'hero-main.jpg'
  );

  const siteSettingsDoc = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    namaSitus: 'Bright Mandarin Education',
    tagline: 'Kursus Bahasa Mandarin No. 1 Berstandar HSK 6 & Beasiswa Tiongkok',
    deskripsi: 'Lembaga kursus bahasa Mandarin terakreditasi dengan silabus akselerasi interaktif 3-4 bulan dan tutor bersertifikasi HSK 6.',
    teleponHotline: '089699288009',
    whatsappUtama: 'https://api.whatsapp.com/send/?phone=6289699288009&text=Halo+Admin+Bright+Mandarin%2C+saya+ingin+tanya+program+kursus+bahasa+Mandarin',
    email: 'halo@brightmandarin.com',
    alamatPusat: 'Jl. Raya Venesia, RW.5, Klp. Gading Bar., Kec. Klp. Gading, Jkt Utara, Daerah Khusus Ibukota Jakarta 14240',
    jamOperasional: 'Senin - Minggu: 09.00 - 21.00 WIB',
    instagramUrl: 'https://instagram.com/brightmandarin',
    instagramHandle: '@brightmandarin',
    tiktokUrl: 'https://tiktok.com/@brightmandarin',
    tiktokHandle: '@brightmandarin',
    facebookUrl: 'https://facebook.com/brightmandarin',
    facebookName: 'Bright Mandarin',
    youtubeUrl: 'https://youtube.com/@brightmandarin',
    youtubeChannel: 'Bright Mandarin Channel',
    linkedinUrl: 'https://linkedin.com/company/bright-mandarin',
    linkedinName: 'Bright Mandarin Education',
    heroHeadlineMain: 'Bicara Mandarin Lancar & Raih',
    heroHeadlineHighlight: 'Beasiswa ke Tiongkok',
    heroSubheadline: 'Belajar bahasa Mandarin dengan metode akselerasi interaktif 3 - 4 bulan. Dibimbing langsung oleh para Laoshi ceria bersertifikasi HSK 6 dari universitas top Tiongkok!',
    ctaBannerTitle: 'Yuk, Mulai Petualangan Baru! Belajar Mandarin Seru & Pasti Lulus!',
    ctaBannerSubtitle: 'Daftarkan diri Anda atau putra-putri tercinta sekarang juga. Dapatkan FREE Placement Test dan konsultasi kurikulum langsung bersama Laoshi.',
    ...(heroImageAsset ? { heroPhoto: heroImageAsset } : {}),
  };
  await client.createOrReplace(siteSettingsDoc);
  console.log('✓ Site Settings seeded.');

  // 2. Seed Popup Promo (Singleton)
  console.log('Seeding Popup Promo...');
  const popupPromoDoc = {
    _id: 'popupPromo',
    _type: 'popupPromo',
    aktif: true,
    tipeTampilan: 'template_brosur',
    judulPromo: 'Promo Spesial Pendaftaran Batch Baru Bright Mandarin',
    linkTujuan: 'https://api.whatsapp.com/send/?phone=6289699288009&text=Halo+Admin+Bright+Mandarin%2C+saya+ingin+klaim+Promo+Diskon+Brosur+dan+Free+Placement+Test',
    teksTombol: 'Klaim Promo via WhatsApp',
  };
  await client.createOrReplace(popupPromoDoc);
  console.log('✓ Popup Promo seeded.');

  // 3. Seed Programs
  console.log('Seeding Programs...');
  const programsData = [
    {
      judul: 'Mandarin Kids & Teens (Usia 4 - 15 Tahun)',
      slug: { current: 'mandarin-kids-teens' },
      kategori: 'Kids',
      tipeKelas: 'Online',
      ringkasan: 'Metode fun learning berbasis lagu, cerita, dan animasi interaktif untuk menumbuhkan minat belajar anak sejak dini.',
      durasi: '3 - 4 Bulan per Level',
      targetLevel: 'YCT 1 - 4 & HSK 1 - 2',
      harga: 'Mulai Rp 650.000 / bln',
      keunggulan: [
        'Pendekatan psikologi ramah anak',
        'Game & multimedia interaktif',
        'Laporan perkembangan belajar bulanan ke orang tua',
      ],
      imgUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80',
      urutan: 1,
    },
    {
      judul: 'Intensive HSK 1 - 6 Preparation',
      slug: { current: 'intensive-hsk-preparation' },
      kategori: 'HSK',
      tipeKelas: 'Online',
      ringkasan: 'Program intensif persiapan ujian sertifikasi resmi internasional HSK dengan drilling soal asli dan tips rahasia kelulusan skor tinggi.',
      durasi: '3 Bulan per Level',
      targetLevel: 'Sertifikasi Resmi HSK 1 - 6',
      harga: 'Mulai Rp 850.000 / bln',
      keunggulan: [
        'FREE jasa pendaftaran ujian ke pusat HSK China',
        'Bank soal ujian asli 5 tahun terakhir',
        'Garansi mengulang gratis jika tidak lulus',
      ],
      imgUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80',
      urutan: 2,
    },
    {
      judul: 'Business Mandarin & Corporate Training',
      slug: { current: 'business-mandarin-corporate' },
      kategori: 'Bisnis',
      tipeKelas: 'Offline',
      ringkasan: 'Fokus kosakata praktis negosiasi dagang, etika bisnis Tiongkok, kontrak kerja sama, dan komunikasi supplier pabrik.',
      durasi: '4 Bulan Intensif',
      targetLevel: 'BCT (Business Chinese Test)',
      harga: 'Mulai Rp 1.200.000 / bln',
      keunggulan: [
        'Simulasi negosiasi & presentasi bisnis',
        'Studi kasus transaksi supplier Tiongkok nyata',
        'Sertifikat kompetensi profesional',
      ],
      imgUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80',
      urutan: 3,
    },
    {
      judul: 'Bimbingan Beasiswa Studi ke Tiongkok (CSC & CIS)',
      slug: { current: 'bimbingan-beasiswa-tiongkok' },
      kategori: 'Studi ke Tiongkok',
      tipeKelas: 'Home Private',
      ringkasan: 'Paket bimbingan menyeluruh: percepatan HSK level beasiswa, review motivation letter, dokumen aplikasi, hingga simulasi wawancara kampus.',
      durasi: '6 Bulan Bimbingan',
      targetLevel: 'HSK 4 - 6 & Lolos Beasiswa S1/S2',
      harga: 'Konsultasi Privat',
      keunggulan: [
        'Review essay oleh alumni penerima beasiswa',
        'Daftar rekomendasi universitas top Tiongkok',
        'Tingkat kelulusan beasiswa 94%',
      ],
      imgUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
      urutan: 4,
    },
  ];

  for (const prog of programsData) {
    const imgAsset = await uploadImageFromUrl(prog.imgUrl, `${prog.slug.current}.jpg`);
    await client.create({
      _type: 'program',
      judul: prog.judul,
      slug: prog.slug,
      kategori: prog.kategori,
      tipeKelas: prog.tipeKelas,
      ringkasan: prog.ringkasan,
      durasi: prog.durasi,
      targetLevel: prog.targetLevel,
      harga: prog.harga,
      keunggulan: prog.keunggulan,
      urutan: prog.urutan,
      ...(imgAsset ? { gambar: imgAsset } : {}),
    });
  }
  console.log('✓ Programs seeded.');

  // 4. Seed Pengajar (Laoshi)
  console.log('Seeding Pengajar...');
  const pengajarData = [
    {
      nama: 'Zhang Wei Laoshi (张伟老师)',
      gelar: 'Master of Teaching Chinese as a Foreign Language (BLCU Beijing)',
      spesialisasi: 'HSK 5 - 6 Specialist & Persiapan Beasiswa Tiongkok',
      sertifikasi: 'Sertifikasi Min. HSK 6 (Skor 292/300) & Hanban International Teacher',
      bio: 'Memiliki pengalaman mengajar bahasa Mandarin selama lebih dari 8 tahun untuk siswa internasional di Beijing dan Jakarta. Telah membimbing ratusan murid lolos beasiswa penuh ke Tiongkok.',
      imgUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80',
      urutan: 1,
    },
    {
      nama: 'Felicia Kusuma Laoshi, B.Ed',
      gelar: 'Bachelor of Chinese Language & Literature (Fudan University Shanghai)',
      spesialisasi: 'Mandarin Kids & Fun Interactive Pinyin Specialist',
      sertifikasi: 'Sertifikasi Min. HSK 6 & CTCSOL Certified',
      bio: 'Spesialis dalam merancang kurikulum interaktif anak usia dini dan remaja. Menguasai teknik pengajaran berbasis gamifikasi dan storytelling yang menyenangkan.',
      imgUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80',
      urutan: 2,
    },
    {
      nama: 'Evelyn Wijaya Laoshi, M.A',
      gelar: 'Master of Applied Linguistics (Tsinghua University Beijing)',
      spesialisasi: 'Business Chinese & Daily Conversation Specialist',
      sertifikasi: 'Sertifikasi Min. HSK 6 & Professional Business Chinese Assessor',
      bio: 'Fokus pada pelatihan komunikasi praktis untuk kalangan profesional, importir, dan eksekutif perusahaan multinasional yang bertransaksi dengan rekanan Tiongkok.',
      imgUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80',
      urutan: 3,
    },
    {
      nama: 'Chen Ming Laoshi (陈明老师)',
      gelar: 'Bachelor of Arts in Chinese Pedagogy (East China Normal University)',
      spesialisasi: 'Grammar Accelerator & Intensive HSK 1 - 4 Foundation',
      sertifikasi: 'Sertifikasi Min. HSK 6 & Native Mandarin Pronunciation Expert',
      bio: 'Dikenal dengan gaya mengajarnya yang runut, sabar, dan sangat analitis dalam membedah nada pinyin serta logika radikal aksara Hanzi untuk pemula.',
      imgUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
      urutan: 4,
    },
  ];

  for (const p of pengajarData) {
    const imgAsset = await uploadImageFromUrl(p.imgUrl, `${p.nama.replace(/[^a-z0-9]/gi, '_')}.jpg`);
    await client.create({
      _type: 'pengajar',
      nama: p.nama,
      gelar: p.gelar,
      spesialisasi: p.spesialisasi,
      sertifikasi: p.sertifikasi,
      bio: p.bio,
      urutan: p.urutan,
      ...(imgAsset ? { foto: imgAsset } : {}),
    });
  }
  console.log('✓ Pengajar seeded.');

  // 5. Seed Keunggulan
  console.log('Seeding Keunggulan...');
  const keunggulanData = [
    {
      title: 'Sertifikasi Min. HSK 6',
      badge: 'Jaminan Kualitas',
      desc: 'Seluruh Laoshi di Bright Mandarin memiliki latar belakang pendidikan formal dengan sertifikasi minimal HSK 6 dari universitas bahasa Mandarin ternama di Tiongkok.',
      urutan: 1,
    },
    {
      title: 'Kelas Kids & Dewasa',
      badge: 'Fleksibel Usia',
      desc: 'Memiliki kurikulum berjenjang terpisah yang disesuaikan dengan psikologi anak (usia 4-15 th) serta kebutuhan profesional dan mahasiswa dewasa.',
      urutan: 2,
    },
    {
      title: 'Study Plan Terstruktur 3-4 Bulan',
      badge: 'Target Pasti',
      desc: 'Setiap level memiliki target pencapaian terukur dengan durasi 3 - 4 bulan sehingga murid tidak berputar-putar tanpa arah dan cepat menguasai target level.',
      urutan: 3,
    },
    {
      title: 'FREE Jasa Registrasi Ujian HSK',
      badge: 'Gratis Pengurusan',
      desc: 'Bagi murid yang hendak mengikuti ujian HSK resmi internasional dari Tiongkok, tim kami mengurus seluruh proses pendaftaran tanpa biaya admin tambahan.',
      urutan: 4,
    },
    {
      title: 'Metode Sesuai Kebutuhan',
      badge: 'Custom Learning',
      desc: 'Materi dapat disesuaikan: mulai dari HSK 1 - 6, Hanzi Tradisional / Simplified, Speaking & Daily Conversation, hingga Business Chinese untuk ekspansi usaha.',
      urutan: 5,
    },
    {
      title: 'Garansi Mengulang Gratis',
      badge: 'Garansi Siswa',
      desc: 'Apabila kehadiran di atas 90% dan mengerjakan seluruh tugas namun belum lulus ujian level, kami berikan fasilitas mengulang kelas secara cuma-cuma.',
      urutan: 6,
    },
  ];

  for (const k of keunggulanData) {
    await client.create({
      _type: 'keunggulan',
      title: k.title,
      badge: k.badge,
      desc: k.desc,
      urutan: k.urutan,
    });
  }
  console.log('✓ Keunggulan seeded.');

  // 6. Seed Testimoni
  console.log('Seeding Testimoni...');
  const testimoniData = [
    {
      nama: 'Kevin Sanjaya',
      peran: 'Penerima Beasiswa S1 Tsinghua University',
      program: 'Intensive HSK 5 & Bimbingan Beasiswa',
      rating: 5,
      komentar: 'Berkat bimbingan intensif Laoshi Zhang Wei di Bright Mandarin, saya berhasil lulus HSK 5 dalam waktu 7 bulan dari nol! Simulasi wawancara dan review motivation letter-nya sangat membantu hingga saya lolos beasiswa penuh.',
      imgUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
      urutan: 1,
    },
    {
      nama: 'Jessica Natalie',
      peran: 'Orang Tua Siswa (Chloe, 7 Tahun)',
      program: 'Mandarin Kids & Teens',
      rating: 5,
      komentar: 'Anak saya Chloe dulunya takut dan bosan kalau belajar Mandarin di sekolah. Tapi setelah ikut kelas Kids di Bright Mandarin bersama Laoshi Felicia, dia malah antusias menyanyi lagu Mandarin dan hafal puluhan Hanzi setiap minggu!',
      imgUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
      urutan: 2,
    },
    {
      nama: 'Michael Tanudjaja',
      peran: 'Importir & Managing Director PT Logistik Prima',
      program: 'Business Mandarin & Negotiation',
      rating: 5,
      komentar: 'Materi Business Mandarin sangat tepat sasaran untuk keperluan negosiasi dengan pabrik di Guangzhou dan Yiwu. Sekarang saya tidak perlu selalu bergantung pada penerjemah saat inspeksi supplier ke China.',
      imgUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
      urutan: 3,
    },
    {
      nama: 'Amanda Stephanie',
      peran: 'Mahasiswi Universitas Indonesia',
      program: 'Daily Conversation & Speaking Fluency',
      rating: 5,
      komentar: 'Koreksi nada 1 sampai 4 dari Laoshi Evelyn sangat detail dan sabar! Kelas speaking-nya seru, tidak bikin tegang, dan saya jadi jauh lebih percaya diri ngobrol langsung dengan native speaker.',
      imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80',
      urutan: 4,
    },
  ];

  for (const t of testimoniData) {
    const imgAsset = await uploadImageFromUrl(t.imgUrl, `${t.nama.replace(/[^a-z0-9]/gi, '_')}.jpg`);
    await client.create({
      _type: 'testimoni',
      nama: t.nama,
      peran: t.peran,
      program: t.program,
      rating: t.rating,
      komentar: t.komentar,
      urutan: t.urutan,
      ...(imgAsset ? { foto: imgAsset } : {}),
    });
  }
  console.log('✓ Testimoni seeded.');

  // 7. Seed Berita
  console.log('Seeding Berita...');
  const beritaData = [
    {
      judul: 'Panduan Lengkap Syarat & Tips Meraih Beasiswa Kuliah ke Tiongkok 2026',
      slug: { current: 'panduan-beasiswa-kuliah-tiongkok-2026' },
      tanggal: '2026-03-15',
      kategori: 'Info Beasiswa',
      ringkasan: 'Pelajari perbedaan beasiswa Chinese Government Scholarship (CSC), International Chinese Language Teachers (CIS), serta tahapan pendaftarannya.',
      imgUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
    },
    {
      judul: '5 Cara Cepat Menghafal Goresan Aksara Hanzi Tanpa Mudah Lupa',
      slug: { current: 'cara-cepat-menghafal-aksara-hanzi' },
      tanggal: '2026-03-10',
      kategori: 'Tips Belajar',
      ringkasan: 'Pahami logika radikal dasar dan sistem spaced repetition untuk menguasai 500 kosakata Mandarin dalam 3 bulan pertama.',
      imgUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80',
    },
    {
      judul: 'Mengenal Format Baru Ujian HSK 3.0: Apa Saja Perubahan & Strateginya?',
      slug: { current: 'format-baru-ujian-hsk-3-0' },
      tanggal: '2026-03-05',
      kategori: 'Persiapan HSK',
      ringkasan: 'Kupas tuntas penambahan kosakata, sesi speaking wajib, dan simulasi soal terbaru agar tetap lulus dengan skor maksimal.',
      imgUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&auto=format&fit=crop&q=80',
    },
  ];

  for (const b of beritaData) {
    const imgAsset = await uploadImageFromUrl(b.imgUrl, `${b.slug.current}.jpg`);
    await client.create({
      _type: 'berita',
      judul: b.judul,
      slug: b.slug,
      tanggal: b.tanggal,
      kategori: b.kategori,
      ringkasan: b.ringkasan,
      ...(imgAsset ? { gambarUtama: imgAsset } : {}),
    });
  }
  console.log('✓ Berita seeded.');

  // 8. Seed Galeri
  console.log('Seeding Galeri...');
  const galeriData = [
    {
      judul: 'Suasana Kelas Interaktif Mandarin Kids & Teens',
      tanggal: '2026-03-01',
      kategori: 'Kelas',
      deskripsi: 'Dokumentasi pembelajaran interaktif anak-anak dengan flashcards dan roleplay percakapan.',
      imgUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80',
    },
    {
      judul: 'Workshop Budaya & Seni Kaligrafi Kuas Shufa',
      tanggal: '2026-02-20',
      kategori: 'Budaya',
      deskripsi: 'Workshop menulis aksara Hanzi tradisional menggunakan kuas tinta bersama Laoshi native.',
      imgUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&auto=format&fit=crop&q=80',
    },
  ];

  for (const g of galeriData) {
    const imgAsset = await uploadImageFromUrl(g.imgUrl, 'galeri-sample.jpg');
    await client.create({
      _type: 'galeri',
      judul: g.judul,
      tanggal: g.tanggal,
      kategori: g.kategori,
      deskripsi: g.deskripsi,
      ...(imgAsset ? { foto: [{ _type: 'image', asset: imgAsset.asset, caption: g.judul }] } : {}),
    });
  }
  console.log('✓ Galeri seeded.');

  console.log('--- AUTO-SEED SELESAI DENGAN SUKSES! ---');
}

runSeed().catch(err => {
  console.error('SEED ERROR:', err);
  process.exit(1);
});
