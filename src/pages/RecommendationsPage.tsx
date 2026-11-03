function RecommendationsPage() {
  const recommendations = [
    { rank: 1, ticker: 'COMB', name: 'Commercial Bank', match: 92, expected: '+18.4%', tags: ['Risk match', 'Sector match'] },
    { rank: 2, ticker: 'HNB', name: 'Hatton National Bank', match: 87, expected: '+15.2%', tags: ['Capital fit'] },
    { rank: 3, ticker: 'JKH', name: 'John Keells Holdings', match: 81, expected: '+12.8%', tags: ['Diversification'] },
    { rank: 4, ticker: 'SAMP', name: 'Sampath Bank', match: 76, expected: '+9.5%', tags: ['Sector match'] },
    { rank: 5, ticker: 'NTB', name: 'Nations Trust Bank', match: 71, expected: '+8.1%', tags: ['Moderate risk'] },
  ]

  return (
    <div className="p-5 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-white mb-1">Recommendations</h1>
      <p className="text-slate-400 text-sm mb-6">Stocks ranked for your profile</p>

      <div className="space-y-4">
        {recommendations.map((item) => (
          <div key={item.ticker} className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500/10 text-emerald-400 font-bold flex items-center justify-center">
                  {item.rank}
                </div>
                <div>
                  <p className="font-semibold text-white">{item.ticker}</p>
                  <p className="text-xs text-slate-400">{item.name}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-emerald-400">{item.match}% Match</p>
                <p className="text-xs text-slate-400">{item.expected}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="text-[11px] px-2 py-0.5 bg-slate-800 text-slate-300 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecommendationsPage