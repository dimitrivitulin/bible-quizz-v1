'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Cross, HeartHandshake, Flame, BookOpen, Sprout, type LucideIcon } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { getUserProfile } from '@/lib/firestore'
import { THEMES } from '@/data/themes'
import Button from '@/components/ui/Button'
import type { UserProfile, Difficulty } from '@/types'

const THEME_ICONS: Record<string, LucideIcon> = {
  'evangile': Cross,
  'salut': HeartHandshake,
  'saint-esprit': Flame,
  'priere': BookOpen,
  'vie-chretienne': Sprout,
}

const THEME_ICON_COLORS: Record<string, string> = {
  'evangile': '#A0762A',
  'salut': '#4A6741',
  'saint-esprit': '#C0522A',
  'priere': '#5A4A8A',
  'vie-chretienne': '#2A7A6A',
}

const DIFFICULTIES: { key: Difficulty; label: string; lives: number }[] = [
  { key: 'facile', label: 'Facile', lives: 5 },
  { key: 'intermediaire', label: 'Intermédiaire', lives: 3 },
  { key: 'difficile', label: 'Difficile', lives: 1 },
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
    return completed.includes('intermediaire')
  }

  const isCompleted = (themeId: string, difficulty: Difficulty): boolean =>
    (profile?.themesCompleted?.[themeId] ?? []).includes(difficulty)

  const getBestScore = (themeId: string, difficulty: Difficulty): number | undefined =>
    profile?.bestScores?.[themeId]?.[difficulty]

  if (loading || !user) return null

  const firstName = user.displayName?.split(' ')[0] ?? 'Disciple'
  const trophyCount = profile?.trophiesUnlocked?.length ?? 0

  return (
    <main className="min-h-screen bg-parchment">

      {/* Header sticky */}
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-10 bg-parchment-card border-b border-[#C9A96E] shadow-sm px-4 py-3"
      >
        <div className="max-w-lg mx-auto">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="font-serif text-[18px] text-sepia font-semibold leading-tight">Bonjour, {firstName}</p>
              <p className="text-[12px] text-sepia-subtle italic">Choisis ta thématique</p>
            </div>
            <Link href="/trophees">
              <Button variant="ghost" size="sm" className="relative text-sepia hover:bg-parchment">
                🏆
                {trophyCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#A0762A] text-[#F5EFE0] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {trophyCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {profile && (
            <div className="bg-parchment rounded-xl px-4 py-2 flex items-center justify-between">
              <div className="text-center">
                <p className="text-[10px] text-sepia-subtle">Score total</p>
                <p className="text-[16px] text-gold font-bold leading-tight">{profile.totalScore} pts</p>
              </div>
              <div className="w-px h-6 bg-[#C9A96E]" />
              <div className="text-center">
                <p className="text-[10px] text-sepia-subtle">Parties</p>
                <p className="text-[16px] text-sepia font-bold leading-tight">{profile.gamesPlayed}</p>
              </div>
              <div className="w-px h-6 bg-[#C9A96E]" />
              <div className="text-center">
                <p className="text-[10px] text-sepia-subtle">Trophées</p>
                <p className="text-[16px] text-sepia font-bold leading-tight">{trophyCount}</p>
              </div>
            </div>
          )}
        </div>
      </motion.header>

      {/* Titre section */}
      <div className="max-w-lg mx-auto px-4 pt-6 pb-2 text-center">
        <p className="text-[#C9A96E] text-sm tracking-widest mb-1">─── ✦ ───</p>
        <h1 className="font-serif text-[24px] text-sepia font-semibold">Thématiques</h1>
        <p className="text-[11px] text-sepia-subtle italic mt-1">30 questions · 3 niveaux · Référence LS 1910</p>
      </div>

      {/* Cartes thèmes */}
      <div className="max-w-lg mx-auto px-4 pb-8 space-y-4 mt-4">
        {THEMES.map((theme, i) => (
          <motion.div
            key={theme.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.01 }}
            className="bg-parchment-card border border-[#C9A96E] rounded-2xl overflow-hidden shadow-sm"
          >
            {/* Bande couleur top */}
            <div className={`h-1 w-full bg-gradient-to-r ${theme.color}`} />

            <div className="p-5">
              {/* En-tête carte */}
              <div className="flex items-start gap-3 mb-4">
                {(() => {
                  const Icon = THEME_ICONS[theme.id]
                  return Icon ? (
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${THEME_ICON_COLORS[theme.id]}18` }}>
                      <Icon size={22} style={{ color: THEME_ICON_COLORS[theme.id] }} strokeWidth={1.8} />
                    </div>
                  ) : null
                })()}
                <div className="min-w-0">
                  <p className="font-serif text-[18px] text-sepia font-semibold leading-tight">{theme.name}</p>
                  <p className="text-[11px] text-sepia-subtle mt-0.5 line-clamp-2">{theme.description}</p>
                </div>
              </div>

              {/* Boutons difficulté */}
              <div className="grid grid-cols-3 gap-2">
                {DIFFICULTIES.map(({ key, label, lives }) => {
                  const unlocked = isUnlocked(theme.id, key)
                  const completed = isCompleted(theme.id, key)
                  const best = getBestScore(theme.id, key)

                  if (!unlocked) {
                    return (
                      <div key={key} className="h-16 rounded-xl border border-[#DDD0B0] bg-[#EDE4CC]/50 opacity-40 px-2 flex flex-col items-center justify-center gap-0.5">
                        <span className="text-[12px]">🔒</span>
                        <span className="text-[11px] text-sepia-subtle font-medium">{label}</span>
                      </div>
                    )
                  }

                  return (
                    <Link key={key} href={`/jeu/${theme.id}/${key}`} className="block">
                      <motion.div
                        whileHover={{ borderColor: '#A0762A', scale: 1.02 }}
                        transition={{ duration: 0.15 }}
                        className={`h-16 rounded-xl border px-2 flex flex-col items-center justify-center gap-0.5 cursor-pointer transition-shadow ${
                          completed
                            ? 'bg-[#E8F0E6] border-[#4A6741]'
                            : 'bg-parchment border-[#C9A96E] hover:shadow-sm'
                        }`}
                      >
                        {completed
                          ? <span className="text-[11px] text-[#4A6741] font-bold leading-none">✓</span>
                          : <span className="text-[11px] text-sepia-subtle leading-none">🕊️ ×{lives}</span>
                        }
                        <span className="text-[12px] text-sepia font-medium leading-none">{label}</span>
                        {completed
                          ? <span className="text-[10px] text-sepia-subtle leading-none">🕊️ ×{lives}</span>
                          : null
                        }
                        {best !== undefined && (
                          <span className="text-[10px] text-gold font-medium leading-none">{best} pts</span>
                        )}
                      </motion.div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Déconnexion */}
      <div className="max-w-lg mx-auto px-4 pb-10 text-center">
        <Button
          variant="ghost"
          size="sm"
          className="text-sepia-subtle hover:text-sepia text-[12px]"
          onClick={() => { logout(); router.push('/') }}
        >
          Se déconnecter
        </Button>
      </div>

    </main>
  )
}
