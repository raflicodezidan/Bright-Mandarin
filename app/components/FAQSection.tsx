'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { mockSiteSettings } from '@/lib/mockData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Apakah saya bisa ikut kursus jika benar-benar nol dasar (tidak tahu pinyin & hanzi sama sekali)?',
      a: 'Tentu saja sangat bisa! 70% murid baru di Bright Mandarin memulai dari nol dasar. Kami memiliki silabus fondasi akselerasi yang mengajarkan 4 nada pinyin secara rinci, logika pembentukan goresan hanzi radikal, dan frasa penting sehari-hari tanpa merasa terbebani.',
    },
    {
      q: 'Apakah seluruh pengajar (Laoshi) di Bright Mandarin tersertifikasi?',
      a: 'Ya, 100% Laoshi kami memiliki kualifikasi pendidikan formal dengan sertifikasi minimal HSK 6 (level tertinggi kemahiran bahasa Mandarin) dari universitas ternama di Tiongkok seperti BLCU, Fudan, dan Tsinghua University, serta pengalaman pedagogi ramah murid.',
    },
    {
      q: 'Berapa lama rata-rata waktu yang dibutuhkan untuk lulus ujian HSK?',
      a: 'Dengan program terstruktur kami, untuk level HSK 1 dan HSK 2 umumnya tercapai dalam 3 - 4 bulan (sekitar 32-48 jam tatap muka intensif). Kami juga memberikan Tryout berkala dan FREE jasa pendaftaran resmi ke pusat ujian HSK Tiongkok.',
    },
    {
      q: 'Apakah ada pilihan jadwal kelas di malam hari atau akhir pekan (weekend)?',
      a: 'Ya, kami menyediakan opsi jadwal kelas yang sangat fleksibel: kelas pagi/siang untuk anak-anak sekolah, serta kelas malam (19.00 - 21.00 WIB) dan kelas Sabtu-Minggu khusus untuk mahasiswa dan profesional pekerja.',
    },
    {
      q: 'Bagaimana jika saya memilih kelas Online namun berhalangan hadir pada sesi tertentu?',
      a: 'Seluruh sesi kelas online interaktif via Zoom direkam dan diunggah ke portal murid. Anda dapat mengakses rekaman video, modul materi PDF, dan kuis latihan kapan saja tanpa khawatir tertinggal materi pelajaran.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-orange-100/50 border-b border-amber-300/70">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
            PERTANYAAN UMUM (FAQ)
          </h2>
          <p className="text-lg sm:text-xl font-bold text-orange-600 mt-2 mb-3">
            Informasi Penting Seputar Pendaftaran, Kurikulum, & Ujian HSK
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto my-3" />
          <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
            Jawaban lengkap atas pertanyaan yang sering diajukan seputar sistem belajar dan sertifikasi resmi di Bright Mandarin.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border-2 border-amber-200/90 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-amber-400"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-orange-600 transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-amber-100 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA still have questions */}
        <div className="mt-12 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-xl shadow-orange-500/20 border-2 border-white/60">
          <h3 className="text-2xl font-black">Masih punya pertanyaan lain?</h3>
          <p className="text-xs sm:text-sm text-amber-50 font-medium max-w-lg mx-auto">
            Tim konsultan akademik kami siap membantu menjawab keraguan Anda dan merekomendasikan kelas yang tepat.
          </p>
          <a
            href={mockSiteSettings.whatsappUtama}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-amber-50 text-emerald-800 text-sm font-black px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 border-2 border-white/80"
          >
            <div className="w-5 h-5 shrink-0">
              <img
                src="/whatsapp-logo.png"
                alt="WhatsApp"
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
