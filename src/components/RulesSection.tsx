import React from 'react';
import { CLUB_RULES } from '../data/clubData';
import { ShieldCheck, FileCheck } from 'lucide-react';

export const RulesSection: React.FC = () => {
  return (
    <section id="peraturan" className="py-16 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
            Syarat & Peraturan Anggota
          </h2>
          <p className="text-xs text-neutral-400 mt-1">
            Tata tertib dan komitmen bergabung di TRABAS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Syarat Keanggotaan */}
          <div className="rounded-2xl bg-black border border-neutral-800 p-6 shadow-xl flex flex-col">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 pb-2 border-b border-neutral-900">
              <FileCheck className="w-4 h-4" />
              <span>Syarat Pendaftaran</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-300 flex-1">
              {CLUB_RULES.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span className="leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Peraturan Anggota */}
          <div className="rounded-2xl bg-black border border-neutral-800 p-6 shadow-xl flex flex-col">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 pb-2 border-b border-neutral-900">
              <ShieldCheck className="w-4 h-4" />
              <span>Peraturan & Tata Tertib</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-300 flex-1">
              {CLUB_RULES.regulations.map((reg, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span className="leading-relaxed">{reg}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
