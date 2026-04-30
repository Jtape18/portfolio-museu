import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/museum/Footer'
import Header from './components/museum/Header'
import ActivityPage from './pages/ActivityPage'
import DisciplinePage from './pages/DisciplinePage'
import HomePage from './pages/HomePage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

function AppContent() {
  const { pathname } = useLocation()

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-[#090b10]">
        <Header />
        <main>
          <div key={pathname} className="page-enter">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/disciplina/:disciplineId" element={<DisciplinePage />} />
              <Route path="/disciplina/:disciplineId/atividade/:activityId" element={<ActivityPage />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
