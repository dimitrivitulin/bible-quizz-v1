import { getQuestionsForLevel, getRandomQuestions } from '@/data/questions'
import type { Question } from '@/types'

describe('Base de questions', () => {
  // Vérifie chaque niveau
  for (let level = 1; level <= 10; level++) {
    describe(`Niveau ${level}`, () => {
      let questions: Question[]

      beforeAll(() => {
        questions = getQuestionsForLevel(level)
      })

      it(`contient au moins 30 questions`, () => {
        expect(questions.length).toBeGreaterThanOrEqual(30)
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

      it('le level est correct sur chaque question', () => {
        questions.forEach((q) => {
          expect(q.level).toBe(level)
        })
      })
    })
  }

  describe('getRandomQuestions', () => {
    it('retourne le bon nombre de questions', () => {
      const result = getRandomQuestions(1, 10)
      expect(result).toHaveLength(10)
    })

    it('ne retourne pas plus de questions qu\'il n\'en existe', () => {
      const result = getRandomQuestions(1, 999)
      expect(result.length).toBeLessThanOrEqual(30)
    })

    it('produit des résultats différents (aléatoire)', () => {
      const r1 = getRandomQuestions(1, 10).map((q) => q.id)
      const r2 = getRandomQuestions(1, 10).map((q) => q.id)
      // Probabilité quasi nulle qu'ils soient identiques
      expect(r1).not.toEqual(r2)
    })
  })
})
