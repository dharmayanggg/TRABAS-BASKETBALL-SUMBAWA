import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { VisiMisiPage } from './pages/VisiMisiPage';
import { EventPage } from './pages/EventPage';
import { KeanggotaanPage } from './pages/KeanggotaanPage';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>(() => {
    const path = window.location.pathname;
    if (['/visi-misi', '/event', '/keanggotaan'].includes(path)) {
      return path;
    }
    return '/';
  });

  const [currentSubTab, setCurrentSubTab] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Synchronize history state for routing and back button handling
  useEffect(() => {
    window.history.replaceState({ page: currentPage, subTab: currentSubTab }, '', currentPage);

    const handlePopState = (event: PopStateEvent) => {
      // If user presses BACK button from any subpage, do not exit, go to Home ('/')
      if (currentPage !== '/') {
        event.preventDefault();
        setCurrentPage('/');
        setCurrentSubTab(undefined);
        window.history.pushState({ page: '/' }, '', '/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
        setCurrentSubTab(event.state.subTab);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentPage, currentSubTab]);

  // Scroll listener for floating scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 280);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (path: string, subTab?: string) => {
    window.history.pushState({ page: path, subTab }, '', path);
    setCurrentPage(path);
    setCurrentSubTab(subTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-basketball-texture text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-black relative">
      
      {/* Subtle basketball glowing court aura */}
      <div className="fixed inset-0 pointer-events-none basketball-seam-glow z-0" />

      {/* Header with Hover Submenus */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Page Content with smooth transition */}
      <main className="flex-1 relative z-10">
        {currentPage === '/' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === '/visi-misi' && <VisiMisiPage initialSubTab={currentSubTab as any} />}
        {currentPage === '/event' && <EventPage initialSubTab={currentSubTab as any} />}
        {currentPage === '/keanggotaan' && <KeanggotaanPage initialSubTab={currentSubTab as any} />}
      </main>

      {/* Footer: enlarged logo only, no text */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Scroll to Top */}
      {showScrollTop && (
        <aside
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 animate-in fade-in zoom-in duration-200"
        >
          <button
            onClick={handleScrollToTop}
            className="p-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black shadow-xl hover:shadow-amber-400/25 active:scale-95 transition-all border border-amber-300/40 flex items-center justify-center focus:outline-none"
            title="Kembali ke atas"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </button>
        </aside>
      )}
    </div>
  );
}
