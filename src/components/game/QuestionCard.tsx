'use client'

import { motion } from 'framer-motion'
import type { Question } from '@/types'
import { cn } from '@/lib/utils'

interface QuestionCardProps {
  question: Question
  questionNumber: number
  totalQuestions: number
  selected: number | null
  revealed: boolean
  isCorrect: boolean | null
  onSelect: (index: number) => void
}

const OPTION_LABELS = ['A', 'B', 'C', 'D']

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selected,
  revealed,
  isCorrect,
  onSelect,
}: QuestionCardProps) {
  const getOptionClass = (i: number) => {
    if (!revealed) return 'bg-parchment border-gold-subtle hover:border-[#A0762A] hover:bg-parchment-card cursor-pointer'
    if (i === question.correctIndex) return 'bg-[#E8F0E6] border-[#4A6741] text-[#4A6741]'
    if (i === selected && i !== question.correctIndex) return 'bg-[#F5E6E8] border-[#7A2232] text-[#7A2232]'
    return 'bg-parchment-muted border-gold-subtle opacity-40'
  }

  const revealAnimation = revealed
    ? isCorrect
      ? { scale: [1, 1.03, 1] }
      : { x: [0, -8, 8, -6, 6, -3, 3, 0] }
    : {}

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, ...revealAnimation }}
      transition={{ duration: revealed ? 0.4 : 0.25 }}
      className="w-full"
    >
      <p className="text-xs text-sepia-subtle mb-3 text-right font-medium">
        Question {questionNumber} / {totalQuestions}
      </p>

      <div className="bg-parchment-card border border-gold-subtle rounded-2xl p-5 mb-5 min-h-[80px] flex items-center">
        <p className="font-serif text-lg text-sepia leading-snug">{question.question}</p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => !revealed && onSelect(i)}
            disabled={revealed}
            className={cn(
              'flex items-center gap-3 w-full text-left rounded-xl border px-4 py-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A0762A]',
              getOptionClass(i)
            )}
          >
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-parchment-muted border border-gold-subtle flex items-center justify-center text-gold text-sm font-bold">
              {OPTION_LABELS[i]}
            </span>
            <span className="text-sepia text-sm leading-snug">{opt}</span>
          </button>
        ))}
      </div>

      {revealed && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 text-xs text-center text-sepia-subtle font-serif italic"
        >
          📖 {question.reference}
        </motion.p>
      )}
    </motion.div>
  )
}
