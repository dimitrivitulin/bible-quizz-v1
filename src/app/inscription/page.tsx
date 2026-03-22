import RegisterForm from '@/components/auth/RegisterForm'

export const dynamic = 'force-dynamic'
export const metadata = { title: 'Inscription — Bible Quizz' }

export default function InscriptionPage() {
  return (
    <main className="min-h-screen bg-parchment flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <p className="text-center text-4xl mb-6">📖</p>
        <RegisterForm />
      </div>
    </main>
  )
}
