export interface ProgramItem {
  _id: string;
  judul: string;
  slug: { current: string };
  kategori: string;
  ringkasan: string;
  targetUsia?: string;
  materi?: string;
  metode?: string;
  durasi?: string;
  benefit?: string;
  harga?: string;
  gambarUrl?: string;
}

export interface AchievementItem {
  _id: string;
  nama: string;
  level: string;
  skor: string;
  keterangan?: string;
  fotoUrl?: string;
  urutan?: number;
}

export interface PengajarItem {
  _id: string;
  nama: string;
  gelar: string;
  spesialisasi: string;
  bio: string;
  sertifikasi: string;
  fotoUrl: string;
  urutan: number;
}

export interface TestimoniItem {
  _id?: string;
  id?: number;
  nama: string;
  peran: string;
  program: string;
  rating: number;
  komentar: string;
  avatar?: string;
  fotoUrl?: string;
  urutan?: number;
}

export interface KeunggulanItem {
  _id?: string;
  title: string;
  badge: string;
  desc: string;
  customIconUrl?: string;
  colorClass?: string;
  urutan?: number;
}

export interface BeritaItem {
  _id: string;
  judul: string;
  slug: { current: string };
  tanggal: string;
  kategori: string;
  ringkasan: string;
  konten?: any;
  gambarUtamaUrl: string;
}

export interface GaleriItem {
  _id: string;
  judul: string;
  slug?: { current: string };
  tanggal: string;
  deskripsi: string;
  ceritaLengkap?: string;
  kategori: string;
  coverImageUrl?: string;
  videoUrl?: string;
  foto: {
    url: string;
    caption?: string;
  }[];
}

export interface CabangItem {
  nama: string;
  alamat: string;
  whatsapp: string;
  email: string;
  linkMaps: string;
  jamOperasional: string;
}

export interface PopupPromoData {
  aktif: boolean;
  tipeTampilan?: 'poster_custom' | 'template_brosur';
  posterImageUrl?: string;
  judulPromo?: string;
  linkTujuan?: string;
  teksTombol?: string;
}

export const mockPopupPromo: PopupPromoData = {
  aktif: true,
  tipeTampilan: 'template_brosur',
  posterImageUrl: '',
  judulPromo: 'Promo Spesial Pendaftaran Batch Baru Bright Mandarin',
  linkTujuan: 'https://api.whatsapp.com/send/?phone=6289699288009&text=Halo+Admin+Bright+Mandarin%2C+saya+ingin+klaim+Promo+Diskon+Brosur+dan+Free+Placement+Test',
  teksTombol: 'Klaim Promo via WhatsApp',
};

export interface SiteSettings {
  namaSitus: string;
  tagline: string;
  deskripsi: string;
  teleponHotline: string;
  whatsappUtama: string;
  email: string;
  alamatPusat: string;
  jamOperasional: string;
  instagramUrl: string;
  instagramHandle?: string;
  tiktokUrl: string;
  tiktokHandle?: string;
  facebookUrl?: string;
  facebookName?: string;
  youtubeUrl: string;
  youtubeChannel?: string;
  linkedinUrl?: string;
  linkedinName?: string;
  cabang: CabangItem[];
  // 3. Hero Section
  heroBadgeText?: string;
  heroHeadlineMain?: string;
  heroHeadlineHighlight?: string;
  heroSubheadline?: string;
  heroSecondaryCtaText?: string;
  heroBgImageUrl?: string;
  heroPhotoUrl?: string;
  heroCard1Number?: string;
  heroCard1Text?: string;
  heroCard2Number?: string;
  heroCard2Text?: string;
  // 4. Why Us
  whyUsTitle?: string;
  whyUsSubtitle?: string;
  whyUsDesc?: string;
  // 5. Learning Modes
  learningModesTitle?: string;
  learningModesSubtitle?: string;
  learningModesDesc?: string;
  // 6. Program Section
  programSectionTitle?: string;
  programSectionSubtitle?: string;
  programSectionDesc?: string;
  // 7. Achievement Murid Section
  achievementSectionTitle?: string;
  achievementSectionSubtitle?: string;
  achievementSectionDesc?: string;
  // 8. Berita Section
  beritaSectionTitle?: string;
  beritaSectionSubtitle?: string;
  beritaSectionDesc?: string;
  // 9. Lokasi Center Section
  lokasiSectionTitle?: string;
  lokasiSectionSubtitle?: string;
  lokasiSectionDesc?: string;
  // 10. Social Section
  socialSectionTitle?: string;
  socialSectionSubtitle?: string;
  socialSectionDesc?: string;
  // 11. Testimoni Section
  testimoniSectionTitle?: string;
  testimoniSectionSubtitle?: string;
  testimoniSectionDesc?: string;
  // 12. CTA Banner
  ctaBannerBadge?: string;
  ctaBannerTitle?: string;
  ctaBannerSubtitle?: string;
  ctaBannerButtonWhatsapp?: string;
  ctaBannerButtonProgram?: string;
  ctaBannerBgImageUrl?: string;
}

