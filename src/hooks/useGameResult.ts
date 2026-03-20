import { useMemo } from 'react'
import { useGameStore } from '@/store/gameStore'
import { useAuth } from '@/contexts/AuthContext'
import { getLevelById } from '@/data/levels'
import { checkNewTrophies } from '@/data/trophies'
import type { GameResult } from '@/types'

export function useGameResult(trophiesAlreadyUnlocked: string[] = [], gamesPlayed = 0): GameResult | null {
  const session = useGameStore((s) => s.session)
  const { user } = useAuth()

  return useMemo(() => {
    if (!session || session.status === 'playing') return null

    const level = getLevelById(session.levelId)
    if (!level) return null

    const correctAnswers = session.questions.filter(
      (q, i) => session.answers[i] === q.correctIndex
    ).length

    const totalQuestions = session.questions.length
    const maxScore = totalQuestions * 10
    const durationSeconds = session.finishedAt
      ? Math.round((session.finishedAt.getTime() - session.startedAt.getTime()) / 1000)
      : 0

    const newTrophies = user
      ? checkNewTrophies(
          trophiesAlreadyUnlocked,
          session.levelId,
          session.score,
          gamesPlayed + 1,
          session.lives,
          level.lives
        )
      : []

    return {
      levelId: session.levelId,
      score: session.score,
      maxScore,
      correctAnswers,
      totalQuestions,
      livesRemaining: session.lives,
      durationSeconds,
      newTrophies,
    }
  }, [session, user, trophiesAlreadyUnlocked, gamesPlayed])
}
