import type { Level } from '@/types'

export const LEVELS: Level[] = [
  { id: 1, name: 'Les Premiers Pas', description: 'Les grandes histoires de la Bible', difficulty: 'facile', lives: 5, questionsPerSession: 10, minScoreToUnlock: 0, color: 'from-emerald-400 to-teal-500', icon: '🌱' },
  { id: 2, name: 'Le Chemin s\'ouvre', description: 'Personnages et lieux bibliques connus', difficulty: 'facile', lives: 5, questionsPerSession: 10, minScoreToUnlock: 50, color: 'from-teal-400 to-cyan-500', icon: '🕊️' },
  { id: 3, name: 'La Voix dans le désert', description: 'Histoires de l\'Ancien Testament', difficulty: 'facile', lives: 4, questionsPerSession: 10, minScoreToUnlock: 60, color: 'from-cyan-400 to-blue-500', icon: '📖' },
  { id: 4, name: 'Le Serviteur fidèle', description: 'Détails des récits bibliques', difficulty: 'intermédiaire', lives: 4, questionsPerSession: 10, minScoreToUnlock: 60, color: 'from-blue-400 to-indigo-500', icon: '🙏' },
  { id: 5, name: 'Témoin de la Parole', description: 'Chiffres, lieux et chronologie', difficulty: 'intermédiaire', lives: 3, questionsPerSession: 10, minScoreToUnlock: 60, color: 'from-indigo-400 to-violet-500', icon: '✝️' },
  { id: 6, name: 'Gardien de la Foi', description: 'Épîtres et Évangiles en détail', difficulty: 'intermédiaire', lives: 3, questionsPerSession: 10, minScoreToUnlock: 60, color: 'from-violet-400 to-purple-500', icon: '🕯️' },
  { id: 7, name: 'Le Berger et les brebis', description: 'Prophètes et rois d\'Israël', difficulty: 'intermédiaire', lives: 2, questionsPerSession: 10, minScoreToUnlock: 60, color: 'from-purple-400 to-pink-500', icon: '🦁' },
  { id: 8, name: 'Héritier des promesses', description: 'Versets précis et théologie', difficulty: 'hardcore', lives: 2, questionsPerSession: 10, minScoreToUnlock: 70, color: 'from-pink-400 to-rose-500', icon: '⚔️' },
  { id: 9, name: 'Apôtre de la Vérité', description: 'Noms rares, généalogies, détails cachés', difficulty: 'hardcore', lives: 1, questionsPerSession: 10, minScoreToUnlock: 70, color: 'from-rose-400 to-red-500', icon: '🌟' },
  { id: 10, name: 'Saint des Saints', description: 'Le niveau ultime pour les connaisseurs', difficulty: 'hardcore', lives: 1, questionsPerSession: 10, minScoreToUnlock: 80, color: 'from-amber-400 to-yellow-500', icon: '👑' },
]

export function getLevelById(id: number): Level | undefined {
  return LEVELS.find((l) => l.id === id)
}
