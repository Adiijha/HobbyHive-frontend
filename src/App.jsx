import { useState } from 'react'
import './App.css'
import Header from './components/landingPage/Header'
import Hero from './components/landingPage/Hero'
import Footer from './components/landingPage/Footer'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
    <Header />
    <Routes>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/' element={<Hero/>}/>
    </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