export const mockSiteSettings: SiteSettings = {
  namaSitus: "Bright Mandarin Education",
  tagline: "Kursus Bahasa Mandarin No. 1 Berstandar HSK 6 & Beasiswa Tiongkok",
  deskripsi: "Platform kursus bahasa Mandarin terpercaya dengan pengajar berkualifikasi HSK 6 lulusan universitas ternama Tiongkok. Menyediakan kelas Online, Offline Center di Kelapa Gading, dan Home Private.",
  teleponHotline: "089699288009",
  whatsappUtama: "https://api.whatsapp.com/send/?phone=6289699288009&text=Halo+Admin+Bright+Mandarin%2C+saya+ingin+konsultasi+kursus+Mandarin",
  email: "halo@brightmandarin.com",
  alamatPusat: "Jl. Raya Venesia, RW.5, Klp. Gading Bar., Kec. Klp. Gading, Jkt Utara, Daerah Khusus Ibukota Jakarta 14240",
  jamOperasional: "Senin - Minggu: 09.00 - 21.00 WIB",
  instagramUrl: "https://instagram.com/brightmandarin",
  instagramHandle: "@brightmandarin",
  tiktokUrl: "https://tiktok.com/@brightmandarin",
  tiktokHandle: "@brightmandarin",
  facebookUrl: "https://facebook.com/brightmandarin",
  facebookName: "Bright Mandarin",
  youtubeUrl: "https://youtube.com/@brightmandarin",
  youtubeChannel: "Bright Mandarin Channel",
  linkedinUrl: "https://linkedin.com/company/bright-mandarin",
  linkedinName: "Bright Mandarin Education",
  // Hero
  heroBadgeText: "Kursus Mandarin Paling Seru & Terbukti!",
  heroHeadlineMain: "Kursus Mandarin No. 1 di Kelapa Gading",
  heroHeadlineHighlight: "Kuasai Mandarin, Buka Peluang ke Tiongkok!",
  heroSubheadline: "Belajar bahasa Mandarin dengan metode akselerasi interaktif 3 - 4 bulan. Dibimbing langsung oleh para Laoshi berpengalaman dari universitas top Tiongkok!",
  heroSecondaryCtaText: "Lihat Program Kelas",
  heroCard1Number: "5.000+",
  heroCard1Text: "Alumni Puas & Fasih",
  heroCard2Number: "98.7%",
  heroCard2Text: "Kelulusan Ujian HSK",
  // Why Us
  whyUsTitle: "MENGAPA MEMILIH BRIGHT MANDARIN?",
  whyUsSubtitle: "Belajar Mandarin Lebih Cepat, Seru, & Bergaransi Lulus",
  whyUsDesc: "Kurikulum akselerasi terbukti, materi interaktif yang menyenangkan, serta bimbingan intensif dari para Laoshi terbaik lulusan Tiongkok.",
  // Learning Modes
  learningModesTitle: "METODE BELAJAR",
  learningModesSubtitle: "Kelas Offline Tatap Muka di Learning Center Kelapa Gading",
  learningModesDesc: "Belajar langsung bersama Laoshi di ruang kelas modern ber-AC dengan suasana interaktif, fokus, dan menyenangkan.",
  // Program Section
  programSectionTitle: "PROGRAM KURSUS UNGGULAN",
  programSectionSubtitle: "Pilihan Program Kursus Mandarin Favorit & Terstruktur",
  programSectionDesc: "Program belajar Mandarin untuk semua usia: mulai dari bimbingan akademik sekolah, kelas reguler, persiapan HSK & HSKK, hingga kelas percakapan profesional.",
  // Achievement Murid Section
  achievementSectionTitle: "ACHIEVEMENT MURID",
  achievementSectionSubtitle: "Prestasi & Skor Ujian Murid Bright Mandarin",
  achievementSectionDesc: "Bukti nyata hasil belajar murid-murid kami dalam ujian HSK dan HSKK.",
  // Berita Section
  beritaSectionTitle: "BLOG BRIGHT MANDARIN",
  beritaSectionSubtitle: "Tips Belajar & Info Beasiswa Kuliah ke Tiongkok",
  beritaSectionDesc: "Wawasan praktis seputar tata bahasa Mandarin, persiapan ujian HSK, dan kisah sukses para alumni.",
  // Lokasi Center Section
  lokasiSectionTitle: "LOKASI LEARNING CENTER",
  lokasiSectionSubtitle: "Kunjungi Kantor & Ruang Kelas Resmi Bright Mandarin",
  lokasiSectionDesc: "Pusat bimbingan belajar bahasa Mandarin modern di Kelapa Gading, Jakarta Utara dengan fasilitas ruang kelas ber-AC, smart multimedia, dan konsultasi gratis.",
  // Social Section
  socialSectionTitle: "MEDIA SOSIAL KAMI",
  socialSectionSubtitle: "Ikuti Keseharian, Tips Edukasi, & Aktivitas Seru di Instagram",
  socialSectionDesc: "Pantau tips praktis bahasa Mandarin harian, info beasiswa Tiongkok terbaru, dan keceriaan suasana kelas kami setiap hari.",
  // Testimoni Section
  testimoniSectionTitle: "TESTIMONI & ULASAN SISWA",
  testimoniSectionSubtitle: "Kisah Sukses & Pengalaman Belajar dari 5.000+ Alumni Bright Mandarin",
  testimoniSectionDesc: "Dengarkan langsung pengalaman para siswa, orang tua murid, profesional, hingga peraih beasiswa universitas ternama Tiongkok.",
  // CTA Banner
  ctaBannerBadge: "Bersama Bright Mandarin!",
  ctaBannerTitle: "Yuk, Mulai Petualangan Baru! Belajar Mandarin Seru & Pasti Lulus!",
  ctaBannerSubtitle: "Daftarkan diri Anda atau putra-putri tercinta sekarang juga. Dapatkan FREE Placement Test dan konsultasi kurikulum langsung bersama Laoshi.",
  ctaBannerButtonWhatsapp: "Daftar via WhatsApp Sekarang",
  ctaBannerButtonProgram: "Eksplorasi Program Kelas",
  cabang: [
    {
      nama: "Bright Mandarin Learning Center",
      alamat: "Jl. Raya Venesia, RW.5, Klp. Gading Bar., Kec. Klp. Gading, Jkt Utara, Daerah Khusus Ibukota Jakarta 14240",
      whatsapp: "089699288009",
      email: "halo@brightmandarin.com",
      linkMaps: "https://www.google.com/maps/search/?api=1&query=Jl.+Raya+Venesia,+RW.5,+Klp.+Gading+Bar.,+Kec.+Klp.+Gading,+Jkt+Utara,+Daerah+Khusus+Ibukota+Jakarta+14240",
      jamOperasional: "Senin - Minggu: 09.00 - 21.00 WIB"
    }
  ]
};

