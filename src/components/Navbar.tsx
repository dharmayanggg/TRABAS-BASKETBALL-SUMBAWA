import React, { useState } from 'react';
import { CLUB_CONFIG } from '../data/clubData';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (path: string, subTab?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const [logoError, setLogoError] = useState(false);

  const menuItems = [
    {
      label: 'Beranda',
      path: '/',
    },
    {
      label: 'Visi & Misi',
      path: '/visi-misi',
      subMenus: [
        { label: 'Visi & Misi', subTab: 'visi-misi' },
        { label: 'Sejarah Klub', subTab: 'sejarah' },
        { label: 'Profil Pemain', subTab: 'pemain' },
        { label: 'Logo Klub', subTab: 'logo' },
      ],
    },
    {
      label: 'Event',
      path: '/event',
      subMenus: [
        { label: 'Jadwal Latihan', subTab: 'jadwal' },
        { label: 'Hasil Match', subTab: 'hasil-match' },
        { label: 'Galeri Foto', subTab: 'galeri' },
      ],
    },
    {
      label: 'Keanggotaan',
      path: '/keanggotaan',
      subMenus: [
        { label: 'Formulir Pendaftaran', subTab: 'pendaftaran' },
        { label: 'Syarat & Peraturan', subTab: 'aturan' },
      ],
    },
  ];

  const handleItemClick = (path: string, subTab?: string) => {
    setMobileMenuOpen(false);
    onNavigate(path, subTab);
  };

  const toggleMobileSubmenu = (label: string) => {
    setExpandedMobileMenu((prev) => (prev === label ? null : label));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md py-3 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo on the LEFT SIDE and made larger */}
          <div className="flex items-center">
            <button
              onClick={() => handleItemClick('/')}
              className="flex items-center group focus:outline-none"
              aria-label="TRABAS Home"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center transition-transform group-hover:scale-105">
                {!logoError ? (
                  <img
                    src={CLUB_CONFIG.logoFormal}
                    alt="Logo TRABAS"
                    className="max-w-full max-h-full object-contain filter drop-shadow-[0_4px_16px_rgba(250,204,21,0.25)]"
                    referrerPolicy="no-referrer"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <span className="font-display font-bold text-amber-400 text-2xl">TRABAS</span>
                )}
              </div>
            </button>
          </div>

          {/* Desktop Navigation with Hover Dropdowns */}
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => {
              const isActive = currentPage === item.path;
              const hasSub = item.subMenus && item.subMenus.length > 0;

              return (
                <div key={item.label} className="relative group py-2">
                  <button
                    onClick={() => handleItemClick(item.path)}
                    className={`text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-1 cursor-pointer ${
                      isActive
                        ? 'text-amber-400 font-bold'
                        : 'text-neutral-300 hover:text-amber-400'
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasSub && (
                      <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </button>

                  {/* Dropdown Menu on Hover */}
                  {hasSub && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                      <div className="w-48 bg-neutral-950/95 border border-neutral-800 rounded-xl shadow-2xl p-2 backdrop-blur-xl flex flex-col gap-1">
                        {item.subMenus!.map((sub) => (
                          <button
                            key={sub.label}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleItemClick(item.path, sub.subTab);
                            }}
                            className="px-3 py-2 text-left text-xs text-neutral-300 hover:text-black hover:bg-amber-400 rounded-lg transition-colors font-medium"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            <button
              onClick={() => handleItemClick('/keanggotaan', 'pendaftaran')}
              className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-black bg-amber-400 rounded-lg hover:bg-amber-300 active:scale-95 transition-all shadow-md shadow-amber-400/20 ml-2"
            >
              Daftar
            </button>
          </nav>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-amber-400 hover:bg-neutral-900 rounded-lg"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown with submenus */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-neutral-950 border border-neutral-800 rounded-xl shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => {
                const isActive = currentPage === item.path;
                const hasSub = item.subMenus && item.subMenus.length > 0;
                const isExpanded = expandedMobileMenu === item.label;

                return (
                  <div key={item.label} className="border-b border-neutral-900 last:border-none pb-2">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => handleItemClick(item.path)}
                        className={`py-2 text-left text-xs uppercase tracking-wider font-semibold transition-colors flex-1 ${
                          isActive ? 'text-amber-400 font-bold' : 'text-neutral-200'
                        }`}
                      >
                        {item.label}
                      </button>
                      {hasSub && (
                        <button
                          onClick={() => toggleMobileSubmenu(item.label)}
                          className="p-2 text-neutral-400 hover:text-white"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? 'rotate-180 text-amber-400' : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile Submenu Accordion */}
                    {hasSub && isExpanded && (
                      <div className="pl-3 py-1 flex flex-col gap-1.5 border-l-2 border-amber-400/30 my-1">
                        {item.subMenus!.map((sub) => (
                          <button
                            key={sub.label}
                            onClick={() => handleItemClick(item.path, sub.subTab)}
                            className="py-1.5 text-left text-xs text-neutral-400 hover:text-amber-400 transition-colors"
                          >
                            • {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pt-2">
                <button
                  onClick={() => handleItemClick('/keanggotaan', 'pendaftaran')}
                  className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-black bg-amber-400 rounded-lg hover:bg-amber-300 transition-all text-center"
                >
                  Daftar Anggota
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
