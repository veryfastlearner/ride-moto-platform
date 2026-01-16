import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Circuits from './pages/Circuits'
import CircuitDetails from './pages/CircuitDetails'
import Reservation from './pages/Reservation'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/circuits" element={<Circuits />} />
          <Route path="/circuits/:id" element={<CircuitDetails />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
