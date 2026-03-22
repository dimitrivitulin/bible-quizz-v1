'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { getThemeById } from '@/data/themes'
import GameScreen from '@/components/game/GameScreen'
import type { Difficulty } from '@/types'

const VALID_DIFFICULTIES: Difficulty[] = ['facile', 'intermediaire', 'difficile']

export default function JeuPage() {
  const { themeId, difficulte } = useParams<{ themeId: string; difficulte: string }>()
  const { user, loading } = useAuth()
  const router = useRouter()

  const difficulty = difficulte as Difficulty
  const theme = getThemeById(themeId)
  const isValid = !!theme && VALID_DIFFICULTIES.includes(difficulty)

  useEffect(() => {
    if (!loading && !user) router.push('/connexion')
  }, [user, loading, router])

  if (loading || !user || !isValid) return null

  return <GameScreen themeId={themeId} difficulty={difficulty} />
}
