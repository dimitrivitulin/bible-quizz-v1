// Icônes SVG custom — DA Bible Quizz
// Style : ligne claire, palette or/sépia, adaptées à toutes les tailles

interface IconProps {
  size?: number
  className?: string
  filled?: boolean
}

const GOLD = '#A0762A'
const GOLD_PALE = '#C9A96E'
const SEPIA = '#2C1A0E'

// Colombe géométrique — vies en jeu
export function ColombeSVG({ size = 24, className = '', filled = true }: IconProps) {
  const fill = filled ? GOLD_PALE : 'transparent'
  const stroke = filled ? GOLD : GOLD_PALE
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Aile */}
      <path
        d="M9 9 C10 5 17 4 19 7"
        stroke={stroke} strokeWidth="1.8" strokeLinecap="round" fill="none"
      />
      {/* Corps */}
      <path
        d="M5 15 C5 11 8 9 12 9 C16 9 19 11 18 14 C17 17 13 18 10 17 C7 16 5 15 5 15Z"
        fill={fill} stroke={stroke} strokeWidth="1.6"
      />
      {/* Tête */}
      <circle cx="18" cy="9" r="2" fill={fill} stroke={stroke} strokeWidth="1.6" />
      {/* Queue fourchue */}
      <path d="M5 15 C3 16 2 18 4 19" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M5 15 C3 17 3 19 5 20" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  )
}

// Flamme stylisée — streak
export function FlameSVG({ size = 24, className = '', filled = true }: IconProps) {
  const fill = filled ? '#C0652A' : 'transparent'
  const stroke = filled ? '#8B3A1A' : GOLD_PALE
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3 C16 8 18 11 18 15 C18 18.5 15.3 21 12 21 C8.7 21 6 18.5 6 15 C6 11 10 8 10 5 C10 5 10 9 12 10.5 C14 9 14.5 6.5 12 3Z"
        fill={fill} stroke={stroke} strokeWidth="1.6" strokeLinejoin="round"
      />
      {/* Cœur intérieur */}
      <path
        d="M12 13 C13 14.5 13.5 16 12 18 C10.5 16 11 14.5 12 13Z"
        fill={filled ? '#E8A060' : 'transparent'} stroke="none"
      />
    </svg>
  )
}

// Étoile à 4 branches — victoire / 100%
export function EtoileSVG({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z"
        fill={GOLD_PALE} stroke={GOLD} strokeWidth="1.5" strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2" fill={GOLD} />
    </svg>
  )
}

// Croix latine ornementée — bon score
export function CroixSVG({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Croix */}
      <rect x="10.5" y="3" width="3" height="18" rx="1.5" fill={GOLD_PALE} stroke={GOLD} strokeWidth="1.2" />
      <rect x="4" y="7.5" width="16" height="3" rx="1.5" fill={GOLD_PALE} stroke={GOLD} strokeWidth="1.2" />
      {/* Ornement centre */}
      <circle cx="12" cy="9" r="1.5" fill={GOLD} />
    </svg>
  )
}

// Germe / feuille — score faible, encouragement
export function GermeSVG({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Tige */}
      <path d="M12 21 L12 11" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" />
      {/* Feuille gauche */}
      <path
        d="M12 16 C12 16 7 14 6 9 C6 9 11 9 13 13"
        fill={GOLD_PALE} stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Feuille droite */}
      <path
        d="M12 13 C12 13 17 11 18 6 C18 6 13 7 11 11"
        fill={GOLD_PALE} stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

// Médaille / trophée
export function MedailleSVG({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Ruban */}
      <path d="M9 3 L12 8 L15 3" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Médaille */}
      <circle cx="12" cy="15" r="7" fill={GOLD_PALE} stroke={GOLD} strokeWidth="1.8" />
      <circle cx="12" cy="15" r="4.5" fill="none" stroke={GOLD} strokeWidth="1" />
      {/* Étoile intérieure */}
      <path
        d="M12 11.5 L12.8 13.9 L15.3 13.9 L13.3 15.4 L14.1 17.8 L12 16.3 L9.9 17.8 L10.7 15.4 L8.7 13.9 L11.2 13.9 Z"
        fill={GOLD}
      />
    </svg>
  )
}

// Ornement séparateur — décoratif
export function OrnementSVG({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M2 12 L8 12" stroke={GOLD_PALE} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M16 12 L22 12" stroke={GOLD_PALE} strokeWidth="1.2" strokeLinecap="round" />
      <path
        d="M12 8 L13.2 11.2 L12 12 L10.8 11.2 Z M12 16 L13.2 12.8 L12 12 L10.8 12.8 Z M8 12 L11.2 10.8 L12 12 L11.2 13.2 Z M16 12 L12.8 10.8 L12 12 L12.8 13.2 Z"
        fill={GOLD} stroke="none"
      />
    </svg>
  )
}
