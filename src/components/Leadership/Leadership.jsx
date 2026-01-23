import React from 'react'
import { motion } from 'framer-motion'
import { Bot, Star, Users } from 'lucide-react'
import './Leadership.css'

const Leadership = () => {
  const leadershipRoles = [
    {
      icon: Users,
      title: 'Vice President, CS Club',
      skills: [
        'Elected in a competitive election among 50 students',
        'Organizing coding events and workshops',
        'Student leadership and mentorship',
      ],
    },
    {
      icon: Star,
      title: 'Honors Council Member',
      skills: [
        'Academic excellence advocacy',
        'Peer mentoring and support',
        'Honor code representation',
      ],
    },
    {
      icon: Bot,
      title: 'President, SWSCRC (Robotics Club)',
      skills: [
        'Led a high school robotics club with 200+ members',
        'Organized conferences and exhibitions',
        'Team innovation and technical leadership',
      ],
    },
  ]

  return (
    <section className="section leadership-section" id="leadership">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Leadership</h2>
          <p className="section-subtitle">
            Leading teams and initiatives.
          </p>
        </motion.div>

        <div className="leadership-grid">
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={index}
              className="leadership-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="leadership-icon-wrapper">
                <role.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="leadership-title">{role.title}</h3>
              <ul className="leadership-list">
                {role.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership
