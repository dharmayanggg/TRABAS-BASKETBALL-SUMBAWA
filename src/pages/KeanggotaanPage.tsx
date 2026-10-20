import React, { useState } from 'react';
import { CLUB_RULES, CLUB_CONFIG } from '../data/clubData';
import { ShieldCheck, UserCheck, FileCheck, Send } from 'lucide-react';

interface KeanggotaanPageProps {
  initialSubTab?: 'aturan' | 'pendaftaran';
}

export const KeanggotaanPage: React.FC<KeanggotaanPageProps> = ({ initialSubTab = 'pendaftaran' }) => {
  const [activeTab, setActiveTab] = useState<'aturan' | 'pendaftaran'>(initialSubTab);

  React.useEffect(() => {
    if (initialSubTab) {
      setActiveTab(initialSubTab);
    }
  }, [initialSubTab]);

  // Form State
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('Laki-laki');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [position, setPosition] = useState('Guard (PG/SG)');
  const [jerseyNumber, setJerseyNumber] = useState('');
  const [jerseySize, setJerseySize] = useState('L');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      alert('Mohon isi nama lengkap dan nomor WhatsApp.');
      return;
    }

    const message = `Halo Admin TRABAS (Santara Basketball Sumbawa), saya ingin mendaftar anggota:

• Nama Lengkap: ${fullName}
• Jenis Kelamin: ${gender}
• No. WhatsApp: ${phone}
• Usia: ${age || '-'} Tahun
• Posisi: ${position}
• No. Seragam Request: ${jerseyNumber ? `#${jerseyNumber}` : '-'}
• Ukuran Seragam: ${jerseySize}
• Catatan: ${notes || '-'}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${CLUB_CONFIG.whatsappNumberIntl}?text=${encoded}`, '_blank');
  };

  const subTabs = [
    { id: 'pendaftaran', label: 'Formulir Pendaftaran', icon: UserCheck },
    { id: 'aturan', label: 'Syarat & Peraturan', icon: ShieldCheck },
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="text-center mb-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-400">
            REGISTRASI & KEANGGOTAAN
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-white mt-1">
            Keanggotaan TRABAS
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-xl mx-auto">
            Syarat, peraturan, dan pendaftaran online anggota baru TRABAS (Santara Basketball Sumbawa).
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

        {/* Sub-tab 1: Formulir Pendaftaran */}
        {activeTab === 'pendaftaran' && (
          <div className="max-w-lg mx-auto animate-in fade-in duration-200">
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="text-center mb-6 pb-4 border-b border-neutral-900">
                <h2 className="font-display text-2xl font-bold uppercase text-white">
                  Formulir Pendaftaran
                </h2>
                <p className="text-xs text-neutral-400 mt-1">
                  Lengkapi data diri di bawah ini
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nama Lengkap */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nama Lengkap Anda"
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Jenis Kelamin & Usia */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Jenis Kelamin
                    </label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Usia (Tahun)
                    </label>
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="Contoh: 18"
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                {/* WhatsApp & Posisi */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="08xxxxxxxxxx"
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Posisi Bermain
                    </label>
                    <select
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Guard (PG/SG)">Guard (PG/SG)</option>
                      <option value="Forward (SF/PF)">Forward (SF/PF)</option>
                      <option value="Center (C)">Center (C)</option>
                      <option value="All-Around / Bebas">All-Around / Bebas</option>
                    </select>
                  </div>
                </div>

                {/* Nomor Seragam & Ukuran Seragam */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Nomor Seragam Pilihan
                    </label>
                    <input
                      type="text"
                      maxLength={3}
                      value={jerseyNumber}
                      onChange={(e) => setJerseyNumber(e.target.value)}
                      placeholder="Contoh: 23"
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-800 rounded-lg text-white font-mono placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Ukuran Seragam
                    </label>
                    <select
                      value={jerseySize}
                      onChange={(e) => setJerseySize(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                      <option value="3XL">3XL</option>
                    </select>
                  </div>
                </div>

                {/* Catatan (Opsional) */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Catatan (Opsional)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Pengalaman bermain / catatan khusus..."
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Tombol Daftar */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-lg bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-amber-400/20 active:scale-95"
                  >
                    Daftar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Sub-tab 2: Syarat & Peraturan */}
        {activeTab === 'aturan' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
            {/* Syarat Keanggotaan */}
            <div className="rounded-2xl bg-neutral-950 border border-neutral-850 p-6 sm:p-8 shadow-xl flex flex-col">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 pb-2 border-b border-neutral-900">
                <FileCheck className="w-4 h-4" />
                <span>Syarat Pendaftaran</span>
              </div>
              <ul className="space-y-3.5 text-xs sm:text-sm text-neutral-300 flex-1">
                {CLUB_RULES.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold">✓</span>
                    <span className="leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Peraturan Anggota */}
            <div className="rounded-2xl bg-neutral-950 border border-neutral-850 p-6 sm:p-8 shadow-xl flex flex-col">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 pb-2 border-b border-neutral-900">
                <ShieldCheck className="w-4 h-4" />
                <span>Peraturan & Tata Tertib</span>
              </div>
              <ul className="space-y-3.5 text-xs sm:text-sm text-neutral-300 flex-1">
                {CLUB_RULES.regulations.map((reg, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span className="leading-relaxed">{reg}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
