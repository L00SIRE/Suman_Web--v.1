import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { api } from '../../services/api'
import { Folder, ExternalLink, Github } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await api.fetchProjects()
        setProjects(data)
        setLoading(false)
      } catch (err) {
        setError('Failed to load projects. Please try again later.')
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Selected Work</h2>
          <p className="section-subtitle">
            A collection of projects exploring AI, finance, and culture.
          </p>
        </motion.div>

        <div className="projects-grid">
          {loading && (
            <div className="loading-container">
              <div className="spinner"></div>
              <p className="loading-text">Loading projects...</p>
            </div>
          )}

          {error && (
            <div className="error-container">
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="project-top">
                <div className="folder-icon">
                  <Folder size={40} strokeWidth={1.5} />
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repo">
                      <Github size={20} />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech-list">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
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

export default Projects
