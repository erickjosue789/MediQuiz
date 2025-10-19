import { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { IoIosCloseCircleOutline } from "react-icons/io";

function FeedbackToast({ visible, message, duration = 6, onClose, triggerKey }) {
    const [remaining, setRemaining] = useState(duration)

    useEffect(() => {
        if (!visible) {
            return undefined
        }

        setRemaining(duration)

        const countdown = setInterval(() => {
            setRemaining((prev) => {
                if (prev <= 1) {
                    clearInterval(countdown)
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        const timeout = setTimeout(() => {
            onClose?.()
        }, duration * 1000)

        return () => {
            clearInterval(countdown)
            clearTimeout(timeout)
        }
    }, [visible, duration, triggerKey, onClose])

    if (!visible) {
        return null
    }

    const progress = duration === 0 ? 0 : Math.max(0, (remaining / duration) * 100)

    return (
        <div className="pointer-events-none fixed inset-0 flex items-end justify-end p-4 sm:p-6">
            <article className="pointer-events-auto flex max-w-xl items-center gap-4 rounded-3xl border border-rose-400/40 bg-gradient-to-r from-rose-950/95 via-rose-900/90 to-rose-800/90 px-5 py-4 text-slate-50 shadow-2xl ring-1 ring-rose-300/40 backdrop-blur">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-rose-500/20 text-rose-200">
                    <IoIosCloseCircleOutline className="text-4xl" />
                </div>

                <div className="min-w-0 flex-1 space-y-2">
                    <header className="flex items-center justify-between gap-4">
                        <div className="min-w-0">
                            <p className="text-xs uppercase tracking-[0.3em] text-rose-200/80">Respuesta correcta</p>
                            <p className="truncate text-sm text-slate-50 sm:whitespace-normal">
                                <span className="font-bold">Respuesta correcta: </span>{message}
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-rose-800/60 text-rose-100 transition hover:bg-rose-700"
                        >
                            <IoClose aria-hidden="true" />
                            <span className="sr-only">Cerrar retroalimentación</span>
                        </button>
                    </header>

                    <div className="flex items-center gap-3 text-xs text-rose-100/80">
                        <span className="whitespace-nowrap">Se cierra en {remaining}s</span>
                        <div className="h-1 flex-1 overflow-hidden rounded-full bg-rose-800/60">
                            <div
                                className="h-full bg-rose-400 transition-all duration-300 ease-linear"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default FeedbackToast
