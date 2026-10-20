import React from 'react';
import { CLUB_CONFIG } from '../data/clubData';
import { MapPin, Phone, Home, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string, subTab?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/95 text-neutral-400 text-xs py-14 relative z-10 border-t border-neutral-900/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Logo Footer - Centered & Enlarged */}
        <div className="mb-4">
          <button
            onClick={() => {
              onNavigate('/');
              scrollToTop();
            }}
            className="group focus:outline-none flex flex-col items-center justify-center"
            aria-label="Kembali ke Beranda"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center transition-transform group-hover:scale-105">
              <img
                src={CLUB_CONFIG.logoFormal}
                alt="Logo TRABAS"
                className="max-w-full max-h-full object-contain filter drop-shadow-[0_4px_24px_rgba(250,204,21,0.25)]"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-[11px] text-amber-400 font-semibold uppercase tracking-widest mt-2">
              Santara Basketball Sumbawa
            </span>
          </button>
        </div>

        {/* Quick Links Menu - Centered */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 my-6 text-neutral-300">
          <button
            onClick={() => {
              onNavigate('/');
              scrollToTop();
            }}
            className="hover:text-amber-400 transition-colors"
          >
            Beranda
          </button>
          <span className="text-neutral-700 hidden sm:inline">•</span>
          <button
            onClick={() => {
              onNavigate('/visi-misi', 'visi-misi');
              scrollToTop();
            }}
            className="hover:text-amber-400 transition-colors"
          >
            Visi & Misi
          </button>
          <span className="text-neutral-700 hidden sm:inline">•</span>
          <button
            onClick={() => {
              onNavigate('/visi-misi', 'sejarah');
              scrollToTop();
            }}
            className="hover:text-amber-400 transition-colors"
          >
            Sejarah
          </button>
          <span className="text-neutral-700 hidden sm:inline">•</span>
          <button
            onClick={() => {
              onNavigate('/visi-misi', 'pemain');
              scrollToTop();
            }}
            className="hover:text-amber-400 transition-colors"
          >
            Profil Pemain
          </button>
          <span className="text-neutral-700 hidden sm:inline">•</span>
          <button
            onClick={() => {
              onNavigate('/event', 'jadwal');
              scrollToTop();
            }}
            className="hover:text-amber-400 transition-colors"
          >
            Jadwal Latihan
          </button>
          <span className="text-neutral-700 hidden sm:inline">•</span>
          <button
            onClick={() => {
              onNavigate('/keanggotaan', 'pendaftaran');
              scrollToTop();
            }}
            className="text-amber-400 font-semibold hover:underline"
          >
            Pendaftaran
          </button>
        </div>

        {/* Basecamp & Training Venues - Centered & Clean on Mobile */}
        <div className="w-full max-w-2xl my-6 space-y-3">
          
          {/* Basecamp */}
          <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-900 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center sm:text-left">
            <Home className="w-4 h-4 text-amber-400 shrink-0" />
            <div className="flex-1 text-center">
              <span className="text-white font-medium block">
                Basecamp Kost Santara Sumbawa
              </span>
              <span className="text-neutral-400 text-[11px] block mt-0.5">
                Jl. Manggis 1 (Belakang Tower Gang Mamak), Kel. Uma Sima, Sumbawa Besar
              </span>
            </div>
            <a
              href={CLUB_CONFIG.basecamp.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-amber-400 text-[11px] font-semibold rounded-md flex items-center gap-1 shrink-0 mt-1 sm:mt-0"
            >
              <span>Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Practice Venues row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-900 flex flex-col items-center justify-center text-center">
              <div className="flex items-center gap-1.5 text-white font-medium mb-0.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>SMAN 3 Sumbawa Besar</span>
              </div>
              <span className="text-neutral-400 text-[11px]">Rabu Malam (19:00 WITA)</span>
            </div>

            <div className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-900 flex flex-col items-center justify-center text-center">
              <div className="flex items-center gap-1.5 text-white font-medium mb-0.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Gallery Arena Pantai Baru</span>
              </div>
              <span className="text-neutral-400 text-[11px]">Sabtu Sore (16:00 WITA)</span>
            </div>
          </div>

          {/* WhatsApp Direct Hotline */}
          <div className="pt-2 flex items-center justify-center">
            <a
              href={`https://wa.me/${CLUB_CONFIG.whatsappNumberIntl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-amber-400 font-mono text-xs font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>WhatsApp: {CLUB_CONFIG.whatsappNumber}</span>
            </a>
          </div>

        </div>

        {/* Bottom Copyright - Centered, No "Ke Atas" button */}
        <div className="w-full pt-6 mt-4 border-t border-neutral-900/80 flex items-center justify-center text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} TRABAS (Santara Basketball Sumbawa). Hak Cipta Dilindungi.</p>
        </div>

      </div>
    </footer>
  );
};
