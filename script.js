    // Enhanced Stars Creation
    function createSophisticatedStars() {
        const container = document.getElementById('starsContainer');
        const numberOfStars = 200;
        
        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Enhanced positioning with clusters
            const clusterChance = Math.random();
            let x, y;
            
            if (clusterChance < 0.3) {
                // Create star clusters
                const clusterX = Math.random() * 100;
                const clusterY = Math.random() * 100;
                x = clusterX + (Math.random() - 0.5) * 20;
                y = clusterY + (Math.random() - 0.5) * 20;
            } else {
                x = Math.random() * 100;
                y = Math.random() * 100;
            }
            
            star.style.left = Math.max(0, Math.min(100, x)) + '%';
            star.style.top = Math.max(0, Math.min(100, y)) + '%';
            
            // Variable star sizes
            const size = Math.random() * 4 + 0.5;
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            
            // Sophisticated animation timing
            star.style.animationDelay = Math.random() * 4 + 's';
            star.style.animationDuration = (Math.random() * 4 + 2) + 's';
            
            // Add subtle glow effect
            star.style.boxShadow = `0 0 ${size * 2}px currentColor`;
            
            container.appendChild(star);
        }
    }

    // Enhanced Theme Toggle with Icon Management
    let currentTheme = 'dark';
    
    function toggleTheme() {
        const body = document.body;
        const themeText = document.getElementById('themeText');
        
        body.classList.toggle('light-theme');
        
        if (body.classList.contains('light-theme')) {
            themeText.textContent = 'Dark Mode';
            currentTheme = 'light';
        } else {
            themeText.textContent = 'Light Mode';
            currentTheme = 'dark';
        }
        
        // Add smooth transition effect
        body.style.transition = 'all 0.5s ease';
    }

    // Star Rating System
    let selectedRating = 0;
    
    function initStarRating() {
        const stars = document.querySelectorAll('.star[data-rating]');
        const ratingText = document.getElementById('ratingText');
        const ratingInput = document.getElementById('rating');
        
        const ratingDescriptions = {
            1: "Needs improvement",
            2: "Fair",
            3: "Good",
            4: "Very good",
            5: "Excellent!"
        };
        
        stars.forEach(star => {
            star.addEventListener('click', () => {
                selectedRating = parseInt(star.dataset.rating);
                ratingInput.value = selectedRating;
                updateStarDisplay();
                ratingText.textContent = ratingDescriptions[selectedRating];
            });
            
            star.addEventListener('mouseenter', () => {
                const hoverRating = parseInt(star.dataset.rating);
                highlightStars(hoverRating);
                ratingText.textContent = ratingDescriptions[hoverRating];
            });
        });
        
        document.getElementById('starsRating').addEventListener('mouseleave', () => {
            updateStarDisplay();
            if (selectedRating > 0) {
                ratingText.textContent = ratingDescriptions[selectedRating];
            } else {
                ratingText.textContent = "Click to rate";
            }
        });
    }

    function highlightStars(rating) {
        const stars = document.querySelectorAll('.star[data-rating]');
        stars.forEach(star => {
            const starRating = parseInt(star.dataset.rating);
            if (starRating <= rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    function updateStarDisplay() {
        highlightStars(selectedRating);
    }

    // Feedback Form Handling
    function initFeedbackForm() {
        const form = document.getElementById('feedbackForm');
        const submitBtn = document.getElementById('submitBtn');
        const successDiv = document.getElementById('feedbackSuccess');
        
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Show loading state
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            
            // Get form data
            const formData = new FormData(form);
            const feedbackData = {
                name: formData.get('name'),
                email: formData.get('email'),
                category: formData.get('category'),
                rating: formData.get('rating'),
                message: formData.get('message'),
                timestamp: new Date().toISOString()
            };
            
            try {
                // Simulate form submission (replace with actual endpoint)
                await simulateFormSubmission(feedbackData);
                
                // Show success message
                form.style.display = 'none';
                successDiv.style.display = 'block';
                
                // Log to console for now (replace with actual backend integration)
                console.log('Feedback submitted:', feedbackData);
                
            } catch (error) {
                alert('Sorry, there was an error submitting your feedback. Please try again.');
                console.error('Feedback submission error:', error);
            } finally {
                // Remove loading state
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
            }
        });
    }

    // Simulate form submission
    function simulateFormSubmission(data) {
        return new Promise((resolve) => {
            // Simulate network delay
            setTimeout(() => {
                // In a real app, this would send data to your backend
                localStorage.setItem('latestFeedback', JSON.stringify(data));
                resolve();
            }, 2000);
        });
    }

    // Reset feedback form
    function resetFeedbackForm() {
        const form = document.getElementById('feedbackForm');
        const successDiv = document.getElementById('feedbackSuccess');
        
        form.reset();
        selectedRating = 0;
        updateStarDisplay();
        document.getElementById('ratingText').textContent = "Click to rate";
        
        form.style.display = 'block';
        successDiv.style.display = 'none';
    }

    // Enhanced Smooth Scrolling Navigation
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    // Add active state to navigation
                    updateActiveNavLink(this);
                    
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Update active navigation link
    function updateActiveNavLink(clickedLink) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        clickedLink.classList.add('active');
    }

    // Advanced Mouse Interaction with Cultural Elements
    function initMouseEffects() {
        let mouseX = 0;
        let mouseY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX / window.innerWidth;
            mouseY = e.clientY / window.innerHeight;
            
            // Parallax effect for stars
            const stars = document.querySelectorAll('.star');
            stars.forEach((star, index) => {
                if (index % 8 === 0) { // Affect every 8th star for performance
                    const speed = 0.8;
                    const x = (mouseX - 0.5) * speed;
                    const y = (mouseY - 0.5) * speed;
                    
                    star.style.transform = `translate(${x}px, ${y}px)`;
                }
            });
            
            // Cultural elements animation
            const culturalElements = document.querySelectorAll('.feedback-cultural i, .brand i');
            culturalElements.forEach(element => {
                const rect = element.getBoundingClientRect();
                const elementX = rect.left + rect.width / 2;
                const elementY = rect.top + rect.height / 2;
                
                const distance = Math.sqrt(
                    Math.pow(e.clientX - elementX, 2) + Math.pow(e.clientY - elementY, 2)
                );
                
                if (distance < 100) {
                    const intensity = (100 - distance) / 100;
                    element.style.transform = `scale(${1 + intensity * 0.2}) rotate(${intensity * 10}deg)`;
                } else {
                    element.style.transform = 'scale(1) rotate(0deg)';
                }
            });
        });
    }

    // Intersection Observer for Enhanced Animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Add staggered animation for grid items
                    if (entry.target.classList.contains('skill-category') || 
                        entry.target.classList.contains('achievement-card')) {
                        const siblings = entry.target.parentElement.children;
                        const index = Array.from(siblings).indexOf(entry.target);
                        entry.target.style.transitionDelay = `${index * 0.1}s`;
                    }
                }
            });
        }, observerOptions);
        
        // Observe elements for scroll animations
        document.querySelectorAll('.skill-category, .project-card, .achievement-card, .feedback-form').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Enhanced Header Effects with Cultural Touch
    function initHeaderEffects() {
        const header = document.querySelector('.header');
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Enhanced backdrop blur based on scroll
            if (currentScrollY > 100) {
                if (currentTheme === 'dark') {
                    header.style.background = 'rgba(0, 0, 0, 0.98)';
                } else {
                    header.style.background = 'rgba(248, 250, 252, 0.98)';
                }
                header.style.backdropFilter = 'blur(25px)';
                header.style.borderBottomColor = 'rgba(255, 255, 255, 0.2)';
            } else {
                if (currentTheme === 'dark') {
                    header.style.background = 'rgba(0, 0, 0, 0.95)';
                } else {
                    header.style.background = 'rgba(248, 250, 252, 0.95)';
                }
                header.style.backdropFilter = 'blur(20px)';
            }
            
            // Hide/show header on scroll (mobile optimization)
            if (window.innerWidth <= 768) {
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    header.style.transform = 'translateY(-100%)';
                } else {
                    header.style.transform = 'translateY(0)';
                }
            }
            
            lastScrollY = currentScrollY;
        });
    }

    // Form Validation Enhancement
    function initFormValidation() {
        const inputs = document.querySelectorAll('.form-input, .form-select, .form-textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                validateField(input);
            });
            
            input.addEventListener('input', () => {
                clearFieldError(input);
            });
        });
    }

    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        } else if (field.type === 'email' && value && !isValidEmail(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
        
        if (!isValid) {
            showFieldError(field, errorMessage);
        } else {
            clearFieldError(field);
        }
        
        return isValid;
    }

    function showFieldError(field, message) {
        clearFieldError(field);
        
        field.style.borderColor = '#ef4444';
        field.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.style.color = '#ef4444';
        errorDiv.style.fontSize = '0.8rem';
        errorDiv.style.marginTop = '0.3rem';
        errorDiv.textContent = message;
        
        field.parentNode.appendChild(errorDiv);
    }

    function clearFieldError(field) {
        field.style.borderColor = '';
        field.style.backgroundColor = '';
        
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Initialize theme based on system preference
    function initializeTheme() {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const body = document.body;
        const themeText = document.getElementById('themeText');
        
        if (!prefersDark) {
            body.classList.add('light-theme');
            themeText.textContent = 'Dark Mode';
            currentTheme = 'light';
        } else {
            currentTheme = 'dark';
            themeText.textContent = 'Light Mode';
        }
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('userThemePreference')) {
                if (e.matches) {
                    body.classList.remove('light-theme');
                    themeText.textContent = 'Light Mode';
                    currentTheme = 'dark';
                } else {
                    body.classList.add('light-theme');
                    themeText.textContent = 'Dark Mode';
                    currentTheme = 'light';
                }
            }
        });
    }

    // Cultural Heritage Easter Egg
    function initCulturalEasterEgg() {
        let clickCount = 0;
        const culturalElement = document.querySelector('.feedback-cultural');
        
        if (culturalElement) {
            culturalElement.addEventListener('click', () => {
                clickCount++;
                
                if (clickCount === 3) {
                    // Show cultural message
                    const message = document.createElement('div');
                    message.style.cssText = `
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: linear-gradient(45deg, #00ff88, #00d4ff);
                        color: #000;
                        padding: 2rem;
                        border-radius: 20px;
                        text-align: center;
                        z-index: 10000;
                        font-weight: 600;
                        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                    `;
                    message.innerHTML = `
                        <h3>🇳🇵 सत्यमेव जयते 🇳🇵</h3>
                        <p>Truth alone triumphs - My guiding principle</p>
                        <small>Click anywhere to continue</small>
                    `;
                    
                    document.body.appendChild(message);
                    
                    const removeMessage = () => {
                        message.remove();
                        document.removeEventListener('click', removeMessage);
                    };
                    
                    setTimeout(() => {
                        document.addEventListener('click', removeMessage);
                    }, 1000);
                    
                    clickCount = 0;
                }
            });
        }
    }

    // Enhanced Initialization with Error Handling
    window.addEventListener('load', () => {
        try {
            createSophisticatedStars();
            initSmoothScrolling();
            initMouseEffects();
            initScrollAnimations();
            initHeaderEffects();
            initializeTheme();
            initStarRating();
            initFeedbackForm();
            initFormValidation();
            initCulturalEasterEgg();
            
            // Professional loading sequence
            setTimeout(() => {
                const mainContent = document.querySelector('.main-content');
                if (mainContent) {
                    mainContent.style.opacity = '1';
                }
            }, 6000);
            
            console.log('Portfolio initialized successfully! 🚀');
            
        } catch (error) {
            console.error('Error initializing portfolio:', error);
        }
    });

    // Performance optimization
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(() => {
                ticking = false;
            });
            ticking = true;
        }
    }

    // Keyboard accessibility
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('click', () => {
        document.body.classList.remove('keyboard-navigation');
    });

    // Export functions for global access
    window.toggleTheme = toggleTheme;
    window.resetFeedbackForm = resetFeedbackForm;
