import React from 'react'
import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/L00SIRE' },
    { icon: 'fab fa-instagram', url: 'https://www.instagram.com/loosire__/' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/suman-dangal-007np/' },
  ]

  return (
    <footer className="footer">
      <div className="footer-socials">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            whileHover={{ scale: 1.15, rotate: -6 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className={social.icon}></i>
          </motion.a>
        ))}
      </div>
      <div className="footer-copy">&copy; 2025 Suman Dangal. All rights reserved.</div>
    </footer>
  )
}

export default Footer

