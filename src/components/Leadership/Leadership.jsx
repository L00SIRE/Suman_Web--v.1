import React from 'react'
import { motion } from 'framer-motion'
import './Leadership.css'

const Leadership = () => {
  const leadershipRoles = [
    {
      icon: 'fa-robot',
      title: 'President, SWSCRC',
      skills: [
        'Led a high school robotics club with 200+ members',
        'Organized conferences and exhibitions',
        'Team innovation',
      ],
    },
    {
      icon: 'fa-star',
      title: 'General Secretary, SWSCAAC',
      skills: [
        'Managed astronomical outreach programs',
        'Telescope and deep sky observation',
        'Science communication',
      ],
    },
    {
      icon: 'fa-users',
      title: 'Vice President, Springfield College Computer Science Club',
      skills: [
        'Elected in a competitive election among 50 students',
        'Student leadership',
      ],
    },
  ]

  return (
    <section className="section leadership-section" id="leadership">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Leadership
      </motion.h2>
      <div className="skills-grid">
        {leadershipRoles.map((role, index) => (
          <motion.div
            key={index}
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="skill-icon">
              <i className={`fas ${role.icon}`}></i>
            </div>
            <h3 className="skill-title">{role.title}</h3>
            <div className="skill-list">
              {role.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Leadership

