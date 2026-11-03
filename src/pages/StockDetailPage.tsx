import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Star, MoreVertical } from 'lucide-react'

function StockDetailPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-24">
      {/* Header */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="p-1">
          <ArrowLeft size={22} className="text-slate-300" />
        </button>

        <div className="flex-1 ml-3">
          <h1 className="font-bold text-white text-lg">COMB.N0000</h1>
          <p className="text-xs text-slate-400">Commercial Bank of Ceylon PLC</p>
        </div>

        <div className="flex items-center gap-3">
          <button>
            <Star size={20} className="text-slate-400" />
          </button>
          <button>
            <MoreVertical size={20} className="text-slate-400" />
          </button>
        </div>
      </div>

      <div className="p-5 max-w-lg mx-auto">
        {/* Price Section */}
        <div className="mb-6">
          <div className="flex items-end gap-3">
            <h2 className="text-3xl font-bold text-white">LKR 145.80</h2>
            <span className="text-emerald-400 font-medium mb-1">+2.60 (1.81%)</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">As of 23 Oct 2025, 15:25 • CSE</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button className="flex-1 py-2 rounded-lg text-sm font-medium bg-slate-800 text-slate-300">
            Overview
          </button>
          <button className="flex-1 py-2 rounded-lg text-sm font-medium bg-emerald-500 text-white">
            Forecast
          </button>
          <button className="flex-1 py-2 rounded-lg text-sm font-medium bg-slate-800 text-slate-300">
            Fit
          </button>
        </div>

        {/* Multi-Horizon Forecast */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <h3 className="font-semibold text-white">Multi-Horizon Forecast</h3>
            <span className="text-xs text-slate-500">AI-driven predictions</span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {/* Short-term */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
              <p className="text-xs text-slate-400 mb-1">Short-term</p>
              <p className="text-[11px] text-slate-500 mb-3">1-10 days</p>
              <div className="text-center mb-2">
                <div className="text-2xl text-emerald-400">↑</div>
                <p className="text-sm font-semibold text-emerald-400">Upward</p>
              </div>
              <p className="text-xs text-slate-300 text-center">+1.2% to +3.8%</p>
              <p className="text-[11px] text-slate-500 text-center mt-1">Conf: 72%</p>
            </div>

            {/* Mid-term */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
              <p className="text-xs text-slate-400 mb-1">Mid-term</p>
              <p className="text-[11px] text-slate-500 mb-3">1-3 months</p>
              <div className="text-center mb-2">
                <div className="text-2xl text-emerald-400">↑</div>
                <p className="text-sm font-semibold text-emerald-400">Upward</p>
              </div>
              <p className="text-xs text-slate-300 text-center">+6.5% to +12.5%</p>
              <p className="text-[11px] text-slate-500 text-center mt-1">Conf: 68%</p>
            </div>

            {/* Long-term */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
              <p className="text-xs text-slate-400 mb-1">Long-term</p>
              <p className="text-[11px] text-slate-500 mb-3">6-12 months</p>
              <div className="text-center mb-2">
                <div className="text-2xl text-emerald-400">↑</div>
                <p className="text-sm font-semibold text-emerald-400">Upward</p>
              </div>
              <p className="text-xs text-slate-300 text-center">+18% to +28%</p>
              <p className="text-[11px] text-slate-500 text-center mt-1">Conf: 64%</p>
            </div>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-white text-sm">Historical + Predicted Price Path</h3>
            <span className="text-xs text-slate-500">1 Year</span>
          </div>

          {/* Simple CSS Chart Placeholder */}
          <div className="h-40 flex items-end gap-1 px-2">
            {[40, 55, 45, 60, 50, 70, 65, 80, 75, 85, 78, 90].map((height, index) => (
              <div key={index} className="flex-1 flex flex-col justify-end">
                <div
                  className={`rounded-t ${index > 8 ? 'bg-emerald-500/60' : 'bg-slate-600'}`}
                  style={{ height: `${height}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-slate-500 mt-2 px-1">
            <span>Oct 24</span>
            <span>Jan 25</span>
            <span>Apr 25</span>
            <span>Jul 25</span>
            <span>Oct 25</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 py-3.5 rounded-xl border border-slate-700 text-slate-300 font-medium flex items-center justify-center gap-2">
            <Star size={18} />
            Add to Watchlist
          </button>
          <button className="flex-1 py-3.5 rounded-xl bg-emerald-500 text-white font-medium">
            Allocate Capital
          </button>
        </div>

        <p className="text-[11px] text-slate-500 text-center mt-4">
          Forecasts are not guarantees. Please assess risk carefully.
        </p>
      </div>
    </div>
  )
}

export default StockDetailPage