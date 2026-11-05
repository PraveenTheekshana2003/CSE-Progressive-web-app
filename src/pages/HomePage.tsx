import { Link } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'

function HomePage() {
  return (
    <div className="p-5 max-w-lg mx-auto">
      {/* Header */}
      <div className="mb-6">
        <p className="text-slate-400 text-sm">Good afternoon,</p>
        <h1 className="text-2xl font-bold text-white">Investor</h1>
        <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-medium rounded-full border border-emerald-500/20">
          Risk Profile: Balanced Growth
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="bg-slate-900 p-3 rounded-2xl border border-slate-800">
          <p className="text-xs text-slate-400 mb-1">Available Capital</p>
          <p className="font-bold text-white text-sm">LKR 500,000</p>
        </div>
        <div className="bg-slate-900 p-3 rounded-2xl border border-slate-800">
          <p className="text-xs text-slate-400 mb-1">Today's Market</p>
          <p className="font-bold text-emerald-400 text-sm">+0.82%</p>
        </div>
        <div className="bg-slate-900 p-3 rounded-2xl border border-slate-800">
          <p className="text-xs text-slate-400 mb-1">Risk Level</p>
          <p className="font-bold text-white text-sm">Balanced</p>
        </div>
      </div>

      {/* Multi-Horizon Overview */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-semibold text-white">Multi-Horizon Overview</h2>
          <span className="text-sm text-emerald-400 font-medium">View all</span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
            <p className="text-xs text-slate-400">Short-term</p>
            <p className="text-[11px] text-slate-500 mb-2">1-10 days</p>
            <p className="font-bold text-emerald-400 text-lg">BUY</p>
            <p className="text-xs text-slate-300 mt-1">COMB</p>
            <p className="text-[11px] text-slate-500 mt-1">Conf: 78%</p>
          </div>
          <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
            <p className="text-xs text-slate-400">Mid-term</p>
            <p className="text-[11px] text-slate-500 mb-2">1-3 months</p>
            <p className="font-bold text-blue-400 text-lg">HOLD</p>
            <p className="text-xs text-slate-300 mt-1">JKH</p>
            <p className="text-[11px] text-slate-500 mt-1">Conf: 72%</p>
          </div>
          <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
            <p className="text-xs text-slate-400">Long-term</p>
            <p className="text-[11px] text-slate-500 mb-2">6-12 months</p>
            <p className="font-bold text-emerald-400 text-lg">BUY</p>
            <p className="text-xs text-slate-300 mt-1">HNB</p>
            <p className="text-[11px] text-slate-500 mt-1">Conf: 81%</p>
          </div>
        </div>
      </div>

      {/* Recommended */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-semibold text-white">Recommended for You</h2>
          <Link
            to="/education"
            className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900 p-4"
          >
            <GraduationCap className="size-6 shrink-0 text-emerald-400" />
            <div>
              <p className="font-semibold text-white">Learn to invest</p>
              <p className="text-sm text-slate-400">Short lessons on the CSE, risk and signals</p>
            </div>
          </Link>
        </div>

        <div className="space-y-3">
          {[
            { ticker: 'COMB', name: 'Commercial Bank', price: '145.80', change: '+1.81%' },
            { ticker: 'JKH', name: 'John Keells Holdings', price: '189.50', change: '+0.95%' },
            { ticker: 'HNB', name: 'Hatton National Bank', price: '205.75', change: '+1.28%' },
          ].map((stock) => (
            <div key={stock.ticker} className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 font-bold flex items-center justify-center text-sm">
                  {stock.ticker.substring(0, 2)}
                </div>
                <div>
                  <p className="font-semibold text-white">{stock.ticker}</p>
                  <p className="text-xs text-slate-400">{stock.name}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-white">LKR {stock.price}</p>
                <p className="text-xs text-emerald-400">{stock.change}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage