import React, { useState } from 'react';
import { CLUB_CONFIG } from '../data/clubData';

export const RegistrationSection: React.FC = () => {
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

  return (
    <section id="registrasi" className="py-16 bg-black relative border-t border-neutral-900">
      <div className="max-w-lg mx-auto px-4 sm:px-6">
        
        {/* Simple Heading */}
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
            Pendaftaran Anggota
          </h2>
          <p className="text-xs text-neutral-400 mt-1">
            TRABAS (Santara Basketball Sumbawa)
          </p>
        </div>

        {/* Minimal Clean Form Card */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-xl">
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

            {/* CUKUP TOMBOL "DAFTAR" */}
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
    </section>
  );
};
