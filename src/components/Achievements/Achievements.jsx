import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, GraduationCap, Handshake, Medal } from 'lucide-react'
import './Achievements.css'

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Western New England FinTech+AI Winner',
      year: '2024 - FinTech Innovation Category',
      description: 'Competition Winner - Startup Recognition',
    },
    {
      icon: Trophy,
      title: 'APCYS Winner',
      year: '2023 - Computer Science Category',
      description: 'Asia Pacific Conference of Young Scientists',
    },
    {
      icon: GraduationCap,
      title: "Dean's List",
      year: 'Fall 2024 & Summer 2025',
      description: 'Perfect 4.0 GPA - Top Academic Performer',
    },
    {
      icon: Handshake,
      title: 'Government Collaboration',
      year: '2024 - Present',
      description: 'National Archaeological Dept. & Tourism Board',
    },
    {
      icon: Medal,
      title: 'Multiple National Awards',
      year: '2023 - 2025',
      description: 'Innovation & Social Impact Recognition',
    },
  ]

  return (
    <section className="section achievements-section" id="achievements">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">
            Recognition for work and academics.
          </p>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="achievement-icon-wrapper">
                <achievement.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-year">{achievement.year}</p>
              <p className="achievement-description">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
