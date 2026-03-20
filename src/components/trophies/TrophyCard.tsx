import { motion } from 'framer-motion'
import type { Trophy } from '@/types'
import { cn } from '@/lib/utils'

interface TrophyCardProps {
  trophy: Trophy
  unlocked: boolean
  index: number
}

export default function TrophyCard({ trophy, unlocked, index }: TrophyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.07 }}
      className={cn(
        'rounded-2xl border p-4 text-center transition-all duration-200',
        unlocked
          ? 'bg-amber-900/20 border-amber-700/50'
          : 'bg-stone-900/40 border-stone-700/20 opacity-40 grayscale'
      )}
    >
      <span className="text-4xl block mb-2">{trophy.icon}</span>
      <p className={cn('font-bold text-sm mb-1', unlocked ? 'text-amber-100' : 'text-stone-500')}>
        {trophy.name}
      </p>
      <p className="text-xs text-stone-400 leading-snug">{trophy.description}</p>
      {unlocked && (
        <span className="inline-block mt-2 text-xs text-emerald-400 font-medium">Débloqué ✓</span>
      )}
    </motion.div>
  )
}
