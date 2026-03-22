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
          ? 'bg-parchment-card border-2 border-[#A0762A] shadow-sm shadow-[#A0762A]/20'
          : isCompleted
          ? 'bg-parchment-muted border border-gold-subtle opacity-60'
          : 'bg-parchment-muted border border-gold-subtle opacity-50 cursor-not-allowed'
      )}
    >
      <div className={`absolute top-0 left-0 h-1 w-full rounded-t-2xl bg-gradient-to-r ${level.color}`} />

      {isCurrent && (
        <div className="absolute -top-2 right-4 bg-[#A0762A] text-[#F5EFE0] text-xs font-bold px-2 py-0.5 rounded-full">
          En cours
        </div>
      )}
      {isCompleted && (
        <div className="absolute -top-2 right-4 bg-[#4A6741] text-[#F5EFE0] text-xs font-bold px-2 py-0.5 rounded-full">
          ✓ Complété
        </div>
      )}

      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-2xl">{level.icon}</span>
          <p className={cn('font-serif font-semibold mt-1', isCurrent ? 'text-sepia' : 'text-sepia-muted')}>{level.name}</p>
          <p className="text-sepia-subtle text-xs mt-0.5">{difficultyLabel[level.difficulty]}</p>
        </div>
        <div className="text-right">
          <span className="text-xs text-sepia-subtle">Niv. {level.id}</span>
          {bestScore !== undefined && (
            <p className="text-gold text-xs mt-1">⭐ {bestScore} pts</p>
          )}
        </div>
      </div>

      {isCurrent && <p className="text-sepia-muted text-xs mb-3">{level.description}</p>}

      <div className="flex items-center justify-between text-xs text-sepia-subtle">
        <span>🕊️ × {level.lives} vies</span>
        <span>10 questions · 15s</span>
      </div>
    </motion.div>
  )

  if (!isUnlocked) return card
  return <Link href={`/jeu/${level.id}`}>{card}</Link>
}
