import LoginForm from '@/components/auth/LoginForm'

export const dynamic = 'force-dynamic'
export const metadata = { title: 'Connexion — Bible Quizz' }

export default function ConnexionPage() {
  return (
    <main className="min-h-screen bg-parchment flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <p className="text-center text-4xl mb-6">📖</p>
        <LoginForm />
      </div>
    </main>
  )
}
