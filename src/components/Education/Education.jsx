import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { api } from '../../services/api'
import { GraduationCap } from 'lucide-react'
import './Education.css'

const Education = () => {
  const [education, setEducation] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadEducation = async () => {
      try {
        const data = await api.fetchEducation()
        setEducation(data)
        setLoading(false)
      } catch (err) {
        setError('Failed to load education data.')
        setLoading(false)
      }
    }
    loadEducation()
  }, [])

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

        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-text">Loading education...</p>
          </div>
        )}

        {error && (
          <div className="error-container">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="education-container">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="education-icon">
                  <GraduationCap size={32} strokeWidth={1.5} />
                </div>
                
                <div className="education-content">
                  <div className="education-header">
                    <div>
                      <h3 className="institution-name">{edu.institution}</h3>
                      <p className="institution-location">{edu.location}</p>
                    </div>
                    <span className="education-year">{edu.year}</span>
                  </div>
                  
                  <div className="degree-info">
                    <h4 className="degree-title">{edu.degree}</h4>
                    {edu.gpa && (
                      <p className="gpa-info">
                        <strong>GPA:</strong> {edu.gpa} {edu.honors && `| `}
                        {edu.honors && <strong>Honors:</strong>} {edu.honors}
                      </p>
                    )}
                    <p className="coursework">
                      <strong>Relevant Coursework:</strong> {edu.coursework}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Education
