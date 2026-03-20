'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useAuth } from '@/contexts/AuthContext'
import { getUserProfile } from '@/lib/firestore'
import { TROPHIES } from '@/data/trophies'
import TrophyCard from '@/components/trophies/TrophyCard'
import Button from '@/components/ui/Button'
import type { UserProfile } from '@/types'

export default function TropheesPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [profile, setProfile] = useState<UserProfile | null>(null)

  useEffect(() => {
    if (!loading && !user) router.push('/connexion')
  }, [user, loading, router])

  useEffect(() => {
    if (user) getUserProfile(user.uid).then(setProfile)
  }, [user])

  if (loading || !user) return null

  const unlocked = profile?.trophiesUnlocked ?? []

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-900 to-stone-800 px-4 py-8">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-amber-100">Trophées</h1>
            <p className="text-stone-400 text-sm">{unlocked.length} / {TROPHIES.length} débloqués</p>
          </div>
          <Link href="/niveaux"><Button variant="ghost" size="sm">← Niveaux</Button></Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {TROPHIES.map((trophy, i) => (
            <TrophyCard
              key={trophy.id}
              trophy={trophy}
              unlocked={unlocked.includes(trophy.id)}
              index={i}
            />
          ))}
        </div>
      </motion.div>
    </main>
  )
}
