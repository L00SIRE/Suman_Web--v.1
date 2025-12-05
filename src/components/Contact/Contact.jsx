import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const [copied, setCopied] = useState(false)
  const email = 'sumandangal007@gmail.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const socialLinks = [
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      link: 'https://github.com/L00SIRE',
    },
    {
      icon: 'fab fa-instagram',
      label: 'Instagram',
      link: 'https://www.instagram.com/loosire__/',
    },
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/suman-dangal-007np/',
    },
  ]

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-container">
        <motion.div 
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-header">
            <h2 className="section-title">Let's Start a Conversation</h2>
            <p className="contact-text">
              I'm always open to discussing new ideas, whether it's about AI, startups, or just a friendly chat. 
              Feel free to reach out!
            </p>
          </div>

          <div className="contact-actions">
            <div className="email-wrapper">
              <a href={`mailto:${email}`} className="email-link">
                {email}
              </a>
              <button 
                className="copy-btn" 
                onClick={handleCopyEmail}
                aria-label="Copy email address"
              >
                <i className={`fas ${copied ? 'fa-check' : 'fa-copy'}`}></i>
              </button>
              {copied && <span className="copy-feedback">Copied!</span>}
            </div>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
