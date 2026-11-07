import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { stocks } from '../data/stocks'
import type { Signal } from '../data/stocks'

const filters = ['All', 'Banking', 'High Liquidity', 'Top Gainers'] as const
type Filter = (typeof filters)[number]

const signalStyle: Record<Signal, string> = {
  Bullish: 'bg-emerald-500/15 text-emerald-400',
  Neutral: 'bg-slate-700/60 text-slate-300',
  Bearish: 'bg-red-500/15 text-red-400',
}

export default function ExplorePage() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<Filter>('All')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = stocks.filter(
      (s) => !q || [s.ticker, s.name, s.sector].some((v) => v.toLowerCase().includes(q)),
    )
    if (filter === 'Banking') list = list.filter((s) => s.sector === 'Banking')
    if (filter === 'High Liquidity') list = list.filter((s) => s.liquidity === 'High')
    if (filter === 'Top Gainers') list = list.filter((s) => s.change > 0).sort((a, b) => b.change - a.change)
    return list
  }, [query, filter])

  return (
    <div className="mx-auto w-full max-w-xl space-y-5 px-4 pb-28 pt-6">
      <header>
        <h1 className="text-2xl font-bold text-white">Explore Stocks</h1>
        <p className="text-sm text-slate-400">CSE listed companies</p>
      </header>

      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search stocks, companies or tickers..."
          aria-label="Search stocks"
          className="w-full rounded-2xl border border-slate-800 bg-slate-900 py-3 pl-11 pr-10 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-sm ${
              filter === f ? 'border-emerald-500 bg-emerald-500 font-semibold text-slate-950' : 'border-slate-800 bg-slate-900 text-slate-300'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <p className="text-xs text-slate-500" aria-live="polite">
        {results.length} {results.length === 1 ? 'company' : 'companies'}
      </p>

      <section className="space-y-3">
        {results.map((s) => (
          <Link
            key={s.ticker}
            to={`/stock/${s.ticker}`}
            className="block space-y-3 rounded-2xl border border-slate-800 bg-slate-900 p-4 transition active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-slate-800 font-semibold text-slate-200">
                {s.ticker.slice(0, 2)}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-white">{s.ticker}</p>
                <p className="truncate text-sm text-slate-400">{s.name}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-white">LKR {s.price.toFixed(2)}</p>
                <p className={`text-sm ${s.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {s.change >= 0 ? '+' : ''}
                  {s.change.toFixed(2)}%
                </p>
              </div>
            </div>
            <span className={`inline-block rounded-full px-3 py-1 text-xs ${signalStyle[s.signal]}`}>{s.signal}</span>
          </Link>
        ))}

        {results.length === 0 && (
          <p className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center text-sm text-slate-400">
            No companies match "{query}". Try a ticker like COMB or a sector like Banking.
          </p>
        )}
      </section>
    </div>
  )
}