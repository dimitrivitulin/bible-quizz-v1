'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { registerSchema, type RegisterSchema } from '@/lib/validation'
import Button from '@/components/ui/Button'

export default function RegisterForm() {
  const { registerWithEmail, loginWithGoogle } = useAuth()
  const router = useRouter()
  const [serverError, setServerError] = useState('')
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterSchema) => {
    setLoading(true)
    setServerError('')
    try {
      await registerWithEmail(data.email, data.password, data.displayName)
      router.push('/niveaux')
    } catch (err: unknown) {
      const code = (err as { code?: string }).code
      if (code === 'auth/email-already-in-use') {
        setServerError('Cet email est déjà utilisé.')
      } else {
        setServerError('Une erreur est survenue. Réessayez.')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleGoogle = async () => {
    setLoading(true)
    try {
      await loginWithGoogle()
      router.push('/niveaux')
    } catch {
      setServerError('Connexion Google échouée.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-sm">
      <h1 className="text-2xl font-bold text-amber-100 mb-1 text-center">Créer un compte</h1>
      <p className="text-stone-400 text-sm text-center mb-6">Commence ton parcours dans la Parole</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div>
          <label htmlFor="displayName" className="block text-sm text-amber-200 mb-1">Prénom</label>
          <input id="displayName" type="text" autoComplete="given-name" {...register('displayName')}
            className="w-full bg-stone-800 border border-stone-600 rounded-xl px-4 py-2.5 text-amber-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 text-sm"
            placeholder="Ton prénom" />
          {errors.displayName && <p className="text-red-400 text-xs mt-1">{errors.displayName.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-amber-200 mb-1">Email</label>
          <input id="email" type="email" autoComplete="email" {...register('email')}
            className="w-full bg-stone-800 border border-stone-600 rounded-xl px-4 py-2.5 text-amber-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 text-sm"
            placeholder="ton@email.com" />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm text-amber-200 mb-1">Mot de passe</label>
          <input id="password" type="password" autoComplete="new-password" {...register('password')}
            className="w-full bg-stone-800 border border-stone-600 rounded-xl px-4 py-2.5 text-amber-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 text-sm"
            placeholder="8 caractères min., 1 maj., 1 chiffre" />
          {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm text-amber-200 mb-1">Confirmer le mot de passe</label>
          <input id="confirmPassword" type="password" autoComplete="new-password" {...register('confirmPassword')}
            className="w-full bg-stone-800 border border-stone-600 rounded-xl px-4 py-2.5 text-amber-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 text-sm"
            placeholder="••••••••" />
          {errors.confirmPassword && <p className="text-red-400 text-xs mt-1">{errors.confirmPassword.message}</p>}
        </div>

        {serverError && <p className="text-red-400 text-sm text-center">{serverError}</p>}

        <Button type="submit" size="lg" className="w-full" disabled={loading}>
          {loading ? 'Création...' : 'Créer mon compte'}
        </Button>
      </form>

      <div className="relative my-5">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-stone-700" /></div>
        <div className="relative flex justify-center"><span className="bg-stone-900 px-3 text-xs text-stone-500">ou</span></div>
      </div>

      <Button variant="secondary" size="lg" className="w-full" onClick={handleGoogle} disabled={loading}>
        <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
        Continuer avec Google
      </Button>

      <p className="text-center text-sm text-stone-500 mt-5">
        Déjà un compte ?{' '}
        <Link href="/connexion" className="text-amber-400 hover:underline">Se connecter</Link>
      </p>
    </div>
  )
}
