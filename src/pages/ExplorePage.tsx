function ExplorePage() {
  const stocks = [
    { ticker: 'COMB', name: 'Commercial Bank of Ceylon PLC', price: '145.80', change: '+2.35%', signal: 'Bullish' },
    { ticker: 'SAMP', name: 'Sampath Bank PLC', price: '87.20', change: '-0.68%', signal: 'Neutral' },
    { ticker: 'HNB', name: 'Hatton National Bank PLC', price: '205.75', change: '+1.08%', signal: 'Bullish' },
    { ticker: 'JKH', name: 'John Keells Holdings PLC', price: '189.50', change: '+0.75%', signal: 'Bullish' },
    { ticker: 'NTB', name: 'Nations Trust Bank PLC', price: '64.80', change: '+1.42%', signal: 'Bullish' },
    { ticker: 'DFCC', name: 'DFCC Bank PLC', price: '52.30', change: '-1.13%', signal: 'Bearish' },
  ]

  return (
    <div className="p-5 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-white mb-1">Explore Stocks</h1>
      <p className="text-slate-400 text-sm mb-5">CSE listed companies</p>

      <div className="mb-5">
        <input
          type="text"
          placeholder="Search stocks, companies or tickers..."
          className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-3 mb-5">
        {['All', 'Banking', 'High Liquidity', 'Top Gainers'].map((filter) => (
          <button
            key={filter}
            className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap ${
              filter === 'All'
                ? 'bg-emerald-500 text-white'
                : 'bg-slate-900 text-slate-300 border border-slate-700'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {stocks.map((stock) => (
          <div key={stock.ticker} className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 text-slate-300 font-bold flex items-center justify-center text-sm">
                  {stock.ticker.substring(0, 2)}
                </div>
                <div>
                  <p className="font-semibold text-white">{stock.ticker}</p>
                  <p className="text-xs text-slate-400">{stock.name}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-white">LKR {stock.price}</p>
                <p className={`text-xs ${stock.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                  {stock.change}
                </p>
              </div>
            </div>
            <div className="mt-3">
              <span className={`text-xs px-2.5 py-1 rounded-full ${
                stock.signal === 'Bullish' ? 'bg-emerald-500/10 text-emerald-400' :
                stock.signal === 'Bearish' ? 'bg-red-500/10 text-red-400' : 'bg-slate-800 text-slate-400'
              }`}>
                {stock.signal}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExplorePage