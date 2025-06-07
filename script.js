
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
function toggleTheme() {
    // This is a placeholder - you can implement light/dark theme switching
    console.log('Theme toggle clicked');
}

// Smooth scrolling for navigation
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Initialize stars when page loads
window.addEventListener('load', () => {
    createStars();
});

// Add some interactive effects
document.addEventListener('mousemove', (e) => {
    const stars = document.querySelectorAll('.star');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    stars.forEach((star, index) => {
        if (index % 10 === 0) { // Only affect every 10th star for performance
            const speed = 0.5;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            star.style.transform = `translate(${x}px, ${y}px) scale(${star.style.transform.includes('scale') ? star.style.transform.split('scale(')[1].split(')')[0] : 1})`;
        }
    });
});
