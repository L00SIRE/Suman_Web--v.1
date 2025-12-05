import React from 'react'
import { motion } from 'framer-motion'
import './Resume.css'

const Resume = () => {
  return (
    <section className="section resume-section" id="resume">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <i className="fas fa-file-alt"></i>
        Resume
      </motion.h2>
      <div className="resume-container">
        <motion.div
          className="resume-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="section-subtitle">
            Download my complete resume to learn more about my professional journey, technical
            skills, and achievements in AI and software engineering.
          </p>
        </motion.div>

        <div className="resume-actions">
          <motion.a
            href="./resume.pdf"
            className="resume-download-btn"
            download="Suman_Dangal_Resume.pdf"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <i className="fas fa-download"></i>
            <span>Download PDF Resume</span>
            <small>Latest Version - Updated Jul 2025</small>
          </motion.a>

          <motion.a
            href="./resume.pdf"
            className="resume-view-btn"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <i className="fas fa-eye"></i>
            <span>View Online</span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Resume

