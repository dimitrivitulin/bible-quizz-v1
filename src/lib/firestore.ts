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
  if (existing.exists()) return // Ne pas écraser un profil existant

  await setDoc(ref, {
    ...data,
    createdAt: serverTimestamp(),
    totalScore: 0,
    levelsCompleted: [],
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
  const currentBest = profile.bestScores?.[result.levelId] ?? 0
  const isNewBest = result.score > currentBest

  const updates: Record<string, unknown> = {
    gamesPlayed: (profile.gamesPlayed ?? 0) + 1,
    totalScore: (profile.totalScore ?? 0) + result.score,
  }

  if (isNewBest) {
    updates[`bestScores.${result.levelId}`] = result.score
  }

  // Marquer le niveau comme complété si gagné
  if (result.livesRemaining > 0 && !profile.levelsCompleted?.includes(result.levelId)) {
    updates.levelsCompleted = arrayUnion(result.levelId)
  }

  // Débloquer les nouveaux trophées
  if (result.newTrophies.length > 0) {
    updates.trophiesUnlocked = arrayUnion(...result.newTrophies)
  }

  await updateDoc(ref, updates)
}
