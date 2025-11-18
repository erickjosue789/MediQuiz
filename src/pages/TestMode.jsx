import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IoChevronBack } from 'react-icons/io5'
import { PiExamFill } from 'react-icons/pi'
import { modules } from '../data/modules'
import { getQuestionBatch } from '../utils/questionPool'
import ProgressBar from '../components/ProgressBar'
import FeedbackToast from '../components/FeedbackToast'

const GLOBAL_POOL_KEY = 'global-test-mode'

const buildQuestionPool = (selectedModules) =>
  selectedModules.flatMap((module) =>
    module.questions.map((question) => ({
      ...question,
      options: [...question.options],
      moduleId: module.id,
      moduleTitle: module.title,
      moduleDifficulty: module.difficulty
    }))
  )

const normalizeText = (value = '') =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

function TestMode() {
  const navigate = useNavigate()
  const location = useLocation()

  const selectedModuleIds = useMemo(() => {
    const params = new URLSearchParams(location.search)
    const paramValue = params.get('modules')
    const availableIds = new Set(modules.map((module) => module.id))

    if (!paramValue) {
      return modules.map((module) => module.id)
    }

    const parsedIds = paramValue
      .split(',')
      .map((value) => value.trim())
      .filter(Boolean)
      .filter((id) => availableIds.has(id))

    return parsedIds.length > 0 ? parsedIds : modules.map((module) => module.id)
  }, [location.search])

  const selectedModules = useMemo(
    () => modules.filter((module) => selectedModuleIds.includes(module.id)),
    [selectedModuleIds]
  )

  const questionPoolKey = useMemo(
    () => `${GLOBAL_POOL_KEY}:${[...selectedModuleIds].sort().join('|')}`,
    [selectedModuleIds]
  )

  const questionPool = useMemo(() => buildQuestionPool(selectedModules), [selectedModules])
  const [activeQuestions, setActiveQuestions] = useState([])
  const [metadata, setMetadata] = useState({ batchSize: 10, delivered: 0, totalPool: questionPool.length, cycle: 1 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [userAnswer, setUserAnswer] = useState('')
  const [feedback, setFeedback] = useState('')
  const [toastInfo, setToastInfo] = useState({ isVisible: false, message: '', key: 0 })

  useEffect(() => {
    if (questionPool.length === 0) {
      setActiveQuestions([])
      setMetadata((prev) => ({ ...prev, totalPool: 0, delivered: 0 }))
      return
    }

    const batch = getQuestionBatch(questionPoolKey, questionPool, 10)
    setActiveQuestions(batch.questions)
    setMetadata(batch.metadata)
    setCurrentIndex(0)
    setAnswers([])
    setUserAnswer('')
    setFeedback('')
    setToastInfo({ isVisible: false, message: '', key: Date.now() })
  }, [questionPool, questionPoolKey])

  if (questionPool.length === 0) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center gap-3 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Configura el modo test</p>
        <p className="text-lg text-slate-200">Elige al menos un módulo para generar los casos.</p>
        <Link
          to="/test"
          className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300"
        >
          Seleccionar módulos
        </Link>
      </section>
    )
  }

  if (activeQuestions.length === 0) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center gap-3 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Organizando casos</p>
        <p className="text-lg text-slate-200">Seleccionando tu ronda integral...</p>
      </section>
    )
  }

  const question = activeQuestions[currentIndex]
  const totalQuestions = activeQuestions.length
  const progressCurrent = Math.min(answers.length + 1, totalQuestions)

  const handleNextQuestion = () => {
    const trimmed = userAnswer.trim()
    if (!trimmed) {
      setFeedback('Registra tu conducta sugerida antes de continuar.')
      return
    }

    const normalizedInput = normalizeText(trimmed)
    const normalizedAnswer = normalizeText(question.answer)
    const isCorrect = normalizedInput === normalizedAnswer

    const updatedAnswers = [
      ...answers,
      {
        questionId: question.id,
        selected: trimmed,
        correct: question.answer,
        isCorrect
      }
    ]

    if (!isCorrect) {
      setToastInfo({
        isVisible: true,
        message: `${question.answer}. ${question.explanation}`,
        key: Date.now()
      })
    }

    if (currentIndex + 1 < totalQuestions) {
      setAnswers(updatedAnswers)
      setCurrentIndex((index) => index + 1)
      setUserAnswer('')
      setFeedback('')
    } else {
      navigate('/test/results', {
        state: {
          answers: updatedAnswers,
          totalQuestions,
          cycle: metadata.cycle,
          poolSize: metadata.totalPool,
          usedQuestions: activeQuestions
        }
      })
    }
  }

  const handleQuit = () => {
    navigate('/test')
  }

  const handleToastClose = () => {
    setToastInfo((prev) => ({ ...prev, isVisible: false }))
  }

  return (
    <>
      <section className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Modo test integral</p>
            <h1 className="flex items-center gap-2 text-3xl font-semibold text-white sm:text-4xl">
              <PiExamFill className="text-emerald-300" aria-hidden="true" />
              Guardias simultáneas
            </h1>
            <p className="text-sm text-slate-300">Caso {currentIndex + 1} de {totalQuestions}</p>
            <p className="text-xs text-slate-500">
              Ciclo clínico #{metadata.cycle} · Banco total: {metadata.totalPool} casos
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-400">
              {selectedModules.map((module) => (
                <span
                  key={module.id}
                  className="rounded-full border border-slate-800/80 bg-slate-900/60 px-3 py-1"
                >
                  {module.title}
                </span>
              ))}
            </div>
          </div>
          <Link
            to="/test"
            className="inline-flex items-center gap-2 self-start rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-slate-700 hover:bg-slate-900"
          >
            <IoChevronBack aria-hidden="true" />
            Ajustar módulos
          </Link>
        </div>

        <ProgressBar current={progressCurrent} total={totalQuestions} />

        <article className="space-y-6 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg">
          <header className="space-y-2">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="rounded-full border border-slate-800/80 bg-slate-900/60 px-3 py-1 font-semibold text-slate-100">
                {question.moduleTitle}
              </span>
              <span className="rounded-full border border-slate-800/80 bg-slate-900/60 px-3 py-1">{question.moduleDifficulty}</span>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Caso clínico</p>
            <h2 className="text-xl font-medium text-white">{question.question}</h2>
          </header>

          <div className="space-y-2">
            <label htmlFor="test-answer" className="text-sm font-semibold text-slate-200">
              ¿Cuál es tu conducta o diagnóstico inmediato?
            </label>
            <textarea
              id="test-answer"
              value={userAnswer}
              onChange={(event) => {
                setUserAnswer(event.target.value)
                setFeedback('')
              }}
              rows={4}
              className="w-full rounded-xl border border-slate-800/80 bg-slate-900/60 mt-2 px-4 py-3 text-sm text-slate-100 transition focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
              placeholder="Escribe tu decisión clínica con tus propias palabras"
            />
          </div>

          {feedback && <p className="text-sm text-rose-400">{feedback}</p>}
        </article>

        <footer className="flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleQuit}
            className="rounded-full border border-slate-800 bg-transparent px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-700 hover:text-white"
          >
            Terminar después
          </button>
          <button
            type="button"
            onClick={handleNextQuestion}
            className="rounded-full bg-emerald-400 px-6 py-2 text-sm font-semibold text-emerald-950 shadow-lg transition hover:bg-emerald-300"
          >
            {currentIndex + 1 === totalQuestions ? 'Finalizar y ver resultados' : 'Registrar respuesta'}
          </button>
        </footer>
      </section>

      <FeedbackToast
        visible={toastInfo.isVisible}
        message={toastInfo.message}
        duration={6}
        onClose={handleToastClose}
        triggerKey={toastInfo.key}
      />
    </>
  )
}

export default TestMode
