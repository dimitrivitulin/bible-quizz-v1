import { checkNewTrophies, TROPHIES } from '@/data/trophies'

describe('checkNewTrophies', () => {
  it('débloque "petit_enfant" après avoir complété le niveau 1', () => {
    const result = checkNewTrophies([], 1, 80, 1, 5, 5)
    expect(result).toContain('petit_enfant')
  })

  it('débloque "gardien_parole" avec un score parfait', () => {
    const result = checkNewTrophies([], 3, 100, 1, 3, 3)
    expect(result).toContain('gardien_parole')
  })

  it('débloque "ouvrier_fidele" après 10 parties', () => {
    const result = checkNewTrophies([], 1, 50, 10, 2, 5)
    expect(result).toContain('ouvrier_fidele')
  })

  it('ne débloque pas un trophée déjà obtenu', () => {
    const result = checkNewTrophies(['petit_enfant'], 1, 100, 1, 5, 5)
    expect(result).not.toContain('petit_enfant')
  })

  it('ne débloque "berger_fidele" que si aucune vie n\'a été perdue', () => {
    const withLostLife = checkNewTrophies([], 1, 80, 1, 4, 5)
    expect(withLostLife).not.toContain('berger_fidele')

    const withAllLives = checkNewTrophies([], 1, 80, 1, 5, 5)
    expect(withAllLives).toContain('berger_fidele')
  })

  it('tous les trophées ont des IDs uniques', () => {
    const ids = TROPHIES.map((t) => t.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})
