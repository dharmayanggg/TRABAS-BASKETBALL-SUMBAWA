import React, { useState, useEffect, useCallback } from 'react';
import { BANNER_SLIDES } from '../data/clubData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SlideBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : BANNER_SLIDES.length - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev < BANNER_SLIDES.length - 1 ? prev + 1 : 0));
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-14"
    >
      <div className="relative h-[240px] sm:h-[350px] md:h-[420px] w-full rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-850 shadow-2xl">
        
        {/* Slides (Polosan Gambar Aja, Tanpa Tulisan) */}
        {BANNER_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
              }`}
            >
              <img
                src={slide.image}
                alt="Foto Kegiatan TRABAS"
                className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback if GitHub repo is private
                  if (slide.fallback && e.currentTarget.src !== slide.fallback) {
                    e.currentTarget.src = slide.fallback;
                  }
                }}
              />
            </div>
          );
        })}

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-neutral-700/80 transition-all backdrop-blur-sm focus:outline-none"
          aria-label="Foto Sebelumnya"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-neutral-700/80 transition-all backdrop-blur-sm focus:outline-none"
          aria-label="Foto Berikutnya"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Pagination Indicators */}
        <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
          {BANNER_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex
                  ? 'w-6 bg-amber-400'
                  : 'w-2 bg-neutral-500 hover:bg-neutral-300'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};
