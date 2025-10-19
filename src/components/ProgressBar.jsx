function ProgressBar({ current, total }) {
  const percentage = total === 0 ? 0 : Math.round((current / total) * 100)

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs text-slate-300">
        <span>Progreso</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-900/60">
        <div
          className="h-full rounded-full bg-emerald-400 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
