'use client';

import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  Play, 
  Image as ImageIcon, 
  Video, 
  ArrowRight, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MessageCircle,
  Share2,
  Clock,
  Sparkles,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { GaleriItem } from '@/lib/mockData';

interface GaleriBlogViewProps {
  items: GaleriItem[];
}

export default function GaleriBlogView({ items }: GaleriBlogViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeModalItem, setActiveModalItem] = useState<GaleriItem | null>(null);
  const [lightboxPhotoIndex, setLightboxPhotoIndex] = useState<number | null>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    items.forEach((item) => {
      if (item.kategori) set.add(item.kategori);
    });
    return ['Semua', ...Array.from(set)];
  }, [items]);

  // Filter items
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'Semua') return items;
    return items.filter((item) => item.kategori === selectedCategory);
  }, [items, selectedCategory]);

  // Helper to detect if a URL is YouTube
  const isYouTubeUrl = (url?: string) => {
    if (!url) return false;
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  const getYouTubeEmbedUrl = (url: string) => {
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    if (url.includes('watch?v=')) {
      const id = url.split('watch?v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    return url;
  };

  const openDetailModal = (item: GaleriItem) => {
    setActiveModalItem(item);
    setLightboxPhotoIndex(null);
  };

  const closeModal = () => {
    setActiveModalItem(null);
    setLightboxPhotoIndex(null);
  };

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-10 sm:mb-14">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          const count = cat === 'Semua' 
            ? items.length 
            : items.filter((i) => i.kategori === cat).length;

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-xs ${
                isActive
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-orange-500/20 scale-105'
                  : 'bg-white text-slate-700 hover:bg-amber-50 hover:text-orange-600 border border-slate-200'
              }`}
            >
              <span>{cat}</span>
              <span className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${
                isActive ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => {
          const hasVideo = Boolean(item.videoUrl);
          const photoCount = item.foto?.length || 0;
          const coverImage = item.coverImageUrl || item.foto?.[0]?.url || 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800';

          return (
            <article
              key={item._id}
              className="bg-white rounded-3xl overflow-hidden border-2 border-amber-200/90 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-1.5"
            >
              {/* Media Preview Container */}
              <div 
                className="relative h-60 sm:h-64 overflow-hidden bg-slate-950 cursor-pointer"
                onClick={() => openDetailModal(item)}
              >
                <img
                  src={coverImage}
                  alt={item.judul}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm tracking-wide">
                    {item.kategori}
                  </span>

                  <div className="flex items-center gap-1.5">
                    {hasVideo && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-red-600 text-white shadow-md animate-pulse">
                        <Video className="w-3 h-3" />
                        <span>Video</span>
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/95 text-slate-800 backdrop-blur-xs shadow-xs">
                      <ImageIcon className="w-3 h-3 text-amber-600" />
                      <span>{photoCount} Foto</span>
                    </span>
                  </div>
                </div>

                {/* Central Play Button Overlay if Video is Available */}
                {hasVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 hover:bg-white text-orange-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 backdrop-blur-xs border-2 border-white">
                      <Play className="w-6 h-6 fill-orange-600 translate-x-0.5" />
                    </div>
                  </div>
                )}

                {/* Bottom Overlay Date */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-white/90 text-xs font-medium">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>{item.tanggal}</span>
                </div>
              </div>

              {/* Card Body (Blog Format) */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <h2 
                    onClick={() => openDetailModal(item)}
                    className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors leading-snug cursor-pointer line-clamp-2"
                  >
                    {item.judul}
                  </h2>

                  {/* Excerpt / Preview Deskripsi */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4 line-clamp-3">
                    {item.deskripsi}
                  </p>

                  {/* Mini Photo Strip Preview (3 photos preview) */}
                  {item.foto && item.foto.length > 0 && (
                    <div className="bg-amber-50/50 rounded-2xl p-2.5 border border-amber-200/60 mb-4">
                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 mb-2 px-1">
                        <span className="flex items-center gap-1 text-amber-700">
                          <Sparkles className="w-3 h-3" />
                          Cuplikan Dokumentasi:
                        </span>
                        <span className="text-slate-400 font-medium">{item.foto.length} momen</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {item.foto.slice(0, 3).map((pic, pIdx) => (
                          <div 
                            key={pIdx}
                            onClick={() => openDetailModal(item)}
                            className="aspect-square rounded-xl overflow-hidden bg-slate-200 relative group/thumb cursor-pointer border border-amber-100"
                          >
                            <img
                              src={pic.url}
                              alt={pic.caption || `Dokumentasi ${pIdx + 1}`}
                              className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                            />
                            {pIdx === 2 && item.foto.length > 3 && (
                              <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center text-white text-xs font-bold">
                                +{item.foto.length - 3}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer: "Lihat Selengkapnya" Button */}
                <div className="pt-4 border-t border-slate-100 mt-2">
                  <button
                    onClick={() => openDetailModal(item)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-50 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 text-orange-600 hover:text-white font-bold text-xs sm:text-sm transition-all duration-300 group/btn border border-amber-200/80 hover:border-transparent hover:shadow-md cursor-pointer"
                  >
                    <span>Lihat Selengkapnya</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Detail Modal ("Lihat Selengkapnya" View) */}
      {activeModalItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div 
            className="bg-white w-full max-w-4xl max-h-[92vh] rounded-3xl shadow-2xl border-2 border-amber-200 overflow-hidden flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-slate-100 flex items-start justify-between gap-4 bg-gradient-to-r from-amber-50/50 via-white to-orange-50/30 shrink-0">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-bold px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs">
                    {activeModalItem.kategori}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-500 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-orange-500" />
                    {activeModalItem.tanggal}
                  </span>
                  {activeModalItem.videoUrl && (
                    <span className="flex items-center gap-1 font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
                      <Video className="w-3 h-3" />
                      Video Tersedia
                    </span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  {activeModalItem.judul}
                </h3>
              </div>

              <button
                onClick={closeModal}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                aria-label="Tutup Detail"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-7 overflow-y-auto space-y-6 flex-1">
              {/* VIDEO PLAYER SECTION (IF VIDEO AVAILABLE) */}
              {activeModalItem.videoUrl && (
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
                    <Video className="w-4 h-4 text-red-600" />
                    <span>Video Dokumentasi Kegiatan</span>
                  </div>

                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-lg border-2 border-slate-900">
                    {isYouTubeUrl(activeModalItem.videoUrl) ? (
                      <iframe
                        src={getYouTubeEmbedUrl(activeModalItem.videoUrl)}
                        title={activeModalItem.judul}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={activeModalItem.videoUrl}
                        controls
                        playsInline
                        poster={activeModalItem.coverImageUrl || activeModalItem.foto?.[0]?.url}
                        className="w-full h-full object-contain"
                      >
                        Browser Anda tidak mendukung pemutar video HTML5.
                      </video>
                    )}
                  </div>
                </div>
              )}

              {/* Story / Full Content Description */}
              <div className="bg-amber-50/40 rounded-2xl p-5 border border-amber-200/70 space-y-3">
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-orange-500" />
                  Cerita & Detail Kegiatan
                </h4>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {activeModalItem.ceritaLengkap || activeModalItem.deskripsi}
                </p>
              </div>

              {/* Photos Gallery Grid */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-amber-600" />
                    Koleksi Foto Dokumentasi ({activeModalItem.foto?.length || 0})
                  </h4>
                  <span className="text-xs text-slate-400">Klik foto untuk melihat lebih jelas</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {activeModalItem.foto?.map((pic, idx) => (
                    <div
                      key={idx}
                      onClick={() => setLightboxPhotoIndex(idx)}
                      className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      <img
                        src={pic.url}
                        alt={pic.caption || activeModalItem.judul}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity p-3 flex items-end">
                        <p className="text-white text-xs font-medium leading-snug line-clamp-2">
                          {pic.caption || 'Dokumentasi kegiatan Bright Mandarin'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <span className="text-xs text-slate-500 text-center sm:text-left">
                Tertarik mengikutsertakan anak atau bergabung di kelas Bright Mandarin?
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={closeModal}
                  className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs sm:text-sm hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Tutup
                </button>
                <a
                  href={`https://api.whatsapp.com/send/?phone=6289699288009&text=Halo+Admin+Bright+Mandarin%2C+saya+ingin+tahu+info+kegiatan+dan+jadwal+kelas+terbaru`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Tanya Info Kelas</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Foto Preview Fullscreen */}
      {lightboxPhotoIndex !== null && activeModalItem && (
        <div 
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxPhotoIndex(null)}
        >
          <button
            onClick={() => setLightboxPhotoIndex(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          {activeModalItem.foto && activeModalItem.foto.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxPhotoIndex((prev) => 
                    prev === null || prev === 0 ? activeModalItem.foto.length - 1 : prev - 1
                  );
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxPhotoIndex((prev) => 
                    prev === null || prev === activeModalItem.foto.length - 1 ? 0 : prev + 1
                  );
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Photo Content */}
          <div 
            className="max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeModalItem.foto[lightboxPhotoIndex]?.url}
              alt={activeModalItem.foto[lightboxPhotoIndex]?.caption || activeModalItem.judul}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
            />
            {activeModalItem.foto[lightboxPhotoIndex]?.caption && (
              <p className="text-white text-sm sm:text-base font-medium mt-3 text-center bg-black/60 px-4 py-2 rounded-xl max-w-2xl">
                {activeModalItem.foto[lightboxPhotoIndex]?.caption}
              </p>
            )}
            <span className="text-slate-400 text-xs mt-2">
              Foto {lightboxPhotoIndex + 1} dari {activeModalItem.foto.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
