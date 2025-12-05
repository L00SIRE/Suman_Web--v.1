import React from 'react'
import { motion } from 'framer-motion'
import { projectsData } from '../../data/projects'
import './Projects.css'

const Projects = () => {
  return (
    <section className="section projects-section" id="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Research & Projects
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        AI for social good, healthcare, and cultural innovation
      </motion.p>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -12, scale: 1.025 }}
          >
            <div className="project-header">
              <div className="project-icon">
                <i className={`fas ${project.icon}`}></i>
              </div>
              <div>
                <h3 className="project-title">{project.title}</h3>
              </div>
              <div className="project-award">{project.award}</div>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects

