function PortfolioPage() {
  return (
    <div className="p-5 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-white mb-1">My Portfolio</h1>
      <p className="text-slate-400 text-sm mb-6">Paper portfolio & watchlist</p>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
          <p className="text-xs text-slate-400 mb-1">Portfolio Value</p>
          <p className="font-bold text-white">LKR 453,260</p>
        </div>
        <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
          <p className="text-xs text-slate-400 mb-1">Total Return</p>
          <p className="font-bold text-emerald-400">+8.45%</p>
        </div>
      </div>

      {/* Holdings */}
      <h2 className="font-semibold text-white mb-3">Holdings</h2>
      <div className="space-y-3 mb-8">
        {[
          { ticker: 'COMB', qty: 1200, value: '174,960', pnl: '+12,400' },
          { ticker: 'HNB', qty: 800, value: '164,600', pnl: '+8,150' },
          { ticker: 'JKH', qty: 600, value: '113,700', pnl: '+5,280' },
        ].map((item) => (
          <div
            key={item.ticker}
            className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold text-white">{item.ticker}</p>
              <p className="text-xs text-slate-400">{item.qty} shares</p>
            </div>
            <div className="text-right">
              <p className="font-medium text-white">LKR {item.value}</p>
              <p className="text-xs text-emerald-400">{item.pnl}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Watchlist */}
      <h2 className="font-semibold text-white mb-3">Watchlist</h2>
      <div className="space-y-3">
        {['SAMP', 'NTB', 'DFCC'].map((ticker) => (
          <div
            key={ticker}
            className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex justify-between items-center"
          >
            <p className="font-medium text-white">{ticker}</p>
            <span className="text-xs text-slate-500">Tap to view</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PortfolioPage