const HUBUNGI_KAMI = "Hubungi kami untuk informasi program dan biaya";

export const mockPrograms: ProgramItem[] = [
  {
    _id: "program-1",
    judul: "Bimbingan Belajar Akademik",
    slug: { current: "bimbingan-belajar-akademik" },
    kategori: "Akademik",
    ringkasan: "Membantu siswa memahami pelajaran Mandarin di sekolah dengan lebih baik dan meningkatkan kemampuan akademiknya melalui pembelajaran yang disesuaikan dengan kebutuhan masing-masing siswa.",
    targetUsia: "Siswa sekolah",
    materi: "Pelajaran Mandarin sesuai kurikulum sekolah",
    metode: "Personalized learning & latihan interaktif",
    durasi: "Disesuaikan dengan kebutuhan siswa",
    benefit: "Membantu memahami materi, meningkatkan kemampuan Mandarin, dan mendukung prestasi akademik",
    harga: HUBUNGI_KAMI,
    gambarUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=80"
  },
  {
    _id: "program-2",
    judul: "Kelas Reguler",
    slug: { current: "kelas-reguler" },
    kategori: "Reguler",
    ringkasan: "Mengembangkan kemampuan berbicara, membaca, menulis, dan mendengarkan bahasa Mandarin melalui metode pembelajaran yang interaktif dan disesuaikan dengan usia serta tingkat kemampuan siswa.",
    targetUsia: "Kindergarten – Adult",
    materi: "Speaking, Listening, Reading & Writing",
    metode: "Interaktif dan sesuai level kemampuan siswa",
    durasi: "Disesuaikan dengan program kelas",
    benefit: "Membangun kemampuan Mandarin secara menyeluruh dan meningkatkan kepercayaan diri dalam berkomunikasi",
    harga: HUBUNGI_KAMI,
    gambarUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80"
  },
  {
    _id: "program-3",
    judul: "Kindergarten – International Curriculum",
    slug: { current: "kindergarten-international-curriculum" },
    kategori: "Kindergarten",
    ringkasan: "Program yang dirancang untuk memenuhi kebutuhan siswa di sekolah dengan kurikulum internasional. Pembelajaran menggunakan lagu, gambar, permainan, storytelling, dan aktivitas kreatif agar anak dapat mengenal dan menggunakan Mandarin dengan cara yang menyenangkan.",
    targetUsia: "Kindergarten",
    materi: "Kosakata, percakapan dasar & aktivitas Mandarin",
    metode: "Songs, games, storytelling & creative activities",
    durasi: "Disesuaikan dengan program kelas",
    benefit: "Mengenalkan Mandarin dengan cara yang menyenangkan dan membangun kepercayaan diri anak",
    harga: HUBUNGI_KAMI,
    gambarUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80"
  },
  {
    _id: "program-4",
    judul: "Bright Mandarin Kids",
    slug: { current: "bright-mandarin-kids" },
    kategori: "Kids",
    ringkasan: "Fokus pada kemampuan percakapan dasar, pengucapan, dan penggunaan nada Mandarin yang tepat. Siswa dibimbing untuk lebih percaya diri berbicara melalui aktivitas interaktif, permainan, percakapan sederhana, dan storytelling.",
    targetUsia: "Primary 1–3",
    materi: "Percakapan dasar, kosakata & pengucapan",
    metode: "Games, storytelling & interactive speaking",
    durasi: "Disesuaikan dengan program kelas",
    benefit: "Membangun kemampuan dan kepercayaan diri berbicara Mandarin",
    harga: HUBUNGI_KAMI,
    gambarUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    _id: "program-5",
    judul: "HSK Preparation",
    slug: { current: "hsk-preparation" },
    kategori: "HSK",
    ringkasan: "Program yang menggabungkan pengembangan kemampuan Mandarin dengan persiapan ujian HSK Level 1–6. Siswa mengembangkan kemampuan membaca, menulis, memahami teks, serta penggunaan kosakata dan tata bahasa secara lebih terstruktur. Cocok untuk kebutuhan akademik maupun profesional.",
    targetUsia: "Primary 4 – Adult",
    materi: "HSK Level 1–6, kosakata, tata bahasa, membaca & menulis",
    metode: "Latihan soal, pembahasan & simulasi ujian",
    durasi: "Disesuaikan dengan level HSK",
    benefit: "Mempersiapkan siswa menghadapi ujian HSK untuk kebutuhan akademik maupun profesional",
    harga: HUBUNGI_KAMI,
    gambarUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80"
  },
  {
    _id: "program-6",
    judul: "HSKK – Hanyu Shuiping Kaoshi (Speaking Test)",
    slug: { current: "hskk-speaking-test" },
    kategori: "HSKK",
    ringkasan: "Program persiapan ujian kemampuan berbicara bahasa Mandarin. Siswa berlatih menyampaikan jawaban, mendeskripsikan gambar, melakukan percakapan, serta meningkatkan kelancaran dan kepercayaan diri dalam berbicara Mandarin sesuai tingkat ujian.",
    targetUsia: "Primary 6 – Adult",
    materi: "HSK Level 1–6, kosakata, tata bahasa, membaca & menulis",
    metode: "Latihan soal, pembahasan & simulasi ujian",
    durasi: "Disesuaikan dengan level HSK",
    benefit: "Mempersiapkan siswa menghadapi ujian HSK untuk kebutuhan akademik maupun profesional",
    harga: HUBUNGI_KAMI,
    gambarUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=80"
  },
  {
    _id: "program-7",
    judul: "Kelas Percakapan",
    slug: { current: "kelas-percakapan" },
    kategori: "Percakapan",
    ringkasan: "Program khusus untuk kebutuhan komunikasi dalam lingkungan profesional. Siswa mempelajari percakapan dan kosakata Mandarin yang digunakan dalam dunia kerja, seperti memperkenalkan diri, meeting, presentasi, komunikasi dengan klien, negosiasi, hingga situasi bisnis sehari-hari.",
    targetUsia: "Remaja – Dewasa",
    materi: "Percakapan sehari-hari & komunikasi profesional",
    metode: "Role play, speaking practice & simulasi situasi nyata",
    durasi: "Disesuaikan dengan kebutuhan siswa",
    benefit: "Meningkatkan kemampuan berkomunikasi dalam situasi sosial maupun profesional",
    harga: HUBUNGI_KAMI,
    gambarUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80"
  }
];

