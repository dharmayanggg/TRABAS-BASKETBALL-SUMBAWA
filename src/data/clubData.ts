export interface PlayerProfile {
  name: string;
  number: string;
  position: string;
  height: string;
  hand: string;
  favoriteStyle: string;
}

export const CLUB_CONFIG = {
  name: 'TRABAS',
  subName: 'SANTARA BASKETBALL SUMBAWA',
  whatsappNumber: '082342344558',
  whatsappNumberIntl: '6282342344558',
  basecamp: {
    name: 'Basecamp Kost Santara Sumbawa',
    detail: 'Belakang Tower Gang Mamak',
    address: 'Jl. Manggis 1, Belakang Tower Gang Mamak, Kel. Uma Sima, Kec. Sumbawa, Kabupaten Sumbawa, NTB 84317',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kost+Santara+Uma+Sima+Sumbawa+Besar',
  },
  locations: [
    {
      name: 'Lapangan Basket SMAN 3 Sumbawa Besar',
      address: 'Jl. Cendrawasih No. 139, Brang Biji, Kec. Sumbawa, Sumbawa Besar, NTB',
      scheduleNote: 'Rabu Malam (19:00 WITA)',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=SMAN+3+Sumbawa+Besar',
    },
    {
      name: 'Gallery Arena Pantai Baru',
      address: 'Jl. Garuda KM. 5, Pantai Baru, Labuhan Sumbawa, Kec. Labuhan Badas, Sumbawa, NTB',
      scheduleNote: 'Sabtu Sore (16:00 WITA)',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Gallery+Arena+Pantai+Baru+Sumbawa',
    },
  ],
  logoFormal: '/src/assets/images/logo_formal_trabas.png',
  logoHeading: '/src/assets/images/logo_heading_trabas.png',
  heroBg: '/src/assets/images/hero_trabas_basketball_court_1792485108425.jpg',
};

// 3 Slide Banner Images (Local fast cache with GitHub Raw fallback)
export const BANNER_SLIDES = [
  {
    id: 'slide-1',
    image: '/src/assets/images/banner_slide_1.jpeg',
    fallback: 'https://raw.githubusercontent.com/dharmayanggg/TRABAS-FILE/main/IMG-20261010-WA0024%20(1).jpeg',
  },
  {
    id: 'slide-2',
    image: '/src/assets/images/banner_slide_2.jpeg',
    fallback: 'https://raw.githubusercontent.com/dharmayanggg/TRABAS-FILE/main/IMG20261020173641.jpg.jpeg',
  },
  {
    id: 'slide-3',
    image: '/src/assets/images/banner_heading.png',
    fallback: 'https://raw.githubusercontent.com/dharmayanggg/TRABAS-FILE/main/Add%20a%20heading.png',
  },
];

export const CLUB_HISTORY = {
  title: 'Sejarah Lahirnya TRABAS',
  content: `Berawal dari hangatnya tongkrongan di Kost Santara Sumbawa, Jalan Manggis 1 (belakang tower gang Mamak, Kelurahan Uma Sima), muncul inisiatif dari para perintis untuk mendirikan klub bola basket mandiri.

Bermula dari hasrat bermain fun match dan berkumpul bersama, TRABAS hadir bukan hanya sebagai wadah olahraga basket, melainkan juga ruang tongkrongan sehat khusus esport dan board game.

Dari basecamp sederhana di Kost Santara Uma Sima ini, semangat kekeluargaan dipupuk hingga bertransformasi menjadi komitmen nyata membangun TRABAS (Santara Basketball Sumbawa) yang berprestasi dan dikelola modern berbasis digital.`,
  originLocation: 'Kost Santara Sumbawa, Jl. Manggis 1, Belakang Tower Gang Mamak, Kel. Uma Sima, Sumbawa Besar',
};

export const PLAYERS: PlayerProfile[] = [
  {
    name: 'Omang Ari S.',
    number: '10',
    position: 'Power Forward (PF)',
    height: '175 cm',
    hand: 'Tangan Kanan',
    favoriteStyle: 'Mid-range Jumper & Rebound Putback',
  },
  {
    name: 'Yan Sastra',
    number: '11',
    position: 'Small Forward (SF)',
    height: '165 cm',
    hand: 'Tangan Kanan',
    favoriteStyle: 'Fastbreak Layup & Crossover Drive',
  },
  {
    name: 'Dharmayang',
    number: '7',
    position: 'Center (C)',
    height: '186 cm',
    hand: 'Tangan Kanan',
    favoriteStyle: 'Post Hook & Paint Rim Protector',
  },
  {
    name: 'Jacko',
    number: '9',
    position: 'Shooting Guard (SG)',
    height: '162 cm',
    hand: 'Tangan Kanan',
    favoriteStyle: 'Catch and Shoot 3-Point Sniper',
  },
  {
    name: 'Dupus Dusanta',
    number: '23',
    position: 'Power Forward (PF)',
    height: '170 cm',
    hand: 'Tangan Kanan',
    favoriteStyle: 'Under Basket Layup & Offensive Rebound',
  },
];

export const SCHEDULES = [
  {
    id: '1',
    day: 'Rabu',
    time: '19:00 WITA (Malam)',
    age: 'Semua Usia',
    venue: 'Lapangan Basket SMAN 3 Sumbawa Besar',
    address: 'Jl. Cendrawasih No. 139, Brang Biji, Sumbawa Besar',
  },
  {
    id: '2',
    day: 'Sabtu',
    time: '16:00 WITA (Sore)',
    age: 'Semua Usia',
    venue: 'Gallery Arena Pantai Baru',
    address: 'Jl. Garuda KM. 5, Pantai Baru, Labuhan Sumbawa',
  },
];

export const CLUB_VISION = {
  visi: 'Menjadi club basket terkenal dan berprestasi di Nusa Tenggara Barat (NTB) dengan manajemen club berbasis digital dan kekompakan tim yang solid.',
  misi: [
    'Membangun pembinaan basket berkualitas dan berkelanjutan di Sumbawa.',
    'Menerapkan tata kelola manajemen club modern berbasis digital yang transparan dan efisien.',
    'Menjaga kekompakan, persaudaraan, dan sportivitas yang erat antar sesama anggota.',
    'Aktif mengikuti event kejuaraan dan mengharumkan nama Sumbawa di kancah NTB.',
  ],
};

export const CLUB_RULES = {
  requirements: [
    'Mengisi formulir pendaftaran anggota resmi.',
    'Memiliki komitmen untuk aktif mengikuti jadwal latihan rutin.',
    'Menjunjung tinggi nama baik TRABAS di dalam maupun di luar lapangan.',
  ],
  regulations: [
    'Disiplin Waktu: Hadir tepat waktu pada setiap sesi latihan (Rabu 19:00 WITA & Sabtu 16:00 WITA).',
    'Sportivitas & Sikap: Menghargai sesama anggota, wasit, dan lawan bertanding.',
    'Kekompakan: Mengutamakan kerja sama tim serta menjaga keakraban antar pemain.',
    'Perlengkapan & Fasilitas: Menggunakan sepatu serta pakaian olahraga yang sesuai dan menjaga fasilitas lapangan bersama.',
  ],
};
