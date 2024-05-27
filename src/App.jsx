import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import WizardChat from './pages/WizardChat';
import Customers from './pages/Customers';

function App() {

 
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/customers" element={<Customers />} />
      </Routes>
    </Router>
  )
}

export default App
