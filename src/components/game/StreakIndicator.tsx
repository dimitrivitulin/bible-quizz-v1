'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface StreakIndicatorProps {
  streak: number
  lastPointsGained: number
}

export default function StreakIndicator({ streak, lastPointsGained }: StreakIndicatorProps) {
  const isBonus = streak >= 3

  return (
    <div className="flex items-center gap-3">
      {/* Compteur streak */}
      <div className="flex items-center gap-1">
        <AnimatePresence mode="wait">
          <motion.span
            key={streak}
            initial={{ scale: 1.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={`text-xl font-bold tabular-nums ${isBonus ? 'text-orange-400' : 'text-stone-400'}`}
          >
            {streak > 0 ? `${streak}` : '0'}
          </motion.span>
        </AnimatePresence>
        <span className={`text-lg ${streak > 0 ? 'opacity-100' : 'opacity-30'}`}>
          🔥
        </span>
      </div>

      {/* Badge x2 */}
      <AnimatePresence>
        {isBonus && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full"
          >
            ×2
          </motion.div>
        )}
      </AnimatePresence>

      {/* Points gagnés (flash) */}
      <AnimatePresence>
        {lastPointsGained > 0 && (
          <motion.span
            key={lastPointsGained + Math.random()}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.9 }}
            className={`text-sm font-bold ${lastPointsGained > 10 ? 'text-orange-300' : 'text-emerald-400'}`}
          >
            +{lastPointsGained}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}
