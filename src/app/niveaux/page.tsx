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
    if (user) getUserProfile(user.uid).then(setProfile)
  }, [user])

  const isUnlocked = (levelId: number): boolean => {
    if (levelId === 1) return true
    const prev = LEVELS.find((l) => l.id === levelId - 1)
    if (!prev) return false
    const prevBest = profile?.bestScores?.[prev.id] ?? 0
    const prevMax = prev.questionsPerSession * 10
    return (prevBest / prevMax) * 100 >= prev.minScoreToUnlock
  }

  const currentLevelId = (() => {
    for (const level of LEVELS) {
      if (isUnlocked(level.id) && !(profile?.levelsCompleted?.includes(level.id) ?? false)) {
        return level.id
      }
    }
    return LEVELS[LEVELS.length - 1].id
  })()

  const visibleLevels = LEVELS.filter((l) => l.id <= currentLevelId)

  if (loading || !user) return null

  return (
    <main className="min-h-screen bg-parchment px-4 py-8">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="max-w-lg mx-auto mb-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="font-serif text-2xl text-sepia">Bonjour, {user.displayName?.split(' ')[0] ?? 'Disciple'}</h1>
            <p className="text-sepia-subtle text-sm italic">Ton parcours dans la Parole</p>
          </div>
          <Link href="/trophees">
            <Button variant="outline" size="sm" className="border-gold-subtle text-sepia hover:bg-parchment-card">🏆</Button>
          </Link>
        </div>

        {profile && (
          <div className="bg-parchment-card border border-gold-subtle rounded-2xl px-4 py-3 flex items-center justify-between mt-3">
            <div>
              <p className="text-xs text-sepia-subtle">Score total</p>
              <p className="text-gold font-bold text-lg">{profile.totalScore} pts</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-sepia-subtle">Parties</p>
              <p className="text-sepia font-bold">{profile.gamesPlayed}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-sepia-subtle">Complétés</p>
              <p className="text-sepia font-bold">{profile.levelsCompleted?.length ?? 0} / 10</p>
            </div>
          </div>
        )}
      </motion.div>

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

      <div className="max-w-lg mx-auto mt-8 text-center">
        <Button variant="ghost" size="sm" className="text-sepia-subtle hover:text-sepia" onClick={() => { logout(); router.push('/') }}>
          Se déconnecter
        </Button>
      </div>
    </main>
  )
}
