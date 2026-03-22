import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  arrayUnion,
} from 'firebase/firestore'
import { db } from './firebase'
import type { UserProfile, GameResult } from '@/types'

// ─── Profil utilisateur ───────────────────────────────────────────────────────

export async function createUserProfile(
  uid: string,
  data: Pick<UserProfile, 'displayName' | 'email' | 'photoURL'>
): Promise<void> {
  const ref = doc(db, 'users', uid)
  const existing = await getDoc(ref)
  if (existing.exists()) return

  await setDoc(ref, {
    ...data,
    createdAt: serverTimestamp(),
    totalScore: 0,
    themesCompleted: {},
    trophiesUnlocked: [],
    gamesPlayed: 0,
    bestScores: {},
  })
}

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  const ref = doc(db, 'users', uid)
  const snap = await getDoc(ref)
  if (!snap.exists()) return null
  return { uid, ...snap.data() } as UserProfile
}

// ─── Enregistrer un résultat de partie ───────────────────────────────────────

export async function saveGameResult(uid: string, result: GameResult): Promise<void> {
  const ref = doc(db, 'users', uid)
  const snap = await getDoc(ref)
  if (!snap.exists()) return

  const profile = snap.data() as Omit<UserProfile, 'uid'>
  const currentBest = profile.bestScores?.[result.themeId]?.[result.difficulty] ?? 0
  const isNewBest = result.score > currentBest
  const won = result.livesRemaining > 0

  const updates: Record<string, unknown> = {
    gamesPlayed: (profile.gamesPlayed ?? 0) + 1,
    totalScore: (profile.totalScore ?? 0) + result.score,
  }

  if (isNewBest) {
    updates[`bestScores.${result.themeId}.${result.difficulty}`] = result.score
  }

  // Marquer la difficulté comme complétée pour ce thème si gagné
  if (won) {
    const alreadyCompleted: string[] = profile.themesCompleted?.[result.themeId] ?? []
    if (!alreadyCompleted.includes(result.difficulty)) {
      updates[`themesCompleted.${result.themeId}`] = arrayUnion(result.difficulty)
    }
  }

  if (result.newTrophies.length > 0) {
    updates.trophiesUnlocked = arrayUnion(...result.newTrophies)
  }

  await updateDoc(ref, updates)
}
