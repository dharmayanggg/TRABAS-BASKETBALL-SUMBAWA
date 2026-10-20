export type PlayerPosition = 'Point Guard (PG)' | 'Shooting Guard (SG)' | 'Small Forward (SF)' | 'Power Forward (PF)' | 'Center (C)' | 'All-Around / Flex';

export type TeamDivision = 'KU-14 Junior' | 'KU-16 Junior' | 'KU-18 Youth' | 'Senior Putra' | 'Senior Putri' | 'Veteran / Executive';

export type MatchType = 'Event & Turnamen' | 'Sparing Antar-Klub' | 'Fun Match';

export interface ScheduleItem {
  id: string;
  day: 'Senin' | 'Selasa' | 'Rabu' | 'Kamis' | 'Jumat' | 'Sabtu' | 'Minggu';
  startTime: string;
  endTime: string;
  division: TeamDivision;
  court: string;
  location: string;
  address: string;
  sessionFocus: string;
  drills: string[];
  headCoach: string;
  assistantCoach?: string;
  dresscode: string;
  capacityLimit: number;
}

export interface MatchScoreQuarter {
  q1: number;
  q2: number;
  q3: number;
  q4: number;
  ot?: number;
}

export interface PlayerStats {
  name: string;
  number: string;
  points: number;
  rebounds: number;
  assists: number;
  steals?: number;
  blocks?: number;
}

export interface MatchResult {
  id: string;
  matchType: MatchType;
  tournamentName?: string;
  date: string;
  venue: string;
  opponentName: string;
  opponentLogo?: string;
  scoreTrabas: number;
  scoreOpponent: number;
  result: 'WIN' | 'LOSS' | 'DRAW';
  quartersTrabas: MatchScoreQuarter;
  quartersOpponent: MatchScoreQuarter;
  mvp: PlayerStats;
  topPerformers: PlayerStats[];
  recapTitle: string;
  recapSummary: string;
  highlightNotes: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Turnamen & Event' | 'Sparing Match' | 'Latihan Rutin' | 'Selebrasi & Awarding';
  date: string;
  location: string;
  imageUrl: string;
  caption: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Pengumuman Resmi' | 'Turnamen' | 'Komunitas' | 'Prestasi';
  publishedAt: string;
  author: string;
  readTime: string;
  summary: string;
  content: string[];
  importantPoints: string[];
  actionLink?: {
    text: string;
    target: string;
  };
}

export interface RegistrationFormData {
  fullName: string;
  nickname: string;
  phone: string;
  age: string;
  birthDate: string;
  division: TeamDivision;
  primaryPosition: PlayerPosition;
  secondaryPosition: string;
  heightCm: string;
  weightKg: string;
  experienceLevel: string;
  previousClub: string;
  jerseySize: 'S' | 'M' | 'L' | 'XL' | 'XXL' | '3XL';
  requestedJerseyNumber: string;
  requestedJerseyName: string;
  emergencyContact: string;
  medicalNotes: string;
  motivation: string;
}
