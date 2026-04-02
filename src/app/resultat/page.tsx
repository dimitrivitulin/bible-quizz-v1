'use client'

import { Suspense } from 'react'
import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useGameStore } from '@/store/gameStore'
import { useAuth } from '@/contexts/AuthContext'
import { saveGameResult, getUserProfile } from '@/lib/firestore'
import { useGameResult } from '@/hooks/useGameResult'
import { TROPHIES } from '@/data/trophies'
import { getThemeById } from '@/data/themes'
import Button from '@/components/ui/Button'
import { ScoreIcon100, ScoreIcon70, ScoreIcon50, ScoreIcon0 } from '@/components/ui/Icons'
import type { UserProfile, Difficulty } from '@/types'

function ResultatContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { user } = useAuth()
  const { session, resetGame } = useGameStore()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [saved, setSaved] = useState(false)

  const themeId = searchParams.get('theme') ?? 'evangile'
  const difficulty = (searchParams.get('difficulte') ?? 'facile') as Difficulty

  useEffect(() => {
    if (user) getUserProfile(user.uid).then(setProfile)
  }, [user])

  const result = useGameResult(profile?.trophiesUnlocked ?? [], profile?.gamesPlayed ?? 0)

  useEffect(() => {
    if (!result || saved || !user) return
    saveGameResult(user.uid, result).then(() => setSaved(true))
  }, [result, user, saved])

  if (!session || !result) {
    return (
      <div className="text-center">
        <p className="text-sepia mb-4">Aucune partie en cours.</p>
        <Link href="/niveaux"><Button>Choisir un thème</Button></Link>
      </div>
    )
  }

  const theme = getThemeById(themeId)
  const pct = Math.round((result.correctAnswers / result.totalQuestions) * 100)

  const difficultyLabel: Record<Difficulty, string> = {
    facile: 'Facile',
    intermediaire: 'Intermédiaire',
    difficile: 'Difficile',
  }

  const ScoreIcon = pct === 100 ? ScoreIcon100 : pct >= 70 ? ScoreIcon70 : pct >= 50 ? ScoreIcon50 : ScoreIcon0
  const message = pct === 100
    ? 'Score parfait ! Que la Parole soit célébrée.'
    : pct >= 70
    ? 'Bien avancé ! Continue de creuser la Parole.'
    : pct >= 50
    ? 'Un beau début de parcours.'
    : 'Ne te décourage pas — chaque relecture est une grâce.'

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-sm w-full">
      <div className="mb-4 flex justify-center">
        <ScoreIcon size={80} />
      </div>
      <h1 className="font-serif text-2xl text-sepia mb-1">
        {session.status === 'completed' ? 'Thème accompli !' : 'Partie terminée'}
      </h1>
      {theme && (
        <p className="text-gold text-sm font-medium mb-1">{theme.name} · {difficultyLabel[difficulty]}</p>
      )}
      <p className="text-sepia-muted text-sm mb-6 italic">{message}</p>

      <div className="bg-parchment-card border border-gold-subtle rounded-2xl p-5 mb-5 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sepia-subtle text-sm">Score</span>
          <span className="text-gold font-bold text-xl">{result.score} / {result.maxScore} pts</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sepia-subtle text-sm">Bonnes réponses</span>
          <span className="text-sepia font-medium">{result.correctAnswers} / {result.totalQuestions}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sepia-subtle text-sm">Vies restantes</span>
          <span className="text-sepia">{result.livesRemaining} × 🕊️</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sepia-subtle text-sm">Durée</span>
          <span className="text-sepia">{result.durationSeconds}s</span>
        </div>
        {session.maxStreak >= 3 && (
          <div className="flex justify-between items-center">
            <span className="text-sepia-subtle text-sm">Meilleur streak</span>
            <span className="text-gold font-bold">{session.maxStreak} 🔥</span>
          </div>
        )}
        <div className="h-2 bg-parchment-muted rounded-full overflow-hidden mt-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-full bg-gradient-to-r from-[#A0762A] to-[#C9A96E] rounded-full"
          />
        </div>
        <p className="text-xs text-sepia-subtle">{pct}% de réussite</p>
      </div>

      {result.newTrophies.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-5 space-y-3"
        >
          <p className="text-gold font-bold text-lg text-center font-serif">
            🎉 {result.newTrophies.length > 1 ? 'Nouveaux trophées débloqués !' : 'Nouveau trophée débloqué !'}
          </p>
          {result.newTrophies.map((id, idx) => {
            const t = TROPHIES.find((t) => t.id === id)
            return t ? (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + idx * 0.15, type: 'spring', stiffness: 200 }}
                className="bg-parchment-card border-2 border-[#A0762A] rounded-2xl p-5 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + idx * 0.15, type: 'spring', stiffness: 300 }}
                  className="text-5xl mb-3"
                >
                  {t.icon}
                </motion.div>
                <p className="text-sepia font-bold font-serif text-lg mb-2">{t.name}</p>
                <p className="text-sepia-muted text-sm leading-relaxed italic">{t.description}</p>
              </motion.div>
            ) : null
          })}
        </motion.div>
      )}

      <div className="space-y-3">
        <Button size="lg" className="w-full" onClick={() => { resetGame(); router.push(`/jeu/${themeId}/${difficulty}`) }}>
          Rejouer
        </Button>
        <Link href="/niveaux" onClick={resetGame}>
          <Button variant="secondary" size="default" className="w-full">Choisir un autre thème</Button>
        </Link>
      </div>
    </motion.div>
  )
}

export default function ResultatPage() {
  return (
    <main className="min-h-screen bg-parchment flex flex-col items-center justify-center px-4 py-10 text-center">
      <Suspense fallback={
        <div className="flex items-center gap-2 text-gold">
          <div className="w-5 h-5 border-2 border-[#A0762A] border-t-transparent rounded-full animate-spin" />
          <span className="text-sepia-muted text-sm">Chargement...</span>
        </div>
      }>
        <ResultatContent />
      </Suspense>
    </main>
  )
}
