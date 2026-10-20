import React from 'react';
import { Trophy } from 'lucide-react';

export const MatchResultsSection: React.FC = () => {
  return (
    <section id="hasil-match" className="py-16 bg-black relative border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Heading */}
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
            Hasil Pertandingan Terakhir
          </h2>
        </div>

        {/* Empty state per instruction */}
        <div className="rounded-2xl bg-neutral-950 border border-neutral-850 p-8 sm:p-12 text-center shadow-lg max-w-lg mx-auto">
          <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto mb-4 text-neutral-500">
            <Trophy className="w-6 h-6" />
          </div>
          <p className="text-base sm:text-lg font-medium text-neutral-300">
            Belum ada hasil pertandingan.
          </p>
        </div>

      </div>
    </section>
  );
};
