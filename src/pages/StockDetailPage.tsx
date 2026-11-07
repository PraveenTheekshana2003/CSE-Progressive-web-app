import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { findStock } from '../data/stocks'

const compact = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 2 })
const money = (n?: number) => (n === undefined ? undefined : n.toFixed(2))

function Stat({ label, value, wide }: { label: string; value?: string | number; wide?: boolean }) {
  return (
    <div className={`rounded-xl border border-slate-800 bg-slate-900 p-3 ${wide ? 'col-span-2' : ''}`}>
      <p className="text-xs text-slate-400">{label}</p>
      <p className="font-semibold text-white">{value ?? '—'}</p>
    </div>
  )
}

export default function StockDetailPage() {
  const { ticker } = useParams()
  const s = findStock(ticker)

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="mx-auto w-full max-w-xl space-y-5 px-4 pb-10 pt-6">
        <Link to="/explore" className="flex items-center gap-1 text-sm text-emerald-400">
          <ArrowLeft className="size-4" /> Explore
        </Link>

        {!s ? (
          <p className="text-slate-400">Company not found.</p>
        ) : (
          <>
            <header className="space-y-1">
              <p className="text-sm text-slate-400">{s.sector}</p>
              <h1 className="text-2xl font-bold text-white">
                {s.ticker} <span className="text-base font-normal text-slate-400">{s.name}</span>
              </h1>
              <p className="text-3xl font-bold text-white">LKR {s.price.toFixed(2)}</p>
              <p className={s.change >= 0 ? 'text-emerald-400' : 'text-red-400'}>
                {s.change >= 0 ? '+' : ''}
                {s.change.toFixed(2)}% today
              </p>
              <div className="flex gap-2 pt-1 text-xs">
                <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-200">{s.signal}</span>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-200">{s.liquidity} liquidity</span>
              </div>
            </header>

            <section className="space-y-2">
              <h2 className="font-semibold text-white">About</h2>
              <p className="leading-relaxed text-slate-300">{s.about}</p>
            </section>

            <section className="space-y-2">
              <h2 className="font-semibold text-white">Key figures</h2>
              <div className="grid grid-cols-2 gap-3">
                <Stat label="Open" value={money(s.open)} />
                <Stat label="High" value={money(s.high)} />
                <Stat label="Low" value={money(s.low)} />
                <Stat label="Close" value={money(s.close)} />
                <Stat label="Previous Close" value={money(s.prevClose)} />
                <Stat label="Volume" value={s.volume?.toLocaleString()} />
                <Stat label="Turnover" value={s.turnover !== undefined ? `LKR ${compact.format(s.turnover)}` : undefined} wide />
              </div>
            </section>

            <p className="text-xs leading-relaxed text-slate-500">Demo data for learning only. Not financial advice.</p>
          </>
        )}
      </div>
    </div>
  )
}