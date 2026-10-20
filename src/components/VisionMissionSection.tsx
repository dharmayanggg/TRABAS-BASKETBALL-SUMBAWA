import React from 'react';
import { CLUB_VISION } from '../data/clubData';
import { Target, Compass } from 'lucide-react';

export const VisionMissionSection: React.FC = () => {
  return (
    <section id="visi-misi" className="py-16 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
            Visi & Misi
          </h2>
          <p className="text-xs text-neutral-400 mt-1">
            Komitmen & Tujuan TRABAS di Nusa Tenggara Barat
          </p>
        </div>

        <div className="space-y-6">
          
          {/* Card Visi */}
          <div className="rounded-2xl bg-black border border-amber-400/30 p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
              <Target className="w-4 h-4" />
              <span>Visi Utama</span>
            </div>
            <p className="text-base sm:text-lg font-semibold text-white leading-relaxed">
              "{CLUB_VISION.visi}"
            </p>
          </div>

          {/* Card Misi */}
          <div className="rounded-2xl bg-black border border-neutral-850 p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              <Compass className="w-4 h-4" />
              <span>Misi Klub</span>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-neutral-300">
              {CLUB_VISION.misi.map((m, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="font-mono font-bold text-amber-400 shrink-0 mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span className="leading-relaxed">{m}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
