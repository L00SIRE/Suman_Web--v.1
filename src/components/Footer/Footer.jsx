import React from 'react'
import { motion } from 'framer-motion'
import { Github, Instagram, Linkedin } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const socialLinks = [
    { icon: Github, url: 'https://github.com/L00SIRE' },
    { icon: Instagram, url: 'https://www.instagram.com/loosire__/' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/suman-dangal-007np/' },
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
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <social.icon size={20} />
          </motion.a>
        ))}
      </div>
      <div className="footer-copy">&copy; 2025 Suman Dangal. All rights reserved.</div>
    </footer>
  )
}

export default Footer
