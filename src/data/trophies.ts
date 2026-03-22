import type { Trophy } from '@/types'

export const TROPHIES: Trophy[] = [
  {
    id: 'petit_enfant',
    name: 'Le Petit Enfant',
    description: '« Si vous ne devenez pas comme les petits enfants… » (Mt 18:3) — Tu as accepté d\'apprendre sans orgueil. C\'est le premier pas, et le plus important dans l\'étude de la Parole.',
    icon: '🌱',
    conditionType: 'complete_level',
    conditionValue: 1,
  },
  {
    id: 'celui_qui_ecoute',
    name: 'Celui qui écoute',
    description: '« Prompt à écouter, lent à parler. » (Jc 1:19) — Tu lis la Parole avec attention. La sagesse grandit en silence, avant de parler.',
    icon: '👂',
    conditionType: 'complete_level',
    conditionValue: 2,
  },
  {
    id: 'serviteur',
    name: 'Serviteur',
    description: '« Quiconque veut être le premier sera le serviteur de tous. » (Mc 10:44) — Tu avances sans chercher la gloire. Celui qui sert fidèlement est grand dans le Royaume.',
    icon: '🙏',
    conditionType: 'complete_level',
    conditionValue: 3,
  },
  {
    id: 'temoin',
    name: 'Témoin',
    description: '« Vous serez mes témoins. » (Ac 1:8) — Tu connais assez pour partager. La Parole reçue devient témoignage vivant dans ta bouche.',
    icon: '🕊️',
    conditionType: 'complete_level',
    conditionValue: 5,
  },
  {
    id: 'berger_fidele',
    name: 'Berger fidèle',
    description: '« Le bon berger donne sa vie pour ses brebis. » (Jn 10:11) — Tu as traversé cette épreuve sans perdre une vie. La fidélité dans les petites choses forme le caractère.',
    icon: '🦌',
    conditionType: 'no_lives_lost',
    conditionValue: 1,
  },
  {
    id: 'disciple',
    name: 'Disciple',
    description: '« Si vous demeurez dans ma parole, vous êtes vraiment mes disciples. » (Jn 8:31) — Tu n\'es plus apprenti — tu marches dans la Parole avec constance.',
    icon: '✝️',
    conditionType: 'complete_level',
    conditionValue: 7,
  },
  {
    id: 'gardien_parole',
    name: 'Gardien de la Parole',
    description: '« J\'ai caché ta parole dans mon cœur. » (Ps 119:11) — Score parfait. Tu as gardé la Parole si profondément qu\'aucune question ne t\'a pris par surprise.',
    icon: '📖',
    conditionType: 'perfect_score',
    conditionValue: 100,
  },
  {
    id: 'ouvrier_fidele',
    name: 'Ouvrier fidèle',
    description: '« Applique-toi à te présenter devant Dieu comme un homme éprouvé. » (2 Tm 2:15) — Dix parties. Ce n\'est pas le talent qui compte, c\'est la constance dans l\'effort.',
    icon: '⚒️',
    conditionType: 'games_played',
    conditionValue: 10,
  },
  {
    id: 'apotre',
    name: 'Apôtre',
    description: '« Comment prêcheront-ils, s\'ils ne sont pas envoyés ? » (Rm 10:14) — Tu portes une connaissance profonde des Écritures. Tu es prêt à transmettre ce que tu as reçu.',
    icon: '🌟',
    conditionType: 'complete_level',
    conditionValue: 9,
  },
  {
    id: 'saint_des_saints',
    name: 'Saint des Saints',
    description: '« Nous avons donc une pleine liberté d\'entrer dans le lieu très saint. » (Hé 10:19) — Tu as traversé tous les niveaux, humilié par la Parole à chaque étape. Gloire à Dieu seul.',
    icon: '👑',
    conditionType: 'complete_level',
    conditionValue: 10,
  },
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
