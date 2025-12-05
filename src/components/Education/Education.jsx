import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import './Education.css'

const Education = () => {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic background and qualifications.</p>
        </motion.div>

        <div className="education-container">
          <motion.div
            className="education-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="education-icon">
              <GraduationCap size={32} strokeWidth={1.5} />
            </div>
            
            <div className="education-content">
              <div className="education-header">
                <div>
                  <h3 className="institution-name">Springfield College</h3>
                  <p className="institution-location">Springfield, MA</p>
                </div>
                <span className="education-year">Expected 2028</span>
              </div>
              
              <div className="degree-info">
                <h4 className="degree-title">Bachelor of Science in Computer Science</h4>
                <p className="coursework">
                  <strong>Relevant Coursework:</strong> Data Structures, Python Programming, R for Data
                  Analysis, Computer Architecture, Calculus II, Linear Algebra.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
