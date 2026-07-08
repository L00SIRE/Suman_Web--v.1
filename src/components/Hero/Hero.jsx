import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import profileImage from "../../assets/me.png";
import resumePdf from "../../assets/resume.pdf";

const Hero = () => {
  const resumeUrl = `${resumePdf}?v=${Date.now()}`;
  
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero" id="about">
      <div className="hero-container">
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/suman-dangal.jpg"
            alt="Suman Dangal - AI Researcher and Tech Entrepreneur"
            className="hero-profile-img"
            loading="eager"
          />
        </motion.div>

        <motion.div
          className="hero-text-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="hero-greeting">Hello, I'm Suman</span>
          <h1 className="hero-headline">
            Building technology that <span className="highlight">connects</span>{" "}
            culture & finance.
          </h1>
          <p className="hero-bio">
            I believe in the power of technology to solve real problems. Whether
            it's helping people improve their financial health with{" "}
            <strong>Dr. Money</strong> or preserving Nepali culture through{" "}
            <strong>Saalik Tech</strong>, I'm driven by impact. Currently
            studying Computer Science at Springfield College.
          </p>

          <div className="hero-actions">
            <button
              onClick={() => scrollToSection("#contact")}
              className="btn btn-primary"
            >
              Let's Connect
            </button>
            <button
              onClick={() => scrollToSection("#projects")}
              className="btn btn-secondary"
            >
              See My Work
            </button>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              See My Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
