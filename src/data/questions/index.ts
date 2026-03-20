import type { Question } from '@/types'
import level1 from './level1'
import level2 from './level2'
import level3 from './level3'
import level4 from './level4'
import level5 from './level5'
import level6 from './level6'
import level7 from './level7'
import level8 from './level8'
import level9 from './level9'
import level10 from './level10'

const ALL_QUESTIONS: Record<number, Question[]> = {
  1: level1,
  2: level2,
  3: level3,
  4: level4,
  5: level5,
  6: level6,
  7: level7,
  8: level8,
  9: level9,
  10: level10,
}

export function getQuestionsForLevel(levelId: number): Question[] {
  return ALL_QUESTIONS[levelId] ?? []
}

export function getRandomQuestions(levelId: number, count: number): Question[] {
  const pool = getQuestionsForLevel(levelId)
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

export default ALL_QUESTIONS
