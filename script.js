/* Fade up + down */
const fades = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, { threshold: 0.15 });

fades.forEach(el => observer.observe(el));

/* Custom Cursor */
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

const hoverTargets = document.querySelectorAll(
  'a, button, .btn, .embed-box'
);

hoverTargets.forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('active'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});
