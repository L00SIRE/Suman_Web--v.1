// Create twinkling stars
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 150;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Random size
        const size = Math.random() * 3 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        // Random animation delay
        star.style.animationDelay = Math.random() * 2 + 's';
        
        // Random animation duration
        star.style.animationDuration = (Math.random() * 3 + 1) + 's';
        
        starsContainer.appendChild(star);
    }
}

// Theme toggle function
let isDarkTheme = true;

function toggleTheme() {
    const body = document.body;
    const themeButton = document.querySelector('.theme-toggle');
    
    if (isDarkTheme) {
        // Switch to light theme
        body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        body.style.color = '#333';
        themeButton.textContent = '🌙';
        
        // Update section backgrounds for light theme
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.style.background = 'rgba(255, 255, 255, 0.1)';
        });
        
        isDarkTheme = false;
    } else {
        // Switch to dark theme
        body.style.background = '#000';
        body.style.color = 'white';
        themeButton.textContent = '☀️';
        
        // Reset section backgrounds
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.style.background = 'transparent';
        });
        
        isDarkTheme = true;
    }
}

// Smooth scrolling for navigation
function smoothScroll(target) {
    const element = document.querySelector(target);
    const headerHeight = document.querySelector('.header').offsetHeight;
    const elementPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    });
}

// Scroll-triggered animations
function handleScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    const skillItems = document.querySelectorAll('.skill-item');
    const achievementItems = document.querySelectorAll('.achievement-item');
    const projectCards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Trigger skill level animations
                if (entry.target.classList.contains('skill-item')) {
                    const skillLevel = entry.target.querySelector('.skill-level');
                    if (skillLevel) {
                        skillLevel.style.animation = 'fillSkill 2s ease-out';
                    }
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe elements for animations
    [...sections, ...skillItems, ...achievementItems, ...projectCards].forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// Enhanced star interaction with mouse movement
function enhanceStarInteraction() {
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX / window.innerWidth;
        mouseY = e.clientY / window.innerHeight;
    });
    
    setInterval(() => {
        const stars = document.querySelectorAll('.star');
        stars.forEach((star, index) => {
            if (index % 8 === 0) { // Affect every 8th star for better performance
                const speed = 0.3 + (index % 3) * 0.1;
                const x = (mouseX - 0.5) * speed * 20;
                const y = (mouseY - 0.5) * speed * 20;
                
                star.style.transform = `translate(${x}px, ${y}px)`;
            }
        });
    }, 50);
}

// Navigation highlight on scroll
function handleNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Add typing animation to hero section
function addTypingAnimation() {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const text = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        heroSubtitle.style.borderRight = '2px solid #4ade80';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroSubtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    heroSubtitle.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        setTimeout(typeWriter, 6000); // Start after intro animation
    }
}

// Animate skill progress bars
function animateSkillBars() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const level = entry.target.getAttribute('data-level');
                entry.target.style.setProperty('--level', level + '%');
                
                // Add a subtle pulse animation
                setTimeout(() => {
                    entry.target.style.animation = 'pulse 0.5s ease-in-out';
                }, 500);
            }
        });
    }, { threshold: 0.5 });
    
    skillLevels.forEach(skill => observer.observe(skill));
}

// Add parallax effect to hero section
function addParallaxEffect() {
    const heroSection = document.querySelector('.hero-section');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        if (heroSection && scrolled < window.innerHeight) {
            heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
}

// Add hover effects to project cards
function enhanceProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize all functions when page loads
window.addEventListener('load', () => {
    createStars();
    handleScrollAnimations();
    enhanceStarInteraction();
    handleNavigation();
    addTypingAnimation();
    animateSkillBars();
    addParallaxEffect();
    enhanceProjectCards();
    
    // Hide intro screen after animations
    setTimeout(() => {
        const introScreen = document.getElementById('introScreen');
        if (introScreen) {
            introScreen.style.display = 'none';
        }
    }, 5000);
});

// Add CSS animation keyframes dynamically
function addCustomAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .nav-link.active {
            background: rgba(74, 222, 128, 0.3);
            color: #4ade80;
        }
        
        .skill-level {
            overflow: hidden;
        }
        
        .section {
            scroll-margin-top: 80px;
        }
    `;
    document.head.appendChild(style);
}

// Initialize custom animations
addCustomAnimations();
