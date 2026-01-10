import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { api } from '../../services/api'
import { Briefcase, Calendar } from 'lucide-react'
import './Experience.css'

const Experience = () => {
  const [experience, setExperience] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadExperience = async () => {
      try {
        const data = await api.fetchExperience()
        setExperience(data)
        setLoading(false)
      } catch (err) {
        setError('Failed to load experience data.')
        setLoading(false)
      }
    }
    loadExperience()
  }, [])

  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience & Research</h2>
          <p className="section-subtitle">
            My professional journey and academic research.
          </p>
        </motion.div>

        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-text">Loading experience...</p>
          </div>
        )}

        {error && (
          <div className="error-container">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="experience-list">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="experience-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="experience-main">
                  <div className="experience-header">
                    <h3 className="experience-role">{exp.role}</h3>
                    <span className="experience-company">@ {exp.company}</span>
                  </div>
                  <div className="experience-meta">
                    <Calendar size={16} className="meta-icon" />
                    <span>{exp.dates}</span>
                  </div>
                </div>
                
                <ul className="experience-details">
                  {exp.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Experience
