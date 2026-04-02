import { VieIcon } from '@/components/ui/Icons'

interface LivesBarProps {
  lives: number
  maxLives: number
}

export default function LivesBar({ lives, maxLives }: LivesBarProps) {
  return (
    <div className="flex flex-col items-end gap-0.5">
      <div className="flex items-center gap-1.5" aria-label={`${lives} vie(s) restante(s) sur ${maxLives}`}>
        {Array.from({ length: maxLives }).map((_, i) => (
          <span key={i} className={`transition-all duration-300 ${i < lives ? 'opacity-100' : 'opacity-20'}`}>
            <VieIcon active={i < lives} size={22} />
          </span>
        ))}
      </div>
      <p className="text-[10px] text-sepia-subtle">{lives}/{maxLives} vies</p>
    </div>
  )
}
