import React from 'react'
import { motion } from 'framer-motion'
import './Interests.css'

const Interests = () => {
  const interests = [
    {
      icon: 'fa-book-open',
      title: 'Religious Studies',
      tags: ['Hindu Scriptures', 'Buddhist Texts', 'Comparative Religion', 'Sacred Literature', 'Philosophical Analysis'],
    },
    {
      icon: 'fa-chess-rook',
      title: 'Sculpture & Art Analysis',
      tags: ['Nepali Sculptures', 'Deity Iconography', 'Historical Context', 'Art Conservation', 'Cultural Symbolism'],
    },
    {
      icon: 'fa-globe-asia',
      title: 'Cultural Heritage',
      tags: ['Heritage Preservation', 'Cultural Documentation', 'Traditional Arts', 'Archaeological Research', 'Digital Archiving'],
    },
    {
      icon: 'fa-microscope',
      title: 'Innovation & Research',
      tags: ['AI Applications', 'Mathematical Modeling', 'Cross-disciplinary Research', 'Technology Innovation', 'Problem Solving'],
    },
  ]

  return (
    <section className="section interests-section" id="interests">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Cultural Interests & Passions
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Beyond technology, I'm deeply passionate about cultural heritage, religious studies, and
        artistic preservation
      </motion.p>
      <div className="skills-grid">
        {interests.map((interest, index) => (
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
              <i className={`fas ${interest.icon}`}></i>
            </div>
            <h3 className="skill-title">{interest.title}</h3>
            <div className="skill-list">
              {interest.tags.map((tag, idx) => (
                <span key={idx} className="skill-tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Interests

