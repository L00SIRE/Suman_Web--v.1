import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header/Header'
import IntroScreen from './components/IntroScreen/IntroScreen'
import StarsBackground from './components/StarsBackground/StarsBackground'
import Hero from './components/Hero/Hero'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Leadership from './components/Leadership/Leadership'
import Achievements from './components/Achievements/Achievements'
import Interests from './components/Interests/Interests'
import Contact from './components/Contact/Contact'
import Resume from './components/Resume/Resume'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <IntroScreen />
        <Header />
        <main className="main-content">
          <Hero />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Leadership />
          <Achievements />
          <Interests />
          <Contact />
          <Resume />
        </main>
        <Footer />
        <Analytics />
      </div>
    </ThemeProvider>
  )
}

export default App

