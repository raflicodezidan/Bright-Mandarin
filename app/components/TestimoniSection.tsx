'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, MessageCircle, Quote, CheckCircle2 } from 'lucide-react';
import { mockSiteSettings } from '@/lib/mockData';
import { TestimoniItem, SiteSettings } from '@/lib/sanity';

export type { TestimoniItem };

export const dataTestimoni: TestimoniItem[] = [
  {
    id: 1,
    nama: 'Kevin Sanjaya',
    peran: 'Penerima Beasiswa S1 Tsinghua University',
    program: 'Intensive HSK 5 & Bimbingan Beasiswa',
    rating: 5,
    komentar: 'Berkat bimbingan intensif Laoshi Zhang Wei di Bright Mandarin, saya berhasil lulus HSK 5 dalam waktu 7 bulan dari nol! Simulasi wawancara dan review motivation letter-nya sangat membantu hingga saya lolos beasiswa penuh.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    nama: 'Jessica Natalie',
    peran: 'Orang Tua Siswa (Chloe, 7 Tahun)',
    program: 'Mandarin Kids & Teens',
    rating: 5,
    komentar: 'Anak saya Chloe dulunya takut dan bosan kalau belajar Mandarin di sekolah. Tapi setelah ikut kelas Kids di Bright Mandarin bersama Laoshi Felicia, dia malah antusias menyanyi lagu Mandarin dan hafal puluhan Hanzi setiap minggu!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    nama: 'Michael Tanudjaja',
    peran: 'Importir & Managing Director PT Logistik Prima',
    program: 'Business Mandarin & Negotiation',
    rating: 5,
    komentar: 'Materi Business Mandarin sangat tepat sasaran untuk keperluan negosiasi dengan pabrik di Guangzhou dan Yiwu. Sekarang saya tidak perlu selalu bergantung pada penerjemah saat inspeksi supplier ke China.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    nama: 'Amanda Stephanie',
    peran: 'Mahasiswi Universitas Indonesia',
    program: 'Daily Conversation & Speaking Fluency',
    rating: 5,
    komentar: 'Koreksi nada 1 sampai 4 dari Laoshi Evelyn sangat detail dan sabar! Kelas speaking-nya seru, tidak bikin tegang, dan saya jadi jauh lebih percaya diri ngobrol langsung dengan native speaker.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    nama: 'David Kusuma',
    peran: 'Software Engineer & Tech Lead',
    program: 'Intensive HSK 4 Preparation',
    rating: 5,
    komentar: 'Sistem belajar online-nya sangat rapi. Ada rekaman video yang bisa diakses kapan saja, quiz interaktif, dan bank soal latihan HSK resmi. Skor HSK 4 saya mencapai 285/300!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    nama: 'Stephanie Lim',
    peran: 'Alumni Beasiswa S2 Shanghai Jiao Tong',
    program: 'Bimbingan Beasiswa & Studi ke Tiongkok',
    rating: 5,
    komentar: 'Bright Mandarin benar-benar mendampingi dari nol pendaftaran CSC, legalisir berkas, hingga keberangkatan visa. Sangat kredibel dan Laoshi-nya punya koneksi langsung dengan universitas di China.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 7,
    nama: 'Raymond Hartono',
    peran: 'Founder Brand Retail Fashion',
    program: 'VIP Home Private 1-on-1',
    rating: 5,
    komentar: 'Jadwal saya sangat padat, tapi fasilitas Home Private Bright Mandarin memungkinkan tutor datang langsung ke kantor. Kurikulum disesuaikan dengan kebutuhan bisnis saya secara eksklusif.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 8,
    nama: 'Michelle Angela',
    peran: 'Siswa SMA Kelas 12 (Persiapan HSK 3)',
    program: 'Intensive HSK 3 Preparation',
    rating: 5,
    komentar: 'Tryout berkala dan trik menghafal pola kalimat membuat ujian HSK 3 kemarin terasa jauh lebih mudah dari yang saya bayangkan. Fasilitas kelas di Kelapa Gading juga sangat nyaman dan ber-AC.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 9,
    nama: 'dr. Hendra Wijaya',
    peran: 'Dokter Spesialis & Peneliti Medis',
    program: 'Daily Conversation & VIP Online',
    rating: 5,
    komentar: 'Belajar Mandarin di usia dewasa sempat membuat saya ragu, namun pendekatan komunikatif para Laoshi membuat saya cepat menangkap istilah percakapan sehari-hari. Sangat memuaskan!',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 10,
    nama: 'Valerie Clarissa',
    peran: 'Marketing Manager E-Commerce',
    program: 'Business Mandarin & Corporate',
    rating: 5,
    komentar: 'Perusahaan kami sering meeting dengan partner regional dari Beijing. Setelah 3 bulan kursus di Bright Mandarin, saya sudah bisa mempresentasikan laporan bisnis dalam bahasa Mandarin dengan lancar.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 11,
    nama: 'Budi Santoso',
    peran: 'Orang Tua Siswa (Nathan, 10 Tahun)',
    program: 'Mandarin Kids & Teens Offline',
    rating: 5,
    komentar: 'Metode pengajaran ramah anak dan laporan evaluasi bulanan yang diberikan sangat transparan. Nilai pelajaran Mandarin Nathan di sekolah internasionalnya naik drastis jadi A!',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 12,
    nama: 'Clara Novita',
    peran: 'Penerima Beasiswa Zhejiang University',
    program: 'Intensive HSK 5 Preparation',
    rating: 5,
    komentar: 'Bright Mandarin adalah tempat les Mandarin terbaik yang pernah saya ikuti. Laoshi-nya lulusan universitas top Tiongkok sehingga bukan cuma mengajar bahasa tapi juga budaya dan etika setempat.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 13,
    nama: 'Alvin Pratama',
    peran: 'Professional Exporter & Trader',
    program: 'Business Chinese & Negotiation',
    rating: 5,
    komentar: 'Kosakata ekspor impor, terminologi kontrak, dan simulasi transaksi yang diajarkan sangat praktis. Sangat worth it untuk siapa saja yang ingin ekspansi bisnis ke Tiongkok.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 14,
    nama: 'Fiona Elizabeth',
    peran: 'Mahasiswi Arsitektur',
    program: 'Daily Conversation Interaktif',
    rating: 5,
    komentar: 'Suka banget dengan suasana belajarnya yang seru dan interaktif! Setiap sesi selalu ada praktek ngobrol langsung berpasangan sehingga tidak kaku.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 15,
    nama: 'Christian Surya',
    peran: 'Senior Financial Analyst',
    program: 'Intensive HSK 3 & 4',
    rating: 5,
    komentar: 'Garansi mengulang kelas gratis dan bimbingan sampai lulus memberikan rasa aman. Tapi untungnya metode belajarnya sangat efektif jadi saya langsung lulus ujian HSK dalam satu kali tes!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 16,
    nama: 'Nathalie Widjaja',
    peran: 'Ibu Rumah Tangga & Mom Influencer',
    program: 'VIP Home Private (Kids)',
    rating: 5,
    komentar: 'Tutor privatnya sangat sabar dan penyayang. Kedua anak kembar saya selalu menanti-nanti jadwal les Mandarin setiap pekannya.',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 17,
    nama: 'Adrian Setiawan',
    peran: 'Owner Pabrik Manufaktur',
    program: 'Business Mandarin Intensive',
    rating: 5,
    komentar: 'Sekarang komunikasi dengan teknisi mesin dari Shanghai jadi jauh lebih lancar tanpa salah paham. Investasi kursus yang paling berdampak untuk operasional pabrik saya.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 18,
    nama: 'Angelina Gunawan',
    peran: 'Siswa SMP Penabur (Juara Lomba Pidato Mandarin)',
    program: 'Mandarin Teens & Pronunciation Clinic',
    rating: 5,
    komentar: 'Pelatihan intonasi dan pelafalan nada dari Laoshi Zhang sangat membantu saya memenangkan juara 1 lomba pidato bahasa Mandarin tingkat provinsi!',
    avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 19,
    nama: 'Tommy Chandra',
    peran: 'Content Creator & Digital Nomad',
    program: 'Daily Conversation Live Zoom',
    rating: 5,
    komentar: 'Kelas online interaktifnya super fleksibel bisa saya ikuti dari mana saja. Kualitas audio, video, dan materi slide digitalnya sangat profesional!',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 20,
    nama: 'Cynthia Tanuwidjaja',
    peran: 'Alumni Beasiswa S1 Fudan University Shanghai',
    program: 'Intensive HSK 6 & Beasiswa China',
    rating: 5,
    komentar: 'Dari level dasar hingga berhasil tembus HSK 6 dan diterima di Fudan University, Bright Mandarin selalu menjadi rumah belajar terbaik saya. Terima kasih banyak Laoshi!',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80',
  },
];

