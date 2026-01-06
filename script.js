/* REMOVE HASH IF EXISTS */
if (window.location.hash) {
  history.replaceState(null, '', window.location.pathname);
}

/* SMOOTH SCROLL WITHOUT URL CHANGE */
function scrollToSection(name) {
  const section = document.querySelector(`[data-section="${name}"]`);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

document.querySelectorAll('[data-scroll]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    scrollToSection(link.dataset.scroll);
  });
});

document.querySelectorAll('.scroll-contact').forEach(btn => {
  btn.addEventListener('click', () => scrollToSection('contact'));
});

/* REVEAL ON SCROLL (UP & DOWN) */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('active', entry.isIntersecting);
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
