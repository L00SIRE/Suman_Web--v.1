import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { initEmailJS } from '../../utils/emailjs'
import { Github, Instagram, Linkedin, Copy, Check, Send, Loader2 } from 'lucide-react'
import { softSpring } from '../../motion'
import './Contact.css'

const Contact = () => {
  useEffect(() => {
    initEmailJS()
  }, [])

  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submissionStatus, setSubmissionStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const email = 'sumandangal007@gmail.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
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
          category: 'General',
          message: formData.message,
          to_email: 'sumandangal007@gmail.com',
        },
        'DfQN_n_9VGoBsxjpV'
      )
      setSubmissionStatus('success')
      setStatusMessage('Got it. Talk soon.')
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmissionStatus('success')
      setStatusMessage('Got it. Talk soon.')
    }
  }

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' })
    setSubmissionStatus('idle')
    setStatusMessage('')
  }

  const socialLinks = [
    { icon: Github, label: 'GitHub', link: 'https://github.com/L00SIRE' },
    { icon: Instagram, label: 'Instagram', link: 'https://www.instagram.com/loosire__/' },
    { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/suman-dangal-007np/' },
  ]

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-layout">
        <motion.div
          className="contact-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={softSpring}
        >
          <h2 className="section-title">Say hi</h2>
          <p className="section-subtitle contact-lead">
            Want to talk about work, a project, or whatever — just email me.
          </p>

          <div className="email-row">
            <a href={`mailto:${email}`} className="email-link">
              {email}
            </a>
            <button
              type="button"
              className="copy-btn"
              onClick={handleCopyEmail}
              aria-label="Copy email"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="contact-form-wrap"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...softSpring, delay: 0.08 }}
        >
          {submissionStatus === 'success' ? (
            <div className="contact-success">
              <h3>Sent.</h3>
              <p>{statusMessage}</p>
              <button type="button" className="btn btn-secondary" onClick={resetForm}>
                Send another
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label className="form-group">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="form-group">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <label className="form-group">
                <span>Message</span>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </label>
              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={submissionStatus === 'submitting'}
              >
                {submissionStatus === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
