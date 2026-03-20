'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useAuth } from '@/contexts/AuthContext'
import Button from '@/components/ui/Button'

export default function HomePage() {
  const { user, loading } = useAuth()

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 flex flex-col items-center justify-center px-6 text-center">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-md"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
          className="text-7xl mb-6"
        >
          📖
        </motion.div>

        <h1 className="text-4xl font-bold text-amber-100 mb-2">Bible Quizz</h1>
        <p className="text-amber-400/80 text-lg mb-2">Connais-tu vraiment la Parole ?</p>
        <p className="text-stone-400 text-sm mb-10 leading-relaxed">
          10 niveaux · 300+ questions · Louis Segond<br />
          Avance à ton rythme, dans l&apos;humilité du disciple.
        </p>

        {loading ? (
          <div className="h-12 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : user ? (
          <div className="space-y-3">
            <Link href="/niveaux"><Button size="lg" className="w-full">Continuer mon parcours →</Button></Link>
            <p className="text-stone-500 text-sm">Connecté : {user.displayName ?? user.email}</p>
          </div>
        ) : (
          <div className="space-y-3">
            <Link href="/inscription"><Button size="lg" className="w-full">Commencer le parcours →</Button></Link>
            <Link href="/connexion"><Button variant="ghost" size="md" className="w-full">J&apos;ai déjà un compte</Button></Link>
          </div>
        )}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 text-xs text-stone-600 italic px-6 text-center max-w-sm"
      >
        « Ta parole est une lampe à mes pieds, une lumière sur mon sentier. » — Psaumes 119:105
      </motion.p>
    </main>
  )
}
