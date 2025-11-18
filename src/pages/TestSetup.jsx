import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LuClipboardCheck } from 'react-icons/lu'
import { modules } from '../data/modules'

const allModuleIds = modules.map((module) => module.id)

function TestSetup() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(allModuleIds)
  const [feedback, setFeedback] = useState('')

  const selectedSet = useMemo(() => new Set(selected), [selected])
  const selectionLabel = `${selected.length} de ${modules.length}`
  const nothingSelected = selected.length === 0

  const toggleModule = (moduleId) => {
    setSelected((prev) => {
      if (prev.includes(moduleId)) {
        return prev.filter((id) => id !== moduleId)
      }
      return [...prev, moduleId]
    })
    setFeedback('')
  }

  const selectAll = () => {
    setSelected(allModuleIds)
    setFeedback('')
  }

  const handleStart = () => {
    if (nothingSelected) {
      setFeedback('Selecciona al menos un módulo para iniciar el modo test.')
      return
    }

    const params = new URLSearchParams()
    params.set('modules', selected.join(','))
    navigate(`/test/session?${params.toString()}`)
  }

  return (
    <section className="space-y-8">
      <header className="space-y-3 text-center sm:text-left">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Modo test integral</p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
          <h1 className="flex items-center gap-2 text-3xl font-semibold text-white sm:text-4xl">
            <LuClipboardCheck className="text-emerald-300" aria-hidden="true" />
            Configura tu guardia
          </h1>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-xs text-slate-300">
            Seleccionados {selectionLabel}
          </span>
        </div>
        <p className="text-slate-300 sm:max-w-2xl">
          Elige qué servicios quieres incluir en el test integral. Puedes mezclar preguntas de diferentes módulos o enfocarte en uno solo.
          Selecciona al menos un módulo para continuar.
        </p>
      </header>

      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
        <span className="rounded-full border border-slate-800/80 bg-slate-900/60 px-3 py-1 font-semibold text-slate-100">
          Mínimo: 1 módulo
        </span>
        <span className="rounded-full border border-slate-800/80 bg-slate-900/60 px-3 py-1 font-semibold text-slate-100">
          Máximo: {modules.length} módulos
        </span>
        <button
          type="button"
          onClick={selectAll}
          className="rounded-full border border-slate-800 bg-transparent px-3 py-1 font-semibold text-slate-200 transition hover:border-slate-700 hover:text-white"
        >
          Seleccionar todos
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {modules.map((module) => {
          const isSelected = selectedSet.has(module.id)
          const Icon = module.icon
          return (
            <button
              key={module.id}
              type="button"
              onClick={() => toggleModule(module.id)}
              className={`group relative flex h-full flex-col gap-4 rounded-2xl border p-5 text-left transition ${
                isSelected
                  ? 'border-emerald-400/70 bg-emerald-500/5 ring-1 ring-emerald-400/40'
                  : 'border-slate-800 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-900/60'
              }`}
              aria-pressed={isSelected}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-400/5 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className={`rounded-full bg-slate-900/80 p-3 text-2xl ${module.theme.accent}`}>
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Módulo</p>
                    <h2 className="text-lg font-semibold text-white">{module.title}</h2>
                    <p className="text-xs text-slate-400">{module.description}</p>
                  </div>
                </div>
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full border text-lg transition ${
                    isSelected
                      ? 'border-emerald-400/60 bg-emerald-500/10 text-emerald-200'
                      : 'border-slate-800 bg-slate-950 text-slate-500'
                  }`}
                  aria-hidden="true"
                >
                  {isSelected ? '✓' : ''}
                </div>
              </div>
              <div className="relative flex flex-wrap gap-2 text-xs text-slate-400">
                <span className="rounded-full border border-slate-800/80 bg-slate-900/60 px-3 py-1">{module.difficulty}</span>
                <span className="rounded-full border border-slate-800/80 bg-slate-900/60 px-3 py-1">
                  {module.questions.length} preguntas
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {feedback && <p className="text-sm text-rose-400">{feedback}</p>}

      <footer className="flex flex-wrap items-center justify-between gap-3">
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-800 bg-transparent px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-700 hover:text-white"
        >
          Regresar a módulos
        </Link>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleStart}
            className="rounded-full bg-emerald-400 px-6 py-2 text-sm font-semibold text-emerald-950 shadow-lg transition hover:bg-emerald-300"
          >
            Iniciar modo test
          </button>
        </div>
      </footer>
    </section>
  )
}

export default TestSetup