// Contoh tampilan saja; otomatis diganti oleh data asli begitu ada dokumen "achievement" di Sanity.
export const mockAchievement: AchievementItem[] = [
  {
    _id: "achievement-1",
    nama: "Chloe",
    level: "HSK 1",
    skor: "195/200",
    keterangan: "Bright Mandarin Kids",
    fotoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80",
    urutan: 1
  },
  {
    _id: "achievement-2",
    nama: "Nathan",
    level: "HSK 2",
    skor: "188/200",
    keterangan: "Kelas Reguler",
    fotoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80",
    urutan: 2
  },
  {
    _id: "achievement-3",
    nama: "Michelle",
    level: "HSK 3",
    skor: "285/300",
    keterangan: "HSK Preparation",
    fotoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
    urutan: 3
  },
  {
    _id: "achievement-4",
    nama: "David",
    level: "HSK 4",
    skor: "271/300",
    keterangan: "HSK Preparation",
    fotoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80",
    urutan: 4
  },
  {
    _id: "achievement-5",
    nama: "Amanda",
    level: "HSKK Dasar",
    skor: "92/100",
    keterangan: "HSKK Speaking Test",
    fotoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=80",
    urutan: 5
  }
];

export const mockPengajar: PengajarItem[] = [
  {
    _id: "peng-1",
    nama: "Zhang Wei, M.Ed.",
    gelar: "Master of Education (BLCU Beijing)",
    spesialisasi: "Senior HSK 5-6 & Beasiswa Specialist",
    bio: "Berpengalaman lebih dari 8 tahun membimbing ribuan murid Indonesia menembus skor HSK 6 dan meraih beasiswa penuh di kampus ternama seperti Tsinghua dan Peking University.",
    sertifikasi: "HSK 6 (Score 292/300), CTCSOL Certified",
    fotoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
    urutan: 1
  },
  {
    _id: "peng-2",
    nama: "Felicia Tan, B.A.",
    gelar: "Bachelor in Chinese Linguistics (Fudan University)",
    spesialisasi: "Kids & Teens Pedagogical Specialist",
    bio: "Dikenal dengan gaya mengajarnya yang sangat ceria, sabar, dan interaktif, mampu membuat anak-anak yang awalnya enggan belajar menjadi sangat antusias menguasai Hanzi.",
    sertifikasi: "HSK 6 Certified, Early Childhood Education",
    fotoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
    urutan: 2
  },
  {
    _id: "peng-3",
    nama: "Li Ming, M.B.A.",
    gelar: "MBA in International Trade (Shanghai Jiao Tong)",
    spesialisasi: "Business Chinese & Negotiation Consultant",
    bio: "Praktisi bisnis bilateral Indonesia-Tiongkok dengan pemahaman mendalam tentang budaya negosiasi, kontrak dagang, dan korespondensi bisnis korporat.",
    sertifikasi: "HSK 6, Business Chinese Trainer Certified",
    fotoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
    urutan: 3
  },
  {
    _id: "peng-4",
    nama: "Evelyn Huang, B.Ed.",
    gelar: "Bachelor in Chinese Language (Zhejiang University)",
    spesialisasi: "Daily Conversation & Pronunciation Coach",
    bio: "Spesialis dalam membedah 4 nada pinyin dan melatih otot bicara murid Indonesia agar bisa berbicara dengan intonasi natural layaknya penutur asli.",
    sertifikasi: "HSK 6 Certified, Putonghua Shuiping Ceshi (Grade 1)",
    fotoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80",
    urutan: 4
  }
];

