interface LivesBarProps {
  lives: number
  maxLives: number
}

export default function LivesBar({ lives, maxLives }: LivesBarProps) {
  return (
    <div className="flex items-center gap-1.5" aria-label={`${lives} vie(s) restante(s) sur ${maxLives}`}>
      {Array.from({ length: maxLives }).map((_, i) => (
        <span key={i} className={`text-xl transition-all duration-300 ${i < lives ? 'opacity-100' : 'opacity-20 grayscale'}`}>
          🕊️
        </span>
      ))}
    </div>
  )
}
