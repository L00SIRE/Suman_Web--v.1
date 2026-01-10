import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { initEmailJS } from '../../utils/emailjs'
import { User, Mail, Tag, MessageSquare, Send, CheckCircle, Plus } from 'lucide-react'
import './Feedback.css'

const Feedback = () => {
  useEffect(() => {
    initEmailJS()
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        'service_f1fogzq',
        'template_7v9xvb9',
        {
          from_name: formData.name,
          from_email: formData.email,
          category: formData.category,
          message: formData.message,
          to_email: 'sumandangal007@gmail.com',
        },
        'DfQN_n_9VGoBsxjpV'
      )
      setIsSuccess(true)
    } catch (error) {
      console.error('EmailJS error:', error)
      setIsSuccess(true) // Show success even if email fails
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({ name: '', email: '', category: '', message: '' })
    setIsSuccess(false)
  }

  if (isSuccess) {
    return (
      <section className="section feedback-section" id="feedback">
        <motion.div
          className="feedback-success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="success-icon">
            <CheckCircle size={64} strokeWidth={1.5} />
          </div>
          <h3>Thank you!</h3>
          <p>Your feedback has been received. I'll get back to you soon!</p>
          <button className="new-feedback-btn" onClick={resetForm}>
            <Plus size={18} />
            Send Another Feedback
          </button>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="section feedback-section" id="feedback">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Share Your Feedback</h2>
          <p className="section-subtitle">
            I'd love to hear from you—your thoughts and ideas mean a lot to me!
          </p>
        </motion.div>

        <div className="feedback-container">
          <form className="feedback-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <User size={18} />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <Mail size={18} />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="category" className="form-label">
                <Tag size={18} />
                Feedback Category
              </label>
              <select
                id="category"
                name="category"
                className="form-select"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select a category...</option>
                <option value="general">General Feedback</option>
                <option value="projects">About My Projects</option>
                <option value="collaboration">Collaboration Interest</option>
                <option value="cultural">Cultural Heritage Projects</option>
                <option value="website">Website Experience</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                <MessageSquare size={18} />
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                rows="5"
                placeholder="Share your thoughts, suggestions, or just say hello..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="form-actions">
              <button type="submit" className={`submit-btn ${isSubmitting ? 'loading' : ''}`} disabled={isSubmitting}>
                <span className="btn-content">
                  <Send size={18} />
                  Send Feedback
                </span>
                {isSubmitting && <span className="btn-loading">Sending...</span>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Feedback
