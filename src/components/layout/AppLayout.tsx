import { Outlet } from 'react-router-dom'
import BottomNav from './BottomNav'

function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pb-20">
      <Outlet />
      <BottomNav />
    </div>
  )
}

export default AppLayout