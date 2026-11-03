function SettingsPage() {
  return (
    <div className="p-5 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">Settings</h1>

      <div className="space-y-6">
        {/* Account */}
        <div>
          <h2 className="text-sm font-semibold text-slate-500 mb-2 px-1">ACCOUNT</h2>
          <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
            <button className="w-full text-left px-4 py-3.5 text-slate-200 border-b border-slate-800 hover:bg-slate-800 transition">
              Edit Profile
            </button>
            <button className="w-full text-left px-4 py-3.5 text-slate-200 border-b border-slate-800 hover:bg-slate-800 transition">
              Risk Preferences
            </button>
            <button className="w-full text-left px-4 py-3.5 text-slate-200 hover:bg-slate-800 transition">
              Capital Settings
            </button>
          </div>
        </div>

        {/* Preferences */}
        <div>
          <h2 className="text-sm font-semibold text-slate-500 mb-2 px-1">PREFERENCES</h2>
          <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
            <button className="w-full text-left px-4 py-3.5 text-slate-200 border-b border-slate-800 hover:bg-slate-800 transition">
              Notifications
            </button>
            <button className="w-full text-left px-4 py-3.5 text-slate-200 hover:bg-slate-800 transition">
              Appearance
            </button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-sm font-semibold text-slate-500 mb-2 px-1">SUPPORT</h2>
          <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
            <button className="w-full text-left px-4 py-3.5 text-slate-200 hover:bg-slate-800 transition">
              About CSE Insight
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage