import React from 'react'
import { motion } from 'framer-motion'
import './Education.css'

const Education = () => {
  return (
    <section className="section education-section" id="education">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <i className="fas fa-graduation-cap"></i> Education
      </motion.h2>
      <div className="education-container">
        <motion.div
          className="education-item"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -5 }}
        >
          <div className="education-header">
            <div className="education-institution">
              <h3>Springfield College</h3>
              <p className="education-location">Springfield, MA</p>
            </div>
            <div className="education-dates">Expected 2028</div>
          </div>
          <div className="education-degree">
            <h4>Bachelor of Science in Computer Science</h4>
          </div>
          <div className="education-details">
            <p>
              <strong>Relevant Coursework:</strong> Data Structures, Python Programming, R for Data
              Analysis, Computer Architecture, Calculus II, Linear Algebra, and more.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education

