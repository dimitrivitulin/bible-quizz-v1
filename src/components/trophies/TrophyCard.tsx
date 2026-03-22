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
          ? 'bg-parchment-card border-[#A0762A]'
          : 'bg-parchment-muted border-gold-subtle opacity-40 grayscale'
      )}
    >
      <span className="text-4xl block mb-2">{trophy.icon}</span>
      <p className={cn('font-serif font-semibold text-sm mb-1', unlocked ? 'text-sepia' : 'text-sepia-subtle')}>
        {trophy.name}
      </p>
      {unlocked && (
        <span className="inline-block mt-2 text-xs text-[#4A6741] font-medium">Débloqué ✓</span>
      )}
    </motion.div>
  )
}
