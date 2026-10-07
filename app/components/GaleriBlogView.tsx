'use client';

import React, { useState, useMemo, useRef } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { GaleriItem } from '@/lib/mockData';

interface GaleriBlogViewProps {
  items: GaleriItem[];
}

interface MediaItem {
  type: 'video' | 'image';
  url: string;
  poster?: string;
  caption?: string;
}

// Single Card with Instagram-style Portrait Carousel
function KegiatanInstagramCard({ 
  item, 
  onOpenLightbox 
}: { 
  item: GaleriItem; 
  onOpenLightbox: (photos: { url: string; caption?: string }[], index: number, title: string) => void;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [aspectRatios, setAspectRatios] = useState<{ [index: number]: number }>({});
  const touchStartX = useRef<number | null>(null);

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

  // Build list of media items: video first, then photos
  const mediaList = useMemo<MediaItem[]>(() => {
    const list: MediaItem[] = [];
    if (item.videoUrl) {
      list.push({
        type: 'video',
        url: item.videoUrl,
        poster: item.coverImageUrl || item.foto?.[0]?.url,
        caption: `Video Dokumentasi: ${item.judul}`,
      });
    }
    if (item.foto && item.foto.length > 0) {
      item.foto.forEach((pic) => {
        list.push({
          type: 'image',
          url: pic.url,
          caption: pic.caption,
        });
      });
    } else if (list.length === 0 && item.coverImageUrl) {
      list.push({
        type: 'image',
        url: item.coverImageUrl,
        caption: item.judul,
      });
    }
    return list;
  }, [item]);

  const totalSlides = mediaList.length;

  // Compute adaptive ratio for current active slide (default to portrait 9:16 for video, 16:9 for image)
  const isCurrentVideo = mediaList[currentSlide]?.type === 'video';
  const defaultRatio = isCurrentVideo ? 9 / 16 : 16 / 9;
  const activeRatio = aspectRatios[currentSlide] || defaultRatio;
  const clampedRatio = Math.max(0.55, Math.min(2.1, activeRatio));

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45 && currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else if (diff < -45 && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
    touchStartX.current = null;
  };

  return (
    <article className="bg-white rounded-3xl overflow-hidden border-2 border-amber-200/90 shadow-lg hover:shadow-2xl transition-all duration-300">
      {/* 1. MEDIA SECTION: Adaptif Mengikuti Ukuran Asli Video atau Gambar */}
      <div 
        className="relative w-full bg-[#18110c] overflow-hidden group/media select-none transition-[aspect-ratio] duration-500 ease-in-out flex items-center justify-center max-h-[640px]"
        style={{ aspectRatio: `${clampedRatio}` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides Track */}
        <div 
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {mediaList.map((media, idx) => (
            <div key={idx} className="relative w-full h-full shrink-0 flex items-center justify-center overflow-hidden bg-[#18110c]">
              {/* Ambient Background to Fill Empty Space (Menutup Blank Hitam) */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                {media.type === 'video' ? (
                  media.poster ? (
                    <img
                      src={media.poster}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-cover blur-3xl scale-150 opacity-60 brightness-95 saturate-125"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-amber-600/35 via-orange-600/25 to-stone-900" />
                  )
                ) : (
                  <img
                    src={media.url}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover blur-3xl scale-150 opacity-60 brightness-95 saturate-125"
                  />
                )}
                {/* Soft warm glass overlay for seamless integration */}
                <div className="absolute inset-0 bg-stone-950/25 backdrop-blur-xl" />
              </div>

              {/* Foreground Media */}
              {media.type === 'video' ? (
                isYouTubeUrl(media.url) ? (
                  <iframe
                    src={getYouTubeEmbedUrl(media.url)}
                    title={item.judul}
                    className="relative z-10 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={media.url}
                    controls
                    playsInline
                    poster={media.poster}
                    className="relative z-10 w-full h-full object-contain"
                    onLoadedMetadata={(e) => {
                      const vid = e.currentTarget;
                      if (vid.videoWidth && vid.videoHeight) {
                        setAspectRatios((prev) => ({
                          ...prev,
                          [idx]: vid.videoWidth / vid.videoHeight,
                        }));
                      }
                    }}
                  >
                    Browser Anda tidak mendukung pemutar video.
                  </video>
                )
              ) : (
                <div 
                  className="relative z-10 w-full h-full cursor-pointer flex items-center justify-center"
                  onClick={() => {
                    const photosOnly = item.foto || [];
                    const photoIdx = photosOnly.findIndex((p) => p.url === media.url);
                    onOpenLightbox(photosOnly, photoIdx >= 0 ? photoIdx : 0, item.judul);
                  }}
                >
                  <img
                    src={media.url}
                    alt={media.caption || item.judul}
                    className="w-full h-full object-contain"
                    onLoad={(e) => {
                      const img = e.currentTarget;
                      if (img.naturalWidth && img.naturalHeight) {
                        setAspectRatios((prev) => ({
                          ...prev,
                          [idx]: img.naturalWidth / img.naturalHeight,
                        }));
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4 pointer-events-none">
                    {media.caption && (
                      <p className="text-white text-xs sm:text-sm font-medium leading-snug drop-shadow-md">
                        {media.caption}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Counter Badge Ala Instagram (e.g., 1/6) */}
        {totalSlides > 1 && (
          <div className="absolute top-4 right-4 z-20 pointer-events-none">
            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold tracking-wide shadow-md">
              {currentSlide + 1} / {totalSlides}
            </span>
          </div>
        )}

        {/* Navigasi Panah Kiri (Scroll Kiri) */}
        {totalSlides > 1 && currentSlide > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-xl flex items-center justify-center transition-all z-20 cursor-pointer hover:scale-110 active:scale-95"
            aria-label="Media Sebelumnya"
          >
            <ChevronLeft className="w-6 h-6 text-slate-900" />
          </button>
        )}

        {/* Navigasi Panah Kanan (Scroll ke Kanan untuk Foto-Foto) */}
        {totalSlides > 1 && currentSlide < totalSlides - 1 && (
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-xl flex items-center justify-center transition-all z-20 cursor-pointer hover:scale-110 active:scale-95"
            aria-label="Media Selanjutnya"
          >
            <ChevronRight className="w-6 h-6 text-slate-900" />
          </button>
        )}

        {/* Dots Pagination di Bawah Media */}
        {totalSlides > 1 && (
          <div className="absolute bottom-3 left-0 right-0 z-20 flex items-center justify-center gap-1.5 pointer-events-none">
            {mediaList.map((_, dotIdx) => (
              <span
                key={dotIdx}
                className={`transition-all duration-300 rounded-full ${
                  dotIdx === currentSlide
                    ? 'w-6 h-1.5 bg-amber-400 shadow-sm'
                    : 'w-1.5 h-1.5 bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* 2. KONTEN KEGIATAN: Judul & Penjelasan Langsung di Bawah Media */}
      <div className="p-6 sm:p-8 space-y-4">
        {/* Meta Kategori */}
        <div>
          <span className="font-bold text-xs px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs tracking-wide">
            {item.kategori}
          </span>
        </div>

        {/* Judul Kegiatan */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-snug tracking-tight">
          {item.judul}
        </h2>

        {/* Penjelasan Kegiatan (Langsung Lengkap) */}
        <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-2.5 font-normal pt-1 border-t border-slate-100">
          <p>{item.deskripsi}</p>
          {item.ceritaLengkap && item.ceritaLengkap !== item.deskripsi && (
            <p className="text-slate-600">{item.ceritaLengkap}</p>
          )}
        </div>
      </div>
    </article>
  );
}

export default function GaleriBlogView({ items }: GaleriBlogViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
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

      {/* Kegiatan Cards: Instagram-style Portrait Carousel Feed */}
      <div className="space-y-12 max-w-2xl mx-auto">
        {filteredItems.map((item) => (
          <KegiatanInstagramCard
            key={item._id}
            item={item}
            onOpenLightbox={openLightbox}
          />
        ))}
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
