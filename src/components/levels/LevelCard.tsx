'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Theme, Difficulty } from '@/types'
import { cn } from '@/lib/utils'

interface LevelCardProps {
  theme: Theme
  difficulty: Difficulty
  isUnlocked: boolean
  isCompleted: boolean
  bestScore?: number
  index: number
}

const difficultyLabel: Record<Difficulty, string> = {
  facile: 'Facile',
  intermediaire: 'Intermédiaire',
  difficile: 'Difficile',
}

const livesMap: Record<Difficulty, number> = {
  facile: 5,
  intermediaire: 3,
  difficile: 1,
}

export default function LevelCard({ theme, difficulty, isUnlocked, isCompleted, bestScore, index }: LevelCardProps) {
  const card = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      className={cn(
        'relative rounded-2xl border p-5 transition-all duration-200',
        isUnlocked && !isCompleted
          ? 'bg-parchment-card border-2 border-[#A0762A] shadow-sm shadow-[#A0762A]/20'
          : isCompleted
          ? 'bg-parchment-muted border border-gold-subtle opacity-60'
          : 'bg-parchment-muted border border-gold-subtle opacity-50 cursor-not-allowed'
      )}
    >
      <div className={`absolute top-0 left-0 h-1 w-full rounded-t-2xl bg-gradient-to-r ${theme.color}`} />

      {isCompleted && (
        <div className="absolute -top-2 right-4 bg-[#4A6741] text-[#F5EFE0] text-xs font-bold px-2 py-0.5 rounded-full">
          ✓ Complété
        </div>
      )}

      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-2xl">{theme.icon}</span>
          <p className={cn('font-serif font-semibold mt-1', isUnlocked ? 'text-sepia' : 'text-sepia-muted')}>{theme.name}</p>
          <p className="text-sepia-subtle text-xs mt-0.5">{difficultyLabel[difficulty]}</p>
        </div>
        <div className="text-right">
          {bestScore !== undefined && (
            <p className="text-gold text-xs mt-1">⭐ {bestScore} pts</p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-sepia-subtle">
        <span>🕊️ × {livesMap[difficulty]} vies</span>
        <span>10 questions · 15s</span>
      </div>
    </motion.div>
  )

  if (!isUnlocked) return card
  return <Link href={`/jeu/${theme.id}/${difficulty}`}>{card}</Link>
}
