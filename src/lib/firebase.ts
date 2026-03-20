import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'
import { getFirestore, type Firestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// N'initialise Firebase que côté client
function getFirebaseApp(): FirebaseApp {
  if (getApps().length === 0) return initializeApp(firebaseConfig)
  return getApp()
}

export function getFirebaseAuth(): Auth {
  return getAuth(getFirebaseApp())
}

export function getFirebaseDb(): Firestore {
  return getFirestore(getFirebaseApp())
}

// Exports directs utilisés dans les contextes client ('use client')
export const auth = typeof window !== 'undefined' ? getFirebaseAuth() : null as unknown as Auth
export const db = typeof window !== 'undefined' ? getFirebaseDb() : null as unknown as Firestore
