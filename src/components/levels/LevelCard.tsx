'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Level } from '@/types'
import { cn } from '@/lib/utils'

interface LevelCardProps {
  level: Level
  isUnlocked: boolean
  isCompleted: boolean
  bestScore?: number
  index: number
}

const difficultyLabel: Record<Level['difficulty'], string> = {
  facile: 'Facile',
  'intermédiaire': 'Intermédiaire',
  hardcore: 'Hardcore',
}

export default function LevelCard({ level, isUnlocked, isCompleted, bestScore, index }: LevelCardProps) {
  const card = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      className={cn(
        'relative rounded-2xl border p-5 transition-all duration-200',
        isUnlocked
          ? 'border-amber-700/40 bg-stone-800/60 hover:bg-stone-700/60 hover:border-amber-600/60 cursor-pointer'
          : 'border-stone-700/30 bg-stone-900/40 opacity-60 cursor-not-allowed'
      )}
    >
      {/* Gradient badge */}
      <div className={`absolute top-0 left-0 h-1 w-full rounded-t-2xl bg-gradient-to-r ${level.color}`} />

      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-2xl">{level.icon}</span>
          <p className="text-amber-100 font-bold mt-1">{level.name}</p>
          <p className="text-amber-400/60 text-xs mt-0.5">{difficultyLabel[level.difficulty]}</p>
        </div>
        <div className="text-right">
          <span className="text-xs text-stone-400">Niv. {level.id}</span>
          {isCompleted && <p className="text-emerald-400 text-xs mt-1">✓ Complété</p>}
          {!isUnlocked && <p className="text-stone-500 text-lg">🔒</p>}
        </div>
      </div>

      <p className="text-stone-400 text-xs mb-3">{level.description}</p>

      <div className="flex items-center justify-between text-xs text-stone-500">
        <span>🕊️ × {level.lives} vies</span>
        <span>10 questions · 15s</span>
        {bestScore !== undefined && (
          <span className="text-amber-400">⭐ {bestScore} pts</span>
        )}
      </div>
    </motion.div>
  )

  if (!isUnlocked) return card

  return <Link href={`/jeu/${level.id}`}>{card}</Link>
}
