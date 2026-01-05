// Smooth scrolling for navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form submit alert (placeholder)
const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Message sent! We will contact you soon.');
    form.reset();
});
