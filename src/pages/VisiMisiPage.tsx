import React, { useState } from 'react';
import { CLUB_VISION, CLUB_HISTORY, PLAYERS, CLUB_CONFIG } from '../data/clubData';
import { Target, Compass, BookOpen, Users, Shield, MapPin, ZoomIn, ZoomOut, Download, X, Maximize2 } from 'lucide-react';

interface VisiMisiPageProps {
  initialSubTab?: 'visi-misi' | 'sejarah' | 'pemain' | 'logo';
}

export const VisiMisiPage: React.FC<VisiMisiPageProps> = ({ initialSubTab = 'visi-misi' }) => {
  const [activeTab, setActiveTab] = useState<'visi-misi' | 'sejarah' | 'pemain' | 'logo'>(initialSubTab);

  React.useEffect(() => {
    if (initialSubTab) {
      setActiveTab(initialSubTab);
    }
  }, [initialSubTab]);

  // Logo Lightbox & Zoom state
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const [logoZoom, setLogoZoom] = useState(1);

  const subTabs = [
    { id: 'visi-misi', label: 'Visi & Misi', icon: Target },
    { id: 'sejarah', label: 'Sejarah Klub', icon: BookOpen },
    { id: 'pemain', label: 'Profil Pemain', icon: Users },
    { id: 'logo', label: 'Logo Klub', icon: Shield },
  ];

  const handleZoomIn = () => setLogoZoom((prev) => Math.min(3, prev + 0.3));
  const handleZoomOut = () => setLogoZoom((prev) => Math.max(1, prev - 0.3));
  const handleResetZoom = () => setLogoZoom(1);

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="text-center mb-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-400">
            PROFIL & IDENTITAS
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-white mt-1">
            Visi, Misi & Profil Klub
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-xl mx-auto">
            Mengenal perjalanan, cita-cita, para pemain, dan logo resmi TRABAS (Santara Basketball Sumbawa).
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
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
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

        {/* Tab 1: Visi & Misi */}
        {activeTab === 'visi-misi' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Visi */}
            <div className="rounded-2xl bg-neutral-950 border border-amber-400/30 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                <Target className="w-4 h-4" />
                <span>Visi Klub</span>
              </div>
              <p className="text-base sm:text-xl font-semibold text-white leading-relaxed">
                "{CLUB_VISION.visi}"
              </p>
            </div>

            {/* Misi */}
            <div className="rounded-2xl bg-neutral-950 border border-neutral-850 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
                <Compass className="w-4 h-4" />
                <span>Misi Klub</span>
              </div>
              <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
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
        )}

        {/* Tab 2: Sejarah */}
        {activeTab === 'sejarah' && (
          <div className="rounded-2xl bg-neutral-950 border border-neutral-850 p-6 sm:p-10 shadow-xl animate-in fade-in duration-200 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Kisah Awal Perjalanan</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">
              {CLUB_HISTORY.title}
            </h2>

            <div className="prose prose-invert max-w-none text-xs sm:text-sm text-neutral-300 leading-relaxed space-y-4 whitespace-pre-line font-sans">
              {CLUB_HISTORY.content}
            </div>

            <div className="pt-4 border-t border-neutral-900 flex items-start gap-2.5 text-xs text-amber-400">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Titik Awal: {CLUB_HISTORY.originLocation}</span>
            </div>
          </div>
        )}

        {/* Tab 3: Profil Pemain (TANPA DESKRIPSI: CUKUP POSISI, TINGGI, TEMBAKAN, GAYA) */}
        {activeTab === 'pemain' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="text-center mb-6">
              <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                ROSTER PEMAIN
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white mt-1">
                Daftar Pemain TRABAS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PLAYERS.map((player, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-neutral-950 border border-neutral-850 p-6 flex flex-col justify-between shadow-xl hover:border-amber-400/50 transition-all group"
                >
                  <div>
                    {/* Top Row: Jersey No & Position */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-900">
                      <span className="font-display text-4xl font-black text-amber-400 tracking-tighter">
                        #{player.number}
                      </span>
                      <span className="text-[11px] font-semibold uppercase text-neutral-300 bg-neutral-900 px-2.5 py-1 rounded-md border border-neutral-800">
                        {player.position}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="font-display text-xl font-bold text-white uppercase group-hover:text-amber-400 transition-colors mb-4">
                      {player.name}
                    </h3>

                    {/* Attributes: Posisi, Tinggi, Tembakan, Gaya (Tanpa Deskripsi) */}
                    <div className="space-y-2.5 text-xs text-neutral-300 bg-black/60 p-3.5 rounded-xl border border-neutral-900">
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-500">Posisi:</span>
                        <strong className="text-white">{player.position}</strong>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-500">Tinggi Badan:</span>
                        <strong className="text-white font-mono">{player.height}</strong>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-500">Tembakan:</span>
                        <strong className="text-white">{player.hand}</strong>
                      </div>
                      <div className="pt-2 border-t border-neutral-900">
                        <span className="text-neutral-500 block text-[11px] mb-0.5">Gaya Bermain:</span>
                        <strong className="text-amber-400 text-xs block leading-snug">
                          {player.favoriteStyle}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Logo Klub (CUKUP LOGO, BISA DIKLIK, ZOOM, DOWNLOAD, HAPUS MAKNA) */}
        {activeTab === 'logo' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="text-center mb-6">
              <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                LOGO RESMI
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white mt-1">
                Logo TRABAS
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                Klik logo untuk melihat resolusi penuh, perbesar (zoom), atau unduh (download).
              </p>
            </div>

            {/* Interactive Logo Viewer Card */}
            <div className="p-8 sm:p-12 rounded-2xl bg-neutral-950 border border-neutral-850 flex flex-col items-center justify-center text-center shadow-xl">
              <div
                onClick={() => setIsLogoModalOpen(true)}
                className="relative cursor-pointer group p-4 rounded-2xl hover:bg-neutral-900/60 transition-colors"
                title="Klik untuk memperbesar logo"
              >
                <div className="w-56 h-56 sm:w-72 sm:h-72 flex items-center justify-center">
                  <img
                    src={CLUB_CONFIG.logoFormal}
                    alt="Logo TRABAS"
                    className="max-w-full max-h-full object-contain filter drop-shadow-[0_8px_30px_rgba(250,204,21,0.3)] group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      if (e.currentTarget.src !== CLUB_CONFIG.logoFormalBase64) {
                        e.currentTarget.src = CLUB_CONFIG.logoFormalBase64;
                      }
                    }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 rounded-2xl backdrop-blur-xs">
                  <span className="px-4 py-2 bg-amber-400 text-black text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg flex items-center gap-1.5">
                    <Maximize2 className="w-4 h-4" />
                    <span>Perbesar / Zoom</span>
                  </span>
                </div>
              </div>

              {/* Action Buttons: Klik Zoom & Download */}
              <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                <button
                  onClick={() => setIsLogoModalOpen(true)}
                  className="px-6 py-2.5 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
                >
                  <Maximize2 className="w-4 h-4 text-amber-400" />
                  <span>Buka Layar Penuh</span>
                </button>

                <a
                  href={CLUB_CONFIG.logoFormal}
                  download="logo_formal_trabas.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 shadow-md shadow-amber-400/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Logo</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Lightbox / Zoom Modal for Logo */}
      {isLogoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col p-4 animate-in fade-in duration-150">
          {/* Modal Header */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
            <div>
              <h3 className="font-display text-lg font-bold uppercase text-white">
                Logo TRABAS (Resolusi Penuh)
              </h3>
              <span className="text-xs text-neutral-400">Gunakan tombol zoom atau download logo</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleZoomIn}
                className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="px-3 py-1.5 text-xs rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
              >
                Reset
              </button>
              <a
                href={CLUB_CONFIG.logoFormal}
                download="logo_formal_trabas.png"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-amber-400 text-black hover:bg-amber-300 font-semibold"
                title="Download Logo"
              >
                <Download className="w-4 h-4" />
              </a>
              <button
                onClick={() => {
                  setIsLogoModalOpen(false);
                  handleResetZoom();
                }}
                className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white ml-2"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="flex-1 flex items-center justify-center p-6 overflow-auto">
            <div
              className="transition-transform duration-150 flex items-center justify-center"
              style={{ transform: `scale(${logoZoom})` }}
            >
              <img
                src={CLUB_CONFIG.logoFormal}
                alt="Logo TRABAS Full Resolution"
                className="max-h-[70vh] max-w-full object-contain filter drop-shadow-[0_10px_40px_rgba(250,204,21,0.25)] select-none"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (e.currentTarget.src !== CLUB_CONFIG.logoFormalBase64) {
                    e.currentTarget.src = CLUB_CONFIG.logoFormalBase64;
                  }
                }}
              />
            </div>
          </div>

          {/* Modal Footer */}
          <div className="pt-3 border-t border-neutral-850 flex items-center justify-between text-xs text-neutral-400">
            <span>Zoom: {Math.round(logoZoom * 100)}%</span>
            <a
              href={CLUB_CONFIG.logoFormal}
              download="logo_formal_trabas.png"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline flex items-center gap-1 font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Simpan file PNG</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
