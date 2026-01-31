import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Overview from './pages/Overview'
import Services from './pages/Services'
import Properties from './pages/Properties'
import PropertyDetail from './pages/PropertyDetail'
import Vastu from './pages/Vastu'
import About from './pages/About'
import Contact from './pages/Contact'

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  const scrollPositions = new Map()

  useEffect(() => {
    // Save current scroll position before navigating
    const handleScroll = () => {
      const contentDiv = document.querySelector('.content')
      if (contentDiv) {
        scrollPositions.set(location.pathname, contentDiv.scrollTop)
      }
    }

    const contentDiv = document.querySelector('.content')
    if (contentDiv) {
      contentDiv.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (contentDiv) {
        contentDiv.removeEventListener('scroll', handleScroll)
      }
    }
  }, [location.pathname])

  useEffect(() => {
    // Scroll to top when route changes, or restore saved position if going back
    const contentDiv = document.querySelector('.content')
    if (contentDiv) {
      const savedPosition = scrollPositions.get(location.pathname)
      if (savedPosition !== undefined) {
        contentDiv.scrollTop = savedPosition
      } else {
        contentDiv.scrollTop = 0
      }
    }
  }, [location.pathname])

  return (
    <div className="app-root">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Header onMenu={() => setSidebarOpen((s) => !s)} />
      
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/services" element={<Services />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<PropertyDetail />} />
          <Route path="/vastu" element={<Vastu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
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
