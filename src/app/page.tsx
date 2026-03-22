'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useAuth } from '@/contexts/AuthContext'
import Button from '@/components/ui/Button'

export default function HomePage() {
  const { user, loading } = useAuth()

  return (
    <main className="min-h-screen bg-parchment flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
          className="text-6xl mb-6"
        >
          📖
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-serif text-5xl text-sepia mb-2 md:text-5xl text-3xl"
        >
          Bible Quizz
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gold text-lg mb-2 font-medium"
        >
          Connais-tu vraiment la Parole ?
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sepia-subtle text-sm mb-8 leading-relaxed"
        >
          10 niveaux · 300+ questions · Louis Segond 1910<br />
          Avance à ton rythme, dans l&apos;humilité du disciple.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-parchment-card border-l-4 border-[#A0762A] px-4 py-3 rounded-r-xl mb-8 text-left"
        >
          <p className="font-serif italic text-sepia-muted text-sm leading-relaxed">
            « Ta parole est une lampe à mes pieds, une lumière sur mon sentier. »
          </p>
          <p className="text-sepia-subtle text-xs mt-1">— Psaumes 119:105</p>
        </motion.div>

        {loading ? (
          <div className="h-12 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-[#A0762A] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : user ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="space-y-3">
            <Link href="/niveaux">
              <Button size="lg" className="w-full bg-[#A0762A] text-[#F5EFE0] hover:bg-[#7A5820] border-0">
                Continuer mon parcours →
              </Button>
            </Link>
            <p className="text-sepia-subtle text-sm">Connecté : {user.displayName ?? user.email}</p>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="space-y-3">
            <Link href="/inscription">
              <Button size="lg" className="w-full bg-[#A0762A] text-[#F5EFE0] hover:bg-[#7A5820] border-0">
                Commencer le parcours →
              </Button>
            </Link>
            <Link href="/connexion">
              <Button variant="outline" size="default" className="w-full border-[#C9A96E] text-sepia hover:bg-parchment-card">
                J&apos;ai déjà un compte
              </Button>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </main>
  )
}
