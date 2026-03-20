// ─── Utilisateur ──────────────────────────────────────────────────────────────

export interface UserProfile {
  uid: string
  displayName: string | null
  email: string | null
  photoURL: string | null
  createdAt: Date
  totalScore: number
  levelsCompleted: number[]
  trophiesUnlocked: string[]
  gamesPlayed: number
  bestScores: Record<number, number> // levelId → bestScore
}

// ─── Questions ────────────────────────────────────────────────────────────────

export interface Question {
  id: string
  level: number
  question: string
  options: [string, string, string, string] // toujours 4 choix
  correctIndex: 0 | 1 | 2 | 3
  reference: string // ex: "Genèse 6:14"
}

// ─── Niveaux ──────────────────────────────────────────────────────────────────

export type Difficulty = 'facile' | 'intermédiaire' | 'hardcore'

export interface Level {
  id: number
  name: string
  description: string
  difficulty: Difficulty
  lives: number
  questionsPerSession: number
  minScoreToUnlock: number // score requis au niveau précédent
  color: string // classe Tailwind
  icon: string
}

// ─── Trophées ─────────────────────────────────────────────────────────────────

export type TrophyConditionType =
  | 'complete_level'
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
  conditionValue: number // niveau, nombre, etc.
}

// ─── Jeu ──────────────────────────────────────────────────────────────────────

export interface GameSession {
  levelId: number
  questions: Question[]
  currentIndex: number
  score: number
  lives: number
  streak: number       // bonnes réponses consécutives
  maxStreak: number    // meilleure série de la partie
  answers: (number | null)[]
  startedAt: Date
  finishedAt?: Date
  status: 'playing' | 'won' | 'lost' | 'completed'
}

export interface GameResult {
  levelId: number
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
