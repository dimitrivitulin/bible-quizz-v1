'use client'

import { useEffect, useState, useRef } from 'react'

interface TimerProps {
  duration: number // secondes
  onExpire: () => void
  running: boolean
}

export default function Timer({ duration, onExpire, running }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration)
  const onExpireRef = useRef(onExpire)
  onExpireRef.current = onExpire

  useEffect(() => {
    setTimeLeft(duration)
  }, [duration])

  useEffect(() => {
    if (!running) return
    if (timeLeft <= 0) {
      onExpireRef.current()
      return
    }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000)
    return () => clearTimeout(id)
  }, [timeLeft, running])

  const pct = (timeLeft / duration) * 100
  const color = pct > 50 ? 'bg-emerald-500' : pct > 25 ? 'bg-amber-500' : 'bg-red-500'

  return (
    <div className="w-full" role="timer" aria-label={`Temps restant : ${timeLeft} secondes`}>
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-amber-300 font-medium">Temps</span>
        <span className={`text-lg font-bold tabular-nums ${timeLeft <= 5 ? 'text-red-400 animate-pulse' : 'text-amber-100'}`}>
          {timeLeft}s
        </span>
      </div>
      <div className="h-2 bg-stone-700 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