export const mockTestimoni: TestimoniItem[] = [
  {
    _id: 'testi-1',
    id: 1,
    nama: 'Kevin Sanjaya',
    peran: 'Penerima Beasiswa S1 Tsinghua University',
    program: 'Intensive HSK 5 & Bimbingan Beasiswa',
    rating: 5,
    komentar: 'Berkat bimbingan intensif Laoshi Zhang Wei di Bright Mandarin, saya berhasil lulus HSK 5 dalam waktu 7 bulan dari nol! Simulasi wawancara dan review motivation letter-nya sangat membantu hingga saya lolos beasiswa penuh.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
    fotoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
    urutan: 1,
  },
  {
    _id: 'testi-2',
    id: 2,
    nama: 'Jessica Natalie',
    peran: 'Orang Tua Siswa (Chloe, 7 Tahun)',
    program: 'Mandarin Kids & Teens',
    rating: 5,
    komentar: 'Anak saya Chloe dulunya takut dan bosan kalau belajar Mandarin di sekolah. Tapi setelah ikut kelas Kids di Bright Mandarin bersama Laoshi Felicia, dia malah antusias menyanyi lagu Mandarin dan hafal puluhan Hanzi setiap minggu!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
    fotoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
    urutan: 2,
  },
  {
    _id: 'testi-3',
    id: 3,
    nama: 'Michael Tanudjaja',
    peran: 'Importir & Managing Director PT Logistik Prima',
    program: 'Business Mandarin & Negotiation',
    rating: 5,
    komentar: 'Materi Business Mandarin sangat tepat sasaran untuk keperluan negosiasi dengan pabrik di Guangzhou dan Yiwu. Sekarang saya tidak perlu selalu bergantung pada penerjemah saat inspeksi supplier ke China.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    fotoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    urutan: 3,
  },
  {
    _id: 'testi-4',
    id: 4,
    nama: 'Amanda Stephanie',
    peran: 'Mahasiswi Universitas Indonesia',
    program: 'Daily Conversation & Speaking Fluency',
    rating: 5,
    komentar: 'Koreksi nada 1 sampai 4 dari Laoshi Evelyn sangat detail dan sabar! Kelas speaking-nya seru, tidak bikin tegang, dan saya jadi jauh lebih percaya diri ngobrol langsung dengan native speaker.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80',
    fotoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80',
    urutan: 4,
  },
  {
    _id: 'testi-5',
    id: 5,
    nama: 'David Kusuma',
    peran: 'Software Engineer & Tech Lead',
    program: 'Intensive HSK 4 Preparation',
    rating: 5,
    komentar: 'Sistem belajar online-nya sangat rapi. Ada rekaman video yang bisa diakses kapan saja, quiz interaktif, dan bank soal latihan HSK resmi. Skor HSK 4 saya mencapai 285/300!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    fotoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    urutan: 5,
  },
  {
    _id: 'testi-6',
    id: 6,
    nama: 'Stephanie Lim',
    peran: 'Alumni Beasiswa S2 Shanghai Jiao Tong',
    program: 'Bimbingan Beasiswa & Studi ke Tiongkok',
    rating: 5,
    komentar: 'Bright Mandarin benar-benar mendampingi dari nol pendaftaran CSC, legalisir berkas, hingga keberangkatan visa. Sangat kredibel dan Laoshi-nya punya koneksi langsung dengan universitas di China.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    fotoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    urutan: 6,
  },
  {
    _id: 'testi-7',
    id: 7,
    nama: 'Raymond Hartono',
    peran: 'Founder Brand Retail Fashion',
    program: 'VIP Home Private 1-on-1',
    rating: 5,
    komentar: 'Jadwal saya sangat padat, tapi fasilitas Home Private Bright Mandarin memungkinkan tutor datang langsung ke kantor. Kurikulum disesuaikan dengan kebutuhan bisnis saya secara eksklusif.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
    fotoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
    urutan: 7,
  },
  {
    _id: 'testi-8',
    id: 8,
    nama: 'Michelle Angela',
    peran: 'Siswa SMA Kelas 12 (Persiapan HSK 3)',
    program: 'Intensive HSK 3 Preparation',
    rating: 5,
    komentar: 'Tryout berkala dan trik menghafal pola kalimat membuat ujian HSK 3 kemarin terasa jauh lebih mudah dari yang saya bayangkan. Fasilitas kelas di Kelapa Gading juga sangat nyaman dan ber-AC.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    fotoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    urutan: 8,
  },
  {
    _id: 'testi-9',
    id: 9,
    nama: 'dr. Hendra Wijaya',
    peran: 'Dokter Spesialis & Peneliti Medis',
    program: 'Daily Conversation & VIP Online',
    rating: 5,
    komentar: 'Belajar Mandarin di usia dewasa sempat membuat saya ragu, namun pendekatan komunikatif para Laoshi membuat saya cepat menangkap istilah percakapan sehari-hari. Sangat memuaskan!',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80',
    fotoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80',
    urutan: 9,
  },
  {
    _id: 'testi-10',
    id: 10,
    nama: 'Valerie Clarissa',
    peran: 'Marketing Manager E-Commerce',
    program: 'Business Mandarin & Corporate',
    rating: 5,
    komentar: 'Perusahaan kami sering meeting dengan partner regional dari Beijing. Setelah 3 bulan kursus di Bright Mandarin, saya sudah bisa mempresentasikan laporan bisnis dalam bahasa Mandarin dengan lancar.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
    fotoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
    urutan: 10,
  },
  {
    _id: 'testi-11',
    id: 11,
    nama: 'Budi Santoso',
    peran: 'Orang Tua Siswa (Nathan, 10 Tahun)',
    program: 'Mandarin Kids & Teens Offline',
    rating: 5,
    komentar: 'Metode pengajaran ramah anak dan laporan evaluasi bulanan yang diberikan sangat transparan. Nilai pelajaran Mandarin Nathan di sekolah internasionalnya naik drastis jadi A!',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80',
    fotoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80',
    urutan: 11,
  },
  {
    _id: 'testi-12',
    id: 12,
    nama: 'Clara Novita',
    peran: 'Penerima Beasiswa Zhejiang University',
    program: 'Intensive HSK 5 Preparation',
    rating: 5,
    komentar: 'Bright Mandarin adalah tempat les Mandarin terbaik yang pernah saya ikuti. Laoshi-nya lulusan universitas top Tiongkok sehingga bukan cuma mengajar bahasa tapi juga budaya dan etika setempat.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
    fotoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
    urutan: 12,
  },
  {
    _id: 'testi-13',
    id: 13,
    nama: 'Alvin Pratama',
    peran: 'Professional Exporter & Trader',
    program: 'Business Chinese & Negotiation',
    rating: 5,
    komentar: 'Kosakata ekspor impor, terminologi kontrak, dan simulasi transaksi yang diajarkan sangat praktis. Sangat worth it untuk siapa saja yang ingin ekspansi bisnis ke Tiongkok.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
    fotoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
    urutan: 13,
  },
  {
    _id: 'testi-14',
    id: 14,
    nama: 'Fiona Elizabeth',
    peran: 'Mahasiswi Arsitektur',
    program: 'Daily Conversation Interaktif',
    rating: 5,
    komentar: 'Suka banget dengan suasana belajarnya yang seru dan interaktif! Setiap sesi selalu ada praktek ngobrol langsung berpasangan sehingga tidak kaku.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80',
    fotoUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80',
    urutan: 14,
  },
  {
    _id: 'testi-15',
    id: 15,
    nama: 'Christian Surya',
    peran: 'Senior Financial Analyst',
    program: 'Intensive HSK 3 & 4',
    rating: 5,
    komentar: 'Garansi mengulang kelas gratis dan bimbingan sampai lulus memberikan rasa aman. Tapi untungnya metode belajarnya sangat efektif jadi saya langsung lulus ujian HSK dalam satu kali tes!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    fotoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    urutan: 15,
  },
  {
    _id: 'testi-16',
    id: 16,
    nama: 'Nathalie Widjaja',
    peran: 'Ibu Rumah Tangga & Mom Influencer',
    program: 'VIP Home Private (Kids)',
    rating: 5,
    komentar: 'Tutor privatnya sangat sabar dan penyayang. Kedua anak kembar saya selalu menanti-nanti jadwal les Mandarin setiap pekannya.',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&auto=format&fit=crop&q=80',
    fotoUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&auto=format&fit=crop&q=80',
    urutan: 16,
  },
  {
    _id: 'testi-17',
    id: 17,
    nama: 'Adrian Setiawan',
    peran: 'Owner Pabrik Manufaktur',
    program: 'Business Mandarin Intensive',
    rating: 5,
    komentar: 'Sekarang komunikasi dengan teknisi mesin dari Shanghai jadi jauh lebih lancar tanpa salah paham. Investasi kursus yang paling berdampak untuk operasional pabrik saya.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    fotoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    urutan: 17,
  },
  {
    _id: 'testi-18',
    id: 18,
    nama: 'Angelina Gunawan',
    peran: 'Siswa SMP Penabur (Juara Lomba Pidato Mandarin)',
    program: 'Mandarin Teens & Pronunciation Clinic',
    rating: 5,
    komentar: 'Pelatihan intonasi dan pelafalan nada dari Laoshi Zhang sangat membantu saya memenangkan juara 1 lomba pidato bahasa Mandarin tingkat provinsi!',
    avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&auto=format&fit=crop&q=80',
    fotoUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&auto=format&fit=crop&q=80',
    urutan: 18,
  },
  {
    _id: 'testi-19',
    id: 19,
    nama: 'Tommy Chandra',
    peran: 'Content Creator & Digital Nomad',
    program: 'Daily Conversation Live Zoom',
    rating: 5,
    komentar: 'Kelas online interaktifnya super fleksibel bisa saya ikuti dari mana saja. Kualitas audio, video, dan materi slide digitalnya sangat profesional!',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80',
    fotoUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80',
    urutan: 19,
  },
  {
    _id: 'testi-20',
    id: 20,
    nama: 'Cynthia Tanuwidjaja',
    peran: 'Alumni Beasiswa S1 Fudan University Shanghai',
    program: 'Intensive HSK 6 & Beasiswa China',
    rating: 5,
    komentar: 'Dari level dasar hingga berhasil tembus HSK 6 dan diterima di Fudan University, Bright Mandarin selalu menjadi rumah belajar terbaik saya. Terima kasih banyak Laoshi!',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80',
    fotoUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80',
    urutan: 20,
  },
];

