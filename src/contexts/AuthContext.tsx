'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import {
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { createUserProfile } from '@/lib/firestore'

interface AuthContextValue {
  user: User | null
  loading: boolean
  loginWithEmail: (email: string, password: string) => Promise<void>
  registerWithEmail: (email: string, password: string, displayName: string) => Promise<void>
  loginWithGoogle: () => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const loginWithEmail = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
  }

  const registerWithEmail = async (email: string, password: string, displayName: string) => {
    const { user: newUser } = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(newUser, { displayName })
    await createUserProfile(newUser.uid, {
      displayName,
      email: newUser.email,
      photoURL: null,
    })
  }

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const { user: googleUser } = await signInWithPopup(auth, provider)
    await createUserProfile(googleUser.uid, {
      displayName: googleUser.displayName,
      email: googleUser.email,
      photoURL: googleUser.photoURL,
    })
  }

  const logout = async () => {
    await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, loading, loginWithEmail, registerWithEmail, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
