import React from 'react'
import { motion } from 'framer-motion'
import { nowItems, skills } from '../../data/now'
import { softSpring } from '../../motion'
import './Now.css'

const Now = () => {
  return (
    <section className="now-strip" aria-label="Now and skills">
      <div className="container">
        <motion.dl
          className="now-list"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={softSpring}
        >
          <div className="now-row">
            <dt>Now</dt>
            <dd>{nowItems.join(' · ')}</dd>
          </div>
          <div className="now-row">
            <dt>Skills</dt>
            <dd>{skills.join(' · ')}</dd>
          </div>
        </motion.dl>
      </div>
    </section>
  )
}

export default Now
