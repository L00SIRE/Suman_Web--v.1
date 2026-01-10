import React from 'react'
import { motion } from 'framer-motion'
import { Code, Brain, Network } from 'lucide-react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'JavaScript', 'Shell', 'C++', 'GoLang', 'SQL', 'HTML', 'CSS'],
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: ['Deep Learning', 'LLM', 'RAG', 'Semantic Search', 'Vector Database'],
    },
    {
      icon: Network,
      title: 'APIs & Cloud',
      skills: ['GraphQL', 'REST API', 'AWS'],
    },
  ]

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Tools and technologies I work with.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="skill-icon-wrapper">
                <category.icon size={32} strokeWidth={1.5} />
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
      </div>
    </section>
  )
}

export default Skills
