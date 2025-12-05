import React from 'react'
import { motion } from 'framer-motion'
import { experienceData } from '../../data/experience'
import './Experience.css'

const Experience = () => {
  return (
    <section className="section experience-section" id="experience">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <i className="fas fa-briefcase"></i> Experience
      </motion.h2>
      <div className="experience-list">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -6, scale: 1.01 }}
          >
            <div className="experience-header">
              <span className="experience-company">{exp.company}</span>
              <span className="experience-role">{exp.role}</span>
              <span className="experience-dates">{exp.dates}</span>
            </div>
            <ul className="experience-details">
              {exp.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience

