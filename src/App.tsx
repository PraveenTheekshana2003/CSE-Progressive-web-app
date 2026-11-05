import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import RecommendationsPage from './pages/RecommendationsPage'
import AllocationPage from './pages/AllocationPage'
import ProfilePage from './pages/ProfilePage'
import PortfolioPage from './pages/PortfolioPage'
import SettingsPage from './pages/SettingsPage'
import AboutPage from './pages/AboutPage'
import StockDetailPage from './pages/StockDetailPage'
import EducationPage from './pages/EducationPage'
import LessonDetailPage from './pages/LessonDetailPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/recommendations" element={<RecommendationsPage />} />
          <Route path="/allocation" element={<AllocationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/education/:lessonId" element={<LessonDetailPage />} />
        </Route>

        {/* Stock Detail without bottom navigation */}
        <Route path="/stock/:ticker" element={<StockDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App