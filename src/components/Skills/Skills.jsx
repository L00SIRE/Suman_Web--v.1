import React from 'react'
import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      icon: 'fa-code',
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'JavaScript', 'Shell', 'C++', 'GoLang', 'SQL', 'HTML', 'CSS'],
    },
    {
      icon: 'fa-brain',
      title: 'AI & Machine Learning',
      skills: ['Deep Learning', 'LLM', 'RAG', 'Semantic Search', 'Vector Database'],
    },
    {
      icon: 'fa-network-wired',
      title: 'APIs & Cloud',
      skills: ['GraphQL', 'REST API', 'AWS'],
    },
  ]

  return (
    <section className="section skills-section" id="skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Technical Skills
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        AI, software engineering, and business innovation
      </motion.p>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
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
              <i className={`fas ${category.icon}`}></i>
            </div>
            <h3 className="skill-title">{category.title}</h3>
            <div className="skill-list">
              {category.skills.map((skill, idx) => (
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

export default Skills

