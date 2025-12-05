import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './IntroScreen.css'
import namasteImage from '../../assets/namaste.png'

const IntroScreen = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      className="intro-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 3 }}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <div className="intro-logo">
        <div className="namaste-glow"></div>
        <motion.img
          src={namasteImage}
          alt="Namaste Icon"
          className="namaste-3d"
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          whileHover={{ scale: 1.08, rotateZ: -3, rotateX: 8, rotateY: -8 }}
        />
      </div>
      <motion.div
        className="intro-text"
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <h1 className="intro-title">Suman Dangal</h1>
        <p className="intro-subtitle">
          Co-founder & Founding Engineer @ Dr. Money | Co-founder & CTO @ Saalik Tech
        </p>
      </motion.div>
    </motion.div>
  )
}

export default IntroScreen

