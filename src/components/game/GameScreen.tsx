'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useGameStore } from '@/store/gameStore'
import { getLevelById } from '@/data/levels'
import Timer from './Timer'
import LivesBar from './LivesBar'
import QuestionCard from './QuestionCard'
import StreakIndicator from './StreakIndicator'

interface GameScreenProps {
  levelId: number
}

export default function GameScreen({ levelId }: GameScreenProps) {
  const router = useRouter()
  const { session, lastPointsGained, startGame, answerQuestion, nextQuestion } = useGameStore()
  const level = getLevelById(levelId)

  // État local pour l'affichage de la réponse — reset à chaque question
  const [selected, setSelected] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    startGame(levelId)
  }, [levelId]) // eslint-disable-line react-hooks/exhaustive-deps

  // Reset visuel à chaque changement de question
  useEffect(() => {
    setSelected(null)
    setRevealed(false)
  }, [session?.currentIndex])

  useEffect(() => {
    if (session?.status === 'completed' || session?.status === 'lost') {
      const timeout = setTimeout(() => router.push(`/resultat?level=${levelId}`), 1500)
      return () => clearTimeout(timeout)
    }
  }, [session?.status, levelId, router])

  if (!session || !level) return null

  const currentQ = session.questions[session.currentIndex]

  const handleSelect = (chosenIndex: number) => {
    if (revealed || session.status !== 'playing') return
    setSelected(chosenIndex)
    setRevealed(true)
    // Enregistre la réponse dans le store
    answerQuestion(chosenIndex)
    // Passe à la question suivante après 1.5s
    setTimeout(() => nextQuestion(), 1500)
  }

  const handleTimerExpire = () => {
    if (revealed || session.status !== 'playing') return
    setSelected(null)
    setRevealed(true)
    answerQuestion(-1)
    setTimeout(() => nextQuestion(), 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 flex flex-col items-center justify-start px-4 py-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg mb-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-amber-400 text-xs font-medium uppercase tracking-wider">{level.name}</p>
            <p className="text-amber-100 text-2xl font-bold">{session.score} pts</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <LivesBar lives={session.lives} maxLives={level.lives} />
            <StreakIndicator streak={session.streak} lastPointsGained={lastPointsGained} />
          </div>
        </div>
        <Timer
          key={session.currentIndex}
          duration={15}
          onExpire={handleTimerExpire}
          running={session.status === 'playing' && !revealed}
        />
      </motion.div>

      {/* Question */}
      <div className="w-full max-w-lg">
        <QuestionCard
          key={session.currentIndex}
          question={currentQ}
          questionNumber={session.currentIndex + 1}
          totalQuestions={session.questions.length}
          selected={selected}
          revealed={revealed}
          onSelect={handleSelect}
        />
      </div>

      {/* Overlay game over */}
      {session.status === 'lost' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        >
          <div className="text-center">
            <p className="text-5xl mb-3">🕊️</p>
            <p className="text-amber-100 text-2xl font-bold">Le chemin continue...</p>
            <p className="text-amber-400 text-sm mt-1">Tu peux réessayer à tout moment</p>
          </div>
        </motion.div>
      )}
    </div>
  )
}
