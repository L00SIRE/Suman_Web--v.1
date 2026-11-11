import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { workItems } from '../../data/work'
import { softSpring, stagger } from '../../motion'
import './Work.css'

const Work = () => {
  const [hovered, setHovered] = useState(null)
  const stageRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ['start end', 'end start'],
  })
  const driftY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section className="section work-section" id="work" ref={stageRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={softSpring}
        >
          <h2 className="section-title">Work</h2>
          <p className="section-subtitle">
            Research, roles and projects, most recent first within each area.
          </p>
        </motion.div>

        <motion.div
          className="work-stage"
          style={{ y: driftY }}
          variants={stagger.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-8%' }}
          onMouseLeave={() => setHovered(null)}
        >
          {workItems.map((item) => {
            const isActive = hovered === item.id
            const isDimmed = hovered !== null && !isActive

            return (
              <motion.article
                key={item.id}
                className={`work-panel ${item.kind} ${isActive ? 'is-active' : ''} ${isDimmed ? 'is-dimmed' : ''}`}
                variants={stagger.item}
                style={{
                  '--ox': `${item.offset.x}px`,
                  '--oy': `${item.offset.y}px`,
                  '--depth': item.depth,
                }}
                onMouseEnter={() => setHovered(item.id)}
                onFocus={() => setHovered(item.id)}
                whileHover={{ y: -6, transition: softSpring }}
              >
                <div className="work-panel-top">
                  <span className="work-kind">{{ role: 'Role', research: 'Research' }[item.kind] || 'Build'}</span>
                  <span className="work-dates">{item.dates}</span>
                </div>
                <h3 className="work-title">{item.title}</h3>
                <p className="work-meta">{item.meta}</p>
                <p className="work-blurb">{item.blurb}</p>
                <div className="work-foot">
                  <p className="work-tech">{item.tech.join(' · ')}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-link"
                    >
                      Code →
                    </a>
                  )}
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Work