export const mockKeunggulan: KeunggulanItem[] = [
  {
    _id: 'keunggulan-1',
    title: 'Sertifikasi Min. HSK 6',
    desc: 'Seluruh Laoshi di Bright Mandarin memiliki latar belakang pendidikan formal dengan sertifikasi minimal HSK 6 dari universitas bahasa Mandarin ternama di Tiongkok.',
    badge: 'Jaminan Kualitas',
    colorClass: 'text-amber-600',
    urutan: 1
  },
  {
    _id: 'keunggulan-2',
    title: 'Kelas Kids & Dewasa',
    desc: 'Memiliki kurikulum berjenjang terpisah yang disesuaikan dengan psikologi anak (usia 4-15 th) serta kebutuhan profesional dan mahasiswa dewasa.',
    badge: 'Fleksibel Usia',
    colorClass: 'text-orange-600',
    urutan: 2
  },
  {
    _id: 'keunggulan-3',
    title: 'Study Plan Terstruktur 3-4 Bulan',
    desc: 'Setiap level memiliki target pencapaian terukur dengan durasi 3 - 4 bulan sehingga murid tidak berputar-putar tanpa arah dan cepat menguasai target level.',
    badge: 'Target Pasti',
    colorClass: 'text-emerald-600',
    urutan: 3
  },
  {
    _id: 'keunggulan-4',
    title: 'FREE Jasa Registrasi Ujian HSK',
    desc: 'Bagi murid yang hendak mengikuti ujian HSK resmi internasional dari Tiongkok, tim kami mengurus seluruh proses pendaftaran tanpa biaya admin tambahan.',
    badge: 'Gratis Pengurusan',
    colorClass: 'text-rose-600',
    urutan: 4
  },
  {
    _id: 'keunggulan-5',
    title: 'Metode Sesuai Kebutuhan',
    desc: 'Materi dapat disesuaikan: mulai dari HSK 1 - 6, Hanzi Tradisional / Simplified, Speaking & Daily Conversation, hingga Business Chinese untuk ekspansi usaha.',
    badge: 'Custom Learning',
    colorClass: 'text-sky-600',
    urutan: 5
  },
  {
    _id: 'keunggulan-6',
    title: 'Jaminan Mengulang Gratis',
    desc: 'Kami memberikan garansi pengulangan kelas secara gratis bagi siswa yang belum mencapai target kelulusan HSK sesuai dengan komitmen belajar.',
    badge: 'Garansi Lulus',
    colorClass: 'text-indigo-600',
    urutan: 6
  }
];

