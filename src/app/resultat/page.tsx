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
import { getLevelById } from '@/data/levels'
import Button from '@/components/ui/Button'
import type { UserProfile } from '@/types'

function ResultatContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { user } = useAuth()
  const { session, resetGame } = useGameStore()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [saved, setSaved] = useState(false)

  const levelId = parseInt(searchParams.get('level') ?? '1', 10)

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
        <p className="text-amber-100 mb-4">Aucune partie en cours.</p>
        <Link href="/niveaux"><Button>Choisir un niveau</Button></Link>
      </div>
    )
  }

  const pct = Math.round((result.correctAnswers / result.totalQuestions) * 100)
  const won = session.status === 'completed'
  const level = getLevelById(levelId)

  void level
  void won

  const emoji = pct === 100 ? '🌟' : pct >= 70 ? '✝️' : pct >= 50 ? '🕊️' : '🌱'
  const message = pct === 100
    ? 'Score parfait ! Que la Parole soit célébrée.'
    : pct >= 70
    ? 'Bien avancé ! Continue de creuser la Parole.'
    : pct >= 50
    ? 'Un beau début de parcours.'
    : 'Ne te décourage pas — chaque relecture est une grâce.'

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-sm w-full">
      <div className="text-6xl mb-4">{emoji}</div>
      <h1 className="text-2xl font-bold text-amber-100 mb-1">
        {session.status === 'completed' ? 'Niveau terminé !' : 'Partie terminée'}
      </h1>
      <p className="text-stone-400 text-sm mb-6 italic">{message}</p>

      <div className="bg-stone-800/70 border border-amber-700/20 rounded-2xl p-5 mb-5 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-stone-400 text-sm">Score</span>
          <span className="text-amber-300 font-bold text-xl">{result.score} / {result.maxScore} pts</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-stone-400 text-sm">Bonnes réponses</span>
          <span className="text-amber-100 font-medium">{result.correctAnswers} / {result.totalQuestions}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-stone-400 text-sm">Vies restantes</span>
          <span className="text-amber-100">{result.livesRemaining} × 🕊️</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-stone-400 text-sm">Durée</span>
          <span className="text-amber-100">{result.durationSeconds}s</span>
        </div>
        {session.maxStreak >= 3 && (
          <div className="flex justify-between items-center">
            <span className="text-stone-400 text-sm">Meilleur streak</span>
            <span className="text-orange-400 font-bold">{session.maxStreak} 🔥</span>
          </div>
        )}
        <div className="h-2 bg-stone-700 rounded-full overflow-hidden mt-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"
          />
        </div>
        <p className="text-xs text-stone-500">{pct}% de réussite</p>
      </div>

      {result.newTrophies.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-5 space-y-3"
        >
          <p className="text-amber-300 font-bold text-lg text-center">
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
                className="bg-gradient-to-br from-amber-900/40 to-stone-800/60 border border-amber-500/60 rounded-2xl p-5 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + idx * 0.15, type: 'spring', stiffness: 300 }}
                  className="text-5xl mb-3"
                >
                  {t.icon}
                </motion.div>
                <p className="text-amber-200 font-bold text-lg mb-3">{t.name}</p>
                <p className="text-stone-300 text-sm leading-relaxed">{t.description}</p>
              </motion.div>
            ) : null
          })}
        </motion.div>
      )}

      <div className="space-y-3">
        <Button size="lg" className="w-full" onClick={() => { resetGame(); router.push(`/jeu/${levelId}`) }}>
          Rejouer ce niveau
        </Button>
        <Link href="/niveaux" onClick={resetGame}>
          <Button variant="secondary" size="md" className="w-full">Choisir un autre niveau</Button>
        </Link>
      </div>
    </motion.div>
  )
}

export default function ResultatPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-900 to-stone-800 flex flex-col items-center justify-center px-4 py-10 text-center">
      <Suspense fallback={
        <div className="flex items-center gap-2 text-amber-400">
          <div className="w-5 h-5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
          Chargement...
        </div>
      }>
        <ResultatContent />
      </Suspense>
    </main>
  )
}
