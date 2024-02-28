import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import Home  from './pages/Home'
import Projects from './pages/Projects'
import Header from './component/Header'
import Footer from './component/Footer'
import Resume from './pages/Resume'

function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/project" element={<Projects/>} />
      <Route path="/resume" element={<Resume/>} />
      


      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App