import React from 'react';
import { CLUB_CONFIG } from '../data/clubData';

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
                onError={(e) => {
                  if (e.currentTarget.src !== CLUB_CONFIG.logoFormalBase64) {
                    e.currentTarget.src = CLUB_CONFIG.logoFormalBase64;
                  }
                }}
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
            className="hover:text-amber-400 transition-colors"
          >
            Pendaftaran
          </button>
          <span className="text-neutral-700 hidden sm:inline">•</span>
          <button
            onClick={() => {
              onNavigate('/');
              setTimeout(() => {
                document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="text-amber-400 font-semibold hover:underline"
          >
            FAQ
          </button>
        </div>

        {/* Bottom Copyright - Centered */}
        <div className="w-full pt-6 mt-4 border-t border-neutral-900/80 flex items-center justify-center text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} TRABAS (Santara Basketball Sumbawa). Hak Cipta Dilindungi.</p>
        </div>

      </div>
    </footer>
  );
};
