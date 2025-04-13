document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a.nav-link').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Dark Mode Toggle + Local Storage
    const toggleBtn = document.getElementById('darkModeToggle');
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
  });
  
  