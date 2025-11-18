import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { IoChevronBack } from 'react-icons/io5'
import { FaRegCircle, FaRegDotCircle } from 'react-icons/fa'
import { modules } from '../data/modules'
import { getQuestionBatch } from '../utils/questionPool'
import ProgressBar from '../components/ProgressBar'
import FeedbackToast from '../components/FeedbackToast'

function QuizPage() {
  const { moduleId } = useParams()
  const navigate = useNavigate()
  const moduleInfo = useMemo(
    () => modules.find((item) => item.id === moduleId),
    [moduleId]
  )
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [selectedOption, setSelectedOption] = useState('')
  const [feedback, setFeedback] = useState('')
  const [toastInfo, setToastInfo] = useState({ isVisible: false, message: '', key: 0 })
  const [activeQuestions, setActiveQuestions] = useState([])
  const [metadata, setMetadata] = useState({ batchSize: 10, delivered: 0, totalPool: 0, cycle: 1 })

  useEffect(() => {
    if (!moduleInfo) {
      return
    }

    const batch = getQuestionBatch(moduleInfo.id, moduleInfo.questions, 10)
    setActiveQuestions(batch.questions)
    setMetadata(batch.metadata)
    setCurrentIndex(0)
    setAnswers([])
    setSelectedOption('')
    setFeedback('')
    setToastInfo({ isVisible: false, message: '', key: Date.now() })
  }, [moduleInfo?.id, moduleInfo])

  if (!moduleInfo) {
    return (
      <section className="mx-auto flex max-w-xl flex-col gap-4 text-center">
        <h1 className="text-2xl font-semibold text-white">No encontramos este módulo</h1>
        <p className="text-slate-300">
          Puede que el enlace haya caducado o el módulo haya sido renombrado. Regresa al catálogo y
          selecciona una ruta disponible.
        </p>
        <Link
          to="/"
          className="mx-auto inline-flex items-center justify-center rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white"
        >
          Volver al inicio
        </Link>
      </section>
    )
  }

  if (activeQuestions.length === 0) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center gap-3 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Preparando casos</p>
        <p className="text-lg text-slate-200">Organizando tu ronda clínica...</p>
      </section>
    )
  }

  const question = activeQuestions[currentIndex]
  const totalQuestions = activeQuestions.length
  const progressCurrent = Math.min(answers.length + 1, totalQuestions)

  const handleSelect = (option) => {
    setSelectedOption(option)
    setFeedback('')
  }

  const handleNextQuestion = () => {
    if (!selectedOption) {
      setFeedback('Selecciona una respuesta antes de continuar.')
      return
    }

    const isCorrect = selectedOption === question.answer
    const updatedAnswers = [
      ...answers,
      {
        questionId: question.id,
        selected: selectedOption,
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
      setSelectedOption('')
      setFeedback('')
    } else {
      navigate(`/results/${moduleInfo.id}`, {
        state: {
          answers: updatedAnswers,
          totalQuestions: totalQuestions,
          moduleTitle: moduleInfo.title,
          cycle: metadata.cycle,
          poolSize: metadata.totalPool,
          usedQuestions: activeQuestions
        }
      })
    }
  }

  const handleQuit = () => {
    navigate('/')
  }

  const handleToastClose = () => {
    setToastInfo((prev) => ({ ...prev, isVisible: false }))
  }

  return (
    <>
      <section className="space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{moduleInfo.difficulty}</p>
            <h1 className="text-3xl font-semibold text-white">{moduleInfo.title}</h1>
            <p className="text-sm text-slate-300">Caso {currentIndex + 1} de {totalQuestions}</p>
            <p className="text-xs text-slate-500">
              Ciclo clínico #{metadata.cycle} · Banco total: {metadata.totalPool} casos
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-slate-700 hover:bg-slate-900"
          >
            <IoChevronBack aria-hidden="true" />
            Cambiar módulo
          </Link>
        </div>

        <ProgressBar current={progressCurrent} total={totalQuestions} />

        <article className="space-y-6 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg">
          <header className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Caso clínico</p>
            <h2 className="text-xl font-medium text-white">{question.question}</h2>
          </header>

          {question.image && (
            <div className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/50">
              <img
                src={question.image}
                alt={question.imageAlt || 'Ilustración del caso clínico'}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <div className="grid gap-3">
            {question.options.map((option) => {
              const isSelected = option === selectedOption
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition focus:outline-none focus:ring-2 focus:ring-emerald-400/70 ${
                    isSelected
                      ? 'border-emerald-400/60 bg-emerald-400/10 text-emerald-100'
                      : 'border-slate-800/80 bg-slate-900/50 text-slate-200 hover:border-slate-700'
                  }`}
                >
                  {isSelected ? (
                    <FaRegDotCircle className="text-lg" aria-hidden="true" />
                  ) : (
                    <FaRegCircle className="text-lg" aria-hidden="true" />
                  )}
                  <span>{option}</span>
                </button>
              )
            })}
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
            {currentIndex + 1 === totalQuestions ? 'Finalizar y ver resultados' : 'Siguiente caso'}
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

export default QuizPage
