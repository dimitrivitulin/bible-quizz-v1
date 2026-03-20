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
  onSelect: (index: number) => void
}

const OPTION_LABELS = ['A', 'B', 'C', 'D']

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selected,
  revealed,
  onSelect,
}: QuestionCardProps) {
  const getOptionClass = (i: number) => {
    if (!revealed) return 'bg-stone-700/60 hover:bg-amber-600/30 hover:border-amber-500 border-stone-600 cursor-pointer'
    if (i === question.correctIndex) return 'bg-emerald-600/40 border-emerald-500 text-emerald-200'
    if (i === selected && i !== question.correctIndex) return 'bg-red-700/40 border-red-500 text-red-200'
    return 'bg-stone-700/30 border-stone-600 opacity-50'
  }

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="w-full"
    >
      <p className="text-xs text-amber-400/70 mb-3 text-right">
        Question {questionNumber} / {totalQuestions}
      </p>

      <div className="bg-stone-800/70 border border-amber-700/20 rounded-2xl p-5 mb-5 min-h-[80px] flex items-center">
        <p className="text-amber-50 text-lg font-medium leading-snug">{question.question}</p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => !revealed && onSelect(i)}
            disabled={revealed}
            className={cn(
              'flex items-center gap-3 w-full text-left rounded-xl border px-4 py-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400',
              getOptionClass(i)
            )}
          >
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-700/30 flex items-center justify-center text-amber-300 text-sm font-bold">
              {OPTION_LABELS[i]}
            </span>
            <span className="text-amber-100 text-sm leading-snug">{opt}</span>
          </button>
        ))}
      </div>

      {revealed && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 text-xs text-center text-amber-400/60 italic"
        >
          📖 {question.reference}
        </motion.p>
      )}
    </motion.div>
  )
}
