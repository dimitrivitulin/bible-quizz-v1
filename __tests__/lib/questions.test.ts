import { getQuestionsForTheme, getRandomQuestions } from '@/data/questions'
import type { Question, Difficulty } from '@/types'

const THEMES = ['evangile', 'salut', 'saint-esprit', 'priere', 'vie-chretienne']
const DIFFICULTIES: Difficulty[] = ['facile', 'intermediaire', 'difficile']

describe('Base de questions', () => {
  for (const themeId of THEMES) {
    for (const difficulty of DIFFICULTIES) {
      describe(`${themeId} / ${difficulty}`, () => {
        let questions: Question[]

        beforeAll(() => {
          questions = getQuestionsForTheme(themeId, difficulty)
        })

        it(`contient au moins 10 questions`, () => {
          expect(questions.length).toBeGreaterThanOrEqual(10)
        })

        it('toutes les questions ont un ID unique', () => {
          const ids = questions.map((q) => q.id)
          const unique = new Set(ids)
          expect(unique.size).toBe(ids.length)
        })

        it('toutes les questions ont exactement 4 options', () => {
          questions.forEach((q) => {
            expect(q.options).toHaveLength(4)
          })
        })

        it('correctIndex est entre 0 et 3', () => {
          questions.forEach((q) => {
            expect(q.correctIndex).toBeGreaterThanOrEqual(0)
            expect(q.correctIndex).toBeLessThanOrEqual(3)
          })
        })

        it('chaque question a une référence biblique', () => {
          questions.forEach((q) => {
            expect(q.reference.length).toBeGreaterThan(0)
          })
        })

        it('chaque question a un texte non vide', () => {
          questions.forEach((q) => {
            expect(q.question.length).toBeGreaterThan(10)
          })
        })

        it('le themeId et la difficulté sont corrects sur chaque question', () => {
          questions.forEach((q) => {
            expect(q.themeId).toBe(themeId)
            expect(q.difficulty).toBe(difficulty)
          })
        })
      })
    }
  }

  describe('getRandomQuestions', () => {
    it('retourne le bon nombre de questions', () => {
      const result = getRandomQuestions('evangile', 'facile', 10)
      expect(result).toHaveLength(10)
    })

    it('ne retourne pas plus de questions qu\'il n\'en existe', () => {
      const result = getRandomQuestions('evangile', 'facile', 999)
      expect(result.length).toBeLessThanOrEqual(30)
    })

    it('produit des résultats différents (aléatoire)', () => {
      const r1 = getRandomQuestions('evangile', 'facile', 10).map((q) => q.id)
      const r2 = getRandomQuestions('evangile', 'facile', 10).map((q) => q.id)
      // Probabilité quasi nulle qu'ils soient identiques avec 12+ questions dans le pool
      expect(r1).not.toEqual(r2)
    })
  })
})
