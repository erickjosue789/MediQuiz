import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import { IoReload } from 'react-icons/io5'
import { modules } from '../data/modules'

function ResultsPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { moduleId } = useParams()
  const moduleInfo = modules.find((item) => item.id === moduleId)
  const answers = location.state?.answers ?? []
  const usedQuestionsFromState = location.state?.usedQuestions
  const fallbackQuestions = moduleInfo?.questions?.slice(0, answers.length || 10) ?? []
  const usedQuestions = Array.isArray(usedQuestionsFromState) && usedQuestionsFromState.length > 0
    ? usedQuestionsFromState
    : fallbackQuestions
  const totalQuestions = answers.length > 0 ? answers.length : usedQuestions.length
  const correctAnswers = answers.filter((item) => item.isCorrect).length
  const scorePercent = totalQuestions === 0 ? 0 : Math.round((correctAnswers / totalQuestions) * 100)
  const cycle = location.state?.cycle ?? 1
  const poolSize = location.state?.poolSize ?? moduleInfo?.questions.length ?? 0

  if (!moduleInfo || answers.length === 0) {
    return (
      <section className="mx-auto flex max-w-xl flex-col gap-4 text-center">
        <h1 className="text-2xl font-semibold text-white">Aún no hay resultados</h1>
        <p className="text-slate-300">
          Ingresa al cuestionario desde la página principal para registrar tus respuestas y ver el
          análisis completo.
        </p>
        <Link
          to="/"
          className="mx-auto inline-flex items-center justify-center rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white"
        >
          Volver a seleccionar módulo
        </Link>
      </section>
    )
  }

  const breakdown = usedQuestions.map((question) => {
    const answer = answers.find((item) => item.questionId === question.id)
    return {
      question,
      answered: answer?.selected,
      isCorrect: answer?.isCorrect ?? false
    }
  })

  const handleRetry = () => {
    navigate(`/quiz/${moduleInfo.id}`)
  }

  return (
    <section className="space-y-8">
      <header className="rounded-3xl border border-slate-800/60 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Resultados</p>
          <p className="text-xs text-slate-400">Ciclo #{cycle} · Banco total: {poolSize} casos</p>
        </div>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">{moduleInfo.title}</h1>
        <div className="mt-4 flex flex-wrap gap-4">
          <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-4 text-emerald-200">
            <p className="text-sm uppercase tracking-[0.2em]">Puntaje</p>
            <p className="text-3xl font-semibold">{scorePercent}%</p>
          </div>
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 px-5 py-4 text-slate-200">
            <p className="text-sm uppercase tracking-[0.2em]">Respuestas correctas</p>
            <p className="text-3xl font-semibold">
              {correctAnswers}/{totalQuestions}
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleRetry}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300"
          >
            <IoReload aria-hidden="true" />
            Repetir módulo
          </button>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-transparent px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-700 hover:text-white"
          >
            Seleccionar otro módulo
          </Link>
        </div>
      </header>

      <section className="space-y-4 rounded-3xl border border-slate-800/60 bg-slate-950/70 p-6 shadow-lg">
  <h2 className="text-lg font-semibold text-white">Análisis caso por caso</h2>
        <ol className="space-y-5">
          {breakdown.map(({ question, answered, isCorrect }, index) => (
            <li key={question.id} className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5">
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <FaCheckCircle className="mt-1 text-lg text-emerald-400" aria-hidden="true" />
                ) : (
                  <FaTimesCircle className="mt-1 text-lg text-rose-400" aria-hidden="true" />
                )}
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Caso {index + 1}</p>
                  <h3 className="text-base font-medium text-white">{question.question}</h3>
                  <div className="grid gap-2 text-sm text-slate-300">
                    <p>
                      <span className="font-semibold text-slate-100">Tu decisión: </span>
                      {answered ?? 'Sin responder'}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-100">Conducta recomendada: </span>
                      {question.answer}
                    </p>
                    <p className="text-slate-400">{question.explanation}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </section>
  )
}

export default ResultsPage
