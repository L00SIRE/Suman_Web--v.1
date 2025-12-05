import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './IntroScreen.css'
import namasteImage from '../../assets/namaste.png'

const IntroScreen = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3500) // Slightly shorter duration

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      className="intro-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.5 }}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <div className="intro-logo">
        <motion.img
          src={namasteImage}
          alt="Namaste"
          className="namaste-3d"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
      <motion.div
        className="intro-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <h1 className="intro-title">Suman Dangal</h1>
        <p className="intro-subtitle">
          Building technology for culture & finance.
        </p>
      </motion.div>
    </motion.div>
  )
}

export default IntroScreen
