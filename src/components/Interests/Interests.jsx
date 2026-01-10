import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Landmark, Globe, Microscope } from 'lucide-react'
import './Interests.css'

const Interests = () => {
  const interests = [
    {
      icon: BookOpen,
      title: 'Religious Studies',
      tags: ['Hindu Scriptures', 'Buddhist Texts', 'Comparative Religion', 'Sacred Literature', 'Philosophical Analysis'],
    },
    {
      icon: Landmark, // Changed from ChessRook to Landmark for Sculpture/Art
      title: 'Sculpture & Art Analysis',
      tags: ['Nepali Sculptures', 'Deity Iconography', 'Historical Context', 'Art Conservation', 'Cultural Symbolism'],
    },
    {
      icon: Globe,
      title: 'Cultural Heritage',
      tags: ['Heritage Preservation', 'Cultural Documentation', 'Traditional Arts', 'Archaeological Research', 'Digital Archiving'],
    },
    {
      icon: Microscope,
      title: 'Innovation & Research',
      tags: ['AI Applications', 'Mathematical Modeling', 'Cross-disciplinary Research', 'Technology Innovation', 'Problem Solving'],
    },
  ]

  return (
    <section className="section interests-section" id="interests">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Interests</h2>
          <p className="section-subtitle">
            Passions beyond code.
          </p>
        </motion.div>

        <div className="interests-grid">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              className="interest-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="interest-icon-wrapper">
                <interest.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="interest-title">{interest.title}</h3>
              <div className="interest-tags">
                {interest.tags.map((tag, idx) => (
                  <span key={idx} className="interest-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Interests
