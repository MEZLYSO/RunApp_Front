import { lazy } from 'react'
const BackgroundAuth = lazy(() => import('../ui/BackgroundAuth'))

function LoadingPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <BackgroundAuth />
      <section
        className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center z-1"
        aria-busy="true"
        aria-live="polite"
      >
        {/* Card */}

        <div className="w-full text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">Cargando...</h1>

          {/* Spinner + message */}
          <div className="flex flex-col items-center">
            {/* Spinner (Tailwind-only) */}
            <div className="rounded-full w-14 h-14 border-4 border-gray-200 border-t-green-600 animate-spin mb-4" aria-hidden="true"></div>

            <p className="mt-4 text-xs text-gray-400">Si tarda más de 10 segundos, intenta recargar la página.</p>
          </div>
        </div>

      </section>

    </main>
  )
}

export default LoadingPage
