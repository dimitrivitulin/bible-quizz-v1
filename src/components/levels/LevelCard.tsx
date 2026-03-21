'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Level } from '@/types'
import { cn } from '@/lib/utils'

interface LevelCardProps {
  level: Level
  isUnlocked: boolean
  isCompleted: boolean
  isCurrent?: boolean
  bestScore?: number
  index: number
}

const difficultyLabel: Record<Level['difficulty'], string> = {
  facile: 'Facile',
  'intermédiaire': 'Intermédiaire',
  hardcore: 'Hardcore',
}

export default function LevelCard({ level, isUnlocked, isCompleted, isCurrent, bestScore, index }: LevelCardProps) {
  const card = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      className={cn(
        'relative rounded-2xl border p-5 transition-all duration-200',
        isCurrent
          ? 'border-amber-500/70 bg-stone-800/80 hover:bg-stone-700/70 hover:border-amber-400/80 cursor-pointer shadow-lg shadow-amber-900/20'
          : isCompleted
          ? 'border-stone-700/30 bg-stone-900/30 opacity-50 cursor-pointer hover:opacity-70'
          : 'border-stone-700/30 bg-stone-900/40 opacity-60 cursor-not-allowed'
      )}
    >
      {/* Gradient badge */}
      <div className={`absolute top-0 left-0 h-1 w-full rounded-t-2xl bg-gradient-to-r ${level.color}`} />

      {/* Badge "En cours" sur le niveau courant */}
      {isCurrent && (
        <div className="absolute -top-2 right-4 bg-amber-500 text-stone-900 text-xs font-bold px-2 py-0.5 rounded-full">
          En cours
        </div>
      )}

      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-2xl">{level.icon}</span>
          <p className={cn('font-bold mt-1', isCurrent ? 'text-amber-100' : 'text-stone-400')}>{level.name}</p>
          <p className="text-amber-400/60 text-xs mt-0.5">{difficultyLabel[level.difficulty]}</p>
        </div>
        <div className="text-right">
          <span className="text-xs text-stone-500">Niv. {level.id}</span>
          {isCompleted && <p className="text-emerald-500 text-xs mt-1">✓ Complété</p>}
        </div>
      </div>

      {isCurrent && <p className="text-stone-400 text-xs mb-3">{level.description}</p>}

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
