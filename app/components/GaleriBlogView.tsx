'use client';

import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  Video, 
  Image as ImageIcon, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { GaleriItem } from '@/lib/mockData';

interface GaleriBlogViewProps {
  items: GaleriItem[];
}

export default function GaleriBlogView({ items }: GaleriBlogViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeMediaTab, setActiveMediaTab] = useState<{ [id: string]: 'video' | 'image' }>({});
  const [lightboxData, setLightboxData] = useState<{
    photos: { url: string; caption?: string }[];
    currentIndex: number;
    title: string;
  } | null>(null);

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
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes('watch?v=')) {
      const id = url.split('watch?v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    return url;
  };

  const openLightbox = (photos: { url: string; caption?: string }[], index: number, title: string) => {
    setLightboxData({
      photos,
      currentIndex: index,
      title
    });
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

      {/* Kegiatan Cards Feed */}
      <div className="space-y-12 max-w-4xl mx-auto">
        {filteredItems.map((item) => {
          const hasVideo = Boolean(item.videoUrl);
          const currentTab = activeMediaTab[item._id] || (hasVideo ? 'video' : 'image');
          const coverImage = item.coverImageUrl || item.foto?.[0]?.url || 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800';

          return (
            <article
              key={item._id}
              className="bg-white rounded-3xl overflow-hidden border-2 border-amber-200/90 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Media Section: Gambar or Video */}
              <div className="relative bg-slate-950">
                {/* Media Switcher Tab (jika memiliki video dan foto) */}
                {hasVideo && (
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-md p-1 rounded-xl border border-white/20">
                    <button
                      onClick={() => setActiveMediaTab((prev) => ({ ...prev, [item._id]: 'video' }))}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        currentTab === 'video'
                          ? 'bg-red-600 text-white shadow-sm'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>Video</span>
                    </button>
                    <button
                      onClick={() => setActiveMediaTab((prev) => ({ ...prev, [item._id]: 'image' }))}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        currentTab === 'image'
                          ? 'bg-amber-500 text-white shadow-sm'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>Foto Sampul</span>
                    </button>
                  </div>
                )}

                {/* Video Player */}
                {hasVideo && currentTab === 'video' ? (
                  <div className="relative aspect-video w-full overflow-hidden bg-black flex items-center justify-center">
                    {isYouTubeUrl(item.videoUrl) ? (
                      <iframe
                        src={getYouTubeEmbedUrl(item.videoUrl!)}
                        title={item.judul}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={item.videoUrl}
                        controls
                        playsInline
                        poster={coverImage}
                        className="w-full h-full object-contain"
                      >
                        Browser Anda tidak mendukung pemutar video HTML5.
                      </video>
                    )}
                  </div>
                ) : (
                  /* Gambar Utama */
                  <div className="relative h-72 sm:h-96 w-full overflow-hidden">
                    <img
                      src={coverImage}
                      alt={item.judul}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  </div>
                )}
              </div>

              {/* Konten Kegiatan: Judul & Penjelasan Lengkap */}
              <div className="p-6 sm:p-8 space-y-5">
                {/* Meta Badges: Kategori & Tanggal */}
                <div className="flex flex-wrap items-center gap-2.5 text-xs">
                  <span className="font-bold px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs">
                    {item.kategori}
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold text-slate-600 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5 text-orange-600" />
                    <span>{item.tanggal}</span>
                  </span>
                  {hasVideo && (
                    <span className="flex items-center gap-1 font-bold text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-full">
                      <Video className="w-3.5 h-3.5" />
                      <span>Video Dokumentasi</span>
                    </span>
                  )}
                  {item.foto && item.foto.length > 0 && (
                    <span className="flex items-center gap-1 font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                      <ImageIcon className="w-3.5 h-3.5 text-amber-600" />
                      <span>{item.foto.length} Foto Dokumentasi</span>
                    </span>
                  )}
                </div>

                {/* Judul Kegiatan */}
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-snug tracking-tight">
                  {item.judul}
                </h2>

                {/* Penjelasan Kegiatan */}
                <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-3 font-normal">
                  <p>{item.deskripsi}</p>
                  {item.ceritaLengkap && item.ceritaLengkap !== item.deskripsi && (
                    <p className="text-slate-600">{item.ceritaLengkap}</p>
                  )}
                </div>

                {/* Galeri Foto Dokumentasi (5 Foto per Kegiatan) */}
                {item.foto && item.foto.length > 0 && (
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                      <span className="flex items-center gap-1.5 text-amber-700 uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5" />
                        Foto Dokumentasi Acara ({item.foto.length} Foto)
                      </span>
                      <span className="text-slate-400 font-normal">Klik foto untuk melihat ukuran penuh</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                      {item.foto.map((pic, pIdx) => (
                        <div
                          key={pIdx}
                          onClick={() => openLightbox(item.foto, pIdx, item.judul)}
                          className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-amber-200/60 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer"
                        >
                          <img
                            src={pic.url}
                            alt={pic.caption || `Foto ${pIdx + 1} - ${item.judul}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2 flex items-end">
                            <p className="text-white text-[11px] font-medium leading-tight line-clamp-2">
                              {pic.caption || 'Lihat foto'}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* Lightbox Foto Preview Fullscreen */}
      {lightboxData && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxData(null)}
        >
          <button
            onClick={() => setLightboxData(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
            aria-label="Tutup Tampilan Foto"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          {lightboxData.photos.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxData((prev) => 
                    prev ? {
                      ...prev,
                      currentIndex: prev.currentIndex === 0 ? prev.photos.length - 1 : prev.currentIndex - 1
                    } : null
                  );
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
                aria-label="Foto Sebelumnya"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxData((prev) => 
                    prev ? {
                      ...prev,
                      currentIndex: prev.currentIndex === prev.photos.length - 1 ? 0 : prev.currentIndex + 1
                    } : null
                  );
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
                aria-label="Foto Berikutnya"
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
              src={lightboxData.photos[lightboxData.currentIndex]?.url}
              alt={lightboxData.photos[lightboxData.currentIndex]?.caption || lightboxData.title}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
            />
            {lightboxData.photos[lightboxData.currentIndex]?.caption && (
              <p className="text-white text-sm sm:text-base font-medium mt-3 text-center bg-black/60 px-4 py-2 rounded-xl max-w-2xl">
                {lightboxData.photos[lightboxData.currentIndex]?.caption}
              </p>
            )}
            <span className="text-slate-400 text-xs mt-2">
              Foto {lightboxData.currentIndex + 1} dari {lightboxData.photos.length} • {lightboxData.title}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
