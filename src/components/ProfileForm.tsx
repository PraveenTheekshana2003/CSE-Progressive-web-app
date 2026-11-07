import { useState } from 'react'
import { SECTORS, HORIZON_LABELS, RISK_LABELS } from '../types/profile'
import type { InvestorProfile, Horizon, Risk } from '../types/profile'
import RiskQuiz from './RiskQuiz'

interface Props {
  initial: InvestorProfile
  onSave: (profile: InvestorProfile) => void
  onCancel: () => void
}

function ProfileForm({ initial, onSave, onCancel }: Props) {
  const [capital, setCapital] = useState(String(initial.capital))
  const [risk, setRisk] = useState<Risk>(initial.risk)
  const [horizon, setHorizon] = useState<Horizon>(initial.horizon)
  const [sectors, setSectors] = useState<string[]>(initial.sectors)
  const [errors, setErrors] = useState<string[]>([])
  const [showQuiz, setShowQuiz] = useState(false)

  function toggleSector(sector: string) {
    setSectors((prev) =>
      prev.includes(sector) ? prev.filter((s) => s !== sector) : [...prev, sector]
    )
  }
  if (showQuiz) {
    return (
      <RiskQuiz
        onApply={(r) => {
          setRisk(r)
          setShowQuiz(false)
        }}
        onClose={() => setShowQuiz(false)}
      />
    )
  }
  function handleSubmit() {
    const problems: string[] = []
    const amount = Number(capital)

    if (!capital.trim() || Number.isNaN(amount)) {
      problems.push('Capital must be a number.')
    } else if (amount < 1000) {
      problems.push('Capital must be at least LKR 1,000.')
    }
    if (sectors.length === 0) {
      problems.push('Select at least one sector.')
    }

    setErrors(problems)
    if (problems.length > 0) return

    onSave({ capital: amount, risk, horizon, sectors })
  }

  const optionBase =
    'flex-1 py-2.5 rounded-xl text-sm font-medium border transition cursor-pointer'
  const optionOn = 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
  const optionOff = 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 mb-6 space-y-5">
      <h2 className="text-lg font-semibold text-white">Edit Profile</h2>

      {errors.length > 0 && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-300 text-sm rounded-xl p-3 space-y-1">
          {errors.map((e) => (
            <p key={e}>• {e}</p>
          ))}
        </div>
      )}

      {/* Capital */}
      <div>
        <label className="block text-sm text-slate-400 mb-2">
          Available Capital (LKR)
        </label>
        <input
          type="number"
          value={capital}
          onChange={(e) => setCapital(e.target.value)}
          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500"
        />
      </div>

      {/* Risk */}
      <div>
        <label className="block text-sm text-slate-400 mb-2">Risk Tolerance</label>
        <div className="flex gap-2">
          {(Object.keys(RISK_LABELS) as Risk[]).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRisk(r)}
              className={`${optionBase} ${risk === r ? optionOn : optionOff}`}
            >
              {RISK_LABELS[r]}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setShowQuiz(true)}
          className="mt-2 text-xs text-emerald-400 hover:text-emerald-300 underline"
        >
          Not sure? Take the risk quiz
        </button>
      </div>

      {/* Horizon */}
      <div>
        <label className="block text-sm text-slate-400 mb-2">
          Investment Horizon
        </label>
        <div className="space-y-2">
          {(Object.keys(HORIZON_LABELS) as Horizon[]).map((h) => (
            <button
              key={h}
              type="button"
              onClick={() => setHorizon(h)}
              className={`${optionBase} w-full ${horizon === h ? optionOn : optionOff}`}
            >
              {HORIZON_LABELS[h]}
            </button>
          ))}
        </div>
      </div>

      {/* Sectors */}
      <div>
        <label className="block text-sm text-slate-400 mb-2">
          Preferred Sectors
        </label>
        <div className="flex flex-wrap gap-2">
          {SECTORS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => toggleSector(s)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition ${
                sectors.includes(s) ? optionOn : optionOff
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={handleSubmit}
          className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold py-3 rounded-xl transition"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium py-3 rounded-xl transition"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default ProfileForm