import React, { useState } from 'react';
import { CLUB_CONFIG } from '../data/clubData';
import { SlideBanner } from '../components/SlideBanner';
import { FaqSection } from '../components/FaqSection';
import { MapPin, ArrowRight, Target, Calendar, UserCheck, ExternalLink, Home } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="pt-28 pb-10">
      
      {/* Hero Headline Section */}
      <section className="relative min-h-[64vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 mb-6">
        
        {/* Large Headline Logo - Static Clean Image without animation */}
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mb-6 flex justify-center">
          {!logoError ? (
            <img
              src={CLUB_CONFIG.logoHeading}
              alt="TRABAS Logo"
              className="w-full h-auto max-h-[220px] sm:max-h-[300px] md:max-h-[360px] object-contain drop-shadow-[0_10px_35px_rgba(250,204,21,0.25)]"
              referrerPolicy="no-referrer"
              onError={(e) => {
                if (!e.currentTarget.src.endsWith('/images/logo_heading_trabas.png')) {
                  e.currentTarget.src = '/images/logo_heading_trabas.png';
                } else {
                  setLogoError(true);
                }
              }}
            />
          ) : (
            <div className="font-display text-5xl sm:text-7xl font-black text-amber-400 uppercase tracking-wider py-8">
              TRABAS
            </div>
          )}
        </div>

        {/* Tulisan TRABAS dengan SANTARA BASKETBALL SUMBAWA di bawahnya */}
        <div className="mb-6 flex flex-col items-center">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white leading-none">
            TRABAS
          </h1>
          <span className="font-display text-base sm:text-2xl md:text-3xl font-semibold uppercase tracking-widest text-amber-400 mt-2 block">
            SANTARA BASKETBALL SUMBAWA
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <button
            onClick={() => onNavigate('/keanggotaan')}
            className="px-8 py-3 text-xs font-bold uppercase tracking-wider text-black bg-amber-400 rounded-lg hover:bg-amber-300 active:scale-95 transition-all shadow-lg shadow-amber-400/20 flex items-center gap-2"
          >
            <span>Daftar Anggota</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('/event')}
            className="px-7 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-200 bg-neutral-900 border border-neutral-800 rounded-lg hover:text-white hover:border-neutral-700 transition-all flex items-center gap-2"
          >
            <span>Lihat Jadwal Latihan</span>
          </button>
        </div>
      </section>

      {/* SECTION SLIDE BANNER FOTO KEGIATAN DI ATAS KARTU VISI MISI, EVENT, KEANGGOTAAN */}
      <SlideBanner />

      {/* 3 Main Menu Cards Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Visi & Misi */}
          <div
            onClick={() => onNavigate('/visi-misi')}
            className="rounded-2xl bg-neutral-950/80 border border-neutral-850 hover:border-amber-400/50 p-6 flex flex-col justify-between cursor-pointer transition-all duration-200 group shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-5 group-hover:border-amber-400/50 transition-colors">
                <Target className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="font-display text-xl font-bold uppercase text-white group-hover:text-amber-400 transition-colors mb-2">
                Visi & Misi
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Visi klub menjadi basket terkemuka di NTB, sejarah lahirnya di Kost Santara Uma Sima, profil pemain, dan logo klub.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
              <span>Buka Profil & Visi</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 2: Event */}
          <div
            onClick={() => onNavigate('/event')}
            className="rounded-2xl bg-neutral-950/80 border border-neutral-850 hover:border-amber-400/50 p-6 flex flex-col justify-between cursor-pointer transition-all duration-200 group shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-5 group-hover:border-amber-400/50 transition-colors">
                <Calendar className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="font-display text-xl font-bold uppercase text-white group-hover:text-amber-400 transition-colors mb-2">
                Event & Jadwal
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Jadwal latihan 2 sesi rutin (Rabu & Sabtu), rekap hasil pertandingan terakhir, dan galeri foto kegiatan.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
              <span>Buka Jadwal & Event</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 3: Keanggotaan */}
          <div
            onClick={() => onNavigate('/keanggotaan')}
            className="rounded-2xl bg-neutral-950/80 border border-neutral-850 hover:border-amber-400/50 p-6 flex flex-col justify-between cursor-pointer transition-all duration-200 group shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-5 group-hover:border-amber-400/50 transition-colors">
                <UserCheck className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="font-display text-xl font-bold uppercase text-white group-hover:text-amber-400 transition-colors mb-2">
                Keanggotaan
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Syarat dan peraturan anggota, serta formulir pendaftaran online yang langsung terhubung ke WhatsApp Admin Official.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
              <span>Buka Pendaftaran</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>
      </section>

      {/* Alamat Basecamp & Lokasi Latihan */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Card Basecamp Kost Santara Sumbawa, Umasima */}
          <div className="p-5 rounded-2xl bg-neutral-950 border border-amber-400/30 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-neutral-900">
                <span className="flex items-center gap-2 text-xs font-bold uppercase text-amber-400">
                  <Home className="w-4 h-4" />
                  <span>Basecamp Klub</span>
                </span>
                <span className="text-[10px] bg-amber-400/10 text-amber-400 px-2 py-0.5 rounded font-mono">
                  Uma Sima
                </span>
              </div>
              <h4 className="font-display text-base font-bold text-white mb-1">
                {CLUB_CONFIG.basecamp.name}
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {CLUB_CONFIG.basecamp.address}
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-neutral-900">
              <a
                href={CLUB_CONFIG.basecamp.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-amber-400 hover:underline flex items-center gap-1.5"
              >
                <span>Buka di Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Latihan 1: SMAN 3 */}
          <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-850 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-neutral-900">
                <span className="flex items-center gap-2 text-xs font-bold uppercase text-white">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Lokasi Latihan 1</span>
                </span>
                <span className="text-[10px] bg-neutral-900 text-neutral-300 px-2 py-0.5 rounded font-mono">
                  Rabu 19:00 WITA
                </span>
              </div>
              <h4 className="font-display text-base font-bold text-white mb-1">
                {CLUB_CONFIG.locations[0].name}
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {CLUB_CONFIG.locations[0].address}
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-neutral-900">
              <a
                href={CLUB_CONFIG.locations[0].mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-amber-400 hover:underline flex items-center gap-1.5"
              >
                <span>Buka di Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Latihan 2: Gallery Arena Pantai Baru */}
          <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-850 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-neutral-900">
                <span className="flex items-center gap-2 text-xs font-bold uppercase text-white">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Lokasi Latihan 2</span>
                </span>
                <span className="text-[10px] bg-neutral-900 text-neutral-300 px-2 py-0.5 rounded font-mono">
                  Sabtu 16:00 WITA
                </span>
              </div>
              <h4 className="font-display text-base font-bold text-white mb-1">
                {CLUB_CONFIG.locations[1].name}
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {CLUB_CONFIG.locations[1].address}
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-neutral-900">
              <a
                href={CLUB_CONFIG.locations[1].mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-amber-400 hover:underline flex items-center gap-1.5"
              >
                <span>Buka di Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 10 Pertanyaan FAQ di Atas Footer */}
      <FaqSection />

    </div>
  );
};
