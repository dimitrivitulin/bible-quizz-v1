// Icônes — wrappers Lucide React avec palette DA Bible Quizz
import { Bird, Flame, Sparkles, Crown, Star, Feather, Sprout, Trophy, type LucideProps } from 'lucide-react'

const GOLD = '#A0762A'
const GOLD_PALE = '#C9A96E'
const SEPIA_SUBTLE = '#9C7A5A'

// Vie en jeu (colombe)
export function VieIcon({ active = true, size = 22 }: { active?: boolean; size?: number }) {
  return (
    <Bird
      size={size}
      color={active ? GOLD : GOLD_PALE}
      strokeWidth={active ? 2 : 1.5}
      opacity={active ? 1 : 0.35}
    />
  )
}

// Streak (flamme)
export function StreakIcon({ active = true, size = 20 }: { active?: boolean; size?: number }) {
  return (
    <Flame
      size={size}
      color={active ? '#C0652A' : GOLD_PALE}
      strokeWidth={active ? 2 : 1.5}
      opacity={active ? 1 : 0.3}
    />
  )
}

// Victoire (overlay win)
export function VictoireIcon({ size = 72 }: { size?: number }) {
  return <Sparkles size={size} color={GOLD} strokeWidth={1.5} />
}

// Défaite (overlay lost)
export function DefaiteIcon({ size = 64 }: { size?: number }) {
  return <Feather size={size} color={GOLD_PALE} strokeWidth={1.5} />
}

// Score résultat — 4 variantes
export function ScoreIcon100({ size = 80 }: { size?: number }) {
  return <Crown size={size} color={GOLD} strokeWidth={1.5} />
}
export function ScoreIcon70({ size = 80 }: { size?: number }) {
  return <Star size={size} color={GOLD} strokeWidth={1.5} />
}
export function ScoreIcon50({ size = 80 }: { size?: number }) {
  return <Feather size={size} color={SEPIA_SUBTLE} strokeWidth={1.5} />
}
export function ScoreIcon0({ size = 80 }: { size?: number }) {
  return <Sprout size={size} color={SEPIA_SUBTLE} strokeWidth={1.5} />
}

// Trophée
export function TropheeIcon({ size = 24, ...props }: LucideProps) {
  return <Trophy size={size} color={GOLD} strokeWidth={1.8} {...props} />
}