interface TestimoniSectionProps {
  testimoni?: TestimoniItem[];
  settings?: any;
}

export default function TestimoniSection({ testimoni = dataTestimoni, settings = mockSiteSettings }: TestimoniSectionProps) {
  const items = testimoni && testimoni.length > 0 ? testimoni : dataTestimoni;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(3);
  const touchStartX = useRef<number | null>(null);

  const total = items.length;

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setItemsVisible(1);
      } else if (window.innerWidth < 1024) {
        setItemsVisible(2);
      } else {
        setItemsVisible(3);
      }
    };
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  const maxIndex = Math.max(0, total - itemsVisible);

  // Auto-scroll ke kanan setiap 3.5 detik
  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section id="testimoni" className="py-20 bg-orange-100/50 border-b border-amber-300/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
            TESTIMONI & ULASAN SISWA
          </h2>
          <p className="text-lg sm:text-xl font-bold text-orange-600 mt-2 mb-3">
            Kisah Sukses & Pengalaman Belajar dari 5.000+ Alumni Bright Mandarin
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto my-3" />
          <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
            Dengarkan langsung pengalaman para siswa, orang tua murid, profesional, hingga peraih beasiswa universitas ternama Tiongkok.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slider Track */}
          <div className="overflow-hidden py-4">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)`,
              }}
            >
              {items.map((item, idx) => (
                <div
                  key={item._id || item.id || idx}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3.5"
                >
                  <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-amber-200 shadow-sm hover:shadow-2xl hover:border-amber-400 transition-all duration-300 flex flex-col items-center text-center justify-between h-full group/card hover:-translate-y-2 relative">
                    
                    {/* Top Decorative Subtle Quote Watermark */}
                    <div className="absolute top-5 right-5 text-amber-100 group-hover/card:text-amber-200 transition-colors pointer-events-none">
                      <Quote className="w-10 h-10 rotate-180 opacity-70" />
                    </div>

                    <div className="flex flex-col items-center w-full">
                      {/* 1. Gambar Orang Paling Atas Tengah (Ukuran Diperbesar) */}
                      <div className="relative mb-4 group-hover/card:scale-105 transition-transform duration-300">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-amber-300 shadow-xl bg-slate-100 p-0.5">
                          <img
                            src={item.fotoUrl || item.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400'}
                            alt={item.nama}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white p-1 rounded-full shadow-md border-2 border-white">
                          <CheckCircle2 className="w-4 h-4 fill-white text-orange-600" />
                        </div>
                      </div>

                      {/* 2. Nama & Identitas Siswa / Alumni */}
                      <h4 className="text-lg sm:text-xl font-black text-slate-900 group-hover/card:text-orange-600 transition-colors">
                        {item.nama}
                      </h4>
                      <p className="text-xs sm:text-sm text-orange-600 font-extrabold mt-0.5">
                        {item.peran}
                      </p>
                      <span className="text-[11px] sm:text-xs text-slate-500 font-semibold bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60 mt-1.5 inline-block">
                        {item.program}
                      </span>

                      {/* 3. Rating Bintang 5 di Bawah Nama */}
                      <div className="flex items-center justify-center gap-1.5 my-4 bg-amber-100/60 px-4 py-1.5 rounded-full border border-amber-200">
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: item.rating }).map((_, rIdx) => (
                            <Star
                              key={rIdx}
                              className="w-4 h-4 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <span className="text-xs font-black text-amber-950">
                          5.0 / 5.0
                        </span>
                      </div>

                      {/* 4. Komentar & Ulasan */}
                      <div className="relative w-full pt-1">
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium italic">
                          "{item.komentar}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-slate-800 border-2 border-amber-300 shadow-xl flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 z-20"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-orange-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-slate-800 border-2 border-amber-300 shadow-xl flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 z-20"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-6 h-6 text-orange-600" />
          </button>

          {/* Pagination Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: Math.min(maxIndex + 1, 10) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex % 10
                    ? 'w-8 bg-orange-600'
                    : 'w-2 bg-amber-300 hover:bg-amber-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Retained Consultation Card (Masih punya pertanyaan lain?) */}
        <div className="mt-14 max-w-4xl mx-auto bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-xl shadow-orange-500/20 border-2 border-white/60">
          <h3 className="text-2xl sm:text-3xl font-black">Masih punya pertanyaan lain?</h3>
          <p className="text-xs sm:text-sm text-amber-50 font-medium max-w-lg mx-auto leading-relaxed">
            Tim konsultan akademik kami siap membantu menjawab keraguan Anda dan merekomendasikan kelas yang tepat.
          </p>
          <a
            href={mockSiteSettings.whatsappUtama}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-amber-50 text-emerald-800 text-sm font-black px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 border-2 border-white/80"
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
            <span>Chat dengan Konsultan Kami</span>
          </a>
        </div>
      </div>
    </section>
  );
}
