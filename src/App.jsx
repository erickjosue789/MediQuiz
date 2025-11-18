import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { PiStethoscopeFill } from 'react-icons/pi'
import ModuleSelection from './pages/ModuleSelection'
import QuizPage from './pages/QuizPage'
import ResultsPage from './pages/ResultsPage'
import TestMode from './pages/TestMode'
import TestResults from './pages/TestResults'
import TestSetup from './pages/TestSetup'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-80">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-10%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 rounded-2xl border border-slate-800/60 bg-slate-950/60 px-5 py-4 shadow-lg sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span className="rounded-full bg-emerald-400/20 p-2 text-emerald-300">
              <PiStethoscopeFill className="text-xl" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">MediQuiz</p>
              <p className="text-base font-semibold text-white">Simulador clínico</p>
            </div>
          </Link>

          <nav className="flex items-center gap-2 text-sm font-semibold text-slate-300">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded-full px-4 py-2 transition ${
                  isActive ? 'bg-slate-100 text-slate-900' : 'hover:bg-slate-900 hover:text-white'
                }`
              }
            >
              Módulos
            </NavLink>
            <NavLink
              to="/test"
              className={({ isActive }) =>
                `rounded-full px-4 py-2 transition ${
                  isActive ? 'bg-emerald-400/20 text-emerald-200' : 'hover:bg-slate-900 hover:text-white'
                }`
              }
            >
              Modo test
            </NavLink>
          </nav>
        </header>

        <main className="flex-1 py-10">
          <Routes>
            <Route index element={<ModuleSelection />} />
            <Route path="quiz/:moduleId" element={<QuizPage />} />
            <Route path="results/:moduleId" element={<ResultsPage />} />
            <Route path="test" element={<TestSetup />} />
            <Route path="test/session" element={<TestMode />} />
            <Route path="test/results" element={<TestResults />} />
          </Routes>
        </main>

        <footer className="border-t border-slate-900/60 py-6 text-center text-xs text-slate-500">
          Construido para reforzar decisiones clínicas con práctica supervisada.
        </footer>
      </div>
    </div>
  )
}

export default App
