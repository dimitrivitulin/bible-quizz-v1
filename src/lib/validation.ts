import { z } from 'zod'

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'L\'email est requis')
    .email('Format d\'email invalide'),
  password: z
    .string()
    .min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
})

export const registerSchema = z
  .object({
    displayName: z
      .string()
      .min(2, 'Le prénom doit contenir au moins 2 caractères')
      .max(30, 'Le prénom ne peut pas dépasser 30 caractères')
      .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Le prénom contient des caractères invalides'),
    email: z
      .string()
      .min(1, 'L\'email est requis')
      .email('Format d\'email invalide'),
    password: z
      .string()
      .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
      .regex(/[A-Z]/, 'Le mot de passe doit contenir au moins une majuscule')
      .regex(/[0-9]/, 'Le mot de passe doit contenir au moins un chiffre'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  })

export type LoginSchema = z.infer<typeof loginSchema>
export type RegisterSchema = z.infer<typeof registerSchema>
