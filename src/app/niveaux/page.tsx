'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useAuth } from '@/contexts/AuthContext'
import { getUserProfile } from '@/lib/firestore'
import { LEVELS } from '@/data/levels'
import LevelCard from '@/components/levels/LevelCard'
import Button from '@/components/ui/Button'
import type { UserProfile } from '@/types'

export default function NiveauxPage() {
  const { user, loading, logout } = useAuth()
  const router = useRouter()
  const [profile, setProfile] = useState<UserProfile | null>(null)

  useEffect(() => {
    if (!loading && !user) router.push('/connexion')
  }, [user, loading, router])

  useEffect(() => {
    if (user) {
      getUserProfile(user.uid).then(setProfile)
    }
  }, [user])

  const isUnlocked = (levelId: number): boolean => {
    if (levelId === 1) return true
    const prev = LEVELS.find((l) => l.id === levelId - 1)
    if (!prev) return false
    const prevBest = profile?.bestScores?.[prev.id] ?? 0
    const prevMax = prev.questionsPerSession * 10
    return (prevBest / prevMax) * 100 >= prev.minScoreToUnlock
  }

  // Niveau courant = premier niveau non-complété et débloqué
  const currentLevelId = (() => {
    for (const level of LEVELS) {
      if (isUnlocked(level.id) && !(profile?.levelsCompleted?.includes(level.id) ?? false)) {
        return level.id
      }
    }
    return LEVELS[LEVELS.length - 1].id // tous complétés → dernier niveau
  })()

  // Niveaux visibles = complétés + courant (on cache les suivants)
  const visibleLevels = LEVELS.filter((l) => l.id <= currentLevelId)

  if (loading || !user) return null

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-900 to-stone-800 px-4 py-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="max-w-lg mx-auto mb-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl font-bold text-amber-100">Bonjour, {user.displayName?.split(' ')[0] ?? 'Disciple'} 👋</h1>
            <p className="text-stone-400 text-sm">Ton parcours dans la Parole</p>
          </div>
          <div className="flex gap-2">
            <Link href="/trophees">
              <Button variant="ghost" size="sm">🏆</Button>
            </Link>
          </div>
        </div>

        {profile && (
          <div className="bg-stone-800/60 border border-amber-700/20 rounded-2xl px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-xs text-stone-400">Score total</p>
              <p className="text-amber-300 font-bold text-lg">{profile.totalScore} pts</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-stone-400">Parties</p>
              <p className="text-amber-100 font-bold">{profile.gamesPlayed}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-stone-400">Complétés</p>
              <p className="text-amber-100 font-bold">{profile.levelsCompleted?.length ?? 0} / 10</p>
            </div>
          </div>
        )}
      </motion.div>

      {/* Liste des niveaux — découverte progressive */}
      <div className="max-w-lg mx-auto grid grid-cols-1 gap-3">
        {visibleLevels.map((level, i) => (
          <LevelCard
            key={level.id}
            level={level}
            isUnlocked={isUnlocked(level.id)}
            isCompleted={profile?.levelsCompleted?.includes(level.id) ?? false}
            isCurrent={level.id === currentLevelId}
            bestScore={profile?.bestScores?.[level.id]}
            index={i}
          />
        ))}
      </div>

      {/* Bouton déconnexion */}
      <div className="max-w-lg mx-auto mt-8 text-center">
        <Button variant="ghost" size="sm" onClick={() => { logout(); router.push('/') }}>
          Se déconnecter
        </Button>
      </div>
    </main>
  )
}
