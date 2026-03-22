import type { Theme } from '@/types'

export const THEMES: Theme[] = [
  {
    id: 'evangile',
    name: "L'Évangile",
    description: 'La bonne nouvelle de Jésus-Christ — naissance, mort, résurrection',
    icon: '✝️',
    color: 'from-[#A0762A] to-[#C9A96E]',
    lives: { facile: 5, intermediaire: 3, difficile: 1 },
  },
  {
    id: 'salut',
    name: 'Le Salut',
    description: 'Justification par la foi, repentance, nouvelle naissance',
    icon: '🕊️',
    color: 'from-[#4A6741] to-[#7A9E6F]',
    lives: { facile: 5, intermediaire: 3, difficile: 1 },
  },
  {
    id: 'saint-esprit',
    name: 'Le Saint-Esprit',
    description: 'Personne, dons, fruit et baptême du Saint-Esprit',
    icon: '🔥',
    color: 'from-[#C0522A] to-[#E07A50]',
    lives: { facile: 5, intermediaire: 3, difficile: 1 },
  },
  {
    id: 'priere',
    name: 'La Prière',
    description: 'Modèles bibliques, promesses et exemples de prière',
    icon: '🙏',
    color: 'from-[#5A4A8A] to-[#8A7ABD]',
    lives: { facile: 5, intermediaire: 3, difficile: 1 },
  },
  {
    id: 'vie-chretienne',
    name: 'La Vie chrétienne',
    description: 'Témoignage, service et quotidien avec Dieu',
    icon: '🌱',
    color: 'from-[#2A7A6A] to-[#5AADA0]',
    lives: { facile: 5, intermediaire: 3, difficile: 1 },
  },
]

export function getThemeById(id: string): Theme | undefined {
  return THEMES.find((t) => t.id === id)
}
