import { loginSchema, registerSchema } from '@/lib/validation'

describe('loginSchema', () => {
  it('accepte des identifiants valides', () => {
    const result = loginSchema.safeParse({ email: 'test@example.com', password: 'motdepasse' })
    expect(result.success).toBe(true)
  })

  it('rejette un email invalide', () => {
    const result = loginSchema.safeParse({ email: 'pasunemail', password: 'motdepasse' })
    expect(result.success).toBe(false)
  })

  it('rejette un mot de passe trop court', () => {
    const result = loginSchema.safeParse({ email: 'test@example.com', password: '123' })
    expect(result.success).toBe(false)
  })

  it('rejette un email vide', () => {
    const result = loginSchema.safeParse({ email: '', password: 'motdepasse' })
    expect(result.success).toBe(false)
  })
})

describe('registerSchema', () => {
  const validData = {
    displayName: 'Marie',
    email: 'marie@example.com',
    password: 'Motdepasse1',
    confirmPassword: 'Motdepasse1',
  }

  it('accepte une inscription valide', () => {
    const result = registerSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('rejette si les mots de passe ne correspondent pas', () => {
    const result = registerSchema.safeParse({ ...validData, confirmPassword: 'Autre1' })
    expect(result.success).toBe(false)
    if (!result.success) {
      const paths = result.error.issues.map((e) => e.path[0])
      expect(paths).toContain('confirmPassword')
    }
  })

  it('rejette un mot de passe sans majuscule', () => {
    const result = registerSchema.safeParse({ ...validData, password: 'motdepasse1', confirmPassword: 'motdepasse1' })
    expect(result.success).toBe(false)
  })

  it('rejette un mot de passe sans chiffre', () => {
    const result = registerSchema.safeParse({ ...validData, password: 'Motdepasse', confirmPassword: 'Motdepasse' })
    expect(result.success).toBe(false)
  })

  it('rejette un prénom trop court', () => {
    const result = registerSchema.safeParse({ ...validData, displayName: 'M' })
    expect(result.success).toBe(false)
  })

  it('rejette des caractères invalides dans le prénom', () => {
    const result = registerSchema.safeParse({ ...validData, displayName: 'Marie<script>' })
    expect(result.success).toBe(false)
  })
})
