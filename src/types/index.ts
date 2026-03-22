// ─── Utilisateur ──────────────────────────────────────────────────────────────

export interface UserProfile {
  uid: string
  displayName: string | null
  email: string | null
  photoURL: string | null
  createdAt: Date
  totalScore: number
  trophiesUnlocked: string[]
  gamesPlayed: number
  // Nouveau schéma thématique
  themesCompleted: Record<string, Difficulty[]>       // { 'evangile': ['facile', 'intermediaire'] }
  bestScores: Record<string, Record<string, number>>  // { 'evangile': { 'facile': 80 } }
  // Anciens champs conservés pour compatibilité (non supprimés)
  levelsCompleted?: number[]
}

// ─── Questions ────────────────────────────────────────────────────────────────

export interface Question {
  id: string
  themeId: string
  difficulty: Difficulty
  question: string
  options: [string, string, string, string]
  correctIndex: 0 | 1 | 2 | 3
  reference: string
}

// ─── Thèmes ───────────────────────────────────────────────────────────────────

export type Difficulty = 'facile' | 'intermediaire' | 'difficile'

export interface Theme {
  id: string
  name: string
  description: string
  icon: string
  color: string
  lives: Record<Difficulty, number>
}

// ─── Trophées ─────────────────────────────────────────────────────────────────

export type TrophyConditionType =
  | 'complete_theme'
  | 'complete_difficulty'
  | 'perfect_score'
  | 'games_played'
  | 'no_lives_lost'
  | 'streak'
  | 'complete_all'

export interface Trophy {
  id: string
  name: string
  description: string
  icon: string
  conditionType: TrophyConditionType
  conditionValue: number | string
}

// ─── Jeu ──────────────────────────────────────────────────────────────────────

export interface GameSession {
  themeId: string
  difficulty: Difficulty
  questions: Question[]
  currentIndex: number
  score: number
  lives: number
  streak: number
  maxStreak: number
  answers: (number | null)[]
  startedAt: Date
  finishedAt?: Date
  status: 'playing' | 'won' | 'lost' | 'completed'
}

export interface GameResult {
  themeId: string
  difficulty: Difficulty
  score: number
  maxScore: number
  correctAnswers: number
  totalQuestions: number
  livesRemaining: number
  durationSeconds: number
  newTrophies: string[]
}

// ─── Formulaires Auth ─────────────────────────────────────────────────────────

export interface LoginFormData {
  email: string
  password: string
}

export interface RegisterFormData {
  displayName: string
  email: string
  password: string
  confirmPassword: string
}
