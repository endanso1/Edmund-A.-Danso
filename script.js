document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const toggleBtn = document.getElementById('darkModeToggle');

    // Smooth scrolling with navbar close (only for internal anchor links)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only apply smooth scroll to internal links (like #about)
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });

                    // Close navbar if expanded (for mobile view)
                    if (navbarCollapse.classList.contains('show')) {
                        navbarToggler.click();
                    }
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

    // Navbar scroll shadow effect
    window.addEventListener('scroll', () => {
        document.querySelector('.navbar')
            .classList.toggle('scrolled', window.scrollY > 50);
    });
});

document.getElementById('quizForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission to process score

  let score = 0;
  let total = questions.length;

  for (let i = 0; i < total; i++) {
    const selected = document.querySelector(`input[name="q${i + 1}"]:checked`);
    if (selected && selected.value === questions[i].a) {
      score++;
    }
  }

  // Set values in hidden inputs
  const nameValue = document.getElementById('nameInput').value;
  document.getElementById('participantName').value = nameValue;
  document.getElementById('quizScore').value = `Scored ${score} out of ${total}`;

  // Optional: Display on screen
  document.getElementById('result').textContent = `Thank you, ${nameValue}. You scored ${score} out of ${total}.`;

  // Submit form to FormSubmit
  this.submit();
});
