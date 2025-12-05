import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Instagram, Linkedin, Copy, Check, Mail } from 'lucide-react'
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
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/L00SIRE',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      link: 'https://www.instagram.com/loosire__/',
    },
    {
      icon: Linkedin,
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
              <Mail size={20} className="email-icon" />
              <a href={`mailto:${email}`} className="email-link">
                {email}
              </a>
              <button 
                className="copy-btn" 
                onClick={handleCopyEmail}
                aria-label="Copy email address"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
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
                  <social.icon size={24} />
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
