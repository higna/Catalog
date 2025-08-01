//import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Map from './components/Map'
import Signup from './components/Signup'
import Login from './components/Login'
import Users from './components/Users'
import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoutes'

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
              <Route element={<ProtectedRoute />}>
                <Route path='/map' element={<Map />} />
                <Route path='/users' element={<Users />} />
              </Route>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </Navbar>
      }
    </>
  )
}