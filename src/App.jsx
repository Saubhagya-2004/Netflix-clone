import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Profile from "./pages/Profile.jsx"
import Signup from "./pages/SignUp.jsx"
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App