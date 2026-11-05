import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, ChevronRight } from 'lucide-react'
import { categories, lessons, glossary } from '../data/education'
import type { Category } from '../data/education'

export default function EducationPage() {
  const [active, setActive] = useState<Category | 'All'>('All')
  const visible = active === 'All' ? lessons : lessons.filter((l) => l.category === active)

  return (
    <div className="mx-auto w-full max-w-xl space-y-6 px-4 pb-28 pt-6">
      <header>
        <p className="text-sm text-slate-400">Learn</p>
        <h1 className="text-2xl font-bold text-white">Investor Education</h1>
      </header>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {(['All', ...categories] as const).map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-sm ${
              active === c
                ? 'border-emerald-400 bg-emerald-400/10 text-emerald-400'
                : 'border-slate-700 text-slate-300'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <section className="space-y-3">
        {visible.map((lesson) => (
          <Link
            key={lesson.id}
            to={`/education/${lesson.id}`}
            className="flex items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900 p-4"
          >
            <div className="space-y-1">
              <span className="text-xs font-medium text-emerald-400">{lesson.category}</span>
              <h2 className="font-semibold text-white">{lesson.title}</h2>
              <p className="text-sm text-slate-400">{lesson.summary}</p>
              <p className="flex items-center gap-1 text-xs text-slate-500">
                <Clock className="size-3" /> {lesson.minutes} min read
              </p>
            </div>
            <ChevronRight className="size-5 shrink-0 text-slate-500" />
          </Link>
        ))}
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-white">Glossary</h2>
        {glossary.map((g) => (
          <details key={g.term} className="rounded-xl border border-slate-800 bg-slate-900 p-3">
            <summary className="cursor-pointer font-medium text-white">{g.term}</summary>
            <p className="mt-2 text-sm text-slate-400">{g.meaning}</p>
          </details>
        ))}
      </section>

      <p className="text-xs text-slate-500">
        For education only. This is not financial advice.
      </p>
    </div>
  )
}