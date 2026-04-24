import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/museum/Footer'
import Header from './components/museum/Header'
import ActivityPage from './pages/ActivityPage'
import DisciplinePage from './pages/DisciplinePage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#090b10]">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/disciplina/:disciplineId" element={<DisciplinePage />} />
            <Route path="/disciplina/:disciplineId/atividade/:activityId" element={<ActivityPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
