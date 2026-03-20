import type { Trophy } from '@/types'

export const TROPHIES: Trophy[] = [
  { id: 'petit_enfant', name: 'Le Petit Enfant', description: 'Tu as commencé ton voyage dans la Parole.', icon: '🌱', conditionType: 'complete_level', conditionValue: 1 },
  { id: 'celui_qui_ecoute', name: 'Celui qui écoute', description: 'Tu écoutes avec un cœur ouvert.', icon: '👂', conditionType: 'complete_level', conditionValue: 2 },
  { id: 'serviteur', name: 'Serviteur', description: 'Tu sers avec fidélité et constance.', icon: '🙏', conditionType: 'complete_level', conditionValue: 3 },
  { id: 'temoin', name: 'Témoin', description: 'Tu portes témoignage de ce que tu as reçu.', icon: '🕊️', conditionType: 'complete_level', conditionValue: 5 },
  { id: 'berger_fidele', name: 'Berger fidèle', description: 'Tu avances sans te perdre en chemin.', icon: '🦌', conditionType: 'no_lives_lost', conditionValue: 1 },
  { id: 'disciple', name: 'Disciple', description: 'Tu marches sur les traces du Maître.', icon: '✝️', conditionType: 'complete_level', conditionValue: 7 },
  { id: 'gardien_parole', name: 'Gardien de la Parole', description: 'Tu chéris chaque mot des Écritures.', icon: '📖', conditionType: 'perfect_score', conditionValue: 100 },
  { id: 'ouvrier_fidele', name: 'Ouvrier fidèle', description: 'Tu reviens encore et encore à la source.', icon: '⚒️', conditionType: 'games_played', conditionValue: 10 },
  { id: 'apotre', name: 'Apôtre', description: 'Tu es envoyé, porteur d\'une connaissance profonde.', icon: '🌟', conditionType: 'complete_level', conditionValue: 9 },
  { id: 'saint_des_saints', name: 'Saint des Saints', description: 'Tu as traversé jusqu\'à la chambre la plus profonde.', icon: '👑', conditionType: 'complete_level', conditionValue: 10 },
]

export function checkNewTrophies(
  trophiesAlreadyUnlocked: string[],
  levelCompleted: number,
  score: number,
  gamesPlayed: number,
  livesRemaining: number,
  maxLives: number
): string[] {
  const newTrophies: string[] = []

  for (const trophy of TROPHIES) {
    if (trophiesAlreadyUnlocked.includes(trophy.id)) continue

    let earned = false
    switch (trophy.conditionType) {
      case 'complete_level':
        earned = levelCompleted >= trophy.conditionValue
        break
      case 'perfect_score':
        earned = score === 100
        break
      case 'games_played':
        earned = gamesPlayed >= trophy.conditionValue
        break
      case 'no_lives_lost':
        earned = livesRemaining === maxLives
        break
    }

    if (earned) newTrophies.push(trophy.id)
  }

  return newTrophies
}