export const mockBerita: BeritaItem[] = [
  {
    _id: "ber-1",
    judul: "5 Kunci Sukses Lolos Beasiswa Penuh Kuliah ke Tiongkok (CSC & CIS 2026)",
    slug: { current: "5-kunci-sukses-lolos-beasiswa-kuliah-tiongkok" },
    tanggal: "10 Maret 2026",
    kategori: "Info Beasiswa",
    ringkasan: "Panduan lengkap dan strategi praktis bagi pelajar Indonesia untuk mempersiapkan sertifikasi HSK, motivation letter, dan wawancara universitas top di Tiongkok.",
    konten: "Mendapatkan beasiswa kuliah di Tiongkok kini menjadi salah satu impian terbesar pelajar dan mahasiswa Indonesia. Melalui Chinese Government Scholarship (CSC) maupun International Chinese Language Teachers Scholarship (CIS), Anda berkesempatan menempuh pendidikan sarjana hingga doktoral dengan pembebasan biaya kuliah 100%, asrama gratis, serta uang saku bulanan.",
    gambarUtamaUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80"
  },
  {
    _id: "ber-2",
    judul: "Cara Cepat Menghafal Hanzi & Menguasai 4 Nada Dasar Pinyin untuk Pemula",
    slug: { current: "cara-cepat-menghafal-hanzi-menguasai-pinyin" },
    tanggal: "28 Februari 2026",
    kategori: "Tips Belajar",
    ringkasan: "Pelajari rahasia mengingat ratusan karakter Hanzi menggunakan metode radikal visual serta trik melatih otot lidah agar pelafalan nada tidak kaku.",
    konten: "Belajar bahasa Mandarin seringkali dianggap sulit karena memiliki sistem tulisan karakter Hanzi dan empat nada intonasi pinyin yang berbeda. Namun, dengan metode akselerasi yang tepat, Anda bisa menguasai dasar-dasar percakapan hanya dalam hitungan minggu.",
    gambarUtamaUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=80"
  },
  {
    _id: "ber-3",
    judul: "Mengapa Kemampuan Business Mandarin Menjadi Nilai Plus Utama di Dunia Kerja?",
    slug: { current: "mengapa-business-mandarin-penting-di-dunia-kerja" },
    tanggal: "15 Februari 2026",
    kategori: "Karir & Bisnis",
    ringkasan: "Peluang karir di perusahaan multinasional dan kemudahan ekspansi bisnis bilateral dengan penguasaan etika komunikasi bisnis Mandarin.",
    konten: "Pertumbuhan investasi perusahaan Tiongkok di Asia Tenggara, khususnya Indonesia, membuka peluang karir emas yang sangat luas bagi profesional yang mampu berkomunikasi dalam bahasa Mandarin bisnis.",
    gambarUtamaUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80"
  }
];

