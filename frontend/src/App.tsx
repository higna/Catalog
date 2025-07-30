//import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'

export default function App() {
  const location = useLocation()
  const noNavbar = location.pathname === "/signup" || location.pathname === "/login"
  return (
    <>
      {
        noNavbar ?
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>

          :

          <Navbar>
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </Navbar>
      }
    </>
  )
}