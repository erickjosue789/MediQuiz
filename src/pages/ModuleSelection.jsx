import { Link } from 'react-router-dom'
import { modules } from '../data/modules'
import { RiQuestionAnswerLine } from 'react-icons/ri'
import { LuGraduationCap, LuClipboardCheck } from 'react-icons/lu'
import { FaArrowRightLong } from 'react-icons/fa6'

function ModuleSelection() {
    return (
        <section className="space-y-8">
            <header className="space-y-3 text-center sm:text-left">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Rotación virtual</p>
                <h1 className="text-3xl font-semibold text-white sm:text-4xl">Selecciona la unidad clínica</h1>
                <p className="text-slate-300 sm:max-w-xl">
                    Elige el servicio que deseas reforzar antes de tu próxima guardia. Cada módulo combina
                    casos breves con retroalimentación inmediata para afianzar juicio clínico.
                </p>
            </header>

            <div className="grid gap-6 sm:grid-cols-2">
                {modules.map((module) => {
                    const Icon = module.icon
                    return (
                        <article
                            key={module.id}
                            className={`group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 p-6 shadow-lg ring-1 ${module.theme.ring}`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${module.theme.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                            <div className="relative flex flex-col gap-5">
                                <div className="flex items-center gap-3">
                                    <span className={`rounded-full bg-slate-900/80 p-3 text-2xl ${module.theme.accent}`}>
                                        <Icon aria-hidden="true" />
                                    </span>
                                    <div>
                                        <h2 className="text-xl font-semibold text-white">{module.title}</h2>
                                        <p className="text-sm text-slate-400">{module.description}</p>
                                    </div>
                                </div>

                                <dl className="flex flex-wrap gap-4 text-sm text-slate-300">
                                    <div className="flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/60 px-3 py-1">
                                        <LuGraduationCap className="text-lg text-slate-200" aria-hidden="true" />
                                        <span>{module.difficulty}</span>
                                    </div>
                                    <div className="flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/60 px-3 py-1">
                                        <RiQuestionAnswerLine className="text-lg text-slate-200" aria-hidden="true" />
                                        <span className="font-medium text-slate-100">{module.questions.length}</span>
                                        <span>preguntas</span>
                                    </div>
                                </dl>

                                <Link
                                    to={`/quiz/${module.id}`}
                                    className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:gap-3 hover:bg-white"
                                >
                                    Iniciar simulación
                                    <FaArrowRightLong aria-hidden="true" />
                                </Link>
                            </div>
                        </article>
                    )
                })}
                <article className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 p-6 shadow-lg ring-1 ring-fuchsia-400/50 sm:col-span-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 via-purple-500/10 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />
                    <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-1 items-center gap-4">
                            <span className="rounded-full bg-slate-900/80 p-3 text-2xl text-fuchsia-300">
                                <LuClipboardCheck aria-hidden="true" />
                            </span>
                            <div className="space-y-2">
                                <h2 className="text-xl font-semibold text-white">Modo Test Integral</h2>
                                <p className="text-sm text-slate-300">
                                    Enfréntate a 10 casos aleatorios tomados de todo el banco clínico. Sin opciones múltiples:
                                    escribe la conducta correcta y valida cuánto dominas cada servicio.
                                </p>
                                <dl className="flex flex-wrap gap-3 text-xs text-slate-400">
                                    <div className="flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/60 px-3 py-1">
                                        <span className="font-semibold text-slate-100">Todos los módulos</span>
                                    </div>
                                    <div className="flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/60 px-3 py-1">
                                        <span className="font-semibold text-slate-100">10 preguntas</span>
                                        <span>respuesta libre</span>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <Link
                            to="/test"
                            className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-fuchsia-400 px-5 py-2 text-sm font-semibold text-fuchsia-950 transition hover:bg-fuchsia-300"
                        >
                            Entrar al modo test
                            <FaArrowRightLong aria-hidden="true" />
                        </Link>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default ModuleSelection
