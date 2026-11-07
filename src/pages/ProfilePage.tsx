import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProfileForm from '../components/ProfileForm'
import { HORIZON_LABELS, RISK_LABELS, DEFAULT_PROFILE } from '../types/profile'
import type { InvestorProfile } from '../types/profile'
import { loadProfile, saveProfile, resetProfile } from '../utils/profileStorage'

function ProfilePage() {
  const [profile, setProfile] = useState<InvestorProfile>(() => loadProfile())
  const [editing, setEditing] = useState(false)

  function handleSave(updated: InvestorProfile) {
    saveProfile(updated)
    setProfile(updated)
    setEditing(false)
  }

  function handleReset() {
    resetProfile()
    setProfile(DEFAULT_PROFILE)
  }

  return (
    <div className="p-5 pb-24 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">Profile</h1>

      {editing ? (
        <ProfileForm
          initial={profile}
          onSave={handleSave}
          onCancel={() => setEditing(false)}
        />
      ) : (
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 mb-6">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 text-xl font-bold flex items-center justify-center border border-emerald-500/20">
              IN
            </div>
            <div>
              <p className="font-semibold text-lg text-white">Investor</p>
              <p className="text-sm text-slate-400">
                Beginner • {RISK_LABELS[profile.risk]} Risk
              </p>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Available Capital</span>
              <span className="font-medium text-white">
                LKR {profile.capital.toLocaleString('en-US')}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Risk Tolerance</span>
              <span className="font-medium text-white">
                {RISK_LABELS[profile.risk]}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-slate-400">Preferred Horizon</span>
              <span className="font-medium text-white text-right">
                {HORIZON_LABELS[profile.horizon]}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-slate-400">Preferred Sectors</span>
              <span className="font-medium text-white text-right">
                {profile.sectors.join(', ')}
              </span>
            </div>
          </div>

          <div className="flex gap-3 mt-5">
            <button
              type="button"
              onClick={() => setEditing(true)}
              className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold py-2.5 rounded-xl transition"
            >
              Edit Profile
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium py-2.5 rounded-xl transition"
            >
              Reset
            </button>
          </div>
        </div>
      )}

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

      {/* Disclaimer */}
      <p className="text-xs text-slate-500 mt-6 text-center">
        This app provides decision-support information only. It is not
        personalised financial advice. Investing involves risk.
      </p>
    </div>
  )
}

export default ProfilePage