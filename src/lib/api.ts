const BASE_URL = 'http://localhost:5000/api';

// API utility functions
export const api = {
  // Matches
  getAllMatches: () => fetch(`${BASE_URL}/matches`).then(res => res.json()),
  getMatchById: (id: string) => fetch(`${BASE_URL}/matches/${id}`).then(res => res.json()),
  getHeadToHeadMatches: () => fetch(`${BASE_URL}/matches/headtohead`).then(res => res.json()),

  // Players
  getAllPlayers: () => fetch(`${BASE_URL}/players`).then(res => res.json()),
  getPlayerById: (id: string) => fetch(`${BASE_URL}/players/${id}`).then(res => res.json()),
  searchPlayers: (query: string) => fetch(`${BASE_URL}/players/search?q=${query}`).then(res => res.json()),
  getCareerStats: (id: string) => fetch(`${BASE_URL}/players/${id}/career-stats`).then(res => res.json()),

  // Teams
  getAllTeams: () => fetch(`${BASE_URL}/teams`).then(res => res.json()),
  getTeamById: (id: string) => fetch(`${BASE_URL}/teams/${id}`).then(res => res.json()),

  // Tournaments
  getAllTournaments: () => fetch(`${BASE_URL}/tournaments`).then(res => res.json()),
  getTournamentById: (id: string) => fetch(`${BASE_URL}/tournaments/${id}`).then(res => res.json()),

  // Scorecards
  getScorecardByMatch: (matchId: string) => fetch(`${BASE_URL}/scorecards/match/${matchId}`).then(res => res.json()),

  // Videos
  getAllVideos: () => fetch(`${BASE_URL}/videos`).then(res => res.json()),
  searchVideos: (query: string) => fetch(`${BASE_URL}/videos/search?q=${query}`).then(res => res.json()),
  getLatestHighlights: () => fetch(`${BASE_URL}/videos/latest-highlights`).then(res => res.json()),
  getVideoById: (id: string) => fetch(`${BASE_URL}/videos/${id}`).then(res => res.json()),

  // Categories
  getAllCategories: () => fetch(`${BASE_URL}/categories`).then(res => res.json()),
  getCategoryById: (id: string) => fetch(`${BASE_URL}/categories/${id}`).then(res => res.json()),
  getPlayersByCategory: (id: string) => fetch(`${BASE_URL}/categories/${id}/players`).then(res => res.json()),

  // Countries
  getAllCountries: () => fetch(`${BASE_URL}/countries`).then(res => res.json()),
  getCountryById: (id: string) => fetch(`${BASE_URL}/countries/${id}`).then(res => res.json()),
  getPlayersByCountry: (id: string) => fetch(`${BASE_URL}/countries/${id}/players`).then(res => res.json()),
};

// Type definitions
export interface Country {
  _id: string;
  name: string;
  code: string;
  flagUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Team {
  _id: string;
  name: string;
  logoUrl: string;
  country: Country | string;
  createdAt: string;
  updatedAt: string;
}

export interface Tournament {
  _id: string;
  name: string;
  year: number;
  location: string;
  format: string;
  createdAt: string;
  updatedAt: string;
}

export interface Player {
  _id: string;
  name: string;
  role: string;
  teamId: Team | string;
  countryId: Country | string;
  categories: string[];
  imageUrl: string;
  stats: {
    runs: number;
    wickets: number;
    matchesPlayed: number;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Match {
  _id: string;
  tournament: Tournament;
  teamA: Team;
  teamB: Team;
  venue: string;
  date: string;
  result: string;
  manOfTheMatch: Player;
  createdAt: string;
  updatedAt: string;
  status?: string;
}

export interface BattingStats {
  playerId: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
}

export interface BowlingStats {
  playerId: string;
  overs: number;
  maidens: number;
  runs: number;
  wickets: number;
  economy: number;
}

export interface Scorecard {
  _id: string;
  matchId: string;
  teamId: string;
  batting: BattingStats[];
  bowling: BowlingStats[];
  extras: number;
  totalScore: number;
  createdAt: string;
  updatedAt: string;
}

export interface Video {
  _id: string;
  title: string;
  description: string;
  teams: string[];
  matchDate: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration: number;
  tags: string[];
  tournament: string;
  category: string;
  matchId: string;
  teamId: string;
  playerIds: string[];
  createdAt: string;
}

export interface Category {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}