document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const toggleBtn = document.getElementById('darkModeToggle');

    // Smooth scrolling with navbar close
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                
                // Close navbar if expanded (mobile view)
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });

    // Dark Mode Toggle + Local Storage
    const prefersDark = localStorage.getItem('darkMode') === 'true';
    if (prefersDark) {
        document.body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️';
    }

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        toggleBtn.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('darkMode', isDark);
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        document.querySelector('.navbar')
            .classList.toggle('scrolled', window.scrollY > 50);
    });
});