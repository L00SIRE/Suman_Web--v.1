import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import resumePdf from '../../assets/resume.pdf'
import { softSpring, stagger } from '../../motion'
import './Hero.css'

const Hero = () => {
  const resumeUrl = `${resumePdf}?v=${Date.now()}`
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '16%'])

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero" id="about" ref={ref}>
      <div className="hero-media" aria-hidden="true">
        <motion.div className="hero-photo-wrap" style={{ y: photoY }}>
          <motion.img
            src="/suman-dangal.jpg?v=2"
            alt="Suman Dangal"
            className="hero-photo"
            initial={{ scale: 1.12, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ ...softSpring, duration: 1.35 }}
          />
        </motion.div>
        <div className="hero-veil" />
        <div className="hero-grain" />
        <div className="hero-frame" />
      </div>

      <motion.div
        className="hero-content"
        variants={stagger.container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="hero-brand" variants={stagger.item}>
          Suman<span className="sr-only"> Dangal</span>.
        </motion.h1>

        <motion.p className="hero-line" variants={stagger.item}>
          I build things.
          <br />
          Trying to get better.
        </motion.p>

        <motion.p className="hero-sub" variants={stagger.item}>
          I’m Suman Dangal — CS student at Springfield College, originally
          from Kathmandu. Co-founded Dr. Money with some friends, still
          building Saalik Tech back home, and I TA data structures. I like
          making stuff that actually helps people and I’m down to learn
          whatever gets me there.
        </motion.p>

        <motion.div className="hero-actions" variants={stagger.item}>
          <button type="button" className="btn btn-ghost" onClick={() => scrollTo('#work')}>
            Work
          </button>
          <a
            href="https://github.com/L00SIRE"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            GitHub
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Resume
          </a>
          <button type="button" className="btn btn-ghost" onClick={() => scrollTo('#contact')}>
            Say hi
          </button>
        </motion.div>

        <motion.p className="hero-footnote" variants={stagger.item}>
          Springfield College · Graduating 2028 · Looking for internships
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Hero
