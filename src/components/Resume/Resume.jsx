import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Download, Eye } from 'lucide-react'
import './Resume.css'
import resumePdf from '../../assets/resume.pdf'

const Resume = () => {
  // Add timestamp for cache busting
  const resumeUrl = `${resumePdf}?v=${Date.now()}`
  
  return (
    <section className="section resume-section" id="resume">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle">
            My professional journey in detail.
          </p>
        </motion.div>

        <div className="resume-container">
          <div className="resume-actions">
            <motion.a
              href={resumeUrl}
              className="resume-btn primary"
              download="Suman_Dangal_Resume.pdf"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Download size={24} />
              <span>Download PDF</span>
              <small>Updated Jan 2026</small>
            </motion.a>

            <motion.a
              href={resumeUrl}
              className="resume-btn secondary"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <Eye size={24} />
              <span>View Online</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
