import React from 'react'
import { motion } from 'framer-motion'
import { Code, Brain, Globe, Wrench } from 'lucide-react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: ['Python', 'Java', 'C++', 'JavaScript', 'GoLang', 'SQL', 'Shell'],
    },
    {
      icon: Globe,
      title: 'Web & Backend',
      skills: ['REST API', 'GraphQL', 'HTML', 'CSS', 'AWS'],
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: ['RAG', 'Vector Databases', 'LLM Integration', 'Deep Learning', 'Echo State Networks'],
    },
    {
      icon: Wrench,
      title: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Linux'],
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
