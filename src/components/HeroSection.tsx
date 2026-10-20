import React, { useState } from 'react';
import { CLUB_CONFIG } from '../data/clubData';
import { MapPin } from 'lucide-react';

interface HeroSectionProps {
  onOpenRegister: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRegister }) => {
  const [headingLogoError, setHeadingLogoError] = useState(false);

  return (
    <section className="relative min-h-[75vh] flex flex-col justify-center pt-36 sm:pt-40 pb-16 overflow-hidden bg-black">
      {/* Background Court Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={CLUB_CONFIG.heroBg}
          alt="Basketball Court"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto text-center flex flex-col items-center">
        
        {/* Large Headline Logo - Tanpa Border, Lebih Besar, Bersih */}
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl flex items-center justify-center mb-6">
          {!headingLogoError ? (
            <img
              src={CLUB_CONFIG.logoHeading}
              alt="TRABAS"
              className="w-full h-auto object-contain filter drop-shadow-[0_4px_30px_rgba(250,204,21,0.25)]"
              referrerPolicy="no-referrer"
              onError={() => setHeadingLogoError(true)}
            />
          ) : null}
        </div>

        {/* Tulisan TRABAS dengan SANTARA BASKETBALL SUMBAWA di bawahnya */}
        <div className="mb-6 flex flex-col items-center">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white leading-none">
            TRABAS
          </h1>
          <span className="font-display text-lg sm:text-2xl md:text-3xl font-semibold uppercase tracking-widest text-amber-400 mt-2 block">
            SANTARA BASKETBALL SUMBAWA
          </span>
        </div>

        {/* Lokasi Latihan Singkat */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-neutral-300 mb-8 max-w-2xl">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span>SMAN 3 Sumbawa Besar (Rabu Malam)</span>
          </div>
          <span className="text-neutral-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Gallery Arena Pantai Baru (Sabtu Sore)</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenRegister}
            className="px-8 py-3 text-xs font-bold uppercase tracking-wider text-black bg-amber-400 rounded-lg hover:bg-amber-300 active:scale-95 transition-all shadow-lg shadow-amber-400/20"
          >
            Daftar Sekarang
          </button>

          <a
            href="#jadwal"
            className="px-7 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-200 bg-neutral-900 border border-neutral-800 rounded-lg hover:text-white hover:border-neutral-700 transition-all"
          >
            Lihat Jadwal
          </a>
        </div>

      </div>
    </section>
  );
};
