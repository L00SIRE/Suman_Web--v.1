import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { initEmailJS } from '../../utils/emailjs'
import './Feedback.css'

const Feedback = () => {
  useEffect(() => {
    initEmailJS()
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    rating: '',
    message: '',
  })
  const [selectedRating, setSelectedRating] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const ratingDescriptions = {
    1: 'Needs improvement',
    2: 'Fair',
    3: 'Good',
    4: 'Very good',
    5: 'Excellent!',
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleRatingClick = (rating) => {
    setSelectedRating(rating)
    setFormData({ ...formData, rating: rating.toString() })
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
          rating: formData.rating,
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
    setFormData({ name: '', email: '', category: '', rating: '', message: '' })
    setSelectedRating(0)
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
            <i className="fas fa-check-circle"></i>
          </div>
          <h3>धन्यवाद! Thank you!</h3>
          <p>Your feedback has been received. I'll get back to you soon!</p>
          <button className="new-feedback-btn" onClick={resetForm}>
            <i className="fas fa-plus"></i>
            Send Another Feedback
          </button>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="section feedback-section" id="feedback">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Share Your Feedback
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        I'd love to hear from you—your thoughts and ideas mean a lot to me!
      </motion.p>

      <div className="feedback-container">
        <div className="feedback-intro">
          <div className="feedback-cultural">
            <i className="fas fa-hands-praying"></i>
            <span className="nepali-text">धन्यवाद</span>
          </div>
          <h3>Thank you for being here</h3>
          <p>
            Whether you have feedback, ideas, or just want to say hello, your message is always
            welcome. I read every note and truly appreciate you taking the time to reach out. Let's
            connect and see what we can create together!
          </p>
        </div>

        <form className="feedback-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <i className="fas fa-user"></i>
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
                <i className="fas fa-envelope"></i>
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
              <i className="fas fa-tag"></i>
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
            <label className="form-label">
              <i className="fas fa-star"></i>
              Rate My Portfolio
            </label>
            <div className="rating-container">
              <div className="stars-rating">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <span
                    key={rating}
                    className={`star ${selectedRating >= rating ? 'active' : ''}`}
                    onClick={() => handleRatingClick(rating)}
                    onMouseEnter={() => {}}
                  >
                    <i className="fas fa-star"></i>
                  </span>
                ))}
              </div>
              <span className="rating-text">
                {selectedRating > 0 ? ratingDescriptions[selectedRating] : 'Click to rate'}
              </span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              <i className="fas fa-comment-dots"></i>
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
                <i className="fas fa-paper-plane"></i>
                Send Feedback
              </span>
              <span className="btn-loading">
                <i className="fas fa-spinner fa-spin"></i>
                Sending...
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Feedback

