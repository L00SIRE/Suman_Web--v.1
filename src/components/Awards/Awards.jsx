import React from 'react'
import { motion } from 'framer-motion'
import { awards } from '../../data/awards'
import { softSpring, stagger } from '../../motion'
import './Awards.css'

const Awards = () => {
  return (
    <section className="section awards-section" id="awards">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={softSpring}
        >
          <h2 className="section-title">Awards</h2>
          <p className="section-subtitle">
            Wins so far, and the rooms people trusted me to run.
          </p>
        </motion.div>

        <motion.ul
          className="awards-list"
          variants={stagger.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-8%' }}
        >
          {awards.map((item) => (
            <motion.li key={`${item.label}-${item.detail}`} variants={stagger.item}>
              <span className="award-label">{item.label}</span>
              <span className="award-detail">{item.detail}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default Awards
