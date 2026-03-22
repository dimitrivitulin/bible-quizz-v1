import type { Question, Difficulty } from '@/types'

// Thème : L'Évangile
import evangeleFacile from './evangile/facile'
import evangeleIntermediaire from './evangile/intermediaire'
import evangeleDifficile from './evangile/difficile'

// Thème : Le Salut
import salutFacile from './salut/facile'
import salutIntermediaire from './salut/intermediaire'
import salutDifficile from './salut/difficile'

// Thème : Le Saint-Esprit
import saintEspritFacile from './saint-esprit/facile'
import saintEspritIntermediaire from './saint-esprit/intermediaire'
import saintEspritDifficile from './saint-esprit/difficile'

// Thème : La Prière
import priereFacile from './priere/facile'
import priereIntermediaire from './priere/intermediaire'
import priereDifficile from './priere/difficile'

// Thème : La Vie chrétienne
import vieChretienneFacile from './vie-chretienne/facile'
import vieChretienneIntermediaire from './vie-chretienne/intermediaire'
import vieChretienneDifficile from './vie-chretienne/difficile'

const ALL_QUESTIONS: Record<string, Record<string, Question[]>> = {
  'evangile': {
    facile: evangeleFacile,
    intermediaire: evangeleIntermediaire,
    difficile: evangeleDifficile,
  },
  'salut': {
    facile: salutFacile,
    intermediaire: salutIntermediaire,
    difficile: salutDifficile,
  },
  'saint-esprit': {
    facile: saintEspritFacile,
    intermediaire: saintEspritIntermediaire,
    difficile: saintEspritDifficile,
  },
  'priere': {
    facile: priereFacile,
    intermediaire: priereIntermediaire,
    difficile: priereDifficile,
  },
  'vie-chretienne': {
    facile: vieChretienneFacile,
    intermediaire: vieChretienneIntermediaire,
    difficile: vieChretienneDifficile,
  },
}

export function getQuestionsForTheme(themeId: string, difficulty: Difficulty): Question[] {
  return ALL_QUESTIONS[themeId]?.[difficulty] ?? []
}

export function getRandomQuestions(themeId: string, difficulty: Difficulty, count: number): Question[] {
  const pool = getQuestionsForTheme(themeId, difficulty)
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

export default ALL_QUESTIONS
