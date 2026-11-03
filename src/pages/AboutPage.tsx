function AboutPage() {
  return (
    <div className="p-5 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-white mb-2">About CSE Insight</h1>
      <p className="text-slate-400 text-sm mb-6">Research Prototype</p>

      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 mb-5">
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          CSE Insight is a research project focused on personalized stock suitability ranking,
          budget-aware portfolio construction, and multi-horizon forecasting for the Colombo Stock Exchange.
        </p>

        <h3 className="font-semibold text-white mb-2">Research Gaps Addressed</h3>
        <ul className="text-sm text-slate-400 space-y-2 list-disc pl-4">
          <li>CSE-specific personalized stock suitability ranking</li>
          <li>Feasible portfolio construction for small investors</li>
          <li>Horizon-specific forecasting and decision support</li>
          <li>Personalised alerts for significant price falls</li>
          <li>Explainable AI for stock predictions</li>
        </ul>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4">
        <p className="text-sm text-amber-400 font-medium mb-1">Important Disclaimer</p>
        <p className="text-xs text-amber-200/80 leading-relaxed">
          This is a research prototype developed for academic purposes only.
          It does not constitute financial advice. Always consult a licensed financial advisor
          before making investment decisions. Past performance is not indicative of future results.
        </p>
      </div>
    </div>
  )
}

export default AboutPage