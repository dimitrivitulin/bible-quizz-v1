'use client'

import { useParams } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import GameScreen from '@/components/game/GameScreen'

export default function JeuPage() {
  const { niveau } = useParams<{ niveau: string }>()
  const { user, loading } = useAuth()
  const router = useRouter()
  const levelId = parseInt(niveau, 10)

  useEffect(() => {
    if (!loading && !user) router.push('/connexion')
  }, [user, loading, router])

  if (loading || !user || isNaN(levelId)) return null

  return <GameScreen levelId={levelId} />
}
