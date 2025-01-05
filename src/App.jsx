import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, NavLink } from 'react-router'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            margin: '10px',
            textDecoration: 'none',
            color: isActive ? 'red' : 'blue'
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            margin: '10px',
            textDecoration: 'none',
            color: isActive ? 'red' : 'blue'
          })}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            margin: '10px',
            textDecoration: 'none',
            color: isActive ? 'red' : 'blue'
          })}
        >
          Contact
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
