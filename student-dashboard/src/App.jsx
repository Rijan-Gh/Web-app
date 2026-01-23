import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer'
import Overview from './components/Overview'
import Details from './components/Details'
import Addstudent from './components/Addstudent'
import './App.css'

const App = () => {
  const [currentPage, setCurrentPage] = useState('overview')

  console.log("Current Page:", currentPage);

  return (
    <div className="app-container">
      <div className="navbar-content">
        <Navbar />
      </div>

      <Sidebar activePage={currentPage} onNavigate={setCurrentPage} />

      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Navigate to="/overview" replace />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/details" element={<Details />} />
          <Route path="/addstudent" element={<Addstudent />} />
        </Routes>
      </div>

      {/* Footer */}
      <div className="footer-content">
        <Footer />
      </div>
    </div>
  )
}

export default App
