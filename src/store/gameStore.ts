import { create } from 'zustand'
import type { GameSession, Question } from '@/types'
import { getRandomQuestions } from '@/data/questions'
import { getLevelById } from '@/data/levels'

const STREAK_BONUS_THRESHOLD = 3 // streak à partir duquel le x2 s'active
const BASE_POINTS = 10

interface GameStore {
  session: GameSession | null
  lastPointsGained: number // pour l'animation
  startGame: (levelId: number) => void
  answerQuestion: (chosenIndex: number) => void
  nextQuestion: () => void
  resetGame: () => void
}

export const useGameStore = create<GameStore>((set, get) => ({
  session: null,
  lastPointsGained: 0,

  startGame: (levelId: number) => {
    const level = getLevelById(levelId)
    if (!level) return
    const questions: Question[] = getRandomQuestions(levelId, level.questionsPerSession)
    set({
      session: {
        levelId,
        questions,
        currentIndex: 0,
        score: 0,
        lives: level.lives,
        streak: 0,
        maxStreak: 0,
        answers: new Array(questions.length).fill(null),
        startedAt: new Date(),
        status: 'playing',
      },
      lastPointsGained: 0,
    })
  },

  answerQuestion: (chosenIndex: number) => {
    const { session } = get()
    if (!session || session.status !== 'playing') return

    const current = session.questions[session.currentIndex]
    const isCorrect = chosenIndex === current.correctIndex
    const newAnswers = [...session.answers]
    newAnswers[session.currentIndex] = chosenIndex

    // Calcul du streak
    const newStreak = isCorrect ? session.streak + 1 : 0
    const newMaxStreak = Math.max(session.maxStreak, newStreak)

    // Points avec bonus x2 si streak >= seuil
    const multiplier = isCorrect && session.streak >= STREAK_BONUS_THRESHOLD ? 2 : 1
    const pointsGained = isCorrect ? BASE_POINTS * multiplier : 0
    const newScore = session.score + pointsGained
    const newLives = isCorrect ? session.lives : session.lives - 1

    const isLastQuestion = session.currentIndex === session.questions.length - 1
    const isGameOver = newLives <= 0

    let status: GameSession['status'] = 'playing'
    if (isGameOver) status = 'lost'
    else if (isLastQuestion) status = 'completed'

    set({
      session: {
        ...session,
        score: newScore,
        lives: newLives,
        streak: newStreak,
        maxStreak: newMaxStreak,
        answers: newAnswers,
        status,
        finishedAt: status !== 'playing' ? new Date() : undefined,
      },
      lastPointsGained: pointsGained,
    })
  },

  nextQuestion: () => {
    const { session } = get()
    if (!session || session.status !== 'playing') return
    set({
      session: {
        ...session,
        currentIndex: Math.min(session.currentIndex + 1, session.questions.length - 1),
      },
    })
  },

  resetGame: () => set({ session: null, lastPointsGained: 0 }),
}))
