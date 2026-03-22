'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useAuth } from '@/contexts/AuthContext'
import { getUserProfile } from '@/lib/firestore'
import { THEMES } from '@/data/themes'
import Button from '@/components/ui/Button'
import type { UserProfile, Difficulty } from '@/types'

const DIFFICULTIES: { key: Difficulty; label: string }[] = [
  { key: 'facile', label: 'Facile' },
  { key: 'intermediaire', label: 'Intermédiaire' },
  { key: 'difficile', label: 'Difficile' },
]

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

  const isUnlocked = (themeId: string, difficulty: Difficulty): boolean => {
    if (difficulty === 'facile') return true
    const completed = profile?.themesCompleted?.[themeId] ?? []
    if (difficulty === 'intermediaire') return completed.includes('facile')
    if (difficulty === 'difficile') return completed.includes('intermediaire')
    return false
  }

  const isCompleted = (themeId: string, difficulty: Difficulty): boolean => {
    const completed = profile?.themesCompleted?.[themeId] ?? []
    return completed.includes(difficulty)
  }

  const getBestScore = (themeId: string, difficulty: Difficulty): number | undefined => {
    return profile?.bestScores?.[themeId]?.[difficulty]
  }

  if (loading || !user) return null

  return (
    <main className="min-h-screen bg-parchment px-4 py-8">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="max-w-lg mx-auto mb-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="font-serif text-2xl text-sepia">Bonjour, {user.displayName?.split(' ')[0] ?? 'Disciple'}</h1>
            <p className="text-sepia-subtle text-sm italic">Choisis ton thème et ta difficulté</p>
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
              <p className="text-xs text-sepia-subtle">Trophées</p>
              <p className="text-sepia font-bold">{profile.trophiesUnlocked?.length ?? 0}</p>
            </div>
          </div>
        )}
      </motion.div>

      <div className="max-w-lg mx-auto space-y-4">
        {THEMES.map((theme, i) => (
          <motion.div
            key={theme.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="bg-parchment-card border border-gold-subtle rounded-2xl p-5"
          >
            <div className={`absolute top-0 left-0 h-1 w-full rounded-t-2xl bg-gradient-to-r ${theme.color}`} style={{ position: 'initial', height: 4, borderRadius: '12px 12px 0 0', background: `linear-gradient(to right, ${theme.color.includes('A0762A') ? '#A0762A' : '#4A6741'}, #C9A96E)` }} />

            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl">{theme.icon}</span>
              <div>
                <p className="font-serif text-sepia font-semibold text-lg">{theme.name}</p>
                <p className="text-sepia-subtle text-xs mt-0.5">{theme.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {DIFFICULTIES.map(({ key, label }) => {
                const unlocked = isUnlocked(theme.id, key)
                const completed = isCompleted(theme.id, key)
                const best = getBestScore(theme.id, key)

                if (!unlocked) {
                  return (
                    <div key={key} className="rounded-xl border border-gold-subtle bg-parchment-muted opacity-40 px-3 py-2 text-center">
                      <p className="text-sepia-subtle text-xs font-medium">🔒</p>
                      <p className="text-sepia-subtle text-xs">{label}</p>
                    </div>
                  )
                }

                return (
                  <Link key={key} href={`/jeu/${theme.id}/${key}`}>
                    <div className={`rounded-xl border px-3 py-2 text-center transition-all cursor-pointer hover:shadow-sm ${
                      completed
                        ? 'bg-[#E8F0E6] border-[#4A6741]'
                        : 'bg-parchment border-gold-subtle hover:border-[#A0762A] hover:bg-parchment-card'
                    }`}>
                      {completed && <p className="text-[#4A6741] text-xs">✓</p>}
                      <p className="text-sepia text-xs font-medium">{label}</p>
                      {best !== undefined && <p className="text-gold text-xs">{best}pts</p>}
                    </div>
                  </Link>
                )
              })}
            </div>
          </motion.div>
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
