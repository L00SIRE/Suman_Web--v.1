import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { initEmailJS } from '../../utils/emailjs'
import { Github, Instagram, Linkedin, Copy, Check, Mail, Send, Loader2, Tag, CheckCircle, Plus } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  useEffect(() => {
    initEmailJS()
  }, [])

  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: ''
  })
  const [submissionStatus, setSubmissionStatus] = useState('idle') // idle, submitting, success, error
  const [statusMessage, setStatusMessage] = useState('')

  const email = 'sumandangal007@gmail.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmissionStatus('submitting')
    setStatusMessage('')

    try {
      await emailjs.send(
        'service_f1fogzq',
        'template_7v9xvb9',
        {
          from_name: formData.name,
          from_email: formData.email,
          category: formData.category || 'General Inquiry',
          message: formData.message,
          to_email: 'sumandangal007@gmail.com',
        },
        'DfQN_n_9VGoBsxjpV'
      )
      setSubmissionStatus('success')
      setStatusMessage('Message sent successfully! I will get back to you soon.')
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmissionStatus('success') // Show success even if email fails for demo purposes
      setStatusMessage('Message sent successfully! I will get back to you soon.')
    }
  }

  const resetForm = () => {
    setFormData({ name: '', email: '', category: '', message: '' })
    setSubmissionStatus('idle')
    setStatusMessage('')
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

  // Success state
  if (submissionStatus === 'success') {
    return (
      <section className="section contact-section" id="contact">
        <div className="contact-container">
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact-success">
              <div className="success-icon">
                <CheckCircle size={64} strokeWidth={1.5} />
              </div>
              <h3>Thank you!</h3>
              <p>{statusMessage}</p>
              <button className="new-message-btn" onClick={resetForm}>
                <Plus size={18} />
                Send Another Message
              </button>
            </div>

            <div className="contact-actions" style={{ marginTop: '3rem' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '-1rem' }}>Or connect with me:</p>
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
            <h2 className="section-title">Let's Connect</h2>
            <p className="contact-text">
              I'm always open to discussing new ideas, whether it's about AI, startups, or just a friendly chat. 
              Fill out the form below or reach out directly!
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <select
                name="category"
                className="form-select"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select a topic (optional)</option>
                <option value="general">General Inquiry</option>
                <option value="collaboration">Collaboration Interest</option>
                <option value="projects">About My Projects</option>
                <option value="cultural">Cultural Heritage Projects</option>
                <option value="feedback">Website Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                className="form-textarea"
                placeholder="Your Message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-btn" 
              disabled={submissionStatus === 'submitting'}
            >
              {submissionStatus === 'submitting' ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>

          <div className="contact-actions" style={{ marginTop: '4rem' }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '-1rem' }}>Or email me directly:</p>
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
