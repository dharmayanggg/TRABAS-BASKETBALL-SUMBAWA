import React from 'react';
import { SCHEDULES } from '../data/clubData';
import { Clock, MapPin, Users } from 'lucide-react';

export const ScheduleSection: React.FC = () => {
  return (
    <section id="jadwal" className="py-16 bg-black relative border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Heading */}
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
            Jadwal Latihan Mingguan
          </h2>
          <p className="text-xs text-neutral-400 mt-1">
            2 sesi rutin setiap pekan
          </p>
        </div>

        {/* 2 Clean Schedule Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SCHEDULES.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between shadow-xl hover:border-amber-400/40 transition-colors"
            >
              <div>
                {/* Day Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-900">
                  <span className="font-display text-2xl font-bold uppercase text-amber-400">
                    Hari {item.day}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-white font-mono bg-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-800">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{item.time}</span>
                  </div>
                </div>

                {/* Usia (Tanpa Kategori) */}
                <div className="flex items-center gap-2 text-xs text-neutral-300 mb-4 bg-neutral-900/60 p-2.5 rounded-lg border border-neutral-850">
                  <Users className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Usia: <strong className="text-white">{item.age}</strong></span>
                </div>

                {/* Tempat */}
                <div className="space-y-1 text-xs">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block text-sm">
                        {item.venue}
                      </span>
                      <span className="text-neutral-400 text-[11px] leading-relaxed block mt-0.5">
                        {item.address}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
