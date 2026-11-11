import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-brand">Suman.</p>
        <p className="footer-note">
          Springfield College · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer
