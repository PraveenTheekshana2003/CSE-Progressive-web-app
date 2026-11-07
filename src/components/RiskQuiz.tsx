import { useState } from 'react'
import { RISK_LABELS } from '../types/profile'
import type { Risk } from '../types/profile'

interface Question {
  text: string
  options: { label: string; points: number }[]
}

const QUESTIONS: Question[] = [
  {
    text: 'If your investment dropped 20% in one month, what would you do?',
    options: [
      { label: 'Sell everything to avoid more loss', points: 1 },
      { label: 'Wait and see, and hold for now', points: 2 },
      { label: 'Buy more while prices are low', points: 3 },
    ],
  },
  {
    text: 'What is your main goal for investing?',
    options: [
      { label: 'Protect my money and earn a small, steady return', points: 1 },
      { label: 'Grow my money at a balanced pace', points: 2 },
      { label: 'Grow my money as much as possible', points: 3 },
    ],
  },
  {
    text: 'How long can you leave this money invested without needing it?',
    options: [
      { label: 'Less than 1 month', points: 1 },
      { label: '1 to 6 months', points: 2 },
      { label: 'More than 6 months', points: 3 },
    ],
  },
  {
    text: 'How much experience do you have with investing?',
    options: [
      { label: 'None, I am just starting', points: 1 },
      { label: 'A little, I have read or tried a bit', points: 2 },
      { label: 'Quite a lot', points: 3 },
    ],
  },
]

const RESULT_TEXT: Record<Risk, string> = {
  low: 'You prefer stability. Stocks that move less and protect your capital may suit you better.',
  moderate:
    'You accept some ups and downs for better growth. A mix of stable and growing stocks may suit you.',
  high: 'You are comfortable with big price swings for higher potential growth. Remember, higher potential return also means higher potential loss.',
}

function scoreToRisk(score: number): Risk {
  if (score <= 6) return 'low'
  if (score <= 9) return 'moderate'
  return 'high'
}

interface Props {
  onApply: (risk: Risk) => void
  onClose: () => void
}

function RiskQuiz({ onApply, onClose }: Props) {
  const [answers, setAnswers] = useState<(number | null)[]>(
    QUESTIONS.map(() => null)
  )
  const [result, setResult] = useState<Risk | null>(null)

  const allAnswered = answers.every((a) => a !== null)

  function choose(qIndex: number, points: number) {
    setAnswers((prev) => prev.map((a, i) => (i === qIndex ? points : a)))
  }

  function finish() {
    const total = answers.reduce<number>((sum, a) => sum + (a ?? 0), 0)
    setResult(scoreToRisk(total))
  }

  function retake() {
    setAnswers(QUESTIONS.map(() => null))
    setResult(null)
  }

  if (result) {
    return (
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 mb-6 space-y-4">
        <h2 className="text-lg font-semibold text-white">Your Risk Level</h2>
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-emerald-400">
            {RISK_LABELS[result]}
          </p>
        </div>
        <p className="text-sm text-slate-300">{RESULT_TEXT[result]}</p>
        <p className="text-xs text-slate-500">
          This quiz is a simple guide, not financial advice.
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => onApply(result)}
            className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold py-3 rounded-xl transition"
          >
            Use this result
          </button>
          <button
            type="button"
            onClick={retake}
            className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium py-3 rounded-xl transition"
          >
            Retake
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 mb-6 space-y-5">
      <h2 className="text-lg font-semibold text-white">Risk Quiz</h2>

      {QUESTIONS.map((q, qi) => (
        <div key={q.text}>
          <p className="text-sm font-medium text-white mb-2">
            {qi + 1}. {q.text}
          </p>
          <div className="space-y-2">
            {q.options.map((o) => (
              <button
                key={o.label}
                type="button"
                onClick={() => choose(qi, o.points)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm border transition ${
                  answers[qi] === o.points
                    ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      ))}

      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={finish}
          disabled={!allAnswered}
          className="flex-1 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-semibold py-3 rounded-xl transition"
        >
          See Result
        </button>
        <button
          type="button"
          onClick={onClose}
          className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium py-3 rounded-xl transition"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default RiskQuiz