function AllocationPage() {
  return (
    <div className="p-5 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-white mb-1">Allocation Planner</h1>
      <p className="text-slate-400 text-sm mb-6">Budget-aware portfolio construction</p>

      <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 mb-5">
        <p className="text-sm text-slate-400 mb-1">Available Capital</p>
        <p className="text-2xl font-bold text-white">LKR 500,000.00</p>
      </div>

      <div className="bg-slate-900 rounded-2xl border border-slate-800 mb-5 overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-800 font-medium text-white">
          Selected Stocks
        </div>
        {[
          { ticker: 'COMB', qty: 1200, cost: '174,960' },
          { ticker: 'HNB', qty: 800, cost: '164,600' },
          { ticker: 'JKH', qty: 600, cost: '113,700' },
        ].map((item) => (
          <div key={item.ticker} className="px-4 py-3 flex justify-between items-center border-b border-slate-800/50 last:border-0">
            <div>
              <p className="font-medium text-white">{item.ticker}</p>
              <p className="text-xs text-slate-400">{item.qty} shares</p>
            </div>
            <p className="font-medium text-white">LKR {item.cost}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 mb-5 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-slate-400">Total Invested</span>
          <span className="font-medium text-white">LKR 453,260</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-400">Est. Transaction Costs</span>
          <span className="font-medium text-white">LKR 6,890</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-400">Remaining Cash</span>
          <span className="font-medium text-white">LKR 39,850</span>
        </div>
        <div className="flex justify-between text-sm pt-2 border-t border-slate-800">
          <span className="text-slate-400">Diversification Score</span>
          <span className="font-medium text-emerald-400">78/100</span>
        </div>
      </div>

      <button className="w-full bg-emerald-500 text-white py-3.5 rounded-xl font-medium active:bg-emerald-600 transition">
        Save Allocation Plan
      </button>
    </div>
  )
}

export default AllocationPage