export const mockGaleri: GaleriItem[] = [
  {
    _id: "gal-1",
    judul: "Suasana Belajar Kelas Offline di Learning Center Kelapa Gading",
    slug: { current: "suasana-belajar-kelas-offline-kelapa-gading" },
    tanggal: "Februari 2026",
    kategori: "Kelas Offline",
    deskripsi: "Dokumentasi interaksi hangat antara laoshi dan para murid dalam simulasi percakapan dan latihan hanzi di kelas modern berfasilitas multimedia.",
    ceritaLengkap: "Kegiatan belajar tatap muka di Bright Mandarin Learning Center Kelapa Gading dirancang interaktif dan menyenangkan. Setiap sesi menggabungkan materi tata bahasa praktis, pengucapan nada (pinyin), serta latihan percakapan langsung berpasangan. Ruang kelas yang nyaman ber-AC dan dilengkapi layar interaktif membuat siswa lebih fokus dan percaya diri mengekspresikan percakapan Mandarin.",
    coverImageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    foto: [
      {
        url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80",
        caption: "Aktivitas belajar kelompok membaca teks cerita bergambar"
      },
      {
        url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80",
        caption: "Penjelasan mendalam karakter Hanzi dan goresan radikal"
      },
      {
        url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
        caption: "Diskusi seru dan latihan percakapan dua arah"
      },
      {
        url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop&q=80",
        caption: "Pemberian feedback pengucapan nada oleh laoshi"
      }
    ]
  },
  {
    _id: "gal-2",
    judul: "Perayaan Festival Imlek & Workshop Seni Kaligrafi Tionghoa (Shufa)",
    slug: { current: "perayaan-festival-imlek-workshop-kaligrafi-shufa" },
    tanggal: "Januari 2026",
    kategori: "Kegiatan Budaya",
    deskripsi: "Murid-murid diajak mempraktikkan seni menulis kaligrafi kuas tradisional, belajar filosofi karakter 'Chun' dan 'Fu', serta menikmati kebersamaan.",
    ceritaLengkap: "Menyambut Tahun Baru Imlek, Bright Mandarin mengadakan workshop kebudayaan Tionghoa bertajuk 'The Art of Shufa'. Murid dari kelas anak-anak hingga dewasa diperkenalkan pada empat harta karun kamar studi (kuas, tinta, kertas xuan, dan batu tinta). Selain mengasah keterampilan menulis indah, kegiatan ini memperdalam pemahaman filosofi nilai-nilai luhur di balik aksara Mandarin.",
    coverImageUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&auto=format&fit=crop&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    foto: [
      {
        url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&auto=format&fit=crop&q=80",
        caption: "Workshop menulis kaligrafi kuas tradisional Tiongkok"
      },
      {
        url: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&auto=format&fit=crop&q=80",
        caption: "Karya kaligrafi hasil karya siswa kelas Kids & Dewasa"
      },
      {
        url: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop&q=80",
        caption: "Foto bersama seluruh siswa dan laoshi di lobi center"
      }
    ]
  },
  {
    _id: "gal-3",
    judul: "Simulasi Ujian Resmi HSK & Pembagian Sertifikat Prestasi",
    slug: { current: "simulasi-ujian-resmi-hsk-pembagian-sertifikat" },
    tanggal: "Desember 2025",
    kategori: "Ujian HSK",
    deskripsi: "Pelaksanaan simulasi try-out HSK 1 hingga HSK 4 berbasis komputer dan kertas, mempersiapkan mental dan strategi pengerjaan soal siswa.",
    ceritaLengkap: "Try-out HSK diadakan secara berkala untuk mengevaluasi kesiapan siswa sebelum mengikuti ujian resmi berstandar internasional. Dengan sistem penilaian komprehensif (mendengarkan, membaca, dan menulis), para laoshi dapat memberikan bimbingan tertarget pada kelemahan masing-masing peserta hingga mencapai skor di atas rata-rata.",
    coverImageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    foto: [
      {
        url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80",
        caption: "Siswa fokus mengerjakan soal latihan membaca HSK"
      },
      {
        url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80",
        caption: "Sesi review jawaban dan pembahasan trik cepat bersama laoshi"
      },
      {
        url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop&q=80",
        caption: "Apresiasi sertifikat pencapaian nilai memuaskan"
      }
    ]
  }
];

