import RegisterForm from '@/components/auth/RegisterForm'

export const dynamic = 'force-dynamic'
export const metadata = { title: 'Inscription — Bible Quizz' }

export default function InscriptionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-900 to-stone-800 flex items-center justify-center px-4 py-12">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-amber-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10 w-full max-w-sm">
        <p className="text-center text-3xl mb-6">📖</p>
        <RegisterForm />
      </div>
    </main>
  )
}
