'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useGameStore } from '@/store/gameStore'
import { getThemeById } from '@/data/themes'
import Timer from './Timer'
import LivesBar from './LivesBar'
import QuestionCard from './QuestionCard'
import StreakIndicator from './StreakIndicator'
import type { Difficulty } from '@/types'

interface GameScreenProps {
  themeId: string
  difficulty: Difficulty
}

const CORRECT_MESSAGES = [
  'La Parole est en toi.',
  'Bien vu.',
  'Tu connais les Écritures.',
  'Solide.',
  'Fidèle à la Parole.',
]

const WRONG_MESSAGES = [
  'Même les apôtres ont raté.',
  'Pierre aussi a renié trois fois.',
  'Même Moïse a douté.',
  'Jonas a fui. Tu peux rater.',
]

export default function GameScreen({ themeId, difficulty }: GameScreenProps) {
  const router = useRouter()
  const { session, lastPointsGained, startGame, answerQuestion, nextQuestion } = useGameStore()
  const theme = getThemeById(themeId)

  const [selected, setSelected] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [shake, setShake] = useState(false)
  const [encouragement, setEncouragement] = useState<string | null>(null)
  const [prevLives, setPrevLives] = useState<number | null>(null)
  const [showWin, setShowWin] = useState(false)

  useEffect(() => { startGame(themeId, difficulty) }, [themeId, difficulty]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setSelected(null)
    setRevealed(false)
    setIsCorrect(null)
    setShake(false)
  }, [session?.currentIndex])

  useEffect(() => {
    if (session === null) return
    if (prevLives !== null && session.lives < prevLives) {
      setShake(true)
      setTimeout(() => setShake(false), 600)
    }
    setPrevLives(session.lives)
  }, [session?.lives]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (session?.status === 'completed') {
      setShowWin(true)
      const timeout = setTimeout(() => router.push(`/resultat?theme=${themeId}&difficulte=${difficulty}`), 2500)
      return () => clearTimeout(timeout)
    }
    if (session?.status === 'lost') {
      const timeout = setTimeout(() => router.push(`/resultat?theme=${themeId}&difficulte=${difficulty}`), 2500)
      return () => clearTimeout(timeout)
    }
  }, [session?.status, themeId, difficulty, router])

  if (!session || !theme) return null

  const currentQ = session.questions[session.currentIndex]
  const maxLives = theme.lives[difficulty]

  const difficultyLabel: Record<Difficulty, string> = {
    facile: 'Facile',
    intermediaire: 'Intermédiaire',
    difficile: 'Difficile',
  }

  const showEncouragement = (correct: boolean) => {
    const pool = correct ? CORRECT_MESSAGES : WRONG_MESSAGES
    const msg = pool[Math.floor(Math.random() * pool.length)]
    setEncouragement(msg)
    setTimeout(() => setEncouragement(null), 2000)
  }

  const handleSelect = (chosenIndex: number) => {
    if (revealed || session.status !== 'playing') return
    const correct = chosenIndex === currentQ.correctIndex
    setSelected(chosenIndex)
    setRevealed(true)
    setIsCorrect(correct)
    answerQuestion(chosenIndex)
    showEncouragement(correct)
    setTimeout(() => nextQuestion(), 1500)
  }

  const handleTimerExpire = () => {
    if (revealed || session.status !== 'playing') return
    setSelected(null)
    setRevealed(true)
    setIsCorrect(false)
    answerQuestion(-1)
    showEncouragement(false)
    setTimeout(() => nextQuestion(), 1500)
  }

  return (
    <motion.div
      animate={shake ? { x: [-8, 8, -6, 6, -4, 4, 0] } : { x: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-parchment flex flex-col items-center justify-start px-4 py-6"
    >
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-lg mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-gold text-xs font-medium uppercase tracking-wider">{theme.name} · {difficultyLabel[difficulty]}</p>
            <p className="font-serif text-2xl text-sepia">{session.score} pts</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <LivesBar lives={session.lives} maxLives={maxLives} />
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
      <AnimatePresence mode="wait">
        <motion.div
          key={session.currentIndex}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.25 }}
          className="w-full max-w-lg"
        >
          <QuestionCard
            question={currentQ}
            questionNumber={session.currentIndex + 1}
            totalQuestions={session.questions.length}
            selected={selected}
            revealed={revealed}
            isCorrect={isCorrect}
            onSelect={handleSelect}
          />
        </motion.div>
      </AnimatePresence>

      {/* Encouragement toast */}
      <AnimatePresence>
        {encouragement && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-parchment-card border border-gold-subtle rounded-full px-5 py-2 text-sepia-muted text-sm shadow-md font-serif italic"
          >
            {encouragement}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay victoire */}
      <AnimatePresence>
        {showWin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-[#A0762A]/15 backdrop-blur-sm flex flex-col items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [1.2, 1], opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="text-center bg-parchment-card border-2 border-[#A0762A] rounded-3xl px-10 py-8"
            >
              <motion.p animate={{ rotate: [0, -10, 10, -5, 5, 0] }} transition={{ duration: 0.6, delay: 0.2 }} className="text-6xl mb-4">🌟</motion.p>
              <p className="font-serif text-sepia text-3xl">Niveau accompli !</p>
              <p className="text-gold text-base mt-2 italic">Tu as grandi dans la Parole.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay défaite */}
      <AnimatePresence>
        {session.status === 'lost' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-[#7A2232]/15 backdrop-blur-sm flex flex-col items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 180 }}
              className="text-center bg-parchment-card border-2 border-[#7A2232] rounded-3xl px-10 py-8"
            >
              <motion.p animate={{ y: [0, -10, 0] }} transition={{ duration: 0.5, repeat: 1 }} className="text-5xl mb-4">🕊️</motion.p>
              <p className="font-serif text-sepia text-2xl">Le chemin continue...</p>
              <p className="text-sepia-muted text-sm mt-2 italic">Même les apôtres ont raté.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
