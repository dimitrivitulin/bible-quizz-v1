import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from '@/contexts/AuthContext'

export const metadata: Metadata = {
  title: 'Bible Quizz — Connais-tu la Parole ?',
  description: 'Application de quiz biblique pour approfondir ta connaissance des Écritures. 10 niveaux, 300+ questions, gamification.',
  keywords: ['bible', 'quiz', 'chrétien', 'évangélique', 'questions bibliques', 'Louis Segond'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full bg-stone-900">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
