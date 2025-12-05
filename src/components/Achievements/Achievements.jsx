import React from 'react'
import { motion } from 'framer-motion'
import './Achievements.css'

const Achievements = () => {
  const achievements = [
    {
      icon: 'fa-trophy',
      title: 'Western New England FinTech+AI Winner',
      year: '2024 - FinTech Innovation Category',
      description: 'Competition Winner - Startup Recognition',
    },
    {
      icon: 'fa-trophy',
      title: 'APCYS Winner',
      year: '2023 - Computer Science Category',
      description: 'Asia Pacific Conference of Young Scientists',
    },
    {
      icon: 'fa-graduation-cap',
      title: "Dean's List",
      year: 'Fall 2024 & Summer 2025',
      description: 'Perfect 4.0 GPA - Top Academic Performer',
    },
    {
      icon: 'fa-handshake',
      title: 'Government Collaboration',
      year: '2024 - Present',
      description: 'National Archaeological Dept. & Tourism Board',
    },
    {
      icon: 'fa-medal',
      title: 'Multiple National Awards',
      year: '2023 - 2025',
      description: 'Innovation & Social Impact Recognition',
    },
  ]

  return (
    <section className="section achievements-section" id="achievements">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Recognition & Achievements
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Excellence recognized at national and international levels
      </motion.p>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="achievement-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <div className="achievement-icon">
              <i className={`fas ${achievement.icon}`}></i>
            </div>
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-year">{achievement.year}</p>
            <p className="achievement-description">{achievement.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Achievements

