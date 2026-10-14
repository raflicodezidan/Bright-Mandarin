import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  MessageCircle,
  GraduationCap,
  Mic2,
  BookMarked,
  Users,
} from "lucide-react";

const REGULER_SUBCLASSES = [
  { icon: GraduationCap, label: "Kindergarten" },
  { icon: Mic2, label: "Speaking Class: HSKK & BCT" },
  { icon: BookMarked, label: "HSK Class" },
  { icon: Users, label: "Conversation Class" },
];

function BimbelCard() {
  return (
    <div className="flex flex-col bg-white rounded-3xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-1">
      <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-900 shrink-0">
        <img
          src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=80"
          alt="Bimbel Bright Mandarin"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 text-[11px] font-bold px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm tracking-wide">
          Bimbel
        </span>
      </div>
      <div className="p-6 sm:p-8 flex-1 flex flex-col gap-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 group-hover:text-orange-600 transition-colors leading-snug">
            Bimbingan Belajar
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Membantu siswa memahami dan menguasai pelajaran Mandarin di sekolah. Materi disesuaikan dengan kurikulum sekolah agar nilai dan pemahaman akademik meningkat.
          </p>
        </div>
        <div className="bg-amber-50/60 rounded-2xl p-4 border border-amber-200/70 space-y-2 text-xs">
          <div className="flex items-start gap-2">
            <BookOpen className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-800">Target: </span>
              <span className="text-slate-600">Siswa SD – SMA</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <BookOpen className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-800">Materi: </span>
              <span className="text-slate-600">Sesuai kurikulum & rapor sekolah</span>
            </div>
          </div>
        </div>
        <div className="mt-auto pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
          <a
            href="https://api.whatsapp.com/send/?phone=6285890592738&text=Halo+Admin+Bright+Mandarin%2C+saya+tertarik+dengan+program+Bimbel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs hover:shadow-md transition-all hover:scale-[1.02] active:scale-95"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>Daftar Sekarang</span>
          </a>
          <Link
            href="/program#bimbingan-belajar"
            className="flex-1 inline-flex items-center justify-center gap-1.5 border-2 border-amber-300 hover:border-amber-500 text-amber-900 hover:text-orange-600 text-xs font-bold py-2.5 px-4 rounded-xl transition-all hover:bg-amber-50"
          >
            <span>Lihat Detail</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function RegularCard() {
  return (
    <div className="flex flex-col bg-white rounded-3xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-1">
      <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-900 shrink-0">
        <img
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80"
          alt="Kelas Reguler Bright Mandarin"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 text-[11px] font-bold px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm tracking-wide">
          Kelas Reguler
        </span>
      </div>
      <div className="p-6 sm:p-8 flex-1 flex flex-col gap-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 group-hover:text-orange-600 transition-colors leading-snug">
            Kelas Reguler
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Program kelas terstruktur dengan berbagai pilihan sesuai usia dan kebutuhan — dari anak-anak hingga dewasa, dari percakapan harian hingga persiapan ujian resmi.
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-[11px] font-black uppercase tracking-wider text-slate-400">Tersedia:</p>
          <div className="flex flex-wrap gap-2">
            {REGULER_SUBCLASSES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900"
              >
                <Icon className="w-3 h-3 text-orange-500 shrink-0" />
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
          <a
            href="https://api.whatsapp.com/send/?phone=6285890592738&text=Halo+Admin+Bright+Mandarin%2C+saya+tertarik+dengan+Kelas+Reguler"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs hover:shadow-md transition-all hover:scale-[1.02] active:scale-95"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>Daftar Sekarang</span>
          </a>
          <Link
            href="/program"
            className="flex-1 inline-flex items-center justify-center gap-1.5 border-2 border-amber-300 hover:border-amber-500 text-amber-900 hover:text-orange-600 text-xs font-bold py-2.5 px-4 rounded-xl transition-all hover:bg-amber-50"
          >
            <span>Lihat Selengkapnya</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomeProgramSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
      <BimbelCard />
      <RegularCard />
    </div>
  );
}
