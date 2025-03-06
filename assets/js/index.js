// script.js
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const scrollToTopButton = document.getElementById('scroll-to-top');

// Set default theme to light mode
if (!localStorage.getItem('theme')) {
  localStorage.setItem('theme', 'light');
}

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
body.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? 'Light' : 'Dark';
updateButtonTheme(savedTheme); // Set initial button theme

// Toggle theme
themeToggle.addEventListener('click', () => {
  if (body.getAttribute('data-theme') === 'dark') {
    body.setAttribute('data-theme', 'light');
    themeToggle.textContent = 'Dark';
    localStorage.setItem('theme', 'light');
    updateButtonTheme('light'); // Update button theme
  } else {
    body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = 'Light';
    localStorage.setItem('theme', 'dark');
    updateButtonTheme('dark'); // Update button theme
  }
});

// Update button theme based on current theme
function updateButtonTheme(theme) {
  if (theme === 'dark') {
    themeToggle.style.backgroundColor = '#333'; // Dark background
    themeToggle.style.color = '#fff'; // Light text
  } else {
    themeToggle.style.backgroundColor = '#fff'; // Light background
    themeToggle.style.color = '#333'; // Dark text
  }
}

// Toggle mobile navigation menu
menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll-to-Top Button
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Show/Hide Scroll-to-Top Button
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { // Show button after scrolling 200px
    scrollToTopButton.style.display = 'flex';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});