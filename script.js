// Smooth scroll for nav
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form alert
const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Message sent! We will contact you soon.');
    form.reset();
});

// Fade-in animation on scroll
const faders = document.querySelectorAll('.fade-in, .service-card, .project-card');
const appearOptions = { threshold:0.2, rootMargin:"0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));
