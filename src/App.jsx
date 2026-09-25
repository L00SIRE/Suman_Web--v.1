import React from 'react'
import { MotionConfig } from 'framer-motion'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Now from './components/Now/Now'
import Work from './components/Work/Work'
import Awards from './components/Awards/Awards'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="app">
        <Header />
        <main className="main-content">
          <Hero />
          <Now />
          <Work />
          <Awards />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
