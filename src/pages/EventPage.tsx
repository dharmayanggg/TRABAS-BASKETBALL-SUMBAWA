import React, { useState } from 'react';
import { SCHEDULES } from '../data/clubData';
import { Calendar, Trophy, Camera, Clock, MapPin, Users } from 'lucide-react';

interface EventPageProps {
  initialSubTab?: 'jadwal' | 'hasil-match' | 'galeri';
}

export const EventPage: React.FC<EventPageProps> = ({ initialSubTab = 'jadwal' }) => {
  const [activeTab, setActiveTab] = useState<'jadwal' | 'hasil-match' | 'galeri'>(initialSubTab);

  React.useEffect(() => {
    if (initialSubTab) {
      setActiveTab(initialSubTab);
    }
  }, [initialSubTab]);

  const subTabs = [
    { id: 'jadwal', label: 'Jadwal Latihan', icon: Calendar },
    { id: 'hasil-match', label: 'Hasil Match', icon: Trophy },
    { id: 'galeri', label: 'Galeri Foto', icon: Camera },
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="text-center mb-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-400">
            AGENDA & DOKUMENTASI
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-white mt-1">
            Event & Kegiatan Klub
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-xl mx-auto">
            Jadwal sesi latihan mingguan, rekap hasil pertandingan, dan dokumentasi foto klub.
          </p>
        </div>

        {/* Sub-menu Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {subTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20'
                    : 'bg-neutral-900/80 text-neutral-300 hover:text-white hover:bg-neutral-850 border border-neutral-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Sub-tab 1: Jadwal Latihan */}
        {activeTab === 'jadwal' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="text-center mb-6">
              <h2 className="font-display text-2xl font-bold uppercase text-white">
                Jadwal Latihan Mingguan
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                2 sesi rutin setiap pekan (Rabu & Sabtu)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SCHEDULES.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between shadow-xl hover:border-amber-400/40 transition-colors"
                >
                  <div>
                    {/* Header: Day & Time */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-900">
                      <span className="font-display text-2xl font-bold uppercase text-amber-400">
                        Hari {item.day}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-white font-mono bg-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-800">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        <span>{item.time}</span>
                      </div>
                    </div>

                    {/* Usia: Semua Usia */}
                    <div className="flex items-center gap-2 text-xs text-neutral-300 mb-4 bg-neutral-900/60 p-2.5 rounded-lg border border-neutral-850">
                      <Users className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Usia: <strong className="text-white">{item.age}</strong></span>
                    </div>

                    {/* Lokasi */}
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
        )}

        {/* Sub-tab 2: Hasil Match */}
        {activeTab === 'hasil-match' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="text-center mb-6">
              <h2 className="font-display text-2xl font-bold uppercase text-white">
                Hasil Pertandingan Terakhir
              </h2>
            </div>

            <div className="rounded-2xl bg-neutral-950 border border-neutral-850 p-10 sm:p-14 text-center shadow-lg max-w-md mx-auto">
              <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto mb-4 text-neutral-500">
                <Trophy className="w-6 h-6" />
              </div>
              <p className="text-base sm:text-lg font-medium text-neutral-300">
                Belum ada hasil pertandingan.
              </p>
            </div>
          </div>
        )}

        {/* Sub-tab 3: Galeri Foto */}
        {activeTab === 'galeri' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="text-center mb-6">
              <h2 className="font-display text-2xl font-bold uppercase text-white">
                Galeri Foto Kegiatan
              </h2>
            </div>

            <div className="rounded-2xl bg-neutral-950 border border-neutral-850 p-10 sm:p-14 text-center shadow-lg max-w-md mx-auto">
              <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto mb-4 text-neutral-500">
                <Camera className="w-6 h-6" />
              </div>
              <p className="text-base sm:text-lg font-medium text-neutral-300">
                Belum ada foto tersedia.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
