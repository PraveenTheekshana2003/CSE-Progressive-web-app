import { Link } from 'react-router-dom'

function ProfilePage() {
  return (
    <div className="p-5 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">Profile</h1>

      {/* Profile Card */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 mb-6">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 text-xl font-bold flex items-center justify-center border border-emerald-500/20">
            IN
          </div>
          <div>
            <p className="font-semibold text-lg text-white">Investor</p>
            <p className="text-sm text-slate-400">Beginner • Balanced Risk</p>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-400">Available Capital</span>
            <span className="font-medium text-white">LKR 500,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Risk Tolerance</span>
            <span className="font-medium text-white">Moderate</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Preferred Horizon</span>
            <span className="font-medium text-white">Mid-term</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Preferred Sectors</span>
            <span className="font-medium text-white">Banking, Diversified</span>
          </div>
        </div>
      </div>

      {/* Menu Links */}
      <div className="space-y-3">
        <Link
          to="/portfolio"
          className="block w-full bg-slate-900 border border-slate-800 text-slate-200 py-3.5 rounded-xl font-medium px-4 hover:bg-slate-800 transition"
        >
          My Portfolio & Watchlist
        </Link>
        <Link
          to="/settings"
          className="block w-full bg-slate-900 border border-slate-800 text-slate-200 py-3.5 rounded-xl font-medium px-4 hover:bg-slate-800 transition"
        >
          Settings & Preferences
        </Link>
        <Link
          to="/about"
          className="block w-full bg-slate-900 border border-slate-800 text-slate-200 py-3.5 rounded-xl font-medium px-4 hover:bg-slate-800 transition"
        >
          About & Research Info
        </Link>
      </div>
    </div>
  )
}

export default ProfilePage