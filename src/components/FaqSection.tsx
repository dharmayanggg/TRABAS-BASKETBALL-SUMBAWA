import React, { useState } from 'react';
import { CLUB_CONFIG } from '../data/clubData';
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  category: 'Umum' | 'Latihan' | 'Pendaftaran' | 'Komunitas';
  answer: React.ReactNode;
}

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<number[]>([1]); // First question open by default

  const faqs: FaqItem[] = [
    {
      id: 1,
      category: 'Umum',
      question: 'Apa itu TRABAS (Santara Basketball Sumbawa)?',
      answer: (
        <div className="space-y-2">
          <p>
            <strong className="text-amber-400">TRABAS</strong> adalah klub bola basket asal Sumbawa yang berawal dari tongkrongan positif para perintis di Kost Santara, Jalan Manggis 1 (belakang tower gang Mamak), Kelurahan Uma Sima.
          </p>
          <p>
            TRABAS berfokus pada pembinaan basket, fun match, sparing, esport, dan board game dengan visi menjadi klub basket terkemuka di NTB yang dikelola secara modern, berbasis digital, dan menjunjung tinggi kekompakan serta sportivitas.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      category: 'Latihan',
      question: 'Kapan dan di mana jadwal latihan rutin TRABAS diadakan?',
      answer: (
        <div className="space-y-2">
          <p>Latihan rutin TRABAS diselenggarakan 2 sesi setiap minggu:</p>
          <ul className="space-y-1.5 pl-3 border-l-2 border-amber-400/40">
            <li>
              <span className="font-semibold text-white">1. Rabu Malam (19:00 WITA)</span> di Lapangan Basket SMAN 3 Sumbawa Besar.
            </li>
            <li>
              <span className="font-semibold text-white">2. Sabtu Sore (16:00 WITA)</span> di Gallery Arena Pantai Baru.
            </li>
          </ul>
          <p className="text-neutral-400 text-xs">
            Kedua lokasi dilengkapi fasilitas lapangan standar, penerangan yang baik, dan akses mudah di Sumbawa Besar.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      category: 'Pendaftaran',
      question: 'Siapa saja yang boleh bergabung menjadi anggota TRABAS?',
      answer: (
        <p>
          TRABAS terbuka untuk <strong className="text-white">semua kalangan dan semua usia</strong> (putra maupun putri), baik pemula yang baru pertama kali ingin belajar fundamental basket hingga pemain berpengalaman yang ingin bertanding di level turnamen dan kompetisi daerah NTB. Syarat utamanya adalah komitmen, disiplin, dan rasa kekeluargaan.
        </p>
      ),
    },
    {
      id: 4,
      category: 'Pendaftaran',
      question: 'Bagaimana cara mendaftar menjadi anggota baru?',
      answer: (
        <div className="space-y-2">
          <p>
            Pendaftaran dilakukan 100% online dengan format yang sangat simpel:
          </p>
          <ol className="list-decimal pl-4 space-y-1 text-neutral-300">
            <li>Kunjungi menu <span className="text-amber-400 font-semibold">Keanggotaan &gt; Formulir Pendaftaran</span>.</li>
            <li>Isi nama lengkap, nama panggilan, nomor WhatsApp, tanggal lahir/usia, jenis kelamin, posisi, tinggi badan, nomor & ukuran seragam.</li>
            <li>Klik tombol <span className="text-white font-semibold">"Daftar"</span>. Data Anda akan langsung diarahkan ke chat WhatsApp resmi Official TRABAS di nomor <span className="font-mono text-amber-400">082342344558</span>.</li>
          </ol>
        </div>
      ),
    },
    {
      id: 5,
      category: 'Umum',
      question: 'Apakah ada biaya pendaftaran atau iuran rutin?',
      answer: (
        <p>
          TRABAS mengedepankan asas kekeluargaan dan transparansi kas digital. Biaya pendaftaran awal sangat terjangkau dan iuran bulanan difokuskan murni untuk operasional sewa lapangan latihan, perawatan bola, dan fasilitas tim. Informasi rincian kas diinformasikan terbuka di grup komunikasi WhatsApp anggota.
        </p>
      ),
    },
    {
      id: 6,
      category: 'Komunitas',
      question: 'Di mana alamat Basecamp resmi TRABAS?',
      answer: (
        <div className="space-y-2">
          <p>
            Basecamp resmi TRABAS berlokasi di:
          </p>
          <div className="p-3 bg-neutral-900/80 rounded-xl border border-neutral-800 text-neutral-200">
            <p className="font-semibold text-amber-400">Kost Santara Sumbawa</p>
            <p className="text-xs text-neutral-400">
              Jalan Manggis 1, Belakang Tower Gang Mamak, Kelurahan Uma Sima, Kecamatan Sumbawa, Kabupaten Sumbawa, NTB.
            </p>
          </div>
          <p className="text-xs text-neutral-400">
            Tautan rute dan lokasi Google Maps dapat diakses langsung dari kartu Basecamp di beranda website.
          </p>
        </div>
      ),
    },
    {
      id: 7,
      category: 'Pendaftaran',
      question: 'Apakah anggota baru wajib langsung memiliki seragam resmi?',
      answer: (
        <p>
          <strong className="text-white">Tidak wajib di awal.</strong> Untuk sesi latihan reguler, anggota baru dapat memakai kaos olahraga dan sepatu basket bebas yang nyaman. Pemesanan seragam resmi TRABAS (nomor punggung dan nama kustom) akan dikoordinasikan ketika Anda siap diturunkan dalam laga sparing, fun match antar-tim, atau kejuaraan resmi.
        </p>
      ),
    },
    {
      id: 8,
      category: 'Komunitas',
      question: 'Apa saja aktivitas di TRABAS selain latihan bola basket?',
      answer: (
        <p>
          Sesuai filosofi pembentukannya di Kost Santara, TRABAS bukan sekadar klub latihan fisik, tetapi juga ruang kumpul anak muda yang positif: kegiatan meliputi <strong className="text-amber-400">fun match</strong>, <strong className="text-amber-400">sparing persahabatan antar-klub</strong>, diskusi taktik, sesi <strong className="text-white">mini tournament esport</strong> (seperti Mobile Legends / NBA 2K), hingga bermain <strong className="text-white">board game</strong> di basecamp untuk memupuk *chemistry* dan kekompakan tim di dalam maupun luar lapangan.
        </p>
      ),
    },
    {
      id: 9,
      category: 'Latihan',
      question: 'Bagaimana jika saya berhalangan hadir pada salah satu jadwal latihan?',
      answer: (
        <p>
          Anggota cukup memberikan konfirmasi izin pada grup WhatsApp resmi TRABAS minimal beberapa jam sebelum latihan dimulai. Hal ini penting agar pengurus dan tim dapat menyesuaikan format drill, pembagian tim tanding mini, dan rotasi waktu bermain dengan adil.
        </p>
      ),
    },
    {
      id: 10,
      category: 'Umum',
      question: 'Apakah TRABAS menerima ajakan tanding (sparing) dari tim luar?',
      answer: (
        <div className="space-y-2">
          <p>
            <strong className="text-emerald-400">Sangat terbuka!</strong> Kami dengan senang hati menerima undangan sparing atau fun match persahabatan dari klub basket sekolah, kampus, instansi, maupun klub basket komunitas di Sumbawa dan seluruh penjuru NTB.
          </p>
          <p className="text-xs text-neutral-400">
            Untuk penjadwalan dan koordinasi lapangan, silakan hubungi pengurus TRABAS via WhatsApp di <span className="text-amber-400 font-mono font-semibold">082342344558</span>.
          </p>
        </div>
      ),
    },
  ];


  const toggleAccordion = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleExpandAll = () => {
    setOpenIds(faqs.map((f) => f.id));
  };

  const handleCollapseAll = () => {
    setOpenIds([]);
  };

  const openWhatsAppHelp = () => {
    const text = encodeURIComponent(
      'Halo Admin TRABAS Basketball Club, saya ingin bertanya seputar klub...'
    );
    window.open(`https://wa.me/${CLUB_CONFIG.whatsappNumberIntl}?text=${text}`, '_blank');
  };

  return (
    <section id="faq" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-8 relative z-10">
      
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-mono uppercase tracking-wider mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Tanya Jawab Klub</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-3">
          FREQUENTLY ASKED <span className="text-amber-400">QUESTIONS</span>
        </h2>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
          10 pertanyaan dan jawaban yang paling sering diajukan mengenai TRABAS (Santara Basketball Sumbawa).
        </p>
      </div>

      {/* Expand / Collapse Actions */}
      <div className="flex justify-end items-center gap-2 mb-4 px-1">
        <button
          onClick={handleExpandAll}
          className="text-[11px] text-neutral-400 hover:text-amber-400 transition-colors underline decoration-dotted"
        >
          Buka Semua
        </button>
        <span className="text-neutral-700">•</span>
        <button
          onClick={handleCollapseAll}
          className="text-[11px] text-neutral-400 hover:text-amber-400 transition-colors underline decoration-dotted"
        >
          Tutup Semua
        </button>
      </div>

      {/* Accordion List - Langsung Pertanyaan */}
      <div className="space-y-3.5">
        {faqs.map((faq) => {
          const isOpen = openIds.includes(faq.id);

          return (
            <div
              key={faq.id}
              className={`rounded-2xl transition-all duration-200 border overflow-hidden ${
                isOpen
                  ? 'bg-neutral-950/90 border-amber-400/40 shadow-xl shadow-black/50'
                  : 'bg-neutral-950/50 border-neutral-850/70 hover:border-neutral-750'
              }`}
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full p-4 sm:p-5 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3.5">
                  {/* Index Badge */}
                  <span
                    className={`w-7 h-7 shrink-0 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                      isOpen
                        ? 'bg-amber-400 text-black shadow-md shadow-amber-400/25'
                        : 'bg-neutral-900 text-neutral-400 border border-neutral-800'
                    }`}
                  >
                    {String(faq.id).padStart(2, '0')}
                  </span>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400/80 mb-0.5 block">
                      {faq.category}
                    </span>
                    <h3
                      className={`text-sm sm:text-base font-semibold transition-colors ${
                        isOpen ? 'text-amber-300' : 'text-neutral-200 hover:text-white'
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>
                </div>

                <div
                  className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center border transition-all duration-200 ${
                    isOpen
                      ? 'border-amber-400 bg-amber-400/10 text-amber-400 rotate-180'
                      : 'border-neutral-800 bg-neutral-900 text-neutral-400'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Answer Content */}
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-900/80 animate-in fade-in duration-200">
                  <div className="pt-2 pl-1 sm:pl-10">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Card */}
      <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xl">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display text-base font-bold text-white">
              Punya Pertanyaan Lain yang Belum Terjawab?
            </h4>
            <p className="text-xs text-neutral-400">
              Tim official dan admin TRABAS siap membantu Anda kapan saja via WhatsApp.
            </p>
          </div>
        </div>

        <button
          onClick={openWhatsAppHelp}
          className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 active:scale-95 text-black text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-amber-400/20 shrink-0 flex items-center gap-2"
        >
          <span>Chat WhatsApp Official</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>

    </section>
  );
};
